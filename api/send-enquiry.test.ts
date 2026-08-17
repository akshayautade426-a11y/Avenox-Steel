import { describe, expect, it } from 'vitest';
import { validateEnquiry } from './send-enquiry';

describe('validateEnquiry', () => {
  it('accepts a valid enquiry payload', () => {
    const result = validateEnquiry({
      fullName: 'Jane Doe',
      email: 'jane@example.com',
      phone: '+1 307 204 1263',
      company: 'Avenox Steel',
      projectType: 'industrial',
      message: 'Need a quote for structural steel detailing.',
    });

    expect(result.success).toBe(true);
  });

  it('rejects missing required fields', () => {
    const result = validateEnquiry({
      fullName: '',
      email: 'bad-email',
      phone: '',
      company: '',
      projectType: '',
      message: '',
    });

    expect(result.success).toBe(false);
    expect(result.errors).toContain('Name is required.');
    expect(result.errors).toContain('Valid email is required.');
    expect(result.errors).toContain('Phone is required.');
    expect(result.errors).toContain('Service is required.');
    expect(result.errors).toContain('Message is required.');
  });
});
