import React, { useState } from 'react';
import { 
  Phone, 
  Mail, 
  MapPin, 
  MessageCircle, 
  Send, 
  CheckCircle2, 
  ChevronDown, 
  ChevronUp
} from 'lucide-react';
import Instagram from '../common/InstagramIcon';
import { BRAND_DATA } from '../../data/eventData';
import { FAQ_DATA } from '../../data/testimonialsData';
import { useTheme } from '../../context/ThemeContext';
import { triggerConfetti, playApplauseSound } from '../../utils/confetti';
import SectionHeader from '../common/SectionHeader';

export default function ContactSection() {
  const { currentTheme } = useTheme();

  const [form, setForm] = useState({
    name: '',
    phone: '',
    eventType: 'Wedding & Reception',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState(null);

  const toggleFaq = (index) => {
    setOpenFaq(prev => prev === index ? null : index);
  };

  const handleInputChange = (e) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    triggerConfetti(0.5, 0.4);
    playApplauseSound();
    setSubmitted(true);

    const text = encodeURIComponent(
      `Hello TSK Entertainments team!%0A` +
      `• Name: ${form.name}%0A` +
      `• Phone: ${form.phone}%0A` +
      `• Event: ${form.eventType}%0A` +
      `• Date: ${form.date || 'TBD'}%0A` +
      `• Details: ${form.message}%0A` +
      `Please check schedule for Actor TSK & Team!`
    );

    setTimeout(() => {
      window.open(`https://wa.me/${BRAND_DATA.contact.whatsapp}?text=${text}`, '_blank');
    }, 600);
  };

  const contactCards = [
    {
      title: "WhatsApp Direct",
      value: "+91 63831 80073",
      sub: "Instant chat & quotes",
      icon: MessageCircle,
      action: `https://wa.me/${BRAND_DATA.contact.whatsapp}`,
      color: "bg-emerald-50 text-emerald-700 border-emerald-200"
    },
    {
      title: "Direct Phone",
      value: "+91 63831 80073",
      sub: "Event Director Hotline",
      icon: Phone,
      action: `tel:${BRAND_DATA.contact.phone}`,
      color: "bg-amber-50 text-amber-700 border-amber-200"
    },
    {
      title: "Official Email",
      value: "tskentertainments@gmail.com",
      sub: "Send RFPs & riders",
      icon: Mail,
      action: `mailto:${BRAND_DATA.contact.email}`,
      color: "bg-purple-50 text-purple-700 border-purple-200"
    },
    {
      title: "Instagram",
      value: "@tskentertainments",
      sub: "Reels & moments",
      icon: Instagram,
      action: BRAND_DATA.contact.instagram,
      color: "bg-pink-50 text-pink-700 border-pink-200"
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-[#F8F9FC]">
      <div className="w-full max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12">
        
        <SectionHeader
          badge="Get In Touch"
          title="Direct Contact &"
          subtitle="Event Booking"
        />

        {/* 4 Cards (2x2 on mobile, 4 in row on lg) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4 mb-8 sm:mb-12">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <a
                key={i}
                href={card.action}
                target={card.action.startsWith('http') ? '_blank' : undefined}
                rel="noopener noreferrer"
                className={`p-3 sm:p-4 rounded-2xl border ${card.color} shadow-xs hover:shadow-md transition-all flex flex-col sm:flex-row items-start gap-2.5 sm:gap-3`}
              >
                <div className="p-2 rounded-xl bg-white shadow-xs shrink-0">
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0 w-full">
                  <p className="text-[10px] sm:text-[11px] font-semibold text-slate-500">{card.title}</p>
                  <p className="text-[11px] sm:text-xs font-bold text-slate-900 truncate">{card.value}</p>
                  <p className="text-[9.5px] sm:text-[10px] text-slate-500 truncate">{card.sub}</p>
                </div>
              </a>
            );
          })}
        </div>

        {/* Form & FAQs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 items-start">
          
          {/* Form (7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-5 sm:p-8 border border-slate-200 shadow-sm">
            <h3 className="text-xl font-bold text-slate-950 mb-1">
              Send an Enquiry
            </h3>
            <p className="text-xs font-semibold text-slate-700 mb-5">
              Direct to Actor TSK coordination team.
            </p>

            {submitted ? (
              <div className="p-6 rounded-2xl bg-emerald-50 border border-emerald-200 text-center space-y-2">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h4 className="text-base font-bold text-slate-950">Enquiry Dispatched!</h4>
                <p className="text-xs font-medium text-slate-700">
                  Opening WhatsApp chat now. We'll reply within 15 minutes!
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 px-3 py-1.5 rounded-lg text-xs font-bold bg-white border border-slate-300 text-slate-900"
                >
                  Send Another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs font-bold text-slate-950 block mb-1.5">Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-950 placeholder:text-slate-600 placeholder:font-normal focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500/20 shadow-2xs transition-all"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-950 block mb-1.5">Phone / WhatsApp *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="+91 63831 80073"
                      value={form.phone}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-950 placeholder:text-slate-600 placeholder:font-normal focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500/20 shadow-2xs transition-all"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  <div>
                    <label className="text-xs font-bold text-slate-950 block mb-1.5">Celebration</label>
                    <select
                      name="eventType"
                      value={form.eventType}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-950 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500/20 shadow-2xs transition-all cursor-pointer"
                    >
                      <option value="Wedding & Reception">Wedding & Reception</option>
                      <option value="Celebrity Star Night">Celebrity Star Night</option>
                      <option value="Corporate Gala">Corporate Gala</option>
                      <option value="Sangeet & Haldi">Sangeet & Haldi</option>
                      <option value="Comedy Show">Comedy Show</option>
                    </select>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-slate-950 block mb-1.5">Date</label>
                    <input
                      type="date"
                      name="date"
                      value={form.date}
                      onChange={handleInputChange}
                      className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-950 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500/20 shadow-2xs transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-slate-950 block mb-1.5">Event Requirements</label>
                  <textarea
                    name="message"
                    required
                    rows={3}
                    placeholder="Venue, guest count, preferred artists, or specific requirements..."
                    value={form.message}
                    onChange={handleInputChange}
                    className="w-full bg-white border border-slate-300 rounded-xl p-3.5 text-xs font-semibold text-slate-950 placeholder:text-slate-600 placeholder:font-normal focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500/20 shadow-2xs transition-all"
                  />
                </div>

                <button
                  type="submit"
                  className={`w-full py-3.5 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-gradient-to-r ${currentTheme.gradient} hover:brightness-105 active:scale-95 shadow-md flex items-center justify-center gap-2 cursor-pointer transition-all`}
                >
                  <Send className="w-4 h-4 text-white shrink-0" />
                  <span className="truncate">Send to WhatsApp (+91 63831 80073)</span>
                </button>
              </form>
            )}
          </div>

          {/* Right: FAQs (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900">Chennai Headquarters</h4>
                <p className="text-[11px] text-slate-500">Executing events across Tamil Nadu, Pan-India & Worldwide NRI destinations.</p>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-sm space-y-2">
              <h4 className="text-xs font-bold text-slate-900 mb-2 uppercase tracking-wider">
                Frequently Asked Questions
              </h4>

              {FAQ_DATA.slice(0, 4).map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="border border-slate-100 rounded-xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full p-2.5 text-left text-xs font-bold text-slate-800 flex items-center justify-between gap-2 hover:bg-slate-50"
                    >
                      <span>{faq.question}</span>
                      {isOpen ? <ChevronUp className="w-3.5 h-3.5 shrink-0 text-amber-600" /> : <ChevronDown className="w-3.5 h-3.5 shrink-0 text-slate-400" />}
                    </button>
                    {isOpen && (
                      <div className="px-2.5 pb-2.5 text-xs text-slate-600 border-t border-slate-100 pt-1.5">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
