import React from 'react';
import { Quote } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/testimonialsData';
import { EditorialSectionHeader } from '../ui/EditorialSectionHeader';

export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-paper-warm/50 border-b border-ink-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <EditorialSectionHeader
          label="CORRESPONDENCE & DISPATCH"
          title="THE PEOPLE WHO TRAVEL WITH US."
          subtitle="Reflections and dispatches recorded from our travel logbook. (Sample representative placeholders; verified customer citations added upon launch)."
          number="05"
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {TESTIMONIALS_DATA.map((t) => (
            <div
              key={t.id}
              className="bg-paper-white rounded-lg border border-ink-black/15 p-7 sm:p-8 flex flex-col justify-between shadow-sm transition-shadow hover:shadow-md"
            >
              <div>
                <div className="flex items-center justify-between border-b border-ink-black/10 pb-3 mb-4 text-[10px] font-mono">
                  <span className="text-vintage-red font-bold uppercase tracking-wider">
                    {t.dispatchType.split('•')[0]}
                  </span>
                  <span className="text-ink-muted">
                    {t.datePlaceholder}
                  </span>
                </div>

                <Quote className="w-8 h-8 text-vintage-red/20 mb-3" />

                <blockquote className="font-serif italic text-base sm:text-lg text-ink-black leading-relaxed">
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
              </div>

              <div className="mt-6 pt-4 border-t border-ink-black/10 flex flex-col sm:flex-row sm:items-center justify-between gap-2 text-xs font-mono">
                <div>
                  <p className="font-bold uppercase text-ink-black tracking-wide">
                    {t.passengerInitials}
                  </p>
                  <p className="text-[11px] text-ink-muted">
                    {t.cityOrRoute}
                  </p>
                </div>

                <span className="inline-block px-2.5 py-1 bg-paper-warm rounded border border-ink-black/10 text-[10px] text-vintage-red font-semibold self-start sm:self-auto">
                  {t.vehicleExperienced}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-xs font-mono text-ink-muted">
          * Note: Citations above illustrate editorial layout format and representative customer experiences.
        </p>

      </div>
    </section>
  );
};