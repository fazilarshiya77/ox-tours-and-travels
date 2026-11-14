import { ServiceItem } from '../types';

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'outstation-trips',
    title: 'Outstation Trips & Inter-City Travel',
    slug: 'outstation-trips',
    editorialLabel: 'THE HIGHWAY DISPATCH',
    tagline: 'End-to-end highway freedom with courteous, seasoned highway chauffeurs.',
    summary: 'Spontaneous weekend getaways, holiday road trips, or multi-city expeditions without vehicle fatigue or route stress.',
    fullDescription: 'Long distance driving across state lines demands stamina, deep mechanical awareness, and acute familiarity with highway detours, quality food halts, and toll regulations. Our Outstation Trip service places you in the care of vetted long-distance drivers whose gentle highway manners ensure you arrive refreshed rather than exhausted.',
    benefits: [
      'Pre-sanitized vehicle with comprehensive highway safety check',
      'Experienced route navigators knowledgeable about scenic stops & hygienic rest areas',
      'Flexible departure times and door-to-door pickup',
      'No hidden driver allowance or night-driving friction'
    ],
    includedFeatures: [
      'Unlimited stops along scheduled route',
      'GPS tracked dispatch for passenger safety',
      'Complimentary bottled water and phone charging facilities',
      'Toll & state tax clarity provided upfront'
    ],
    idealFor: ['Family Vacations', 'Inter-City Weekend Breaks', 'Festival Travels', 'Multi-City Road Trips'],
    image: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1200&auto=format&fit=crop',
    badge: 'Flagship Service'
  },
  {
    id: 'local-city-rentals',
    title: 'Local City Hourly Rentals',
    slug: 'local-city-rentals',
    editorialLabel: 'URBAN CHRONICLE',
    tagline: 'A private dedicated chauffeur at your beck and call throughout the metropolitan day.',
    summary: 'Hop between board meetings, shopping hubs, and family appointments with zero parking dilemmas.',
    fullDescription: 'Navigating crowded metropolitan streets, gridlock traffic, and scarce parking structures drains valuable mental focus. With our local hourly packages (4 Hrs / 40 KM, 8 Hrs / 80 KM, or Full Day packages), your chauffeur remains on standby at the curb, ready to whisk you to your next stop the moment you emerge.',
    benefits: [
      'Chauffeur waits on standby right outside your venue',
      'Eliminate parking fees, multi-tier lot searches, and walk times',
      'Pristine climate-controlled sanctuary between meetings',
      'Effortless extensions directly coordinated with dispatch'
    ],
    includedFeatures: [
      'Professional attire & respectful chauffeur demeanor',
      'Choice of premium sedans or spacious MUVs',
      'Smooth payment settlement at conclusion of journey',
      'Punctual arrival 15 minutes prior to scheduled pickup'
    ],
    idealFor: ['Executive Itineraries', 'Wedding Shopping Sprees', 'City Sightseeing', 'Medical Appointments'],
    image: 'https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=1200&auto=format&fit=crop',
    badge: 'Daily Commute'
  },
  {
    id: 'airport-transfers',
    title: 'Airport & Express Terminal Transfers',
    slug: 'airport-transfers',
    editorialLabel: 'THE DEPARTURE DESK',
    tagline: 'Guaranteed on-time terminal departures and peaceful post-flight welcomes.',
    summary: 'Never endure taxi queues, surge rates, or cancelled rides when catching a flight.',
    fullDescription: 'Timing is non-negotiable when flights are on the line. Our flight-monitored airport transfer service tracks your inbound and outbound flights in real time. Whether landing at midnight or setting off at 4:00 AM, your chauffeur is already stationed at the designated pickup bay holding your name board.',
    benefits: [
      'Proactive flight delay tracking ensures chauffeur is always on time',
      'Complimentary 45-minute post-landing wait time for baggage claim',
      'Assistance with heavy baggage loading and trolley unloading',
      'Fixed, transparent pricing with no midnight surge spikes'
    ],
    includedFeatures: [
      'Name board greeting at arrivals (optional VIP escort)',
      'Direct highway corridor transit to your doorstep',
      'Child seats and booster seats available on advance request',
      'Chilled bottled refreshments upon boarding'
    ],
    idealFor: ['Business Travelers', 'International Tourist Arrivals', 'Late Night Flights', 'Family Fly-Outs'],
    image: 'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1200&auto=format&fit=crop',
    badge: 'Zero Surge'
  },
  {
    id: 'family-tours',
    title: 'Curated Family Tours & Vacations',
    slug: 'family-tours',
    editorialLabel: 'HERITAGE & MEMOIRS',
    tagline: 'Generous room for grandparents, toddlers, suitcases, and laughter.',
    summary: 'Comfortable pacing, gentle driving, and spacious vehicles designed for generational harmony.',
    fullDescription: 'Traveling with family means accommodating multiple paces, frequent comfort halts, and unexpected detours. We select vehicles featuring wide aisles, low boarding sills for elders, and ample boot space so strollers and luggage never crowd the cabin. Our chauffeurs take genuine pride in ensuring your family feels safe and cherished.',
    benefits: [
      'Customized rest stops tailored to children and elders',
      'Spacious MUVs & Force Urbanias keeping the whole family united',
      'Experienced chauffeurs familiar with child-friendly dining halts',
      'Emergency first-aid and motion-comfort equipment on board'
    ],
    includedFeatures: [
      'Multi-speaker Bluetooth entertainment for family road trip playlists',
      'Flexible itinerary adjustments on the fly',
      'Clean sanitized blankets & neck cushions on request',
      'Luggage roof-carrier provisions for extensive travel wardrobes'
    ],
    idealFor: ['Multi-Generational Vacations', 'Annual Pilgrimages', 'Summer Escapes', 'Festival Homecoming'],
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1200&auto=format&fit=crop',
    badge: 'Family First'
  },
  {
    id: 'corporate-travel',
    title: 'Corporate Transit & Executive Fleet',
    slug: 'corporate-travel',
    editorialLabel: 'EXECUTIVE DISPATCH',
    tagline: 'Uncompromising corporate decorum, confidentiality, and seamless invoicing.',
    summary: 'Dedicated mobility solutions for C-suite leaders, visiting delegates, and enterprise summits.',
    fullDescription: 'In business, impressions matter and punctuality is fundamental. Our corporate travel division provides immaculately maintained executive sedans and luxury vans driven by chauffeurs who maintain discreet professional silence. We offer streamlined corporate invoicing, GST compliance, and dedicated relationship account managers.',
    benefits: [
      'Non-disclosure confidentiality and complete cabin privacy',
      'Centralized corporate billing with transparent monthly statements',
      'Consistent vehicle standards across all booking nodes',
      'Priority vehicle allocation during peak business conventions'
    ],
    includedFeatures: [
      'Onboard Wi-Fi and mobile laptop charging points',
      'Daily financial press and business publications',
      'Duty slip verification & instant digital receipts',
      'VIP protocol greeting for key enterprise clients'
    ],
    idealFor: ['C-Suite Executives', 'Visiting Investors', 'Board Meetings', 'Client Hospitality'],
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop',
    badge: 'Enterprise Protocol'
  },
  {
    id: 'group-transportation',
    title: 'Group Transportation & Event Logistics',
    slug: 'group-transportation',
    editorialLabel: 'THE CONVOY JOURNAL',
    tagline: 'Synchronized movement for wedding guest escorts, conferences, and tours.',
    summary: 'From 12-seater luxury vans to 35-seater grand touring coaches, keeping everyone together.',
    fullDescription: 'Moving large groups requires military-grade timing and single-point coordination. Whether transporting 80 wedding guests between hotel and banquet hall, or conducting an all-hands corporate retreat into the hills, our fleet of Force Urbanias, Deluxe Tempo Travellers, and Luxury Coaches move your guests with royal poise.',
    benefits: [
      'Single point of dispatch contact for fleet coordination',
      'Uniform fleet branding and matching vehicle quality',
      'Dedicated route reconnaissance to avoid narrow choke points',
      'Staggered departure schedules matching event timelines'
    ],
    includedFeatures: [
      'Public address audio system on coaches for tour guides',
      'Massive dedicated luggage bays for musical instruments & wedding gifts',
      'Experienced commercial chauffeurs with heavy vehicle highway licenses',
      'On-site route supervisor available for major events'
    ],
    idealFor: ['Destination Weddings', 'Conferences & Expos', 'College & Alumni Tours', 'Sports Delegations'],
    image: 'https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=1200&auto=format&fit=crop',
    badge: 'Large Delegations'
  },
  {
    id: 'customized-travel-packages',
    title: 'Customized Tour Packages & Circuits',
    slug: 'customized-travel-packages',
    editorialLabel: 'BESPOKE ITINERARIES',
    tagline: 'Your dream route, mapped with precision, driven with elegance.',
    summary: 'Tell us where you want to go. We architect the roads, stays, and scenic pauses.',
    fullDescription: 'No two travelers seek the same horizons. Our bespoke package architects craft personalized travel blueprints that reflect your distinct passions—be it temple architecture, wildlife photography, colonial hill stations, or gastronomic trails. We recommend the finest vehicle for the topography and coordinate every halt.',
    benefits: [
      'Custom kilometer estimates and transparent all-inclusive quotes',
      'Recommendations on scenic offbeat routes away from tourist traps',
      'Dedicated vehicle remains with your party throughout the itinerary',
      'Chauffeurs familiar with regional dialects and local lore'
    ],
    includedFeatures: [
      'Detailed printed journey gazette itinerary for your party',
      '24/7 dedicated travel concierge on WhatsApp and phone',
      'Flexibility to spend extra time at destinations you love',
      'Zero rigid tour group schedules'
    ],
    idealFor: ['Honeymoon Road Trips', 'Photography Expeditions', 'Artisan & Textile Trails', 'Culinary Safaris'],
    image: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=1200&auto=format&fit=crop',
    badge: 'Tailored Journeys'
  }
];
