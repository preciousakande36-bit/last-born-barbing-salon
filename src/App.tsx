import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { About } from './components/About';
import { Gallery } from './components/Gallery';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Reviews } from './components/Reviews';
import { BookingBanner } from './components/BookingBanner';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { BookingModal } from './components/BookingModal';
import { ServiceItem } from './data/salonData';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);

  const handleOpenBooking = () => {
    setSelectedService(null);
    setIsBookingOpen(true);
  };

  const handleSelectServiceForBooking = (service: ServiceItem) => {
    setSelectedService(service);
    setIsBookingOpen(true);
  };

  const handleCloseBooking = () => {
    setIsBookingOpen(false);
    setSelectedService(null);
  };

  return (
    <div className="min-h-screen bg-[#0B0B0B] text-neutral-200 selection:bg-[#D4AF37]/30 selection:text-white">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Main Content Sections (Strict order requested) */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenBooking={handleOpenBooking} />

        {/* 2. Services Grid */}
        <Services onSelectServiceForBooking={handleSelectServiceForBooking} />

        {/* 3. About Us */}
        <About />

        {/* 4. Haircut Lookbook & Gallery with Lightbox */}
        <Gallery />

        {/* 5. Why Choose Us (4 blocks) */}
        <WhyChooseUs />

        {/* 6. Real Google Reviews */}
        <Reviews />

        {/* 7. Booking CTA Banner */}
        <BookingBanner onOpenBooking={handleOpenBooking} />

        {/* 8. Contact, Location & Google Map */}
        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Sticky WhatsApp Button */}
      <FloatingWhatsApp />

      {/* Interactive Booking Assistant Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
        preselectedService={selectedService}
      />
    </div>
  );
}
