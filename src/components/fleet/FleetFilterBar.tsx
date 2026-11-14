import React from 'react';
import { Search, SlidersHorizontal, Users } from 'lucide-react';
import { VEHICLE_CATEGORIES } from '../../data/fleetData';

interface FleetFilterBarProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  selectedCapacity: string;
  onCapacityChange: (capacity: string) => void;
  sortBy: string;
  onSortChange: (sort: string) => void;
}

export const FleetFilterBar: React.FC<FleetFilterBarProps> = ({
  selectedCategory,
  onSelectCategory,
  searchQuery,
  onSearchChange,
  selectedCapacity,
  onCapacityChange,
  sortBy,
  onSortChange,
}) => {
  return (
    <div className="glossy-card rounded-lg p-6 mb-10 shadow-sm">
      
      {/* Category Filter Pills */}
      <div className="border-b border-ink-black/10 pb-4 mb-5">
        <span className="block text-[11px] font-mono uppercase tracking-wider font-bold text-ink-muted mb-3">
          FILTER BY CATEGORY
        </span>
        <div className="flex flex-wrap gap-2">
          {VEHICLE_CATEGORIES.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => onSelectCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-mono uppercase tracking-wider rounded-sm transition-all ${
                selectedCategory === cat
                  ? 'glossy-btn-black text-white shadow-sm font-bold'
                  : 'bg-paper-warm text-ink-charcoal border border-ink-black/15 hover:border-ink-black hover:bg-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Search, Capacity Filter, and Sorting Controls */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-3 items-center">
        
        {/* Search Bar (5 cols) */}
        <div className="lg:col-span-5 relative">
          <Search className="w-4 h-4 text-ink-muted absolute left-3 top-3 pointer-events-none" />
          <input
            type="text"
            placeholder="Search vehicle model, category, feature..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 text-xs font-sans bg-white rounded-sm border border-ink-black/20 focus:border-ink-black focus:outline-none focus:ring-1 focus:ring-ink-black transition-colors shadow-sm"
          />
        </div>

        {/* Capacity Filter (4 cols) */}
        <div className="lg:col-span-4 relative">
          <Users className="w-4 h-4 text-ink-muted absolute left-3 top-3 pointer-events-none" />
          <select
            value={selectedCapacity}
            onChange={(e) => onCapacityChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 text-xs font-mono uppercase bg-white rounded-sm border border-ink-black/20 focus:border-ink-black focus:outline-none appearance-none cursor-pointer shadow-sm"
          >
            <option value="all">Any Passenger Capacity</option>
            <option value="1-4">Intimate (Up to 4 Pax)</option>
            <option value="5-7">Family & Executive (5 to 7 Pax)</option>
            <option value="8-16">Group Van (8 to 16 Pax)</option>
            <option value="17+">Large Delegations (17+ Pax)</option>
          </select>
        </div>

        {/* Sorting Dropdown (3 cols) */}
        <div className="lg:col-span-3 relative">
          <SlidersHorizontal className="w-4 h-4 text-ink-muted absolute left-3 top-3 pointer-events-none" />
          <select
            value={sortBy}
            onChange={(e) => onSortChange(e.target.value)}
            className="w-full pl-9 pr-3 py-2.5 text-xs font-mono uppercase bg-white rounded-sm border border-ink-black/20 focus:border-ink-black focus:outline-none appearance-none cursor-pointer shadow-sm"
          >
            <option value="featured">Sort: Featured Tier</option>
            <option value="capacity-asc">Capacity: Low to High</option>
            <option value="capacity-desc">Capacity: High to Low</option>
            <option value="name-asc">Alphabetical: A to Z</option>
          </select>
        </div>

      </div>

    </div>
  );
};