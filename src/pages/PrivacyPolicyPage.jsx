import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Lock, ArrowLeft, Mail, Phone, CalendarCheck, CheckCircle2 } from 'lucide-react';
import { BRAND_DATA } from '../data/eventData';

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-24 sm:pt-28 pb-20 bg-gradient-to-b from-[#F9FAFC] via-[#FFFFFF] to-[#F1F4F9] min-h-screen">
      <div className="w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb */}
        <Link 
          to="/"
          className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-black hover:text-pink-600 transition-colors mb-6 group"
        >
          <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
          <span>Back to Home</span>
        </Link>

        {/* Page Header */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-purple-900 bg-purple-100 border border-purple-200 mb-3">
            <ShieldCheck className="w-4 h-4 text-purple-600" />
            <span>Official Legal Notice</span>
          </div>

          <h1 
            className="text-2xl sm:text-4xl font-black text-black tracking-tight mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Privacy Policy
          </h1>

          <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed">
            Effective Date: January 1, 2026 • Last Updated: October 2026
          </p>
          <p className="text-xs sm:text-sm text-black font-medium leading-relaxed mt-2">
            At <strong>TSK Entertainments</strong> (founded by Actor Trichy Saravanakumar / Actor TSK), we deeply respect your confidentiality. Whether planning an intimate destination wedding, a televised corporate gala, or a celebrity arena concert, we ensure your personal details and private event arrangements are protected with uncompromising discretion.
          </p>
        </div>

        {/* Main Content Articles */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-sm space-y-8 text-black">
          
          {/* Section 1 */}
          <section className="space-y-3">
            <h2 
              className="text-lg sm:text-xl font-black text-black flex items-center gap-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <span className="w-6 h-6 rounded-lg bg-pink-100 text-pink-700 flex items-center justify-center text-xs font-black">1</span>
              Information We Collect
            </h2>
            <p className="text-xs sm:text-sm font-medium text-black leading-relaxed">
              When inquiring, scheduling a consultation, or reserving production services through our website or direct WhatsApp line, we may collect:
            </p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs font-bold text-black pt-1">
              <li className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Host / Organizer Name & Title</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Phone / WhatsApp Contact Numbers</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Event Dates, Venues & Guest Counts</span>
              </li>
              <li className="flex items-center gap-2 p-2.5 rounded-xl bg-slate-50 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                <span>Celebrity / Artist Roster Preferences</span>
              </li>
            </ul>
          </section>

          {/* Section 2 */}
          <section className="space-y-3 pt-4 border-t border-slate-200">
            <h2 
              className="text-lg sm:text-xl font-black text-black flex items-center gap-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <span className="w-6 h-6 rounded-lg bg-purple-100 text-purple-700 flex items-center justify-center text-xs font-black">2</span>
              How We Use Your Event Data
            </h2>
            <p className="text-xs sm:text-sm font-medium text-black leading-relaxed">
              All information collected is strictly utilized to provide world-class event curation, including:
            </p>
            <ul className="space-y-2 text-xs font-semibold text-black">
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-black">•</span>
                <span>Generating tailored turnkey budget breakdowns and stagecraft proposals.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-black">•</span>
                <span>Coordinating artist dates with Kollywood stars, Vijay TV talents, musicians, and MCs.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-black">•</span>
                <span>Managing venue permits, truss engineering specs, LED screen displays, and sound setups.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-purple-600 font-black">•</span>
                <span>Direct real-time WhatsApp logistics with your core event planning committee.</span>
              </li>
            </ul>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-4 border-t border-slate-200">
            <h2 
              className="text-lg sm:text-xl font-black text-black flex items-center gap-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-black">3</span>
              Event Photography & Social Media Recaps
            </h2>
            <p className="text-xs sm:text-sm font-medium text-black leading-relaxed">
              As a showbiz and live entertainment production company, high-definition crowd captures and highlight reels of public galas or open celebrations may be featured on our official Instagram (<strong>@tskentertainments</strong>) and digital portfolio.
            </p>
            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs font-bold text-amber-950">
              <strong>Private Event Privacy Clause:</strong> For private family weddings, VVIP gatherings, or confidential corporate summits, clients can request a 100% Non-Disclosure Agreement (NDA). In such cases, zero footage or photographs will ever be published online.
            </div>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-4 border-t border-slate-200">
            <h2 
              className="text-lg sm:text-xl font-black text-black flex items-center gap-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-black">4</span>
              Zero Data Selling & Strict Confidentiality
            </h2>
            <p className="text-xs sm:text-sm font-medium text-black leading-relaxed">
              We never sell, rent, lease, or distribute your personal details, contact lists, or private celebration specifics to any third-party marketing brokers or advertising networks. Information is only shared with direct operational technicians (e.g., sound engineers, venue security) strictly on a need-to-know basis for event execution.
            </p>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-4 border-t border-slate-200">
            <h2 
              className="text-lg sm:text-xl font-black text-black flex items-center gap-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center text-xs font-black">5</span>
              Direct Inquiries & Privacy Contact Desk
            </h2>
            <p className="text-xs sm:text-sm font-medium text-black leading-relaxed">
              For questions concerning this Privacy Policy, NDAs, or to update your event contact records, reach out directly to our central coordination desk:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a 
                href={`tel:${BRAND_DATA.contact.phone}`} 
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-black flex items-center gap-3 transition-colors text-black"
              >
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <div className="text-xs">
                  <span className="text-[10px] text-black font-extrabold block uppercase tracking-wider">Direct Hotline</span>
                  <strong className="text-black font-black">{BRAND_DATA.contact.phoneDisplay}</strong>
                </div>
              </a>

              <a 
                href={`mailto:${BRAND_DATA.contact.email}`} 
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-black flex items-center gap-3 transition-colors text-black"
              >
                <Mail className="w-4 h-4 text-purple-600 shrink-0" />
                <div className="text-xs">
                  <span className="text-[10px] text-black font-extrabold block uppercase tracking-wider">Official Email</span>
                  <strong className="text-black font-black">{BRAND_DATA.contact.email}</strong>
                </div>
              </a>
            </div>
          </section>

        </div>

      </div>
    </div>
  );
}
