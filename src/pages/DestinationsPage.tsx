import React, { useState, useMemo } from 'react';
import { DESTINATIONS_DATA, DESTINATION_CATEGORIES } from '../data/destinationData';
import { EditorialSectionHeader } from '../components/ui/EditorialSectionHeader';
import { Button } from '../components/ui/Button';
import { Lightbox } from '../components/ui/Lightbox';
import { Search, MapPin, ArrowUpRight, Maximize2 } from 'lucide-react';

export const DestinationsPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Escapes');
  const [searchQuery, setSearchQuery] = useState<string>('');
  
  const [lightboxImages, setLightboxImages] = useState<string[]>([]);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxCaption, setLightboxCaption] = useState('');

  const openLightbox = (images: string[], caption: string) => {
    setLightboxImages(images);
    setLightboxIndex(0);
    setLightboxCaption(caption);
    setLightboxOpen(true);
  };

  const filteredDestinations = useMemo(() => {
    return DESTINATIONS_DATA.filter((dest) => {
      if (selectedCategory !== 'All Escapes' && dest.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesName = dest.name.toLowerCase().includes(q);
        const matchesRegion = dest.region.toLowerCase().includes(q);
        const matchesSub = dest.subtitle.toLowerCase().includes(q);
        const matchesHighlights = dest.highlights.some(h => h.toLowerCase().includes(q));
        if (!matchesName && !matchesRegion && !matchesSub && !matchesHighlights) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <div className="py-12 bg-paper-warm min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <EditorialSectionHeader
          label="CURATED ROADWAY DISCOVERIES"
          title="PLACES WORTH THE JOURNEY"
          subtitle="Explore inspirational scenic circuits across misty highlands, ancient citadel ramparts, and coastal shorelines. (Sample destination concepts awaiting confirmation by business)."
        />

        {/* Filter Controls */}
        <div className="bg-paper-white rounded-lg border border-ink-black/15 p-6 mb-10 shadow-sm">
          
          <div className="border-b border-ink-black/10 pb-4 mb-4">
            <span className="block text-[11px] font-mono uppercase tracking-wider font-bold text-vintage-red mb-3">
              ESCORTED TOPOGRAPHIES
            </span>
            <div className="flex flex-wrap gap-2">
              {DESTINATION_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded transition-all ${
                    selectedCategory === cat
                      ? 'bg-vintage-red text-paper-white shadow-sm font-bold'
                      : 'bg-paper-warm text-ink-charcoal border border-ink-black/15 hover:border-ink-black hover:bg-paper-tan'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="relative">
            <Search className="w-4 h-4 text-ink-muted absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by destination name, region, or highlight..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-xs font-sans bg-paper-warm rounded border border-ink-black/20 focus:border-ink-black focus:outline-none focus:bg-paper-white transition-colors"
            />
          </div>

        </div>

        {/* Destination Cards */}
        {filteredDestinations.length > 0 ? (
          <div className="space-y-12">
            {filteredDestinations.map((dest, idx) => (
              <article
                key={dest.id}
                className="bg-paper-white rounded-lg border border-ink-black/15 p-6 sm:p-8 lg:p-10 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-wrap items-center justify-between border-b border-ink-black/10 pb-3 mb-6 text-xs font-mono gap-2">
                  <div className="flex items-center gap-2">
                    <span className="vintage-stamp">
                      CIRCUIT § {idx + 1}
                    </span>
                    <span className="text-vintage-red font-bold uppercase">
                      {dest.category}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 text-ink-muted">
                    <MapPin className="w-3.5 h-3.5 text-vintage-red" />
                    <span>{dest.region}</span>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Gallery */}
                  <div className="lg:col-span-5 space-y-3">
                    <div className="relative rounded-lg overflow-hidden border border-ink-black/10 bg-ink-charcoal group">
                      <div className="aspect-[16/10] w-full overflow-hidden">
                        <img
                          src={dest.images.hero}
                          alt={dest.name}
                          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                          loading="lazy"
                        />
                      </div>

                      <button
                        type="button"
                        onClick={() => openLightbox(dest.images.gallery, dest.name)}
                        className="absolute top-2.5 right-2.5 p-2 bg-ink-black/70 hover:bg-vintage-red text-paper-white rounded transition-colors"
                        title="Enlarge photograph"
                      >
                        <Maximize2 className="w-3.5 h-3.5" />
                      </button>

                      <div className="absolute bottom-2.5 left-2.5 bg-ink-black/85 text-paper-white text-xs font-mono px-2.5 py-1 rounded">
                        {dest.distanceGuide}
                      </div>
                    </div>

                    {dest.images.gallery.length > 1 && (
                      <div className="grid grid-cols-3 gap-2">
                        {dest.images.gallery.map((img, thumbIdx) => (
                          <div
                            key={thumbIdx}
                            onClick={() => openLightbox(dest.images.gallery, dest.name)}
                            className="aspect-[16/10] rounded overflow-hidden border border-ink-black/15 cursor-pointer hover:border-vintage-red transition-all"
                          >
                            <img src={img} alt={`Thumbnail ${thumbIdx + 1}`} className="w-full h-full object-cover" />
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Narrative */}
                  <div className="lg:col-span-7 space-y-4">
                    <h2 className="text-2xl sm:text-3xl font-serif font-black text-ink-black uppercase tracking-tight">
                      {dest.name}
                    </h2>

                    <p className="font-serif italic text-sm sm:text-base text-vintage-red">
                      &ldquo;{dest.subtitle}&rdquo;
                    </p>

                    <p className="text-xs sm:text-sm text-ink-charcoal font-sans leading-relaxed">
                      {dest.fullDescription}
                    </p>

                    {/* Highlights & Logistics */}
                    <div className="pt-2 border-t border-ink-black/10 grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-[11px] font-mono uppercase tracking-wider font-bold text-ink-black mb-2">
                          HIGHLIGHTS:
                        </h4>
                        <ul className="space-y-1.5 text-xs text-ink-charcoal font-sans">
                          {dest.highlights.map((h, hIdx) => (
                            <li key={hIdx} className="flex items-start gap-1.5">
                              <span className="text-vintage-red font-bold">•</span>
                              <span className="leading-snug">{h}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="space-y-2 text-xs font-mono text-ink-muted">
                        <div>
                          <span className="text-ink-black font-bold uppercase block text-[10px]">IDEAL DURATION:</span>
                          <span>{dest.recommendedDuration}</span>
                        </div>
                        <div>
                          <span className="text-ink-black font-bold uppercase block text-[10px]">BEST SEASON:</span>
                          <span>{dest.bestTimeToVisit}</span>
                        </div>
                        <div>
                          <span className="text-ink-black font-bold uppercase block text-[10px]">RECOMMENDED FLEET:</span>
                          <span className="text-vintage-red font-semibold">{dest.recommendedFleet.join(', ')}</span>
                        </div>
                      </div>
                    </div>

                    <div className="pt-4 border-t border-ink-black/10 flex items-center justify-between">
                      <span className="text-[11px] font-mono uppercase text-ink-muted">
                        CUSTOM ITINERARIES AVAILABLE
                      </span>

                      <Button to="/book" variant="accent" size="sm">
                        <span>PLAN YOUR TRIP TO THIS DESTINATION</span>
                        <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                      </Button>
                    </div>

                  </div>

                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="bg-paper-white rounded-lg border border-ink-black/15 p-12 text-center my-8 shadow-sm">
            <h3 className="font-serif font-black text-2xl text-ink-black">
              NO DESTINATION ESSAYS FOUND
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-ink-muted font-sans max-w-md mx-auto">
              No matching destinations in the editorial archive for your current search parameters.
            </p>
            <div className="mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedCategory('All Escapes');
                  setSearchQuery('');
                }}
              >
                RESET CRITERIA
              </Button>
            </div>
          </div>
        )}

      </div>

      <Lightbox
        images={lightboxImages}
        currentIndex={lightboxIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % lightboxImages.length)}
        onPrev={() => setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length)}
        caption={lightboxCaption}
      />
    </div>
  );
};