import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../data/siteConfig';
import { formatDateline } from '../../lib/dates';

const Star: React.FC = () => (
  <span aria-hidden="true" className="px-3 text-base sm:px-5">
    ✱
  </span>
);

/** Nameplate between double rules, then a dateline: volume ✱ motto ✱ date. */
export const Masthead: React.FC = () => (
  <header className="print:hidden">
    <div className="mx-auto max-w-page px-4 sm:px-6 lg:px-8">
      <div className="rule-thick-thin mt-5 sm:mt-7" aria-hidden="true" />

      {/*
        The nameplate is sized from the width of this box (cqw), not the screen,
        so it always fits between the rules at any window width or browser zoom.
      */}
      <div className="overflow-hidden py-3 text-center [container-type:inline-size] sm:py-4">
        <Link to="/" className="block" aria-label={`${SITE_CONFIG.brandName} — front page`}>
          <span className="nameplate block whitespace-nowrap text-[min(10.6cqw,8rem)]">
            {SITE_CONFIG.nameplate}
          </span>
        </Link>
      </div>

      <div className="rule-thin-thick" aria-hidden="true" />

      {/* Dateline */}
      <div className="flex items-center justify-center whitespace-nowrap py-2.5 font-sans text-[13px] font-bold uppercase tracking-[0.14em] sm:text-base">
        <span className="hidden sm:inline">{SITE_CONFIG.volume}</span>
        <span className="hidden sm:inline">
          <Star />
        </span>
        <span className="hidden md:inline">{SITE_CONFIG.mastheadTagline}</span>
        <span className="hidden md:inline">
          <Star />
        </span>
        <time>{formatDateline()}</time>
      </div>

      <div className="rule-thick-thin" aria-hidden="true" />
    </div>
  </header>
);
