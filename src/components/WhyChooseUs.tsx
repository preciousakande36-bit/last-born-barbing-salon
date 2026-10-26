import React from 'react';
import { SALON_DATA } from '../data/salonData';
import { ShieldCheck, Scissors, BadgePercent, MapPin, CheckCircle } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const getIcon = (name: string) => {
    switch (name) {
      case 'ShieldCheck':
        return <ShieldCheck className="w-6 h-6 text-[#D4AF37]" />;
      case 'Scissors':
        return <Scissors className="w-6 h-6 text-[#D4AF37]" />;
      case 'BadgePercent':
        return <BadgePercent className="w-6 h-6 text-[#D4AF37]" />;
      case 'MapPin':
        return <MapPin className="w-6 h-6 text-[#D4AF37]" />;
      default:
        return <CheckCircle className="w-6 h-6 text-[#D4AF37]" />;
    }
  };

  return (
    <section id="why-us" className="py-20 sm:py-28 bg-[#0B0B0B] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
            <ShieldCheck className="w-3.5 h-3.5" />
            <span>The Last Born Difference</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight [text-wrap:balance]">
            Why Gentlemen Choose Us
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 mt-4 leading-relaxed [text-wrap:balance]">
            We set a higher standard for men's grooming in Ijebu-Jesa. From the moment you sit in the chair until you look in the mirror, your comfort and confidence come first.
          </p>
        </div>

        {/* 4 Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SALON_DATA.features.map((feature, idx) => (
            <div
              key={idx}
              className="bg-[#121212] hover:bg-[#181818] border border-neutral-800 hover:border-[#D4AF37]/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/40 hover:-translate-y-1"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#D4AF37]/20 transition-all">
                  {getIcon(feature.icon)}
                </div>
                <h3 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-[#D4AF37] transition-colors">
                  {feature.title}
                </h3>
                <p className="text-sm text-neutral-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-800/80 flex items-center text-xs font-medium text-[#D4AF37]">
                <span>Guaranteed quality</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
