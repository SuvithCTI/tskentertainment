import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, ArrowLeft, Phone, Mail, Award, CheckCircle2, AlertCircle } from 'lucide-react';
import { BRAND_DATA } from '../data/eventData';

export default function TermsPage() {
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
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-black uppercase tracking-wider text-amber-900 bg-amber-100 border border-amber-300 mb-3">
            <FileText className="w-4 h-4 text-amber-600" />
            <span>Client Service Agreement</span>
          </div>

          <h1 
            className="text-2xl sm:text-4xl font-black text-black tracking-tight mb-3"
            style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
          >
            Terms & Conditions
          </h1>

          <p className="text-xs sm:text-sm text-black font-semibold leading-relaxed">
            Effective Date: January 1, 2026 • Governed under Chennai, Tamil Nadu Jurisdiction
          </p>
          <p className="text-xs sm:text-sm text-black font-medium leading-relaxed mt-2">
            These terms define the engagement protocol for turnkey event planning, concert stagecraft, and celebrity booking services provided by <strong>TSK Entertainments</strong> under the creative direction of Actor Trichy Saravanakumar (Actor TSK).
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
              Event Booking & Date Reservation
            </h2>
            <p className="text-xs sm:text-sm font-medium text-black leading-relaxed">
              To lock in wedding muhurtham dates, celebrity availability, and stage hardware, bookings are confirmed solely upon receipt of the mutually agreed booking advance retainer and counter-signed engagement contract.
            </p>
            <ul className="space-y-1.5 text-xs font-semibold text-black pt-1">
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Verbal or tentative WhatsApp requests do not constitute a confirmed calendar hold.</span>
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                <span>Final milestone payments must be settled as per the contracted schedule prior to event showtime.</span>
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
              Celebrity & Artist Management Protocols
            </h2>
            <p className="text-xs sm:text-sm font-medium text-black leading-relaxed">
              TSK Entertainments facilitates direct bookings for Kollywood actors, playback singers, Vijay TV comedic stars, and international dancers.
            </p>
            <div className="p-3.5 rounded-xl bg-purple-50 border border-purple-200 text-xs text-purple-950 font-bold space-y-1.5">
              <p>• Hospitality & Rider Compliance: Client agrees to facilitate agreed green room amenities, local transportation, and security escorts for featured talent.</p>
              <p>• Unforeseen Talent Emergency: In the rare event of severe medical incapacity or sudden cinema shoot rescheduling, TSK Entertainments guarantees an equivalent or upgraded celebrity substitute of matching caliber.</p>
            </div>
          </section>

          {/* Section 3 */}
          <section className="space-y-3 pt-4 border-t border-slate-200">
            <h2 
              className="text-lg sm:text-xl font-black text-black flex items-center gap-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <span className="w-6 h-6 rounded-lg bg-amber-100 text-amber-700 flex items-center justify-center text-xs font-black">3</span>
              Technical Production & Venue Rigging
            </h2>
            <p className="text-xs sm:text-sm font-medium text-black leading-relaxed">
              We deploy world-class 4K curved LED walls, German aluminum box trusses, line-array audio, and cold pyro SFX. The host/venue agrees to grant timely venue load-in access (minimum 6–12 hours prior to curtain rise) with adequate 3-phase power supply or DG generator support.
            </p>
          </section>

          {/* Section 4 */}
          <section className="space-y-3 pt-4 border-t border-slate-200">
            <h2 
              className="text-lg sm:text-xl font-black text-black flex items-center gap-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <span className="w-6 h-6 rounded-lg bg-rose-100 text-rose-700 flex items-center justify-center text-xs font-black">4</span>
              Cancellation & Rescheduling
            </h2>
            <p className="text-xs sm:text-sm font-medium text-black leading-relaxed">
              Due to exclusive date blocks and pre-committed technical crews:
            </p>
            <ul className="space-y-2 text-xs font-semibold text-black">
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Notice given more than 30 days prior: Advance may be adjusted toward an alternate mutually available date within 6 months.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Notice within 15 days of event: Advance retainers are non-refundable as stage equipment and artists are blocked exclusively.</span>
              </li>
              <li className="flex items-start gap-2">
                <AlertCircle className="w-4 h-4 text-rose-600 shrink-0 mt-0.5" />
                <span>Force Majeure: Neither party shall be held liable for failure caused by acts of God, extreme cyclones, or statutory government curfews.</span>
              </li>
            </ul>
          </section>

          {/* Section 5 */}
          <section className="space-y-3 pt-4 border-t border-slate-200">
            <h2 
              className="text-lg sm:text-xl font-black text-black flex items-center gap-2"
              style={{ fontFamily: "'Playfair Display', Georgia, serif" }}
            >
              <span className="w-6 h-6 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-black">5</span>
              Jurisdiction & Legal Inquiries
            </h2>
            <p className="text-xs sm:text-sm font-medium text-black leading-relaxed">
              All commercial engagements are executed under Indian Contract Law with exclusive legal jurisdiction in the courts of Chennai, Tamil Nadu.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              <a 
                href={`tel:${BRAND_DATA.contact.phone}`} 
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-black flex items-center gap-3 transition-colors text-black"
              >
                <Phone className="w-4 h-4 text-emerald-600 shrink-0" />
                <div className="text-xs">
                  <span className="text-[10px] text-black font-extrabold block uppercase tracking-wider">Legal Inquiries Desk</span>
                  <strong className="text-black font-black">{BRAND_DATA.contact.phoneDisplay}</strong>
                </div>
              </a>

              <a 
                href={`mailto:${BRAND_DATA.contact.email}`} 
                className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 hover:border-black flex items-center gap-3 transition-colors text-black"
              >
                <Mail className="w-4 h-4 text-purple-600 shrink-0" />
                <div className="text-xs">
                  <span className="text-[10px] text-black font-extrabold block uppercase tracking-wider">Contracts & Billing</span>
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
