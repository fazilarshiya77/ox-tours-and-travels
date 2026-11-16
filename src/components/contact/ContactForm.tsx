import React, { useState } from 'react';
import { Send } from 'lucide-react';
import { SERVICE_INTERESTS } from '../../data/contactContent';
import { mailtoUrl, whatsappUrl } from '../../lib/contact';
import { contactMessage } from '../../lib/messages';
import {
  EMAIL_MAX,
  hasErrors,
  nameError,
  NAME_MAX,
  optionalEmailError,
  phoneError,
  PHONE_LENGTH,
  restrictInput,
  type RestrictedField,
} from '../../lib/validation';
import type { ContactFormData } from '../../types';
import { Button } from '../ui/Button';
import { SelectField, TextAreaField, TextField } from '../ui/FormFields';
import { SuccessNotice } from '../ui/Notices';

const EMPTY: ContactFormData = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  serviceInterest: SERVICE_INTERESTS[0],
  message: '',
};

/** General enquiry coupon. The finished enquiry is sent over WhatsApp or email. */
export const ContactForm: React.FC = () => {
  const [form, setForm] = useState<ContactFormData>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [ready, setReady] = useState(false);

  const set = (key: keyof ContactFormData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  /** Type into a restricted field: keep only allowed characters and explain anything removed. */
  const type = (key: 'name' | 'phone' | 'email', rule: RestrictedField, raw: string) => {
    const { value, error } = restrictInput(rule, raw);
    set(key, value);
    if (error) setErrors((prev) => ({ ...prev, [key]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    next.name = nameError(form.name);
    next.phone = phoneError(form.phone);
    next.email = optionalEmailError(form.email);
    if (form.message.trim().length < 10) next.message = 'Tell us a little about your journey (at least 10 characters).';
    setErrors(next);
    if (!hasErrors(next)) setReady(true);
  };

  if (ready) {
    const message = contactMessage(form);
    return (
      <SuccessNotice
        title="Your enquiry is ready to send"
        actions={
          <>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <Button href={whatsappUrl(message)} external>
                Send on WhatsApp
              </Button>
              <Button href={mailtoUrl(form.subject.trim() || `Enquiry: ${form.serviceInterest}`, message)} variant="secondary">
                Send by Email
              </Button>
            </div>
            <Button variant="link" size="sm" onClick={() => setReady(false)}>
              Edit enquiry
            </Button>
          </>
        }
      >
        Thank you, <strong>{form.name.trim()}</strong>. Choose how to send it to our dispatch desk, and a coordinator
        will reply with availability and a quotation.
      </SuccessNotice>
    );
  }

  return (
    <form noValidate onSubmit={handleSubmit} className="coupon space-y-4 p-5 sm:p-8">
      <div className="border-b border-ink-black pb-4">
        <p className="kicker">Write to the Desk</p>
        <h2 className="mt-1 text-2xl font-black sm:text-3xl">Send an Enquiry</h2>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField
          label="Full name"
          required
          autoComplete="name"
          maxLength={NAME_MAX}
          value={form.name}
          onChange={(e) => type('name', 'name', e.target.value)}
          error={errors.name}
        />
        <TextField
          label="Phone number"
          required
          type="tel"
          autoComplete="tel-national"
          inputMode="numeric"
          maxLength={PHONE_LENGTH + 5}
          placeholder="e.g. 9876543210"
          hint="10 digits, numbers only"
          value={form.phone}
          onChange={(e) => type('phone', 'phone', e.target.value)}
          error={errors.phone}
        />
        <TextField
          label="Email address"
          optional
          type="email"
          autoComplete="email"
          inputMode="email"
          maxLength={EMAIL_MAX}
          placeholder="e.g. 123@gmail.com"
          value={form.email}
          onChange={(e) => type('email', 'email', e.target.value)}
          error={errors.email}
        />
        <SelectField
          label="Interested in"
          value={form.serviceInterest}
          onChange={(e) => set('serviceInterest', e.target.value)}
        >
          {SERVICE_INTERESTS.map((service) => (
            <option key={service} value={service}>
              {service}
            </option>
          ))}
        </SelectField>
      </div>

      <TextField
        label="Subject"
        optional
        placeholder="e.g. Quote for a 4-day hill station trip"
        value={form.subject}
        onChange={(e) => set('subject', e.target.value)}
      />
      <TextAreaField
        label="Journey details"
        required
        placeholder="Pickup dates, destinations, number of guests and any vehicle preference…"
        value={form.message}
        onChange={(e) => set('message', e.target.value)}
        error={errors.message}
      />

      <Button type="submit" size="lg" fullWidth>
        <Send className="h-4 w-4" aria-hidden="true" />
        <span>Prepare Enquiry</span>
      </Button>
    </form>
  );
};
