import React, { useState, useEffect } from 'react';
import { BRAND_DATA } from '../../data/eventData';

export default function HeroSection({ onOpenBookingModal }) {
  // 6 Ultra-high-end bespoke cinematic services matching the architectural luxury reference
  const servicesList = [
    {
      id: "royal-weddings",
      num: "01",
      navLabel: "Royal Weddings",
      titleLine1: "ARCHITECTURAL",
      titleLine2: "OPULENCE",
      subtitle: "Monumental mandap architecture meets royal fairytale celebrations.",
      bgImage: "/images/hero/wedding_mandap.jpg"
    },
    {
      id: "celebrity-management",
      num: "02",
      navLabel: "Celebrity Arena",
      titleLine1: "CELEBRITY ARENA",
      titleLine2: "SPECTACLES",
      subtitle: "Direct Kollywood stars & electrified crowds of 5,000+ cheering fans.",
      bgImage: "/images/hero/celebrity_concert.jpg"
    },
    {
      id: "corporate-galas",
      num: "03",
      navLabel: "Corporate Galas",
      titleLine1: "EXECUTIVE STAR",
      titleLine2: "SUMMITS",
      subtitle: "Curved 4K LED reveals & flawless enterprise stagecraft.",
      bgImage: "/images/hero/corporate_gala.jpg"
    },
    {
      id: "live-stage-comedy",
      num: "04",
      navLabel: "Live Comedy",
      titleLine1: "UNFILTERED LAUGHTER",
      titleLine2: "SHOWS",
      subtitle: "Curated live by Actor TSK with Tamil television's comedy champions.",
      bgImage: "/images/hero/comedy_stage.jpg"
    },
    {
      id: "concerts-dj-sound",
      num: "05",
      navLabel: "Sangeet & DJ",
      titleLine1: "HIGH-VOLTAGE",
      titleLine2: "EUPHORIA",
      subtitle: "Concert line array acoustics, celebrity DJs & moving beam lights.",
      bgImage: "/images/hero/sangeet_dj.jpg"
    },
    {
      id: "stage-production-sfx",
      num: "06",
      navLabel: "Stage & SFX",
      titleLine1: "CINEMATIC",
      titleLine2: "PYROTECHNICS",
      subtitle: "100% smoke-free indoor cold sparks & ultra-HD 4K LED walls.",
      bgImage: "/images/hero/pyro_stage.jpg"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Auto-cycle through the 6 bespoke background scenes
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % servicesList.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [servicesList.length]);

  const activeService = servicesList[currentIndex];

  const openWhatsAppEnquiry = () => {
    const text = encodeURIComponent(
      `Hello TSK Entertainments! I am interested in booking "${activeService.navLabel}" (${activeService.titleLine1} ${activeService.titleLine2}) for my upcoming event. Please share availability & bespoke packages.`
    );
    window.open(`https://wa.me/${BRAND_DATA.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section className="relative h-[100dvh] min-h-[580px] sm:min-h-[660px] max-h-[1080px] w-full flex flex-col justify-between overflow-hidden bg-black text-white select-none pt-20 pb-4 sm:pt-28 sm:pb-8">
      
      {/* 1. CINEMATIC FULL-BLEED BACKGROUND SLIDESHOW (100% FULL OPACITY) */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {servicesList.map((service, index) => {
          const isActive = index === currentIndex;
          return (
            <div
              key={service.id}
              className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                isActive ? 'opacity-100 z-10' : 'opacity-0 z-0'
              }`}
            >
              <img
                src={service.bgImage}
                alt={`${service.titleLine1} ${service.titleLine2}`}
                className={`w-full h-full object-cover object-center transform transition-transform duration-[8000ms] ease-out ${
                  isActive ? 'scale-105' : 'scale-100'
                }`}
                loading={index === 0 ? "eager" : "lazy"}
              />
            </div>
          );
        })}

        {/* Soft Vignette - Deepening towards the bottom for crisp lower text contrast */}
        <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/85 via-black/25 to-transparent pointer-events-none" />
        <div className="absolute top-0 inset-x-0 h-32 z-20 bg-gradient-to-b from-black/50 to-transparent pointer-events-none" />
      </div>

      {/* 2. EDITORIAL HEADLINE & DUAL BUTTONS (ANCHORED IN LOWER ZONE) */}
      <div className="relative z-30 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center text-center mt-auto mb-3 sm:mb-6">
        
        {/* Architectural Serif Headline */}
        <h1 className="font-['Playfair_Display',serif] text-center max-w-full w-full">
          <span className="block text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-[2.75rem] xl:text-[3.25rem] leading-tight sm:leading-tight">
            <span className="text-white uppercase font-bold tracking-[0.06em] sm:tracking-[0.11em] drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] inline-block">
              {activeService.titleLine1}{' '}
            </span>
            <span className="italic font-normal tracking-[0.04em] sm:tracking-[0.08em] text-amber-200 drop-shadow-[0_4px_30px_rgba(0,0,0,0.95)] inline-block">
              {activeService.titleLine2}
            </span>
          </span>
        </h1>

        {/* Refined Subtitle */}
        <p className="mt-2 sm:mt-3 text-xs sm:text-sm md:text-base font-light tracking-[0.08em] sm:tracking-[0.12em] text-slate-100 max-w-md sm:max-w-xl mx-auto leading-relaxed drop-shadow-[0_2px_12px_rgba(0,0,0,0.95)] px-2">
          {activeService.subtitle}
        </p>

        {/* Dual High-Fashion Rectangular Buttons */}
        <div className="mt-4 sm:mt-6 flex flex-col sm:flex-row items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto px-2 sm:px-0">
          {/* Button 1: Dark Luxury Box */}
          <button
            onClick={onOpenBookingModal}
            className="w-full sm:w-auto min-w-[210px] sm:min-w-[240px] px-7 py-3 sm:py-3.5 bg-[#161616]/90 hover:bg-black text-white text-[11px] sm:text-xs font-semibold tracking-[0.2em] sm:tracking-[0.22em] uppercase border border-white/30 hover:border-amber-300/70 backdrop-blur-md transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
          >
            Plan Your Event
          </button>

          {/* Button 2: Crisp Solid White Box */}
          <button
            onClick={openWhatsAppEnquiry}
            className="w-full sm:w-auto min-w-[210px] sm:min-w-[240px] px-7 py-3 sm:py-3.5 bg-white hover:bg-amber-100 text-slate-950 text-[11px] sm:text-xs font-bold tracking-[0.2em] sm:tracking-[0.22em] uppercase transition-all duration-300 shadow-2xl hover:scale-105 active:scale-95 cursor-pointer"
          >
            WhatsApp Concierge
          </button>
        </div>

      </div>

      {/* 3. SLEEK EDITORIAL BOTTOM SLIDE SELECTOR */}
      <div className="relative z-30 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-2 sm:pb-5">
        
        {/* Mobile Slide Indicator Pill */}
        <div className="flex sm:hidden items-center justify-between py-1.5 mb-1.5 border-t border-white/15">
          <div className="flex items-center gap-1.5 truncate">
            <span className="text-[10px] font-mono tracking-widest text-amber-300 font-bold shrink-0">
              {activeService.num} / 06
            </span>
            <span className="text-[10px] uppercase tracking-wider text-slate-200 font-medium truncate">
              • {activeService.navLabel}
            </span>
          </div>
          <span className="text-[9px] uppercase tracking-widest text-amber-300/90 font-semibold shrink-0">
            Auto-Cycling
          </span>
        </div>

        {/* 6 Segment Progress Bars / Selector */}
        <div className="grid grid-cols-6 gap-1.5 sm:gap-4 sm:border-t sm:border-white/20 sm:pt-4">
          {servicesList.map((service, index) => {
            const isActive = index === currentIndex;
            return (
              <button
                key={service.id}
                onClick={() => setCurrentIndex(index)}
                className={`group flex flex-col items-start text-left transition-all py-1 cursor-pointer ${
                  isActive ? 'opacity-100' : 'opacity-40 hover:opacity-80'
                }`}
                aria-label={`Slide ${service.num}: ${service.navLabel}`}
              >
                <div className="hidden sm:flex items-center gap-1.5 w-full">
                  <span className={`text-[10px] font-mono tracking-widest ${isActive ? 'text-amber-300 font-bold' : 'text-white'}`}>
                    {service.num}
                  </span>
                  <span className={`text-[10px] sm:text-[11px] uppercase tracking-[0.14em] truncate ${isActive ? 'text-white font-semibold' : 'text-slate-300 font-normal'}`}>
                    {service.navLabel}
                  </span>
                </div>
                
                {/* Thin Golden Progress Accent Line */}
                <div className="w-full h-[2.5px] sm:h-[1.5px] bg-white/25 sm:mt-1.5 relative overflow-hidden rounded-full">
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-200 transition-all duration-500 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-1/2'
                    }`} 
                  />
                </div>
              </button>
            );
          })}
        </div>
      </div>

    </section>
  );
}
