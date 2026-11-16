import { formatTime, formatTravelDate } from '../../lib/dates';
import { replyLabel, tripTypeLabel, vehicleLabel } from '../../lib/messages';
import type { BookingFormData } from '../../types';
import type { SummaryItem } from '../ui/SummaryList';

/** The journey as label / value rows, shared by the review step and the request slip. */
export const journeyItems = (data: BookingFormData): SummaryItem[] => [
  {
    label: 'Route',
    value: `${data.pickupLocation} → ${data.dropoffLocation || 'Local use'}`,
    detail: tripTypeLabel(data),
  },
  {
    label: 'Departure',
    value: `${formatTravelDate(data.pickupDate)}, ${formatTime(data.pickupTime)}`,
    detail: data.returnDate ? `Return ${formatTravelDate(data.returnDate)}` : 'No return date given',
  },
  {
    label: 'Vehicle',
    value: vehicleLabel(data),
    detail: `${data.passengers} guests · ${data.luggageCount} bags`,
  },
];

export const contactItems = (data: BookingFormData): SummaryItem[] => [
  {
    label: 'Passenger',
    value: data.fullName,
    detail: [data.phoneNumber, data.email.trim()].filter(Boolean).join(' · '),
  },
  {
    label: 'Reply by',
    value: replyLabel(data),
  },
];
