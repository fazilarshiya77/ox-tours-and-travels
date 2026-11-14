import React from 'react';
import { Link } from 'react-router-dom';
import { SITE_CONFIG } from '../../data/siteConfig';
import { SERVICES_DATA } from '../../data/servicesData';
import { 
  ArrowUpRight, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare,
  ShieldCheck,
  Compass
} from 'lucide-react';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-ink-black text-white border-t border-white/15 pt-16 pb-12 font-sans relative shadow-glossy-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-white/10">
          
          {/* Brand Colophon */}
          <div className="lg:col-span-5 space-y-4">
            <h2 className="text-3xl font-serif font-black uppercase tracking-tight text-white">
              {SITE_CONFIG.brandName}
            </h2>
            <p className="font-serif italic text-paper-aged text-base">
              &ldquo;{SITE_CONFIG.corePhilosophy}&rdquo;
            </p>
            <p className="text-xs sm:text-sm text-ink-light leading-relaxed font-normal max-w-md">
              A premier editorial travel house dedicated to comfortable, reliable, and chauffeured road transportation. Offering Toyota Innova Crysta, Force Urbania luxury vans, 9/12/17-seater Tempo Travellers, and 21-seater luxury coaches across national highways and scenic terrains.
            </p>

            <div className="pt-2 flex flex-wrap gap-3 text-xs font-mono">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-sm border border-white/15 text-white">
                <ShieldCheck className="w-3.5 h-3.5 text-white" />
                <span>Licensed Fleet</span>
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-white/10 rounded-sm border border-white/15 text-white">
                <Compass className="w-3.5 h-3.5 text-white" />
                <span>24/7 Route Monitoring</span>
              </span>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-white border-b border-white/15 pb-2">
              NAVIGATION
            </h4>
            <ul className="space-y-2 text-xs font-sans uppercase tracking-wider text-ink-light">
              <li>
                <Link to="/" className="hover:text-white transition-colors inline-block py-0.5">
                  Home (Front Page)
                </Link>
              </li>
              <li>
                <Link to="/fleet" className="hover:text-white transition-colors inline-block py-0.5">
                  Our Fleet Catalogue
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors inline-block py-0.5">
                  Travel Services
                </Link>
              </li>
              <li>
                <Link to="/destinations" className="hover:text-white transition-colors inline-block py-0.5">
                  Destinations
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors inline-block py-0.5">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors inline-block py-0.5">
                  Contact Dispatch
                </Link>
              </li>
              <li>
                <Link to="/book" className="text-white font-bold hover:underline inline-flex items-center gap-1 py-0.5">
                  <span>Book Your Journey</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Column */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-white border-b border-white/15 pb-2">
              SERVICES
            </h4>
            <ul className="space-y-2 text-xs text-ink-light">
              {SERVICES_DATA.slice(0, 6).map((service) => (
                <li key={service.id}>
                  <Link to="/services" className="hover:text-white transition-colors block py-0.5 truncate">
                    {service.title.split('&')[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Dispatch Info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-[0.2em] uppercase text-white border-b border-white/15 pb-2">
              DISPATCH DESK
            </h4>
            <div className="space-y-2.5 text-xs text-ink-light">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-white shrink-0 mt-0.5" />
                <span className="leading-snug">
                  {SITE_CONFIG.contact.addressLine1}, {SITE_CONFIG.contact.addressLine2}
                </span>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-white shrink-0" />
                <a href={`tel:${SITE_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`} className="font-mono hover:text-white text-white font-semibold">
                  {SITE_CONFIG.contact.primaryPhone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-white shrink-0" />
                <a href={`mailto:${SITE_CONFIG.contact.email}`} className="font-mono hover:text-white">
                  {SITE_CONFIG.contact.email}
                </a>
              </div>

              <div className="flex items-start gap-2.5 text-[11px] text-ink-muted pt-1">
                <Clock className="w-3.5 h-3.5 text-ink-muted shrink-0 mt-0.5" />
                <span>{SITE_CONFIG.contact.workingHours}</span>
              </div>

              <div className="pt-2">
                <a
                  href={SITE_CONFIG.socialLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glossy-btn-white inline-flex items-center gap-2 px-3.5 py-2 text-xs font-mono uppercase tracking-wider rounded-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-800" />
                  <span>Direct WhatsApp Desk</span>
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs font-mono text-ink-muted gap-4">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2">
            <span>© {currentYear} {SITE_CONFIG.brandName}.</span>
            <span>•</span>
            <span>All Rights Reserved.</span>
            <span>•</span>
            <span className="text-ink-light italic">Black & White Glossy Editorial Design</span>
          </div>

          <div className="flex items-center gap-4 text-[11px] uppercase tracking-wider text-ink-light">
            <span>Privacy Policy</span>
            <span>•</span>
            <span>Terms of Carriage</span>
            <span>•</span>
            <span>Fleet Tariff Notice</span>
          </div>
        </div>

      </div>
    </footer>
  );
};