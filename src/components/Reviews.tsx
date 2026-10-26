import React, { useState } from 'react';
import { SALON_DATA } from '../data/salonData';
import { Star, MessageSquareQuote, ChevronLeft, ChevronRight, CheckCircle2, ExternalLink } from 'lucide-react';

export const Reviews: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextReview = () => {
    setActiveIndex((prev) => (prev + 1) % SALON_DATA.reviews.length);
  };

  const prevReview = () => {
    setActiveIndex((prev) => (prev - 1 + SALON_DATA.reviews.length) % SALON_DATA.reviews.length);
  };

  return (
    <section id="reviews" className="py-20 sm:py-28 bg-[#0E0E0E] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
              <Star className="w-3.5 h-3.5 fill-[#D4AF37]" />
              <span>Verified Client Feedback</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight [text-wrap:balance]">
              What Our Customers Say
            </h2>
            <div className="flex items-center gap-3 mt-3">
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                ))}
              </div>
              <span className="text-sm font-semibold text-white font-mono tabular-nums">5.0 / 5.0</span>
              <span className="text-xs text-neutral-400">on Google Maps</span>
            </div>
          </div>

          {/* Action to leave a review */}
          <div>
            <a
              href="https://search.google.com/local/writereview?placeid=MRJ8+WC+Iwoye"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700 text-xs sm:text-sm font-medium transition-all group"
            >
              <span>Leave us a Google Review</span>
              <ExternalLink className="w-4 h-4 text-[#D4AF37] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </div>

        {/* Reviews Grid (Desktop) & Carousel controls */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {SALON_DATA.reviews.map((rev, index) => (
            <div
              key={rev.id}
              className={`bg-[#141414] border rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 shadow-xl shadow-black/40 ${
                index < 2
                  ? 'border-[#D4AF37]/30 bg-gradient-to-b from-[#181818] to-[#121212]'
                  : 'border-neutral-800'
              }`}
            >
              <div>
                {/* Top row: stars + quote mark */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex text-[#D4AF37]">
                    {[...Array(rev.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#D4AF37]" />
                    ))}
                  </div>
                  <MessageSquareQuote className="w-7 h-7 text-[#D4AF37]/30" />
                </div>

                {/* Review Text */}
                <p className="text-base sm:text-lg text-neutral-200 italic leading-relaxed mb-6 font-serif">
                  "{rev.comment}"
                </p>
              </div>

              {/* Author & Verification */}
              <div className="pt-4 border-t border-neutral-800 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-white">
                    {rev.name}
                  </h4>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-400 mt-0.5">
                    <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                    <span>Verified Customer</span>
                    <span>·</span>
                    <span>{rev.date}</span>
                  </div>
                </div>

                <div className="px-2.5 py-1 rounded bg-neutral-900 border border-neutral-800 text-[11px] font-medium text-neutral-300">
                  Google
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
