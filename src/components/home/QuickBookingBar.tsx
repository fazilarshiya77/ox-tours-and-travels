import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Calendar, Car, MapPin, Users } from 'lucide-react';
import { QUICK_TRIP_TYPES } from '../../data/bookingContent';
import { FLEET_CATEGORIES } from '../../data/fleetData';
import type { BookingLocationState } from '../../hooks/useBookingForm';
import { earliestPickupDate } from '../../lib/dates';
import { MAX_FLEET_CAPACITY } from '../../lib/fleet';
import { hasErrors } from '../../lib/validation';
import type { TripType, VehicleCategory } from '../../types';
import { Button } from '../ui/Button';
import { SelectField, TextField } from '../ui/FormFields';
import { SegmentedControl } from '../ui/SegmentedControl';
import { Reveal } from '../ui/Reveal';

interface QuickForm {
  tripType: TripType;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  returnDate: string;
  vehicleCategory: VehicleCategory | '';
  passengers: number;
}

const INITIAL: QuickForm = {
  tripType: 'outstation',
  pickupLocation: '',
  dropoffLocation: '',
  pickupDate: '',
  returnDate: '',
  vehicleCategory: '',
  passengers: 2,
};

const GUEST_OPTIONS = Array.from({ length: MAX_FLEET_CAPACITY }, (_, i) => i + 1);

/** Front-page booking desk: collects the route, then hands over to the full booking wizard. */
export const QuickBookingBar: React.FC<{ className?: string }> = ({ className }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState<QuickForm>(INITIAL);
  const [errors, setErrors] = useState<Partial<Record<keyof QuickForm, string>>>({});
  const isLocal = form.tripType === 'local';
  const minDate = earliestPickupDate();

  const set = <K extends keyof QuickForm>(key: K, value: QuickForm[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const next: typeof errors = {};
    if (!form.pickupLocation.trim()) next.pickupLocation = 'Enter the pickup city.';
    if (!isLocal && !form.dropoffLocation.trim()) next.dropoffLocation = 'Enter the destination.';
    if (!form.pickupDate) next.pickupDate = 'Choose a date.';
    setErrors(next);
    if (hasErrors(next)) return;

    const state: BookingLocationState = { quickPrefill: form };
    navigate('/book', { state });
  };

  return (
    <section aria-labelledby="booking-desk-title" className={className}>
      <Reveal className="notice-box p-5 sm:p-7">
        <div className="flex flex-col gap-4 border-b border-ink-black pb-5 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker">The Booking Desk</p>
            <h2 id="booking-desk-title" className="headline mt-1 text-3xl sm:text-4xl">
              Plan Your Journey
            </h2>
            <p className="mt-1 text-ink-muted">Tell us the route and we will reply with availability and a tariff.</p>
          </div>
          <SegmentedControl
            label="Trip type"
            options={QUICK_TRIP_TYPES}
            value={form.tripType}
            onChange={(value) => set('tripType', value)}
            className="self-start md:self-auto"
          />
        </div>

        <form noValidate onSubmit={handleSubmit} className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12">
          <TextField
            containerClassName="lg:col-span-4"
            label="Pickup city or address"
            required
            icon={MapPin}
            placeholder="e.g. City or airport"
            autoComplete="off"
            value={form.pickupLocation}
            onChange={(e) => set('pickupLocation', e.target.value)}
            error={errors.pickupLocation}
          />
          <TextField
            containerClassName="lg:col-span-4"
            label="Destination"
            required={!isLocal}
            optional={isLocal}
            icon={MapPin}
            placeholder={isLocal ? 'Local use within the city' : 'e.g. Destination or hotel'}
            autoComplete="off"
            value={form.dropoffLocation}
            onChange={(e) => set('dropoffLocation', e.target.value)}
            error={errors.dropoffLocation}
          />
          <TextField
            containerClassName="lg:col-span-2"
            label="Departure"
            required
            icon={Calendar}
            type="date"
            min={minDate}
            value={form.pickupDate}
            onChange={(e) => set('pickupDate', e.target.value)}
            error={errors.pickupDate}
          />
          <TextField
            containerClassName="lg:col-span-2"
            label="Return"
            icon={Calendar}
            type="date"
            min={form.pickupDate || minDate}
            value={form.returnDate}
            onChange={(e) => set('returnDate', e.target.value)}
          />
          <SelectField
            containerClassName="lg:col-span-4"
            label="Vehicle type"
            icon={Car}
            value={form.vehicleCategory}
            onChange={(e) => set('vehicleCategory', e.target.value as VehicleCategory | '')}
          >
            <option value="">Not sure yet</option>
            {FLEET_CATEGORIES.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </SelectField>
          <SelectField
            containerClassName="lg:col-span-2"
            label="Guests"
            icon={Users}
            value={form.passengers}
            onChange={(e) => set('passengers', Number(e.target.value))}
          >
            {GUEST_OPTIONS.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </SelectField>

          <div className="flex items-end sm:col-span-2 lg:col-span-6 lg:justify-end">
            <Button type="submit" size="lg" className="w-full lg:w-auto">
              <span>Continue Booking</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
          </div>
        </form>
      </Reveal>
    </section>
  );
};
