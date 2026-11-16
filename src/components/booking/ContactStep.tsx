import React from 'react';
import { REPLY_OPTIONS } from '../../data/bookingContent';
import type { BookingFormData } from '../../types';
import type { BookingForm } from '../../hooks/useBookingForm';
import { EMAIL_MAX, NAME_MAX, PHONE_LENGTH, restrictInput } from '../../lib/validation';
import { TextField } from '../ui/FormFields';
import { SegmentedControl } from '../ui/SegmentedControl';
import { StepHeading } from './StepHeading';

type StepProps = Pick<BookingForm, 'data' | 'errors' | 'update' | 'setError'>;

/** Step 3 — who to contact, and how they would like the reply. */
export const ContactStep: React.FC<StepProps> = ({ data, errors, update, setError }) => {
  const wantsEmail = data.communicationPreference === 'email';

  /** Type into a restricted field: keep only allowed characters and explain anything that was removed. */
  const type = (field: 'fullName' | 'phoneNumber' | 'email', rule: 'name' | 'phone' | 'email', raw: string) => {
    const { value, error } = restrictInput(rule, raw);
    update({ [field]: value } as Partial<BookingFormData>);
    if (error) setError(field, error);
  };

  return (
    <div className="space-y-6">
      <StepHeading step={3} title="Your Details" description="Who should our dispatch desk contact with the tariff and vehicle details?" />

      <TextField
        label="Full name"
        required
        autoComplete="name"
        maxLength={NAME_MAX}
        value={data.fullName}
        onChange={(e) => type('fullName', 'name', e.target.value)}
        error={errors.fullName}
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField
          label="Mobile number"
          required
          type="tel"
          autoComplete="tel-national"
          inputMode="numeric"
          maxLength={PHONE_LENGTH + 5}
          placeholder="e.g. 9876543210"
          hint="10 digits, numbers only"
          value={data.phoneNumber}
          onChange={(e) => type('phoneNumber', 'phone', e.target.value)}
          error={errors.phoneNumber}
        />
        <TextField
          label="Email address"
          required={wantsEmail}
          optional={!wantsEmail}
          type="email"
          autoComplete="email"
          inputMode="email"
          maxLength={EMAIL_MAX}
          placeholder="e.g. 123@gmail.com"
          value={data.email}
          onChange={(e) => type('email', 'email', e.target.value)}
          error={errors.email}
        />
      </div>

      <div>
        <p className="label-caps mb-2">How should we reply?</p>
        <SegmentedControl
          label="How should we reply?"
          options={REPLY_OPTIONS}
          value={data.communicationPreference}
          onChange={(communicationPreference) => update({ communicationPreference, email: data.email })}
          className="flex w-full sm:inline-flex sm:w-auto"
        />
      </div>
    </div>
  );
};
