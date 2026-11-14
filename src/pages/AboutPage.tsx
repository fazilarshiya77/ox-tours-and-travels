import React from 'react';
import { SITE_CONFIG } from '../data/siteConfig';
import { EditorialSectionHeader } from '../components/ui/EditorialSectionHeader';
import { Button } from '../components/ui/Button';
import { ShieldCheck, HeartHandshake, Compass, Users, Sparkles, CheckCircle2, ArrowUpRight } from 'lucide-react';

export const AboutPage: React.FC = () => {
  return (
    <div className="py-12 bg-paper-warm min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <EditorialSectionHeader
          label="THE CHRONICLE & PHILOSOPHY"
          title="WE BELIEVE EVERY JOURNEY SHOULD BE WORTH REMEMBERING."
          subtitle="A travel agency conceived on the premise that road transport should elevate the spirit rather than test one's patience."
        />

        {/* Story Card with Glossy Look */}
        <div className="glossy-card rounded-lg p-6 sm:p-10 lg:p-12 mb-12">
          
          <div className="border-b border-ink-black/10 pb-4 mb-8 flex flex-wrap items-center justify-between text-xs font-mono text-ink-muted gap-2">
            <div>
              <span className="text-ink-black font-bold uppercase tracking-wider">FOUNDATIONAL ESSAY</span>
              <span className="mx-2">•</span>
              <span>THE OPEN ROAD AS A SANCTUARY</span>
            </div>
            <div className="italic font-serif">
              &ldquo;Ox Tours and Travels Editorial Code&rdquo;
            </div>
          </div>

          {/* Editorial Columns */}
          <div className="editorial-columns-2 text-ink-charcoal font-serif text-sm sm:text-base leading-relaxed space-y-4">
            <p className="editorial-dropcap">
              Modern travel has increasingly succumbed to haste. Aggregators prioritize algorithmically matched cabs, unpredictable vehicle cleanliness, and drivers operating under relentless time stress. In this race toward commodity transit, the romance, safety, and serene grace of the open highway have often been forgotten.
            </p>

            <p>
              At Ox Tours and Travels, our fundamental posture is different. We approach every booking as a sacred commission of trust. When a family entrusts us with their multi-day holiday across winding mountain roads, or an executive relies on us to navigate crucial inter-city meetings, our responsibility extends far beyond simply steering a steering wheel from point A to point B.
            </p>

            <p>
              We believe the automobile cabin should serve as an oasis—a spotless, climate-buffered sanctuary where conversations unfold without strain, where elderly travelers feel physically safeguarded, and where children gaze through panoramic glass at the unfolding countryside.
            </p>

            <p>
              Every vehicle in our fleet, from the executive sedan to the high-roof Force Urbania, is maintained with disciplined mechanical rigor. Our chauffeurs are trained not merely in defensive driving techniques, but in gracious guest etiquette, route foresight, and patience.
            </p>
          </div>

          {/* Glossy Pull Quote */}
          <div className="my-10 p-6 sm:p-8 bg-paper-warm rounded-lg border border-ink-black/10 text-center shadow-inner">
            <blockquote className="font-serif italic text-xl sm:text-2xl text-ink-black max-w-2xl mx-auto">
              &ldquo;{SITE_CONFIG.corePhilosophy}&rdquo;
            </blockquote>
            <p className="mt-2 text-xs font-mono uppercase tracking-widest text-ink-black font-bold">
              — THE OX TOURS COMMITMENT
            </p>
          </div>

          {/* Pillars Grid with Glossy Cards */}
          <div className="mt-12">
            <h3 className="text-xl sm:text-2xl font-serif font-black uppercase text-ink-black border-b border-ink-black/10 pb-3 mb-6">
              THE SIX PILLARS OF OUR TRAVEL APPROACH
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              
              <div className="border border-ink-black/10 rounded-sm p-6 bg-paper-warm/70 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-ink-black">
                  <ShieldCheck className="w-5 h-5" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">01. Mechanical Sanity</span>
                </div>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                  Zero compromise on brake linings, tire condition, cooling system fluids, and suspension health before any vehicle rolls out of depot.
                </p>
              </div>

              <div className="border border-ink-black/10 rounded-sm p-6 bg-paper-warm/70 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-ink-black">
                  <HeartHandshake className="w-5 h-5" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">02. Chauffeur Decorum</span>
                </div>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                  Courteous, verified highway professionals who respect passenger privacy, maintain uniform standards, and practice defensive navigation.
                </p>
              </div>

              <div className="border border-ink-black/10 rounded-sm p-6 bg-paper-warm/70 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-ink-black">
                  <Compass className="w-5 h-5" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">03. Route Foresight</span>
                </div>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                  Active monitoring of weather conditions, highway lane closures, toll congestions, and vetted clean roadside dining halts.
                </p>
              </div>

              <div className="border border-ink-black/10 rounded-sm p-6 bg-paper-warm/70 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-ink-black">
                  <Users className="w-5 h-5" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">04. Generational Comfort</span>
                </div>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                  Thoughtful boarding ergonomics for elderly travelers, smooth gentle acceleration without jarring stops, and child safety accommodations.
                </p>
              </div>

              <div className="border border-ink-black/10 rounded-sm p-6 bg-paper-warm/70 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-ink-black">
                  <Sparkles className="w-5 h-5" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">05. Pristine Hygiene</span>
                </div>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                  Deep vacuumed upholstery, clean floor mats, sanitized air conditioning ducts, and fresh bottled refreshments on every passage.
                </p>
              </div>

              <div className="border border-ink-black/10 rounded-sm p-6 bg-paper-warm/70 shadow-sm">
                <div className="flex items-center gap-2 mb-2 text-ink-black">
                  <CheckCircle2 className="w-5 h-5" />
                  <span className="font-mono text-xs font-bold uppercase tracking-wider">06. Billing Transparency</span>
                </div>
                <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                  Transparent itemized statements covering distance, toll regulations, and driver allowances with zero arbitrary surcharges.
                </p>
              </div>

            </div>
          </div>

        </div>

        {/* Invitation */}
        <div className="glossy-card rounded-lg p-8 sm:p-10 text-center">
          <span className="vintage-stamp">THE OPEN INVITATION</span>
          <h3 className="mt-2 text-3xl font-serif font-black text-ink-black uppercase">
            LET US DRIVE YOUR NEXT EXPEDITION
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-ink-muted max-w-lg mx-auto font-sans leading-relaxed">
            Whether for a single day of executive city appointments or a week-long journey through high mountain valleys, experience the difference of dedicated chauffeured travel.
          </p>

          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <Button to="/book" variant="primary" size="md">
              <span>BOOK YOUR JOURNEY</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
            <Button to="/fleet" variant="outline" size="md">
              <span>EXPLORE THE FLEET</span>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};