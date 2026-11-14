import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, MapPin, Compass } from 'lucide-react';
import { DESTINATIONS_DATA } from '../../data/destinationData';
import { EditorialSectionHeader } from '../ui/EditorialSectionHeader';
import { Button } from '../ui/Button';

export const FeaturedDestinations: React.FC = () => {
  const destinations = DESTINATIONS_DATA.slice(0, 3);

  return (
    <section className="py-20 bg-paper-warm border-b border-ink-black/15">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <EditorialSectionHeader
          label="DESTINATION STORIES"
          title="PLACES WORTH THE JOURNEY."
          subtitle="From misty mountain switchbacks to ancient citadel gates and coastal highways. Curated routes waiting for your travel story."
          number="03"
        />

        {/* Clean 3-Card Grid with Black & White Glossy Appearance */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {destinations.map((dest) => (
            <article 
              key={dest.id}
              className="glossy-card rounded-lg overflow-hidden flex flex-col justify-between group"
            >
              <div>
                {/* Photo Viewport with Black & White Glossy Filter */}
                <div className="relative aspect-[16/10] overflow-hidden bg-black glass-reflection">
                  <img
                    src={dest.images.hero}
                    alt={dest.name}
                    className="w-full h-full object-cover bw-gloss-img"
                    loading="lazy"
                  />
                  
                  {/* Category Pill */}
                  <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-black/20 px-2.5 py-1 rounded-sm text-[11px] font-mono uppercase tracking-wider text-black font-bold z-20">
                    {dest.category}
                  </div>

                  {/* Distance Guide */}
                  <div className="absolute bottom-3 left-3 bg-black/90 text-white text-xs font-mono px-2.5 py-1 rounded-sm border border-white/10 z-20">
                    {dest.distanceGuide.split('(')[0]}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center gap-1.5 text-xs font-mono text-ink-muted mb-2">
                    <MapPin className="w-3.5 h-3.5 text-ink-black" />
                    <span>{dest.region}</span>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-serif font-black text-ink-black group-hover:text-black transition-colors uppercase tracking-tight">
                    <Link to="/destinations">
                      {dest.name}
                    </Link>
                  </h3>

                  <p className="font-serif italic text-xs text-ink-muted mt-1">
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
                  className="inline-flex items-center gap-1 font-bold uppercase text-ink-black hover:underline"
                >
                  <span>Explore Route</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom Banner */}
        <div className="mt-14 text-center p-8 glossy-card rounded-lg">
          <p className="font-serif italic text-base sm:text-lg text-ink-charcoal max-w-xl mx-auto">
            &ldquo;Have a custom travel circuit in mind across sacred shrines, tea hills, or coastal peninsulas?&rdquo;
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
            <Button to="/destinations" variant="primary" size="md">
              <Compass className="w-4 h-4 mr-1.5 text-white" />
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