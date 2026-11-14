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
    id: 'gal-01',
    title: 'Force Urbania Editorial Flagship',
    category: 'Force Urbania',
    caption: 'The sculpted monocoque profile of our Force Urbania pausing on an interstate mountain pass.',
    vehicleModel: '9 & 12-Seater Luxury Urbania',
    imageUrl: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?q=80&w=1200&auto=format&fit=crop',
    locationOrContext: 'High-Altitude Ghat Highway',
    aspectRatio: 'wide'
  },
  {
    id: 'gal-02',
    title: 'Executive VIP Captain Loungers',
    category: 'Cabin & Interiors',
    caption: 'Bespoke calf-support Maharaja recliners with individual armrests and deep reclining geometry.',
    vehicleModel: '9-Seater Luxury Urbania (Executive Class)',
    imageUrl: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1200&auto=format&fit=crop',
    locationOrContext: 'VIP Passenger Cabin',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-03',
    title: 'Toyota Innova Crysta Touring Composure',
    category: 'Innova Crysta',
    caption: 'Aerodynamic poise and unmatched road command along scenic hillside roads.',
    vehicleModel: 'Toyota Innova Crysta',
    imageUrl: 'https://images.unsplash.com/photo-1563720223185-11003d516935?q=80&w=1200&auto=format&fit=crop',
    locationOrContext: 'Heritage Countryside Route',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-04',
    title: '12-Seater Luxury Tempo Traveller',
    category: 'Tempo Traveller',
    caption: 'Customized luxury cruiser with panoramic UV-treated tinted glass and elevated ride stance.',
    vehicleModel: '12-Seater Luxury Tempo Traveller',
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop',
    locationOrContext: 'Coastal Highway Expedition',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-05',
    title: 'Overhead Climate Louvers & Ambient Console',
    category: 'Cabin & Interiors',
    caption: 'Aircraft-grade personal air conditioning vents, LED reading spots, and phone charging docks.',
    vehicleModel: 'Force Urbania & Tempo Traveller',
    imageUrl: 'https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?q=80&w=1200&auto=format&fit=crop',
    locationOrContext: 'In-Cabin Ergonomics',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-06',
    title: '21-Seater Grand Touring Luxury Bus',
    category: 'Luxury Bus',
    caption: 'Pneumatic air-suspension coach engineered for wedding party transits and corporate offsites.',
    vehicleModel: '21-Seater Luxury Bus',
    imageUrl: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
    locationOrContext: 'Interstate Grand Delegation',
    aspectRatio: 'wide'
  },
  {
    id: 'gal-07',
    title: '16-Seater Force Urbania Walk-Through Clearance',
    category: 'Force Urbania',
    caption: 'Full standing height (over 6 feet) allowing effortless movement along the carpeted aisle.',
    vehicleModel: '16-Seater Luxury Urbania',
    imageUrl: 'https://images.unsplash.com/photo-1509749837427-ac94a2553d0e?q=80&w=1200&auto=format&fit=crop',
    locationOrContext: 'Fleet Dispatch Bay',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-08',
    title: '9-Seater Tempo Traveller Intimate Cruiser',
    category: 'Tempo Traveller',
    caption: 'Generous 1x1 pushback layout ensuring boutique travel groups enjoy undivided individual room.',
    vehicleModel: '9-Seater Tempo Traveller',
    imageUrl: 'https://images.unsplash.com/photo-1464219789935-c2d9d9aba644?q=80&w=1200&auto=format&fit=crop',
    locationOrContext: 'Boutique Weekend Tour',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-09',
    title: 'Innova Crysta Second-Row Captain Sanctuary',
    category: 'Innova Crysta',
    caption: 'Plush executive armrests and acoustic glass isolating occupants from road noise.',
    vehicleModel: 'Toyota Innova Crysta',
    imageUrl: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=1200&auto=format&fit=crop',
    locationOrContext: 'Executive Airport Transit',
    aspectRatio: 'portrait'
  },
  {
    id: 'gal-10',
    title: '17-Seater Tempo Traveller Highway Cruiser',
    category: 'Tempo Traveller',
    caption: 'Heavy-duty suspension delivering silky composure across multi-state family tours.',
    vehicleModel: '17-Seater Tempo Traveller',
    imageUrl: 'https://images.unsplash.com/photo-1519641471654-76ce0107ad1b?q=80&w=1200&auto=format&fit=crop',
    locationOrContext: 'Pilgrimage Circuit Corridor',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-11',
    title: '21-Seater Coach Underbelly & Panoramic Vista',
    category: 'Luxury Bus',
    caption: 'Enormous luggage capacity paired with high-deck vista sightlines for long journeys.',
    vehicleModel: '21-Seater Luxury Bus',
    imageUrl: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?q=80&w=1200&auto=format&fit=crop',
    locationOrContext: 'Conference Delegation',
    aspectRatio: 'landscape'
  },
  {
    id: 'gal-12',
    title: 'Force Urbania Aerodynamic Night Glaze',
    category: 'Force Urbania',
    caption: 'Clean European lines illuminated under city lights before an early morning airport dispatch.',
    vehicleModel: '12-Seater Luxury Urbania',
    imageUrl: 'https://images.unsplash.com/photo-1527786356703-4b100091cd2c?q=80&w=1200&auto=format&fit=crop',
    locationOrContext: 'Pre-Dawn Terminal Escort',
    aspectRatio: 'landscape'
  }
];
