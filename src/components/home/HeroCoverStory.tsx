import React from 'react';
import { ArrowUpRight, ShieldCheck, Compass, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroCoverStory: React.FC = () => {
  return (
    <section className="relative pt-10 pb-20 bg-paper-warm border-b border-ink-black/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cover Story Header Block */}
        <div className="max-w-4xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="vintage-stamp">THE FRONT PAGE COVER STORY</span>
            <span className="text-xs font-mono text-ink-muted uppercase tracking-widest hidden sm:inline">
              • NATIONAL MOTORING EDITION
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-ink-black uppercase leading-[1.06]">
            THE WORLD IS WAITING. <br className="hidden sm:inline" />
            <span className="font-display italic font-normal text-ink-charcoal">LET&apos;S TAKE</span> THE ROAD.
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl font-serif italic text-ink-muted leading-relaxed max-w-2xl mx-auto">
            From spontaneous weekend escapes to carefully planned journeys, discover comfortable, reliable and memorable travel experiences with Ox Tours and Travels.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/fleet" variant="primary" size="lg">
              <span>EXPLORE OUR FLEET</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
            <Button to="/book" variant="secondary" size="lg">
              <span>BOOK YOUR JOURNEY</span>
            </Button>
          </div>
        </div>

        {/* Hero Showcase Image */}
        <div className="relative rounded-lg overflow-hidden border border-ink-black/25 shadow-lg bg-black/10 group">
          <div className="aspect-[21/9] sm:aspect-[2.4/1] w-full overflow-hidden">
            <img
              src="/gallery/WhatsApp%20Image%202026-11-14%20at%207.53.38%20PM.jpeg"
              alt="Force Urbania High-Ceiling Walkthrough - Ox Tours and Travels Fleet"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>

          {/* Sleek Translucent Caption Strip */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-black/85 backdrop-blur-md border border-white/20 text-white px-5 py-2.5 rounded-sm shadow-xl text-xs font-sans flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-white animate-pulse" />
            <span>
              <strong className="tracking-wider uppercase font-mono">OX TOURS & TRAVELS</strong> — Force Urbania & Luxury Fleet on National Highways.
            </span>
          </div>
        </div>

        {/* 3-Pillar Trust Bar with Glossy Finish */}
        <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-ink-black/10">
          <div className="glossy-card p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-ink-black text-white flex items-center justify-center shrink-0 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-serif font-black text-sm text-ink-black uppercase tracking-wide">
                  Chauffeur Driven Fleet
                </h4>
                <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                  Vetted, courteous highway drivers trained in route foresight, punctuality, and guest privacy.
                </p>
              </div>
            </div>
          </div>

          <div className="glossy-card p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-ink-black text-white flex items-center justify-center shrink-0 shadow-sm">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-serif font-black text-sm text-ink-black uppercase tracking-wide">
                  24/7 Journey Monitoring
                </h4>
                <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                  Dedicated central dispatch coordinator assisting your trip from initial roll-out to destination arrival.
                </p>
              </div>
            </div>
          </div>

          <div className="glossy-card p-6 rounded-lg">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-sm bg-ink-black text-white flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-serif font-black text-sm text-ink-black uppercase tracking-wide">
                  Transparent Distance Tariffs
                </h4>
                <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                  Clear itemized statements based on distance, day slabs, tolls, and parking with zero hidden costs.
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};