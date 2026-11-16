import React from 'react';
import { FeaturedFleet } from '../components/home/FeaturedFleet';
import { GalleryTeaser } from '../components/home/GalleryTeaser';
import { Hero } from '../components/home/Hero';
import { QuickBookingBar } from '../components/home/QuickBookingBar';
import { TrustBriefs } from '../components/home/TrustBriefs';
import { Page } from '../components/layout/Page';
import { usePageTitle } from '../hooks/usePageTitle';

/** The front page: hero, booking desk, the Ox standard, the fleet, and the gallery preview. */
export const HomePage: React.FC = () => {
  usePageTitle();

  return (
    <Page className="pt-6 sm:pt-8">
      <Hero />
      <QuickBookingBar className="mt-12" />
      <TrustBriefs className="mt-14" />
      <FeaturedFleet className="mt-16" />
      <GalleryTeaser className="mt-16" />
    </Page>
  );
};
