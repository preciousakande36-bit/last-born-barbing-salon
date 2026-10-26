import React from 'react';
import { SALON_DATA } from '../data/salonData';
import { ShieldCheck, Heart, Award, CheckCircle2 } from 'lucide-react';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 bg-[#0B0B0B] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Visual Story / Interior Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl shadow-black/60 group">
              <img
                src={SALON_DATA.images.interior}
                alt="Inside Last Born Barbing Salon Ijebu-Jesa - clean, modern and welcoming"
                className="w-full h-[420px] sm:h-[480px] object-cover object-center group-hover:scale-105 transition-transform duration-700"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Inset Badge */}
              <div className="absolute bottom-6 left-6 right-6 p-4 rounded-xl bg-[#0B0B0B]/90 border border-neutral-700/80 backdrop-blur-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-[#D4AF37]/20 border border-[#D4AF37]/40 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Heart className="w-5 h-5 fill-[#D4AF37]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">Treated Like Family</h4>
                    <p className="text-xs text-neutral-400">Warm hospitality & attentive grooming for every client.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Subtle decorative gold frame accent */}
            <div className="absolute -bottom-4 -right-4 w-48 h-48 border border-[#D4AF37]/20 rounded-2xl -z-10 pointer-events-none hidden sm:block" />
          </div>

          {/* Right Column: Story & 3 Key Stats */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37]">
              <Award className="w-3.5 h-3.5" />
              <span>About Last Born Barbing Salon</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight leading-[1.15] [text-wrap:balance]">
              Where True Craft Meets Clinical Cleanliness
            </h2>

            <p className="text-base sm:text-lg text-neutral-300 leading-relaxed">
              At <strong className="text-white font-semibold">Last Born Barbing Salon</strong>, we believe getting a haircut should never be rushed or stressful. Located right at the Ijebu-Jesa Roundabout in Aribisala Shopping Complex, we have created a sanctuary where gentlemanly grooming and genuine Nigerian warmth meet.
            </p>

            <p className="text-sm sm:text-base text-neutral-400 leading-relaxed">
              Whether you are preparing for a Sunday church service, a big Owambe party, an executive business meeting, or just your routine weekly upkeep, we take our time to study your facial structure, protect your skin, and ensure you step out looking confident and sharp.
            </p>

            {/* Guarantees List */}
            <div className="space-y-3 pt-2">
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Sterilized clippers with antiseptic sprays and UV light before every single cut.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Zero bump razor techniques and skin-conditioning soothing aftershave.</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-neutral-300">
                <CheckCircle2 className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Clean, air-conditioned seating and respectful, welcoming atmosphere.</span>
              </div>
            </div>

            {/* 3 Highlight Stats (Clean unboxed grid with tabular figures) */}
            <div className="pt-6 border-t border-neutral-800 grid grid-cols-1 sm:grid-cols-3 gap-4">
              {SALON_DATA.stats.map((stat, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-neutral-900/60 border border-neutral-800">
                  <div className="text-xl sm:text-2xl font-bold font-sans tabular-nums text-[#D4AF37] mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs font-semibold text-white uppercase tracking-wider mb-1">
                    {stat.label}
                  </div>
                  <div className="text-[11px] text-neutral-400 leading-snug">
                    {stat.detail}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
