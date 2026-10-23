import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, CheckCircle2, ShieldCheck, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../../data/testimonialsData';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  // Showcase top 3 signature reviews to match reference layout and maintain compact height
  const reviews = TESTIMONIALS_DATA.slice(0, 3);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
  };

  // Auto-play / Auto-rotation every 3.8 seconds with pause on mouse hover
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev === reviews.length - 1 ? 0 : prev + 1));
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused, reviews.length]);

  const current = reviews[currentIndex];

  return (
    <section className="py-4 sm:py-5 bg-[#F8F9FC]">
      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Main Luxury Testimonials Showcase Container in Light Purple */}
        <div 
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          className="bg-gradient-to-br from-purple-50/80 via-[#FAF5FF] to-indigo-50/70 rounded-2xl sm:rounded-3xl p-4 sm:p-5 lg:p-6 border border-purple-200/90 shadow-sm relative overflow-hidden"
        >
          
          {/* Ambient light purple glows */}
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-purple-200/30 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-indigo-200/25 blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-5 lg:gap-7 items-center">
            
            {/* MOBILE ONLY HEADER (Shown above the active review on mobile) */}
            <div className="lg:hidden">
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider text-purple-900 bg-purple-100 border border-purple-200 mb-1.5">
                <Sparkles className="w-2.5 h-2.5 text-purple-600" />
                <span>CLIENT ENDORSEMENTS</span>
              </div>

              <h2 
                className="text-lg sm:text-xl font-black text-black tracking-tight leading-snug mb-1"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                Trusted by Discerning Hosts & Event Leaders
              </h2>

              <div className="flex items-center gap-1.5 text-[11px] font-bold text-black">
                <div className="flex items-center gap-0.5 text-amber-500">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                  ))}
                </div>
                <span>5.0 / 5.0 Rating • 100% Verified</span>
              </div>
            </div>

            {/* ELEVATED ACTIVE REVIEW CARD (Order 1 on mobile right below mobile header, Order 2 on desktop) */}
            <div className="lg:col-span-7 lg:order-2">
              <div 
                key={current.id}
                className="bg-white/95 backdrop-blur-xs rounded-xl sm:rounded-2xl p-4 sm:p-5 border border-purple-200 shadow-sm relative flex flex-col justify-between transition-all duration-500 animate-in fade-in slide-in-from-right-2"
              >
                
                {/* Card Top: Category Tag & Large Serif Quote Icon */}
                <div className="flex items-center justify-between mb-1.5">
                  <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-purple-50 text-purple-900 border border-purple-200">
                    <ShieldCheck className="w-3 h-3 text-purple-600" />
                    <span>{current.event.split('(')[0].trim()}</span>
                  </div>

                  <span 
                    className="text-purple-200 text-3xl sm:text-4xl font-serif select-none leading-none -mb-1"
                    style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                  >
                    “
                  </span>
                </div>

                {/* Card Middle: Quote in Italic Serif Font */}
                <p 
                  className="text-xs sm:text-[13.5px] text-black font-medium leading-relaxed italic my-2 sm:my-3"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  "{current.quote}"
                </p>

                {/* Card Bottom: Client Signature & Verified 5-Star Rating */}
                <div className="pt-2.5 border-t border-purple-100 flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <h4 className="text-xs font-black text-black flex items-center gap-1.5 leading-tight">
                      <span>{current.name}</span>
                      <CheckCircle2 className="w-3.5 h-3.5 text-purple-600 shrink-0" />
                    </h4>
                    <p className="text-[10px] text-slate-700 mt-0.5 font-bold leading-tight">
                      {current.role} • {current.event}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="flex items-center gap-0.5 justify-end">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                      ))}
                    </div>
                    <span className="text-[8.5px] uppercase font-black text-purple-800 tracking-wider block mt-0.5 leading-tight">
                      Verified Review
                    </span>
                  </div>
                </div>

              </div>
            </div>

            {/* CONTROLS & SELECTOR COLUMN (Order 2 on mobile below the active card, Order 1 on desktop) */}
            <div className="lg:col-span-5 lg:order-1 flex flex-col justify-between">
              {/* Desktop Header */}
              <div className="hidden lg:block">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] font-black uppercase tracking-wider text-purple-900 bg-purple-100 border border-purple-200 mb-1.5">
                  <Sparkles className="w-2.5 h-2.5 text-purple-600" />
                  <span>CLIENT ENDORSEMENTS</span>
                </div>

                <h2 
                  className="text-lg sm:text-xl lg:text-2xl font-black text-black tracking-tight leading-snug mb-1"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  Trusted by Discerning Hosts & Event Leaders
                </h2>

                <div className="flex items-center gap-1.5 mb-2.5 sm:mb-3 text-[11px] font-bold text-black">
                  <div className="flex items-center gap-0.5 text-amber-500">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-amber-500 text-amber-500" />
                    ))}
                  </div>
                  <span>5.0 / 5.0 Rating • 100% Verified</span>
                </div>
              </div>

              {/* Compact 3-Item Client Review Selector Stack */}
              <div className="space-y-1.5 mb-2 sm:mb-3">
                {reviews.map((item, idx) => {
                  const isActive = idx === currentIndex;
                  return (
                    <button
                      key={item.id}
                      onClick={() => setCurrentIndex(idx)}
                      className={`w-full text-left py-1.5 px-2.5 sm:py-2 sm:px-3 rounded-xl transition-all duration-200 flex items-center justify-between gap-2.5 cursor-pointer ${
                        isActive
                          ? 'bg-white border-2 border-purple-600 shadow-xs'
                          : 'bg-white/70 hover:bg-white border border-purple-100 hover:border-purple-300'
                      }`}
                    >
                      <div className="flex items-center gap-2 min-w-0">
                        <span 
                          className={`w-1.5 h-1.5 rounded-full shrink-0 ${
                            isActive ? 'bg-purple-600 ring-2 ring-purple-600/30' : 'bg-purple-200'
                          }`} 
                        />
                        <div className="truncate">
                          <h4 className="text-xs font-black text-black truncate leading-tight">
                            {item.name}
                          </h4>
                          <p className="text-[10px] text-slate-700 truncate mt-0.2 font-semibold leading-tight">
                            {item.event}
                          </p>
                        </div>
                      </div>

                      {isActive && (
                        <span className="shrink-0 text-[8px] font-black uppercase tracking-wider px-1.5 py-0.5 rounded-full bg-purple-100 text-purple-900 border border-purple-200">
                          Active
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Bottom Pagination & Navigation Controls */}
              <div className="flex items-center justify-between sm:justify-start gap-2.5 pt-0.5">
                <div className="flex items-center gap-1.5">
                  <button
                    onClick={prevSlide}
                    className="w-7 h-7 rounded-full border border-purple-200 bg-white hover:bg-purple-50 text-purple-900 flex items-center justify-center transition-all active:scale-95 shadow-2xs cursor-pointer"
                    aria-label="Previous review"
                  >
                    <ChevronLeft className="w-3 h-3" />
                  </button>
                  <button
                    onClick={nextSlide}
                    className="w-7 h-7 rounded-full border border-purple-200 bg-white hover:bg-purple-50 text-purple-900 flex items-center justify-center transition-all active:scale-95 shadow-2xs cursor-pointer"
                    aria-label="Next review"
                  >
                    <ChevronRight className="w-3 h-3" />
                  </button>
                </div>

                {/* Progress Indicators */}
                <div className="flex items-center gap-1.5 ml-1">
                  {reviews.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setCurrentIndex(idx)}
                      className={`h-1.5 rounded-full transition-all duration-500 cursor-pointer ${
                        idx === currentIndex ? 'w-5 bg-purple-600' : 'w-1.5 bg-purple-200 hover:bg-purple-300'
                      }`}
                      aria-label={`Go to slide ${idx + 1}`}
                    />
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
