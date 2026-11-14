import React from 'react';
import { ArrowUpRight, Compass, PhoneCall } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';
import { Button } from '../ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-ink-black text-white relative overflow-hidden border-b border-white/10 shadow-glossy-dark">
      {/* Subtle glossy gradient reflection */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="ink-stamp">THE FINAL DISPATCH</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-white uppercase leading-[1.08]">
          YOUR NEXT GREAT STORY <br />
          <span className="font-display italic font-normal text-paper-aged">STARTS HERE.</span>
        </h2>

        <p className="mt-6 text-base sm:text-xl font-serif italic text-paper-aged max-w-xl mx-auto leading-relaxed">
          &ldquo;Tell us where you want to go. We&apos;ll help you get there.&rdquo;
        </p>

        <p className="mt-3 text-xs sm:text-sm text-ink-light max-w-lg mx-auto font-sans leading-relaxed">
          Speak with our route desk or submit a journey requisition. We coordinate every halt, monitor highway conditions, and provide dependable luxury chauffeured transit.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button to="/book" variant="secondary" size="lg">
            <span>PLAN YOUR JOURNEY</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>

          <Button 
            href={`tel:${SITE_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`} 
            variant="outline" 
            size="lg"
            className="border-white/30 text-white hover:bg-white hover:text-black"
          >
            <PhoneCall className="w-4 h-4 mr-1 text-white" />
            <span>CALL DISPATCH: {SITE_CONFIG.contact.primaryPhone}</span>
          </Button>
        </div>

        <div className="mt-12 pt-6 border-t border-white/15 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-ink-light">
          <span className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-white" />
            <span>Customized Outstation Packages</span>
          </span>
          <span>•</span>
          <span>Transparent Kilometer Tariffs</span>
          <span>•</span>
          <span>Zero Cancellation Friction</span>
        </div>

      </div>
    </section>
  );
};