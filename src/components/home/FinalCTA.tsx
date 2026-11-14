import React from 'react';
import { ArrowUpRight, Compass, PhoneCall } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';
import { Button } from '../ui/Button';

export const FinalCTA: React.FC = () => {
  return (
    <section className="py-24 bg-paper-white relative overflow-hidden border-b border-ink-black/10">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        
        <div className="inline-flex items-center gap-2 mb-6">
          <span className="vintage-stamp">THE FINAL DISPATCH</span>
        </div>

        <h2 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-ink-black uppercase leading-[1.08]">
          YOUR NEXT GREAT STORY <br />
          <span className="font-display italic font-normal text-vintage-red">STARTS HERE.</span>
        </h2>

        <p className="mt-6 text-base sm:text-xl font-serif italic text-ink-charcoal max-w-xl mx-auto leading-relaxed">
          &ldquo;Tell us where you want to go. We&apos;ll help you get there.&rdquo;
        </p>

        <p className="mt-3 text-xs sm:text-sm text-ink-muted max-w-lg mx-auto font-sans leading-relaxed">
          Speak with our route desk or submit a journey requisition. We coordinate every halt, monitor highway conditions, and provide dependable luxury chauffeured transit.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <Button to="/book" variant="accent" size="lg">
            <span>PLAN YOUR JOURNEY</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>

          <Button 
            href={`tel:${SITE_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`} 
            variant="outline" 
            size="lg"
          >
            <PhoneCall className="w-4 h-4 mr-1 text-vintage-red" />
            <span>CALL DISPATCH: {SITE_CONFIG.contact.primaryPhone}</span>
          </Button>
        </div>

        <div className="mt-12 pt-6 border-t border-ink-black/10 flex flex-wrap items-center justify-center gap-6 text-xs font-mono text-ink-muted">
          <span className="flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-vintage-red" />
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