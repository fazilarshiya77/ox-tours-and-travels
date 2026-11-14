import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Compass } from 'lucide-react';
import { DESTINATIONS_DATA } from '../../data/destinationData';
import { EditorialSectionHeader } from '../ui/EditorialSectionHeader';
import { Button } from '../ui/Button';

export const FeaturedDestinations: React.FC = () => {
  const destinations = DESTINATIONS_DATA.slice(0, 3);

  return (
    <section className="py-20 bg-paper-warm/50 border-b border-ink-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <EditorialSectionHeader
          label="DESTINATION STORIES"
          title="PLACES WORTH THE JOURNEY."
          subtitle="From misty mountain switchbacks to ancient citadel gates and coastal highways. Curated routes waiting for your travel story."
          number="03"
        />

        {/* Clean 3-Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <article 
              key={dest.id}
              className="bg-paper-white rounded-lg border border-ink-black/15 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group"
            >
              <div>
                {/* Photo Viewport */}
                <div className="relative aspect-[16/10] overflow-hidden bg-ink-charcoal">
                  <img
                    src={dest.images.hero}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                    loading="lazy"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-paper-white/95 backdrop-blur-sm border border-ink-black/10 px-2.5 py-1 rounded text-[11px] font-mono uppercase tracking-wider text-ink-black font-semibold">
                    {dest.category}
                  </div>

                  {/* Distance Guide */}
                  <div className="absolute bottom-3 left-3 bg-ink-black/85 text-paper-white text-xs font-mono px-2.5 py-1 rounded">
                    {dest.distanceGuide.split('(')[0]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-ink-muted mb-2">
                    <MapPin className="w-3.5 h-3.5 text-vintage-red" />
                    <span>{dest.region}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-black text-ink-black group-hover:text-vintage-red transition-colors">
                    <Link to="/destinations">
                      {dest.name}
                    </Link>
                  </h3>

                  <p className="font-serif italic text-xs text-vintage-red mt-1">
                    &ldquo;{dest.subtitle}&rdquo;
                  </p>

                  <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed line-clamp-3">
                    {dest.editorialSnippet}
                  </p>
                </div>
              </div>

              {/* Card Footer */}
              <div className="p-6 pt-0 border-t border-ink-black/10 mt-4 flex items-center justify-between text-xs font-mono">
                <span className="text-ink-muted">{dest.recommendedDuration}</span>
                <Link
                  to="/destinations"
                  className="inline-flex items-center gap-1 font-bold uppercase text-vintage-red hover:underline"
                >
                  <span>Explore Route</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center p-8 bg-paper-white rounded-lg border border-ink-black/15 shadow-sm">
          <p className="font-serif italic text-base sm:text-lg text-ink-charcoal max-w-xl mx-auto">
            &ldquo;Have a custom travel circuit in mind across sacred shrines, tea hills, or coastal peninsulas?&rdquo;
          </p>
          <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
            <Button to="/destinations" variant="primary" size="md">
              <Compass className="w-4 h-4 mr-1.5 text-vintage-red" />
              <span>VIEW ALL DESTINATIONS</span>
            </Button>
            <Button to="/book" variant="outline" size="md">
              <span>PLAN A BESPOKE TOUR</span>
            </Button>
          </div>
        </div>

      </div>
    </section>
  );
};