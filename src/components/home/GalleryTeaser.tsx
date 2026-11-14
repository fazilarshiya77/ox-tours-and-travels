import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Camera, Maximize2 } from 'lucide-react';
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
          label="LATEST VISUAL ARCHIVES"
          title="THE ROAD CHRONICLE IN PICTURES"
          subtitle="Recent photographic dispatches from our luxury touring machines, executive interiors, and expeditions."
          number="03"
        />

        {/* 4-Item Visual Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {previewItems.map((item) => (
            <Link
              key={item.id}
              to="/gallery"
              className="glossy-card rounded-lg overflow-hidden group flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              {/* Full Color Image */}
              <div className="relative aspect-[4/3] overflow-hidden bg-black/5">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute top-2.5 left-2.5 bg-black/80 backdrop-blur-md px-2 py-0.5 rounded-sm text-[9px] font-mono font-bold uppercase tracking-wider text-white z-20">
                  {item.category}
                </div>
              </div>

              {/* Just "VIEW FULLSCREEN" Option */}
              <div className="p-3.5 bg-white flex items-center justify-between text-xs font-mono border-t border-ink-black/10 group-hover:bg-ink-black group-hover:text-white transition-colors">
                <span className="font-bold uppercase tracking-wider flex items-center gap-1.5">
                  <Maximize2 className="w-3.5 h-3.5" />
                  <span>VIEW FULLSCREEN</span>
                </span>
                <ArrowUpRight className="w-3.5 h-3.5" />
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
