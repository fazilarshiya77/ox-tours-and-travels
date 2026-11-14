import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { SERVICES_DATA } from '../../data/servicesData';
import { EditorialSectionHeader } from '../ui/EditorialSectionHeader';
import { Button } from '../ui/Button';

export const ServicesOverview: React.FC = () => {
  return (
    <section className="py-20 bg-paper-white border-b border-ink-black/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <EditorialSectionHeader
          label="THE CHAUFFEUR DIRECTORY"
          title="SERVICES CRAFTED FOR THE DISCERNING TRAVELER"
          subtitle="Whether navigating congested inner-city business districts, arriving late at an airport terminal, or crossing four state borders on holiday."
          number="04"
        />

        {/* Glossy Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {SERVICES_DATA.slice(0, 6).map((service) => (
            <div
              key={service.id}
              className="glossy-card rounded-lg p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between border-b border-ink-black/10 pb-3 mb-4">
                  <span className="text-[11px] font-mono uppercase font-bold text-ink-black tracking-wider">
                    {service.editorialLabel}
                  </span>
                  <span className="text-[10px] font-mono uppercase bg-paper-warm text-ink-black px-2 py-0.5 rounded-sm border border-ink-black/15 font-semibold">
                    {service.badge}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-serif font-black text-ink-black uppercase tracking-tight group-hover:text-black transition-colors">
                  <Link to="/services">
                    {service.title}
                  </Link>
                </h3>

                <p className="font-serif italic text-xs text-ink-muted mt-1">
                  &ldquo;{service.tagline}&rdquo;
                </p>

                <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                  {service.summary}
                </p>

                {/* Key Benefits */}
                <ul className="mt-5 pt-4 border-t border-ink-black/10 space-y-2 text-xs text-ink-charcoal">
                  {service.benefits.slice(0, 3).map((b, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2">
                      <CheckCircle2 className="w-4 h-4 text-ink-black shrink-0 mt-0.5" />
                      <span className="leading-snug">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-ink-black/10 flex items-center justify-between">
                <span className="text-[11px] font-mono uppercase text-ink-muted">
                  TARIFF ON REQUISITION
                </span>
                <Link
                  to="/services"
                  className="inline-flex items-center gap-1 text-xs font-mono font-bold uppercase text-ink-black hover:underline"
                >
                  <span>Learn More</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* View All Services CTA */}
        <div className="mt-14 text-center">
          <Button to="/services" variant="primary" size="md">
            <span>VIEW DETAILED SERVICE PORTFOLIO</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

      </div>
    </section>
  );
};