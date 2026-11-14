import React from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { EditorialSectionHeader } from '../components/ui/EditorialSectionHeader';
import { Button } from '../components/ui/Button';
import { CheckCircle2, ArrowUpRight, Compass } from 'lucide-react';

export const ServicesPage: React.FC = () => {
  return (
    <div className="py-12 bg-paper-warm min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <EditorialSectionHeader
          label="THE CHAUFFEURED PORTFOLIO"
          title="PRECISION TRAVEL SERVICES FOR EVERY DISPATCH"
          subtitle="Explore our comprehensive suite of chauffeured road transit solutions, tailored for corporate executives, vacationing families, and grand event convoys."
        />

        {/* Alternating Image and Text Editorial Layouts */}
        <div className="space-y-12 mt-10">
          {SERVICES_DATA.map((service, index) => {
            const isEven = index % 2 === 1;

            return (
              <article
                key={service.id}
                id={service.slug}
                className="glossy-card rounded-lg p-6 sm:p-8 lg:p-10 shadow-sm"
              >
                {/* Header Tag */}
                <div className="flex items-center justify-between border-b border-ink-black/10 pb-3 mb-6 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="vintage-stamp">
                      SERVICE NO. {index + 1}
                    </span>
                    <span className="text-ink-black font-bold uppercase">
                      {service.editorialLabel}
                    </span>
                  </div>
                  <span className="px-2.5 py-0.5 bg-paper-warm rounded-sm border border-ink-black/10 text-ink-charcoal uppercase font-bold text-[10px]">
                    {service.badge}
                  </span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  
                  {/* Image Column with Black & White Glossy Treatment */}
                  <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="relative rounded-sm overflow-hidden border border-ink-black/20 shadow-sm bg-black glass-reflection">
                      <div className="aspect-[4/3] w-full overflow-hidden">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="w-full h-full object-cover bw-gloss-img"
                          loading="lazy"
                        />
                      </div>
                    </div>
                  </div>

                  {/* Text Column */}
                  <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <h2 className="text-2xl sm:text-3xl font-serif font-black text-ink-black uppercase tracking-tight leading-tight">
                      {service.title}
                    </h2>

                    <p className="font-serif italic text-sm sm:text-base text-ink-muted">
                      &ldquo;{service.tagline}&rdquo;
                    </p>

                    <p className="text-xs sm:text-sm text-ink-charcoal font-sans leading-relaxed">
                      {service.fullDescription}
                    </p>

                    {/* Benefits Grid */}
                    <div className="pt-2">
                      <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-ink-black mb-2">
                        KEY SERVICE ADVANTAGES:
                      </h4>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-ink-charcoal font-sans">
                        {service.benefits.map((benefit, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-ink-black shrink-0 mt-0.5" />
                            <span className="leading-snug">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-ink-black/10 flex flex-wrap items-center gap-3">
                      <Button to="/book" variant="primary" size="sm">
                        <span>REQUISITION THIS SERVICE</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                      <Button to="/contact" variant="outline" size="sm">
                        <span>INQUIRE WITH DISPATCH</span>
                      </Button>
                    </div>

                  </div>

                </div>
              </article>
            );
          })}
        </div>

        {/* Custom Tour Banner */}
        <div className="mt-16 glossy-card rounded-lg p-8 text-center shadow-sm">
          <span className="vintage-stamp">BESPOKE ARCHITECTURE</span>
          <h3 className="mt-2 text-2xl sm:text-3xl font-serif font-black text-ink-black uppercase">
            HAVE A CUSTOM MULTI-CITY OR EVENT SCHEDULE?
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-ink-muted max-w-xl mx-auto font-sans leading-relaxed">
            Our route planners coordinate interstate logistics, toll clearances, chauffeur rotations, and overnight hotel stays for extended tours.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <Button to="/book" variant="primary" size="md">
              <Compass className="w-4 h-4 mr-1.5" />
              <span>CUSTOMIZE YOUR TOUR ITINERARY</span>
            </Button>
          </div>
        </div>

      </div>
    </div>
  );
};