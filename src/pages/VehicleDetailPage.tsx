import React, { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Users, 
  Briefcase, 
  ShieldCheck, 
  Wind, 
  Maximize2, 
  CheckCircle2, 
  MessageSquare, 
  ArrowLeft, 
  AlertCircle
} from 'lucide-react';
import { FLEET_DATA } from '../data/fleetData';
import { SITE_CONFIG } from '../data/siteConfig';
import { Button } from '../components/ui/Button';
import { Lightbox } from '../components/ui/Lightbox';

export const VehicleDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const vehicle = FLEET_DATA.find((v) => v.id === id);

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickupCity: '',
    dates: '',
    passengers: '2',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState('');

  if (!vehicle) {
    return (
      <div className="py-20 text-center bg-paper-warm min-h-screen">
        <h2 className="text-3xl font-serif font-black text-ink-black">
          VEHICLE NOT FOUND
        </h2>
        <p className="mt-2 text-xs text-ink-muted">
          The requested vehicle entry does not exist or has been reassigned.
        </p>
        <div className="mt-6">
          <Button to="/fleet" variant="primary" size="md">
            <span>RETURN TO FLEET CATALOGUE</span>
          </Button>
        </div>
      </div>
    );
  }

  const galleryImages = vehicle.images.gallery && vehicle.images.gallery.length > 0 
    ? vehicle.images.gallery 
    : [vehicle.images.main];

  const handleEnquirySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setFormError('Please provide your name and phone number for dispatch.');
      return;
    }
    setFormError('');
    setSubmitted(true);
  };

  const whatsappText = encodeURIComponent(
    `Hello Ox Tours and Travels! I am inquiring about the ${vehicle.name} (${vehicle.category}). Please provide quotation details.`
  );
  const directWhatsAppUrl = `https://wa.me/${SITE_CONFIG.contact.whatsappNumber}?text=${whatsappText}`;

  return (
    <div className="py-12 bg-paper-warm min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <div className="flex items-center justify-between border-b border-ink-black/10 pb-4 mb-8 text-xs font-mono">
          <Link
            to="/fleet"
            className="inline-flex items-center gap-1.5 text-ink-charcoal hover:text-black font-bold uppercase transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Return to Fleet Catalogue</span>
          </Link>

          <span className="text-ink-black font-semibold uppercase">
            CATEGORY: {vehicle.category}
          </span>
        </div>

        {/* Vehicle Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-2">
            <span className="vintage-stamp">{vehicle.category}</span>
            <span className="text-xs font-mono uppercase text-ink-muted">
              STATUS: {vehicle.availabilityStatus}
            </span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-serif font-black tracking-tight text-ink-black uppercase leading-tight">
            {vehicle.name}
          </h1>

          <p className="mt-2 text-sm sm:text-base font-serif italic text-ink-muted max-w-3xl">
            &ldquo;{vehicle.tagline}&rdquo;
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Left Column: Visual Gallery & Specs (7 cols) */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Gallery Frame */}
            <div className="glossy-card rounded-lg p-3 shadow-sm">
              <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-black/5">
                <img
                  src={galleryImages[activeImageIndex]}
                  alt={`${vehicle.name} view ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />

                <button
                  type="button"
                  onClick={() => setIsLightboxOpen(true)}
                  className="absolute top-3 right-3 p-2 bg-black/70 hover:bg-black text-white rounded-sm transition-colors border border-white/20 z-20"
                  aria-label="Enlarge image"
                >
                  <Maximize2 className="w-4 h-4" />
                </button>
              </div>

              {/* Thumbnails */}
              {galleryImages.length > 1 && (
                <div className="mt-3 grid grid-cols-3 gap-2">
                  {galleryImages.map((img, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative aspect-[16/10] overflow-hidden rounded-sm border-2 transition-all bg-black/5 ${
                        activeImageIndex === idx 
                          ? 'border-black opacity-100 shadow-sm' 
                          : 'border-ink-black/15 opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt={`Thumbnail ${idx + 1}`} className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Capacity Bar */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div className="glossy-card rounded-sm p-4 text-center">
                <Users className="w-5 h-5 text-ink-black mx-auto mb-1.5" />
                <span className="block text-[10px] font-mono uppercase text-ink-muted">PASSENGER CAPACITY</span>
                <span className="font-serif font-black text-lg text-ink-black">{vehicle.passengerCapacity} Seater</span>
              </div>

              <div className="glossy-card rounded-sm p-4 text-center">
                <Briefcase className="w-5 h-5 text-ink-black mx-auto mb-1.5" />
                <span className="block text-[10px] font-mono uppercase text-ink-muted">LUGGAGE CAPACITY</span>
                <span className="font-serif font-black text-lg text-ink-black">{vehicle.luggageCapacity} Cases</span>
              </div>

              <div className="glossy-card rounded-sm p-4 text-center">
                <Wind className="w-5 h-5 text-ink-black mx-auto mb-1.5" />
                <span className="block text-[10px] font-mono uppercase text-ink-muted">CLIMATE SYSTEM</span>
                <span className="font-serif font-bold text-xs text-ink-black truncate mt-1 block">Ducted A/C</span>
              </div>

              <div className="glossy-card rounded-sm p-4 text-center">
                <ShieldCheck className="w-5 h-5 text-ink-black mx-auto mb-1.5" />
                <span className="block text-[10px] font-mono uppercase text-ink-muted">CHAUFFEUR SERVICE</span>
                <span className="font-serif font-bold text-xs text-ink-black truncate mt-1 block">Included</span>
              </div>
            </div>

            {/* Vehicle Description */}
            <div className="glossy-card rounded-lg p-6 sm:p-8">
              <h3 className="font-serif font-black text-xl text-ink-black uppercase border-b border-ink-black/10 pb-3 mb-4">
                ABOUT THIS VEHICLE
              </h3>
              <p className="editorial-dropcap text-sm sm:text-base text-ink-charcoal font-serif leading-relaxed">
                {vehicle.fullDescription}
              </p>

              <div className="mt-6 pt-4 border-t border-ink-black/10">
                <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-ink-black mb-2">
                  RECOMMENDED FOR THESE CIRCUITS:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {vehicle.idealFor.map((useCase, idx) => (
                    <span 
                      key={idx} 
                      className="px-3 py-1 text-xs font-sans bg-paper-warm rounded-sm border border-ink-black/10 text-ink-charcoal font-medium"
                    >
                      {useCase}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Features Checklist */}
            <div className="glossy-card rounded-lg p-6 sm:p-8">
              <h3 className="font-serif font-black text-xl text-ink-black uppercase border-b border-ink-black/10 pb-3 mb-4">
                CABIN AMENITIES & FEATURES
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {vehicle.features.map((feat, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs text-ink-charcoal">
                    <CheckCircle2 className="w-4 h-4 text-ink-black shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Column: Pricing & Inquiry Form (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Tariff Card */}
            <div className="glossy-card rounded-lg p-6 shadow-sm">
              <span className="vintage-stamp">TARIFF & CLEARANCE</span>
              <h3 className="font-serif font-black text-2xl text-ink-black uppercase mt-1">
                {vehicle.pricingPlaceholder.indicativeRate}
              </h3>
              <p className="text-xs text-ink-muted font-serif italic mt-0.5">
                {vehicle.pricingPlaceholder.rateType}
              </p>

              <p className="mt-3 text-xs sm:text-sm text-ink-muted leading-relaxed font-sans">
                {vehicle.pricingPlaceholder.note}
              </p>

              {/* Direct WhatsApp CTA */}
              <div className="mt-5">
                <a
                  href={directWhatsAppUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glossy-btn-white w-full flex items-center justify-center gap-2 py-3 text-xs font-mono uppercase tracking-wider rounded-sm shadow-sm"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-700" />
                  <span>Enquire on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* Inquiry Form */}
            <div className="glossy-card rounded-lg p-6 sm:p-7 shadow-sm">
              <div className="border-b border-ink-black/10 pb-3 mb-4">
                <span className="text-[10px] font-mono uppercase tracking-widest text-ink-muted font-bold">
                  DIRECT ENQUIRY
                </span>
                <h4 className="font-serif font-black text-xl text-ink-black uppercase mt-0.5">
                  RESERVE THIS VEHICLE
                </h4>
              </div>

              {submitted ? (
                <div className="p-6 bg-paper-warm rounded border border-ink-black/10 text-center space-y-3">
                  <CheckCircle2 className="w-10 h-10 text-ink-black mx-auto" />
                  <h4 className="font-serif font-bold text-lg text-ink-black">
                    REQUISITION LOGGED
                  </h4>
                  <p className="text-xs text-ink-muted">
                    Thank you, {formData.name}. Our dispatch coordinator will contact you shortly with tariff estimates for the {vehicle.name}.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="text-xs font-mono uppercase underline text-ink-black font-bold block mx-auto mt-2"
                  >
                    Send Another Requisition
                  </button>
                </div>
              ) : (
                <form onSubmit={handleEnquirySubmit} className="space-y-4">
                  {formError && (
                    <div className="p-2.5 bg-red-50 border border-red-200 text-red-700 text-xs font-mono rounded flex items-center gap-1.5">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{formError}</span>
                    </div>
                  )}

                  <div>
                    <label className="block text-xs font-bold text-ink-charcoal uppercase tracking-wider mb-1">
                      Guest Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Eleanor Vance"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white rounded-sm border border-ink-black/20 focus:border-ink-black focus:outline-none focus:ring-1 focus:ring-ink-black"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink-charcoal uppercase tracking-wider mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3 py-2 text-xs font-mono bg-white rounded-sm border border-ink-black/20 focus:border-ink-black focus:outline-none focus:ring-1 focus:ring-ink-black"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="block text-xs font-bold text-ink-charcoal uppercase tracking-wider mb-1">
                        Pickup City
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. City / Airport"
                        value={formData.pickupCity}
                        onChange={(e) => setFormData({ ...formData, pickupCity: e.target.value })}
                        className="w-full px-2.5 py-2 text-xs bg-white rounded-sm border border-ink-black/20 focus:border-ink-black focus:outline-none focus:ring-1 focus:ring-ink-black"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-ink-charcoal uppercase tracking-wider mb-1">
                        Est. Dates
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Nov 20 - Nov 24"
                        value={formData.dates}
                        onChange={(e) => setFormData({ ...formData, dates: e.target.value })}
                        className="w-full px-2.5 py-2 text-xs bg-white rounded-sm border border-ink-black/20 focus:border-ink-black focus:outline-none focus:ring-1 focus:ring-ink-black"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-ink-charcoal uppercase tracking-wider mb-1">
                      Special Requirements or Route Notes
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Specify halts, hill roads, or child seating preferences..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3 py-2 text-xs bg-white rounded-sm border border-ink-black/20 focus:border-ink-black focus:outline-none focus:ring-1 focus:ring-ink-black"
                    />
                  </div>

                  <Button type="submit" variant="primary" size="md" fullWidth>
                    <span>TRANSMIT REQUISITION</span>
                  </Button>
                </form>
              )}

              <div className="mt-4 pt-3 border-t border-ink-black/10 text-center">
                <button
                  type="button"
                  onClick={() => navigate('/book', { state: { preselectedVehicle: vehicle.id } })}
                  className="text-xs font-mono uppercase text-ink-black font-bold hover:underline"
                >
                  Or Open Multi-Step Journey Planner →
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      <Lightbox
        images={galleryImages}
        currentIndex={activeImageIndex}
        isOpen={isLightboxOpen}
        onClose={() => setIsLightboxOpen(false)}
        onNext={() => setActiveImageIndex((prev) => (prev + 1) % galleryImages.length)}
        onPrev={() => setActiveImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length)}
        caption={`${vehicle.name} — Archival Plate`}
      />
    </div>
  );
};