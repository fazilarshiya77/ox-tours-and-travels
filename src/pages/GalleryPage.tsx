import React, { useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { GalleryCard } from '../components/gallery/GalleryCard';
import { GalleryFilterBar } from '../components/gallery/GalleryFilterBar';
import { Page } from '../components/layout/Page';
import { Button } from '../components/ui/Button';
import { Lightbox, type LightboxItem } from '../components/ui/Lightbox';
import { CtaBanner, EmptyState } from '../components/ui/Notices';
import { SectionHeader } from '../components/ui/SectionHeader';
import { GALLERY_CATEGORIES, GALLERY_DATA } from '../data/galleryData';
import { usePageTitle } from '../hooks/usePageTitle';
import { Reveal, stagger } from '../components/ui/Reveal';

const ALL = GALLERY_CATEGORIES[0];

/** Photograph gallery with collection filters, search and a fullscreen viewer. */
export const GalleryPage: React.FC = () => {
  usePageTitle('Gallery');
  const location = useLocation();
  const [category, setCategory] = useState<string>(ALL);
  const [query, setQuery] = useState('');

  // The front-page preview links here with the photo to open straight away.
  const [openIndex, setOpenIndex] = useState<number | null>(() => {
    const openPhotoId = (location.state as { openPhotoId?: string } | null)?.openPhotoId;
    const index = GALLERY_DATA.findIndex((photo) => photo.id === openPhotoId);
    return index >= 0 ? index : null;
  });

  const photos = useMemo(() => {
    const q = query.trim().toLowerCase();
    return GALLERY_DATA.filter(
      (photo) =>
        (category === ALL || photo.category === category) &&
        (!q ||
          [photo.title, photo.vehicleModel, photo.locationOrContext, photo.category].some((text) =>
            text.toLowerCase().includes(q),
          )),
    );
  }, [category, query]);

  const lightboxItems: LightboxItem[] = photos.map((photo) => ({
    src: photo.imageUrl,
    alt: photo.title,
    label: `${photo.category} · ${photo.vehicleModel}`,
    caption: photo.caption,
  }));

  const isFiltered = category !== ALL || query.trim() !== '';
  const reset = () => {
    setCategory(ALL);
    setQuery('');
  };

  return (
    <Page>
      <SectionHeader
        as="h1"
        kicker="In Pictures"
        folio="Section B"
        title="The Fleet in Photographs"
        deck="Our Toyota Innova Crysta, Force Urbania luxury vans, Tempo Travellers and touring coach, photographed inside and out."
      />

      <GalleryFilterBar category={category} query={query} onCategoryChange={setCategory} onQueryChange={setQuery} />

      <div className="flex min-h-[44px] items-center justify-between gap-4 py-4">
        <p className="folio" aria-live="polite">
          Showing {photos.length} of {GALLERY_DATA.length} photographs
        </p>
        {isFiltered && (
          <Button variant="link" size="sm" onClick={reset}>
            Reset filters
          </Button>
        )}
      </div>

      {photos.length > 0 ? (
        <div className="columns-1 gap-6 sm:columns-2 lg:columns-3">
          {photos.map((photo, i) => (
            <Reveal key={photo.id} delay={stagger(i)} className="mb-6 break-inside-avoid">
              <GalleryCard photo={photo} plate={i + 1} onOpen={() => setOpenIndex(i)} />
            </Reveal>
          ))}
        </div>
      ) : (
        <EmptyState
          title="No Matching Photographs"
          actions={
            <Button variant="secondary" onClick={reset}>
              Reset filters
            </Button>
          }
        >
          Try a different search word or choose another collection.
        </EmptyState>
      )}

      <CtaBanner
        kicker="See Them in Person"
        title="Choose Your Vehicle"
        text="Pick a vehicle from our fleet and request a quote for your next journey."
      >
        <Button to="/fleet" variant="secondary">
          Explore the Fleet
        </Button>
        <Button to="/book">
          <span>Book Your Ride</span>
          <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
        </Button>
      </CtaBanner>

      <Lightbox items={lightboxItems} index={openIndex} onChange={setOpenIndex} onClose={() => setOpenIndex(null)} />
    </Page>
  );
};
