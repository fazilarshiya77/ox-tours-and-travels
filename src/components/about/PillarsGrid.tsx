import React from 'react';
import { PILLARS } from '../../data/aboutContent';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal, stagger } from '../ui/Reveal';

/** The six pillars, as a ruled grid of numbered briefs. */
export const PillarsGrid: React.FC = () => (
  <section>
    <SectionHeader kicker="Our Approach" title="The Six Pillars of Every Journey" />
    <ol className="rule-grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {PILLARS.map(({ icon: Icon, title, text }, i) => (
        <Reveal as="li" key={title} delay={stagger(i)} className="p-6">
          <div className="flex items-center justify-between">
            <span className="font-serif text-3xl font-black text-ink-light" aria-hidden="true">
              {String(i + 1).padStart(2, '0')}
            </span>
            <Icon className="h-5 w-5" aria-hidden="true" />
          </div>
          <h3 className="mt-3 text-xl font-black">{title}</h3>
          <p className="mt-2 text-base leading-relaxed text-ink-charcoal">{text}</p>
        </Reveal>
      ))}
    </ol>
  </section>
);
