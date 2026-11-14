import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Briefcase, ArrowUpRight, ShieldCheck, Fuel } from 'lucide-react';
import { Vehicle } from '../../types';
import { Button } from '../ui/Button';

interface VehicleCardProps {
  vehicle: Vehicle;
  onEnquire?: (vehicle: Vehicle) => void;
}

export const VehicleCard: React.FC<VehicleCardProps> = ({ vehicle, onEnquire }) => {
  return (
    <article className="bg-paper-white rounded-lg border border-ink-black/15 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group">
      <div>
        {/* Vehicle Image Container */}
        <div className="relative aspect-[16/10] overflow-hidden bg-ink-charcoal">
          <img
            src={vehicle.images.main}
            alt={vehicle.images.alt}
            className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
            loading="lazy"
          />

          {/* Category Stamp Badge */}
          <div className="absolute top-3 left-3 bg-paper-white/95 backdrop-blur-sm border border-ink-black/10 px-2.5 py-1 rounded text-[11px] font-mono font-semibold uppercase tracking-wider text-ink-black">
            {vehicle.category}
          </div>

          {/* Availability Status */}
          <div className="absolute top-3 right-3">
            <span className={`px-2 py-0.5 text-[10px] font-mono uppercase font-bold rounded ${
              vehicle.availabilityStatus === 'Available'
                ? 'bg-emerald-600 text-paper-white'
                : 'bg-amber-600 text-paper-white'
            }`}>
              {vehicle.availabilityStatus}
            </span>
          </div>

          {/* Capacity Badges in Bottom Bar */}
          <div className="absolute bottom-3 left-3 flex gap-2">
            <span className="bg-ink-black/85 text-paper-white text-xs font-mono px-2.5 py-1 rounded flex items-center gap-1.5">
              <Users className="w-3.5 h-3.5 text-vintage-red" />
              <span>{vehicle.passengerCapacity} Seater</span>
            </span>
            <span className="bg-ink-black/85 text-paper-white text-xs font-mono px-2.5 py-1 rounded flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-vintage-red" />
              <span>{vehicle.luggageCapacity} Bags</span>
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3 className="text-xl sm:text-2xl font-serif font-black text-ink-black group-hover:text-vintage-red transition-colors">
            <Link to={`/fleet/${vehicle.id}`}>
              {vehicle.name}
            </Link>
          </h3>

          <p className="font-serif italic text-xs text-vintage-red mt-1">
            &ldquo;{vehicle.tagline}&rdquo;
          </p>

          <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed line-clamp-2">
            {vehicle.shortDescription}
          </p>

          {/* Key Specs Pills */}
          <div className="mt-4 pt-4 border-t border-ink-black/10 flex flex-wrap gap-3 text-xs font-mono text-ink-charcoal">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-vintage-red" />
              <span>Chauffeur Driven</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Fuel className="w-4 h-4 text-vintage-red" />
              <span>{vehicle.specs.fuelType.split('/')[0]}</span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="mt-4 p-3 bg-paper-warm rounded border border-ink-black/10 flex items-center justify-between text-xs">
            <span className="font-mono text-[11px] uppercase text-ink-muted">ESTIMATED TARIFF:</span>
            <span className="font-serif font-bold text-sm text-ink-black">{vehicle.pricingPlaceholder.indicativeRate}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="p-6 pt-0 flex items-center gap-3">
        <Button 
          to={`/fleet/${vehicle.id}`} 
          variant="outline" 
          size="sm" 
          className="flex-1"
        >
          <span>VIEW DETAILS</span>
          <ArrowUpRight className="w-3 h-3 ml-0.5" />
        </Button>

        <Button 
          to="/book" 
          variant="accent" 
          size="sm" 
          className="flex-1"
          onClick={() => onEnquire && onEnquire(vehicle)}
        >
          <span>ENQUIRE NOW</span>
        </Button>
      </div>
    </article>
  );
};