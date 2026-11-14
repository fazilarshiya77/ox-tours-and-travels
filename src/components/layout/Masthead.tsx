import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../data/siteConfig';
import { ShieldCheck } from 'lucide-react';

export const Masthead: React.FC = () => {
  return (
    <header className="bg-paper-warm border-b border-ink-black/15 select-none relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Newspaper Center Masthead Wordmark */}
        <div className="text-center py-6 sm:py-8">
          <Link to="/" className="group inline-block focus:outline-none">
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-black tracking-tighter text-ink-black uppercase transition-transform group-hover:scale-[1.008] duration-300">
              {SITE_CONFIG.brandName}
            </h1>
          </Link>

          <p className="mt-2 text-xs sm:text-sm font-serif italic text-ink-muted tracking-widest uppercase">
            &ldquo;{SITE_CONFIG.mastheadTagline}&rdquo;
          </p>
        </div>

        {/* Clean Editorial Divider Row */}
        <div className="py-2.5 border-t border-b-2 border-ink-black flex items-center justify-between text-[11px] sm:text-xs font-serif uppercase tracking-[0.22em] text-ink-black font-bold">
          <span className="hidden md:inline text-ink-muted text-[10px] font-mono tracking-widest">
            ESTD. FOR LUXURY ROADS
          </span>
          <span className="mx-auto md:mx-0 text-center tracking-[0.25em]">
            {SITE_CONFIG.editorialRow}
          </span>
          <span className="hidden md:flex items-center gap-1 text-ink-black text-[10px] font-mono font-bold tracking-widest">
            <ShieldCheck className="w-3.5 h-3.5" /> CHAUFFEUR CERTIFIED
          </span>
        </div>

      </div>
    </header>
  );
};
