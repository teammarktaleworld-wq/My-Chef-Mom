// 'use client';

// import React, { useState } from 'react';
// import { CheckCircle2 } from 'lucide-react';
// import { MEAL_PLANS } from '@/components/data/mealPlans';

// const WHATSAPP_NUMBER = "+971557998925";

// export default function MealPlans() {
//   const [activePlanTab, setActivePlanTab] = useState<'veg' | 'nonveg'>('veg');

//   const activeData = MEAL_PLANS[activePlanTab];
//   const ActiveIcon = activeData.icon;

//   return (
//     <section id="meal-plans" className="py-24 bg-white relative">
//       {/* Soft Background Accent */}
//       <div className="absolute top-0 w-full h-[400px] bg-slate-900" />
      
//       <div className="max-w-7xl mx-auto px-6 relative z-10">
//         <div className="text-center mb-12">
//           <span className="text-sky-400 font-bold text-sm uppercase tracking-[3px] mb-3 block">
//             Subscription
//           </span>
//           <h2 className="text-4xl md:text-5xl font-black text-white">
//             Choose Your Meal Plan
//           </h2>
//           <p className="text-slate-400 mt-4 text-lg">
//             6 Days a Week • 26 Days a Month • Free Delivery
//           </p>
//         </div>

//         {/* Toggle Veg / Non-Veg */}
//         <div className="flex justify-center mb-12">
//           <div className="bg-slate-800 p-1.5 rounded-full inline-flex shadow-inner">
//             <button 
//               onClick={() => setActivePlanTab('veg')}
//               className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all ${
//                 activePlanTab === 'veg' 
//                   ? 'bg-white text-green-600 shadow-sm' 
//                   : 'text-slate-400 hover:text-white'
//               }`}
//             >
//               <MEAL_PLANS.veg.icon size={18} /> Veg Plans
//             </button>
//             <button 
//               onClick={() => setActivePlanTab('nonveg')}
//               className={`flex items-center gap-2 px-8 py-3 rounded-full font-bold transition-all ${
//                 activePlanTab === 'nonveg' 
//                   ? 'bg-white text-rose-600 shadow-sm' 
//                   : 'text-slate-400 hover:text-white'
//               }`}
//             >
//               <MEAL_PLANS.nonveg.icon size={18} /> Non-Veg Plans
//             </button>
//           </div>
//         </div>

//         {/* Plan Content Container */}
//         <div className="bg-slate-50 rounded-[3rem] p-6 md:p-12 shadow-2xl shadow-slate-200/50 border border-slate-200">
          
//           {/* Header for Category */}
//           <div className="text-center mb-12">
//             <div className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br ${activeData.color} text-white shadow-lg ${activeData.shadow} mb-4`}>
//               <ActiveIcon size={32} />
//             </div>
//             <h3 className="text-3xl font-black text-slate-900">{activeData.brand}</h3>
//             <p className="text-slate-500 font-medium mt-1">{activeData.tagline}</p>
//           </div>

//           {/* 1 Meal / Day Plans */}
//           <div className="mb-16">
//             <div className="flex items-center gap-4 mb-8">
//               <h4 className="text-xl font-black text-slate-900 whitespace-nowrap">1 Meal / Day</h4>
//               <div className="h-px bg-slate-200 w-full"></div>
//               <span className="text-xs font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">Lunch OR Dinner</span>
//             </div>
            
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//               {activeData.oneMeal.map((plan, idx) => (
//                 <div key={idx} className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 relative overflow-hidden group">
//                   <div className={`absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r ${activeData.color}`} />
                  
//                   <h5 className="text-2xl font-black text-slate-900 mb-2">{plan.name}</h5>
                  
//                   <div className="flex gap-6 mt-6 mb-8 pb-8 border-b border-slate-100">
//                     <div>
//                       <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Weekly</p>
//                       <p className="text-3xl font-black text-slate-800">AED {plan.weekly}</p>
//                     </div>
//                     <div className="w-px bg-slate-200"></div>
//                     <div>
//                       <p className="text-sm text-slate-400 font-bold uppercase tracking-wider mb-1">Monthly</p>
//                       <p className={`text-3xl font-black ${activePlanTab === 'veg' ? 'text-green-600' : 'text-rose-600'}`}>AED {plan.monthly}</p>
//                     </div>
//                   </div>

//                   <ul className="space-y-4 mb-8">
//                     {plan.features.map((feature, fIdx) => (
//                       <li key={fIdx} className="flex items-center gap-3 text-slate-600 font-medium">
//                         <CheckCircle2 size={18} className={activePlanTab === 'veg' ? 'text-green-500' : 'text-rose-500'} />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>

//                   <a 
//                     href={`https://wa.me/${WHATSAPP_NUMBER}`} 
//                     target="_blank" 
//                     rel="noreferrer" 
//                     className="block w-full text-center py-4 rounded-xl border-2 border-slate-200 text-slate-800 font-bold hover:border-slate-900 hover:bg-slate-900 hover:text-white transition-all"
//                   >
//                     Subscribe Now
//                   </a>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* 2 Meals / Day Plans */}
//           <div>
//              <div className="flex items-center gap-4 mb-8">
//               <h4 className="text-xl font-black text-slate-900 whitespace-nowrap">2 Meals / Day</h4>
//               <div className="h-px bg-slate-200 w-full"></div>
//               <span className="text-xs font-bold text-slate-500 uppercase tracking-widest whitespace-nowrap">Lunch & Dinner</span>
//             </div>

//              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//               {activeData.twoMeals.map((plan, idx) => (
//                 <div key={idx} className={`bg-white rounded-3xl p-8 border ${plan.badge ? (activePlanTab === 'veg' ? 'border-green-500 shadow-green-100' : 'border-rose-500 shadow-rose-100') + ' shadow-2xl relative scale-100 md:scale-105 z-10' : 'border-slate-200 shadow-sm'} hover:shadow-xl transition-all flex flex-col`}>
//                   {plan.badge && (
//                     <div className={`absolute top-0 left-1/2 -translate-x-1/2 ${activeData.badgeBg} text-white text-xs font-black uppercase tracking-widest py-1.5 px-4 rounded-b-xl shadow-sm whitespace-nowrap`}>
//                       {plan.badge}
//                     </div>
//                   )}
                  
//                   <h5 className={`text-xl font-black text-slate-900 mb-2 ${plan.badge ? 'mt-4' : ''}`}>{plan.name}</h5>
//                   <div className="mb-6">
//                     <span className="text-4xl font-black text-slate-900">AED {plan.price}</span>
//                     <span className="text-slate-400 font-medium ml-1">/ month</span>
//                   </div>

//                   <ul className="space-y-4 mb-8 flex-1">
//                     {plan.features.map((feature, fIdx) => (
//                       <li key={fIdx} className="flex items-start gap-3 text-slate-600 font-medium text-sm">
//                         <CheckCircle2 size={16} className={`shrink-0 mt-0.5 ${activePlanTab === 'veg' ? 'text-green-500' : 'text-rose-500'}`} />
//                         {feature}
//                       </li>
//                     ))}
//                   </ul>

//                   <a 
//                     href={`https://wa.me/${WHATSAPP_NUMBER}`} 
//                     target="_blank" 
//                     rel="noreferrer" 
//                     className={`block w-full text-center py-4 rounded-xl font-bold transition-all ${plan.badge ? `bg-gradient-to-r ${activeData.color} text-white shadow-md hover:shadow-lg ${activeData.shadow}` : 'bg-slate-100 text-slate-800 hover:bg-slate-200'}`}
//                   >
//                     Select Plan
//                   </a>
//                 </div>
//               ))}
//              </div>
//           </div>

//           {/* Trial Banner */}
//           <div className="mt-16 bg-sky-50 border border-sky-100 rounded-3xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-sm relative overflow-hidden">
//             <div className="absolute right-0 top-0 w-32 h-32 bg-sky-200 rounded-full blur-3xl opacity-50 pointer-events-none" />
//             <div className="flex items-center gap-5 relative z-10">
//               <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center text-3xl shadow-sm">🎁</div>
//               <div>
//                 <h4 className="text-xl font-black text-slate-900">Want to taste before subscribing?</h4>
//                 <p className="text-slate-600 font-medium mt-1">Try our 2-day trial meal option.</p>
//               </div>
//             </div>
//             <a 
//               href={`https://wa.me/${WHATSAPP_NUMBER}`} 
//               target="_blank" 
//               rel="noreferrer" 
//               className="relative z-10 px-8 py-4 bg-white border border-slate-200 rounded-full font-bold text-slate-800 hover:border-sky-500 hover:text-sky-600 hover:shadow-md transition-all whitespace-nowrap"
//             >
//               Book Trial
//             </a>
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }










'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Leaf, Drumstick, CheckCircle2, Sparkles, Clock, Truck, Star } from 'lucide-react';

const WHATSAPP_NUMBER = '+971557998925';

/* ─────────────────────────────────────────────
   DATA
───────────────────────────────────────────── */
const MEAL_PLANS = {
  veg: {
    icon: Leaf,
    brand: 'Green Thali',
    tagline: 'Pure vegetarian comfort, every day',
    color: 'from-emerald-500 to-teal-600',
    accent: '#10B981',
    accentLight: 'rgba(16,185,129,0.12)',
    accentGlow: 'rgba(16,185,129,0.35)',
    badgeBg: 'linear-gradient(135deg,#10B981,#0D9488)',
    badgeText: '#fff',
    oneMeal: [
      {
        name: 'Basic Veg',
        weekly: 99,
        monthly: 380,
        features: ['1 Sabzi + Dal', 'Rice or Roti (4 pcs)', 'Salad & Pickle', 'Mon – Sat Delivery'],
      },
      {
        name: 'Premium Veg',
        weekly: 130,
        monthly: 499,
        features: ['2 Sabzi + Dal', 'Rice + Roti (4 pcs)', 'Dessert (3x/week)', 'Salad, Pickle & Papad'],
      },
    ],
    twoMeals: [
      {
        name: 'Starter Combo',
        price: 699,
        badge: null,
        features: ['1 Sabzi + Dal (each meal)', 'Rice or Roti', 'Salad & Pickle', 'Mon – Sat'],
      },
      {
        name: 'Family Combo',
        price: 999,
        badge: '⭐ Most Popular',
        features: ['2 Sabzi + Dal (each meal)', 'Rice + Roti', 'Dessert 3x/week', 'Papad & Salad'],
      },
      {
        name: 'Royal Thali',
        price: 1299,
        badge: null,
        features: ['3 Sabzi + Dal + Soup', 'Rice + Roti (unlimited)', 'Daily Dessert', 'Chaach + Salad + Papad'],
      },
    ],
  },
  nonveg: {
    icon: Drumstick,
    brand: 'Nawabi Dastarkhwan',
    tagline: 'Rich, bold, and deeply satisfying',
    color: 'from-rose-500 to-orange-600',
    accent: '#F43F5E',
    accentLight: 'rgba(244,63,94,0.12)',
    accentGlow: 'rgba(244,63,94,0.35)',
    badgeBg: 'linear-gradient(135deg,#F43F5E,#EA580C)',
    badgeText: '#fff',
    oneMeal: [
      {
        name: 'Basic Non-Veg',
        weekly: 120,
        monthly: 450,
        features: ['Chicken / Egg Curry', 'Rice or Roti (4 pcs)', 'Salad & Pickle', 'Mon – Sat Delivery'],
      },
      {
        name: 'Premium Non-Veg',
        weekly: 160,
        monthly: 599,
        features: ['Chicken + Dal / Sabzi', 'Rice + Roti (4 pcs)', 'Dessert (3x/week)', 'Salad, Pickle & Papad'],
      },
    ],
    twoMeals: [
      {
        name: 'Starter Combo',
        price: 899,
        badge: null,
        features: ['Chicken or Egg (each meal)', 'Rice or Roti', 'Salad & Pickle', 'Mon – Sat'],
      },
      {
        name: 'Nawabi Combo',
        price: 1299,
        badge: '⭐ Most Popular',
        features: ['Chicken + Dal / Sabzi', 'Rice + Roti', 'Dessert 3x/week', 'Papad & Salad'],
      },
      {
        name: 'Shahenshah Thali',
        price: 1699,
        badge: null,
        features: ['Chicken + Mutton + Gravy', 'Rice + Roti (unlimited)', 'Daily Dessert', 'Shorba + Salad + Raita'],
      },
    ],
  },
};

/* ─────────────────────────────────────────────
   HOOK: Intersection Observer
───────────────────────────────────────────── */
function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function MealPlans() {
  const [tab, setTab] = useState<'veg' | 'nonveg'>('veg');
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const data = MEAL_PLANS[tab];
  const { ref: sectionRef, inView } = useInView(0.05);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .mp-root {
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(170deg, #FFF8F0 0%, #FFF0E0 40%, #FDF4FF 100%);
          position: relative;
          overflow: hidden;
          padding: 100px 0 120px;
        }

        /* ── Blob background ── */
        .mp-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.28;
          pointer-events: none;
          animation: mpBlobDrift 10s ease-in-out infinite;
        }
        @keyframes mpBlobDrift {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(40px,-30px) scale(1.07); }
          70%      { transform: translate(-25px,25px) scale(0.94); }
        }

        /* ── Dot pattern ── */
        .mp-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,107,44,0.12) 1px, transparent 1px);
          background-size: 36px 36px;
          pointer-events: none;
          z-index: 0;
        }

        /* ── Section label ── */
        .mp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: rgba(255,107,44,0.1);
          border: 1px solid rgba(255,107,44,0.28);
          border-radius: 50px;
          padding: 6px 16px;
          font-size: 11px;
          font-weight: 600;
          color: #FF6B2C;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        /* ── Heading ── */
        .mp-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(36px, 5vw, 58px);
          font-weight: 900;
          color: #1A0A00;
          line-height: 1.08;
          letter-spacing: -1px;
          margin: 0 0 16px;
        }
        .mp-heading em {
          font-style: italic;
          color: #FF6B2C;
          position: relative;
        }
        .mp-heading em::after {
          content: '';
          position: absolute;
          bottom: 3px; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg,#FF6B2C,#F5A623);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 1s cubic-bezier(.16,1,.3,1) 0.6s;
        }
        .mp-root.visible .mp-heading em::after { transform: scaleX(1); }

        /* ── Toggle ── */
        .mp-toggle-wrap {
          background: rgba(255,255,255,0.7);
          backdrop-filter: blur(20px);
          border: 1px solid rgba(255,107,44,0.18);
          border-radius: 60px;
          padding: 6px;
          display: inline-flex;
          box-shadow: 0 8px 40px rgba(255,107,44,0.12);
        }
        .mp-toggle-btn {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 12px 28px;
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          background: transparent;
          color: #9B7B6A;
          transition: all 0.35s cubic-bezier(.34,1.56,.64,1);
        }
        .mp-toggle-btn.active-veg {
          background: linear-gradient(135deg,#10B981,#0D9488);
          color: #fff;
          box-shadow: 0 6px 24px rgba(16,185,129,0.35);
          transform: scale(1.02);
        }
        .mp-toggle-btn.active-nonveg {
          background: linear-gradient(135deg,#F43F5E,#EA580C);
          color: #fff;
          box-shadow: 0 6px 24px rgba(244,63,94,0.35);
          transform: scale(1.02);
        }

        /* ── Divider label ── */
        .mp-divider {
          display: flex;
          align-items: center;
          gap: 16px;
          margin: 0 0 36px;
        }
        .mp-divider-line { flex: 1; height: 1px; background: rgba(26,10,0,0.08); }
        .mp-divider-label {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #9B7B6A;
          white-space: nowrap;
        }
        .mp-divider-title {
          font-family: 'Playfair Display', serif;
          font-size: 22px;
          font-weight: 700;
          color: #1A0A00;
          white-space: nowrap;
        }

        /* ── ONE-MEAL CARDS ── */
        .mp-card-1 {
          background: #fff;
          border-radius: 28px;
          padding: 36px;
          border: 1px solid rgba(26,10,0,0.07);
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(.34,1.56,.64,1);
          cursor: default;
        }
        .mp-card-1::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 4px;
          border-radius: 28px 28px 0 0;
          transition: opacity 0.3s;
        }
        .mp-card-1:hover {
          transform: translateY(-8px) scale(1.01);
          box-shadow: 0 24px 60px rgba(26,10,0,0.12);
        }
        .mp-card-1-price-wrap {
          display: flex;
          gap: 28px;
          align-items: flex-start;
          padding: 24px 0;
          margin: 24px 0;
          border-top: 1px solid rgba(26,10,0,0.06);
          border-bottom: 1px solid rgba(26,10,0,0.06);
        }
        .mp-price-block { flex: 1; }
        .mp-price-sep { width: 1px; background: rgba(26,10,0,0.06); align-self: stretch; }
        .mp-price-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #9B7B6A;
          margin-bottom: 4px;
        }
        .mp-price-val {
          font-family: 'Playfair Display', serif;
          font-size: 32px;
          font-weight: 900;
          color: #1A0A00;
          line-height: 1;
        }

        /* ── TWO-MEAL CARDS ── */
        .mp-card-2 {
          background: #fff;
          border-radius: 28px;
          padding: 36px;
          border: 1px solid rgba(26,10,0,0.07);
          position: relative;
          overflow: hidden;
          transition: all 0.4s cubic-bezier(.34,1.56,.64,1);
          display: flex;
          flex-direction: column;
        }
        .mp-card-2:hover {
          transform: translateY(-8px) scale(1.02);
          box-shadow: 0 28px 70px rgba(26,10,0,0.14);
        }
        .mp-card-2.featured {
          transform: scale(1.04);
          z-index: 2;
        }
        .mp-card-2.featured:hover { transform: scale(1.06) translateY(-8px); }

        /* ── Badge ── */
        .mp-badge {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          color: #fff;
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 6px 18px;
          border-radius: 0 0 14px 14px;
          white-space: nowrap;
        }

        /* ── Feature list ── */
        .mp-feature {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 14px;
          color: #6B5344;
          font-weight: 500;
          line-height: 1.5;
          padding: 6px 0;
        }
        .mp-check {
          flex-shrink: 0;
          margin-top: 2px;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── CTA Buttons ── */
        .mp-btn-primary {
          display: block;
          width: 100%;
          padding: 15px;
          border-radius: 50px;
          border: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
          transition: all 0.35s cubic-bezier(.34,1.56,.64,1);
          position: relative;
          overflow: hidden;
        }
        .mp-btn-primary::after {
          content: '';
          position: absolute;
          inset: 0;
          background: rgba(255,255,255,0);
          transition: background 0.3s;
        }
        .mp-btn-primary:hover::after { background: rgba(255,255,255,0.1); }
        .mp-btn-primary:hover { transform: translateY(-2px); box-shadow: 0 12px 36px -4px var(--btn-glow,rgba(0,0,0,0.3)); }

        .mp-btn-outline {
          display: block;
          width: 100%;
          padding: 15px;
          border-radius: 50px;
          border: 1.5px solid rgba(26,10,0,0.12);
          background: transparent;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #1A0A00;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
          transition: all 0.3s ease;
        }
        .mp-btn-outline:hover {
          border-color: rgba(26,10,0,0.35);
          background: rgba(26,10,0,0.03);
          transform: translateY(-2px);
        }

        /* ── Trial Banner ── */
        .mp-trial {
          background: #fff;
          border: 1px solid rgba(255,107,44,0.2);
          border-radius: 28px;
          padding: 36px 44px;
          margin-top: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 24px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 8px 50px rgba(255,107,44,0.08);
          flex-wrap: wrap;
        }
        .mp-trial::before {
          content: '';
          position: absolute;
          top: -60px; right: -60px;
          width: 220px; height: 220px;
          background: radial-gradient(circle,#FFD580,transparent 70%);
          opacity: 0.5;
          pointer-events: none;
        }
        .mp-trial-btn {
          flex-shrink: 0;
          padding: 14px 32px;
          border-radius: 50px;
          background: linear-gradient(135deg,#FF6B2C,#E84A1A);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          text-decoration: none;
          display: inline-block;
          transition: all 0.35s cubic-bezier(.34,1.56,.64,1);
          box-shadow: 0 8px 30px rgba(255,107,44,0.4);
        }
        .mp-trial-btn:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 16px 40px rgba(255,107,44,0.5); }

        /* ── Floating info badges ── */
        .mp-float-info {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,255,255,0.85);
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255,107,44,0.18);
          border-radius: 50px;
          padding: 7px 16px;
          font-size: 13px;
          font-weight: 500;
          color: #6B5344;
        }

        /* ── Fade-up animations on scroll ── */
        .mp-fade { opacity: 0; transform: translateY(32px); transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1); }
        .mp-root.visible .mp-fade { opacity: 1; transform: translateY(0); }
        .mp-fade-d1 { transition-delay: 0.1s; }
        .mp-fade-d2 { transition-delay: 0.2s; }
        .mp-fade-d3 { transition-delay: 0.3s; }
        .mp-fade-d4 { transition-delay: 0.4s; }
        .mp-fade-d5 { transition-delay: 0.5s; }
        .mp-fade-d6 { transition-delay: 0.6s; }
        .mp-fade-d7 { transition-delay: 0.7s; }

        /* Tab-switch transition */
        .mp-content { transition: opacity 0.25s ease; }
        .mp-content.switching { opacity: 0; }

        /* Glow ring on featured card */
        .mp-card-2.featured::after {
          content: '';
          position: absolute;
          inset: -2px;
          border-radius: 30px;
          padding: 2px;
          background: var(--featured-grad);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          pointer-events: none;
        }

        /* Spice deco */
        .mp-spice {
          position: absolute;
          opacity: 0.055;
          pointer-events: none;
          font-size: 50px;
          animation: mpSpinSlow 22s linear infinite;
          z-index: 0;
        }
        @keyframes mpSpinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }
      `}</style>

      <section
        id="meal-plans"
        ref={sectionRef}
        className={`mp-root${inView ? ' visible' : ''}`}
      >
        {/* Background */}
        <div className="mp-dots" />
        <div className="mp-blob" style={{ width: 500, height: 500, background: '#FFD580', top: -80, right: -100, animationDelay: '0s' }} />
        <div className="mp-blob" style={{ width: 380, height: 380, background: '#FF9F6B', bottom: 0, left: -80, animationDelay: '-4s' }} />
        <div className="mp-blob" style={{ width: 280, height: 280, background: tab === 'veg' ? '#6EE7B7' : '#FDA4AF', top: '45%', left: '55%', animationDelay: '-7s', transition: 'background 0.6s' }} />

        {/* Spice decorations */}
        <div className="mp-spice" style={{ top: '18%', left: '4%' }}>🌿</div>
        <div className="mp-spice" style={{ bottom: '20%', right: '3%', fontSize: 64, animationDuration: '30s' }}>🍲</div>
        <div className="mp-spice" style={{ top: '70%', left: '48%', fontSize: 32 }}>✦</div>

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 32px', position: 'relative', zIndex: 5 }}>

          {/* ── HEADER ── */}
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="mp-fade mp-fade-d1" style={{ marginBottom: 12 }}>
              <span className="mp-eyebrow">
                <Sparkles size={12} />
                Subscription Plans
              </span>
            </div>
            <h2 className="mp-heading mp-fade mp-fade-d2">
              Choose Your <em>Meal Plan</em>
            </h2>
            <p className="mp-fade mp-fade-d3" style={{ fontSize: 16, color: '#9B7B6A', lineHeight: 1.7, marginBottom: 28 }}>
              Handcrafted every morning, delivered fresh to your door.
            </p>

            {/* Info pills */}
            <div className="mp-fade mp-fade-d4" style={{ display: 'flex', justifyContent: 'center', gap: 10, flexWrap: 'wrap', marginBottom: 44 }}>
              {[
                { icon: <Clock size={13} />, text: '6 Days a Week' },
                { icon: <Truck size={13} />, text: 'Free Delivery' },
                { icon: <Star size={13} />, text: '26 Days / Month' },
              ].map(({ icon, text }) => (
                <span key={text} className="mp-float-info">
                  {icon} {text}
                </span>
              ))}
            </div>

            {/* Toggle */}
            <div className="mp-fade mp-fade-d5">
              <div className="mp-toggle-wrap">
                <button
                  className={`mp-toggle-btn${tab === 'veg' ? ' active-veg' : ''}`}
                  onClick={() => setTab('veg')}
                >
                  <Leaf size={17} /> Veg Plans
                </button>
                <button
                  className={`mp-toggle-btn${tab === 'nonveg' ? ' active-nonveg' : ''}`}
                  onClick={() => setTab('nonveg')}
                >
                  <Drumstick size={17} /> Non-Veg Plans
                </button>
              </div>
            </div>
          </div>

          {/* ── BRAND HEADER ── */}
          <div className="mp-fade mp-fade-d5" style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 52 }}>
            <div style={{
              width: 56, height: 56, borderRadius: 16, flexShrink: 0,
              background: data.accent,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              boxShadow: `0 8px 28px ${data.accentGlow}`,
              transition: 'background 0.4s, box-shadow 0.4s',
            }}>
              <data.icon size={28} color="#fff" />
            </div>
            <div>
              <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 24, fontWeight: 700, color: '#1A0A00', lineHeight: 1.1 }}>
                {data.brand}
              </div>
              <div style={{ fontSize: 14, color: '#9B7B6A', marginTop: 2 }}>{data.tagline}</div>
            </div>
          </div>

          {/* ══ 1 MEAL / DAY ══ */}
          <div className="mp-fade mp-fade-d5" style={{ marginBottom: 64 }}>
            <div className="mp-divider" style={{ marginBottom: 32 }}>
              <span className="mp-divider-title">1 Meal / Day</span>
              <div className="mp-divider-line" />
              <span className="mp-divider-label">Lunch OR Dinner</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(280px,1fr))', gap: 28 }}>
              {data.oneMeal.map((plan, i) => (
                <div
                  key={plan.name}
                  className="mp-card-1"
                  style={{
                    boxShadow: hoveredCard === `one-${i}` ? `0 24px 60px ${data.accentLight.replace('0.12','0.18')}` : '0 4px 24px rgba(26,10,0,0.06)',
                  }}
                  onMouseEnter={() => setHoveredCard(`one-${i}`)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  {/* Top color stripe */}
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 4, borderRadius: '28px 28px 0 0', background: `linear-gradient(90deg, ${data.accent}, ${tab === 'veg' ? '#F59E0B' : '#F97316'})` }} />

                  {/* Name */}
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: '#1A0A00' }}>{plan.name}</div>

                  {/* Pricing */}
                  <div className="mp-card-1-price-wrap">
                    <div className="mp-price-block">
                      <div className="mp-price-label">Weekly</div>
                      <div className="mp-price-val" style={{ fontSize: 26, color: '#1A0A00' }}>AED {plan.weekly}</div>
                    </div>
                    <div className="mp-price-sep" />
                    <div className="mp-price-block">
                      <div className="mp-price-label">Monthly</div>
                      <div className="mp-price-val" style={{ color: data.accent }}>AED {plan.monthly}</div>
                    </div>
                  </div>

                  {/* Features */}
                  <ul style={{ listStyle: 'none', margin: '0 0 28px', padding: 0 }}>
                    {plan.features.map(f => (
                      <li key={f} className="mp-feature">
                        <span className="mp-check" style={{ background: data.accentLight }}>
                          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={data.accent} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        </span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={`https://wa.me/${WHATSAPP_NUMBER}`}
                    target="_blank"
                    rel="noreferrer"
                    className="mp-btn-primary"
                    style={{
                      background: `linear-gradient(135deg, ${data.accent}, ${tab === 'veg' ? '#0D9488' : '#EA580C'})`,
                      ['--btn-glow' as string]: data.accentGlow,
                    }}
                  >
                    Subscribe Now →
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* ══ 2 MEALS / DAY ══ */}
          <div className="mp-fade mp-fade-d6">
            <div className="mp-divider" style={{ marginBottom: 40 }}>
              <span className="mp-divider-title">2 Meals / Day</span>
              <div className="mp-divider-line" />
              <span className="mp-divider-label">Lunch &amp; Dinner</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(260px,1fr))', gap: 28, alignItems: 'start' }}>
              {data.twoMeals.map((plan, i) => {
                const isFeatured = !!plan.badge;
                return (
                  <div
                    key={plan.name}
                    className={`mp-card-2${isFeatured ? ' featured' : ''}`}
                    style={{
                      border: isFeatured ? `2px solid ${data.accent}` : '1px solid rgba(26,10,0,0.07)',
                      boxShadow: isFeatured
                        ? `0 20px 60px ${data.accentLight.replace('0.12','0.22')}`
                        : hoveredCard === `two-${i}` ? '0 20px 50px rgba(26,10,0,0.1)' : '0 4px 24px rgba(26,10,0,0.06)',
                      ['--featured-grad' as string]: `linear-gradient(135deg, ${data.accent}, ${tab === 'veg' ? '#0D9488' : '#EA580C'})`,
                    }}
                    onMouseEnter={() => setHoveredCard(`two-${i}`)}
                    onMouseLeave={() => setHoveredCard(null)}
                  >
                    {/* Top accent bar */}
                    <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: isFeatured ? 5 : 3, borderRadius: '28px 28px 0 0', background: isFeatured ? `linear-gradient(90deg, ${data.accent}, ${tab === 'veg' ? '#F59E0B' : '#F97316'})` : 'rgba(26,10,0,0.06)' }} />

                    {/* Badge */}
                    {isFeatured && (
                      <div className="mp-badge" style={{ background: data.badgeBg }}>
                        {plan.badge}
                      </div>
                    )}

                    {/* Name */}
                    <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 20, fontWeight: 700, color: '#1A0A00', marginTop: isFeatured ? 24 : 8, marginBottom: 16 }}>
                      {plan.name}
                    </div>

                    {/* Price */}
                    <div style={{ marginBottom: 28 }}>
                      <span style={{ fontFamily: "'Playfair Display',serif", fontSize: 40, fontWeight: 900, color: isFeatured ? data.accent : '#1A0A00', lineHeight: 1 }}>
                        AED {plan.price}
                      </span>
                      <span style={{ fontSize: 14, color: '#9B7B6A', marginLeft: 6 }}>/month</span>
                    </div>

                    {/* Features */}
                    <ul style={{ listStyle: 'none', margin: '0 0 28px', padding: 0, flex: 1 }}>
                      {plan.features.map(f => (
                        <li key={f} className="mp-feature">
                          <span className="mp-check" style={{ background: isFeatured ? data.accentLight : 'rgba(26,10,0,0.05)' }}>
                            <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={isFeatured ? data.accent : '#9B7B6A'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>

                    {isFeatured ? (
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mp-btn-primary"
                        style={{
                          background: `linear-gradient(135deg, ${data.accent}, ${tab === 'veg' ? '#0D9488' : '#EA580C'})`,
                          ['--btn-glow' as string]: data.accentGlow,
                        }}
                      >
                        Select Plan →
                      </a>
                    ) : (
                      <a
                        href={`https://wa.me/${WHATSAPP_NUMBER}`}
                        target="_blank"
                        rel="noreferrer"
                        className="mp-btn-outline"
                      >
                        Select Plan
                      </a>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* ══ TRIAL BANNER ══ */}
          <div className="mp-fade mp-fade-d7">
            <div className="mp-trial">
              <div style={{ display: 'flex', alignItems: 'center', gap: 20, position: 'relative', zIndex: 1 }}>
                <div style={{
                  width: 64, height: 64,
                  background: 'linear-gradient(135deg,#FFF0E0,#FFECD2)',
                  border: '1px solid rgba(255,107,44,0.2)',
                  borderRadius: 20,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: 30,
                  flexShrink: 0,
                }}>
                  🎁
                </div>
                <div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 22, fontWeight: 700, color: '#1A0A00', marginBottom: 4 }}>
                    Want to taste before subscribing?
                  </div>
                  <div style={{ fontSize: 15, color: '#9B7B6A' }}>
                    Try our 2-day trial meal — no commitment needed.
                  </div>
                </div>
              </div>

              <a
                href={`https://wa.me/${WHATSAPP_NUMBER}`}
                target="_blank"
                rel="noreferrer"
                className="mp-trial-btn"
                style={{ position: 'relative', zIndex: 1 }}
              >
                Book a Trial 🍲
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}