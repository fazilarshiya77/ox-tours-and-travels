import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Camera } from 'lucide-react';
import { GALLERY_DATA } from '../../data/galleryData';
import { EditorialSectionHeader } from '../ui/EditorialSectionHeader';
import { Button } from '../ui/Button';

export const GalleryTeaser: React.FC = () => {
  const previewItems = GALLERY_DATA.slice(0, 4);

  return (
    <section className="py-20 bg-paper-warm/50 border-b border-ink-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <EditorialSectionHeader
          label="LATEST VISUAL DISPATCHES"
          title="THE ROAD CHRONICLE IN PICTURES"
          subtitle="Recent photographic archives from our highway circuits, VIP cabin appointments, and touring expeditions."
          number="03"
        />

        {/* 4-Item Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewItems.map((item) => (
            <Link
              key={item.id}
              to="/gallery"
              className="glossy-card rounded-lg overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1"
            >
              <div>
                <div className="relative aspect-[4/3] overflow-hidden bg-black glass-reflection">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover bw-gloss-img group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                  <div className="absolute top-2.5 left-2.5 bg-white/90 backdrop-blur-md border border-black/20 px-2 py-0.5 rounded-sm text-[9px] font-mono font-bold uppercase tracking-wider text-black z-20">
                    {item.category}
                  </div>
                </div>

                <div className="p-4">
                  <span className="text-[10px] font-mono uppercase text-ink-muted font-bold block mb-1">
                    {item.vehicleModel}
                  </span>
                  <h4 className="font-serif font-black text-sm text-ink-black uppercase tracking-tight group-hover:text-black transition-colors line-clamp-1">
                    {item.title}
                  </h4>
                  <p className="mt-1 text-[11px] text-ink-muted font-sans line-clamp-2">
                    {item.caption}
                  </p>
                </div>
              </div>

              <div className="p-4 pt-0 flex items-center justify-between text-[10px] font-mono text-ink-charcoal border-t border-ink-black/5 mt-2">
                <span className="uppercase text-ink-muted">{item.locationOrContext}</span>
                <span className="font-bold flex items-center gap-0.5 group-hover:underline">
                  <span>EXPAND</span>
                  <ArrowUpRight className="w-3 h-3" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Section Footer Link */}
        <div className="mt-10 text-center">
          <Button to="/gallery" variant="outline" size="md">
            <Camera className="w-4 h-4 mr-1.5" />
            <span>EXPLORE FULL PHOTOGRAPHIC GALLERY</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

      </div>
    </section>
  );
};
