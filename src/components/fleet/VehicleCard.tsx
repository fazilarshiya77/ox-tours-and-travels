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
    <article className="glossy-card rounded-lg overflow-hidden flex flex-col justify-between group">
      <div>
        {/* Vehicle Image Container with Black & White Glossy Treatment */}
        <div className="relative aspect-[16/10] overflow-hidden bg-black glass-reflection">
          <img
            src={vehicle.images.main}
            alt={vehicle.images.alt}
            className="w-full h-full object-cover bw-gloss-img"
            loading="lazy"
          />

          {/* Category Stamp Badge */}
          <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md border border-black/20 px-2.5 py-1 rounded-sm text-[11px] font-mono font-bold uppercase tracking-wider text-black shadow-sm z-20">
            {vehicle.category}
          </div>

          {/* Availability Status */}
          <div className="absolute top-3 right-3 z-20">
            <span className="px-2.5 py-0.5 text-[10px] font-mono uppercase font-bold rounded-sm bg-black/85 text-white border border-white/20 backdrop-blur-sm">
              {vehicle.availabilityStatus}
            </span>
          </div>

          {/* Capacity Badges in Bottom Bar */}
          <div className="absolute bottom-3 left-3 flex gap-2 z-20">
            <span className="bg-black/90 text-white text-xs font-mono px-2.5 py-1 rounded-sm flex items-center gap-1.5 border border-white/10 shadow-sm">
              <Users className="w-3.5 h-3.5 text-white" />
              <span>{vehicle.passengerCapacity} Seater</span>
            </span>
            <span className="bg-black/90 text-white text-xs font-mono px-2.5 py-1 rounded-sm flex items-center gap-1.5 border border-white/10 shadow-sm">
              <Briefcase className="w-3.5 h-3.5 text-white" />
              <span>{vehicle.luggageCapacity} Bags</span>
            </span>
          </div>
        </div>

        {/* Card Body */}
        <div className="p-6">
          <h3 className="text-xl sm:text-2xl font-serif font-black text-ink-black group-hover:text-black transition-colors uppercase tracking-tight">
            <Link to={`/fleet/${vehicle.id}`}>
              {vehicle.name}
            </Link>
          </h3>

          <p className="font-serif italic text-xs text-ink-muted mt-1">
            &ldquo;{vehicle.tagline}&rdquo;
          </p>

          <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed font-sans line-clamp-2">
            {vehicle.shortDescription}
          </p>

          {/* Key Specs Pills */}
          <div className="mt-4 pt-4 border-t border-ink-black/10 flex flex-wrap gap-4 text-xs font-mono text-ink-charcoal">
            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-ink-black" />
              <span>Chauffeur Driven</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Fuel className="w-4 h-4 text-ink-black" />
              <span>{vehicle.specs.fuelType.split('/')[0]}</span>
            </div>
          </div>

          {/* Pricing Box */}
          <div className="mt-4 p-3 bg-paper-warm rounded-sm border border-ink-black/10 flex items-center justify-between text-xs">
            <span className="font-mono text-[11px] uppercase text-ink-muted font-bold">ESTIMATED TARIFF:</span>
            <span className="font-serif font-black text-sm text-ink-black">{vehicle.pricingPlaceholder.indicativeRate}</span>
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
          variant="primary" 
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