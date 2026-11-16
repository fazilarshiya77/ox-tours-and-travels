export const SITE_CONFIG = {
  brandName: "OX TOURS AND TRAVELS",
  // Shown in the blackletter nameplate font, which must not be set in capitals.
  nameplate: "Ox Tours and Travels",
  nameplateShort: "Ox Tours",
  legalName: "Ox Tours & Travels Pvt. Ltd.",
  mastheadTagline: "YOUR JOURNEY. OUR RESPONSIBILITY.",
  corePhilosophy: "EVERY JOURNEY HAS A STORY. LET US DRIVE YOURS.",
  editorialRow: "TRAVEL • COMFORT • DISCOVERY • EXPERIENCE",
  volume: "VOL. XXIV — NO. 142",
  edition: "NATIONAL & HERITAGE TRAVEL EDITION",
  establishedNotice: "CHAUFFEURED EXCELLENCE & TOURIST TRANSPORTATION",
  priceNotice: "COMPLIMENTARY TRAVEL GAZETTE",
  
  // Business contact information placeholders (Configurable)
  contact: {
    primaryPhone: "+91 98765 43210",
    secondaryPhone: "+91 98765 43211",
    // PLACEHOLDER — replace with the real WhatsApp number: digits only, country code first, no "+".
    whatsappNumber: "919876543210",
    whatsappDisplay: "+91 98765 43210",
    email: "desk@oxtoursandtravels.com",
    reservationsEmail: "bookings@oxtoursandtravels.com",
    addressLine1: "Suite 401, Heritage Boulevard, Central Hub",
    addressLine2: "Travel & Fleet District, India",
    workingHours: "24 Hours Service • 7 Days a Week Chauffeur Support",
    dispatchOfficeHours: "Reservations Desk: 07:00 AM – 11:00 PM IST",
  },

  // WhatsApp links are built from contact.whatsappNumber (see src/lib/contact.ts),
  // so the number only ever needs changing in one place.
  socialLinks: {
    instagram: "https://instagram.com/oxtoursandtravels",
    facebook: "https://facebook.com/oxtoursandtravels",
    linkedin: "https://linkedin.com/company/oxtoursandtravels",
  },

  editorialPillars: [
    {
      number: "01",
      title: "Comfort First",
      lead: "Ergonomic seating, climate-controlled interiors, and silent cabins tuned for peaceful long-distance transit.",
      desc: "Every vehicle is inspected before roll-out, ensuring suspension compliance, spotlessly sanitized upholstery, and ample legroom."
    },
    {
      number: "02",
      title: "Reliable Journeys",
      lead: "Disciplined scheduling, seasoned professional chauffeurs, and zero unexpected downtime on the highway.",
      desc: "Our drivers are vetted route experts, trained in defensive highway navigation, punctuality, and gracious guest etiquette."
    },
    {
      number: "03",
      title: "Flexible Travel Solutions",
      lead: "Whether a 4-hour local city business transit or an 8-day inter-state circuit, our contracts adapt to your schedule.",
      desc: "Tailored pickup points, multiple halts, customized itineraries, and transparent billing without unstated surcharges."
    },
    {
      number: "04",
      title: "Customer-Centric Service",
      lead: "24/7 journey monitoring dispatch center standing by from departure until safe arrival.",
      desc: "Direct communication with your dispatch coordinator, proactive weather and road updates, and immediate assistance whenever needed."
    }
  ]
};
