import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './context/ThemeContext';
import ParticleBackground from './components/common/ParticleBackground';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import FloatingWhatsApp from './components/common/FloatingWhatsApp';
import BookingModal from './components/contact/BookingModal';
import ErrorBoundary from './components/common/ErrorBoundary';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import GalleryPage from './pages/GalleryPage';
import ContactPage from './pages/ContactPage';

function AppContent() {
  const [isBookingModalOpen, setIsBookingModalOpen] = useState(false);

  return (
    <div className="relative min-h-screen bg-[#F8F9FC] text-slate-800 font-sans selection:bg-amber-400 selection:text-slate-900">
      
      {/* Background Soft Ambient Particle Canvas */}
      <ParticleBackground />

      {/* Navigation */}
      <Navbar onOpenBookingModal={() => setIsBookingModalOpen(true)} />

      {/* Page Routing */}
      <main className="relative">
        <Routes>
          <Route path="/" element={<HomePage onOpenBookingModal={() => setIsBookingModalOpen(true)} />} />
          <Route path="/about" element={<AboutPage onOpenBookingModal={() => setIsBookingModalOpen(true)} />} />
          <Route path="/services" element={<ServicesPage onOpenBookingModal={() => setIsBookingModalOpen(true)} />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Interactive WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* Global Booking Reservation Modal */}
      <BookingModal
        isOpen={isBookingModalOpen}
        onClose={() => setIsBookingModalOpen(false)}
      />

    </div>
  );
}

export default function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <Router>
          <AppContent />
        </Router>
      </ThemeProvider>
    </ErrorBoundary>
  );
}
