import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FLEET_DATA } from '../../data/fleetData';
import { VehicleGrid } from '../fleet/VehicleGrid';
import { Button } from '../ui/Button';
import { SectionHeader } from '../ui/SectionHeader';
import { Reveal } from '../ui/Reveal';

/** Front-page fleet section: every vehicle, as a ruled listings grid. */
export const FeaturedFleet: React.FC<{ className?: string }> = ({ className }) => (
  <section className={className}>
    <SectionHeader
      kicker="The Fleet Journal"
      folio="Section A"
      title="The Fleet — Choose Your Ride"
      deck="Carefully maintained vehicles for families, executives and large groups, each with a professional chauffeur."
    />

    <VehicleGrid vehicles={FLEET_DATA} />

    <Reveal className="mt-8 text-center">
      <Button to="/fleet" variant="secondary">
        <span>Compare the Full Fleet</span>
        <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
      </Button>
    </Reveal>
  </section>
);
