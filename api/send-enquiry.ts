export type EnquiryPayload = {
  fullName?: string;
  name?: string;
  email?: string;
  phone?: string;
  company?: string;
  projectType?: string;
  service?: string;
  subject?: string;
  scope?: string;
  message?: string;
};

const VALID_ORIGINS = [
  'http://localhost:5173',
  'http://127.0.0.1:5173',
  'http://localhost:3000',
  'https://avenox-steel-three.vercel.app',
  'https://www.avenoxsteel.com',
  'https://avenoxsteel.com',
];

function normalizeText(value?: string) {
  return typeof value === 'string' ? value.trim() : '';
}

export function validateEnquiry(data: EnquiryPayload) {
  const errors: string[] = [];
  const fullName = normalizeText(data.fullName || data.name);
  const email = normalizeText(data.email);
  const phone = normalizeText(data.phone);
  const company = normalizeText(data.company);
  const service = normalizeText(data.projectType || data.service || data.subject);
  const message = normalizeText(data.message);

  if (!fullName) errors.push('Name is required.');
  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.push('Valid email is required.');
  }
  if (!phone) errors.push('Phone is required.');
  if (!service) errors.push('Service is required.');
  if (!message) errors.push('Message is required.');

  const result = {
    fullName,
    email,
    phone,
    company,
    service,
    message,
    scope: normalizeText(data.scope),
  };

  return {
    success: errors.length === 0,
    data: result,
    errors,
  };
}

function setCorsHeaders(req: any, res: any) {
  const origin = typeof req.headers?.origin === 'string' ? req.headers.origin : '';
  const allowsOrigin =
    origin && (VALID_ORIGINS.includes(origin) || /^https:\/\/.*\.vercel\.app$/.test(origin));

  res.setHeader('Access-Control-Allow-Origin', allowsOrigin ? origin : '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
}

export default async function handler(req: any, res: any) {
  setCorsHeaders(req, res);

  if (req.method === 'OPTIONS') {
    return res.status(204).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, error: 'Method not allowed.' });
  }

  let payload: EnquiryPayload = {};

  try {
    payload = typeof req.body === 'string' ? JSON.parse(req.body) : req.body || {};
  } catch {
    return res.status(400).json({ success: false, error: 'Request body is invalid JSON.' });
  }

  const validation = validateEnquiry(payload);

  if (!validation.success) {
    return res.status(400).json({
      success: false,
      error: 'Please complete all required fields with valid information.',
      details: validation.errors,
    });
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;
  const receiverEmail = process.env.ENQUIRY_RECEIVER_EMAIL;

  if (!accessKey || !receiverEmail) {
    return res.status(500).json({
      success: false,
      error: 'Email service is not configured. Please add WEB3FORMS_ACCESS_KEY and ENQUIRY_RECEIVER_EMAIL in Vercel environment variables.',
    });
  }

  try {
    // Prepare the form data for Web3Forms using URLSearchParams (Node.js compatible)
    const formData = new URLSearchParams();
    formData.append('access_key', accessKey);
    formData.append('subject', 'New Enquiry - Avenox Steel Services LLC');
    formData.append('from_name', validation.data.fullName);
    formData.append('email', validation.data.email);
    formData.append('phone', validation.data.phone);
    formData.append('company', validation.data.company || 'Not provided');
    formData.append('service', validation.data.service);
    formData.append('scope', validation.data.scope || 'Not provided');
    formData.append('message', validation.data.message);
    formData.append('redirect', 'false');

    // Add honeypot field for spam protection (empty value means not spam)
    formData.append('botcheck', '');

    // Submit to Web3Forms API
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: formData.toString(),
    });

    const responseText = await response.text();
    let result: any = {};

    try {
      result = JSON.parse(responseText);
    } catch (parseError) {
      console.error('Web3Forms response is not JSON:', responseText);
      // If Web3Forms returns non-JSON, still consider it successful if status is ok
      if (response.ok) {
        result = { success: true };
      } else {
        throw new Error(`Invalid response from Web3Forms: ${responseText}`);
      }
    }

    if (!response.ok || result.success === false) {
      throw new Error(result.message || result.error || 'Failed to submit enquiry to Web3Forms.');
    }

    return res.status(200).json({
      success: true,
      message: 'Your enquiry has been sent successfully. We will get back to you soon.',
    });
  } catch (error) {
    console.error('Failed to send enquiry via Web3Forms:', error);
    const message = error instanceof Error ? error.message : 'Unknown error';

    return res.status(500).json({
      success: false,
      error: `We could not send your enquiry right now. Please try again or email directly at ${receiverEmail}.`,
      details: message,
    });
  }
}
