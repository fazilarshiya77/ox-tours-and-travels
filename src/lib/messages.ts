import { TRIP_TYPES, REPLY_OPTIONS } from '../data/bookingContent';
import { findVehicle } from './fleet';
import { formatTime, formatTravelDate } from './dates';
import type { BookingFormData, ContactFormData, VehicleEnquiryData, Vehicle } from '../types';

/** Join rows into a message. `optional()` rows that are empty are dropped; '' is a deliberate blank line. */
const lines = (rows: (string | null)[]) => rows.filter((row): row is string => row !== null).join('\n');

/** A "Label: value" row that disappears when the value is empty. */
const optional = (label: string, value: string) => (value.trim() ? `${label}: ${value.trim()}` : null);

export const tripTypeLabel = (data: BookingFormData) =>
  TRIP_TYPES.find((t) => t.value === data.tripType)?.label ?? data.tripType;

export const vehicleLabel = (data: BookingFormData) =>
  findVehicle(data.preferredVehicleId)?.name ?? `${data.vehicleCategory} (any available)`;

export const replyLabel = (data: BookingFormData) =>
  REPLY_OPTIONS.find((o) => o.value === data.communicationPreference)?.label ?? '';

/** The full journey request, ready to paste into WhatsApp or an email. */
export const bookingMessage = (data: BookingFormData, requestId: string) =>
  lines([
    `Journey request ${requestId}`,
    '',
    `Trip: ${tripTypeLabel(data)}`,
    `From: ${data.pickupLocation}`,
    `To: ${data.dropoffLocation || 'Local use within the city'}`,
    `Departure: ${formatTravelDate(data.pickupDate)}, ${formatTime(data.pickupTime)}`,
    optional('Return', formatTravelDate(data.returnDate)),
    `Vehicle: ${vehicleLabel(data)}`,
    `Guests: ${data.passengers}   Bags: ${data.luggageCount}`,
    optional('Notes', data.specialRequests),
    '',
    `Name: ${data.fullName}`,
    `Phone: ${data.phoneNumber}`,
    optional('Email', data.email),
    `Reply by: ${replyLabel(data)}`,
  ]);

export const vehicleEnquiryMessage = (vehicle: Vehicle, data: VehicleEnquiryData) =>
  lines([
    `Enquiry for the ${vehicle.name}`,
    '',
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    optional('Pickup', data.pickupCity),
    optional('Dates', data.dates),
    optional('Notes', data.message),
  ]);

export const contactMessage = (data: ContactFormData) =>
  lines([
    `Enquiry: ${data.subject.trim() || data.serviceInterest}`,
    '',
    `Interested in: ${data.serviceInterest}`,
    data.message.trim(),
    '',
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    optional('Email', data.email),
  ]);
