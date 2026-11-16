import React from 'react';
import { Maximize2 } from 'lucide-react';
import type { GalleryItem } from '../../data/galleryData';
import { cn } from '../../lib/cn';

const RATIOS: Record<NonNullable<GalleryItem['aspectRatio']>, string> = {
  portrait: 'aspect-[3/4]',
  landscape: 'aspect-[4/3]',
  wide: 'aspect-[16/9]',
};

interface GalleryCardProps {
  photo: GalleryItem;
  /** Position in the current list, shown as the plate number. */
  plate: number;
  onOpen: () => void;
}

/** A gallery photograph shown at its natural shape. Click or press Enter to enlarge. */
export const GalleryCard: React.FC<GalleryCardProps> = ({ photo, plate, onOpen }) => (
  <button
    type="button"
    onClick={onOpen}
    aria-label={`Enlarge photograph: ${photo.title}`}
    className="group block w-full text-left"
  >
    <span
      className={cn(
        'relative block overflow-hidden border border-ink-black/80 bg-paper-aged',
        RATIOS[photo.aspectRatio ?? 'landscape'],
      )}
    >
      <img
        src={photo.imageUrl}
        alt={photo.title}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
      />
      <span className="absolute right-2 top-2 flex h-9 w-9 items-center justify-center bg-ink-black/85 text-paper-white opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100">
        <Maximize2 className="h-4 w-4" aria-hidden="true" />
      </span>
    </span>
    <span className="mt-2 flex items-baseline justify-between gap-3 border-b border-paper-rule pb-2">
      <span className="kicker">{photo.category}</span>
      <span className="folio shrink-0">Plate {String(plate).padStart(2, '0')}</span>
    </span>
  </button>
);
