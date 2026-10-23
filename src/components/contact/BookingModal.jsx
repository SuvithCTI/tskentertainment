import React, { useState } from 'react';
import { createPortal } from 'react-dom';
import { X, Send, CheckCircle2 } from 'lucide-react';
import { BRAND_DATA } from '../../data/eventData';
import { useTheme } from '../../context/ThemeContext';
import { triggerConfetti, playApplauseSound } from '../../utils/confetti';

export default function BookingModal({ isOpen, onClose }) {
  const { currentTheme } = useTheme();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    eventType: 'Grand Wedding & Reception',
    date: '',
    guests: '500',
    notes: ''
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    triggerConfetti(0.5, 0.4);
    playApplauseSound();
    setSubmitted(true);

    const message = encodeURIComponent(
      `🎉 NEW EVENT ENQUIRY - TSK ENTERTAINMENTS 🎉%0A` +
      `• Name: ${formData.name}%0A` +
      `• Phone: ${formData.phone}%0A` +
      `• Event: ${formData.eventType}%0A` +
      `• Date: ${formData.date || 'TBD'}%0A` +
      `• Guests: ${formData.guests}%0A` +
      `• Notes: ${formData.notes || 'None'}%0A` +
      `Please check schedule for Actor TSK & Team!`
    );

    setTimeout(() => {
      window.open(`https://wa.me/${BRAND_DATA.contact.whatsapp}?text=${message}`, '_blank');
    }, 600);
  };

  return createPortal(
    <div className="fixed inset-0 z-[99999] flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      <div 
        className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-lg rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden z-10 my-8 animate-in fade-in">
        
        {/* Header */}
        <div className="p-5 border-b border-slate-100 flex items-center justify-between bg-slate-50">
          <div>
            <h3 className="text-base font-bold text-slate-900">
              Book Your Celebration
            </h3>
            <p className="text-xs text-slate-500">
              Direct to Actor TSK Coordination Desk (+91 63831 80073)
            </p>
          </div>

          <button onClick={onClose} className="p-1 rounded-full text-slate-400 hover:text-slate-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {submitted ? (
          <div className="p-8 text-center space-y-3">
            <CheckCircle2 className="w-12 h-12 text-emerald-500 mx-auto" />
            <h4 className="text-lg font-bold text-slate-900">Enquiry Dispatched!</h4>
            <p className="text-xs text-slate-600">
              Opening WhatsApp chat with Actor TSK's team now. We will respond promptly!
            </p>
            <button
              onClick={() => { setSubmitted(false); onClose(); }}
              className="mt-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-100 text-slate-800"
            >
              Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 space-y-4">
            <div>
              <label className="text-xs font-bold text-slate-950 block mb-1.5">Full Name *</label>
              <input
                type="text"
                name="name"
                required
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-950 placeholder:text-slate-600 placeholder:font-normal focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500/20 shadow-2xs transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-bold text-slate-950 block mb-1.5">Phone / WhatsApp *</label>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="+91 63831 80073"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-950 placeholder:text-slate-600 placeholder:font-normal focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500/20 shadow-2xs transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-950 block mb-1.5">Celebration Type</label>
                <select
                  name="eventType"
                  value={formData.eventType}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-950 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500/20 shadow-2xs transition-all cursor-pointer"
                >
                  <option value="Wedding & Reception">Wedding & Reception</option>
                  <option value="Star Night / Concert">Star Night / Concert</option>
                  <option value="Corporate Gala">Corporate Gala</option>
                  <option value="Sangeet & Haldi">Sangeet & Haldi</option>
                  <option value="Comedy & Mimicry Show">Comedy & Mimicry Show</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div>
                <label className="text-xs font-bold text-slate-950 block mb-1.5">Tentative Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-950 focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500/20 shadow-2xs transition-all"
                />
              </div>

              <div>
                <label className="text-xs font-bold text-slate-950 block mb-1.5">Approx. Guests</label>
                <input
                  type="text"
                  name="guests"
                  placeholder="500"
                  value={formData.guests}
                  onChange={handleChange}
                  className="w-full bg-white border border-slate-300 rounded-xl px-3.5 py-2.5 text-xs font-semibold text-slate-950 placeholder:text-slate-600 placeholder:font-normal focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500/20 shadow-2xs transition-all"
                />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold text-slate-950 block mb-1.5">Specific Requests</label>
              <textarea
                name="notes"
                rows={2}
                placeholder="Mandap theme, preferred Vijay TV artists, cold pyros..."
                value={formData.notes}
                onChange={handleChange}
                className="w-full bg-white border border-slate-300 rounded-xl p-3.5 text-xs font-semibold text-slate-950 placeholder:text-slate-600 placeholder:font-normal focus:outline-none focus:border-amber-600 focus:ring-1 focus:ring-amber-500/20 shadow-2xs transition-all"
              />
            </div>

            <button
              type="submit"
              className={`w-full py-3 rounded-xl text-xs font-bold text-white bg-gradient-to-r ${currentTheme.gradient} hover:brightness-105 active:scale-95 shadow-sm flex items-center justify-center gap-2 cursor-pointer transition-all`}
            >
              <Send className="w-4 h-4 text-white" />
              <span>Submit & Dispatch to WhatsApp</span>
            </button>
          </form>
        )}

      </div>
    </div>,
    document.body
  );
}
