import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MapPin, Calendar, Car, Users, ArrowRight, CheckCircle2, AlertCircle } from 'lucide-react';
import { VEHICLE_CATEGORIES } from '../../data/fleetData';
import { VehicleCategory } from '../../types';

export const QuickBookingBar: React.FC = () => {
  const navigate = useNavigate();

  const [tripType, setTripType] = useState<'outstation' | 'local' | 'airport'>('outstation');
  const [formData, setFormData] = useState({
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    returnDate: '',
    vehicleCategory: '' as VehicleCategory | '',
    passengers: '2',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState<boolean>(false);

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.pickupLocation.trim()) {
      newErrors.pickupLocation = 'Enter pickup city';
    }
    if (tripType !== 'local' && !formData.dropoffLocation.trim()) {
      newErrors.dropoffLocation = 'Enter drop-off destination';
    }
    if (!formData.pickupDate) {
      newErrors.pickupDate = 'Select departure date';
    }
    if (!formData.vehicleCategory) {
      newErrors.vehicleCategory = 'Select vehicle';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleQuickSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    navigate('/book', {
      state: {
        quickPrefill: {
          tripType,
          pickupLocation: formData.pickupLocation,
          dropoffLocation: formData.dropoffLocation,
          pickupDate: formData.pickupDate,
          returnDate: formData.returnDate,
          vehicleCategory: formData.vehicleCategory,
          passengers: parseInt(formData.passengers, 10) || 2,
        }
      }
    });
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  return (
    <section className="relative -mt-8 z-20 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-paper-white rounded-lg border border-ink-black/15 shadow-xl p-6 sm:p-8">
        
        {/* Top Header & Trip Type Selector */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-ink-black/10 pb-4 mb-6 gap-3">
          <div>
            <h3 className="text-base sm:text-lg font-serif font-black uppercase text-ink-black">
              QUICK JOURNEY REQUISITION
            </h3>
            <p className="text-xs text-ink-muted">
              Select your route parameters to view instant fleet availability.
            </p>
          </div>

          {/* Clean Segmented Trip Type Buttons */}
          <div className="flex items-center bg-paper-warm p-1 rounded border border-ink-black/10">
            {[
              { id: 'outstation', label: 'Outstation' },
              { id: 'local', label: 'Local City' },
              { id: 'airport', label: 'Airport' }
            ].map((t) => (
              <button
                key={t.id}
                type="button"
                onClick={() => setTripType(t.id as any)}
                className={`px-3.5 py-1.5 text-xs font-sans font-medium uppercase tracking-wider rounded transition-all ${
                  tripType === t.id
                    ? 'bg-ink-black text-paper-white shadow-sm'
                    : 'text-ink-charcoal hover:text-ink-black'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {submitted ? (
          <div className="p-6 bg-paper-warm rounded border border-ink-black/15 text-center space-y-3">
            <CheckCircle2 className="w-10 h-10 text-green-700 mx-auto" />
            <h4 className="font-serif font-bold text-xl text-ink-black">
              JOURNEY REQUISITION SUBMITTED
            </h4>
            <p className="text-xs text-ink-muted max-w-md mx-auto">
              Our central dispatch desk will review your route parameters and contact you with a transparent quotation.
            </p>
            <button
              onClick={() => setSubmitted(false)}
              className="text-xs font-mono uppercase underline text-vintage-red font-semibold"
            >
              Plan Another Journey
            </button>
          </div>
        ) : (
          <form onSubmit={handleQuickSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              
              {/* Pickup Location */}
              <div>
                <label className="block text-xs font-medium text-ink-charcoal uppercase tracking-wider mb-1.5">
                  Pickup City / Address *
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-vintage-red absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="text"
                    placeholder="e.g. City or Airport"
                    value={formData.pickupLocation}
                    onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                    className={`w-full pl-9 pr-3 py-2.5 text-sm bg-paper-warm/60 rounded border ${
                      errors.pickupLocation ? 'border-red-500' : 'border-ink-black/20'
                    } focus:border-ink-black focus:outline-none focus:bg-paper-white transition-colors`}
                  />
                </div>
                {errors.pickupLocation && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.pickupLocation}
                  </p>
                )}
              </div>

              {/* Drop-off Location */}
              <div>
                <label className="block text-xs font-medium text-ink-charcoal uppercase tracking-wider mb-1.5">
                  Drop-off Destination {tripType === 'local' ? '(Optional)' : '*'}
                </label>
                <div className="relative">
                  <MapPin className="w-4 h-4 text-vintage-red absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="text"
                    placeholder={tripType === 'local' ? 'Local City Disposal' : 'e.g. Destination or Hotel'}
                    value={formData.dropoffLocation}
                    onChange={(e) => setFormData({ ...formData, dropoffLocation: e.target.value })}
                    className={`w-full pl-9 pr-3 py-2.5 text-sm bg-paper-warm/60 rounded border ${
                      errors.dropoffLocation ? 'border-red-500' : 'border-ink-black/20'
                    } focus:border-ink-black focus:outline-none focus:bg-paper-white transition-colors`}
                  />
                </div>
                {errors.dropoffLocation && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.dropoffLocation}
                  </p>
                )}
              </div>

              {/* Journey Date */}
              <div>
                <label className="block text-xs font-medium text-ink-charcoal uppercase tracking-wider mb-1.5">
                  Departure Date *
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-ink-charcoal absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="date"
                    min={minDateStr}
                    value={formData.pickupDate}
                    onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                    className={`w-full pl-9 pr-3 py-2.5 text-sm bg-paper-warm/60 rounded border ${
                      errors.pickupDate ? 'border-red-500' : 'border-ink-black/20'
                    } focus:border-ink-black focus:outline-none focus:bg-paper-white transition-colors`}
                  />
                </div>
                {errors.pickupDate && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.pickupDate}
                  </p>
                )}
              </div>

              {/* Return Date */}
              <div>
                <label className="block text-xs font-medium text-ink-charcoal uppercase tracking-wider mb-1.5">
                  Return Date (Optional)
                </label>
                <div className="relative">
                  <Calendar className="w-4 h-4 text-ink-muted absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="date"
                    min={formData.pickupDate || minDateStr}
                    value={formData.returnDate}
                    onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 text-sm bg-paper-warm/60 rounded border border-ink-black/20 focus:border-ink-black focus:outline-none focus:bg-paper-white transition-colors"
                  />
                </div>
              </div>

              {/* Vehicle Category */}
              <div>
                <label className="block text-xs font-medium text-ink-charcoal uppercase tracking-wider mb-1.5">
                  Vehicle Category *
                </label>
                <div className="relative">
                  <Car className="w-4 h-4 text-ink-charcoal absolute left-3 top-3 pointer-events-none" />
                  <select
                    value={formData.vehicleCategory}
                    onChange={(e) => setFormData({ ...formData, vehicleCategory: e.target.value as VehicleCategory })}
                    className={`w-full pl-9 pr-3 py-2.5 text-sm bg-paper-warm/60 rounded border ${
                      errors.vehicleCategory ? 'border-red-500' : 'border-ink-black/20'
                    } focus:border-ink-black focus:outline-none focus:bg-paper-white transition-colors appearance-none cursor-pointer`}
                  >
                    <option value="">Select vehicle category...</option>
                    {VEHICLE_CATEGORIES.filter(c => c !== 'All Vehicles').map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
                {errors.vehicleCategory && (
                  <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" /> {errors.vehicleCategory}
                  </p>
                )}
              </div>

              {/* Passengers & Search Button */}
              <div className="flex gap-3">
                <div className="w-1/3">
                  <label className="block text-xs font-medium text-ink-charcoal uppercase tracking-wider mb-1.5">
                    Guests
                  </label>
                  <div className="relative">
                    <Users className="w-4 h-4 text-ink-charcoal absolute left-2.5 top-3 pointer-events-none" />
                    <select
                      value={formData.passengers}
                      onChange={(e) => setFormData({ ...formData, passengers: e.target.value })}
                      className="w-full pl-8 pr-1 py-2.5 text-sm bg-paper-warm/60 rounded border border-ink-black/20 focus:border-ink-black focus:outline-none appearance-none cursor-pointer"
                    >
                      {[1, 2, 3, 4, 6, 7, 10, 14, 17, 26, 35].map((num) => (
                        <option key={num} value={num}>
                          {num}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="w-2/3 flex items-end">
                  <button
                    type="submit"
                    className="w-full py-2.5 px-4 bg-vintage-red hover:bg-vintage-crimson text-paper-white text-xs font-bold uppercase tracking-wider rounded transition-all flex items-center justify-center gap-1.5 shadow-sm active:translate-y-0.5"
                  >
                    <span>SEARCH FLEET</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>

            <p className="text-xs text-ink-muted text-center pt-2">
              Chauffeur assigned upon itinerary confirmation. Transparent kilometer & day package rates.
            </p>
          </form>
        )}

      </div>
    </section>
  );
};