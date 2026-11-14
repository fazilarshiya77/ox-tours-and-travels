import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Menu, X, ArrowUpRight, MessageSquare, Phone } from 'lucide-react';
import { SITE_CONFIG } from '../../data/siteConfig';

export const Navigation: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Our Fleet', path: '/fleet' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <nav 
        className={`sticky top-0 z-40 w-full transition-all duration-300 border-b ${
          isScrolled 
            ? 'bg-paper-warm/95 backdrop-blur-md shadow-sm border-ink-black/15 py-3' 
            : 'bg-paper-warm/90 backdrop-blur-sm border-ink-black/10 py-3'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            
            {/* Scrolled Mini Logo */}
            <Link 
              to="/" 
              className={`flex items-center gap-2.5 transition-opacity duration-200 ${
                isScrolled ? 'opacity-100' : 'opacity-0 md:opacity-100 pointer-events-auto'
              }`}
            >
              <span className="w-7 h-7 bg-ink-black text-white rounded-sm flex items-center justify-center font-serif font-black text-xs shadow-sm">
                OX
              </span>
              <span className="font-serif font-black text-sm tracking-tight text-ink-black uppercase">
                OX TOURS
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-6 lg:gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) =>
                    `text-xs lg:text-[13px] font-sans uppercase font-bold tracking-[0.16em] transition-all py-1 ${
                      isActive 
                        ? 'text-ink-black border-b-2 border-ink-black' 
                        : 'text-ink-muted hover:text-ink-black'
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="hidden sm:flex items-center gap-3">
              <a
                href={SITE_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono uppercase tracking-wider text-ink-charcoal hover:text-ink-black transition-colors border border-ink-black/15 bg-white rounded-sm shadow-sm hover:shadow"
                title="Chat on WhatsApp"
              >
                <MessageSquare className="w-3.5 h-3.5 text-emerald-700" />
                <span className="hidden lg:inline">WhatsApp</span>
              </a>

              <Link
                to="/book"
                className="glossy-btn-black inline-flex items-center gap-1.5 px-4 py-2 text-xs font-sans font-bold uppercase tracking-[0.14em] rounded-sm shadow-sm"
              >
                <span>BOOK YOUR RIDE</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            {/* Mobile Controls */}
            <div className="flex items-center gap-2 md:hidden">
              <Link
                to="/book"
                className="glossy-btn-black px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider rounded-sm"
              >
                BOOK
              </Link>

              <button
                type="button"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-ink-black border border-ink-black/20 rounded-sm focus:outline-none"
                aria-label="Toggle navigation menu"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-ink-black/60 backdrop-blur-sm">
          <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white border-l border-ink-black/20 shadow-2xl p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between border-b border-ink-black/10 pb-4 mb-6">
                <div>
                  <h3 className="font-serif font-black text-xl text-ink-black">OX TOURS</h3>
                  <p className="text-[10px] font-mono text-ink-muted uppercase tracking-widest">Luxury Travel Gazette</p>
                </div>
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(false)}
                  className="p-1.5 border border-ink-black/20 rounded hover:bg-paper-warm"
                >
                  <X className="w-5 h-5 text-ink-black" />
                </button>
              </div>

              <div className="flex flex-col space-y-2">
                {navLinks.map((link) => (
                  <NavLink
                    key={link.path}
                    to={link.path}
                    className={({ isActive }) =>
                      `px-3 py-2.5 text-sm font-sans uppercase font-bold tracking-[0.14em] transition-colors rounded ${
                        isActive 
                          ? 'text-white bg-ink-black' 
                          : 'text-ink-black hover:bg-paper-warm'
                      }`
                    }
                  >
                    {link.name}
                  </NavLink>
                ))}
              </div>
            </div>

            <div className="pt-6 border-t border-ink-black/10 space-y-3">
              <Link
                to="/book"
                className="glossy-btn-black w-full flex items-center justify-center gap-2 py-3 text-xs font-bold uppercase tracking-widest rounded-sm"
              >
                <span>BOOK YOUR RIDE</span>
                <ArrowUpRight className="w-4 h-4" />
              </Link>

              <a
                href={SITE_CONFIG.socialLinks.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-2.5 text-xs font-mono uppercase tracking-wider text-ink-black border border-ink-black/20 bg-paper-warm rounded-sm"
              >
                <MessageSquare className="w-4 h-4 text-emerald-700" />
                <span>WhatsApp Desk</span>
              </a>

              <a
                href={`tel:${SITE_CONFIG.contact.primaryPhone.replace(/\s+/g, '')}`}
                className="w-full flex items-center justify-center gap-2 py-1.5 text-xs font-mono text-ink-muted"
              >
                <Phone className="w-3.5 h-3.5 text-ink-black" />
                <span>{SITE_CONFIG.contact.primaryPhone}</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};