import React from 'react';
import { HeroCoverStory } from '../components/home/HeroCoverStory';
import { QuickBookingBar } from '../components/home/QuickBookingBar';
import { FeaturedFleet } from '../components/home/FeaturedFleet';
import { GalleryTeaser } from '../components/home/GalleryTeaser';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-paper-warm overflow-hidden">
      {/* Front Page Cover Story */}
      <HeroCoverStory />

      {/* Quick Booking Requisition Bar */}
      <QuickBookingBar />

      {/* Featured Fleet Catalogue (The Owner's 8 Vehicles) */}
      <FeaturedFleet />

      {/* Latest Visual Gallery Dispatches */}
      <GalleryTeaser />
    </div>
  );
};
