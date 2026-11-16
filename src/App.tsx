import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { AppLayout } from './components/layout/AppLayout';
import { AboutPage } from './pages/AboutPage';
import { BookPage } from './pages/BookPage';
import { ContactPage } from './pages/ContactPage';
import { FleetPage } from './pages/FleetPage';
import { GalleryPage } from './pages/GalleryPage';
import { HomePage } from './pages/HomePage';
import { NotFoundPage } from './pages/NotFoundPage';
import { VehicleDetailPage } from './pages/VehicleDetailPage';

/** Route table. Every page renders inside the shared AppLayout. */
export const App: React.FC = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/fleet" element={<FleetPage />} />
        <Route path="/fleet/:id" element={<VehicleDetailPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/book" element={<BookPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
