import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';

type FormState = {
  fullName: string;
  company: string;
  email: string;
  phone: string;
  projectType: string;
  scope: string;
  message: string;
};

const initialForm: FormState = {
  fullName: '',
  company: '',
  email: '',
  phone: '',
  projectType: '',
  scope: '',
  message: '',
};

export default function ContactSection() {
  const [formData, setFormData] = useState<FormState>(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error'; message: string } | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    if (status) {
      setStatus(null);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isSubmitting) {
      return;
    }

    const trimmed = {
      ...formData,
      fullName: formData.fullName.trim(),
      company: formData.company.trim(),
      email: formData.email.trim(),
      phone: formData.phone.trim(),
      projectType: formData.projectType.trim(),
      scope: formData.scope.trim(),
      message: formData.message.trim(),
    };

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!trimmed.fullName || !trimmed.email || !trimmed.phone || !trimmed.projectType || !trimmed.message) {
      setStatus({
        type: 'error',
        message: 'Please complete all required fields before submitting.',
      });
      return;
    }

    if (!emailPattern.test(trimmed.email)) {
      setStatus({
        type: 'error',
        message: 'Please enter a valid email address.',
      });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      // Get the access key from environment variables
      const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY;
      
      if (!accessKey) {
        throw new Error('Web3Forms access key is not configured.');
      }

      // Prepare form data for Web3Forms
      const formDataToSubmit = new FormData();
      formDataToSubmit.append('access_key', accessKey);
      formDataToSubmit.append('subject', 'New Enquiry - Avenox Steel Services LLC');
      formDataToSubmit.append('from_name', trimmed.fullName);
      formDataToSubmit.append('email', trimmed.email);
      formDataToSubmit.append('phone', trimmed.phone);
      formDataToSubmit.append('company', trimmed.company || 'Not provided');
      formDataToSubmit.append('service', trimmed.projectType);
      formDataToSubmit.append('scope', trimmed.scope || 'Not provided');
      formDataToSubmit.append('message', trimmed.message);
      formDataToSubmit.append('botcheck', ''); // Honeypot field for spam protection
      formDataToSubmit.append('redirect', 'false');

      // Submit directly to Web3Forms API
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSubmit,
      });

      const result = await response.json();

      if (!response.ok || result.success === false) {
        throw new Error(result.message || 'Failed to send enquiry. Please try again.');
      }

      setStatus({
        type: 'success',
        message: 'Your enquiry has been sent successfully. We will get back to you soon.',
      });
      setFormData(initialForm);
    } catch (error) {
      setStatus({
        type: 'error',
        message: error instanceof Error ? error.message : 'Something went wrong while sending your enquiry.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="section-spacing bg-gray-50">
      <div className="container">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-4">
            <div className="h-1 w-12 bg-primary rounded-full"></div>
          </div>
          <h2 className="text-4xl font-bold mb-4 text-foreground">Let's Build Something Strong</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Get in touch with our team to discuss your steel detailing and engineering needs.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-bold mb-8 text-foreground">Contact Information</h3>

            {/* Email */}
            <div className="mb-8 flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Email</h4>
                <a href="mailto:info@avenoxsteel.com" className="text-muted-foreground hover:text-primary transition-colors">
                  info@avenoxsteel.com
                </a>
                <br />
                <a href="mailto:estimating@avenoxsteel.com" className="text-muted-foreground hover:text-primary transition-colors">
                  estimating@avenoxsteel.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="mb-8 flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Phone</h4>
                <a href="tel:+13072041263" className="text-muted-foreground hover:text-primary transition-colors">
                  +1 307 204 1263
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="mb-8 flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Address</h4>
                <p className="text-muted-foreground max-w-sm">
                  30 N Gould St Ste R
                  <br />
                  Sheridan, WY 82801,  United States
                </p>
              </div>
            </div>

            {/* Business Hours */}
            <div className="flex gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-1">Business Hours</h4>
                <p className="text-muted-foreground text-sm">
                  Monday - Friday: 8:00 AM - 6:00 PM
                  <br />
                  Sunday & Saturday : Closed
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg p-8 shadow-sm border border-gray-100">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Company Name
                  </label>
                  <Input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    placeholder="Your Company"
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                    className="w-full"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone *
                  </label>
                  <Input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="+1 307 2041 263"
                    required
                    className="w-full"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Project Type *
                  </label>
                  <select
                    name="projectType"
                    value={formData.projectType}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select a type</option>
                    <option value="commercial">Commercial</option>
                    <option value="industrial">Industrial</option>
                    <option value="warehouse">Warehouse</option>
                    <option value="residential">Residential</option>
                    <option value="infrastructure">Infrastructure</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Estimated Scope
                  </label>
                  <select
                    name="scope"
                    value={formData.scope}
                    onChange={handleChange}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                  >
                    <option value="">Select scope</option>
                    <option value="small">Small (&lt; 5,000 tons)</option>
                    <option value="medium">Medium (5,000 - 25,000 tons)</option>
                    <option value="large">Large (25,000+ tons)</option>
                  </select>
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Project Details *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project..."
                  required
                  rows={5 as any}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>

              {status && (
                <div
                  className={`mb-6 rounded-md border px-4 py-3 text-sm ${
                    status.type === 'success'
                      ? 'border-green-200 bg-green-50 text-green-700'
                      : 'border-red-200 bg-red-50 text-red-700'
                  }`}
                  aria-live="polite"
                >
                  {status.message}
                </div>
              )}

              <Button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-primary text-white hover:bg-primary/90 py-3 text-lg font-semibold disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSubmitting ? 'Sending...' : 'Submit Project Inquiry'}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
