import React from 'react';
import { SALON_DATA } from '../data/salonData';
import { MessageSquare, Calendar, Phone, Sparkles } from 'lucide-react';

interface BookingBannerProps {
  onOpenBooking: () => void;
}

export const BookingBanner: React.FC<BookingBannerProps> = ({ onOpenBooking }) => {
  return (
    <section className="py-16 sm:py-20 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-neutral-900 via-black to-neutral-900 border-2 border-[#D4AF37]/40 p-8 sm:p-12 lg:p-16 shadow-2xl shadow-[#D4AF37]/5">
          {/* Subtle gold decorative pattern */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-[#D4AF37]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#D4AF37]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mx-auto text-center flex flex-col items-center">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs font-semibold text-[#D4AF37] uppercase tracking-wider mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Step Up Your Game</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white tracking-tight leading-tight mb-4 [text-wrap:balance]">
              Ready for a fresh look?{' '}
              <span className="text-[#D4AF37]">Book your slot today.</span>
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 max-w-xl mb-10 leading-relaxed [text-wrap:balance]">
              Walk-ins are welcome, but booking in advance ensures your chair is ready with zero wait time. Message us now or fill out your quick details.
            </p>

            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
              <a
                href={SALON_DATA.business.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto min-h-[50px] px-8 py-3.5 bg-[#D4AF37] hover:bg-[#F3C64F] text-black font-semibold text-base rounded-xl transition-all duration-200 shadow-xl shadow-[#D4AF37]/20 hover:scale-105 flex items-center justify-center gap-2.5"
              >
                <MessageSquare className="w-5 h-5" />
                <span>Book on WhatsApp</span>
              </a>

              <button
                type="button"
                onClick={onOpenBooking}
                className="w-full sm:w-auto min-h-[50px] px-7 py-3.5 bg-neutral-900/90 hover:bg-neutral-800 text-white font-medium text-base rounded-xl border border-neutral-700 hover:border-[#D4AF37]/50 transition-all duration-200 flex items-center justify-center gap-2.5"
              >
                <Calendar className="w-5 h-5 text-[#D4AF37]" />
                <span>Fill Appointment Form</span>
              </button>
            </div>

            {/* Quick Phone Call Fallback */}
            <p className="mt-8 text-xs sm:text-sm text-neutral-400">
              Prefer calling? Dial directly:{' '}
              <a
                href={SALON_DATA.business.phoneTel}
                className="text-white hover:text-[#D4AF37] font-semibold underline underline-offset-4 font-mono tabular-nums"
              >
                {SALON_DATA.business.phone}
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
