import React from 'react';
import { cn } from '../../lib/cn';
import { Reveal } from './Reveal';

interface SectionHeaderProps {
  /** Small red label above the headline. */
  kicker: string;
  title: string;
  /** Italic standfirst under the headline. */
  deck?: string;
  /** Section / page reference shown on the right, e.g. "Section A". */
  folio?: string;
  /** Use "h1" for the page's main heading, "h2" for sections within a page. */
  as?: 'h1' | 'h2';
  className?: string;
}

/** A newspaper section flag: thick-thin rule, kicker, headline and deck. */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  kicker,
  title,
  deck,
  folio,
  as: Heading = 'h2',
  className,
}) => (
  <Reveal as="header" className={cn('mb-8', className)}>
    <div className="rule-thick-thin" aria-hidden="true" />
    <div className="flex items-baseline justify-between gap-4 pt-3">
      <p className="kicker">{kicker}</p>
      {folio && <p className="folio shrink-0">{folio}</p>}
    </div>
    <Heading
      className={cn(
        'headline mt-2',
        Heading === 'h1' ? 'text-4xl sm:text-6xl lg:text-7xl' : 'text-3xl sm:text-5xl lg:text-6xl',
      )}
    >
      {title}
    </Heading>
    {deck && <p className="deck mt-3 max-w-3xl text-lg sm:text-xl">{deck}</p>}
  </Reveal>
);
