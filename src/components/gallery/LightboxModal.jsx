import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, MapPin, Users, Star, PhoneCall, ChevronLeft, ChevronRight } from 'lucide-react';
import { BRAND_DATA } from '../../data/eventData';
import { useTheme } from '../../context/ThemeContext';
import { triggerConfetti } from '../../utils/confetti';

export default function LightboxModal({ item, onClose, onPrev, onNext, currentIndex, totalCount }) {
  const { currentTheme } = useTheme();

  // Keyboard navigation & body scroll lock
  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft' && onPrev) onPrev();
      if (e.key === 'ArrowRight' && onNext) onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose, onPrev, onNext]);

  if (!item) return null;

  const handleInquire = () => {
    triggerConfetti(0.5, 0.5);
    const msg = encodeURIComponent(
      `Hello Actor TSK & Team! I loved "${item.title}" at ${item.location} in your gallery. I would love to explore a similar concept for my upcoming celebration.`
    );
    window.open(`https://wa.me/${BRAND_DATA.contact.whatsapp}?text=${msg}`, '_blank');
  };

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto">
      {/* High z-index Dark Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/85 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Floating Prev / Next Controls for Desktop */}
      {onPrev && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onPrev();
          }}
          className="hidden md:flex fixed left-6 top-1/2 -translate-y-1/2 z-[100000] w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 items-center justify-center backdrop-blur-md border border-white/30 transition-all shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
          title="Previous Showcase"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
      )}

      {onNext && (
        <button
          onClick={(e) => {
            e.stopPropagation();
            onNext();
          }}
          className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-[100000] w-12 h-12 rounded-full bg-white/20 hover:bg-white text-white hover:text-slate-900 items-center justify-center backdrop-blur-md border border-white/30 transition-all shadow-xl hover:scale-110 active:scale-95 cursor-pointer"
          title="Next Showcase"
        >
          <ChevronRight className="w-6 h-6" />
        </button>
      )}

      {/* Two-Column Side-by-Side Modal Dialog */}
      <div className="relative w-full max-w-4xl max-h-[92vh] sm:max-h-[86vh] rounded-3xl bg-white border border-slate-200/90 shadow-2xl overflow-hidden z-10 flex flex-col md:flex-row my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Prominent, Always-Visible Close Button (Top right on all screen sizes) */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 z-30 w-8 h-8 rounded-full bg-slate-950/80 hover:bg-black text-white border border-white/30 backdrop-blur-md flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95 cursor-pointer"
          aria-label="Close modal"
        >
          <X className="w-4 h-4 stroke-[2.5]" />
        </button>

        {/* LEFT COLUMN: Prominent Image */}
        <div className="relative w-full md:w-1/2 h-56 xs:h-64 sm:h-72 md:h-auto min-h-[220px] md:min-h-[440px] bg-slate-900 overflow-hidden shrink-0 group">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none md:hidden" />

          {/* Mobile prev/next navigation row */}
          <div className="md:hidden absolute bottom-3 right-3 z-20 flex items-center gap-1.5">
            {onPrev && (
              <button
                onClick={(e) => { e.stopPropagation(); onPrev(); }}
                className="w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center border border-white/30 active:scale-90"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
            )}
            {onNext && (
              <button
                onClick={(e) => { e.stopPropagation(); onNext(); }}
                className="w-8 h-8 rounded-full bg-black/70 text-white flex items-center justify-center border border-white/30 active:scale-90"
                aria-label="Next image"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* RIGHT COLUMN: Content & Actions */}
        <div className="relative w-full md:w-1/2 p-5 sm:p-7 flex flex-col justify-between overflow-y-auto bg-white space-y-3.5">
          
          {/* Header & Title */}
          <div className="pr-8">
            <div className="flex items-center justify-between gap-2 mb-1">
              <span className="text-[10px] sm:text-[11px] font-black uppercase tracking-wider text-amber-800 font-sans-luxury">
                {item.category} • {item.year}
              </span>
              {totalCount > 1 && (
                <span className="text-[10px] text-slate-400 font-mono tracking-wider">
                  {currentIndex + 1} / {totalCount}
                </span>
              )}
            </div>

            <h3 className="font-sagona text-lg sm:text-2xl font-bold text-slate-900 tracking-tight leading-snug">
              {item.title}
            </h3>

            {/* Rating pill */}
            <div className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-800 bg-amber-50 px-2.5 py-1 rounded-full border border-amber-200/80 mt-2 font-sans-luxury">
              <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
              <span>{item.rating} / 5.0 Rating</span>
            </div>
          </div>

          {/* Description */}
          <p className="font-sans-luxury text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
            {item.description}
          </p>

          {/* Meta Information Cards */}
          <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 text-[11px] sm:text-xs text-slate-700 font-sans-luxury">
              <MapPin className="w-3.5 h-3.5 text-rose-500 shrink-0" />
              <span className="truncate">{item.location}</span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-slate-50 border border-slate-100 text-[11px] sm:text-xs text-slate-700 font-sans-luxury">
              <Users className="w-3.5 h-3.5 text-blue-500 shrink-0" />
              <span className="truncate">{item.attendees}</span>
            </div>
          </div>

          {/* Tags */}
          {item.tags && item.tags.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {item.tags.map((tag, idx) => (
                <span 
                  key={idx} 
                  className="text-[9.5px] sm:text-[10px] font-semibold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-md font-sans-luxury"
                >
                  #{tag}
                </span>
              ))}
            </div>
          )}

          {/* Action Row */}
          <div className="pt-2.5 border-t border-slate-100 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-2.5">
            <span className="text-[10px] sm:text-[11px] text-slate-400 font-medium text-center sm:text-left font-sans-luxury">
              Personal Direction of Actor TSK
            </span>

            <button
              onClick={handleInquire}
              className={`w-full sm:w-auto px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${currentTheme.gradient} hover:brightness-105 active:scale-95 shadow-sm transition-all flex items-center justify-center gap-1.5 cursor-pointer font-sans-luxury`}
            >
              <PhoneCall className="w-3.5 h-3.5 text-white" />
              <span>Inquire This Concept</span>
            </button>
          </div>

        </div>

      </div>
    </div>,
    document.body
  );
}
