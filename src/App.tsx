import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Masthead } from './components/layout/Masthead';
import { Navigation } from './components/layout/Navigation';
import { Footer } from './components/layout/Footer';
import { ScrollToTop } from './components/layout/ScrollToTop';
import { WhatsAppButton } from './components/ui/WhatsAppButton';
import { HomePage } from './pages/HomePage';
import { FleetPage } from './pages/FleetPage';
import { VehicleDetailPage } from './pages/VehicleDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { DestinationsPage } from './pages/DestinationsPage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';
import { BookPage } from './pages/BookPage';
import { Button } from './components/ui/Button';

// Editorial 404 Page
const NotFoundPage: React.FC = () => (
  <div className="py-24 text-center bg-paper-warm min-h-[60vh] flex flex-col items-center justify-center px-4">
    <span className="vintage-stamp mb-3">ERROR 404 • DETOUR REQUIRED</span>
    <h1 className="text-4xl sm:text-6xl font-serif font-black text-ink-black uppercase tracking-tight">
      ROAD TERMINUS REACHED
    </h1>
    <p className="mt-3 text-sm sm:text-base font-serif italic text-ink-muted max-w-md">
      The archival page or roadway you seek does not exist on this route. Please return to the main publication.
    </p>
    <div className="mt-8 flex gap-3">
      <Button to="/" variant="primary" size="md">
        <span>RETURN TO FRONT PAGE</span>
      </Button>
      <Button to="/fleet" variant="outline" size="md">
        <span>INSPECT FLEET</span>
      </Button>
    </div>
  </div>
);

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-paper-warm font-sans text-ink-black selection:bg-vintage-red selection:text-paper-white relative">
        
        {/* Scroll restoration helper */}
        <ScrollToTop />

        {/* Global Newspaper Masthead */}
        <Masthead />

        {/* Global Sticky Editorial Navbar */}
        <Navigation />

        {/* Main Routed Page Content */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/fleet" element={<FleetPage />} />
            <Route path="/fleet/:id" element={<VehicleDetailPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/destinations" element={<DestinationsPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/book" element={<BookPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        {/* Floating WhatsApp Quick Action */}
        <WhatsAppButton />

        {/* Global Newspaper Footer */}
        <Footer />

      </div>
    </BrowserRouter>
  );
};

export default App;