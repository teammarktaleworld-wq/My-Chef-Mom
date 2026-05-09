// 'use client';

// import React from 'react';
// import { Calendar, Utensils, Truck, Smile } from 'lucide-react';

// const HOW_IT_WORKS = [
//   { 
//     step: 1, 
//     title: 'Choose Your Plan', 
//     desc: 'Select from our weekly or monthly veg and non-veg options.', 
//     icon: Calendar 
//   },
//   { 
//     step: 2, 
//     title: 'We Cook With Love', 
//     desc: 'Our chefs prepare fresh meals daily using premium ingredients.', 
//     icon: Utensils 
//   },
//   { 
//     step: 3, 
//     title: 'Daily Delivery', 
//     desc: 'Get your meals delivered right to your doorstep, fresh and hot.', 
//     icon: Truck 
//   },
//   { 
//     step: 4, 
//     title: 'Enjoy Your Meal', 
//     desc: 'Relish the authentic, home-cooked taste without the hassle.', 
//     icon: Smile 
//   },
// ];

// export default function HowItWorks() {
//   return (
//     <section id="how-it-works" className="py-24 bg-slate-50">
//       <div className="max-w-7xl mx-auto px-6">
        
//         {/* Section Header */}
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-black text-slate-900">How It Works</h2>
//           <div className="w-24 h-1.5 bg-rose-500 mx-auto mt-6 rounded-full" />
//         </div>

//         {/* Steps Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
//           {HOW_IT_WORKS.map((item) => {
//             const Icon = item.icon;
            
//             return (
//               <div 
//                 key={item.step} 
//                 className="bg-white rounded-[2rem] p-8 text-center shadow-[0_4px_20px_rgba(0,0,0,0.02)] border border-slate-100 hover:-translate-y-2 transition-transform duration-300 relative group"
//               >
//                 {/* Icon Container */}
//                 <div className="w-20 h-20 mx-auto bg-slate-50 rounded-full flex items-center justify-center text-slate-700 shadow-inner border border-slate-100 mb-6 relative z-10 group-hover:scale-110 group-hover:bg-rose-50 group-hover:text-rose-500 transition-all duration-300">
//                   <Icon size={32} />
                  
//                   {/* Step Number Badge */}
//                   <div className="absolute -top-2 -right-2 w-8 h-8 bg-green-500 rounded-full border-4 border-white flex items-center justify-center text-white text-xs font-black shadow-sm">
//                     {item.step}
//                   </div>
//                 </div>
                
//                 {/* Text Content */}
//                 <h3 className="text-xl font-black text-slate-900 mb-3">{item.title}</h3>
//                 <p className="text-slate-500 leading-relaxed text-sm">{item.desc}</p>
//               </div>
//             );
//           })}
//         </div>
        
//       </div>
//     </section>
//   );
// }








'use client';

import React, { useEffect, useRef } from 'react';
import { Calendar, Utensils, Truck, Smile } from 'lucide-react';

const HOW_IT_WORKS = [
  {
    step: 1,
    title: 'Choose Your Plan',
    desc: 'Select from our weekly or monthly veg and non-veg options that suit your lifestyle.',
    icon: Calendar,
    emoji: '📋',
    color: '#FF6B2C',
    bg: 'rgba(255,107,44,.08)',
  },
  {
    step: 2,
    title: 'We Cook With Love',
    desc: 'Our home chefs prepare fresh meals daily using premium ingredients and traditional spices.',
    icon: Utensils,
    emoji: '🍳',
    color: '#F5A623',
    bg: 'rgba(245,166,35,.08)',
  },
  {
    step: 3,
    title: 'Daily Delivery',
    desc: 'Get your meals delivered right to your doorstep — fresh, hot, and on time.',
    icon: Truck,
    emoji: '🛵',
    color: '#2D6A4F',
    bg: 'rgba(45,106,79,.08)',
  },
  {
    step: 4,
    title: 'Enjoy Your Meal',
    desc: 'Relish authentic, home-cooked taste without any hassle. Ghar jaisa, every day.',
    icon: Smile,
    emoji: '😊',
    color: '#E84A1A',
    bg: 'rgba(232,74,26,.08)',
  },
];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>('.hiw-reveal');
    if (!els) return;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            (entry.target as HTMLElement).style.opacity = '1';
            (entry.target as HTMLElement).style.transform = 'translateY(0) scale(1)';
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,800;1,700&family=DM+Sans:wght@400;500;600&display=swap');

        :root {
          --saffron:  #FF6B2C;
          --turmeric: #F5A623;
          --cream:    #FFF8F0;
          --deep:     #1A0A00;
        }

        .hiw-reveal {
          opacity: 0;
          transform: translateY(36px) scale(0.97);
          transition: opacity .65s cubic-bezier(.16,1,.3,1), transform .65s cubic-bezier(.16,1,.3,1);
        }
        .hiw-reveal.d1 { transition-delay: .05s; }
        .hiw-reveal.d2 { transition-delay: .15s; }
        .hiw-reveal.d3 { transition-delay: .25s; }
        .hiw-reveal.d4 { transition-delay: .35s; }
        .hiw-reveal.d5 { transition-delay: .45s; }

        /* Card */
        .hiw-card {
          background: #fff;
          border: 1px solid rgba(255,107,44,.1);
          border-radius: 28px;
          padding: 36px 28px;
          text-align: center;
          position: relative;
          overflow: hidden;
          cursor: default;
          transition: transform .35s cubic-bezier(.34,1.56,.64,1), box-shadow .35s;
        }
        .hiw-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 24px 60px rgba(255,107,44,.12);
        }
        .hiw-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,107,44,.04) 0%, transparent 60%);
          opacity: 0;
          transition: opacity .35s;
        }
        .hiw-card:hover::before { opacity: 1; }

        /* Icon circle */
        .hiw-icon-wrap {
          width: 80px; height: 80px;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 20px;
          position: relative;
          transition: transform .35s cubic-bezier(.34,1.56,.64,1);
        }
        .hiw-card:hover .hiw-icon-wrap { transform: scale(1.12) rotate(-4deg); }

        /* Step badge */
        .hiw-step-badge {
          position: absolute; top: -6px; right: -6px;
          width: 28px; height: 28px;
          border-radius: 50%;
          border: 3px solid #fff;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px; font-weight: 800; color: #fff;
          font-family: 'DM Sans', sans-serif;
        }

        /* Connector line between cards */
        .hiw-connector {
          display: none;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          margin-top: -40px;
        }
        @media (min-width: 1024px) { .hiw-connector { display: flex; } }

        /* Corner decoration */
        .hiw-corner-deco {
          position: absolute;
          width: 80px; height: 80px;
          border-radius: 50%;
          opacity: .06;
          bottom: -20px; right: -20px;
          transition: transform .4s;
        }
        .hiw-card:hover .hiw-corner-deco { transform: scale(1.4); }

        /* Tag */
        .hiw-tag {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,107,44,.1);
          border: 1px solid rgba(255,107,44,.25);
          border-radius: 50px;
          padding: 5px 14px;
          font-size: 11px; font-weight: 600;
          color: var(--saffron); letter-spacing: 2px; text-transform: uppercase;
          font-family: 'DM Sans', sans-serif;
        }

        /* Animated underline on heading */
        .hiw-heading-line {
          display: inline-block;
          width: 60px; height: 3px;
          background: linear-gradient(90deg, var(--saffron), var(--turmeric));
          border-radius: 2px;
          margin: 16px auto 0;
          animation: hiwLineGrow 1s cubic-bezier(.16,1,.3,1) .5s both;
        }
        @keyframes hiwLineGrow {
          from { width: 0; } to { width: 60px; }
        }

        /* Floating emoji */
        .hiw-emoji {
          position: absolute;
          top: 18px; left: 18px;
          font-size: 22px;
          opacity: .18;
          transition: opacity .3s, transform .3s;
        }
        .hiw-card:hover .hiw-emoji { opacity: .35; transform: rotate(15deg) scale(1.2); }
      `}</style>

      <section ref={sectionRef} id="how-it-works" style={{ padding: '100px 0', background: 'linear-gradient(180deg,#ffffff 0%,#FFF8F0 50%,#ffffff 100%)', position: 'relative', overflow: 'hidden' }}>

        {/* Background blobs */}
        <div style={{ position: 'absolute', top: -100, right: -100, width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,107,44,.05)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: -80, left: -80, width: 320, height: 320, borderRadius: '50%', background: 'rgba(245,166,35,.05)', filter: 'blur(60px)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px' }}>

          {/* Header */}
          <div className="hiw-reveal" style={{ textAlign: 'center', marginBottom: 72 }}>
            <div className="hiw-tag" style={{ marginBottom: 18 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF6B2C', display: 'inline-block' }} />
              Simple Process
            </div>
            <h2 style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(32px,4vw,52px)', fontWeight: 800, color: '#1A0A00', lineHeight: 1.1, letterSpacing: -1, marginBottom: 0 }}>
              How It <em style={{ color: '#FF6B2C', fontStyle: 'italic' }}>Works</em>
            </h2>
            <div className="hiw-heading-line" />
            <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 17, color: '#6B5344', maxWidth: 480, margin: '20px auto 0', lineHeight: 1.65 }}>
              Four simple steps from choosing your plan to enjoying a hot, home-cooked meal.
            </p>
          </div>

          {/* Cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(220px,1fr))', gap: 24, position: 'relative' }}>
            {HOW_IT_WORKS.map(({ step, title, desc, icon: Icon, emoji, color, bg }, i) => (
              <div
                key={step}
                className={`hiw-card hiw-reveal d${i + 2}`}
              >
                {/* Floating emoji */}
                <span className="hiw-emoji">{emoji}</span>

                {/* Corner decoration */}
                <div className="hiw-corner-deco" style={{ background: color }} />

                {/* Icon */}
                <div className="hiw-icon-wrap" style={{ background: bg, border: `1.5px solid ${color}22` }}>
                  <Icon size={30} style={{ color }} strokeWidth={1.8} />
                  <div className="hiw-step-badge" style={{ background: color }}>
                    {step}
                  </div>
                </div>

                {/* Text */}
                <h3 style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 800, color: '#1A0A00', marginBottom: 10, lineHeight: 1.2 }}>
                  {title}
                </h3>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 14, color: '#6B5344', lineHeight: 1.7 }}>
                  {desc}
                </p>

                {/* Bottom accent bar */}
                <div style={{ position: 'absolute', bottom: 0, left: '20%', right: '20%', height: 3, borderRadius: '3px 3px 0 0', background: `linear-gradient(90deg,${color}44,${color})`, transform: 'scaleX(0)', transformOrigin: 'left', transition: 'transform .4s cubic-bezier(.34,1.56,.64,1)' }}
                  className="hiw-bottom-bar"
                />
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="hiw-reveal d5" style={{ textAlign: 'center', marginTop: 60 }}>
            <button
              onClick={() => document.getElementById('meal-plans')?.scrollIntoView({ behavior: 'smooth' })}
              style={{ background: 'linear-gradient(135deg,#FF6B2C,#E84A1A)', color: '#fff', border: 'none', borderRadius: 50, padding: '14px 32px', fontFamily: "'DM Sans',sans-serif", fontSize: 15, fontWeight: 600, cursor: 'pointer', display: 'inline-flex', alignItems: 'center', gap: 8, boxShadow: '0 8px 24px rgba(255,107,44,.35)', transition: 'all .3s cubic-bezier(.34,1.56,.64,1)' }}
              onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = 'translateY(-3px) scale(1.03)'; (e.currentTarget as HTMLElement).style.boxShadow = '0 14px 34px rgba(255,107,44,.45)'; }}
              onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = 'none'; (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(255,107,44,.35)'; }}
            >
              🍛 Explore Meal Plans
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>

        </div>
      </section>

      <style>{`
        .hiw-card:hover .hiw-bottom-bar { transform: scaleX(1) !important; }
      `}</style>
    </>
  );
}