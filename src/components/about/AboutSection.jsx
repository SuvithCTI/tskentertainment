import React from 'react';
import { 
  Award, 
  Sparkles,
  CalendarCheck,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Tv,
  ArrowRight
} from 'lucide-react';
import Instagram from '../common/InstagramIcon';
import { BRAND_DATA } from '../../data/eventData';
import { useTheme } from '../../context/ThemeContext';

export default function AboutSection({ onOpenBookingModal }) {
  const { currentTheme } = useTheme();

  const pillars = [
    { 
      num: "01",
      renderEmblem: () => (
        <div className="relative w-12 h-12 rounded-2xl p-0.5 bg-gradient-to-br from-[#FFE58F] via-[#D4AF37] to-[#8C6D23] shadow-[0_6px_14px_rgba(212,175,55,0.32)] group-hover:scale-110 transition-transform duration-300">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-br from-[#1C1812] via-[#2A2318] to-[#120F0B] flex items-center justify-center relative overflow-hidden">
            <div className="absolute -top-3 -left-3 w-7 h-7 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-[1px] pointer-events-none" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" fill="none">
              <defs>
                <linearGradient id="goldMicGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF4D0" />
                  <stop offset="50%" stopColor="#E5B94E" />
                  <stop offset="100%" stopColor="#9E7623" />
                </linearGradient>
              </defs>
              <rect x="9" y="3" width="6" height="10" rx="3" fill="url(#goldMicGrad)" stroke="#5A4010" strokeWidth="0.5" />
              <path d="M6 10C6 13.3137 8.68629 16 12 16C15.3137 16 18 13.3137 18 10" stroke="url(#goldMicGrad)" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M12 16V20" stroke="url(#goldMicGrad)" strokeWidth="1.8" strokeLinecap="round" />
              <path d="M8 20H16" stroke="url(#goldMicGrad)" strokeWidth="1.8" strokeLinecap="round" />
              <circle cx="17" cy="5" r="1.2" fill="#FFEAA7" />
            </svg>
          </div>
        </div>
      ),
      tag: "Zero Middleman Cut",
      title: "Direct TV & Cine Artists", 
      desc: "Direct personal liaison with Vijay TV, KPY standup comics, Super Singer vocalists, and Kollywood cinema stars for guaranteed appearances without broker markups.",
      highlight: "150+ Direct Artists",
      topBorderGradient: "from-amber-400 to-amber-600",
      pillStyle: "bg-amber-50 text-amber-800 border-amber-200/80",
      benefit: "Direct Artist Management",
      benefitColor: "text-amber-600"
    },
    { 
      num: "02",
      renderEmblem: () => (
        <div className="relative w-12 h-12 rounded-2xl p-0.5 bg-gradient-to-br from-[#E0C3FC] via-[#8A2BE2] to-[#4B0082] shadow-[0_6px_14px_rgba(138,43,226,0.32)] group-hover:scale-110 transition-transform duration-300">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-br from-[#1E112A] via-[#2A1640] to-[#12081C] flex items-center justify-center relative overflow-hidden">
            <div className="absolute -top-3 -left-3 w-7 h-7 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-[1px] pointer-events-none" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" fill="none">
              <defs>
                <linearGradient id="crownGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFF1B8" />
                  <stop offset="50%" stopColor="#E0B034" />
                  <stop offset="100%" stopColor="#9C6B14" />
                </linearGradient>
              </defs>
              <path d="M4 17L5 8L9.5 13L12 6L14.5 13L19 8L20 17H4Z" fill="url(#crownGoldGrad)" stroke="#684206" strokeWidth="0.5" />
              <circle cx="12" cy="6" r="1.2" fill="#FFFFFF" />
              <circle cx="5" cy="8" r="1" fill="#E0B034" />
              <circle cx="19" cy="8" r="1" fill="#E0B034" />
              <rect x="4" y="17" width="16" height="2" rx="1" fill="url(#crownGoldGrad)" />
            </svg>
          </div>
        </div>
      ),
      tag: "Veteran Showrunners",
      title: "15+ Yrs Stage Instinct", 
      desc: "Every wedding sequence, bridal entry, and star night is scripted and paced with television-grade precision so energy never dips and crowds stay cheering.",
      highlight: "Curated Live Scripts",
      topBorderGradient: "from-violet-400 to-indigo-600",
      pillStyle: "bg-indigo-50 text-indigo-800 border-indigo-200/80",
      benefit: "Television Pacing Guarantee",
      benefitColor: "text-indigo-600"
    },
    { 
      num: "03",
      renderEmblem: () => (
        <div className="relative w-12 h-12 rounded-2xl p-0.5 bg-gradient-to-br from-[#A8FF78] via-[#00B4DB] to-[#0083B0] shadow-[0_6px_14px_rgba(0,180,219,0.32)] group-hover:scale-110 transition-transform duration-300">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-br from-[#0B1E24] via-[#0E2931] to-[#071317] flex items-center justify-center relative overflow-hidden">
            <div className="absolute -top-3 -left-3 w-7 h-7 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-[1px] pointer-events-none" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" fill="none">
              <defs>
                <linearGradient id="audioTealGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#B2FEFA" />
                  <stop offset="50%" stopColor="#0ED2F7" />
                  <stop offset="100%" stopColor="#0C758F" />
                </linearGradient>
              </defs>
              <rect x="6" y="3" width="12" height="18" rx="2" fill="url(#audioTealGrad)" stroke="#064352" strokeWidth="0.5" />
              <circle cx="12" cy="7" r="2" fill="#072027" stroke="#38E1FF" strokeWidth="0.8" />
              <circle cx="12" cy="14" r="3.5" fill="#072027" stroke="#38E1FF" strokeWidth="1" />
              <circle cx="12" cy="14" r="1.2" fill="#38E1FF" />
              <path d="M3 12H5" stroke="#38E1FF" strokeWidth="1.5" strokeLinecap="round" />
              <path d="M19 12H21" stroke="#38E1FF" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      ),
      tag: "In-House Infrastructure",
      title: "Turnkey Audio & SFX Rig", 
      desc: "State-of-the-art JBL VTX line array sound, curved 4K P2.6 LED video displays, heavy box trussing, and certified 100% smoke-free cold sparks.",
      highlight: "No Equipment Delays",
      topBorderGradient: "from-teal-400 to-emerald-600",
      pillStyle: "bg-teal-50 text-teal-800 border-teal-200/80",
      benefit: "In-House Sound & 4K Rig",
      benefitColor: "text-teal-600"
    },
    { 
      num: "04",
      renderEmblem: () => (
        <div className="relative w-12 h-12 rounded-2xl p-0.5 bg-gradient-to-br from-[#FFA07A] via-[#FF1493] to-[#8B0000] shadow-[0_6px_14px_rgba(255,20,147,0.32)] group-hover:scale-110 transition-transform duration-300">
          <div className="w-full h-full rounded-[14px] bg-gradient-to-br from-[#290B17] via-[#380E20] to-[#17040C] flex items-center justify-center relative overflow-hidden">
            <div className="absolute -top-3 -left-3 w-7 h-7 bg-gradient-to-br from-white/40 to-transparent rounded-full blur-[1px] pointer-events-none" />
            <svg viewBox="0 0 24 24" className="w-5 h-5 drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)]" fill="none">
              <defs>
                <linearGradient id="applauseRoseGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#FFE0E9" />
                  <stop offset="50%" stopColor="#FF6B95" />
                  <stop offset="100%" stopColor="#C41C48" />
                </linearGradient>
              </defs>
              <circle cx="12" cy="12" r="8" fill="url(#applauseRoseGrad)" stroke="#5E0920" strokeWidth="0.5" />
              <path d="M12 8.5C10.5 6.5 7.5 7.5 7.5 9.8C7.5 12.4 12 15.5 12 15.5C12 15.5 16.5 12.4 16.5 9.8C16.5 7.5 13.5 6.5 12 8.5Z" fill="#FFFFFF" />
              <path d="M12 2V3.5M12 20.5V22M2 12H3.5M20.5 12H22" stroke="#FFB6C1" strokeWidth="1.2" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      ),
      tag: "Uncompromising Quality",
      title: "100% Applause Promise", 
      desc: "From South Indian temple muhurthams to 5,000+ guest arena galas, we guarantee unforgettable standing ovations, joyful guests, and flawless execution.",
      highlight: "Standing Ovations",
      topBorderGradient: "from-rose-400 to-pink-600",
      pillStyle: "bg-rose-50 text-rose-800 border-rose-200/80",
      benefit: "100% Standing Ovation",
      benefitColor: "text-rose-600"
    }
  ];

  const openWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Actor TSK & Team! I would like to schedule an event consultation for my upcoming celebration. Please share availability.`
    );
    window.open(`https://wa.me/${BRAND_DATA.contact.whatsapp}?text=${text}`, '_blank');
  };

  return (
    <div className="w-full text-slate-800 select-none">
      
      {/* =========================================================================
          SECTION 1: CRISP LUXURY ALABASTER & PLATINUM SHIMMER (THE FOUNDER SPOTLIGHT)
         ========================================================================= */}
      <section className="relative w-full py-16 sm:py-20 lg:py-0 lg:min-h-[100dvh] flex flex-col justify-center overflow-hidden bg-gradient-to-b from-[#FFFFFF] via-[#F7F9FC] to-[#ECF1F7] pt-20 pb-10 sm:pt-28 sm:pb-12 lg:pt-24 lg:pb-8 border-b border-slate-200/80">
        
        {/* Soft Golden & Rose Ambient Glow Flares */}
        <div 
          className="absolute top-1/4 left-1/4 -translate-x-1/2 w-[650px] h-[650px] rounded-full blur-[170px] opacity-20 pointer-events-none"
          style={{ backgroundColor: currentTheme.accent }}
        />
        <div className="absolute top-3/4 right-10 w-[500px] h-[500px] rounded-full blur-[150px] opacity-15 bg-amber-300 pointer-events-none" />

        <div className="relative z-10 w-full max-w-[1680px] mx-auto px-4 sm:px-10 lg:px-14 xl:px-20 my-auto">
          
          {/* Simple Compact Header with Refined Sagona Heading Size */}
          <div className="text-center max-w-2xl mx-auto mb-6 lg:mb-7">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] mb-2 bg-white/95 border border-slate-200/90 text-amber-800 shadow-xs font-sans-luxury">
              <Award className="w-3.5 h-3.5 text-amber-600" />
              <span>Founder & Creative Director</span>
            </div>

            <h1 className="font-sagona text-2xl sm:text-3xl md:text-4xl lg:text-[42px] xl:text-[46px] font-normal tracking-tight text-slate-900 leading-tight">
              Spearheaded by{' '}
              <span className={`font-sagona font-bold text-transparent bg-clip-text bg-gradient-to-r ${currentTheme.gradient}`}>
                Actor TSK
              </span>
            </h1>
            <p className="mt-1.5 text-xs sm:text-sm lg:text-[15px] text-slate-600 font-sans-luxury font-normal max-w-xl mx-auto leading-relaxed px-2">
              15+ years across Tamil cinema, Vijay TV, and South India's grandest stages.
            </p>
          </div>

          {/* Founder Section Grid - Wide Screen Responsive Alignment */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center">
            
            {/* LEFT: HIS OFFICIAL STAGE IMAGE (5 Cols - Sits Elegantly on the Left) */}
            <div className="lg:col-span-5 flex flex-col items-center lg:items-start justify-center">
              <div className="relative w-full max-w-[320px] xs:max-w-[360px] sm:max-w-[400px] lg:max-w-[440px] xl:max-w-[480px] rounded-3xl p-1.5 bg-gradient-to-b from-amber-400 via-rose-400 to-purple-500 shadow-2xl group">
                <div className="relative aspect-[4/5] max-h-[380px] xs:max-h-[420px] sm:max-h-[460px] xl:max-h-[500px] w-full rounded-[22px] overflow-hidden bg-slate-950">
                  <img
                    src="/images/founder/actor_tsk.jpg"
                    alt="Actor TSK - Trichy Saravanakumar"
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  />

                  {/* Subtle Scrim */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent pointer-events-none" />

                  {/* Top-Left: TV Host Live Badge */}
                  <div className="absolute top-3 left-3 sm:top-3.5 sm:left-3.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-bold text-amber-300 shadow-sm font-sans-luxury">
                    <Tv className="w-3.5 h-3.5 text-amber-400" />
                    <span>Vijay TV Star Host</span>
                  </div>

                  {/* Top-Right: Embedded Instagram Handle Link */}
                  <a
                    href={BRAND_DATA.founder.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="absolute top-3 right-3 sm:top-3.5 sm:right-3.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/80 hover:bg-black/95 backdrop-blur-md border border-white/20 text-[11px] sm:text-xs font-bold text-pink-300 hover:text-white transition-all shadow-sm group/ig font-sans-luxury"
                  >
                    <Instagram className="w-3.5 h-3.5 text-pink-400 group-hover/ig:scale-110 transition-transform" />
                    <span>@tsk_actor</span>
                    <ExternalLink className="w-2.5 h-2.5 opacity-70" />
                  </a>

                  {/* Bottom Overlay Label with Sagona Typography */}
                  <div className="absolute bottom-3 left-4 right-4 sm:bottom-4 sm:left-5 sm:right-5 z-10 text-white space-y-1">
                    <div className="flex items-center gap-1.5 sm:gap-2">
                      <h3 className="font-sagona text-lg sm:text-2xl font-bold text-white tracking-tight truncate">Trichy Saravanakumar</h3>
                      <CheckCircle2 className="w-4 h-4 text-blue-400 fill-blue-400 shrink-0" />
                    </div>
                    <p className="text-xs sm:text-sm text-amber-300 font-semibold font-sans-luxury">
                      Actor TSK • Founder & Showrunner
                    </p>
                    <p className="text-[10px] sm:text-[11px] text-slate-300 line-clamp-1 font-sans-luxury">
                      Tamil Film Actor • KPY Stardom • Showbiz Master
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT: STORY, PHILOSOPHY & QUOTE (7 Cols - Expanded to Fill Width Cleanly) */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left w-full">
              
              {/* Director's Sagona Editorial Quote - Refined Readable Font Size */}
              <div className="p-3.5 sm:p-5 lg:p-6 rounded-2xl bg-white/95 border border-slate-200/90 shadow-sm relative text-left">
                <span className="font-sagona text-3xl sm:text-5xl text-amber-400/50 absolute -top-1 left-3 select-none leading-none">“</span>
                <p className="font-sagona text-xs sm:text-base lg:text-lg xl:text-xl italic text-slate-800 leading-relaxed pl-4 sm:pl-5 font-normal">
                  "In live events, we bring the exact same electric energy, timing, and crowd connection from television. We guarantee you the applause!"
                </p>
                <p className="font-sans-luxury text-[10px] sm:text-xs font-extrabold text-amber-600 text-right mt-1.5 sm:mt-2 uppercase tracking-[0.2em]">
                  — Actor TSK
                </p>
              </div>

              {/* Concise Narrative with Crisp Typography */}
              <p className="font-sans-luxury text-xs sm:text-sm lg:text-[15px] text-slate-600 leading-relaxed font-normal">
                Founded by Tamil cinema actor & Vijay TV celebrity host <strong className="text-slate-900 font-semibold">Actor TSK</strong>. Bringing 15+ years of showbiz stagecraft, direct artist access, and turnkey production to weddings, star nights, and corporate galas with zero broker delays.
              </p>

              {/* Micro Stats Banner with Sagona Numbers */}
              <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-1 w-full">
                <div className="p-2.5 sm:p-3.5 rounded-2xl bg-white/95 border border-slate-200/80 text-center lg:text-left shadow-xs">
                  <span className="font-sagona text-lg sm:text-2xl lg:text-3xl font-bold text-slate-900 block leading-tight">15+</span>
                  <span className="font-sans-luxury text-[10px] sm:text-xs text-slate-500 font-medium tracking-tight truncate block">Years in Showbiz</span>
                </div>
                <div className="p-2.5 sm:p-3.5 rounded-2xl bg-white/95 border border-slate-200/80 text-center lg:text-left shadow-xs">
                  <span className="font-sagona text-lg sm:text-2xl lg:text-3xl font-bold text-amber-600 block leading-tight">850+</span>
                  <span className="font-sans-luxury text-[10px] sm:text-xs text-slate-500 font-medium tracking-tight truncate block">Grand Events</span>
                </div>
                <div className="p-2.5 sm:p-3.5 rounded-2xl bg-white/95 border border-slate-200/80 text-center lg:text-left shadow-xs">
                  <span className="font-sagona text-lg sm:text-2xl lg:text-3xl font-bold text-rose-600 block leading-tight">100%</span>
                  <span className="font-sans-luxury text-[10px] sm:text-xs text-slate-500 font-medium tracking-tight truncate block">Applause Rate</span>
                </div>
              </div>

              {/* Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-2.5 sm:gap-3.5 w-full sm:w-auto">
                <button
                  onClick={onOpenBookingModal}
                  className={`w-full sm:w-auto px-6 py-3 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-white bg-gradient-to-r ${currentTheme.gradient} hover:brightness-110 shadow-lg shadow-amber-500/20 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 font-sans-luxury cursor-pointer`}
                >
                  <CalendarCheck className="w-4 h-4" />
                  <span>Plan Event with Actor TSK</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={openWhatsApp}
                  className="w-full sm:w-auto px-5 py-3 rounded-full text-xs font-bold uppercase tracking-[0.14em] text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-900/20 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 font-sans-luxury cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Enquiry</span>
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECTION 2: ELEGANT SKY BLUE & BESPOKE LUXURY (4 PILLARS OF SHOWMANSHIP)
         ========================================================================= */}
      <section className="py-12 sm:py-14 lg:py-16 bg-gradient-to-b from-[#E0F2FE] via-[#EDF8FF] to-[#DBEEFD] border-y border-sky-200/70 relative overflow-hidden">
        
        {/* Soft Ambient Sky Blue & Aquamarine Flares */}
        <div className="absolute top-1/2 right-1/4 w-[500px] h-[500px] rounded-full blur-[160px] opacity-35 bg-sky-300 pointer-events-none" />
        <div className="absolute bottom-6 left-10 w-[450px] h-[450px] rounded-full blur-[140px] opacity-25 bg-cyan-200 pointer-events-none" />

        <div className="w-full max-w-[1680px] mx-auto px-4 sm:px-10 lg:px-14 xl:px-20 relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-6 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] mb-2 bg-white/95 border border-sky-200/90 text-sky-900 shadow-xs font-sans-luxury">
              <Sparkles className="w-3.5 h-3.5 text-sky-600" />
              <span>The TSK Advantage</span>
            </div>

            <h2 className="font-sagona text-2xl sm:text-3xl lg:text-[38px] font-normal tracking-tight text-slate-900 leading-tight">
              4 Pillars of <span className="italic font-normal text-sky-700">Showmanship</span>
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600 font-sans-luxury font-normal max-w-lg mx-auto leading-relaxed px-2">
              Why celebrities, corporate enterprises, and royal families entrust their most momentous occasions to us.
            </p>
          </div>

          {/* 4 Architectural Floating White Cards (2 COLUMNS IN MOBILE VIEW) */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-6 xl:gap-7">
            {pillars.map((pillar, i) => {
              return (
                <div 
                  key={i} 
                  className="group bg-white/95 rounded-2xl sm:rounded-3xl p-3 sm:p-6 border border-sky-100/90 hover:border-sky-400 shadow-[0_4px_20px_-4px_rgba(14,165,233,0.08)] hover:shadow-[0_16px_36px_-8px_rgba(14,165,233,0.18)] transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5 relative overflow-hidden backdrop-blur-sm"
                >
                  {/* Subtle Top Gradient Progress Line */}
                  <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${pillar.topBorderGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

                  {/* Watermark Numeral */}
                  <span className="font-sagona text-2xl sm:text-5xl font-bold text-slate-100/90 group-hover:text-amber-100/80 transition-colors duration-300 absolute top-2.5 right-2.5 sm:top-4 sm:right-5 select-none pointer-events-none">
                    {pillar.num}
                  </span>

                  <div className="space-y-2 sm:space-y-3 relative z-10">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-1.5 sm:gap-2">
                      {/* Realistic 3D Luxury Emblem */}
                      <div className="scale-90 sm:scale-100 origin-top-left">
                        {pillar.renderEmblem()}
                      </div>

                      <span className={`text-[8.5px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 sm:px-2.5 sm:py-0.5 rounded-full border shadow-2xs font-sans-luxury truncate max-w-full ${pillar.pillStyle}`}>
                        {pillar.highlight}
                      </span>
                    </div>

                    <div className="pt-0.5">
                      <span className="font-sans-luxury text-[9px] sm:text-[11px] font-bold uppercase tracking-[0.1em] sm:tracking-[0.14em] text-slate-400 block mb-0.5 truncate">
                        {pillar.tag}
                      </span>
                      <h3 className="font-sagona text-xs sm:text-lg lg:text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors tracking-tight leading-snug line-clamp-2">
                        {pillar.title}
                      </h3>
                    </div>

                    <p className="font-sans-luxury text-[10px] sm:text-xs text-slate-600 leading-snug sm:leading-relaxed font-normal line-clamp-3 sm:line-clamp-none">
                      {pillar.desc}
                    </p>
                  </div>

                  {/* Unique Value Promise Footer */}
                  <div className="pt-2 sm:pt-3.5 border-t border-slate-100 mt-2.5 sm:mt-4 flex items-center gap-1.5 text-[10px] sm:text-xs font-bold text-slate-700 relative z-10 font-sans-luxury">
                    <CheckCircle2 className={`w-3 h-3 sm:w-3.5 sm:h-3.5 shrink-0 ${pillar.benefitColor}`} />
                    <span className="text-[9.5px] sm:text-xs truncate">{pillar.benefit}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Grand Climax Banner - Ultra-Lite Whisper Pink Luxury Theme */}
          <div className="mt-10 sm:mt-16 bg-gradient-to-br from-white via-[#FFF9FB] to-[#FFF3F6] rounded-3xl p-5 sm:p-8 lg:p-12 border border-pink-100/90 shadow-[0_8px_30px_-6px_rgba(244,114,182,0.08)] text-center max-w-4xl mx-auto relative overflow-hidden">
            {/* Subtle Whisper Rose Ambient Glow */}
            <div 
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full blur-[140px] opacity-10 bg-pink-200 pointer-events-none"
            />

            <div className="relative z-10 space-y-3.5 sm:space-y-4">
              <span className="inline-block px-3.5 py-1.5 rounded-full text-[10px] sm:text-[11px] font-bold uppercase tracking-widest bg-white border border-pink-100 text-rose-700 shadow-2xs font-sans-luxury">
                Direct Consultation with Actor TSK Desk
              </span>

              <h3 className="font-sagona text-xl sm:text-3xl lg:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                Ready to Create an <span className="italic font-normal text-rose-600">Unforgettable Event?</span>
              </h3>

              <p className="font-sans-luxury text-xs sm:text-sm text-slate-600 max-w-xl mx-auto leading-relaxed">
                Whether you are planning a grand palatial wedding, an arena celebrity concert, or an executive corporate gala, let's script an applause-worthy experience.
              </p>

              <div className="pt-2 sm:pt-3 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-2.5 sm:gap-4 w-full sm:w-auto">
                <button
                  onClick={onOpenBookingModal}
                  className={`w-full sm:w-auto px-7 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r ${currentTheme.gradient} hover:brightness-110 shadow-lg shadow-amber-500/25 transition-all hover:scale-105 active:scale-95 font-sans-luxury cursor-pointer`}
                >
                  Book Your Event Consultation
                </button>

                <button
                  onClick={openWhatsApp}
                  className="w-full sm:w-auto px-6 py-3.5 rounded-full text-xs font-bold uppercase tracking-wider text-white bg-emerald-600 hover:bg-emerald-500 shadow-md shadow-emerald-900/20 flex items-center justify-center gap-2 transition-all hover:scale-105 active:scale-95 font-sans-luxury cursor-pointer"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>WhatsApp Actor TSK Desk</span>
                </button>
              </div>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
