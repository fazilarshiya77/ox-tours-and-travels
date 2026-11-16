import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { GALLERY_DATA } from '../../data/galleryData';
import { Button } from '../ui/Button';
import { NewsPhoto } from '../ui/NewsPhoto';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal, stagger } from '../ui/Reveal';

const PREVIEW = GALLERY_DATA.slice(0, 4);

/** Front-page gallery preview. Each photo opens the gallery with that photograph enlarged. */
export const GalleryTeaser: React.FC<{ className?: string }> = ({ className }) => (
  <section className={className}>
    <SectionHeader
      kicker="In Pictures"
      folio="Section B"
      title="The Road Chronicle in Pictures"
      deck="Recent photographs of our touring vehicles and their cabins."
    />

    <ul className="grid grid-cols-2 gap-x-5 gap-y-8 lg:grid-cols-4">
      {PREVIEW.map((photo, i) => (
        <Reveal as="li" key={photo.id} delay={stagger(i, 4)}>
          <Link
            to="/gallery"
            state={{ openPhotoId: photo.id }}
            className="group block"
            aria-label={`View photograph: ${photo.title}`}
          >
            <NewsPhoto
              src={photo.imageUrl}
              alt={photo.title}
              imgClassName="transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <p className="mt-2 flex items-baseline justify-between gap-3 border-b border-paper-rule pb-2">
              <span className="kicker">{photo.category}</span>
              <span className="folio group-hover:text-ink-black">Enlarge</span>
            </p>
          </Link>
        </Reveal>
      ))}
    </ul>

    <Reveal className="mt-8 text-center">
      <Button to="/gallery" variant="secondary">
        <span>See All {GALLERY_DATA.length} Photographs</span>
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Button>
    </Reveal>
  </section>
);
