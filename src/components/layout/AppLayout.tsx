import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import { WhatsAppButton } from '../ui/WhatsAppButton';
import { BackToTopButton } from './BackToTopButton';
import { ErrorBoundary } from './ErrorBoundary';
import { Footer } from './Footer';
import { Masthead } from './Masthead';
import { Navigation } from './Navigation';
import { PaperEffects } from './PaperEffects';
import { ScrollRestoration } from './ScrollRestoration';

/** The frame shared by every page: masthead, section bar, page content, footer and floating buttons. */
export const AppLayout: React.FC = () => {
  const { pathname } = useLocation();

  return (
    <div className="flex min-h-screen flex-col">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[70] focus:bg-ink-black focus:px-4 focus:py-2 focus:font-sans focus:text-sm focus:text-paper-white"
      >
        Skip to content
      </a>

      <PaperEffects />
      <ScrollRestoration />
      <Masthead />
      <Navigation />

      {/* Keyed by path so each page fades in and starts with fresh state. */}
      <main id="main" key={pathname} className="page-enter flex-grow">
        <ErrorBoundary>
          <Outlet />
        </ErrorBoundary>
      </main>

      <Footer />
      <BackToTopButton />
      <WhatsAppButton />
    </div>
  );
};
