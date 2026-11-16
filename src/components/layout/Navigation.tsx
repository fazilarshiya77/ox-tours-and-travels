import React, { useCallback, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { ArrowUpRight, Menu } from 'lucide-react';
import { NAV_LINKS } from '../../data/navigation';
import { SITE_CONFIG } from '../../data/siteConfig';
import { useScrolled } from '../../hooks/useScrolled';
import { cn } from '../../lib/cn';
import { Button } from '../ui/Button';
import { MobileDrawer } from './MobileDrawer';

/** Sticky section bar: page links, the Book button and the mobile menu trigger. */
export const Navigation: React.FC = () => {
  // The compact nameplate appears once the full masthead has scrolled out of view.
  const scrolled = useScrolled(140);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <>
      <nav aria-label="Primary" className="paper-surface sticky top-0 z-40 border-y border-ink-black print:hidden">
        <div className="mx-auto flex h-14 max-w-page items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 md:w-28 lg:w-44">
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              className="-ml-2 flex h-11 items-center gap-2 px-2 font-sans text-[15px] font-bold uppercase tracking-[0.12em] md:hidden"
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
              <span>Menu</span>
            </button>

            <Link
              to="/"
              tabIndex={scrolled ? 0 : -1}
              aria-hidden={!scrolled}
              className={cn(
                'nameplate whitespace-nowrap text-[1.9rem] transition-opacity duration-300',
                scrolled ? 'opacity-100' : 'pointer-events-none opacity-0',
              )}
            >
              {SITE_CONFIG.nameplateShort}
            </Link>
          </div>

          <ul className="hidden h-full items-stretch gap-5 whitespace-nowrap md:flex lg:gap-7">
            {NAV_LINKS.map((link) => (
              <li key={link.path} className="flex">
                <NavLink
                  to={link.path}
                  end={link.path === '/'}
                  className={({ isActive }) =>
                    cn(
                      'flex items-center border-b-[3px] pt-[3px] font-sans text-[16px] font-bold uppercase tracking-[0.12em] transition-colors',
                      isActive
                        ? 'border-ink-black text-ink-black'
                        : 'border-transparent text-ink-muted hover:text-ink-black',
                    )
                  }
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div className="flex items-center justify-end md:w-28 lg:w-44">
            <Button to="/book" size="sm">
              <span className="whitespace-nowrap">
                Book<span className="hidden sm:inline md:hidden lg:inline"> Your Ride</span>
              </span>
              <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
            </Button>
          </div>
        </div>
      </nav>

      <MobileDrawer isOpen={menuOpen} onClose={closeMenu} />
    </>
  );
};
