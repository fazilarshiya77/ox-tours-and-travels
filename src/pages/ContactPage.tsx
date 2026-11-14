import React, { useState } from 'react';
import { SITE_CONFIG } from '../data/siteConfig';
import { EditorialSectionHeader } from '../components/ui/EditorialSectionHeader';
import { Button } from '../components/ui/Button';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  AlertCircle,
  HelpCircle
} from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    serviceInterest: 'Outstation Travel',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Full name is required';
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    if (!formData.email.trim() || !formData.email.includes('@')) {
      errs.email = 'Valid email address is required';
    }
    if (!formData.message.trim() || formData.message.length < 10) {
      errs.message = 'Please provide details (minimum 10 characters)';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setSubmitted(true);
  };

  const faqs = [
    {
      q: 'How are outstation tariffs calculated?',
      a: 'Outstation tariffs are typically structured on minimum kilometer slabs per calendar day (e.g., 250 or 300 KM per day), including vehicle sanitization and chauffeur allowances. Tolls and state permits are clearly detailed upfront.'
    },
    {
      q: 'Can we request stops or route diversions during the trip?',
      a: 'Certainly. Unlike rigid mass-transit or scheduled buses, your chauffeured vehicle is at your party\'s exclusive command throughout the agreed itinerary duration.'
    },
    {
      q: 'What is the procedure for airport transfers?',
      a: 'We monitor your scheduled flight in real time. Your chauffeur will be stationed at the arrival terminal with a printed guest name board and will assist with all heavy luggage.'
    },
    {
      q: 'How soon should group vehicles like Urbania or Tempo Travellers be reserved?',
      a: 'For high-demand holiday weekends, festival periods, or wedding seasons, we recommend reserving 7 to 14 days in advance to secure preferred seating configurations.'
    }
  ];

  return (
    <div className="py-12 bg-paper-warm min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Editorial Section Header */}
        <EditorialSectionHeader
          label="DIRECT TELECOMMUNICATIONS"
          title="CONTACT THE CENTRAL DISPATCH DESK"
          subtitle="Have questions regarding route feasibility, vehicle classifications, or custom corporate agreements? Our fleet coordinators are standing by."
        />

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16">
          
          {/* Left Column: Form (7 cols) */}
          <div className="lg:col-span-7 bg-paper-white rounded-lg border border-ink-black/15 p-6 sm:p-8 lg:p-10 shadow-sm">
            
            <div className="border-b border-ink-black/10 pb-4 mb-6 flex items-center justify-between">
              <div>
                <span className="vintage-stamp">TELEGRAM & DISPATCH</span>
                <h3 className="font-serif font-black text-2xl text-ink-black uppercase mt-1">
                  SUBMIT YOUR INQUIRY
                </h3>
              </div>
              <span className="text-xs font-mono text-ink-muted hidden sm:inline">
                RESPONSE: WITHIN 30 MINS
              </span>
            </div>

            {submitted ? (
              <div className="p-8 bg-paper-warm rounded border border-ink-black/15 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-green-700 mx-auto" />
                <h4 className="font-serif font-black text-2xl text-ink-black uppercase">
                  INQUIRY TRANSMITTED TO DISPATCH
                </h4>
                <p className="text-xs sm:text-sm text-ink-muted max-w-md mx-auto font-sans leading-relaxed">
                  Thank you, <strong className="text-ink-black">{formData.name}</strong>. Your correspondence has been logged. A fleet coordinator will review your requirements and reach out via telephone or email shortly.
                </p>
                <div className="pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        phone: '',
                        subject: '',
                        serviceInterest: 'Outstation Travel',
                        message: '',
                      });
                    }}
                  >
                    SUBMIT ANOTHER INQUIRY
                  </Button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-ink-charcoal uppercase tracking-wider mb-1.5">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Alistair Montgomery"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className={`w-full px-3 py-2.5 text-xs font-sans bg-paper-warm/60 rounded border ${
                        errors.name ? 'border-red-500' : 'border-ink-black/20'
                      } focus:border-ink-black focus:outline-none focus:bg-paper-white transition-colors`}
                    />
                    {errors.name && (
                      <p className="text-[10px] text-red-600 mt-1 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-ink-charcoal uppercase tracking-wider mb-1.5">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      placeholder="e.g. +91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className={`w-full px-3 py-2.5 text-xs font-mono bg-paper-warm/60 rounded border ${
                        errors.phone ? 'border-red-500' : 'border-ink-black/20'
                      } focus:border-ink-black focus:outline-none focus:bg-paper-white transition-colors`}
                    />
                    {errors.phone && (
                      <p className="text-[10px] text-red-600 mt-1 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-ink-charcoal uppercase tracking-wider mb-1.5">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      placeholder="e.g. traveler@domain.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className={`w-full px-3 py-2.5 text-xs font-sans bg-paper-warm/60 rounded border ${
                        errors.email ? 'border-red-500' : 'border-ink-black/20'
                      } focus:border-ink-black focus:outline-none focus:bg-paper-white transition-colors`}
                    />
                    {errors.email && (
                      <p className="text-[10px] text-red-600 mt-1 font-mono flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-ink-charcoal uppercase tracking-wider mb-1.5">
                      Service Interest
                    </label>
                    <select
                      value={formData.serviceInterest}
                      onChange={(e) => setFormData({ ...formData, serviceInterest: e.target.value })}
                      className="w-full px-3 py-2.5 text-xs font-sans bg-paper-warm/60 rounded border border-ink-black/20 focus:border-ink-black focus:outline-none appearance-none cursor-pointer"
                    >
                      <option value="Outstation Travel">Outstation Highway Travel</option>
                      <option value="Local City Rental">Local City Hourly Rental</option>
                      <option value="Airport Transfer">Airport & Terminal Transfer</option>
                      <option value="Force Urbania Rental">Force Urbania Luxury Van</option>
                      <option value="Tempo Traveller Rental">Tempo Traveller Group Charter</option>
                      <option value="Corporate Fleet Account">Corporate Transit Account</option>
                      <option value="Custom Itinerary">Bespoke Tour Itinerary</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-ink-charcoal uppercase tracking-wider mb-1.5">
                    Subject / Route Header
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Quote Request for 4-Day Hill Station Circuit"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-3 py-2.5 text-xs font-sans bg-paper-warm/60 rounded border border-ink-black/20 focus:border-ink-black focus:outline-none focus:bg-paper-white transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-ink-charcoal uppercase tracking-wider mb-1.5">
                    Journey Details & Inquiry *
                  </label>
                  <textarea
                    rows={4}
                    placeholder="Describe planned pickup dates, destination towns, approximate number of passengers, and any specific vehicle preferences..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className={`w-full px-3 py-2 text-xs font-sans bg-paper-warm/60 rounded border ${
                      errors.message ? 'border-red-500' : 'border-ink-black/20'
                    } focus:border-ink-black focus:outline-none focus:bg-paper-white transition-colors`}
                  />
                  {errors.message && (
                    <p className="text-[10px] text-red-600 mt-1 font-mono flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </p>
                  )}
                </div>

                <div className="pt-2">
                  <Button type="submit" variant="accent" size="md" fullWidth>
                    <Send className="w-4 h-4 mr-1.5" />
                    <span>DISPATCH CORRESPONDENCE</span>
                  </Button>
                </div>
              </form>
            )}

          </div>

          {/* Right Column: Office Info & Map (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-paper-white rounded-lg border border-ink-black/15 p-6 sm:p-7 shadow-sm">
              <span className="vintage-stamp">THE CENTRAL BUREAU</span>
              <h3 className="font-serif font-black text-xl text-ink-black uppercase mt-1">
                DISPATCH HEADQUARTERS
              </h3>
              
              <div className="mt-4 space-y-3.5 text-xs text-ink-charcoal font-sans">
                <div className="flex items-start gap-3">
                  <MapPin className="w-4 h-4 text-vintage-red shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-ink-black block">Office Location:</span>
                    <p className="text-ink-muted leading-relaxed">
                      {SITE_CONFIG.contact.addressLine1}<br />
                      {SITE_CONFIG.contact.addressLine2}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-ink-black/10">
                  <Phone className="w-4 h-4 text-vintage-red shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-ink-black block">Telephone Lines:</span>
                    <a href={`tel:${SITE_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`} className="font-mono text-vintage-red font-semibold hover:underline block">
                      Primary: {SITE_CONFIG.contact.primaryPhone}
                    </a>
                    <a href={`tel:${SITE_CONFIG.contact.secondaryPhone.replace(/\s+/g, '')}`} className="font-mono text-ink-muted hover:underline block">
                      Secondary: {SITE_CONFIG.contact.secondaryPhone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-ink-black/10">
                  <Mail className="w-4 h-4 text-vintage-red shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-ink-black block">Official Email:</span>
                    <a href={`mailto:${SITE_CONFIG.contact.email}`} className="font-mono text-ink-charcoal hover:underline block">
                      {SITE_CONFIG.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 pt-2 border-t border-ink-black/10">
                  <Clock className="w-4 h-4 text-vintage-red shrink-0 mt-0.5" />
                  <div>
                    <span className="font-bold text-ink-black block">Operational Protocol:</span>
                    <p className="text-ink-muted text-[11px] leading-relaxed">
                      {SITE_CONFIG.contact.workingHours}<br />
                      {SITE_CONFIG.contact.dispatchOfficeHours}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-ink-black/10">
                <a
                  href={SITE_CONFIG.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-green-800 text-paper-white text-xs font-mono uppercase tracking-wider rounded hover:bg-green-900 transition-colors shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Connect on WhatsApp Desk</span>
                </a>
              </div>
            </div>

            {/* Map Canvas Placeholder */}
            <div className="bg-paper-white rounded-lg border border-ink-black/15 p-4 shadow-sm">
              <div className="relative aspect-[16/10] bg-[#EFE9DD] rounded border border-ink-black/10 overflow-hidden flex flex-col items-center justify-center text-center p-4">
                <div className="w-10 h-10 bg-ink-black text-paper-white rounded-full flex items-center justify-center mx-auto shadow-md mb-2">
                  <MapPin className="w-5 h-5 text-vintage-red" />
                </div>
                <h4 className="font-serif font-black text-sm text-ink-black uppercase">
                  OX DISPATCH HEADQUARTERS
                </h4>
                <p className="text-[11px] font-mono text-ink-muted mt-1 max-w-xs">
                  {SITE_CONFIG.contact.addressLine1}, {SITE_CONFIG.contact.addressLine2}
                </p>
              </div>
            </div>

          </div>

        </div>

        {/* FAQs */}
        <div className="bg-paper-white rounded-lg border border-ink-black/15 p-8 sm:p-10 shadow-sm">
          <div className="border-b border-ink-black/10 pb-4 mb-8">
            <span className="vintage-stamp">PASSENGER GUIDANCE</span>
            <h3 className="font-serif font-black text-2xl sm:text-3xl text-ink-black uppercase mt-1">
              FREQUENTLY ASKED QUESTIONS
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border-b border-ink-black/10 pb-6">
                <h4 className="font-serif font-bold text-base text-ink-black flex items-start gap-2">
                  <HelpCircle className="w-4 h-4 text-vintage-red shrink-0 mt-0.5" />
                  <span>{faq.q}</span>
                </h4>
                <p className="mt-2 text-xs sm:text-sm text-ink-muted leading-relaxed pl-6 font-sans">
                  {faq.a}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};