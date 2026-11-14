import React from 'react';
import { ArrowUpRight, ShieldCheck, Compass, MapPin } from 'lucide-react';
import { Button } from '../ui/Button';

export const HeroCoverStory: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 bg-paper-warm border-b border-ink-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cover Story Header Block */}
        <div className="max-w-4xl mx-auto text-center mb-10">
          <div className="inline-flex items-center gap-2 mb-4">
            <span className="vintage-stamp">THE FRONT PAGE COVER STORY</span>
            <span className="text-xs font-mono text-ink-muted uppercase tracking-wider hidden sm:inline">
              • NATIONAL ROADWAYS EDITION
            </span>
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-black tracking-tight text-ink-black uppercase leading-[1.08]">
            THE WORLD IS WAITING. <br className="hidden sm:inline" />
            <span className="font-display italic font-normal text-vintage-red">LET&apos;S TAKE</span> THE ROAD.
          </h1>

          <p className="mt-5 text-base sm:text-lg md:text-xl font-serif italic text-ink-charcoal leading-relaxed max-w-2xl mx-auto">
            From spontaneous weekend escapes to carefully planned journeys, discover comfortable, reliable and memorable travel experiences with Ox Tours and Travels.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button to="/fleet" variant="primary" size="lg">
              <span>EXPLORE OUR FLEET</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
            <Button to="/book" variant="accent" size="lg">
              <span>BOOK YOUR JOURNEY</span>
            </Button>
          </div>
        </div>

        {/* Hero Showcase Image */}
        <div className="relative rounded-lg overflow-hidden border border-ink-black/15 shadow-paper-lg bg-ink-charcoal">
          <div className="aspect-[21/9] sm:aspect-[2.4/1] w-full overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=1600&auto=format&fit=crop"
              alt="Luxury scenic highway road trip - Ox Tours and Travels"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>

          {/* Simple, tasteful overlay pill */}
          <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 bg-paper-white/95 backdrop-blur-sm border border-ink-black/15 px-4 py-2 rounded shadow-sm text-xs text-ink-black font-sans">
            <span className="font-bold">OX TOURS & TRAVELS</span> — Chauffeur driven comfort across national highways and scenic terrains.
          </div>
        </div>

        {/* Clean, spacious 3-pillar trust bar */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-ink-black/10">
          <div className="flex items-start gap-3 p-4 bg-paper-white border border-ink-black/10 rounded">
            <div className="p-2 bg-vintage-red/10 rounded shrink-0">
              <ShieldCheck className="w-5 h-5 text-vintage-red" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-ink-black uppercase">
                Chauffeur Driven Fleet
              </h4>
              <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                Vetted, courteous highway drivers trained in route foresight and guest safety.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-paper-white border border-ink-black/10 rounded">
            <div className="p-2 bg-vintage-red/10 rounded shrink-0">
              <Compass className="w-5 h-5 text-vintage-red" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-ink-black uppercase">
                24/7 Journey Monitoring
              </h4>
              <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                Dedicated central dispatch coordinator assisting your trip from departure to arrival.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3 p-4 bg-paper-white border border-ink-black/10 rounded">
            <div className="p-2 bg-vintage-red/10 rounded shrink-0">
              <MapPin className="w-5 h-5 text-vintage-red" />
            </div>
            <div>
              <h4 className="font-serif font-bold text-sm text-ink-black uppercase">
                Transparent Distance Tariffs
              </h4>
              <p className="text-xs text-ink-muted mt-1 leading-relaxed">
                Clear quotes based on distance, day slabs, tolls, and parking with zero hidden fees.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};