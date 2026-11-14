export interface GalleryItem {
  id: string;
  title: string;
  category: 'Force Urbania' | 'Tempo Traveller' | 'Innova Crysta' | 'Luxury Bus' | 'Cabin & Interiors';
  caption: string;
  vehicleModel: string;
  imageUrl: string;
  locationOrContext: string;
  aspectRatio?: 'landscape' | 'portrait' | 'wide';
}

export const GALLERY_CATEGORIES = [
  'All Archives',
  'Force Urbania',
  'Tempo Traveller',
  'Innova Crysta',
  'Luxury Bus',
  'Cabin & Interiors'
] as const;

export const GALLERY_DATA: GalleryItem[] = [
  {
    id: 'gal-real-01',
    title: 'VIP PKN Maharaja Recliner with Calf Support',
    category: 'Force Urbania',
    caption: 'The pinnacle of private road transit: bespoke motorized recliner with calf support, diamond quilt stitching, and individual cup holder.',
    vehicleModel: '9-Seater Luxury Urbania (Executive Class)',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.37%20PM.jpeg',
    locationOrContext: 'VIP First-Class Suite',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-real-02',
    title: 'Force Urbania High-Ceiling Walkthrough',
    category: 'Force Urbania',
    caption: 'Over 6 feet of standing cabin clearance featuring dual-tone executive recliners, ceiling LED panels, and high-definition smart television display.',
    vehicleModel: '12 & 16-Seater Luxury Urbania',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.38%20PM.jpeg',
    locationOrContext: 'Executive Passenger Cabin',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-real-03',
    title: 'Royal Elephant Crest Luxury Recliners',
    category: 'Tempo Traveller',
    caption: 'Customized ivory leather pushback seats emblazoned with royal elephant crests, high-fidelity cabin speakers, and cool blue ambient accents.',
    vehicleModel: '12-Seater Luxury Tempo Traveller',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.23%20PM.jpeg',
    locationOrContext: 'Maharaja Luxury Cabin',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-real-04',
    title: '21-Seater Luxury Bus Exterior Profile',
    category: 'Luxury Bus',
    caption: 'Flagship white touring coach equipped with pneumatic air-suspension, panoramic tinted glass, and vast underbelly baggage bays.',
    vehicleModel: '21-Seater Luxury Bus',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.32%20PM.jpeg',
    locationOrContext: 'Fleet Dispatch Bay',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-real-05',
    title: 'Toyota Innova Crysta Cockpit & Navigation Bay',
    category: 'Innova Crysta',
    caption: 'Touchscreen multimedia infotainment, refined walnut dashboard finish, and pristine controls for effortless highway transit.',
    vehicleModel: 'Toyota Innova Crysta',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.24%20PM%20(1).jpeg',
    locationOrContext: 'Chauffeur Pilot Bay',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-real-06',
    title: 'Urbania Cockpit & Onboard Beverage Chiller',
    category: 'Force Urbania',
    caption: 'Walnut burl console accents, driver touchscreen, and integrated center-aisle refrigerator keeping refreshments chilled on long journeys.',
    vehicleModel: 'Force Urbania Luxury Van',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.19%20PM%20(1).jpeg',
    locationOrContext: 'Front Cabin & Chiller',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-real-07',
    title: 'Geometric Backlit Ceiling Suite',
    category: 'Tempo Traveller',
    caption: 'Architectural patterned ceiling with warm indirect illumination, forward multimedia monitor, and plush leather recliners with headrests.',
    vehicleModel: 'Tempo Traveller Luxury Suite',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.16%20PM.jpeg',
    locationOrContext: 'Luxury Passenger Lounge',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-real-08',
    title: 'Cognac Executive 1x1 Captain Recliners',
    category: 'Force Urbania',
    caption: 'Bespoke 1x1 leather captain recliners upholstered in rich cognac, featuring wide padded armrests and timber floorboards.',
    vehicleModel: '9-Seater Luxury Urbania (Executive Class)',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.19%20PM.jpeg',
    locationOrContext: 'Executive VIP Cabin',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-real-09',
    title: '21-Seater Coach Neon Blue Runway',
    category: 'Luxury Bus',
    caption: 'Illuminated central runner lighting paired with high-back reclining coach seats, curtains, and full coach ducted climate control.',
    vehicleModel: '21-Seater Luxury Bus',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.33%20PM.jpeg',
    locationOrContext: 'Interstate Delegation Coach',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-real-10',
    title: 'Two-Tone Maharaja Recliners with Bolsters',
    category: 'Tempo Traveller',
    caption: 'Ergonomic tan and cream leather pushback seats with royal crest embroidery, armrest cup holders, and individual safety harnesses.',
    vehicleModel: '12-Seater Luxury Tempo Traveller',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.21%20PM%20(1).jpeg',
    locationOrContext: 'Royal Passenger Cabin',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-real-11',
    title: 'Integrated Onboard Refrigerator Console',
    category: 'Cabin & Interiors',
    caption: 'Deep-capacity chilled compartment installed between front pilot seats for complimentary cold mineral water and beverages.',
    vehicleModel: 'Force Urbania Luxury Van',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.36%20PM.jpeg',
    locationOrContext: 'Refreshment Station',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-real-12',
    title: 'Innova Crysta Immaculate Second Row',
    category: 'Innova Crysta',
    caption: 'Pristine white seat coverings, red carpet footmats, generous legroom, and independent door controls for peaceful long-distance rides.',
    vehicleModel: 'Toyota Innova Crysta',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.25%20PM.jpeg',
    locationOrContext: 'Family Touring Cabin',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-real-13',
    title: 'Red Carpet Central Walkway & Diamond Quilted Seats',
    category: 'Cabin & Interiors',
    caption: 'Broad central aisle trimmed with plush red carpeting, diamond-patterned leather recliners, and aircraft-style luggage consoles.',
    vehicleModel: 'Tempo Traveller & Urbania Suite',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.17%20PM%20(1).jpeg',
    locationOrContext: 'Passenger Aisle',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-real-14',
    title: 'Urbania High-Definition Smart Entertainment',
    category: 'Force Urbania',
    caption: 'Large Sony smart television monitor mounted to the cabin ceiling, providing streaming and presentation capability for road trips.',
    vehicleModel: 'Force Urbania Luxury Van',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.39%20PM.jpeg',
    locationOrContext: 'Multimedia Suite',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-real-15',
    title: 'Grand Broadside Luxury Bus Interior',
    category: 'Luxury Bus',
    caption: 'Full-length view of our touring bus interior showing elevated vista sightlines, dual lighting systems, and comfortable coach seating.',
    vehicleModel: '21-Seater Luxury Bus',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.33%20PM%20(1).jpeg',
    locationOrContext: 'Grand Touring Coach',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-real-16',
    title: 'Diamond-Stitched Captain Recliners',
    category: 'Tempo Traveller',
    caption: 'Crafted leather seating with lateral support bolsters, adjustable headrests, and smooth woodgrain floor finish.',
    vehicleModel: '12-Seater Luxury Tempo Traveller',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.17%20PM.jpeg',
    locationOrContext: 'Passenger Seating Bay',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-real-17',
    title: 'Urbania Chauffeur Ergonomics & Wood Trim',
    category: 'Cabin & Interiors',
    caption: 'Driver workstation featuring diamond-stitched seat, wood-finished dashboard, and easy-access climate control dials.',
    vehicleModel: 'Force Urbania Luxury Van',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.20%20PM.jpeg',
    locationOrContext: 'Pilot Command Center',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-real-18',
    title: 'Full Cabin Perspective with Elephant Crests',
    category: 'Cabin & Interiors',
    caption: 'High-resolution vertical perspective showing multi-row seating layout, red carpet runner, individual charging ports, and AC louvers.',
    vehicleModel: 'Tempo Traveller Maharaja Suite',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.26%20PM%20(1).jpeg',
    locationOrContext: 'Full Cabin Overview',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-real-19',
    title: 'Innova Crysta Pristine Front Cabin',
    category: 'Innova Crysta',
    caption: 'Clean, sanitized front passenger and driver bucket seats protected with tailored white linen covers.',
    vehicleModel: 'Toyota Innova Crysta',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.26%20PM.jpeg',
    locationOrContext: 'Executive Front Cabin',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-real-20',
    title: 'Evening Ambient Ceiling Lighting Suite',
    category: 'Cabin & Interiors',
    caption: 'Soft warm cove lighting illuminating the entire length of the passenger suite for restful overnight and twilight highway travel.',
    vehicleModel: 'Tempo Traveller Luxury Suite',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.18%20PM.jpeg',
    locationOrContext: 'Evening Ambience',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-real-21',
    title: 'Force Urbania Executive Passenger Suite',
    category: 'Force Urbania',
    caption: 'Individually adjustable contoured recliners arranged along wide aisle, equipped with ducted roof air vents and reading spots.',
    vehicleModel: '12 & 16-Seater Luxury Urbania',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.21%20PM.jpeg',
    locationOrContext: 'Executive Van Lounge',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-real-22',
    title: 'Maharaja 2x1 Reclining Luxury Layout',
    category: 'Tempo Traveller',
    caption: 'Spacious 2x1 configuration with custom two-tone recliners, wooden window sills, and individual seatbelt restraints.',
    vehicleModel: '12-Seater Luxury Tempo Traveller',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.22%20PM.jpeg',
    locationOrContext: 'Boutique Group Lounge',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-real-23',
    title: 'Innova Crysta Flexible Third-Row Seating',
    category: 'Innova Crysta',
    caption: 'Sanitized third-row bench with fold-flat luggage versatility, red carpet mats, and personal air vents.',
    vehicleModel: 'Toyota Innova Crysta',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.24%20PM%20(2).jpeg',
    locationOrContext: 'Rear Passenger Area',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-real-24',
    title: 'Innova Crysta Sanitized Seat Dressings',
    category: 'Innova Crysta',
    caption: 'Close-up detail of our spotless white seat covers, inspected and cleaned prior to every chauffeur dispatch.',
    vehicleModel: 'Toyota Innova Crysta',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.24%20PM.jpeg',
    locationOrContext: 'Hygiene & Cleanliness Standard',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-real-25',
    title: 'Neon Accent Highway Cruiser Interior',
    category: 'Cabin & Interiors',
    caption: 'Subtle neon cyan accent lighting highlighting the standing aisle, overhead racks, and forward viewing glass.',
    vehicleModel: '16-Seater Luxury Urbania / Coach',
    imageUrl: '/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.22%20PM%20(1).jpeg',
    locationOrContext: 'Highway Cruise Suite',
    aspectRatio: 'landscape'
  }
];
