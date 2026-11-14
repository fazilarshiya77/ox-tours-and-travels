import { Vehicle } from '../types';

export const VEHICLE_CATEGORIES: string[] = [
  'All Vehicles',
  'Sedan',
  'SUV',
  'Innova / Premium MUV',
  'Tempo Traveller',
  'Force Urbania',
  'Mini Bus / Coach'
];

export const FLEET_DATA: Vehicle[] = [
  {
    id: 'executive-sedan',
    name: 'Executive Touring Sedan',
    category: 'Sedan',
    tagline: 'Quiet elegance for intimate city transit and seamless airport journeys.',
    shortDescription: 'Refined comfort designed for business professionals, small families, and relaxed city excursions.',
    fullDescription: 'The Executive Touring Sedan represents understated sophistication on the tarmac. Featuring acoustically isolated cabin architecture, supple plush seating, and generous rear legroom, it provides an uninterrupted environment whether you are preparing for a conference or unwinding after a long flight.',
    passengerCapacity: 4,
    luggageCapacity: 3,
    featured: true,
    idealFor: [
      'Airport & Station Transfers',
      'Corporate City Transit',
      'Couple & Solo Weekend Escapes',
      'VIP Hotel Shuttles'
    ],
    features: [
      'Dual-zone Automatic Climate Control',
      'Rear Reclining Ergonomic Seating',
      'USB-C Fast Charging at Every Seat',
      'Acoustic Glass for Quiet Highway Transit',
      'Complimentary Bottled Mineral Water',
      'Chauffeur Umbrella & Daily Newspaper'
    ],
    specs: {
      transmission: 'Chauffeur Driven • Smooth Automatic',
      fuelType: 'Premium Efficiency / Low Emission',
      acType: 'Independent Front & Rear Air Circulation',
      musicSystem: 'Hi-Fi Audio with Bluetooth Connectivity',
      seatingArrangement: '2 Front + 2 Spacious Rear Bucket Bench',
      chargingPorts: 'Front USB & Dual Rear Type-C Sockets'
    },
    pricingPlaceholder: {
      rateType: 'Custom Tariff Available Upon Request',
      indicativeRate: 'Tariff On Request',
      note: 'Rates structured by kilometre slabs, day packages, or multi-day itinerary requirements.'
    },
    availabilityStatus: 'Available',
    images: {
      main: 'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1550355291-bbee04a92027?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop'
      ],
      alt: 'Executive Touring Sedan - Ox Tours and Travels fleet'
    }
  },
  {
    id: 'luxury-suv',
    name: 'All-Terrain Luxury SUV',
    category: 'SUV',
    tagline: 'Commanding posture and rugged grace across winding hill roads and highways.',
    shortDescription: 'Elevated seating, superior ground clearance, and authoritative poise for challenging terrains.',
    fullDescription: 'Crafted for those whose journeys head towards winding ghats, misty hill stations, and expansive national highways. The All-Terrain Luxury SUV pairs assertive road command with serene interior appointments, absorbing uneven road surfaces while delivering panoramic vista views through expansive tinted glass.',
    passengerCapacity: 6,
    luggageCapacity: 4,
    featured: true,
    idealFor: [
      'Hill Station Expeditions & Mountain Circuits',
      'Rough Terrain Outstation Journeys',
      'Family Vacations with Extensive Luggage',
      'Executive Highway Tours'
    ],
    features: [
      'High Ground Clearance with Hill-Hold Support',
      'Panoramic Sunroof & Tinted UV-Cut Privacy Windows',
      'Independent Triple-Row Climate Control',
      'Reclining Second-Row Captain Chairs',
      'All-Weather Traction & Reinforced Suspension',
      'Premium Soundstage Audio'
    ],
    specs: {
      transmission: 'High-Torque Chauffeur Navigated',
      fuelType: 'Turbocharged Diesel / Hybrid',
      acType: 'Tri-Zone Climate Control with Rear Vents',
      musicSystem: 'Surround Sound Audio System',
      seatingArrangement: '2 + 2 Captain Chairs + 2 Rear Foldable',
      chargingPorts: 'Multiple 12V & USB-C Fast Charge Ports'
    },
    pricingPlaceholder: {
      rateType: 'Bespoke Package Rates',
      indicativeRate: 'Tariff On Request',
      note: 'Inclusive of seasoned hill-certified chauffeur, vehicle sanitization, and fuel allowance.'
    },
    availabilityStatus: 'Available',
    images: {
      main: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1506015391300-4802dc74de2e?q=80&w=1200&auto=format&fit=crop'
      ],
      alt: 'Luxury SUV - Ox Tours and Travels fleet'
    }
  },
  {
    id: 'premium-muv-innova',
    name: 'Innova / Premium MUV',
    category: 'Innova / Premium MUV',
    tagline: 'The undisputed gold standard of long-distance family and executive touring.',
    shortDescription: 'Unmatched ride composure, generous individual seating, and legendary reliability across thousands of miles.',
    fullDescription: 'Recognized across the subcontinent as the definitive flagship of comfortable road expeditions, our Premium MUVs (including the celebrated Innova class) blend limousine-like second-row comfort with rugged mechanical stamina. Ideal for multi-generational families and demanding interstate business road trips.',
    passengerCapacity: 7,
    luggageCapacity: 5,
    featured: true,
    idealFor: [
      'Multi-Day Outstation Family Vacations',
      'Pilgrimage & Heritage Circuits',
      'Corporate Delegation Travel',
      'Inter-City Highway Cruising'
    ],
    features: [
      'Plush Ottoman Style Captain Seats (Available)',
      'Individual Air Conditioning Ducts at Every Row',
      'Generous Footwell & Flexible Boot Space',
      'Soft-Spring Touring Suspension',
      'Reading Spotlights & Tray Tables',
      'Spacious Boot with Roof Luggage Carrier Option'
    ],
    specs: {
      transmission: 'High-Displacement Chauffeur Drive',
      fuelType: 'Refined Euro-VI Diesel',
      acType: 'Roof-Mounted Dual A/C with Thermostat',
      musicSystem: 'Multi-Speaker Audio with Auxiliary & Bluetooth',
      seatingArrangement: 'Available in 7-Seater & 8-Seater Configurations',
      chargingPorts: 'Central Console & Rear Row Sockets'
    },
    pricingPlaceholder: {
      rateType: 'Day Tariff & KM Based Options',
      indicativeRate: 'Tariff On Request',
      note: 'Transparent quotations based on route, toll clearances, and overnight itinerary schedules.'
    },
    availabilityStatus: 'Available',
    images: {
      main: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?q=80&w=1200&auto=format&fit=crop'
      ],
      alt: 'Innova / Premium MUV - Ox Tours and Travels'
    }
  },
  {
    id: 'force-urbania-luxury',
    name: 'Force Urbania Editorial Edition',
    category: 'Force Urbania',
    tagline: 'European luxury van design reimagined for sovereign group travel comfort.',
    shortDescription: 'World-class aerodynamics, high stand-up cabin ceiling, independent air suspension, and executive recliner seats.',
    fullDescription: 'The Force Urbania heralds a new era of dignified group travel. Built on world-standard monocoque architecture, it eliminates the harsh vibration and body roll of traditional commercial vans. With individual aircraft-style air louvers, whisper-quiet sound insulation, and full standing height, your group travels as one without sacrificing an ounce of personal luxury.',
    passengerCapacity: 13,
    luggageCapacity: 10,
    featured: true,
    idealFor: [
      'Luxury Corporate Retreats & Offsites',
      'Destination Weddings & VIP Guest Escorts',
      'High-End International Tourist Delegations',
      'Extended Family Holiday Expeditions'
    ],
    features: [
      'Monocoque Body Architecture for Limousine Stability',
      'Walk-Through High Roof (6+ Feet Cabin Clearance)',
      'Individual Aircraft Style Air Vents & Reading Lights',
      'Plush Reclining Bucket Seats with Armrests',
      'Large Panoramic Scenic Picture Windows',
      'Dedicated Large Rear Luggage Compartment'
    ],
    specs: {
      transmission: 'Mercedes-Derived Chauffeur Navigation',
      fuelType: 'Clean Common Rail Direct Injection Diesel',
      acType: 'Central Roof Duct Air Conditioning with Individual Vents',
      musicSystem: 'Multimedia Entertainment Screen & PA Microphone',
      seatingArrangement: '10 to 14 Executive Recliners + Chauffeur',
      chargingPorts: 'Personal USB Port at Every Individual Seat'
    },
    pricingPlaceholder: {
      rateType: 'Charter Rate Structure',
      indicativeRate: 'Tariff On Request',
      note: 'Available for daily charters, wedding contracts, and multi-city discovery packages.'
    },
    availabilityStatus: 'Available',
    images: {
      main: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop'
      ],
      alt: 'Force Urbania Luxury Van - Ox Tours and Travels'
    }
  },
  {
    id: 'tempo-traveller-deluxe',
    name: 'Deluxe Tempo Traveller',
    category: 'Tempo Traveller',
    tagline: 'The timeless backbone of joint family holidays and medium-size group expeditions.',
    shortDescription: 'Spacious aisle, 2x1 seating ergonomics, powerful chilled AC, and generous overhead parcel racks.',
    fullDescription: 'When extended families or collegiate friend circles embark on a shared passage, the Deluxe Tempo Traveller delivers unparalleled shared camaraderie. Engineered with customized upholstery, wide sliding curtains, music audio setups, and massive rear boot storage for all luggage trunks.',
    passengerCapacity: 17,
    luggageCapacity: 14,
    featured: true,
    idealFor: [
      'Extended Family Vacations & Reunions',
      'Pilgrimage Yatras & Temple Circuits',
      'Adventure & Trekking Group Transfers',
      'School & University Faculty Tours'
    ],
    features: [
      'High-Output Chilled Air Conditioning',
      'Wide Center Aisle for Effortless Movement',
      'Comfortable 2x1 Pushback Recliner Seats',
      'Overhead Parcel Racks for Hand Luggage',
      'LED Mood Lighting & Curtains on Windows',
      'Reinforced Roof Carrier for Excess Baggage'
    ],
    specs: {
      transmission: 'Heavy-Duty Commercial Chauffeur Drive',
      fuelType: 'High-Efficiency Turbo Diesel',
      acType: 'Dual Compressor Commercial Air Conditioning',
      musicSystem: 'Stereo Sound System with Aux/Mic Facility',
      seatingArrangement: '12, 17, and 20 Seater Options',
      chargingPorts: 'Shared Row-Wise Charging Outlets'
    },
    pricingPlaceholder: {
      rateType: 'Group Tour Km-Based Packages',
      indicativeRate: 'Tariff On Request',
      note: 'Quotes include toll tax estimations, driver night allowance, and fuel allocation.'
    },
    availabilityStatus: 'Available',
    images: {
      main: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?q=80&w=1200&auto=format&fit=crop'
      ],
      alt: 'Tempo Traveller Deluxe - Ox Tours and Travels'
    }
  },
  {
    id: 'luxury-mini-bus-coach',
    name: 'Grand Touring Mini Bus & Coach',
    category: 'Mini Bus / Coach',
    tagline: 'Sovereign group transit for grand delegations, corporate conventions, and weddings.',
    shortDescription: 'Air-suspended highway cruising with massive luggage hold, pneumatic passenger doors, and panoramic views.',
    fullDescription: 'Designed for substantial passenger contingents requiring seamless logistical choreography. Our Grand Touring Coaches eliminate the friction of multi-car coordination. Complete with air-suspension ride dynamics, executive pushback seating, and immense underbelly luggage bays.',
    passengerCapacity: 26,
    luggageCapacity: 25,
    featured: false,
    idealFor: [
      'Major Corporate Conferences & Summits',
      'Grand Wedding Guest Logistics',
      'Inbound International Tourism Groups',
      'Inter-State Cultural & Sports Delegations'
    ],
    features: [
      'Pneumatic Air Suspension for Silky Highway Cruising',
      'Full Coach Ducted Climate Control',
      'Deep Underfloor Baggage Holds for Heavy Luggage',
      'Public Address (PA) Audio & Tour Guide System',
      'Safety Emergency Exits & First Aid Station',
      'High Seating Position with Magnificent Panoramic Sightlines'
    ],
    specs: {
      transmission: 'Professional Heavy Highway Commercial Drive',
      fuelType: 'Commercial Clean Diesel',
      acType: 'Roof-Mounted High Tonnage Air Handling Unit',
      musicSystem: 'Full Coach Audio PA & Video Screen Ready',
      seatingArrangement: '2x2 Reclining Luxury Coach Layout (26-35 Seats)',
      chargingPorts: 'Convenient Multi-Point Sockets'
    },
    pricingPlaceholder: {
      rateType: 'Charter Contract Basis',
      indicativeRate: 'Tariff On Request',
      note: 'Customized contract pricing tailored to group itinerary, distance, and parking clearances.'
    },
    availabilityStatus: 'On Request',
    images: {
      main: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=1200&auto=format&fit=crop'
      ],
      alt: 'Luxury Mini Bus Coach - Ox Tours and Travels'
    }
  }
];
