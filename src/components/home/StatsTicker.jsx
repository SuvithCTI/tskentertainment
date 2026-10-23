import React, { useState, useEffect, useRef } from 'react';

function AnimatedCounter({ end, duration = 1800, suffix = "", delay = 0 }) {
  const [count, setCount] = useState(0);
  const elementRef = useRef(null);

  useEffect(() => {
    let animFrame = null;
    let timeoutId = null;

    const runCountUp = () => {
      setCount(0);
      timeoutId = setTimeout(() => {
        let startTime = null;
        const step = (timestamp) => {
          if (!startTime) startTime = timestamp;
          const elapsed = timestamp - startTime;
          const progress = Math.min(elapsed / duration, 1);
          // Ease-out cubic curve for natural deceleration
          const easeOut = 1 - Math.pow(1 - progress, 3);
          setCount(Math.floor(easeOut * end));

          if (progress < 1) {
            animFrame = window.requestAnimationFrame(step);
          } else {
            setCount(end);
          }
        };
        animFrame = window.requestAnimationFrame(step);
      }, delay);
    };

    // Run immediately when component mounts
    runCountUp();

    // Re-trigger count up whenever scrolled into viewport
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            runCountUp();
          }
        });
      },
      { threshold: 0.1 }
    );

    const el = elementRef.current;
    if (el) observer.observe(el);

    // Periodically re-run numbers animation every 8 seconds
    const intervalId = setInterval(() => {
      runCountUp();
    }, 8000);

    return () => {
      if (timeoutId) clearTimeout(timeoutId);
      if (animFrame) window.cancelAnimationFrame(animFrame);
      clearInterval(intervalId);
      if (el) observer.unobserve(el);
      observer.disconnect();
    };
  }, [end, duration, delay]);

  return (
    <span 
      ref={elementRef} 
      className="tabular-nums font-bold tracking-normal inline-block"
      style={{ fontFamily: "'Playfair Display', 'Cinzel', Georgia, serif" }}
    >
      {count}
      {suffix}
    </span>
  );
}

export default function StatsTicker() {
  const stats = [
    {
      target: 850,
      suffix: "+",
      delay: 0,
      label: "Grand Events",
      detail: "Weddings & Star Galas",
      cardBg: "from-amber-50 via-orange-50/80 to-amber-100/60 border-amber-200 hover:border-amber-400 hover:shadow-amber-500/20",
      numberGradient: "from-amber-600 via-orange-600 to-amber-700",
      glowBg: "bg-amber-400/20"
    },
    {
      target: 150,
      suffix: "+",
      delay: 100,
      label: "Celebrity Artists",
      detail: "Vijay TV & Cine Stars",
      cardBg: "from-pink-50 via-rose-50/80 to-pink-100/60 border-pink-200 hover:border-pink-400 hover:shadow-pink-500/20",
      numberGradient: "from-pink-600 via-rose-600 to-pink-700",
      glowBg: "bg-pink-400/20"
    },
    {
      target: 15,
      suffix: "+",
      delay: 200,
      label: "Years Legacy",
      detail: "Stagecraft & TV Mastery",
      cardBg: "from-purple-50 via-indigo-50/80 to-violet-100/60 border-purple-200 hover:border-purple-400 hover:shadow-purple-500/20",
      numberGradient: "from-purple-600 via-indigo-600 to-purple-700",
      glowBg: "bg-purple-400/20"
    },
    {
      target: 100,
      suffix: "%",
      delay: 300,
      label: "Applause Promise",
      detail: "Standing Ovations",
      cardBg: "from-emerald-50 via-teal-50/80 to-green-100/60 border-emerald-200 hover:border-emerald-400 hover:shadow-emerald-500/20",
      numberGradient: "from-emerald-600 via-teal-600 to-emerald-700",
      glowBg: "bg-emerald-400/20"
    }
  ];

  return (
    <div className="relative py-4 sm:py-5 bg-gradient-to-b from-white via-slate-50/70 to-white border-y border-slate-200/80 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/2 left-10 -translate-y-1/2 w-60 h-60 rounded-full bg-amber-200/25 blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-60 h-60 rounded-full bg-purple-200/25 blur-3xl pointer-events-none" />

      <div className="relative z-10 w-full max-w-[1550px] mx-auto px-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-5">
          {stats.map((stat, idx) => (
            <div 
              key={idx}
              className={`group relative py-3 px-2.5 sm:py-4 sm:px-5 rounded-2xl bg-gradient-to-br ${stat.cardBg} border shadow-xs hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-center items-center text-center overflow-hidden`}
            >
              {/* Subtle card internal glow effect */}
              <div className={`absolute -right-4 -bottom-4 w-24 h-24 rounded-full ${stat.glowBg} blur-xl pointer-events-none transition-all group-hover:scale-150 duration-500`} />

              {/* Number & Info */}
              <div className="relative z-10 w-full flex flex-col items-center">
                <h3 className={`text-2xl sm:text-3xl lg:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${stat.numberGradient} leading-tight mb-0.5`}>
                  <AnimatedCounter 
                    end={stat.target} 
                    suffix={stat.suffix} 
                    duration={1800} 
                    delay={stat.delay} 
                  />
                </h3>
                <p 
                  className="text-[11px] sm:text-xs lg:text-sm font-bold text-slate-800 tracking-tight leading-tight uppercase"
                  style={{ fontFamily: "'Cinzel', 'Playfair Display', Georgia, serif", letterSpacing: "0.04em" }}
                >
                  {stat.label}
                </p>
                <p className="text-[9.5px] sm:text-xs text-slate-500 font-medium leading-tight mt-0.5 truncate max-w-full">
                  {stat.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
