import React, { useState } from 'react';
import { SALON_DATA } from '../data/salonData';
import { MapPin, Phone, Clock, MessageSquare, Navigation, Copy, Check, ExternalLink } from 'lucide-react';

export const Contact: React.FC = () => {
  const [copiedAddress, setCopiedAddress] = useState(false);

  const handleCopyAddress = () => {
    navigator.clipboard.writeText(SALON_DATA.business.address);
    setCopiedAddress(true);
    setTimeout(() => setCopiedAddress(false), 2000);
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0E0E0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
            <MapPin className="w-3.5 h-3.5" />
            <span>Visit Us in Ijebu-Jesa</span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight [text-wrap:balance]">
            Location & Contact
          </h2>
          <p className="text-base sm:text-lg text-neutral-400 mt-3 leading-relaxed [text-wrap:balance]">
            Located at Shop 16, Aribisala Shopping Complex, right beside the prominent Ijebu-Jesa Roundabout. Ample parking available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          {/* Left Details Card */}
          <div className="lg:col-span-5 bg-[#141414] border border-neutral-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl">
            <div className="space-y-6">
              {/* Address Block */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    Salon Address
                  </h3>
                </div>
                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed pl-12">
                  {SALON_DATA.business.address}
                </p>
                <div className="pl-12 mt-2 flex items-center gap-2">
                  <span className="text-xs text-neutral-500 font-mono">
                    Plus Code: {SALON_DATA.business.googlePlusCode}
                  </span>
                  <button
                    onClick={handleCopyAddress}
                    className="inline-flex items-center gap-1 text-[11px] text-[#D4AF37] hover:text-[#F3C64F] transition-colors"
                    title="Copy full address"
                  >
                    {copiedAddress ? (
                      <>
                        <Check className="w-3 h-3 text-emerald-400" />
                        <span className="text-emerald-400">Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3 h-3" />
                        <span>Copy</span>
                      </>
                    )}
                  </button>
                </div>
              </div>

              {/* Opening Hours Block */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    Opening Hours
                  </h3>
                </div>
                <div className="pl-12 text-sm text-neutral-300 space-y-1">
                  <p className="font-medium text-white">{SALON_DATA.business.hours}</p>
                  <p className="text-xs text-neutral-400">Open 7 days a week, including public holidays and Sundays.</p>
                </div>
              </div>

              {/* Phone Block */}
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-9 h-9 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20 flex items-center justify-center text-[#D4AF37] shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                    Direct Phone Line
                  </h3>
                </div>
                <p className="pl-12 text-sm text-neutral-300">
                  <a
                    href={SALON_DATA.business.phoneTel}
                    className="text-lg font-bold text-white hover:text-[#D4AF37] font-mono tabular-nums transition-colors"
                  >
                    {SALON_DATA.business.phone}
                  </a>
                </p>
              </div>
            </div>

            {/* Quick Action Buttons */}
            <div className="pt-8 mt-8 border-t border-neutral-800 space-y-3">
              <a
                href={SALON_DATA.business.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full min-h-[46px] px-4 py-3 bg-[#D4AF37] hover:bg-[#F3C64F] text-black font-semibold text-sm rounded-xl transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Navigation className="w-4 h-4" />
                <span>Get Directions on Google Maps</span>
              </a>

              <div className="grid grid-cols-2 gap-3">
                <a
                  href={SALON_DATA.business.phoneTel}
                  className="min-h-[44px] px-3 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium rounded-xl border border-neutral-700 transition-colors flex items-center justify-center gap-2"
                >
                  <Phone className="w-4 h-4 text-[#D4AF37]" />
                  <span>Call Now</span>
                </a>

                <a
                  href={SALON_DATA.business.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="min-h-[44px] px-3 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs sm:text-sm font-medium rounded-xl border border-neutral-700 transition-colors flex items-center justify-center gap-2"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-400" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Map Embed & Visual Card */}
          <div className="lg:col-span-7 rounded-2xl overflow-hidden border border-neutral-800 bg-[#141414] shadow-xl relative min-h-[380px] sm:min-h-[440px] flex flex-col">
            {/* Embedded Responsive Google Map */}
            <div className="w-full flex-1 relative min-h-[300px]">
              <iframe
                title="Last Born Barbing Salon Ijebu-Jesa Map"
                src="https://maps.google.com/maps?q=Ijebu-Jesa+Osun+State+Nigeria&t=&z=14&ie=UTF8&iwloc=&output=embed"
                className="absolute inset-0 w-full h-full border-0 filter grayscale-[40%] contrast-125"
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>

            {/* Map Info Banner */}
            <div className="p-4 bg-[#0B0B0B] border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
              <div className="flex items-center gap-2 text-neutral-300">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="font-medium text-white">Last Born Barbing Salon</span>
                <span className="text-neutral-500">·</span>
                <span className="text-neutral-400">Ijebu Ijesa Roundabout</span>
              </div>
              <a
                href={SALON_DATA.business.googleMapsDirectionsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#D4AF37] hover:text-[#F3C64F] font-semibold flex items-center gap-1"
              >
                <span>Open in Google Maps App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
