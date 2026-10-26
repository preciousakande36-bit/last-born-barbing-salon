import React from 'react';
import { SALON_DATA } from '../data/salonData';
import { Scissors, Phone, MapPin, Clock, Instagram, Facebook } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#080808] border-t border-neutral-900 text-neutral-400 text-xs sm:text-sm py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Col */}
          <div className="space-y-4">
            <div className="flex items-center gap-2.5 text-white">
              <div className="w-8 h-8 rounded-lg bg-[#D4AF37]/15 border border-[#D4AF37]/30 flex items-center justify-center text-[#D4AF37]">
                <Scissors className="w-4 h-4" />
              </div>
              <span className="font-display font-bold text-lg text-white">
                LAST BORN <span className="text-[#D4AF37] font-sans font-normal text-xs tracking-widest uppercase">Salon</span>
              </span>
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Ijebu-Jesa’s premier gentleman’s salon. Clean, safe, professional haircuts and grooming right at the Ijebu-Jesa Roundabout.
            </p>
            <div className="flex items-center gap-3 pt-2">
              <a
                href={SALON_DATA.business.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={SALON_DATA.business.facebookUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-neutral-900 border border-neutral-800 flex items-center justify-center text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs">
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Services & Pricing
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-[#D4AF37] transition-colors">
                  About the Salon
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">
                  Haircut Lookbook
                </a>
              </li>
              <li>
                <a href="#why-us" className="hover:text-[#D4AF37] transition-colors">
                  Why Choose Us
                </a>
              </li>
              <li>
                <a href="#reviews" className="hover:text-[#D4AF37] transition-colors">
                  Customer Reviews
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors">
                  Location & Map
                </a>
              </li>
            </ul>
          </div>

          {/* Services Quick List */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Popular Cuts
            </h4>
            <ul className="space-y-2 text-xs">
              <li>Classic Scissor & Clipper Cut</li>
              <li>Low & Mid Skin Fade</li>
              <li>Beard Sculpting & Hot Towel</li>
              <li>Razor Shape-up & Line-up</li>
              <li>Dreadlocks & Twist Styling</li>
              <li>Jet Black Hair Coloring</li>
            </ul>
          </div>

          {/* Location & Contact Col */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold text-white uppercase tracking-wider">
              Visit Us
            </h4>
            <div className="space-y-2 text-xs text-neutral-400">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                <span>Shop 16, Aribisala Complex, Ijebu-Jesa Roundabout, Osun State</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <span>Open Daily: 8:00 AM – 10:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
                <a href={SALON_DATA.business.phoneTel} className="hover:text-white font-mono tabular-nums">
                  {SALON_DATA.business.phone}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <p>© 2026 Last Born Barbing Salon. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a
              href={SALON_DATA.business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] hover:underline"
            >
              WhatsApp Support
            </a>
            <span>·</span>
            <a href="#contact" className="hover:text-neutral-300">
              Ijebu-Jesa, Osun State
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
