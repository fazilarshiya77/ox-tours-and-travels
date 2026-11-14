import { Destination } from '../types';

export const DESTINATION_CATEGORIES: string[] = [
  'All Escapes',
  'Hill Station',
  'Heritage & Culture',
  'Coastal Escape',
  'Wildlife & Nature',
  'Pilgrimage Circuit'
];

export const DESTINATIONS_DATA: Destination[] = [
  {
    id: 'misty-highlands',
    name: 'Misty Highlands & Pine Ridges',
    region: 'Northern & Southern Ridge Escapes',
    category: 'Hill Station',
    subtitle: 'Where cloudlines meet winding alpine passes and colonial tea estates.',
    editorialSnippet: 'Crisp mountain air, terraced plantations, and secluded viewpoints accessible via scenic serpentine roads.',
    fullDescription: 'Few travel experiences match the gradual transition from the bustling plains to the crisp stillness of the high hills. As your vehicle climbs the winding mountain passes, the temperature drops, eucalyptus and pine scents fill the air, and panoramic valley horizons unfold. Our chauffeurs possess nuanced hill-driving mastery, navigating hairpin turns with gentle confidence while you gaze upon waterfalls cascading over ancient granite.',
    distanceGuide: 'Custom Scenic Circuit (Approx. 250 – 480 KM)',
    recommendedDuration: '3 to 5 Days Itinerary',
    bestTimeToVisit: 'September through June (Scenic all year)',
    recommendedFleet: ['Luxury SUV', 'Innova / Premium MUV', 'Force Urbania'],
    highlights: [
      'Panoramic Valley Viewpoints at Sunrise',
      'Heritage Tea Factory Walkthroughs & Tastings',
      'Pine Forest Trailheads & Botanical Sanctuaries',
      'Secluded Mountain Lake Boat Houses'
    ],
    featured: true,
    images: {
      hero: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1519681393784-d120267933ba?q=80&w=1200&auto=format&fit=crop'
      ]
    }
  },
  {
    id: 'royal-heritage-citadels',
    name: 'Royal Heritage Citadels',
    region: 'Historic Golden Triangle & Palaces',
    category: 'Heritage & Culture',
    subtitle: 'Sandstone ramparts, courtyards of emperors, and storied royal bastions.',
    editorialSnippet: 'Walk through centuries of dynastic architecture, intricately carved sandstone facades, and living artisan quarters.',
    fullDescription: 'Step through colossal fortress portals where royal carriages once rolled. A road expedition through historic citadels lets you absorb the changing tapestry of architecture, cuisine, and local folklore. With our chauffeur at your service, you move seamlessly between majestic hilltop forts, vibrant spice bazaars, and tranquil marble cenotaphs without the distress of finding parking or negotiating local transits.',
    distanceGuide: 'Interstate Heritage Corridor (Approx. 320 – 600 KM)',
    recommendedDuration: '4 to 7 Days Itinerary',
    bestTimeToVisit: 'October through March (Mild, pleasant breezes)',
    recommendedFleet: ['Executive Sedan', 'Innova / Premium MUV', 'Tempo Traveller'],
    highlights: [
      'Sunset Over Centuries-Old Sandstone Fortresses',
      'Chamber Music & Traditional Puppet Theaters',
      'Artisanal Textile & Royal Blue Pottery Guilds',
      'Palatial Candlelit Courtyard Dinners'
    ],
    featured: true,
    images: {
      hero: 'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=1200&auto=format&fit=crop'
      ]
    }
  },
  {
    id: 'coastal-cliff-drives',
    name: 'Azure Coastlines & Palm Drives',
    region: 'Maritime Highways & Coastal Bluffs',
    category: 'Coastal Escape',
    subtitle: 'Sea breezes, coastal fishing hamlets, and golden sands stretching into the sunset.',
    editorialSnippet: 'Cruise down coastal state highways lined with coconut groves, colonial churches, and secluded sandy coves.',
    fullDescription: 'Nothing evokes the romance of the open road quite like a highway tracing the rhythm of the ocean tide. Roll down your windows or let our climate control buffer the humid breeze as you journey between serene seaside cliffs, ancient coastal forts, and open-air beach shacks serving sea catch of the day. Stop whenever you wish for photographs as the sun casts liquid gold across the sea.',
    distanceGuide: 'Coastal Shoreline Drive (Approx. 180 – 350 KM)',
    recommendedDuration: '2 to 4 Days Itinerary',
    bestTimeToVisit: 'November through May (Sunny horizons)',
    recommendedFleet: ['Force Urbania', 'Luxury SUV', 'Executive Sedan'],
    highlights: [
      'Scenic Cliffside Highway Overlooks',
      'Portuguese Colonial Churches & Spice Plantations',
      'Sunset Catamaran Anchorages',
      'Quiet Untouched Coconut Beaches'
    ],
    featured: true,
    images: {
      hero: 'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1512343879784-a960bf40e7f2?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1473496169904-658ba7c44d8a?q=80&w=1200&auto=format&fit=crop'
      ]
    }
  },
  {
    id: 'sacred-river-temples',
    name: 'Ancient Spiritual & Temple Corridors',
    region: 'Sacred Riverfronts & Chidambaram Pilgrimages',
    category: 'Pilgrimage Circuit',
    subtitle: 'Sacred river ghats, monumental gopurams, and morning chants echoing across centuries.',
    editorialSnippet: 'Serene, respectful chauffeured passages across iconic pilgrimage shrines, providing comfort to elderly family members.',
    fullDescription: 'Spiritual circuits demand devotion, calm, and seamless logistics. Traveling with multi-generational families—often including elderly parents and young children—requires vehicles that eliminate physical strain. Our chauffeurs take special care to ensure smooth acceleration, easy boarding access, timely temple arrival timings, and comfortable rest halts.',
    distanceGuide: 'Sacred Circuit (Approx. 400 – 750 KM)',
    recommendedDuration: '4 to 6 Days Itinerary',
    bestTimeToVisit: 'Year-round auspicious seasons',
    recommendedFleet: ['Innova / Premium MUV', 'Tempo Traveller', 'Force Urbania'],
    highlights: [
      'Evening Aarti on Holy Riverstone Ghats',
      'Ancient Dravidian Stone Gopurams',
      'Peaceful Meditation Ashrams & Sanctums',
      'Dedicated Comfortable Rest Halts for Elders'
    ],
    featured: false,
    images: {
      hero: 'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1561361513-2d000a50f0dc?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=80&w=1200&auto=format&fit=crop'
      ]
    }
  },
  {
    id: 'wildlife-forest-reserves',
    name: 'Untamed Jungles & Tiger Reserves',
    region: 'Deciduous Woodlands & National Parks',
    category: 'Wildlife & Nature',
    subtitle: 'Dense sal canopies, morning safari departures, and wildlife sightings.',
    editorialSnippet: 'Journey from city limits deep into the forested heartlands where leopards prowl and bird song replaces sirens.',
    fullDescription: 'Escape the metropolis into lush deciduous corridors and raw wilderness reserves. Having a dedicated vehicle stationed at your jungle lodge gives you total freedom to attend early dawn safari gate entries, explore surrounding buffer zone rivers, and make spontaneous detours along quiet forest trails.',
    distanceGuide: 'Wilderness Sanctuary Trail (Approx. 280 – 520 KM)',
    recommendedDuration: '3 to 4 Days Itinerary',
    bestTimeToVisit: 'November through June',
    recommendedFleet: ['All-Terrain Luxury SUV', 'Innova / Premium MUV'],
    highlights: [
      'Dawn Open-Top Jeep Safari Coordination',
      'Bird Sanctuary Walkways & Watchtowers',
      'Rustic Campfire Evenings at Forest Lodges',
      'Scenic Riverbed Picnics'
    ],
    featured: true,
    images: {
      hero: 'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=1200&auto=format&fit=crop',
      gallery: [
        'https://images.unsplash.com/photo-1534177616072-ef7dc120449d?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&w=1200&auto=format&fit=crop',
        'https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=1200&auto=format&fit=crop'
      ]
    }
  }
];
