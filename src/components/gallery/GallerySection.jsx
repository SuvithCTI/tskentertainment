import React, { useState } from 'react';
import { MapPin, Users, Star, Eye, ArrowRight } from 'lucide-react';
import Instagram from '../common/InstagramIcon';
import { GALLERY_ITEMS, GALLERY_CATEGORIES } from '../../data/galleryData';
import { BRAND_DATA } from '../../data/eventData';
import { useTheme } from '../../context/ThemeContext';
import LightboxModal from './LightboxModal';

export default function GallerySection() {
  const { currentTheme } = useTheme();
  const [selectedCat, setSelectedCat] = useState("All");
  const [activeItem, setActiveItem] = useState(null);

  const filteredItems = selectedCat === "All"
    ? GALLERY_ITEMS
    : GALLERY_ITEMS.filter(item => item.category === selectedCat);

  // Lightbox navigation helpers
  const activeIndex = activeItem ? filteredItems.findIndex(i => i.id === activeItem.id) : -1;

  const handlePrev = () => {
    if (activeIndex > 0) {
      setActiveItem(filteredItems[activeIndex - 1]);
    } else {
      setActiveItem(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNext = () => {
    if (activeIndex < filteredItems.length - 1) {
      setActiveItem(filteredItems[activeIndex + 1]);
    } else {
      setActiveItem(filteredItems[0]);
    }
  };

  return (
    <section className="pt-16 sm:pt-24 pb-16 sm:pb-20 bg-gradient-to-b from-[#F9FAFC] via-[#FFFFFF] to-[#F1F4F9]">
      <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-10 lg:px-14 xl:px-20">
        
        {/* Simple & Streamlined Sagona Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <h1 className="font-sagona text-2xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-black leading-tight">
            Celebrations We Brought to{' '}
            <span className={`font-sagona font-black text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradient}`}>
              Life
            </span>
          </h1>

          <p className="mt-1.5 text-xs sm:text-sm text-black font-sans-luxury font-semibold px-2">
            Turnkey weddings, star nights & arena concerts curated by Actor TSK.
          </p>
        </div>

        {/* Categories Filter Tabs (Horizontal scroll on mobile, centered flex on tablet/desktop) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-6 sm:mb-10 overflow-x-auto pb-2 sm:pb-0 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]">
          {GALLERY_CATEGORIES.map((cat) => {
            const isSelected = selectedCat === cat;
            const count = cat === "All" 
              ? GALLERY_ITEMS.length 
              : GALLERY_ITEMS.filter(item => item.category === cat).length;

            return (
              <button
                key={cat}
                onClick={() => setSelectedCat(cat)}
                className={`shrink-0 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs font-black uppercase tracking-wider transition-all duration-300 flex items-center gap-2 cursor-pointer font-sans-luxury ${
                  isSelected
                    ? `bg-gradient-to-r ${currentTheme.gradient} text-white shadow-md shadow-amber-500/20 scale-105`
                    : 'bg-white text-black hover:bg-slate-50 border border-slate-300 shadow-2xs hover:border-slate-400 font-bold'
                }`}
              >
                <span>{cat}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold ${
                  isSelected ? 'bg-black/25 text-white' : 'bg-slate-100 text-black border border-slate-200'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid - Responsive Architectural Cards (2 COLUMNS IN MOBILE VIEW) */}
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-2.5 sm:gap-7 xl:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              onClick={() => setActiveItem(item)}
              className="group bg-white rounded-2xl sm:rounded-3xl border border-slate-200/85 hover:border-amber-400/90 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-10px_rgba(245,158,11,0.12)] transition-all duration-500 hover:-translate-y-1.5 flex flex-col cursor-pointer overflow-hidden relative"
            >
              {/* Image Container with Badges & Hover Overlay */}
              <div className="relative aspect-[16/11] w-full overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-108 transition-transform duration-700 ease-out"
                  loading="lazy"
                />

                {/* Scrim Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300" />

                {/* Top-Left Category Pill (Hidden on mobile to reduce clutter, visible on sm+) */}
                <div className="hidden sm:block absolute top-3.5 left-3.5 z-10 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-black/60 backdrop-blur-md border border-white/20 text-amber-300 shadow-sm font-sans-luxury">
                  {item.category}
                </div>

                {/* Top-Right Year & Star Rating */}
                <div className="absolute top-2 right-2 sm:top-3.5 sm:right-3.5 z-10 flex items-center gap-0.5 sm:gap-1 px-1.5 py-0.5 sm:px-2.5 sm:py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-[9px] sm:text-[11px] font-bold text-white shadow-sm font-sans-luxury shrink-0">
                  <Star className="w-2.5 h-2.5 sm:w-3.5 sm:h-3.5 text-amber-400 fill-amber-400" />
                  <span>{item.rating}</span>
                </div>

                {/* Center Hover Action Pill */}
                <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                  <div className="px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-white/95 text-slate-900 text-[10px] sm:text-xs font-bold uppercase tracking-wider shadow-xl flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300 font-sans-luxury">
                    <Eye className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-600" />
                    <span>View</span>
                  </div>
                </div>

                {/* Bottom Overlay Title & Location */}
                <div className="absolute bottom-2 left-2 right-2 sm:bottom-3.5 sm:left-4 sm:right-4 z-10 text-white space-y-1">
                  <span className="text-[9px] sm:text-[11px] font-medium text-slate-200 flex items-center gap-1 sm:gap-1.5 font-sans-luxury truncate">
                    <MapPin className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-rose-400 shrink-0" />
                    <span className="truncate">{item.location}</span>
                  </span>
                </div>
              </div>

              {/* Card Body Information (Clean & Minimal on Mobile) */}
              <div className="p-2.5 sm:p-6 flex-1 flex flex-col justify-between space-y-1.5 sm:space-y-3">
                <div>
                  <h3 className="font-sagona text-xs sm:text-lg font-bold text-black group-hover:text-amber-600 transition-colors tracking-tight leading-snug line-clamp-1">
                    {item.title}
                  </h3>
                  {/* Long description hidden on mobile alone, visible on desktop */}
                  <p className="hidden sm:block font-sans-luxury text-xs text-black font-semibold mt-1.5 leading-relaxed line-clamp-2">
                    {item.description}
                  </p>
                </div>

                {/* Tags and Attendees Footer (Streamlined on Mobile) */}
                <div className="pt-2 sm:pt-3.5 border-t border-slate-100 sm:border-slate-200 flex items-center justify-between text-[10px] sm:text-xs text-black font-sans-luxury gap-1">
                  <div className="flex items-center gap-1 min-w-0">
                    <Users className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 shrink-0" />
                    <span className="font-bold text-slate-800 truncate">{item.attendees}</span>
                  </div>

                  <span className="text-amber-700 font-extrabold group-hover:translate-x-1 transition-transform flex items-center gap-0.5 sm:gap-1 text-[9.5px] sm:text-[11px] uppercase tracking-wider shrink-0">
                    <span className="hidden sm:inline">Explore</span>
                    <ArrowRight className="w-3 h-3 stroke-[2.5]" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Live Instagram Reels Showcase Banner */}
        <div className="mt-12 sm:mt-20 p-5 sm:p-8 rounded-3xl bg-gradient-to-r from-[#FFF0F5] via-[#FFF7FA] to-[#FDF2F7] border border-pink-200/90 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-center sm:text-left">
          <div className="space-y-1.5">
            <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-pink-700 bg-white/95 px-3 py-1 rounded-full border border-pink-200 shadow-2xs font-sans-luxury inline-block">
              Direct From The Stage
            </span>
            <h3 className="font-sagona text-lg sm:text-2xl font-black text-black">
              Watch Behind-The-Scenes & Live Crowd Energy
            </h3>
            <p className="font-sans-luxury text-xs sm:text-sm text-black font-semibold">
              Catch daily event reels, Vijay TV star moments, and grand celebrations on our official Instagram.
            </p>
          </div>

          <a
            href={BRAND_DATA.contact.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto shrink-0 px-6 sm:px-7 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-pink-600 via-rose-600 to-purple-600 hover:brightness-110 shadow-md shadow-pink-500/25 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 font-sans-luxury"
          >
            <Instagram className="w-4 h-4" />
            <span>@tskentertainments</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Lightbox Modal with Full Next/Prev Navigation */}
      {activeItem && (
        <LightboxModal
          item={activeItem}
          onClose={() => setActiveItem(null)}
          onPrev={handlePrev}
          onNext={handleNext}
          currentIndex={activeIndex}
          totalCount={filteredItems.length}
        />
      )}
    </section>
  );
}
