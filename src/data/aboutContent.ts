import { CheckCircle2, Compass, HeartHandshake, ShieldCheck, Sparkles, Users, type LucideIcon } from 'lucide-react';

export const FOUNDING_ESSAY: string[] = [
  'Modern travel has increasingly succumbed to haste. Aggregators prioritize algorithmically matched cabs, unpredictable vehicle cleanliness, and drivers operating under relentless time stress. In this race toward commodity transit, the romance, safety, and serene grace of the open highway have often been forgotten.',
  'At Ox Tours and Travels, our fundamental posture is different. We approach every booking as a commission of trust. When a family entrusts us with their multi-day holiday across winding mountain roads, or an executive relies on us to navigate crucial inter-city meetings, our responsibility extends far beyond simply driving from point A to point B.',
  'We believe the cabin should serve as an oasis: a spotless, climate-buffered sanctuary where conversations unfold without strain, where elderly travelers feel physically safeguarded, and where children gaze through panoramic glass at the unfolding countryside.',
  'Every vehicle in our fleet, from the Toyota Innova Crysta and Force Urbania luxury vans to our multi-seater Tempo Travellers and 21-seater coach, is maintained with disciplined mechanical rigor. Our chauffeurs are trained not merely in defensive driving, but in gracious guest etiquette, route foresight, and patience.',
];

export interface Pillar {
  icon: LucideIcon;
  title: string;
  text: string;
}

export const PILLARS: Pillar[] = [
  {
    icon: ShieldCheck,
    title: 'Mechanical Sanity',
    text: 'Zero compromise on brake linings, tire condition, cooling system fluids, and suspension health before any vehicle rolls out of the depot.',
  },
  {
    icon: HeartHandshake,
    title: 'Chauffeur Decorum',
    text: 'Courteous, verified highway professionals who respect passenger privacy, maintain uniform standards, and practice defensive driving.',
  },
  {
    icon: Compass,
    title: 'Route Foresight',
    text: 'Active monitoring of weather, highway lane closures and toll congestion, with vetted, clean roadside dining halts.',
  },
  {
    icon: Users,
    title: 'Generational Comfort',
    text: 'Thoughtful boarding for elderly travelers, smooth acceleration without jarring stops, and child safety accommodations.',
  },
  {
    icon: Sparkles,
    title: 'Pristine Hygiene',
    text: 'Deep-vacuumed upholstery, clean floor mats, sanitized air conditioning ducts, and fresh bottled refreshments on every trip.',
  },
  {
    icon: CheckCircle2,
    title: 'Billing Transparency',
    text: 'Itemized statements covering distance, tolls and driver allowances, with zero arbitrary surcharges.',
  },
];
