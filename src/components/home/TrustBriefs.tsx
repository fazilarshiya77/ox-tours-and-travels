import React from 'react';
import { TRUST_BRIEFS } from '../../data/homeContent';
import { Reveal, stagger } from '../ui/Reveal';

/** "The Ox Standard" — three numbered briefs in a ruled row. */
export const TrustBriefs: React.FC<{ className?: string }> = ({ className }) => (
  <section aria-labelledby="ox-standard-title" className={className}>
    <h2
      id="ox-standard-title"
      className="mb-4 border-b-[3px] border-ink-black pb-2 font-sans text-xs font-bold uppercase tracking-[0.18em]"
    >
      The Ox Standard
    </h2>
    <ol className="rule-grid grid-cols-1 md:grid-cols-3">
      {TRUST_BRIEFS.map((brief, i) => (
        <Reveal as="li" key={brief.title} delay={stagger(i)} className="flex gap-4 p-5 sm:p-6">
          <span className="font-serif text-4xl font-black leading-none text-ink-light" aria-hidden="true">
            {i + 1}
          </span>
          <div>
            <h3 className="text-xl font-black leading-tight">{brief.title}</h3>
            <p className="mt-1.5 text-base leading-snug text-ink-charcoal">{brief.text}</p>
          </div>
        </Reveal>
      ))}
    </ol>
  </section>
);
