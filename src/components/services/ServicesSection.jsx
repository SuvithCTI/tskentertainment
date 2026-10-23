import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { SERVICES_DATA, SERVICES_CATEGORIES } from '../../data/servicesData';
import { useTheme } from '../../context/ThemeContext';
import SectionHeader from '../common/SectionHeader';
import ServiceDetailModal from './ServiceDetailModal';

// Auto-moving image slideshow for each service card
function ServiceImageCarousel({ images, title, cardIndex }) {
  const imageList = (images && images.length > 0) ? images : [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (imageList.length <= 1 || isHovered) return;

    // Stagger intervals slightly so cards do not flip synchronously, with faster flip rate
    const intervalDuration = 1800 + (cardIndex % 3) * 300;
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % imageList.length);
    }, intervalDuration);

    return () => clearInterval(timer);
  }, [imageList.length, isHovered, cardIndex]);

  const handlePrev = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + imageList.length) % imageList.length);
  };

  const handleNext = (e) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % imageList.length);
  };

  const handleDotClick = (e, index) => {
    e.stopPropagation();
    setCurrentIndex(index);
  };

  return (
    <div 
      className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900 group/slider select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* 3 Auto-cycling Images */}
      {imageList.map((imgSrc, idx) => {
        const isActive = idx === currentIndex;
        return (
          <div
            key={idx}
            className={`absolute inset-0 transition-all duration-500 ease-in-out ${
              isActive ? 'opacity-100 scale-100 z-10' : 'opacity-0 scale-105 pointer-events-none z-0'
            }`}
          >
            <img
              src={imgSrc}
              alt={`${title} - View ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
              loading="lazy"
            />
          </div>
        );
      })}

      {/* Subtle Scrim for Contrast */}
      <div className="absolute inset-0 z-20 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />

      {/* Left / Right Nav Arrows (Visible on touch, hover on desktop) */}
      {imageList.length > 1 && (
        <>
          <button
            onClick={handlePrev}
            className="absolute left-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center sm:opacity-0 sm:group-hover/slider:opacity-100 opacity-90 transition-opacity backdrop-blur-sm border border-white/20 active:scale-90 cursor-pointer"
            title="Previous Image"
            aria-label="Previous image"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={handleNext}
            className="absolute right-2 top-1/2 -translate-y-1/2 z-30 w-7 h-7 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center sm:opacity-0 sm:group-hover/slider:opacity-100 opacity-90 transition-opacity backdrop-blur-sm border border-white/20 active:scale-90 cursor-pointer"
            title="Next Image"
            aria-label="Next image"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </>
      )}

      {/* 3 Progress Indicators / Dots at bottom center */}
      {imageList.length > 1 && (
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 z-30 flex items-center gap-1.5">
          {imageList.map((_, dotIdx) => {
            const isDotActive = dotIdx === currentIndex;
            return (
              <button
                key={dotIdx}
                onClick={(e) => handleDotClick(e, dotIdx)}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  isDotActive
                    ? 'w-6 h-1.5 bg-amber-400 shadow-sm'
                    : 'w-1.5 h-1.5 bg-white/60 hover:bg-white'
                }`}
                title={`Go to image ${dotIdx + 1}`}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default function ServicesSection({ onOpenBookingModal }) {
  const { currentTheme } = useTheme();
  const [searchParams] = useSearchParams();
  const serviceParam = searchParams.get('service');
  const [selectedCategory, setSelectedCategory] = useState("All Services");
  const [activeModalService, setActiveModalService] = useState(null);

  // Automatically open modal and scroll to card if linked from Instagram Feed or direct URL
  useEffect(() => {
    if (serviceParam) {
      const match = SERVICES_DATA.find((s) => s.id === serviceParam);
      if (match) {
        setSelectedCategory("All Services");
        setActiveModalService(match);
        const timer = setTimeout(() => {
          const el = document.getElementById(`service-${serviceParam}`);
          if (el) {
            el.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }
        }, 150);
        return () => clearTimeout(timer);
      }
    }
  }, [serviceParam]);

  const filteredServices = selectedCategory === "All Services"
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === selectedCategory);

  return (
    <section className="py-16 sm:py-24 bg-[#F8F9FC]">
      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <SectionHeader
          badge="What We Do"
          title="Turnkey Services &"
          subtitle="Stage Production"
        />

        {/* Categories (Smooth horizontal scroll on mobile, flex wrap on tablet/desktop) */}
        <div className="flex items-center justify-start sm:justify-center gap-2 mb-8 sm:mb-10 overflow-x-auto pb-2 sm:pb-0 scrollbar-none [scrollbar-width:none] [-ms-overflow-style:none]">
          {SERVICES_CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`shrink-0 px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedCategory === cat
                  ? `bg-gradient-to-r ${currentTheme.gradient} text-white shadow-sm`
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {filteredServices.map((service, index) => {
            const isTargeted = serviceParam === service.id;
            return (
              <div
                id={`service-${service.id}`}
                key={service.id}
                onClick={() => setActiveModalService(service)}
                className={`group bg-white rounded-3xl border overflow-hidden shadow-xs hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col cursor-pointer ${
                  isTargeted 
                    ? 'border-amber-500 ring-2 ring-amber-400/80 shadow-lg' 
                    : 'border-slate-200/90'
                }`}
              >
                {/* Auto-moving 3-Image Carousel */}
                <ServiceImageCarousel 
                  images={service.images || [service.image]} 
                  title={service.title} 
                  cardIndex={index} 
                />

                {/* Clean Minimal Info */}
                <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-base sm:text-lg font-extrabold text-black group-hover:text-amber-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-black font-semibold mt-1.5 leading-relaxed line-clamp-2">
                      {service.tagline}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-slate-100 flex items-center justify-between">
                    <span className="text-xs font-bold text-amber-600 group-hover:underline flex items-center gap-1.5">
                      <span>View Details & Packages</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                    </span>

                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        onOpenBookingModal();
                      }}
                      className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-slate-100 hover:bg-slate-900 hover:text-white text-slate-800 transition-colors"
                    >
                      Book
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>

      {activeModalService && (
        <ServiceDetailModal
          service={activeModalService}
          onClose={() => setActiveModalService(null)}
        />
      )}
    </section>
  );
}
