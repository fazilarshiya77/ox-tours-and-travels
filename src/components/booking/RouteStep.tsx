import React from 'react';
import { Calendar, Clock, MapPin } from 'lucide-react';
import { TRIP_TYPES } from '../../data/bookingContent';
import type { BookingForm } from '../../hooks/useBookingForm';
import { earliestPickupDate } from '../../lib/dates';
import { TextField } from '../ui/FormFields';
import { ChoiceCard } from './ChoiceCard';
import { StepHeading } from './StepHeading';

type StepProps = Pick<BookingForm, 'data' | 'errors' | 'update'>;

/** Step 1 — trip type, pickup, destination, dates and time. */
export const RouteStep: React.FC<StepProps> = ({ data, errors, update }) => {
  const isLocal = data.tripType === 'local';
  const minDate = earliestPickupDate();

  return (
    <div className="space-y-6">
      <StepHeading step={1} title="Route & Schedule" description="Where does the trip start, where are you going, and when?" />

      <div>
        <p className="label-caps mb-2" id="trip-type-label">
          Type of trip
        </p>
        <div role="radiogroup" aria-labelledby="trip-type-label" className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {TRIP_TYPES.map((type) => (
            <ChoiceCard
              key={type.value}
              title={type.label}
              description={type.description}
              selected={data.tripType === type.value}
              onSelect={() => update({ tripType: type.value })}
            />
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <TextField
          label="Pickup point or city"
          required
          icon={MapPin}
          placeholder="e.g. Hotel, home or city"
          value={data.pickupLocation}
          onChange={(e) => update({ pickupLocation: e.target.value })}
          error={errors.pickupLocation}
        />
        <TextField
          label="Destination"
          required={!isLocal}
          optional={isLocal}
          icon={MapPin}
          placeholder={isLocal ? 'Local use within the city' : 'e.g. Hill station or city'}
          value={data.dropoffLocation}
          onChange={(e) => update({ dropoffLocation: e.target.value })}
          error={errors.dropoffLocation}
        />
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        <TextField
          label="Departure date"
          required
          icon={Calendar}
          type="date"
          min={minDate}
          value={data.pickupDate}
          onChange={(e) => update({ pickupDate: e.target.value })}
          error={errors.pickupDate}
        />
        <TextField
          label="Return date"
          optional
          icon={Calendar}
          type="date"
          min={data.pickupDate || minDate}
          value={data.returnDate}
          onChange={(e) => update({ returnDate: e.target.value })}
          error={errors.returnDate}
        />
        <TextField
          label="Departure time"
          icon={Clock}
          type="time"
          value={data.pickupTime}
          onChange={(e) => update({ pickupTime: e.target.value })}
        />
      </div>
    </div>
  );
};
