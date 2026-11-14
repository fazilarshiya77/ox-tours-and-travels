import React from 'react';
import { Armchair, Compass, CalendarRange, Headphones } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';
import { EditorialSectionHeader } from '../ui/EditorialSectionHeader';

export const WhyChooseUs: React.FC = () => {
  const icons = [
    <Armchair key="01" className="w-5 h-5 text-white stroke-[2]" />,
    <Compass key="02" className="w-5 h-5 text-white stroke-[2]" />,
    <CalendarRange key="03" className="w-5 h-5 text-white stroke-[2]" />,
    <Headphones key="04" className="w-5 h-5 text-white stroke-[2]" />
  ];

  return (
    <section className="py-20 bg-paper-white border-b border-ink-black/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <EditorialSectionHeader
          label="THE EDITORIAL MANIFESTO"
          title="MORE THAN JUST A RIDE."
          subtitle="Four foundational tenets governing how every vehicle is inspected, dispatched, and chauffeured across national roadways."
          number="02"
        />

        {/* Four Feature Blocks with Glossy Card Finish */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SITE_CONFIG.editorialPillars.map((pillar, index) => (
            <div
              key={pillar.number}
              className="glossy-card rounded-lg p-7 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between border-b border-ink-black/10 pb-4 mb-4">
                  <span className="font-mono text-2xl font-black text-ink-black tracking-tight">
                    {pillar.number}
                  </span>
                  <div className="w-9 h-9 rounded-sm bg-ink-black flex items-center justify-center shadow-sm">
                    {icons[index]}
                  </div>
                </div>

                <h3 className="font-serif font-black text-xl text-ink-black uppercase tracking-tight">
                  {pillar.title}
                </h3>

                <p className="mt-2 text-xs font-serif italic text-ink-charcoal leading-snug">
                  {pillar.lead}
                </p>

                <p className="mt-3 text-xs sm:text-[13px] text-ink-muted leading-relaxed font-sans">
                  {pillar.desc}
                </p>
              </div>

              <div className="mt-6 pt-3 border-t border-ink-black/10 flex items-center justify-between text-[11px] font-mono text-ink-muted uppercase tracking-wider">
                <span>VERIFIED STANDARD</span>
                <span className="text-ink-black font-bold">OX PROMISE</span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};