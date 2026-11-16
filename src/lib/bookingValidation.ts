import { capacityRange, findVehicle } from './fleet';
import { earliestPickupDate } from './dates';
import { nameError, optionalEmailError, phoneError } from './validation';
import type { BookingFormData } from '../types';

export type BookingErrors = Partial<Record<keyof BookingFormData, string>>;

const validateRoute = (data: BookingFormData): BookingErrors => {
  const errors: BookingErrors = {};
  if (!data.pickupLocation.trim()) errors.pickupLocation = 'Enter where the journey starts.';
  if (data.tripType !== 'local' && !data.dropoffLocation.trim()) {
    errors.dropoffLocation = 'Enter the destination.';
  }
  if (!data.pickupDate) {
    errors.pickupDate = 'Choose a departure date.';
  } else if (data.pickupDate < earliestPickupDate()) {
    errors.pickupDate = 'Departure must be tomorrow or later.';
  }
  if (data.returnDate && data.pickupDate && data.returnDate < data.pickupDate) {
    errors.returnDate = 'Return cannot be before departure.';
  }
  return errors;
};

const validateVehicle = (data: BookingFormData): BookingErrors => {
  const errors: BookingErrors = {};
  if (!data.vehicleCategory) {
    errors.vehicleCategory = 'Choose a vehicle type.';
    return errors;
  }
  if (!data.passengers || data.passengers < 1) {
    errors.passengers = 'Enter the number of guests.';
    return errors;
  }
  const vehicle = findVehicle(data.preferredVehicleId);
  const seats = vehicle ? vehicle.passengerCapacity : capacityRange(data.vehicleCategory).max;
  if (data.passengers > seats) {
    const name = vehicle ? `The ${vehicle.name}` : `${data.vehicleCategory}`;
    errors.passengers = `${name} seats up to ${seats} guests. Choose a larger vehicle or reduce the group.`;
  }
  return errors;
};

const validateContact = (data: BookingFormData): BookingErrors => {
  const errors: BookingErrors = {};
  const fullName = nameError(data.fullName);
  if (fullName) errors.fullName = fullName;
  const phone = phoneError(data.phoneNumber);
  if (phone) errors.phoneNumber = phone;
  const email = optionalEmailError(data.email);
  if (email) errors.email = email;
  else if (!data.email.trim() && data.communicationPreference === 'email') {
    errors.email = 'Enter an email address so we can reply by email.';
  }
  return errors;
};

/** Steps 1–3 collect data; step 4 is a read-only review. */
export const validateStep = (step: number, data: BookingFormData): BookingErrors => {
  if (step === 1) return validateRoute(data);
  if (step === 2) return validateVehicle(data);
  if (step === 3) return validateContact(data);
  return {};
};
