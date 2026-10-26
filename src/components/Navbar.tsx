import React, { useState, useEffect } from 'react';
import { SALON_DATA } from '../data/salonData';
import { Menu, X, Phone, MessageSquare, Scissors } from 'lucide-react';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Services', href: '#services' },
    { label: 'About', href: '#about' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Why Us', href: '#why-us' },
    { label: 'Reviews', href: '#reviews' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#0B0B0B]/95 backdrop-blur-md border-b border-neutral-800/80 shadow-lg shadow-black/40 py-3.5'
          : 'bg-gradient-to-b from-[#0B0B0B]/90 via-[#0B0B0B]/60 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          {/* Brand Wordmark (Strict 3-zone contract) */}
          <a
            href="#"
            className="flex items-center gap-2.5 text-white tracking-wider group whitespace-nowrap shrink-0"
            aria-label="Last Born Barbing Salon Home"
          >
            <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37] group-hover:bg-[#D4AF37] group-hover:text-black transition-colors duration-200">
              <Scissors className="w-5 h-5 transition-transform group-hover:rotate-45" />
            </div>
            <span className="font-display font-bold text-lg sm:text-xl tracking-tight text-neutral-100 group-hover:text-[#D4AF37] transition-colors">
              LAST BORN <span className="text-[#D4AF37] font-sans font-light text-sm tracking-widest uppercase ml-1">Salon</span>
            </span>
          </a>

          {/* Desktop Nav Links (Zone 2) */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-neutral-300">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-[#D4AF37] transition-colors duration-150 py-1 whitespace-nowrap shrink-0 relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#D4AF37] transition-all duration-200 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Desktop Primary Action (Zone 3) */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <a
              href={SALON_DATA.business.phoneTel}
              className="flex items-center gap-2 text-xs font-medium text-neutral-300 hover:text-white px-3 py-2 rounded-lg hover:bg-neutral-800/60 transition-colors whitespace-nowrap shrink-0"
              title="Call Last Born Barbing Salon"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span className="font-mono tabular-nums">{SALON_DATA.business.phone}</span>
            </a>
            <a
              href={SALON_DATA.business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 text-xs font-semibold tracking-wide text-black bg-[#D4AF37] hover:bg-[#F3C64F] rounded-lg transition-all duration-200 shadow-sm hover:shadow-[#D4AF37]/20 hover:shadow-md whitespace-nowrap shrink-0 flex items-center gap-2"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Book on WhatsApp
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex md:hidden items-center gap-2">
            <a
              href={SALON_DATA.business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1.5 text-xs font-semibold text-black bg-[#D4AF37] rounded-md flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              Book
            </a>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-neutral-300 hover:text-white hover:bg-neutral-800 rounded-lg transition-colors"
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0F0F0F] border-b border-neutral-800 px-4 pt-3 pb-6 space-y-4 animate-in slide-in-from-top-2 duration-200 shadow-2xl">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 text-neutral-200 hover:text-[#D4AF37] hover:bg-neutral-800/50 rounded-lg text-base font-medium transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="pt-3 border-t border-neutral-800 flex flex-col gap-2.5">
            <a
              href={SALON_DATA.business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-[#D4AF37] text-black font-semibold text-sm rounded-lg hover:bg-[#F3C64F] transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              Book on WhatsApp
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-neutral-800 text-neutral-200 font-medium text-sm rounded-lg hover:bg-neutral-700 transition-colors border border-neutral-700"
            >
              Custom Appointment Form
            </button>
            <a
              href={SALON_DATA.business.phoneTel}
              className="flex items-center justify-center gap-2 py-2 text-sm text-neutral-300 hover:text-[#D4AF37] font-mono tabular-nums"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              Call {SALON_DATA.business.phone}
            </a>
          </div>
        </div>
      )}
    </header>
  );
};
