import React from 'react';
import { AlertCircle } from 'lucide-react';
import { CATEGORY_BLURBS } from '../../data/bookingContent';
import { FLEET_CATEGORIES } from '../../data/fleetData';
import type { BookingForm } from '../../hooks/useBookingForm';
import { capacityRange, formatCapacityRange, MAX_FLEET_CAPACITY, vehiclesInCategory } from '../../lib/fleet';
import { SelectField, TextAreaField } from '../ui/FormFields';
import { NumberStepper } from '../ui/NumberStepper';
import { ChoiceCard } from './ChoiceCard';
import { StepHeading } from './StepHeading';

type StepProps = Pick<BookingForm, 'data' | 'errors' | 'update' | 'selectCategory'>;

/** Step 2 — group size first, then the vehicle types that can seat that group. */
export const VehicleStep: React.FC<StepProps> = ({ data, errors, update, selectCategory }) => (
  <div className="space-y-6">
    <StepHeading step={2} title="Guests & Vehicle" description="Tell us the size of your group, then pick a vehicle that fits." />

    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      <NumberStepper
        label="Guests"
        min={1}
        max={MAX_FLEET_CAPACITY}
        value={data.passengers}
        onChange={(passengers) => update({ passengers })}
        error={errors.passengers}
        hint={`Our largest vehicle seats ${MAX_FLEET_CAPACITY}. For bigger groups, mention it in the notes.`}
      />
      <NumberStepper
        label="Luggage bags"
        min={0}
        max={40}
        value={data.luggageCount}
        onChange={(luggageCount) => update({ luggageCount })}
      />
    </div>

    <div>
      <p className="label-caps mb-2" id="vehicle-type-label">
        Vehicle type <span className="text-press" aria-hidden="true">*</span>
      </p>
      <div role="radiogroup" aria-labelledby="vehicle-type-label" className="grid grid-cols-1 gap-3 sm:grid-cols-2">
        {FLEET_CATEGORIES.map((category) => {
          const selected = data.vehicleCategory === category;
          const tooSmall = capacityRange(category).max < data.passengers;
          return (
            <ChoiceCard
              key={category}
              title={category}
              meta={formatCapacityRange(category)}
              description={tooSmall ? `Too small for ${data.passengers} guests` : CATEGORY_BLURBS[category]}
              selected={selected}
              disabled={tooSmall && !selected}
              onSelect={() => selectCategory(category)}
            />
          );
        })}
      </div>
      {errors.vehicleCategory && (
        <p role="alert" className="mt-2 flex items-center gap-1 font-sans text-xs font-medium text-press">
          <AlertCircle className="h-3.5 w-3.5" aria-hidden="true" /> {errors.vehicleCategory}
        </p>
      )}
    </div>

    {data.vehicleCategory && (
      <SelectField
        label="Preferred model"
        optional
        value={data.preferredVehicleId}
        onChange={(e) => update({ preferredVehicleId: e.target.value, passengers: data.passengers })}
      >
        <option value="">Any available {data.vehicleCategory}</option>
        {vehiclesInCategory(data.vehicleCategory).map((vehicle) => (
          <option key={vehicle.id} value={vehicle.id} disabled={vehicle.passengerCapacity < data.passengers}>
            {vehicle.name} — {vehicle.passengerCapacity} seats, {vehicle.luggageCapacity} bags
          </option>
        ))}
      </SelectField>
    )}

    <TextAreaField
      label="Special requests"
      optional
      rows={3}
      placeholder="Child seat, help for senior citizens, scenic stops…"
      value={data.specialRequests}
      onChange={(e) => update({ specialRequests: e.target.value })}
    />
  </div>
);
