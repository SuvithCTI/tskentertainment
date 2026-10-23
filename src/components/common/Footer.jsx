import React from 'react';
import { Link } from 'react-router-dom';
import { 
  Phone, 
  Mail, 
  MapPin, 
  ArrowUp
} from 'lucide-react';
import Instagram from './InstagramIcon';
import { BRAND_DATA } from '../../data/eventData';

const currentYear = new Date().getFullYear();

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-gradient-to-b from-[#06241c] via-[#041b15] to-[#02110d] text-teal-100/80 border-t border-teal-800/40 pt-12 pb-8 overflow-hidden">
      {/* Ambient Deep Forest & Emerald Teal Glow Orbs */}
      <div className="absolute top-0 left-1/4 w-96 h-96 rounded-full bg-emerald-500/10 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full bg-teal-400/10 blur-[120px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 sm:gap-8 pb-8 border-b border-teal-900/50">
          
          {/* Brand Col */}
          <div className="md:col-span-2 space-y-3.5 text-center sm:text-left flex flex-col items-center sm:items-start">
            {/* Logo in matching luxury serif style */}
            <Link to="/" className="inline-block group">
              <span 
                className="text-2xl sm:text-3xl uppercase tracking-[0.25em] text-white font-bold block transition-transform group-hover:scale-[1.02]"
                style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
              >
                TSK
              </span>
              <span 
                className="block text-[9px] uppercase tracking-[0.45em] text-teal-300 font-semibold -mt-1"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                ENTERTAINMENTS
              </span>
            </Link>

            <p className="text-teal-100/70 text-xs leading-relaxed max-w-sm">
              South India's premier event planning & artist management led by <strong>Actor TSK</strong> (Vijay TV fame). Turnkey weddings, corporate galas & celebrity stagecraft.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={BRAND_DATA.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-teal-950/80 text-teal-300 flex items-center justify-center border border-teal-700/40 hover:bg-teal-400 hover:text-slate-950 hover:border-teal-300 hover:scale-105 transition-all shadow-sm"
                title="Instagram"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${BRAND_DATA.contact.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-lg bg-teal-950/80 text-emerald-300 flex items-center justify-center border border-teal-700/40 hover:bg-emerald-400 hover:text-slate-950 hover:border-emerald-300 hover:scale-105 transition-all shadow-sm"
                title="WhatsApp"
              >
                <Phone className="w-4 h-4" />
              </a>
              <a
                href={`mailto:${BRAND_DATA.contact.email}`}
                className="w-8 h-8 rounded-lg bg-teal-950/80 text-teal-300 flex items-center justify-center border border-teal-700/40 hover:bg-teal-300 hover:text-slate-950 hover:border-teal-200 hover:scale-105 transition-all shadow-sm"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links & Direct Desk in 2 cols on mobile */}
          <div className="grid grid-cols-2 gap-4 md:contents">
            {/* Quick Pages */}
            <div className="space-y-2.5">
              <h4 
                className="text-xs font-bold uppercase tracking-wider text-teal-200"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Pages
              </h4>
              <ul className="space-y-1.5 text-xs text-teal-100/70">
                <li><Link to="/" className="hover:text-teal-300 transition-colors">Home</Link></li>
                <li><Link to="/about" className="hover:text-teal-300 transition-colors">About Us</Link></li>
                <li><Link to="/services" className="hover:text-teal-300 transition-colors">Services</Link></li>
                <li><Link to="/gallery" className="hover:text-teal-300 transition-colors">Gallery</Link></li>
                <li><Link to="/contact" className="hover:text-teal-300 transition-colors">Contact</Link></li>
              </ul>
            </div>

            {/* Quick Contact */}
            <div className="space-y-2.5 text-xs text-teal-100/70">
              <h4 
                className="text-xs font-bold uppercase tracking-wider text-teal-200"
                style={{ fontFamily: "'Cinzel', serif" }}
              >
                Direct Desk
              </h4>
              <p className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <a href={`tel:${BRAND_DATA.contact.phone}`} className="font-semibold text-teal-100 hover:text-teal-300 hover:underline truncate">
                  {BRAND_DATA.contact.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-teal-400 shrink-0" />
                <span className="truncate">{BRAND_DATA.contact.email}</span>
              </p>
              <p className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                <span>Chennai, TN</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-teal-200/60 text-center sm:text-left">
          <p>
            © {currentYear} TSK Entertainments • "{BRAND_DATA.tagline}"
          </p>

          <div className="flex items-center gap-3 text-[11px] text-teal-200/70">
            <Link to="/privacy-policy" className="hover:text-teal-200 hover:underline transition-colors">
              Privacy Policy
            </Link>
            <span>•</span>
            <Link to="/terms-conditions" className="hover:text-teal-200 hover:underline transition-colors">
              Terms & Conditions
            </Link>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-teal-300 hover:text-white font-semibold transition-colors cursor-pointer"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
