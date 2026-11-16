import React, { useState } from 'react';
import { Maximize2 } from 'lucide-react';
import { cn } from '../../lib/cn';
import type { Vehicle } from '../../types';
import { Lightbox, type LightboxItem } from '../ui/Lightbox';
import { NewsPhoto } from '../ui/NewsPhoto';

/** Main photograph with thumbnails; click the photo to open the fullscreen viewer. */
export const VehicleGallery: React.FC<{ vehicle: Vehicle }> = ({ vehicle }) => {
  const sources = (vehicle.images.gallery.length > 0 ? vehicle.images.gallery : [vehicle.images.main]).filter(Boolean);
  const [active, setActive] = useState(0);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const items: LightboxItem[] = sources.map((src, i) => ({
    src,
    alt: `${vehicle.name} — photograph ${i + 1}`,
    label: vehicle.category,
    caption: vehicle.name,
  }));

  if (sources.length === 0) {
    return <NewsPhoto src="" alt={vehicle.images.alt} ratio="aspect-[4/3] sm:aspect-[16/10]" />;
  }

  return (
    <div>
      <figure>
        <button
          type="button"
          onClick={() => setLightboxIndex(active)}
          aria-label="Enlarge photograph"
          className="group relative block w-full"
        >
          <span className="block aspect-[4/3] overflow-hidden border border-ink-black/80 bg-paper-aged sm:aspect-[16/10]">
            <img src={items[active].src} alt={items[active].alt} className="h-full w-full object-cover" />
          </span>
          <span className="absolute right-3 top-3 flex h-10 w-10 items-center justify-center bg-ink-black/85 text-paper-white transition-colors group-hover:bg-paper-white group-hover:text-ink-black">
            <Maximize2 className="h-4 w-4" aria-hidden="true" />
          </span>
        </button>
        <figcaption className="mt-2 flex items-baseline justify-between gap-4">
          <span className="text-[15px] italic text-ink-muted">{vehicle.images.alt}</span>
          <span className="folio shrink-0">
            {active + 1} of {items.length}
          </span>
        </figcaption>
      </figure>

      {items.length > 1 && (
        <ul className="mt-3 grid grid-cols-4 gap-2 sm:gap-3">
          {items.map((item, i) => (
            <li key={item.src}>
              <button
                type="button"
                onClick={() => setActive(i)}
                aria-label={`Show photograph ${i + 1}`}
                aria-current={i === active}
                className={cn(
                  'block aspect-[4/3] w-full overflow-hidden border-2 bg-paper-aged transition-opacity',
                  i === active ? 'border-ink-black' : 'border-transparent opacity-60 hover:opacity-100',
                )}
              >
                <img src={item.src} alt="" loading="lazy" className="h-full w-full object-cover" />
              </button>
            </li>
          ))}
        </ul>
      )}

      <Lightbox
        items={items}
        index={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onChange={(i) => {
          setLightboxIndex(i);
          setActive(i);
        }}
      />
    </div>
  );
};
