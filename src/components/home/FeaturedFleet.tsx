import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { FLEET_DATA } from '../../data/fleetData';
import { EditorialSectionHeader } from '../ui/EditorialSectionHeader';
import { VehicleCard } from '../fleet/VehicleCard';
import { Button } from '../ui/Button';

export const FeaturedFleet: React.FC = () => {
  return (
    <section className="py-20 bg-paper-warm/50 border-b border-ink-black/10">
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

        {/* Bottom Banner */}
        <div className="mt-14 p-8 bg-paper-white rounded-lg border border-ink-black/15 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm">
          <div>
            <h4 className="font-serif font-black text-xl text-ink-black uppercase">
              LOOKING FOR EXTENDED HIGHWAY CHARTERS OR LUXURY BUSES?
            </h4>
            <p className="text-xs sm:text-sm text-ink-muted mt-1">
              Explore our full automotive catalogue with capacity filters and technical specifications.
            </p>
          </div>
          <Button to="/fleet" variant="primary" size="md">
            <span>BROWSE ENTIRE FLEET</span>
            <ArrowUpRight className="w-4 h-4 ml-1" />
          </Button>
        </div>

      </div>
    </section>
  );
};