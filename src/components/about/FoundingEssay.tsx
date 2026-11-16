import React from 'react';
import { FOUNDING_ESSAY } from '../../data/aboutContent';
import { SITE_CONFIG } from '../../data/siteConfig';
import { Reveal } from '../ui/Reveal';

/** The About essay, set in two justified columns with a drop cap, followed by a pull quote. */
export const FoundingEssay: React.FC = () => (
  <article>
    <p className="folio border-b border-paper-rule pb-2">The Founding Essay · The Open Road as a Sanctuary</p>

    <Reveal className="columns-news text-justify-news mt-6 space-y-4 text-lg leading-relaxed text-ink-charcoal">
      {FOUNDING_ESSAY.map((paragraph, i) => (
        <p key={i} className={i === 0 ? 'dropcap' : undefined}>
          {paragraph}
        </p>
      ))}
    </Reveal>

    <Reveal as="figure" className="mx-auto my-12 max-w-3xl border-y-[3px] border-ink-black py-7 text-center">
      <blockquote className="font-serif text-2xl font-bold italic leading-snug sm:text-3xl">
        &ldquo;{SITE_CONFIG.corePhilosophy}&rdquo;
      </blockquote>
      <figcaption className="folio mt-3">The Ox Tours Commitment</figcaption>
    </Reveal>
  </article>
);
