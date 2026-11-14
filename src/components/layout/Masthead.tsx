import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../data/siteConfig';
import { PhoneCall, ShieldCheck } from 'lucide-react';

export const Masthead: React.FC = () => {
  const today = new Intl.DateTimeFormat('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
    year: 'numeric'
  }).format(new Date());

  return (
    <header className="bg-paper-warm/80 border-b border-ink-black/10 select-none">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Subtle top information row */}
        <div className="flex items-center justify-between text-[11px] font-mono uppercase tracking-wider text-ink-muted py-2 border-b border-ink-black/10">
          <div className="flex items-center gap-2 sm:gap-4">
            <span className="font-semibold text-ink-black">{SITE_CONFIG.volume}</span>
            <span className="text-ink-black/30">•</span>
            <span className="hidden sm:inline">{today}</span>
            <span className="text-ink-black/30 hidden sm:inline">•</span>
            <span className="text-vintage-red font-semibold">{SITE_CONFIG.edition}</span>
          </div>

          <div className="flex items-center gap-3">
            <a 
              href={`tel:${SITE_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`}
              className="hover:text-vintage-red transition-colors flex items-center gap-1.5 font-medium text-ink-black"
            >
              <PhoneCall className="w-3 h-3 text-vintage-red" />
              <span>{SITE_CONFIG.contact.primaryPhone}</span>
            </a>
          </div>
        </div>

        {/* Newspaper Center Masthead Wordmark */}
        <div className="text-center py-6 sm:py-8">
          <Link to="/" className="group inline-block focus:outline-none">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tight text-ink-black uppercase transition-colors group-hover:text-ink-charcoal">
              {SITE_CONFIG.brandName}
            </h1>
          </Link>

          <p className="mt-2 text-xs sm:text-sm font-serif italic text-vintage-red tracking-wide">
            &ldquo;{SITE_CONFIG.mastheadTagline}&rdquo;
          </p>
        </div>

        {/* Clean Editorial Divider Row */}
        <div className="py-2.5 border-t border-b border-ink-black/15 flex items-center justify-between text-[11px] sm:text-xs font-serif uppercase tracking-[0.2em] text-ink-charcoal font-semibold">
          <span className="hidden md:inline text-ink-muted text-[10px] font-mono tracking-widest">
            ESTD. FOR LUXURY ROADS
          </span>
          <span className="mx-auto md:mx-0 text-center tracking-[0.25em]">
            {SITE_CONFIG.editorialRow}
          </span>
          <span className="hidden md:flex items-center gap-1 text-vintage-red text-[10px] font-mono font-bold tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" /> CHAUFFEUR CERTIFIED
          </span>
        </div>

      </div>
    </header>
  );
};