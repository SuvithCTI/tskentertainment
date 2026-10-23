import React, { useState } from 'react';
import { MessageCircle, X, Send, ShieldCheck } from 'lucide-react';
import { BRAND_DATA } from '../../data/eventData';

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);
  const [message, setMessage] = useState('');

  const quickPrompts = [
    "I'm planning a Wedding reception",
    "Enquire about Celebrity & KPY Stars",
    "Corporate Annual Day stage quote",
    "Check availability for Actor TSK"
  ];

  const handleSend = (textToSend) => {
    const text = encodeURIComponent(textToSend || message || "Hi TSK Entertainments, I would like to plan an event.");
    window.open(`https://wa.me/${BRAND_DATA.contact.whatsapp}?text=${text}`, '_blank');
    setIsOpen(false);
    setMessage('');
  };

  return (
    <div className="fixed bottom-4 right-3.5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end">
      
      {/* Expanded WhatsApp Modal */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-28px)] sm:w-80 max-w-sm rounded-2xl bg-white border border-slate-200 shadow-2xl overflow-hidden animate-in fade-in">
          {/* Header */}
          <div className="bg-emerald-600 p-3.5 text-white flex items-center justify-between">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center font-bold text-xs">
                TSK
              </div>
              <div>
                <h4 className="font-bold text-xs flex items-center gap-1">
                  TSK Entertainments
                  <ShieldCheck className="w-3.5 h-3.5 text-white" />
                </h4>
                <p className="text-[10px] text-emerald-100">
                  Online • Replies in 5 mins
                </p>
              </div>
            </div>

            <button onClick={() => setIsOpen(false)} className="text-white hover:text-slate-200">
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Body */}
          <div className="p-3.5 space-y-2.5 bg-slate-50 text-xs">
            <div className="bg-white p-2.5 rounded-xl border border-slate-200 text-slate-700 space-y-1 shadow-sm">
              <p className="font-bold text-emerald-700">Vanakkam! 🙏✨</p>
              <p>Planning an event? Tap a quick option below to chat directly with Actor TSK's team:</p>
            </div>

            <div className="flex flex-col gap-1.5 pt-1">
              {quickPrompts.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(prompt)}
                  className="text-left text-[11px] bg-white hover:bg-emerald-50 text-slate-800 border border-slate-200 hover:border-emerald-300 p-2 rounded-xl transition-all font-medium"
                >
                  💬 {prompt}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <div className="p-2.5 bg-white border-t border-slate-200 flex items-center gap-2">
            <input
              type="text"
              placeholder="Type message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              className="flex-1 bg-slate-50 text-xs text-slate-900 placeholder-slate-400 rounded-xl px-3 py-2 border border-slate-200 focus:outline-none focus:border-emerald-500"
            />
            <button
              onClick={() => handleSend()}
              className="p-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      )}

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-lg shadow-emerald-600/30 hover:scale-105 active:scale-95 transition-all text-xs"
      >
        <span className="w-2 h-2 rounded-full bg-white animate-pulse"></span>
        <MessageCircle className="w-4 h-4 fill-white" />
        <span className="hidden sm:inline">WhatsApp Chat</span>
      </button>

    </div>
  );
}
