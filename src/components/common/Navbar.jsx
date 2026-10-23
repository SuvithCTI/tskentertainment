import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  Menu, 
  X, 
  Crown,
  Phone,
  MessageCircle,
  CalendarCheck,
  ChevronRight,
  Home,
  Info,
  Layers,
  Image as ImageIcon
} from 'lucide-react';
import Instagram from './InstagramIcon';
import { BRAND_DATA } from '../../data/eventData';
import { useTheme } from '../../context/ThemeContext';

export default function Navbar({ onOpenBookingModal }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentTheme } = useTheme();
  const location = useLocation();

  const isDarkHero = location.pathname === '/' && !isScrolled;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change & prevent background scroll when open
  useEffect(() => {
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [location.pathname]);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  const leftNavLinks = [
    { to: '/', label: 'HOME', icon: Home, hasDot: false },
    { to: '/about', label: 'ABOUT US', icon: Info, hasDot: true },
    { to: '/services', label: 'SERVICES', icon: Layers, hasDot: true },
  ];

  const rightNavLinks = [
    { to: '/gallery', label: 'GALLERY', icon: ImageIcon, hasDot: true },
    { to: '/contact', label: 'CONTACT US', icon: Phone, hasDot: false },
  ];

  const allNavLinks = [...leftNavLinks, ...rightNavLinks];

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isDarkHero 
            ? 'bg-gradient-to-b from-black/85 via-black/50 to-transparent py-3 sm:py-5 border-b border-white/10'
            : 'bg-white/95 backdrop-blur-xl py-2.5 sm:py-3.5 border-b border-slate-200/80 shadow-xs'
        }`}
      >
        <div className="w-full max-w-[1550px] mx-auto px-3.5 sm:px-8 lg:px-12">
          <div className="flex items-center justify-between">
            
            {/* DESKTOP: LEFT NAVIGATION LINKS */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-8 flex-1">
              {leftNavLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-xs uppercase tracking-[0.22em] font-medium transition-colors flex items-center gap-2 ${
                      isActive
                        ? isDarkHero
                          ? 'text-amber-400 font-bold drop-shadow-sm'
                          : 'text-amber-600 font-bold'
                        : isDarkHero
                        ? 'text-slate-200/90 hover:text-white'
                        : 'text-slate-700 hover:text-amber-600'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  {link.hasDot && (
                    <span className={`text-[9px] ${isDarkHero ? 'text-white/40' : 'text-slate-300'}`}>•</span>
                  )}
                </NavLink>
              ))}
            </nav>

            {/* MOBILE ONLY: LEFT CORNER NAV BAR MENU TOGGLE */}
            <div className="flex lg:hidden items-center flex-1 justify-start">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
                className={`p-1.5 sm:p-2 rounded-xl transition-all active:scale-95 cursor-pointer ${
                  isDarkHero 
                    ? 'bg-white/15 text-white border border-white/20 hover:bg-white/25' 
                    : 'bg-slate-100 text-slate-800 border border-slate-200 hover:bg-slate-200'
                }`}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>

            {/* CENTER: HAUTE COUTURE BRAND TITLE */}
            <Link to="/" className="text-center group px-2 sm:px-4 py-0.5 flex-shrink-0">
              <span className={`font-['Playfair_Display',serif] text-lg sm:text-2xl md:text-3xl uppercase tracking-[0.3em] sm:tracking-[0.42em] font-bold block transition-transform group-hover:scale-[1.02] ${
                isDarkHero ? 'text-white drop-shadow-[0_2px_16px_rgba(0,0,0,0.9)]' : 'text-slate-900'
              }`}>
                TSK
              </span>
              <span className={`block text-[7.5px] sm:text-[9px] uppercase tracking-[0.38em] sm:tracking-[0.55em] font-semibold -mt-1 sm:-mt-0.5 ${
                isDarkHero ? 'text-amber-200/90' : 'text-amber-600'
              }`}>
                ENTERTAINMENTS
              </span>
            </Link>

            {/* DESKTOP: RIGHT NAVIGATION LINKS, ICONS & BOOK PILL */}
            <div className="hidden lg:flex items-center justify-end gap-5 xl:gap-7 flex-1">
              {rightNavLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) =>
                    `text-xs uppercase tracking-[0.22em] font-medium transition-colors flex items-center gap-2 ${
                      isActive
                        ? isDarkHero
                          ? 'text-amber-400 font-bold drop-shadow-sm'
                          : 'text-amber-600 font-bold'
                        : isDarkHero
                        ? 'text-slate-200/90 hover:text-white'
                        : 'text-slate-700 hover:text-amber-600'
                    }`
                  }
                >
                  <span>{link.label}</span>
                  {link.hasDot && (
                    <span className={`text-[9px] ${isDarkHero ? 'text-white/40' : 'text-slate-300'}`}>•</span>
                  )}
                </NavLink>
              ))}

              {/* Subtle Vertical Divider */}
              <div className={`h-4 w-[1px] ${isDarkHero ? 'bg-white/20' : 'bg-slate-200'}`} />

              {/* Instagram Circle */}
              <a
                href={BRAND_DATA.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-7 h-7 rounded-full flex items-center justify-center transition-colors shadow-xs backdrop-blur-sm ${
                  isDarkHero 
                    ? 'bg-black/40 border border-white/25 hover:border-pink-400/70 text-slate-200 hover:text-pink-300' 
                    : 'bg-pink-50 border border-pink-200 hover:bg-pink-100 text-pink-600'
                }`}
                title="Instagram @tskentertainments"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>

              {/* Book Event Pill */}
              <button
                onClick={onOpenBookingModal}
                className={`flex items-center gap-2.5 pl-3.5 pr-1.5 py-1 rounded-full text-xs font-semibold tracking-wider transition-all hover:scale-105 active:scale-95 shadow-md cursor-pointer ${
                  isDarkHero 
                    ? 'bg-white/10 hover:bg-white/20 border border-white/20 text-white' 
                    : 'bg-gradient-to-r from-amber-500 to-orange-500 text-white'
                }`}
              >
                <span className="uppercase text-[11px] tracking-[0.16em]">Book</span>
                <span className={`w-5 h-5 rounded-full font-black text-[10px] flex items-center justify-center shadow-sm ${
                  isDarkHero ? 'bg-amber-400 text-slate-950' : 'bg-white text-amber-700'
                }`}>
                  ✦
                </span>
              </button>
            </div>

            {/* MOBILE ONLY: RIGHT CORNER WHATSAPP & BOOK BUTTON */}
            <div className="flex lg:hidden items-center justify-end flex-1 gap-2">
              <button
                onClick={onOpenBookingModal}
                className="px-2.5 py-1.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-500 text-white text-[10.5px] font-bold uppercase tracking-wider shadow-sm active:scale-95 transition-transform cursor-pointer"
              >
                Book
              </button>
              <a
                href={`https://wa.me/${BRAND_DATA.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-8 h-8 rounded-full flex items-center justify-center transition-all active:scale-95 shadow-xs ${
                  isDarkHero 
                    ? 'text-emerald-400 bg-white/10 border border-white/15 hover:bg-white/20' 
                    : 'text-emerald-600 bg-emerald-50 border border-emerald-200/80 hover:bg-emerald-100'
                }`}
                title="Quick WhatsApp"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </div>

          </div>
        </div>
      </header>

      {/* MOBILE FULL-DRAWER OVERLAY & MENU */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop Blur */}
          <div 
            className="fixed inset-0 bg-slate-950/70 backdrop-blur-md transition-opacity duration-300"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer Card */}
          <div className="fixed top-16 inset-x-3 max-h-[calc(100dvh-5rem)] overflow-y-auto bg-white rounded-3xl border border-slate-200/90 shadow-2xl p-5 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            
            {/* Header info */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100">
              <div className="flex items-center gap-2">
                <Crown className="w-4 h-4 text-amber-600" />
                <span className="text-xs font-bold uppercase tracking-wider text-slate-900">
                  Actor TSK Entertainments
                </span>
              </div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-amber-800 bg-amber-50 border border-amber-200 px-2 py-0.5 rounded-full">
                South India
              </span>
            </div>

            {/* Navigation links stack */}
            <div className="space-y-1.5">
              {allNavLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    onClick={() => setMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `w-full py-3 px-4 rounded-2xl text-xs font-bold tracking-wider flex items-center justify-between transition-all ${
                        isActive
                          ? `bg-gradient-to-r ${currentTheme.gradient} text-white shadow-md shadow-amber-500/20`
                          : 'bg-slate-50 text-slate-800 hover:bg-slate-100 border border-slate-100'
                      }`
                    }
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-4 h-4" />
                      <span>{link.label}</span>
                    </div>
                    <ChevronRight className="w-3.5 h-3.5 opacity-60" />
                  </NavLink>
                );
              })}
            </div>

            {/* Social & Contact Buttons */}
            <div className="pt-2 grid grid-cols-2 gap-2">
              <a
                href={BRAND_DATA.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-3 rounded-xl bg-pink-50 text-pink-700 border border-pink-200 text-xs font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                <Instagram className="w-4 h-4 text-pink-600" />
                <span>Instagram</span>
              </a>

              <a
                href={`tel:${BRAND_DATA.contact.phone}`}
                className="py-2.5 px-3 rounded-xl bg-slate-100 text-slate-800 border border-slate-200 text-xs font-semibold flex items-center justify-center gap-2 active:scale-95 transition-transform"
              >
                <Phone className="w-3.5 h-3.5 text-slate-700" />
                <span>Call Hotline</span>
              </a>
            </div>

            {/* Big Action Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBookingModal();
              }}
              className={`w-full py-3.5 rounded-2xl bg-gradient-to-r ${currentTheme.gradient} text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-amber-500/25 flex items-center justify-center gap-2 active:scale-95 transition-transform`}
            >
              <CalendarCheck className="w-4 h-4" />
              <span>Book Your Celebration</span>
            </button>

          </div>
        </div>
      )}
    </>
  );
}
