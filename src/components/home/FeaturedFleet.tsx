import React from 'react';
import { FLEET_DATA } from '../../data/fleetData';
import { EditorialSectionHeader } from '../ui/EditorialSectionHeader';
import { VehicleCard } from '../fleet/VehicleCard';

export const FeaturedFleet: React.FC = () => {
  return (
    <section className="py-20 bg-paper-warm border-b border-ink-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <EditorialSectionHeader
          label="FLEET JOURNAL"
          title="THE FLEET — CHOOSE YOUR RIDE"
          subtitle="Precision-maintained automobiles and group touring cruisers, each curated for specific roadway topographies and passenger compliments."
          number="01"
        />

        {/* Clean, well-spaced vehicle grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {FLEET_DATA.map((vehicle) => (
            <VehicleCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </div>

      </div>
    </section>
  );
};
