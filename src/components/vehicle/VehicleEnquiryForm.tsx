import React, { useState } from 'react';
import type { BookingLocationState } from '../../hooks/useBookingForm';
import { whatsappUrl } from '../../lib/contact';
import { vehicleEnquiryMessage } from '../../lib/messages';
import { hasErrors, nameError, NAME_MAX, phoneError, PHONE_LENGTH, restrictInput } from '../../lib/validation';
import type { Vehicle, VehicleEnquiryData } from '../../types';
import { Button } from '../ui/Button';
import { TextAreaField, TextField } from '../ui/FormFields';
import { SuccessNotice } from '../ui/Notices';

const EMPTY: VehicleEnquiryData = { name: '', phone: '', pickupCity: '', dates: '', message: '' };

/** Short enquiry coupon for one vehicle. The finished enquiry is sent to the desk over WhatsApp. */
export const VehicleEnquiryForm: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => {
  const [form, setForm] = useState<VehicleEnquiryData>(EMPTY);
  const [errors, setErrors] = useState<Partial<Record<keyof VehicleEnquiryData, string>>>({});
  const [ready, setReady] = useState(false);
  const bookingState: BookingLocationState = { preselectedVehicle: vehicle.id };

  const set = (key: keyof VehicleEnquiryData, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  /** Type into a restricted field: keep only allowed characters and explain anything removed. */
  const type = (key: 'name' | 'phone', raw: string) => {
    const { value, error } = restrictInput(key, raw);
    set(key, value);
    if (error) setErrors((prev) => ({ ...prev, [key]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    next.name = nameError(form.name);
    next.phone = phoneError(form.phone);
    setErrors(next);
    if (!hasErrors(next)) setReady(true);
  };

  return (
    <section aria-labelledby="enquiry-title" className="coupon p-5 sm:p-6">
      <p className="kicker">Direct Enquiry</p>
      <h2 id="enquiry-title" className="mt-1 text-2xl font-black">
        Reserve This Vehicle
      </h2>

      {ready ? (
        <SuccessNotice
          className="mt-5"
          title="Your enquiry is ready"
          actions={
            <>
              <Button href={whatsappUrl(vehicleEnquiryMessage(vehicle, form))} external fullWidth>
                Send on WhatsApp
              </Button>
              <Button variant="link" size="sm" onClick={() => setReady(false)}>
                Edit details
              </Button>
            </>
          }
        >
          Thank you, {form.name.trim()}. Send it to our dispatch desk on WhatsApp and we will reply with the tariff
          for the {vehicle.name}.
        </SuccessNotice>
      ) : (
        <form noValidate onSubmit={handleSubmit} className="mt-5 space-y-4">
          <TextField
            label="Your name"
            required
            autoComplete="name"
            maxLength={NAME_MAX}
            value={form.name}
            onChange={(e) => type('name', e.target.value)}
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
            onChange={(e) => type('phone', e.target.value)}
            error={errors.phone}
          />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 xl:grid-cols-2">
            <TextField
              label="Pickup city"
              optional
              value={form.pickupCity}
              onChange={(e) => set('pickupCity', e.target.value)}
            />
            <TextField
              label="Travel dates"
              optional
              placeholder="e.g. 20–24 Nov"
              value={form.dates}
              onChange={(e) => set('dates', e.target.value)}
            />
          </div>
          <TextAreaField
            label="Notes"
            optional
            rows={3}
            placeholder="Stops, hill roads, child seats…"
            value={form.message}
            onChange={(e) => set('message', e.target.value)}
          />
          <Button type="submit" fullWidth>
            Prepare Enquiry
          </Button>
        </form>
      )}

      <p className="mt-5 border-t border-paper-rule pt-4 text-center">
        <Button to="/book" state={bookingState} variant="link" size="sm">
          Or plan the full journey step by step
        </Button>
      </p>
    </section>
  );
};
