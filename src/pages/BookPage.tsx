import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  MapPin, 
  Calendar, 
  Clock, 
  Users, 
  Briefcase, 
  CheckCircle2, 
  AlertCircle, 
  ArrowRight, 
  ArrowLeft, 
  Printer, 
  MessageSquare, 
  FileText, 
  ShieldCheck,
  Check
} from 'lucide-react';
import { FLEET_DATA, VEHICLE_CATEGORIES } from '../data/fleetData';
import { SITE_CONFIG } from '../data/siteConfig';
import { BookingFormData, VehicleCategory } from '../types';

export const BookPage: React.FC = () => {
  const location = useLocation();

  const [formData, setFormData] = useState<BookingFormData>({
    tripType: 'outstation',
    pickupLocation: '',
    dropoffLocation: '',
    pickupDate: '',
    returnDate: '',
    pickupTime: '08:00',
    vehicleCategory: '',
    preferredVehicleId: '',
    passengers: 2,
    luggageCount: 2,
    specialRequests: '',
    fullName: '',
    phoneNumber: '',
    email: '',
    communicationPreference: 'whatsapp',
  });

  const [currentStep, setCurrentStep] = useState<number>(1);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [requisitionId, setRequisitionId] = useState<string>('');

  useEffect(() => {
    if (location.state) {
      const state = location.state as { quickPrefill?: Partial<BookingFormData>; preselectedVehicle?: string };
      if (state.quickPrefill) {
        setFormData((prev) => ({
          ...prev,
          ...state.quickPrefill,
        }));
        if (state.quickPrefill.vehicleCategory) {
          setCurrentStep(2);
        }
      }
      if (state.preselectedVehicle) {
        const found = FLEET_DATA.find(v => v.id === state.preselectedVehicle);
        if (found) {
          setFormData((prev) => ({
            ...prev,
            preferredVehicleId: found.id,
            vehicleCategory: found.category,
            passengers: Math.min(prev.passengers, found.passengerCapacity)
          }));
          setCurrentStep(2);
        }
      }
    }
  }, [location.state]);

  const validateStep = (step: number) => {
    const errs: Record<string, string> = {};

    if (step === 1) {
      if (!formData.pickupLocation.trim()) errs.pickupLocation = 'Pickup location is required.';
      if (formData.tripType !== 'local' && !formData.dropoffLocation.trim()) {
        errs.dropoffLocation = 'Destination is required.';
      }
      if (!formData.pickupDate) errs.pickupDate = 'Pickup date is required.';
    }

    if (step === 2) {
      if (!formData.vehicleCategory) errs.vehicleCategory = 'Please choose a vehicle category.';
      if (!formData.passengers || formData.passengers < 1) {
        errs.passengers = 'Enter number of guests.';
      }
    }

    if (step === 3) {
      if (!formData.fullName.trim()) errs.fullName = 'Full legal name is required.';
      if (!formData.phoneNumber.trim()) errs.phoneNumber = 'Phone number is required for dispatch.';
      if (!formData.email.trim() || !formData.email.includes('@')) {
        errs.email = 'Valid email is required.';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep((prev) => Math.min(prev + 1, 4));
      window.scrollTo({ top: 120, behavior: 'smooth' });
    }
  };

  const handleBack = () => {
    setCurrentStep((prev) => Math.max(prev - 1, 1));
    window.scrollTo({ top: 120, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateStep(3)) {
      setCurrentStep(3);
      return;
    }

    const randomSeq = Math.floor(1000 + Math.random() * 9000);
    const newId = `OX-REQ-${new Date().getFullYear()}-${randomSeq}`;
    setRequisitionId(newId);
    setIsSubmitted(true);
    window.scrollTo({ top: 100, behavior: 'smooth' });
  };

  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  const minDateStr = tomorrow.toISOString().split('T')[0];

  const stepsList = [
    { number: 1, title: 'Route Details', desc: 'Pickup & Dates' },
    { number: 2, title: 'Vehicle Selection', desc: 'Category & Capacity' },
    { number: 3, title: 'Contact Information', desc: 'Guest Details' },
    { number: 4, title: 'Review & Confirm', desc: 'Dispatch Slip' },
  ];

  return (
    <div className="py-12 bg-paper-warm min-h-screen">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Page Header */}
        <div className="text-center mb-10">
          <span className="vintage-stamp mb-2">PASSENGER DISPATCH PROTOCOL</span>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-serif font-black tracking-tight text-ink-black uppercase">
            PLAN YOUR CHAUFFEURED JOURNEY
          </h1>
          <p className="mt-2 text-xs sm:text-sm font-serif italic text-ink-muted max-w-lg mx-auto">
            Complete the 4-step itinerary requisition below. Our fleet coordinator will review route feasibility and send an official quote.
          </p>
        </div>

        {/* User-Friendly Visual Stepper */}
        <div className="glossy-card rounded-lg p-6 mb-8 no-print">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {stepsList.map((step) => {
              const isActive = currentStep === step.number;
              const isPast = currentStep > step.number;

              return (
                <div
                  key={step.number}
                  className={`p-3.5 rounded-sm border transition-all ${
                    isActive
                      ? 'border-ink-black bg-ink-black text-white shadow-glossy-dark'
                      : isPast
                      ? 'border-ink-black/20 bg-paper-warm text-ink-black'
                      : 'border-ink-black/10 bg-white/60 text-ink-muted'
                  }`}
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className={`text-[11px] font-mono font-bold ${
                      isActive ? 'text-white' : isPast ? 'text-ink-black' : 'text-ink-muted'
                    }`}>
                      STEP 0{step.number}
                    </span>
                    {isPast ? (
                      <Check className="w-4 h-4 text-ink-black" />
                    ) : (
                      <span className={`w-2 h-2 rounded-full ${isActive ? 'bg-white' : 'bg-ink-black/20'}`} />
                    )}
                  </div>
                  <p className="font-serif font-bold text-xs sm:text-sm">
                    {step.title}
                  </p>
                  <p className={`text-[10px] hidden sm:block ${isActive ? 'text-ink-light' : 'text-ink-muted'}`}>
                    {step.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* ============================================================== */}
        {/* CONFIRMATION SCREEN (When submitted) */}
        {/* ============================================================== */}
        {isSubmitted ? (
          <div className="glossy-card rounded-lg p-6 sm:p-10 shadow-glossy-lg relative">
            
            <div className="flex flex-wrap items-center justify-between border-b-2 border-ink-black pb-5 mb-6 gap-3">
              <div>
                <span className="vintage-stamp">REQUISITION LOGGED</span>
                <h2 className="text-2xl sm:text-3xl font-serif font-black uppercase text-ink-black mt-1">
                  OFFICIAL TRAVEL DISPATCH VOUCHER
                </h2>
                <p className="text-xs font-mono text-ink-muted">
                  REGISTRY NUMBER: <span className="font-bold text-ink-black">{requisitionId}</span>
                </p>
              </div>

              <div className="text-right text-xs font-mono text-ink-muted">
                <span>DATE: {new Date().toLocaleDateString()}</span>
              </div>
            </div>

            {/* Success Banner */}
            <div className="p-4 bg-paper-warm rounded-sm border border-ink-black/15 mb-6 flex items-start gap-3">
              <CheckCircle2 className="w-5 h-5 text-ink-black shrink-0 mt-0.5" />
              <div>
                <h4 className="font-serif font-bold text-sm text-ink-black uppercase">
                  Requisition Recorded in Central Dispatch Queue
                </h4>
                <p className="text-xs text-ink-muted mt-1 leading-relaxed font-sans">
                  Our route coordinator will contact you via {formData.communicationPreference.toUpperCase()} at <strong className="text-ink-black">{formData.phoneNumber}</strong> with an official itinerary and vehicle confirmation.
                </p>
              </div>
            </div>

            {/* Ticket Summary */}
            <div className="bg-paper-warm rounded-sm border border-ink-black/15 p-6 space-y-4 mb-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-4 border-b border-ink-black/10 text-xs font-mono">
                <div>
                  <span className="text-ink-muted uppercase block text-[10px]">PASSENGER NAME:</span>
                  <span className="font-bold text-sm text-ink-black">{formData.fullName}</span>
                  <p className="text-[11px] text-ink-muted">{formData.email} • {formData.phoneNumber}</p>
                </div>

                <div>
                  <span className="text-ink-muted uppercase block text-[10px]">SERVICE CLASSIFICATION:</span>
                  <span className="font-bold text-sm text-ink-black uppercase">
                    {formData.tripType} Highway Journey
                  </span>
                  <p className="text-[11px] text-ink-muted">Chauffeur Navigation Service</p>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pb-4 border-b border-ink-black/10 text-xs font-mono">
                <div>
                  <span className="text-ink-muted uppercase block text-[10px]">PICKUP LOCATION:</span>
                  <span className="font-bold text-ink-black">{formData.pickupLocation}</span>
                  <p className="text-[11px] text-ink-muted">{formData.pickupDate} at {formData.pickupTime}</p>
                </div>

                <div>
                  <span className="text-ink-muted uppercase block text-[10px]">DESTINATION / DROP:</span>
                  <span className="font-bold text-ink-black">
                    {formData.dropoffLocation || 'Local City Disposal'}
                  </span>
                  <p className="text-[11px] text-ink-muted">
                    Return: {formData.returnDate || 'Same Day / One Way'}
                  </p>
                </div>

                <div>
                  <span className="text-ink-muted uppercase block text-[10px]">VEHICLE SELECTION:</span>
                  <span className="font-bold text-ink-black">{formData.vehicleCategory}</span>
                  <p className="text-[11px] text-ink-muted">
                    {formData.passengers} Guests • {formData.luggageCount} Bags
                  </p>
                </div>
              </div>

              {formData.specialRequests && (
                <div className="text-xs font-mono">
                  <span className="text-ink-muted uppercase block text-[10px]">SPECIAL ITINERARY NOTES:</span>
                  <p className="font-sans italic text-ink-charcoal mt-1">{formData.specialRequests}</p>
                </div>
              )}

            </div>

            {/* Actions */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-ink-black/10 no-print">
              <div className="flex items-center gap-3">
                <button
                  type="button"
                  onClick={() => window.print()}
                  className="glossy-btn-white px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm inline-flex items-center gap-1.5"
                >
                  <Printer className="w-4 h-4 text-ink-black" />
                  <span>Print Voucher</span>
                </button>

                <a
                  href={`https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${encodeURIComponent(
                    `Hello Ox Tours! I have submitted requisition ${requisitionId} for ${formData.vehicleCategory}. Please verify availability.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glossy-btn-black px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm inline-flex items-center gap-1.5"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>Message on WhatsApp</span>
                </a>
              </div>

              <button
                type="button"
                onClick={() => {
                  setIsSubmitted(false);
                  setCurrentStep(1);
                  setFormData({
                    tripType: 'outstation',
                    pickupLocation: '',
                    dropoffLocation: '',
                    pickupDate: '',
                    returnDate: '',
                    pickupTime: '08:00',
                    vehicleCategory: '',
                    preferredVehicleId: '',
                    passengers: 2,
                    luggageCount: 2,
                    specialRequests: '',
                    fullName: '',
                    phoneNumber: '',
                    email: '',
                    communicationPreference: 'whatsapp',
                  });
                }}
                className="text-xs font-mono uppercase text-ink-black hover:underline font-bold"
              >
                Plan Another Journey →
              </button>
            </div>

          </div>
        ) : (

          /* FORM CONTAINER */
          <form onSubmit={handleSubmit} className="glossy-card rounded-lg p-6 sm:p-10 shadow-sm">
            
            {/* STEP 1: ROUTE DETAILS */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="border-b border-ink-black/10 pb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted font-bold">
                    STEP 01 OF 04
                  </span>
                  <h3 className="font-serif font-black text-2xl text-ink-black uppercase mt-1">
                    JOURNEY ROUTE & SCHEDULE
                  </h3>
                  <p className="text-xs text-ink-muted">
                    Tell us where your trip begins, where you are going, and the planned travel dates.
                  </p>
                </div>

                {/* Classification Buttons */}
                <div>
                  <label className="block text-xs font-bold text-ink-charcoal uppercase tracking-wider mb-2">
                    Classification of Passage *
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {[
                      { key: 'outstation', label: 'Outstation Tour', desc: 'Inter-city highway' },
                      { key: 'local', label: 'Local City Rental', desc: 'Hourly disposal' },
                      { key: 'airport', label: 'Airport Transfer', desc: 'Terminal transit' },
                      { key: 'package', label: 'Curated Circuit', desc: 'Multi-day package' }
                    ].map((type) => (
                      <button
                        key={type.key}
                        type="button"
                        onClick={() => setFormData({ ...formData, tripType: type.key as any })}
                        className={`p-3 text-left rounded-sm border transition-all ${
                          formData.tripType === type.key
                            ? 'glossy-btn-black text-white shadow-glossy-dark'
                            : 'border-ink-black/15 bg-white text-ink-black hover:border-ink-black'
                        }`}
                      >
                        <span className="font-serif font-bold text-xs block">{type.label}</span>
                        <span className={`text-[10px] font-mono block mt-0.5 ${
                          formData.tripType === type.key ? 'text-ink-light' : 'text-ink-muted'
                        }`}>
                          {type.desc}
                        </span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Pickup & Dropoff Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ink-charcoal uppercase tracking-wider mb-1.5">
                      Pickup Point / City *
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-ink-black absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="text"
                        placeholder="e.g. Hotel / Residence / City"
                        value={formData.pickupLocation}
                        onChange={(e) => setFormData({ ...formData, pickupLocation: e.target.value })}
                        className={`w-full pl-9 pr-3 py-2.5 text-sm bg-white rounded-sm border ${
                          errors.pickupLocation ? 'border-red-500' : 'border-ink-black/20'
                        } focus:border-ink-black focus:outline-none focus:ring-1 focus:ring-ink-black shadow-sm`}
                      />
                    </div>
                    {errors.pickupLocation && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.pickupLocation}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink-charcoal uppercase tracking-wider mb-1.5">
                      Destination / Drop-off Point {formData.tripType === 'local' ? '(Optional)' : '*'}
                    </label>
                    <div className="relative">
                      <MapPin className="w-4 h-4 text-ink-black absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="text"
                        placeholder={formData.tripType === 'local' ? 'Local City Disposal' : 'e.g. Hill Station / Destination'}
                        value={formData.dropoffLocation}
                        onChange={(e) => setFormData({ ...formData, dropoffLocation: e.target.value })}
                        className={`w-full pl-9 pr-3 py-2.5 text-sm bg-white rounded-sm border ${
                          errors.dropoffLocation ? 'border-red-500' : 'border-ink-black/20'
                        } focus:border-ink-black focus:outline-none focus:ring-1 focus:ring-ink-black shadow-sm`}
                      />
                    </div>
                    {errors.dropoffLocation && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.dropoffLocation}
                      </p>
                    )}
                  </div>
                </div>

                {/* Dates & Times */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ink-charcoal uppercase tracking-wider mb-1.5">
                      Departure Date *
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-ink-black absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="date"
                        min={minDateStr}
                        value={formData.pickupDate}
                        onChange={(e) => setFormData({ ...formData, pickupDate: e.target.value })}
                        className={`w-full pl-9 pr-3 py-2.5 text-sm font-mono bg-white rounded-sm border ${
                          errors.pickupDate ? 'border-red-500' : 'border-ink-black/20'
                        } focus:border-ink-black focus:outline-none focus:ring-1 focus:ring-ink-black shadow-sm`}
                      />
                    </div>
                    {errors.pickupDate && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.pickupDate}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink-charcoal uppercase tracking-wider mb-1.5">
                      Return Date (Optional)
                    </label>
                    <div className="relative">
                      <Calendar className="w-4 h-4 text-ink-muted absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="date"
                        min={formData.pickupDate || minDateStr}
                        value={formData.returnDate}
                        onChange={(e) => setFormData({ ...formData, returnDate: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 text-sm font-mono bg-white rounded-sm border border-ink-black/20 focus:border-ink-black focus:outline-none focus:ring-1 focus:ring-ink-black shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink-charcoal uppercase tracking-wider mb-1.5">
                      Departure Time
                    </label>
                    <div className="relative">
                      <Clock className="w-4 h-4 text-ink-black absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="time"
                        value={formData.pickupTime}
                        onChange={(e) => setFormData({ ...formData, pickupTime: e.target.value })}
                        className="w-full pl-9 pr-3 py-2.5 text-sm font-mono bg-white rounded-sm border border-ink-black/20 focus:border-ink-black focus:outline-none focus:ring-1 focus:ring-ink-black shadow-sm"
                      />
                    </div>
                  </div>
                </div>

              </div>
            )}

            {/* STEP 2: VEHICLE PREFERENCES */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div className="border-b border-ink-black/10 pb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted font-bold">
                    STEP 02 OF 04
                  </span>
                  <h3 className="font-serif font-black text-2xl text-ink-black uppercase mt-1">
                    CHOOSE YOUR VEHICLE TIER
                  </h3>
                  <p className="text-xs text-ink-muted">
                    Select the automobile class tailored to your passenger group.
                  </p>
                </div>

                {/* Category Cards */}
                <div>
                  <label className="block text-xs font-bold text-ink-charcoal uppercase tracking-wider mb-2">
                    Automotive Category *
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                    {VEHICLE_CATEGORIES.filter(c => c !== 'All Vehicles').map((cat) => {
                      const matched = FLEET_DATA.find(f => f.category === cat);
                      const isSelected = formData.vehicleCategory === cat;

                      return (
                        <div
                          key={cat}
                          onClick={() => setFormData({ ...formData, vehicleCategory: cat as VehicleCategory })}
                          className={`p-4 rounded-sm border-2 cursor-pointer transition-all ${
                            isSelected
                              ? 'border-ink-black bg-ink-black text-white shadow-glossy-dark'
                              : 'border-ink-black/15 bg-white hover:border-ink-black'
                          }`}
                        >
                          <div className="flex items-center justify-between text-xs font-mono mb-1.5">
                            <span className="font-bold">{cat}</span>
                            {matched && (
                              <span className={isSelected ? 'text-ink-light' : 'text-ink-muted'}>
                                {matched.passengerCapacity} Pax
                              </span>
                            )}
                          </div>
                          {matched && (
                            <p className={`text-xs font-serif italic line-clamp-1 ${
                              isSelected ? 'text-ink-light' : 'text-ink-muted'
                            }`}>
                              {matched.tagline}
                            </p>
                          )}
                        </div>
                      );
                    })}
                  </div>
                  {errors.vehicleCategory && (
                    <p className="text-[11px] text-red-600 mt-2 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.vehicleCategory}
                    </p>
                  )}
                </div>

                {/* Capacity Inputs */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ink-charcoal uppercase tracking-wider mb-1.5">
                      Number of Passengers *
                    </label>
                    <div className="relative">
                      <Users className="w-4 h-4 text-ink-black absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="number"
                        min={1}
                        max={40}
                        value={formData.passengers}
                        onChange={(e) => setFormData({ ...formData, passengers: parseInt(e.target.value, 10) || 1 })}
                        className="w-full pl-9 pr-3 py-2.5 text-sm font-mono bg-white rounded-sm border border-ink-black/20 focus:border-ink-black focus:outline-none shadow-sm"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink-charcoal uppercase tracking-wider mb-1.5">
                      Approx. Luggage Bags (Suitcases)
                    </label>
                    <div className="relative">
                      <Briefcase className="w-4 h-4 text-ink-black absolute left-3 top-3 pointer-events-none" />
                      <input
                        type="number"
                        min={0}
                        max={30}
                        value={formData.luggageCount}
                        onChange={(e) => setFormData({ ...formData, luggageCount: parseInt(e.target.value, 10) || 0 })}
                        className="w-full pl-9 pr-3 py-2.5 text-sm font-mono bg-white rounded-sm border border-ink-black/20 focus:border-ink-black focus:outline-none shadow-sm"
                      />
                    </div>
                  </div>
                </div>

                {/* In-Cabin Requests */}
                <div>
                  <label className="block text-xs font-bold text-ink-charcoal uppercase tracking-wider mb-1.5">
                    Special In-Cabin Requirements (Optional)
                  </label>
                  <textarea
                    rows={3}
                    placeholder="E.g., child booster seat, senior citizen boarding assistance, scenic rest stops..."
                    value={formData.specialRequests}
                    onChange={(e) => setFormData({ ...formData, specialRequests: e.target.value })}
                    className="w-full px-3 py-2 text-sm bg-white rounded-sm border border-ink-black/20 focus:border-ink-black focus:outline-none shadow-sm"
                  />
                </div>

              </div>
            )}

            {/* STEP 3: CONTACT DETAILS */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div className="border-b border-ink-black/10 pb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted font-bold">
                    STEP 03 OF 04
                  </span>
                  <h3 className="font-serif font-black text-2xl text-ink-black uppercase mt-1">
                    PRIMARY TRAVELER CONTACT
                  </h3>
                  <p className="text-xs text-ink-muted">
                    Who should our central dispatch office contact with vehicle and tariff details?
                  </p>
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink-charcoal uppercase tracking-wider mb-1.5">
                    Full Legal Name *
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Arthur Pendelton"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className={`w-full px-3 py-2.5 text-sm bg-white rounded-sm border ${
                      errors.fullName ? 'border-red-500' : 'border-ink-black/20'
                    } focus:border-ink-black focus:outline-none shadow-sm`}
                  />
                  {errors.fullName && (
                    <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-mono">
                      <AlertCircle className="w-3 h-3" /> {errors.fullName}
                    </p>
                  )}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-ink-charcoal uppercase tracking-wider mb-1.5">
                      Phone Number (Mobile) *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phoneNumber}
                      onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                      className={`w-full px-3 py-2.5 text-sm font-mono bg-white rounded-sm border ${
                        errors.phoneNumber ? 'border-red-500' : 'border-ink-black/20'
                      } focus:border-ink-black focus:outline-none shadow-sm`}
                    />
                    {errors.phoneNumber && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.phoneNumber}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink-charcoal uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. traveler@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3 py-2.5 text-sm bg-white rounded-sm border ${
                        errors.email ? 'border-red-500' : 'border-ink-black/20'
                      } focus:border-ink-black focus:outline-none shadow-sm`}
                    />
                    {errors.email && (
                      <p className="text-[11px] text-red-600 mt-1 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-ink-charcoal uppercase tracking-wider mb-2">
                    Preferred Mode for Tariff Quotation
                  </label>
                  <div className="flex flex-wrap gap-4 text-xs font-mono">
                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="commPref"
                        checked={formData.communicationPreference === 'whatsapp'}
                        onChange={() => setFormData({ ...formData, communicationPreference: 'whatsapp' })}
                        className="text-ink-black focus:ring-0"
                      />
                      <span>WhatsApp Message (Fastest)</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="commPref"
                        checked={formData.communicationPreference === 'phone'}
                        onChange={() => setFormData({ ...formData, communicationPreference: 'phone' })}
                        className="text-ink-black focus:ring-0"
                      />
                      <span>Telephone Call</span>
                    </label>

                    <label className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="commPref"
                        checked={formData.communicationPreference === 'email'}
                        onChange={() => setFormData({ ...formData, communicationPreference: 'email' })}
                        className="text-ink-black focus:ring-0"
                      />
                      <span>Formal Email Statement</span>
                    </label>
                  </div>
                </div>

              </div>
            )}

            {/* STEP 4: REVIEW DISPATCH SUMMARY */}
            {currentStep === 4 && (
              <div className="space-y-6">
                <div className="border-b border-ink-black/10 pb-4">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-ink-muted font-bold">
                    STEP 04 OF 04
                  </span>
                  <h3 className="font-serif font-black text-2xl text-ink-black uppercase mt-1">
                    REVIEW REQUISITION DETAILS
                  </h3>
                  <p className="text-xs text-ink-muted">
                    Verify all parameters before transmitting to our central dispatch log.
                  </p>
                </div>

                {/* Clean Review Summary Card */}
                <div className="bg-paper-warm rounded-sm border border-ink-black/15 p-6 space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-ink-black/10 text-xs font-mono">
                    <div>
                      <span className="text-ink-muted uppercase block text-[10px]">ROUTE:</span>
                      <p className="font-bold text-sm text-ink-black mt-0.5">
                        {formData.pickupLocation} → {formData.dropoffLocation || 'City Local'}
                      </p>
                      <span className="text-ink-black font-semibold uppercase text-[10px]">
                        {formData.tripType} Passage
                      </span>
                    </div>

                    <div>
                      <span className="text-ink-muted uppercase block text-[10px]">SCHEDULE:</span>
                      <p className="font-bold text-sm text-ink-black mt-0.5">
                        {formData.pickupDate} at {formData.pickupTime}
                      </p>
                      <span className="text-ink-muted text-[11px]">
                        Return: {formData.returnDate || 'Same-day'}
                      </span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pb-4 border-b border-ink-black/10 text-xs font-mono">
                    <div>
                      <span className="text-ink-muted uppercase block text-[10px]">AUTOMOBILE SELECTION:</span>
                      <p className="font-bold text-sm text-ink-black mt-0.5">{formData.vehicleCategory}</p>
                      <span className="text-ink-muted text-[11px]">
                        {formData.passengers} Passengers • {formData.luggageCount} Luggage Bags
                      </span>
                    </div>

                    <div>
                      <span className="text-ink-muted uppercase block text-[10px]">PASSENGER CONTACT:</span>
                      <p className="font-bold text-sm text-ink-black mt-0.5">{formData.fullName}</p>
                      <span className="text-ink-muted text-[11px]">
                        {formData.phoneNumber} ({formData.communicationPreference.toUpperCase()})
                      </span>
                    </div>
                  </div>

                  {formData.specialRequests && (
                    <div className="text-xs font-mono">
                      <span className="text-ink-muted uppercase block text-[10px]">IN-CABIN REQUESTS:</span>
                      <p className="font-sans italic text-ink-charcoal mt-1">{formData.specialRequests}</p>
                    </div>
                  )}
                </div>

                <div className="p-4 bg-paper-warm rounded-sm border border-ink-black/15 text-xs text-ink-muted flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-ink-black shrink-0 mt-0.5" />
                  <p className="leading-relaxed">
                    By submitting this requisition, you request an official availability confirmation and quotation from Ox Tours and Travels. No advance card charges are executed at this step.
                  </p>
                </div>

              </div>
            )}

            {/* Step Controls */}
            <div className="mt-8 pt-6 border-t border-ink-black/10 flex items-center justify-between">
              {currentStep > 1 ? (
                <button
                  type="button"
                  onClick={handleBack}
                  className="glossy-btn-white px-4 py-2 text-xs font-mono uppercase tracking-wider rounded-sm inline-flex items-center gap-1.5"
                >
                  <ArrowLeft className="w-3.5 h-3.5" />
                  <span>Previous</span>
                </button>
              ) : (
                <div />
              )}

              {currentStep < 4 ? (
                <button
                  type="button"
                  onClick={handleNext}
                  className="glossy-btn-black px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm inline-flex items-center gap-1.5"
                >
                  <span>Continue</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              ) : (
                <button
                  type="submit"
                  className="glossy-btn-black px-6 py-2.5 text-xs font-bold uppercase tracking-wider rounded-sm inline-flex items-center gap-2"
                >
                  <FileText className="w-4 h-4" />
                  <span>TRANSMIT REQUISITION</span>
                </button>
              )}
            </div>

          </form>
        )}

      </div>
    </div>
  );
};