import React, { useState, useMemo } from 'react';
import { Maximize2, Camera, ArrowUpRight, Search } from 'lucide-react';
import { GALLERY_DATA, GALLERY_CATEGORIES } from '../data/galleryData';
import { EditorialSectionHeader } from '../components/ui/EditorialSectionHeader';
import { Lightbox } from '../components/ui/Lightbox';
import { Button } from '../components/ui/Button';

export const GalleryPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Archives');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeLightboxIndex, setActiveLightboxIndex] = useState<number | null>(null);

  const filteredPhotos = useMemo(() => {
    return GALLERY_DATA.filter((item) => {
      if (selectedCategory !== 'All Archives' && item.category !== selectedCategory) {
        return false;
      }
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase();
        const matchesTitle = item.title.toLowerCase().includes(q);
        const matchesCaption = item.caption.toLowerCase().includes(q);
        const matchesModel = item.vehicleModel.toLowerCase().includes(q);
        const matchesLoc = item.locationOrContext.toLowerCase().includes(q);
        if (!matchesTitle && !matchesCaption && !matchesModel && !matchesLoc) {
          return false;
        }
      }
      return true;
    });
  }, [selectedCategory, searchQuery]);

  const lightboxImages = filteredPhotos.map((p) => p.imageUrl);

  return (
    <div className="py-12 bg-paper-warm min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <EditorialSectionHeader
          label="PHOTOGRAPHIC RETROSPECTIVE"
          title="THE FLEET & JOURNEY ARCHIVES"
          subtitle="A high-contrast visual chronicle documenting our Toyota Innova Crysta, Force Urbania luxury vans, Tempo Travellers, and coaches across highways, scenic circuits, and executive cabin appointments."
        />

        {/* Filter Controls Bar */}
        <div className="glossy-card rounded-lg p-6 mb-10 shadow-sm">
          <div className="border-b border-ink-black/10 pb-4 mb-5">
            <span className="block text-[11px] font-mono uppercase tracking-wider font-bold text-ink-muted mb-3 flex items-center gap-1.5">
              <Camera className="w-3.5 h-3.5 text-ink-black" />
              <span>FILTER BY COLLECTION</span>
            </span>
            <div className="flex flex-wrap gap-2">
              {GALLERY_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm transition-all ${
                    selectedCategory === cat
                      ? 'glossy-btn-black text-white shadow-sm font-bold'
                      : 'bg-paper-warm text-ink-charcoal border border-ink-black/15 hover:border-ink-black hover:bg-white'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Search Box */}
          <div className="relative max-w-md">
            <Search className="w-4 h-4 text-ink-muted absolute left-3 top-3 pointer-events-none" />
            <input
              type="text"
              placeholder="Search by vehicle model, interior, or context..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-3 py-2.5 text-xs font-sans bg-white rounded-sm border border-ink-black/20 focus:border-ink-black focus:outline-none focus:ring-1 focus:ring-ink-black transition-colors shadow-sm"
            />
          </div>
        </div>

        {/* Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-ink-muted mb-6 px-1">
          <span>SHOWING {filteredPhotos.length} OF {GALLERY_DATA.length} PHOTOGRAPHIC ARCHIVES</span>
          {(selectedCategory !== 'All Archives' || searchQuery) && (
            <button
              onClick={() => {
                setSelectedCategory('All Archives');
                setSearchQuery('');
              }}
              className="text-ink-black font-bold uppercase hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Gallery Grid */}
        {filteredPhotos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPhotos.map((item, index) => (
              <article
                key={item.id}
                onClick={() => setActiveLightboxIndex(index)}
                className="glossy-card rounded-lg overflow-hidden group cursor-pointer flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
              >
                <div>
                  {/* Photo Frame */}
                  <div className="relative aspect-[16/10] overflow-hidden bg-black glass-reflection">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover bw-gloss-img group-hover:scale-105 transition-transform duration-500"
                      loading="lazy"
                    />

                    {/* Category Stamp */}
                    <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-black/20 px-2.5 py-1 rounded-sm text-[10px] font-mono font-bold uppercase tracking-wider text-black shadow-sm z-20">
                      {item.category}
                    </div>

                    {/* Enlarge Hint */}
                    <div className="absolute top-3 right-3 bg-black/80 text-white p-1.5 rounded-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200 z-20">
                      <Maximize2 className="w-3.5 h-3.5" />
                    </div>

                    {/* Location Badge */}
                    <div className="absolute bottom-3 left-3 z-20">
                      <span className="bg-black/90 text-white text-[11px] font-mono px-2.5 py-0.5 rounded-sm border border-white/10 shadow-sm">
                        {item.locationOrContext}
                      </span>
                    </div>
                  </div>

                  {/* Caption & Metadata */}
                  <div className="p-5">
                    <span className="text-[10px] font-mono uppercase tracking-wider text-ink-muted font-bold block mb-1">
                      {item.vehicleModel}
                    </span>
                    <h3 className="font-serif font-black text-lg text-ink-black uppercase tracking-tight group-hover:text-black transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-xs text-ink-muted leading-relaxed font-sans font-normal">
                      {item.caption}
                    </p>
                  </div>
                </div>

                <div className="p-5 pt-0 border-t border-ink-black/5 mt-2 flex items-center justify-between text-[11px] font-mono text-ink-charcoal">
                  <span className="uppercase text-ink-muted">OX DISPATCH ARCHIVE</span>
                  <span className="font-bold flex items-center gap-1 group-hover:underline">
                    <span>VIEW FULLSCREEN</span>
                    <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </article>
            ))}
          </div>
        ) : (
          <div className="glossy-card rounded-lg p-12 text-center my-8 shadow-sm">
            <h3 className="font-serif font-black text-2xl text-ink-black">
              NO MATCHING PHOTOGRAPHS FOUND
            </h3>
            <p className="mt-2 text-xs text-ink-muted">
              Adjust your search keywords or select a different collection tier.
            </p>
            <div className="mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedCategory('All Archives');
                  setSearchQuery('');
                }}
              >
                <span>RESET ARCHIVE FILTER</span>
              </Button>
            </div>
          </div>
        )}

        {/* Bottom Banner */}
        <div className="mt-16 p-8 bg-paper-white rounded-lg border border-ink-black/15 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="font-serif font-black text-xl text-ink-black uppercase">
              EXPERIENCE OUR AUTOMOBILES IN PERSON
            </h4>
            <p className="text-xs sm:text-sm text-ink-muted mt-1">
              Select your preferred machine from our 8-vehicle fleet and request a tailored quote for your upcoming journey.
            </p>
          </div>
          <div className="flex gap-3">
            <Button to="/fleet" variant="outline" size="md">
              <span>EXPLORE FLEET</span>
            </Button>
            <Button to="/book" variant="primary" size="md">
              <span>BOOK YOUR RIDE</span>
              <ArrowUpRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>

      </div>

      {/* Interactive Lightbox */}
      {activeLightboxIndex !== null && (
        <Lightbox
          images={lightboxImages}
          currentIndex={activeLightboxIndex}
          isOpen={activeLightboxIndex !== null}
          onClose={() => setActiveLightboxIndex(null)}
          onNext={() => setActiveLightboxIndex((prev) => (prev !== null ? (prev + 1) % lightboxImages.length : 0))}
          onPrev={() => setActiveLightboxIndex((prev) => (prev !== null ? (prev - 1 + lightboxImages.length) % lightboxImages.length : 0))}
          caption={filteredPhotos[activeLightboxIndex]?.caption}
        />
      )}
    </div>
  );
};
