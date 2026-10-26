import React from 'react';
import { SALON_DATA } from '../data/salonData';
import { MessageSquare, Phone, Star, MapPin, Clock, ShieldCheck } from 'lucide-react';

interface HeroProps {
  onOpenBooking: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenBooking }) => {
  return (
    <section className="relative min-h-[92vh] sm:min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-[#0B0B0B]">
      {/* Background Cinematic Image with Luxury Dark Gradient Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={SALON_DATA.images.hero}
          alt="Professional barber precision styling hair at Last Born Barbing Salon"
          className="w-full h-full object-cover object-center scale-105 transform motion-safe:animate-pulse-subtle filter brightness-75 contrast-110"
          referrerPolicy="no-referrer"
        />
        {/* Multilayered cinematic dark scrim for guaranteed WCAG AA legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0B0B] via-[#0B0B0B]/80 to-black/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-[#0B0B0B]/40 to-[#0B0B0B]/90" />
        {/* Subtle warm gold atmospheric glow */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[32rem] h-[32rem] bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Google Rating Trust Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-neutral-900/80 border border-[#D4AF37]/30 text-xs font-medium text-neutral-200 backdrop-blur-md mb-6 shadow-lg shadow-black/40">
          <div className="flex items-center text-[#D4AF37]">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
            ))}
          </div>
          <span className="font-semibold text-white">5.0 ★ Rated on Google</span>
          <span className="text-neutral-500">·</span>
          <span className="text-neutral-400">Ijebu-Jesa</span>
        </div>

        {/* Hero Headline (Responsive clamp, balanced text) */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-display font-bold text-white tracking-tight leading-[1.1] mb-6 max-w-4xl [text-wrap:balance]">
          Fresh Cuts. Sharp Lines.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4AF37] via-[#F3C64F] to-[#E7C967]">
            Zero Stress.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl md:text-2xl text-neutral-300 font-normal max-w-2xl mb-10 leading-relaxed [text-wrap:balance]">
          {SALON_DATA.business.subheadline}
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto mb-12">
          <a
            href={SALON_DATA.business.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-gradient-to-r from-[#D4AF37] to-[#E7C967] hover:from-[#F3C64F] hover:to-[#D4AF37] text-black font-semibold text-base rounded-xl transition-all duration-200 shadow-lg shadow-[#D4AF37]/20 hover:shadow-xl hover:scale-[1.02] flex items-center justify-center gap-2.5 group"
          >
            <MessageSquare className="w-5 h-5 transition-transform group-hover:scale-110" />
            Book on WhatsApp
          </a>

          <a
            href={SALON_DATA.business.phoneTel}
            className="w-full sm:w-auto min-h-[48px] px-7 py-3.5 bg-neutral-900/90 hover:bg-neutral-800 text-white font-medium text-base rounded-xl border border-neutral-700/80 hover:border-[#D4AF37]/50 transition-all duration-200 flex items-center justify-center gap-2.5 backdrop-blur-sm"
          >
            <Phone className="w-5 h-5 text-[#D4AF37]" />
            Call Now: <span className="font-mono tabular-nums">{SALON_DATA.business.phone}</span>
          </a>
        </div>

        {/* Quiet Trust Bar (Zero-pill metadata with typographic separators) */}
        <div className="w-full max-w-3xl pt-8 border-t border-neutral-800/80 grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs sm:text-sm text-neutral-400">
          <div className="flex items-center justify-center gap-2">
            <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Aribisala Complex, Ijebu-Jesa</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Open Daily · Closes 10:00 PM</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#D4AF37] shrink-0" />
            <span>Sterilized Tools Every Cut</span>
          </div>
        </div>
      </div>
    </section>
  );
};
