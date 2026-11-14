import { Vehicle } from '../types';

export const VEHICLE_CATEGORIES: string[] = [
  'All Vehicles',
  'Innova Crysta',
  'Tempo Traveller',
  'Force Urbania',
  'Luxury Bus / Coach'
];

export const FLEET_DATA: Vehicle[] = [
  {
    id: 'innova-crysta',
    name: 'Toyota Innova Crysta',
    category: 'Innova Crysta',
    tagline: 'The undisputed gold standard of family road trips and executive highway touring.',
    shortDescription: 'Plush captain chairs, exceptional ride composure, multi-zone air conditioning, and renowned reliability.',
    fullDescription: 'The Toyota Innova Crysta is celebrated across the subcontinent as the definitive flagship of comfortable long-distance travel. Equipped with plush second-row captain seats, whisper-quiet cabin acoustics, independent roof-mounted air conditioning vents for every row, and flexible luggage room, it guarantees a fatigue-free journey for outstation tours, airport pick-and-drops, and corporate delegacy transit.',
    passengerCapacity: 7,
    luggageCapacity: 5,
    featured: true,
    idealFor: [
      'Multi-Day Outstation Family Holidays',
      'VIP Airport & Railway Transfers',
      'Corporate Executive Road Trips',
      'Pilgrimage & Heritage Circuits'
    ],
    features: [
      'Second-Row Plush Captain Recliners with Individual Armrests',
      'Dual-Zone Automatic Climate Control with Roof Vents',
      'Whisper-Quiet Cabin Acoustics & Tinted Privacy Glass',
      'High-Speed USB Fast Charging Points at Every Row',
      'Generous Luggage Boot with Fold-Flat Third-Row Flexibility',
      'Experienced Highway Chauffeur with Route Foresight'
    ],
    specs: {
      transmission: 'Chauffeur Driven • High-Torque 2.4L Diesel',
      fuelType: 'Euro-VI Clean Highway Diesel',
      acType: 'Roof-Mounted Dual A/C with Individual Louvers',
      musicSystem: 'Hi-Fi Audio Infotainment with Bluetooth & Aux',
      seatingArrangement: '2 Front + 2 Captain Chairs + 3 Rear Foldable (7 Pax)',
      chargingPorts: 'Dual Front USB & Rear Passenger 12V / Type-C Ports'
    },
    pricingPlaceholder: {
      rateType: 'Day Tariff & KM Slabs',
      indicativeRate: 'Tariff On Request',
      note: 'Transparent, route-based quotations inclusive of fuel, chauffeur allowance, and toll clearance assistance.'
    },
    availabilityStatus: 'Available',
    images: {
      main: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop'
      ],
      alt: 'Toyota Innova Crysta - Ox Tours and Travels fleet'
    }
  },
  {
    id: 'tempo-traveller-9-seater',
    name: '9-Seater Tempo Traveller',
    category: 'Tempo Traveller',
    tagline: 'Intimate group luxury with wide pushback seating and substantial luggage room.',
    shortDescription: 'Designed for small families and boutique groups wanting the spaciousness of a van with generous personal room.',
    fullDescription: 'Our 9-Seater Tempo Traveller provides a roomy, uncrowded alternative to coordinating multiple cars. Configured with wide 1x1 and 2x1 pushback seats, a wide central walkway, chilled high-output air conditioning, and dedicated rear boot space, your group travels together in complete harmony.',
    passengerCapacity: 9,
    luggageCapacity: 9,
    featured: true,
    idealFor: [
      'Small Family Vacations & Hill Station Circuits',
      'Boutique Corporate Executive Escorts',
      'Airport Group Transfers with Heavy Luggage',
      'Weekend Road Escapes with Friends'
    ],
    features: [
      'Plush Pushback Recliner Seats with Individual Armrests',
      'Chilled Twin-Compressor Air Conditioning',
      'Spacious Walk-Through Center Aisle',
      'Overhead Parcel Racks for Personal Carry-on Luggage',
      'Individual LED Reading Lights & Window Curtains',
      'High-Deck Elevated Roadway Sightlines'
    ],
    specs: {
      transmission: 'Commercial Grade Chauffeur Driven',
      fuelType: 'Turbocharged High-Efficiency Diesel',
      acType: 'Dual Evaporator High-Capacity Cooling',
      musicSystem: 'Hi-Fi Stereo Sound System with Bluetooth & Aux',
      seatingArrangement: 'Spacious 1x1 & 2x1 Custom Layout (9 Reclining Pax + Driver)',
      chargingPorts: 'Multi-Point Mobile Charging Outlets Along Windows'
    },
    pricingPlaceholder: {
      rateType: 'Tour Package / KM Slabs',
      indicativeRate: 'Tariff On Request',
      note: 'All quotes include dedicated chauffeur, sanitization, and fuel allowance.'
    },
    availabilityStatus: 'Available',
    images: {
      main: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?q=80&w=1200&auto=format&fit=crop'
      ],
      alt: '9 Seater Tempo Traveller - Ox Tours and Travels fleet'
    }
  },
  {
    id: 'tempo-traveller-12-seater-luxury',
    name: '12-Seater Luxury Tempo Traveller',
    category: 'Tempo Traveller',
    tagline: 'First-class group luxury featuring plush reclining seats and expansive panoramic windows.',
    shortDescription: 'Customized luxury interiors, soft suspension, and high-capacity chilled AC for joint family pilgrimages and vacation tours.',
    fullDescription: 'The 12-Seater Luxury Tempo Traveller elevates group road travel into an executive lounge experience. Outfitted with plush Maharaja-style reclining seats, ambient cabin illumination, soft curtains, and crystal-clear sound, this vehicle guarantees fatigue-free touring across expressways, winding ghats, and countryside roads.',
    passengerCapacity: 12,
    luggageCapacity: 12,
    featured: true,
    idealFor: [
      'Extended Joint Family Holidays & Vacations',
      'Pilgrimage Circuits (Char Dham, Tirupati, Shirdi, etc.)',
      'Executive Corporate Outings & Client Transport',
      'Wedding Guest Shuttle Logistics'
    ],
    features: [
      'Maharaja-Style Wide Pushback Luxury Recliners',
      'Deep Roof-Mounted Air Conditioning Ducts',
      'Curtained Panoramic Side Windows for Scenic Vistas',
      'Individual Reading Spotlights at Every Seat',
      'Dedicated Large Luggage Boot & Overhead Parcel Bays',
      'Reinforced Suspension for Soft Ride on Mountain Roads'
    ],
    specs: {
      transmission: 'Seasoned Commercial Chauffeur Driven',
      fuelType: 'High-Torque Clean Turbo Diesel',
      acType: 'Roof-Mounted AC with Individual Air Flow Regulators',
      musicSystem: 'Cabin Surround Speakers with Bluetooth & PA Microphone',
      seatingArrangement: '2x1 Executive Pushback Seats with Padded Armrests (12 Pax)',
      chargingPorts: 'USB Charging Sockets at Every Seating Row'
    },
    pricingPlaceholder: {
      rateType: 'Daily Charter / Outstation KM Slabs',
      indicativeRate: 'Tariff On Request',
      note: 'Includes experienced chauffeur bata, fuel, and customized route planning.'
    },
    availabilityStatus: 'Available',
    images: {
      main: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop'
      ],
      alt: '12 Seater Luxury Tempo Traveller - Ox Tours and Travels fleet'
    }
  },
  {
    id: 'tempo-traveller-17-seater',
    name: '17-Seater Tempo Traveller',
    category: 'Tempo Traveller',
    tagline: 'The definitive travel companion for large families, wedding parties, and group tours.',
    shortDescription: 'High passenger capacity, generous central standing aisle, and heavy-duty air conditioning for long interstate journeys.',
    fullDescription: 'When your travel group numbers up to 17 passengers, our 17-Seater Tempo Traveller ensures nobody gets separated into multiple cars. Built with heavy-duty commercial suspension, a spacious central aisle, individual reclining seats, and massive cargo space, it provides uninterrupted group camaraderie throughout your itinerary.',
    passengerCapacity: 17,
    luggageCapacity: 16,
    featured: true,
    idealFor: [
      'Large Joint Family Tours & Milestone Celebrations',
      'Destination Wedding Guest Transit',
      'University, College, & Institutional Expeditions',
      'Sports Delegations & Trekking Groups'
    ],
    features: [
      '17 High-Back Ergonomic Pushback Seats',
      'Dual Powerful Chilled Air Conditioners',
      'High Standing Clearance & Wide Center Aisle',
      'Full-Length Overhead Parcel Storage for Backpacks',
      'High-Fidelity Audio System with Tour Guide Mic',
      'Heavy-Duty Carrier for Secure Excess Luggage'
    ],
    specs: {
      transmission: 'Heavy Highway Chauffeur Driven',
      fuelType: 'Heavy-Duty Commercial Turbo Diesel',
      acType: 'Dual Compressor Commercial Chilled Air System',
      musicSystem: 'Full Cabin Stereo System with Auxiliary & Mic Input',
      seatingArrangement: '2x1 Practical Reclining Configuration (17 Pax + Chauffeur)',
      chargingPorts: 'Row-Wise Mobile & Device Charging Ports'
    },
    pricingPlaceholder: {
      rateType: 'Multi-Day Interstate Package / KM Slabs',
      indicativeRate: 'Tariff On Request',
      note: 'Transparent pricing inclusive of toll tax projections and driver allowances.'
    },
    availabilityStatus: 'Available',
    images: {
      main: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop'
      ],
      alt: '17 Seater Tempo Traveller - Ox Tours and Travels fleet'
    }
  },
  {
    id: 'luxury-bus-21-seater',
    name: '21-Seater Luxury Bus',
    category: 'Luxury Bus / Coach',
    tagline: 'Sovereign luxury coach travel for wedding parties, corporate offsites, and grand delegations.',
    shortDescription: 'Air-suspended ride quality, high-deck panoramic sightlines, and immense underbelly luggage holds.',
    fullDescription: 'Engineered for significant passenger contingents requiring seamless, coordinated transit. The 21-Seater Luxury Bus eliminates the complexity of coordinating multiple vehicles. Featuring air-suspension ride dynamics, executive pushback seats with ample legroom, full coach ducted climate control, and enormous underfloor luggage bays, it moves your delegation with royal poise.',
    passengerCapacity: 21,
    luggageCapacity: 22,
    featured: true,
    idealFor: [
      'Grand Wedding Guest Shuttles & Inter-Venue Transit',
      'Corporate Conferences, Annual Offsites & Summits',
      'Inbound Tourist Delegations & Cultural Circuits',
      'Interstate Group Pilgrimages & Sports Teams'
    ],
    features: [
      'Air-Suspension System for Ultra-Smooth Highway Gliding',
      'Full Coach Ducted Climate Control with Individual Vents',
      'High-Deck Elevated Vista Seating with Panoramic Glass',
      'Massive Underfloor Baggage Hold for Heavy Suitcases',
      'Tour Guide PA Microphone & Cabin Entertainment Screen',
      'Emergency Exit Architecture & Safety Certified Harnesses'
    ],
    specs: {
      transmission: 'Certified Commercial Heavy Highway Chauffeur Driven',
      fuelType: 'Euro-VI Clean Commercial High-Efficiency Diesel',
      acType: 'Roof-Mounted High-Tonnage Air Conditioning Unit',
      musicSystem: 'Full Coach Audio System with Multimedia Display & PA Mic',
      seatingArrangement: '2x2 High-Back Executive Reclining Coach Layout (21 Pax)',
      chargingPorts: 'Multi-Point High-Speed USB Charging Stations'
    },
    pricingPlaceholder: {
      rateType: 'Charter Contract / Event Package Basis',
      indicativeRate: 'Tariff On Request',
      note: 'Tailored charter contracts based on event duration, route mileage, and waiting times.'
    },
    availabilityStatus: 'Available',
    images: {
      main: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=1200&auto=format&fit=crop'
      ],
      alt: '21 Seater Luxury Bus - Ox Tours and Travels fleet'
    }
  },
  {
    id: 'force-urbania-9-seater-luxury',
    name: '9-Seater Luxury Urbania (Executive Class)',
    category: 'Force Urbania',
    tagline: 'Ultra-luxurious VIP cabin with plush Maharaja captain recliners and whisper-quiet ride.',
    shortDescription: 'The pinnacle of van luxury. Monocoque aerodynamics, individual aircraft-style air louvers, and bespoke captain seats.',
    fullDescription: 'The 9-Seater Luxury Urbania (Executive Edition) redefines private road transit. Built on world-standard monocoque architecture, it eliminates the vibration and body roll of traditional vans. Equipped with ultra-wide Maharaja-style reclining captain chairs, over 6-foot standing clearance, personalized aircraft-style ventilation, and serene acoustic damping, it represents sovereign comfort on the road.',
    passengerCapacity: 9,
    luggageCapacity: 10,
    featured: true,
    idealFor: [
      'VIP Delegations & High-Profile Corporate Transfers',
      'Luxury Family Vacations Desiring Unrivaled Legroom',
      'Boutique Hill Station Escapes with Scenic Views',
      'Celebrity & Executive Airport Escorts'
    ],
    features: [
      'Ultra-Plush Reclining Captain Chairs with Calf Support & Armrests',
      'Full Standing Cabin Height (Over 6 Feet Walk-Through Clearance)',
      'Individual Aircraft-Grade AC Louvers & Reading Spotlights',
      'Acoustic Soundproofing for Whisper-Quiet Highway Cruising',
      'Extra Large Scenic Windows with Dark Tint Privacy Glazing',
      'Spacious Dedicated Rear Luggage Hold for Premium Baggage'
    ],
    specs: {
      transmission: 'Mercedes-Derived Monocoque Chauffeur Navigated',
      fuelType: 'Clean Common Rail Direct Injection (CRDe) Diesel',
      acType: 'Central Ducted Climate Control with Individual Louver Vents',
      musicSystem: 'High-Resolution Multimedia Audio Screen with Surround Sound',
      seatingArrangement: '1x1 / 2x1 Spacious VIP Reclining Captain Seats (9 Pax)',
      chargingPorts: 'Dedicated Fast-Charge USB & Type-C at Every Single Seat'
    },
    pricingPlaceholder: {
      rateType: 'Executive Charter Rate',
      indicativeRate: 'Tariff On Request',
      note: 'Exclusive VIP charter rates covering premium amenities and professional chauffeur service.'
    },
    availabilityStatus: 'Available',
    images: {
      main: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop'
      ],
      alt: '9 Seater Luxury Urbania Executive Class - Ox Tours and Travels fleet'
    }
  },
  {
    id: 'force-urbania-12-seater-luxury',
    name: '12-Seater Luxury Urbania',
    category: 'Force Urbania',
    tagline: 'Next-generation European styling with stand-up cabin height and independent suspension.',
    shortDescription: 'Exceptional group ride comfort, low NVH levels, aircraft-style consoles, and ergonomic recliners for medium groups.',
    fullDescription: 'The 12-Seater Luxury Urbania is engineered for discerning travelers who refuse to compromise on ergonomics. Its modern monocoque body shell delivers car-like ride dynamics, while the interior features individual contour recliners, wide passenger aisle, USB charging at every station, and ducted climate control that cools every corner evenly.',
    passengerCapacity: 12,
    luggageCapacity: 12,
    featured: true,
    idealFor: [
      'Luxury Family Holidays & Inter-City Expeditions',
      'Executive Corporate Delegations & Board Offsites',
      'High-End Inbound Tour Groups & Heritage Discovery',
      'Destination Wedding Family Movements'
    ],
    features: [
      'Full Walk-Through Cabin Clearance with Standing Height',
      'Car-Like Monocoque Ride Dynamics with Reduced Body Roll',
      'Ergonomic Pushback Luxury Reclining Seats with Armrests',
      'Individual Overhead Air Condition Louvers & Reading Spotlights',
      'Large Tinted Panoramic Sightline Windows',
      'Spacious Rear Boot & Overhead Luggage Trays'
    ],
    specs: {
      transmission: 'Precision Monocoque Chauffeur Navigation',
      fuelType: 'Clean Euro-VI High-Efficiency Turbo Diesel',
      acType: 'Roof-Duct Central AC with Independent Row Thermostats',
      musicSystem: 'Premium Hi-Fi Multimedia Audio with Aux & Bluetooth',
      seatingArrangement: '2x1 Executive Reclining Configuration (12 Pax + Chauffeur)',
      chargingPorts: 'Individual USB Charging Port at Every Passenger Seat'
    },
    pricingPlaceholder: {
      rateType: 'Bespoke Charter Packages',
      indicativeRate: 'Tariff On Request',
      note: 'Available for single-day corporate bookings, multi-day tours, and customized routes.'
    },
    availabilityStatus: 'Available',
    images: {
      main: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop'
      ],
      alt: '12 Seater Luxury Urbania - Ox Tours and Travels fleet'
    }
  },
  {
    id: 'force-urbania-16-seater-luxury',
    name: '16-Seater Luxury Urbania',
    category: 'Force Urbania',
    tagline: 'Full standing-height luxury van offering supreme highway comfort for medium-to-large groups.',
    shortDescription: 'Maximum capacity meets first-class comfort. 16 reclining seats, expansive cabin space, and smooth highway stability.',
    fullDescription: 'For groups of up to 16 passengers seeking true luxury rather than a conventional commercial bus, the 16-Seater Luxury Urbania is unmatched. With full standing height, independent front and rear suspension, panoramic picture windows, and whisper-quiet cabin insulation, everyone travels together in serene luxury.',
    passengerCapacity: 16,
    luggageCapacity: 15,
    featured: true,
    idealFor: [
      'Large Corporate Offsites & Team Building Retreats',
      'Wedding Guest Transport & Airport Escorts',
      'Extended Joint Family Tours & Pilgrimage Circuits',
      'Luxury Sightseeing & Sight-Seeing Excursions'
    ],
    features: [
      '16 High-Back Luxury Pushback Reclining Seats',
      'Full Standing Walk-Through Cabin Height',
      'Central Ducted High-Capacity Chilled Air Conditioning',
      'Acoustic Vibration Insulation for Limousine Highway Silence',
      'Panoramic Tinted Windows for Scenic Road Vistas',
      'Generous Rear Luggage Compartment with Overhead Storage'
    ],
    specs: {
      transmission: 'Professional Monocoque Chauffeur Driven',
      fuelType: 'Advanced High-Torque CRDe Turbo Diesel',
      acType: 'Heavy-Duty Central Roof Duct Air Conditioning',
      musicSystem: 'Full Cabin Surround Sound with Bluetooth & PA Microphone',
      seatingArrangement: 'Spacious 2x1 Reclining Seating Layout (16 Pax)',
      chargingPorts: 'USB Fast-Charging Sockets Available Throughout Cabin'
    },
    pricingPlaceholder: {
      rateType: 'Daily Charter & Outstation Kilometre Packages',
      indicativeRate: 'Tariff On Request',
      note: 'Includes professional highway driver, vehicle sanitization, and fuel allowance.'
    },
    availabilityStatus: 'Available',
    images: {
      main: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop'
      ],
      alt: '16 Seater Luxury Urbania - Ox Tours and Travels fleet'
    }
  }
];
