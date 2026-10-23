import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { 
  X, 
  Check, 
  PhoneCall, 
  ShieldCheck, 
  Clock, 
  Sparkles, 
  ArrowRight
} from 'lucide-react';
import { BRAND_DATA } from '../../data/eventData';
import { triggerConfetti } from '../../utils/confetti';

export default function ServiceDetailModal({ service, onClose }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  if (!service || !mounted) return null;

  const handleBookService = (pkgName) => {
    triggerConfetti(0.5, 0.4);
    const text = encodeURIComponent(
      `Hello TSK Entertainments team! I would like to book "${service.title}" - Package: ${pkgName || 'Full Service'}. Please share date availability & formal quote!`
    );
    window.open(`https://wa.me/${BRAND_DATA.contact.whatsapp}?text=${text}`, '_blank');
  };

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 overflow-hidden">
      {/* High z-index Dark Backdrop */}
      <div 
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Dialog with comfortable viewport constraint */}
      <div className="relative w-full max-w-3xl max-h-[92vh] sm:max-h-[86vh] rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden z-10 flex flex-col animate-in fade-in zoom-in-95 duration-200">
        
        {/* Media Header Banner - Responsive height */}
        <div className="relative shrink-0 h-36 sm:h-48 w-full overflow-hidden bg-slate-900 select-none">
          <img
            src={service.image}
            alt={service.title}
            className="w-full h-full object-cover object-center"
          />
          {/* Contrast scrims */}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-black/40" />
          
          {/* Prominent, Always-Visible Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 z-40 w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-slate-950/80 hover:bg-black text-white border border-white/30 backdrop-blur-md flex items-center justify-center shadow-xl transition-transform hover:scale-110 active:scale-95 cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 stroke-[2.5]" />
          </button>

          {/* Header Title & Tagline */}
          <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-6 sm:right-6 text-white pr-10 sm:pr-12">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[9px] sm:text-[10px] font-bold uppercase tracking-wider bg-white/15 text-amber-300 border border-white/20 backdrop-blur-md mb-1 sm:mb-1.5">
              <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-amber-400" />
              <span>{service.category}</span>
            </div>

            <h3 
              className="text-lg sm:text-2xl lg:text-3xl font-extrabold text-white tracking-tight leading-tight drop-shadow-sm truncate"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              {service.title}
            </h3>

            <p className="text-[11px] sm:text-sm text-slate-200 font-medium mt-0.5 leading-snug drop-shadow-xs line-clamp-1">
              {service.tagline}
            </p>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-5 sm:p-6 space-y-5 bg-white">
          
          {/* Executive Summary Card */}
          <div className="p-4 rounded-2xl bg-slate-50/80 border border-slate-200 shadow-2xs">
            <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed">
              {service.description}
            </p>
          </div>

          {/* Section 1: Deliverables & Inclusions */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <h4 
                className="text-xs sm:text-sm font-black uppercase tracking-wider text-black"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Deliverables & Inclusions
              </h4>
              <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-emerald-900 bg-emerald-100 border border-emerald-300 px-2.5 py-0.5 rounded-full">
                Turnkey Execution
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {service.features.map((feat, idx) => (
                <div 
                  key={idx} 
                  className="flex items-start gap-2.5 p-3 rounded-xl bg-white border border-slate-300 shadow-2xs"
                >
                  <div className="w-4 h-4 rounded-full bg-emerald-100 text-emerald-800 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-2.5 h-2.5 stroke-[3]" />
                  </div>
                  <span className="text-xs sm:text-[13px] font-bold text-black leading-snug">
                    {feat}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Section 2: Curated Packages */}
          <div>
            <div className="flex items-center justify-between mb-2.5">
              <h4 
                className="text-xs sm:text-sm font-black uppercase tracking-wider text-black"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Curated Production Packages
              </h4>
              <span className="text-xs text-black font-semibold">
                Custom scopes available on request
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {service.packages.map((pkg, i) => (
                <div 
                  key={i} 
                  className="p-3.5 sm:p-4 rounded-2xl border border-slate-300 bg-white shadow-xs hover:shadow-md hover:border-amber-500 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Duration Pill */}
                    <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-[10px] font-extrabold bg-amber-100 text-amber-950 border border-amber-300 mb-1.5">
                      <Clock className="w-3 h-3 text-amber-700" />
                      <span>{pkg.duration}</span>
                    </div>

                    <h5 
                      className="font-black text-sm text-black tracking-tight leading-snug mb-1"
                      style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                    >
                      {pkg.name}
                    </h5>

                    <span className="text-[10.5px] uppercase font-bold text-slate-900 tracking-wider block mb-1.5">
                      Ideal for: {pkg.idealFor}
                    </span>

                    <p className="text-xs text-black font-semibold leading-relaxed border-t border-slate-200 pt-2">
                      {pkg.includes}
                    </p>
                  </div>

                  <button
                    onClick={() => handleBookService(pkg.name)}
                    className="mt-3.5 w-full py-2 rounded-xl text-xs font-bold bg-black hover:bg-amber-600 text-white shadow-2xs transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    <span>Book Package</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Modal Footer - Fixed at bottom */}
        <div className="shrink-0 p-3.5 sm:p-4 bg-white border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-2.5 sm:gap-3">
          <div className="flex items-center gap-1.5 text-[11px] sm:text-xs text-slate-500 text-center sm:text-left">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Direct Artist Liaison • Zero Middleman Markup • Actor TSK Quality</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <button
              onClick={onClose}
              className="flex-1 sm:flex-initial px-4 py-2 rounded-xl text-xs font-bold text-slate-700 hover:text-slate-900 hover:bg-slate-100 transition-colors cursor-pointer"
            >
              Close
            </button>
            <button
              onClick={() => handleBookService('Full Service Custom Quote')}
              className="flex-1 sm:flex-initial px-4 sm:px-5 py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-900/20 active:scale-95 transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5" />
              <span>WhatsApp Enquiry</span>
            </button>
          </div>
        </div>

      </div>
    </div>,
    document.body
  );
}
