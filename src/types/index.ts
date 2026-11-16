export type VehicleCategory =
  | 'Innova Crysta'
  | 'Tempo Traveller'
  | 'Force Urbania'
  | 'Luxury Bus / Coach';

export interface Vehicle {
  id: string;
  name: string;
  category: VehicleCategory;
  tagline: string;
  shortDescription: string;
  fullDescription: string;
  passengerCapacity: number;
  luggageCapacity: number;
  featured: boolean;
  idealFor: string[];
  features: string[];
  specs: {
    transmission: string;
    fuelType: string;
    acType: string;
    musicSystem: string;
    seatingArrangement: string;
    chargingPorts: string;
  };
  pricingPlaceholder: {
    rateType: string;
    indicativeRate: string;
    note: string;
  };
  availabilityStatus: 'Available' | 'On Request' | 'Seasonal Demand';
  images: {
    main: string;
    gallery: string[];
    alt: string;
  };
}

export type TripType = 'outstation' | 'local' | 'airport' | 'package';

export type ReplyPreference = 'whatsapp' | 'phone' | 'email';

export interface BookingFormData {
  tripType: TripType;
  pickupLocation: string;
  dropoffLocation: string;
  pickupDate: string;
  returnDate: string;
  pickupTime: string;
  vehicleCategory: VehicleCategory | '';
  preferredVehicleId: string;
  passengers: number;
  luggageCount: number;
  specialRequests: string;
  fullName: string;
  phoneNumber: string;
  email: string;
  communicationPreference: ReplyPreference;
}

export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  serviceInterest: string;
  message: string;
}

export interface VehicleEnquiryData {
  name: string;
  phone: string;
  pickupCity: string;
  dates: string;
  message: string;
}

/* ---- Content models kept for the archived destination / services / testimonial data ---- */

export interface Destination {
  id: string;
  name: string;
  region: string;
  category: 'Hill Station' | 'Heritage & Culture' | 'Coastal Escape' | 'Wildlife & Nature' | 'Pilgrimage Circuit';
  subtitle: string;
  editorialSnippet: string;
  fullDescription: string;
  distanceGuide: string;
  recommendedDuration: string;
  bestTimeToVisit: string;
  recommendedFleet: string[];
  highlights: string[];
  featured: boolean;
  images: {
    hero: string;
    gallery: string[];
  };
}

export interface ServiceItem {
  id: string;
  title: string;
  slug: string;
  editorialLabel: string;
  tagline: string;
  summary: string;
  fullDescription: string;
  benefits: string[];
  includedFeatures: string[];
  idealFor: string[];
  image: string;
  badge: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  dispatchType: string;
  passengerInitials: string;
  cityOrRoute: string;
  vehicleExperienced: string;
  datePlaceholder: string;
  editorialNote: string;
}
