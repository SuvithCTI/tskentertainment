import React, { useState } from 'react';
import { 
  Sparkles, 
  Check, 
  PhoneCall
} from 'lucide-react';
import { BRAND_DATA } from '../../data/eventData';
import { triggerConfetti } from '../../utils/confetti';

export default function CostCalculator() {
  const [eventType, setEventType] = useState('wedding');
  const [guests, setGuests] = useState(500);
  const [celebTier, setCelebTier] = useState('tv-star');
  const [productionLevel, setProductionLevel] = useState('premium');

  const eventTypes = [
    { id: 'wedding', name: 'Wedding & Reception', base: 120000 },
    { id: 'corporate', name: 'Corporate Gala', base: 140000 },
    { id: 'sangeet', name: 'Sangeet & Haldi', base: 90000 },
    { id: 'starnight', name: 'Celebrity Concert', base: 180000 }
  ];

  const celebTiers = [
    { id: 'none', label: 'Standard Emcee', cost: 0 },
    { id: 'tv-star', label: 'Vijay TV / KPY Star Host', cost: 65000 },
    { id: 'comedy-trio', label: 'KPY Comedians & Mimicry', cost: 110000 },
    { id: 'cine-guest', label: 'Cine Star / Playback Singer', cost: 220000 }
  ];

  const productionLevels = [
    { id: 'essential', label: 'Standard Sound & Stage', cost: 45000 },
    { id: 'premium', label: 'Intelligent Lights & 4K LED', cost: 95000 },
    { id: 'arena', label: 'Arena Line Array & Concert Stage', cost: 185000 }
  ];

  const selectedEvent = eventTypes.find(e => e.id === eventType) || eventTypes[0];
  const selectedCeleb = celebTiers.find(c => c.id === celebTier) || celebTiers[1];
  const selectedProd = productionLevels.find(p => p.id === productionLevel) || productionLevels[1];

  let multiplier = guests > 1000 ? 1.3 : guests > 400 ? 1.1 : 1.0;
  const estimatedMin = Math.round((selectedEvent.base * multiplier + selectedCeleb.cost + selectedProd.cost) * 0.95);
  const estimatedMax = Math.round(estimatedMin * 1.2);

  const formatINR = (val) => '₹' + val.toLocaleString('en-IN');

  const handleWhatsAppQuote = () => {
    triggerConfetti(0.5, 0.5);
    const summary = `Hello TSK Entertainments team!%0A• Event: ${selectedEvent.name}%0A• Guests: ${guests}%0A• Celebrity Host: ${selectedCeleb.label}%0A• Setup: ${selectedProd.label}%0A• Estimate: ${formatINR(estimatedMin)} - ${formatINR(estimatedMax)}%0APlease check availability!`;
    window.open(`https://wa.me/${BRAND_DATA.contact.whatsapp}?text=${summary}`, '_blank');
  };

  return (
    <section className="relative py-8 sm:py-10 bg-gradient-to-b from-[#FFF5F7] via-[#FFF0F4] to-[#FFF5F7] border-y border-pink-200/80 overflow-hidden">
      {/* Ambient Light Pink Background Blur */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-80 h-80 rounded-full bg-pink-300/20 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-80 h-80 rounded-full bg-rose-300/15 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12">
        
        {/* Simple & Clean Header */}
        <div className="text-center max-w-xl mx-auto mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider text-pink-700 bg-pink-100 border border-pink-200 mb-1.5">
            <Sparkles className="w-3 h-3 text-pink-500" />
            <span>Cost Estimator</span>
          </div>
          <h2 
            className="text-xl sm:text-2xl lg:text-3xl font-black text-black tracking-tight"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Instant Event{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600">
              Budget Calculator
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Controls Column (7 cols) - Simplified */}
          <div className="lg:col-span-7 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm space-y-4">
            
            {/* 1. Event Type */}
            <div>
              <label className="text-[11px] font-extrabold uppercase tracking-wider text-black block mb-1.5">
                1. Select Event Type
              </label>
              <div className="grid grid-cols-2 gap-2">
                {eventTypes.map((et) => {
                  const isSelected = eventType === et.id;
                  return (
                    <button
                      key={et.id}
                      onClick={() => setEventType(et.id)}
                      className={`py-2 px-2.5 sm:px-3 rounded-xl text-xs text-left border transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'border-pink-600 bg-pink-50 text-black font-extrabold shadow-sm'
                          : 'border-slate-300 bg-white hover:border-pink-400 text-black font-bold'
                      }`}
                    >
                      <span className="truncate text-[11px] sm:text-xs">{et.name}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-pink-600 shrink-0 ml-1 stroke-[3]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Guest Count */}
            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="text-[11px] font-extrabold uppercase tracking-wider text-black">
                  2. Guest Count
                </label>
                <span className="px-2.5 py-0.5 rounded-full text-xs font-black text-black bg-pink-100 border border-pink-300">
                  {guests} Persons
                </span>
              </div>
              <input
                type="range"
                min="100"
                max="2500"
                step="50"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                className="w-full h-1.5 bg-pink-100 rounded-lg appearance-none cursor-pointer accent-pink-600"
              />
            </div>

            {/* 3. Celebrity / Artist Tier */}
            <div>
              <label className="text-[11px] font-extrabold uppercase tracking-wider text-black block mb-1.5">
                3. Celebrity / Artist Tier
              </label>
              <div className="grid grid-cols-2 gap-2">
                {celebTiers.map((c) => {
                  const isSelected = celebTier === c.id;
                  return (
                    <button
                      key={c.id}
                      onClick={() => setCelebTier(c.id)}
                      className={`py-2 px-2.5 sm:px-3 rounded-xl text-xs text-left border transition-all flex items-center justify-between cursor-pointer ${
                        isSelected
                          ? 'border-pink-600 bg-pink-50 text-black font-extrabold shadow-sm'
                          : 'border-slate-300 bg-white hover:border-pink-400 text-black font-bold'
                      }`}
                    >
                      <span className="truncate text-[11px] sm:text-xs">{c.label}</span>
                      {isSelected && <Check className="w-3.5 h-3.5 text-pink-600 shrink-0 ml-1 stroke-[3]" />}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 4. Production Level */}
            <div>
              <label className="text-[11px] font-extrabold uppercase tracking-wider text-black block mb-1.5">
                4. Production Level
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                {productionLevels.map((p, pIdx) => {
                  const isSelected = productionLevel === p.id;
                  return (
                    <button
                      key={p.id}
                      onClick={() => setProductionLevel(p.id)}
                      className={`py-2 px-2.5 rounded-xl text-xs text-left border transition-all flex items-center justify-between cursor-pointer ${
                        pIdx === 2 ? 'col-span-2 sm:col-span-1' : ''
                      } ${
                        isSelected
                          ? 'border-pink-600 bg-pink-50 text-black font-extrabold shadow-sm'
                          : 'border-slate-300 bg-white hover:border-pink-400 text-black font-bold'
                      }`}
                    >
                      <span className="truncate text-[11px] sm:text-xs">{p.label}</span>
                      {isSelected && <Check className="w-3 h-3 text-pink-600 shrink-0 ml-1 stroke-[3]" />}
                    </button>
                  );
                })}
              </div>
            </div>

          </div>

          {/* Result Card (5 cols) - Streamlined */}
          <div className="lg:col-span-5 bg-white rounded-2xl p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col justify-between space-y-4">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-pink-700 block mb-1">
                Estimated Turnkey Cost
              </span>

              {/* Formatted Price in Playfair Display serif */}
              <div className="mb-3">
                <h3 
                  className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-rose-600 tracking-tight"
                  style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
                >
                  {formatINR(estimatedMin)}
                </h3>
                <span className="text-xs text-black font-bold block mt-0.5">
                  Range: {formatINR(estimatedMin)} – {formatINR(estimatedMax)}
                </span>
              </div>

              {/* Simple Breakdown Table */}
              <div className="bg-slate-50/90 rounded-xl p-3.5 border border-slate-200 text-xs text-black space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-black font-bold">Event:</span>
                  <strong className="text-black font-black">{selectedEvent.name}</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-black font-bold">Guests:</span>
                  <strong className="text-black font-black">{guests} Persons</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-black font-bold">Artist / Host:</span>
                  <strong className="text-black font-black">{selectedCeleb.label}</strong>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-black font-bold">Setup:</span>
                  <strong className="text-black font-black">{selectedProd.label}</strong>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA Button */}
            <button
              onClick={handleWhatsAppQuote}
              className="w-full py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r from-pink-500 to-rose-600 hover:brightness-105 active:scale-95 shadow-sm shadow-pink-500/20 transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-white" />
              <span>Send Estimate to WhatsApp</span>
            </button>
          </div>

        </div>

      </div>
    </section>
  );
}
