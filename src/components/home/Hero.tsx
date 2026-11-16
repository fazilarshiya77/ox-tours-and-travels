import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { HERO_PHOTO, HERO_STATS } from '../../data/homeContent';
import { Button } from '../ui/Button';
import { CountUp } from '../ui/CountUp';
import { Reveal } from '../ui/Reveal';

/**
 * Front-page hero: a black headline panel beside a large photograph,
 * with a strip of key facts underneath and a caption below the frame.
 */
export const Hero: React.FC<{ className?: string }> = ({ className }) => (
  <Reveal as="section" aria-labelledby="hero-headline" className={className}>
    <div className="border border-ink-black">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Headline panel */}
        <div className="flex flex-col justify-center bg-ink-black px-6 py-10 text-paper-white sm:px-10 sm:py-12 lg:min-h-[30rem] xl:px-14">
          <p className="flex items-center gap-2.5 font-sans text-sm font-bold uppercase tracking-[0.16em] text-paper-aged">
            <span className="h-2.5 w-2.5 shrink-0 bg-press" aria-hidden="true" />
            Cover Story · National Motoring Edition
          </p>

          <h1 id="hero-headline" className="headline mt-5 text-[2.4rem] sm:text-5xl lg:text-[2.7rem] xl:text-6xl">
            The World Is Waiting. <em>Let&rsquo;s Take</em> the Road.
          </h1>

          <p className="mt-5 max-w-lg font-serif text-lg italic leading-snug text-paper-aged sm:text-xl">
            From spontaneous weekend escapes to carefully planned journeys, discover comfortable, reliable and
            memorable travel with Ox Tours and Travels.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Button to="/book" variant="inverse" className="min-h-[50px] whitespace-nowrap">
              <span>Book Your Journey</span>
              <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button to="/fleet" variant="inverse-outline" className="min-h-[50px] whitespace-nowrap">
              Explore Our Fleet
            </Button>
          </div>
        </div>

        {/* Photograph */}
        <div className="relative min-h-[18rem] border-t border-ink-black sm:min-h-[24rem] lg:border-l lg:border-t-0">
          <img
            src={HERO_PHOTO.src}
            alt={HERO_PHOTO.alt}
            decoding="async"
            className="absolute inset-0 h-full w-full object-cover"
          />
        </div>
      </div>

      {/* Key facts */}
      <dl className="rule-grid grid-cols-2 border-t border-ink-black lg:grid-cols-4">
        {HERO_STATS.map((stat) => (
          <div key={stat.label} className="flex flex-col-reverse px-3 py-4 text-center sm:py-5">
            <dt className="folio mt-1">{stat.label}</dt>
            <dd className="font-serif text-3xl font-black leading-none sm:text-4xl">
              <CountUp value={stat.value} />
            </dd>
          </div>
        ))}
      </dl>
    </div>

    <p className="mt-2 text-[15px] italic leading-snug text-ink-muted">
      {HERO_PHOTO.caption}
      <span className="ml-1 font-sans text-[10px] font-semibold uppercase not-italic tracking-[0.14em]">
        Photograph: {HERO_PHOTO.credit}
      </span>
    </p>
  </Reveal>
);
