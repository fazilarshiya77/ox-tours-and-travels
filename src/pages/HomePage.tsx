import React from 'react';
import { HeroCoverStory } from '../components/home/HeroCoverStory';
import { QuickBookingBar } from '../components/home/QuickBookingBar';
import { FeaturedFleet } from '../components/home/FeaturedFleet';
import { WhyChooseUs } from '../components/home/WhyChooseUs';
import { FeaturedDestinations } from '../components/home/FeaturedDestinations';
import { ServicesOverview } from '../components/home/ServicesOverview';
import { Testimonials } from '../components/home/Testimonials';
import { FinalCTA } from '../components/home/FinalCTA';

export const HomePage: React.FC = () => {
  return (
    <div className="bg-paper-warm overflow-hidden">
      {/* Front Page Cover Story */}
      <HeroCoverStory />

      {/* Quick Booking Requisition Bar */}
      <QuickBookingBar />

      {/* Featured Fleet Catalogue */}
      <FeaturedFleet />

      {/* Why Choose Us: Editorial Manifesto */}
      <WhyChooseUs />

      {/* Featured Destinations */}
      <FeaturedDestinations />

      {/* Travel Services */}
      <ServicesOverview />

      {/* Passenger Testimonial Dispatches */}
      <Testimonials />

      {/* Editorial Final Call To Action */}
      <FinalCTA />
    </div>
  );
};
