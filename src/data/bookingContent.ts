import type { BookingFormData, ReplyPreference, TripType, VehicleCategory } from '../types';

export const TRIP_TYPES: { value: TripType; label: string; description: string }[] = [
  { value: 'outstation', label: 'Outstation Tour', description: 'City to city by highway' },
  { value: 'local', label: 'Local City Rental', description: 'Hourly use within the city' },
  { value: 'airport', label: 'Airport Transfer', description: 'Pickup or drop at a terminal' },
  { value: 'package', label: 'Tour Package', description: 'Multi-day planned circuit' },
];

/** The three trip types offered on the front-page booking desk. */
export const QUICK_TRIP_TYPES = TRIP_TYPES.filter((t) => t.value !== 'package').map((t) => ({
  value: t.value,
  label: t.label.split(' ')[0],
}));

export const REPLY_OPTIONS: { value: ReplyPreference; label: string }[] = [
  { value: 'whatsapp', label: 'WhatsApp' },
  { value: 'phone', label: 'Phone call' },
  { value: 'email', label: 'Email' },
];

export const BOOKING_STEPS = [
  { number: 1, title: 'Route', description: 'Where and when' },
  { number: 2, title: 'Vehicle', description: 'Guests and vehicle' },
  { number: 3, title: 'Contact', description: 'Your details' },
  { number: 4, title: 'Review', description: 'Check and send' },
];

export const CATEGORY_BLURBS: Record<VehicleCategory, string> = {
  'Innova Crysta': 'Family and executive MUV with captain seats',
  'Tempo Traveller': 'Group vans with pushback seats and a walk-through aisle',
  'Force Urbania': 'Standing-height luxury vans with reclining seats',
  'Luxury Bus / Coach': 'Air-suspended touring coach for large groups',
};

export const EMPTY_BOOKING: BookingFormData = {
  tripType: 'outstation',
  pickupLocation: '',
  dropoffLocation: '',
  pickupDate: '',
  returnDate: '',
  pickupTime: '08:00',
  vehicleCategory: '',
  preferredVehicleId: '',
  passengers: 2,
  luggageCount: 2,
  specialRequests: '',
  fullName: '',
  phoneNumber: '',
  email: '',
  communicationPreference: 'whatsapp',
};
