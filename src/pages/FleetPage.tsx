import React, { useState, useMemo } from 'react';
import { FLEET_DATA } from '../data/fleetData';
import { VehicleCard } from '../components/fleet/VehicleCard';
import { FleetFilterBar } from '../components/fleet/FleetFilterBar';
import { EditorialSectionHeader } from '../components/ui/EditorialSectionHeader';
import { Button } from '../components/ui/Button';
import { ArrowUpRight } from 'lucide-react';

export const FleetPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All Vehicles');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCapacity, setSelectedCapacity] = useState<string>('all');
  const [sortBy, setSortBy] = useState<string>('featured');

  const filteredVehicles = useMemo(() => {
    return FLEET_DATA.filter((vehicle) => {
      if (selectedCategory !== 'All Vehicles' && vehicle.category !== selectedCategory) {
        return false;
      }

      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        const matchesName = vehicle.name.toLowerCase().includes(query);
        const matchesCat = vehicle.category.toLowerCase().includes(query);
        const matchesTag = vehicle.tagline.toLowerCase().includes(query);
        const matchesFeature = vehicle.features.some(f => f.toLowerCase().includes(query));
        if (!matchesName && !matchesCat && !matchesTag && !matchesFeature) {
          return false;
        }
      }

      if (selectedCapacity !== 'all') {
        const cap = vehicle.passengerCapacity;
        if (selectedCapacity === '1-7' && cap > 7) return false;
        if (selectedCapacity === '8-12' && (cap < 8 || cap > 12)) return false;
        if (selectedCapacity === '13-17' && (cap < 13 || cap > 17)) return false;
        if (selectedCapacity === '18+' && cap < 18) return false;
      }

      return true;
    }).sort((a, b) => {
      if (sortBy === 'capacity-asc') return a.passengerCapacity - b.passengerCapacity;
      if (sortBy === 'capacity-desc') return b.passengerCapacity - a.passengerCapacity;
      if (sortBy === 'name-asc') return a.name.localeCompare(b.name);
      return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
    });
  }, [selectedCategory, searchQuery, selectedCapacity, sortBy]);

  return (
    <div className="py-12 bg-paper-warm min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <EditorialSectionHeader
          label="THE COMPLETE FLEET CATALOGUE"
          title="PRECISION VEHICLES FOR EVERY PASSAGE"
          subtitle="From the iconic Toyota Innova Crysta to luxury Force Urbania vans, multi-seater Tempo Travellers, and 21-seater coaches. Each machine undergoes strict mechanical certification prior to every dispatch."
        />

        {/* Filter Controls */}
        <FleetFilterBar
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          selectedCapacity={selectedCapacity}
          onCapacityChange={setSelectedCapacity}
          sortBy={sortBy}
          onSortChange={setSortBy}
        />

        {/* Results Counter */}
        <div className="flex items-center justify-between text-xs font-mono text-ink-muted mb-6 px-1">
          <span>SHOWING {filteredVehicles.length} OF {FLEET_DATA.length} VEHICLE SPECIFICATIONS</span>
          {(selectedCategory !== 'All Vehicles' || searchQuery || selectedCapacity !== 'all') && (
            <button
              onClick={() => {
                setSelectedCategory('All Vehicles');
                setSearchQuery('');
                setSelectedCapacity('all');
              }}
              className="text-ink-black font-bold uppercase hover:underline"
            >
              Reset Filters
            </button>
          )}
        </div>

        {/* Vehicles Grid */}
        {filteredVehicles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredVehicles.map((vehicle) => (
              <VehicleCard key={vehicle.id} vehicle={vehicle} />
            ))}
          </div>
        ) : (
          <div className="glossy-card rounded-lg p-12 text-center my-8 shadow-sm">
            <h3 className="font-serif font-black text-2xl text-ink-black">
              NO MATCHING VEHICLES FOUND
            </h3>
            <p className="mt-2 text-xs sm:text-sm text-ink-muted font-sans max-w-md mx-auto">
              We could not locate a vehicle matching your current filter criteria. Reset the filters or contact our dispatch team for custom fleet requirements.
            </p>
            <div className="mt-6">
              <Button
                variant="outline"
                size="sm"
                onClick={() => {
                  setSelectedCategory('All Vehicles');
                  setSearchQuery('');
                  setSelectedCapacity('all');
                }}
              >
                CLEAR ALL FILTERS
              </Button>
            </div>
          </div>
        )}

        {/* Fleet Maintenance Assurance Banner */}
        <div className="mt-16 glossy-card rounded-lg p-8 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-8 space-y-2">
              <span className="vintage-stamp">OX QUALITY ASSURANCE</span>
              <h4 className="text-2xl font-serif font-black text-ink-black uppercase">
                OUR VEHICLE PRE-DEPARTURE DISPATCH CHECKLIST
              </h4>
              <p className="text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                Every vehicle in the Ox Tours and Travels repository undergoes a mandatory 28-point mechanical inspection before departure: tire tread depth, suspension damping, dual-zone AC cooling efficiency, onboard emergency medical kit, and strict cabin sanitization.
              </p>
            </div>
            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <Button to="/book" variant="primary" size="md">
                <span>REQUISITION YOUR VEHICLE</span>
                <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};