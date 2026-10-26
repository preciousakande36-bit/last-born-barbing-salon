import React, { useState } from 'react';
import { SALON_DATA, ServiceItem, buildWhatsAppLink } from '../data/salonData';
import { Scissors, Sparkles, MessageSquare, Clock, ArrowRight, Check } from 'lucide-react';

interface ServicesProps {
  onSelectServiceForBooking: (service: ServiceItem) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectServiceForBooking }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services' },
    { id: 'haircut', label: 'Haircuts & Fades' },
    { id: 'beard', label: 'Beard Grooming' },
    { id: 'styling', label: 'Color & Dreadlocks' },
    { id: 'treatment', label: 'Washes & Scalp' },
  ];

  const filteredServices = activeCategory === 'all'
    ? SALON_DATA.services
    : SALON_DATA.services.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 sm:py-28 bg-[#0E0E0E] relative">
      {/* Decorative subtle ambient light */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
            <Scissors className="w-3.5 h-3.5" />
            <span>Master Barbering Services</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight mb-4 [text-wrap:balance]">
            Premium Cuts & Grooming Menu
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 leading-relaxed [text-wrap:balance]">
            Every cut is executed with precision, medical-grade hygiene, and sharp lines tailored to your face shape. Transparent prices with zero surprises.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-1.5 p-1.5 mt-8 bg-neutral-900/90 border border-neutral-800 rounded-xl max-w-xl mx-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-3.5 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all duration-200 whitespace-nowrap shrink-0 ${
                  activeCategory === cat.id
                    ? 'bg-[#D4AF37] text-black font-semibold shadow-md'
                    : 'text-neutral-400 hover:text-white hover:bg-neutral-800'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const directWhatsAppUrl = buildWhatsAppLink(service.name);

            return (
              <div
                key={service.id}
                className="group relative bg-[#141414] hover:bg-[#1A1A1A] border border-neutral-800 hover:border-[#D4AF37]/50 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between shadow-lg shadow-black/30 hover:-translate-y-1"
              >
                {/* Popular Highlight Badge */}
                {service.popular && (
                  <div className="absolute -top-3 right-6 bg-gradient-to-r from-[#D4AF37] to-[#F3C64F] text-black text-[11px] font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3" />
                    Popular
                  </div>
                )}

                <div>
                  {/* Header: Service Name & Duration */}
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl font-display font-semibold text-white group-hover:text-[#D4AF37] transition-colors">
                      {service.name}
                    </h3>
                  </div>

                  {/* Duration unboxed metadata */}
                  <div className="flex items-center gap-2 text-xs text-neutral-400 mb-3">
                    <Clock className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span>Est. {service.duration}</span>
                    <span>·</span>
                    <span className="capitalize">{service.category}</span>
                  </div>

                  {/* Description */}
                  <p className="text-sm text-neutral-400 leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-neutral-800/80">
                  {/* Price Row */}
                  <div className="flex items-baseline justify-between mb-4">
                    <span className="text-xs uppercase tracking-wider text-neutral-500 font-medium">Price</span>
                    <span className="text-2xl font-bold font-sans tabular-nums text-white group-hover:text-[#D4AF37] transition-colors">
                      {service.price}
                    </span>
                  </div>

                  {/* Action Buttons */}
                  <div className="grid grid-cols-2 gap-2">
                    <a
                      href={directWhatsAppUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="min-h-[42px] px-3 py-2 bg-[#D4AF37] hover:bg-[#F3C64F] text-black text-xs font-semibold rounded-lg transition-colors flex items-center justify-center gap-1.5 shadow-sm"
                    >
                      <MessageSquare className="w-3.5 h-3.5 shrink-0" />
                      <span>Book this</span>
                    </a>

                    <button
                      type="button"
                      onClick={() => onSelectServiceForBooking(service)}
                      className="min-h-[42px] px-3 py-2 bg-neutral-900 hover:bg-neutral-800 text-neutral-300 hover:text-white text-xs font-medium rounded-lg border border-neutral-700/80 transition-colors flex items-center justify-center gap-1"
                    >
                      <span>Pick Date</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Pricing Guarantee Note */}
        <div className="mt-12 p-4 rounded-xl bg-neutral-900/50 border border-neutral-800 text-center max-w-2xl mx-auto text-xs text-neutral-400 flex items-center justify-center gap-2">
          <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
          <span>All cuts include clipper sterilization, razor detailing, and soothing aftershave care.</span>
        </div>
      </div>
    </section>
  );
};
