import React from 'react';
import { Camera } from 'lucide-react';
import { cn } from '../../lib/cn';

interface NewsPhotoProps {
  /** Image address. Leave empty to show a "photo coming soon" frame. */
  src: string;
  alt: string;
  /** Italic caption printed under the photograph. */
  caption?: React.ReactNode;
  /** Photo credit, set in small caps after the caption. */
  credit?: string;
  /** Tailwind aspect-ratio class for the frame. */
  ratio?: string;
  /** Load immediately (for the photo at the top of a page). */
  priority?: boolean;
  className?: string;
  imgClassName?: string;
}

/** A framed photograph with an optional newspaper caption and credit. */
export const NewsPhoto: React.FC<NewsPhotoProps> = ({
  src,
  alt,
  caption,
  credit,
  ratio = 'aspect-[4/3]',
  priority = false,
  className,
  imgClassName,
}) => (
  <figure className={className}>
    <div className={cn('overflow-hidden border border-ink-black/80 bg-paper-aged', ratio)}>
      {src ? (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding="async"
          className={cn('h-full w-full object-cover', imgClassName)}
        />
      ) : (
        <div role="img" aria-label={`${alt} (photograph coming soon)`} className="flex h-full w-full flex-col items-center justify-center gap-2 text-ink-light">
          <Camera className="h-8 w-8" aria-hidden="true" />
          <span className="folio">Photograph coming soon</span>
        </div>
      )}
    </div>
    {(caption || credit) && (
      <figcaption className="mt-2 text-[15px] italic leading-snug text-ink-muted">
        {caption}
        {credit && (
          <span className="ml-1 font-sans text-[10px] font-semibold uppercase not-italic tracking-[0.14em]">
            Photograph: {credit}
          </span>
        )}
      </figcaption>
    )}
  </figure>
);
