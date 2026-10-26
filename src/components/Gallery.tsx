import React, { useState } from 'react';
import { SALON_DATA, GalleryItem, buildWhatsAppLink } from '../data/salonData';
import { Image as ImageIcon, Instagram, X, ChevronLeft, ChevronRight, MessageSquare, ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('All');

  const filterTabs = ['All', 'Fades', 'Beards', 'Styling', 'Shop'];

  const filteredItems = activeFilter === 'All'
    ? SALON_DATA.gallery
    : SALON_DATA.gallery.filter((item) => item.category === activeFilter);

  const openLightbox = (item: GalleryItem) => {
    setSelectedImage(item);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const navigateLightbox = (direction: 'next' | 'prev') => {
    if (!selectedImage) return;
    const currentIndex = SALON_DATA.gallery.findIndex((i) => i.id === selectedImage.id);
    let nextIndex = direction === 'next' ? currentIndex + 1 : currentIndex - 1;
    if (nextIndex >= SALON_DATA.gallery.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = SALON_DATA.gallery.length - 1;
    setSelectedImage(SALON_DATA.gallery[nextIndex]);
  };

  return (
    <section id="gallery" className="py-20 sm:py-28 bg-[#0E0E0E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#D4AF37] mb-3">
              <ImageIcon className="w-3.5 h-3.5" />
              <span>Haircut Lookbook</span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold text-white tracking-tight [text-wrap:balance]">
              Our Precision Work
            </h2>
            <p className="text-sm sm:text-base text-neutral-400 mt-2 max-w-xl">
              Tap any photo to view in high definition or request that exact style on WhatsApp.
            </p>
          </div>

          {/* Instagram Follow CTA */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={SALON_DATA.business.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-neutral-900 hover:bg-neutral-800 text-neutral-200 hover:text-white border border-neutral-700/80 text-xs sm:text-sm font-medium transition-all shadow-sm group"
            >
              <Instagram className="w-4 h-4 text-[#D4AF37] group-hover:scale-110 transition-transform" />
              <span>Follow us on Instagram</span>
            </a>
          </div>
        </div>

        {/* Filter Pills / Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
          {filterTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveFilter(tab)}
              className={`px-4 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap shrink-0 ${
                activeFilter === tab
                  ? 'bg-[#D4AF37] text-black font-semibold'
                  : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800 border border-neutral-800'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => openLightbox(item)}
              className="group relative rounded-2xl overflow-hidden border border-neutral-800/80 bg-neutral-950 cursor-pointer shadow-lg shadow-black/40 hover:border-[#D4AF37]/50 transition-all duration-300"
            >
              <div className="aspect-[4/3] w-full overflow-hidden bg-neutral-900">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
              </div>

              {/* Hover Dark Scrim */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300 flex flex-col justify-end p-5">
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-[#D4AF37]">
                    {item.category}
                  </span>
                  <div className="w-8 h-8 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <ZoomIn className="w-4 h-4 text-[#D4AF37]" />
                  </div>
                </div>
                <h3 className="text-base font-semibold text-white mt-1 group-hover:text-[#D4AF37] transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-neutral-400 line-clamp-1 mt-0.5">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Notice for Custom Styles */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-neutral-400">
            Have a custom hairstyle or haircut screenshot from your phone?{' '}
            <a
              href={SALON_DATA.business.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#D4AF37] underline hover:text-[#F3C64F] font-medium"
            >
              Send it directly to our WhatsApp
            </a>{' '}
            and we will recreate it with surgical precision.
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
          onClick={closeLightbox}
        >
          <div
            className="relative max-w-4xl w-full bg-[#121212] border border-neutral-800 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-800 bg-[#0B0B0B]">
              <div>
                <span className="text-xs font-semibold text-[#D4AF37] uppercase tracking-wider">
                  {selectedImage.category}
                </span>
                <h4 className="text-lg font-semibold text-white">
                  {selectedImage.title}
                </h4>
              </div>
              <button
                onClick={closeLightbox}
                className="p-2 text-neutral-400 hover:text-white rounded-lg hover:bg-neutral-800 transition-colors"
                aria-label="Close image preview"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative flex-1 bg-black flex items-center justify-center overflow-hidden min-h-[300px] sm:min-h-[450px]">
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="max-h-[65vh] w-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />

              {/* Prev / Next controls */}
              <button
                onClick={() => navigateLightbox('prev')}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => navigateLightbox('next')}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-black/60 hover:bg-black/80 text-white border border-white/20 transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Footer with Actions */}
            <div className="p-4 sm:p-5 bg-[#0B0B0B] border-t border-neutral-800 flex flex-col sm:flex-row items-center justify-between gap-4">
              <p className="text-xs sm:text-sm text-neutral-400 text-center sm:text-left">
                {selectedImage.description}
              </p>
              <a
                href={buildWhatsAppLink(`the style: ${selectedImage.title}`)}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-5 py-2.5 bg-[#D4AF37] hover:bg-[#F3C64F] text-black text-xs sm:text-sm font-semibold rounded-xl transition-colors flex items-center justify-center gap-2 whitespace-nowrap"
              >
                <MessageSquare className="w-4 h-4" />
                Book This Look on WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
