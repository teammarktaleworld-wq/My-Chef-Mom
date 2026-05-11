



// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { Leaf, Drumstick, Sparkles, Clock, Truck, Star, ChevronRight } from 'lucide-react';

// const WHATSAPP_NUMBER = '+971557998925';

// /* ─────────────────────────────────────────────
//    DATA  (corrected prices & structure)
//    2 Meals / Day — Monthly Plans
// ───────────────────────────────────────────── */
// const PLANS = [
//   {
//     tier: 'Basic',
//     badge: null,
//     vegPrice: 699,
//     nonvegPrice: 899,
//     color: '#FF6B2C',
//     features: {
//       veg: ['Roti (4 pcs) + Rice', 'Dal + 1 Sabzi', 'Salad & Pickle', 'Mon – Sat delivery'],
//       nonveg: ['Roti (4 pcs) + Rice', 'Chicken / Egg Curry', 'Salad & Pickle', 'Mon – Sat delivery'],
//     },
//   },
//   {
//     tier: 'Standard',
//     badge: '⭐ Most Preferred',
//     vegPrice: 749,
//     nonvegPrice: 949,
//     color: '#E84A1A',
//     features: {
//       veg: ['Roti (4 pcs) + Rice', 'Dal + 2 Sabzi', 'Salad, Pickle & Papad', 'Sweets (3×/week)', 'Mon – Sat delivery'],
//       nonveg: ['Roti (4 pcs) + Rice', 'Chicken Curry + Dal / Sabzi', 'Salad, Pickle & Papad', 'Sweets (3×/week)', 'Mon – Sat delivery'],
//     },
//   },
//   {
//     tier: 'Premium',
//     badge: null,
//     vegPrice: 849,
//     nonvegPrice: 1049,
//     color: '#C73A0F',
//     features: {
//       veg: ['Roti (unlimited) + Rice', 'Dal + 3 Sabzi + Soup', 'Salad, Pickle & Papad', 'Daily Dessert', 'Chaach included', 'Mon – Sat delivery'],
//       nonveg: ['Roti (unlimited) + Rice', 'Chicken + Special Dish', 'Salad, Pickle & Raita', 'Daily Dessert', 'Shorba included', 'Mon – Sat delivery'],
//     },
//   },
// ];

// /* ─────────────────────────────────────────────
//    HOOK
// ───────────────────────────────────────────── */
// function useInView(threshold = 0.05) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setInView(true); },
//       { threshold }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return { ref, inView };
// }

// /* ─────────────────────────────────────────────
//    COMPONENT
// ───────────────────────────────────────────── */
// export default function MealPlans() {
//   const [tab, setTab] = useState<'veg' | 'nonveg'>('veg');
//   const { ref: sectionRef, inView } = useInView(0.05);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

//         /* ── Root ── */
//         .mp-root {
//           font-family: 'DM Sans', sans-serif;
//           background: linear-gradient(170deg, #FFF8F0 0%, #FFF0E0 40%, #FFF5EB 100%);
//           position: relative;
//           overflow: hidden;
//           padding: 80px 0 100px;
//         }

//         /* ── Blobs ── */
//         .mp-blob {
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(90px);
//           opacity: 0.28;
//           pointer-events: none;
//           animation: mpBlobDrift 10s ease-in-out infinite;
//         }
//         @keyframes mpBlobDrift {
//           0%,100% { transform: translate(0,0) scale(1); }
//           40%      { transform: translate(40px,-30px) scale(1.07); }
//           70%      { transform: translate(-25px,25px) scale(0.94); }
//         }

//         /* ── Dot pattern ── */
//         .mp-dots {
//           position: absolute;
//           inset: 0;
//           background-image: radial-gradient(circle, rgba(255,107,44,0.12) 1px, transparent 1px);
//           background-size: 36px 36px;
//           pointer-events: none;
//           z-index: 0;
//         }

//         /* ── Spice deco ── */
//         .mp-spice {
//           position: absolute;
//           opacity: 0.055;
//           pointer-events: none;
//           animation: mpSpinSlow 22s linear infinite;
//           z-index: 0;
//           display: none;
//         }
//         @keyframes mpSpinSlow {
//           from { transform: rotate(0deg); }
//           to   { transform: rotate(360deg); }
//         }

//         /* ── Eyebrow ── */
//         .mp-eyebrow {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           background: rgba(255,107,44,0.1);
//           border: 1px solid rgba(255,107,44,0.28);
//           border-radius: 50px;
//           padding: 6px 16px;
//           font-size: 11px;
//           font-weight: 600;
//           color: #FF6B2C;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           margin-bottom: 14px;
//         }

//         /* ── Heading ── */
//         .mp-heading {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(28px, 5vw, 54px);
//           font-weight: 900;
//           color: #1A0A00;
//           line-height: 1.08;
//           letter-spacing: -1px;
//           margin: 0 0 14px;
//         }
//         .mp-heading em {
//           font-style: italic;
//           color: #FF6B2C;
//           position: relative;
//         }
//         .mp-heading em::after {
//           content: '';
//           position: absolute;
//           bottom: 2px; left: 0; right: 0;
//           height: 3px;
//           background: linear-gradient(90deg,#FF6B2C,#F5A623);
//           border-radius: 2px;
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 1s cubic-bezier(.16,1,.3,1) 0.5s;
//         }
//         .mp-root.visible .mp-heading em::after { transform: scaleX(1); }

//         /* ── Info pills ── */
//         .mp-pill {
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           background: rgba(255,255,255,0.85);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255,107,44,0.18);
//           border-radius: 50px;
//           padding: 7px 14px;
//           font-size: 12px;
//           font-weight: 500;
//           color: #6B5344;
//           white-space: nowrap;
//         }

//         /* ── Toggle ── */
//         .mp-toggle-wrap {
//           background: rgba(255,255,255,0.75);
//           backdrop-filter: blur(20px);
//           border: 1px solid rgba(255,107,44,0.2);
//           border-radius: 60px;
//           padding: 5px;
//           display: inline-flex;
//           box-shadow: 0 8px 40px rgba(255,107,44,0.1);
//         }
//         .mp-toggle-btn {
//           display: flex;
//           align-items: center;
//           gap: 7px;
//           padding: 10px 20px;
//           border-radius: 50px;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 14px;
//           font-weight: 600;
//           cursor: pointer;
//           border: none;
//           background: transparent;
//           color: #9B7B6A;
//           transition: all 0.35s cubic-bezier(.34,1.56,.64,1);
//           white-space: nowrap;
//         }
//         .mp-toggle-btn.active {
//           background: linear-gradient(135deg,#FF6B2C,#E84A1A);
//           color: #fff;
//           box-shadow: 0 6px 24px rgba(255,107,44,0.38);
//           transform: scale(1.03);
//         }

//         /* ── Section divider ── */
//         .mp-divider-row {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           margin-bottom: 28px;
//         }
//         .mp-section-title {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(16px, 2.5vw, 20px);
//           font-weight: 700;
//           color: #1A0A00;
//           white-space: nowrap;
//         }
//         .mp-section-label {
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           color: #9B7B6A;
//           white-space: nowrap;
//         }
//         .mp-divider-line {
//           flex: 1;
//           height: 1px;
//           background: rgba(26,10,0,0.08);
//           min-width: 12px;
//         }

//         /* ── Cards grid ── */
//         .mp-cards-grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 20px;
//         }

//         /* ── Card ── */
//         .mp-card {
//           background: #fff;
//           border-radius: 24px;
//           border: 1.5px solid rgba(26,10,0,0.07);
//           position: relative;
//           overflow: hidden;
//           transition: all 0.38s cubic-bezier(.34,1.56,.64,1);
//           display: flex;
//           flex-direction: column;
//           box-shadow: 0 4px 24px rgba(26,10,0,0.06);
//         }
//         .mp-card:hover {
//           transform: translateY(-7px) scale(1.01);
//           box-shadow: 0 24px 60px rgba(26,10,0,0.12);
//         }
//         .mp-card.featured {
//           border-color: #FF6B2C;
//           box-shadow: 0 12px 48px rgba(255,107,44,0.18);
//         }
//         .mp-card.featured:hover {
//           box-shadow: 0 28px 70px rgba(255,107,44,0.26);
//         }

//         /* ── Card stripe ── */
//         .mp-card-stripe {
//           height: 4px;
//           width: 100%;
//           flex-shrink: 0;
//         }
//         .mp-card.featured .mp-card-stripe { height: 5px; }

//         /* ── Card badge ── */
//         .mp-card-badge {
//           position: absolute;
//           top: 0;
//           left: 50%;
//           transform: translateX(-50%);
//           background: linear-gradient(135deg,#FF6B2C,#E84A1A);
//           color: #fff;
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           padding: 5px 16px;
//           border-radius: 0 0 12px 12px;
//           white-space: nowrap;
//         }

//         /* ── Card body ── */
//         .mp-card-body {
//           padding: 26px 26px 24px;
//           display: flex;
//           flex-direction: column;
//           flex: 1;
//         }

//         .mp-tier-name {
//           font-family: 'Playfair Display', serif;
//           font-size: 21px;
//           font-weight: 700;
//           color: #1A0A00;
//           margin-bottom: 6px;
//           margin-top: 4px;
//         }
//         .mp-card.featured .mp-tier-name { margin-top: 16px; }

//         .mp-price {
//           font-family: 'Playfair Display', serif;
//           font-size: 40px;
//           font-weight: 900;
//           line-height: 1;
//           margin-bottom: 3px;
//         }
//         .mp-price-sub {
//           font-size: 12px;
//           color: #9B7B6A;
//           margin-bottom: 22px;
//         }

//         /* ── Feature list ── */
//         .mp-features {
//           list-style: none;
//           margin: 0 0 22px;
//           padding: 0;
//           flex: 1;
//         }
//         .mp-feature-item {
//           display: flex;
//           align-items: flex-start;
//           gap: 9px;
//           font-size: 13px;
//           color: #6B5344;
//           font-weight: 500;
//           line-height: 1.5;
//           padding: 5px 0;
//         }
//         .mp-check-icon {
//           flex-shrink: 0;
//           margin-top: 2px;
//           width: 16px;
//           height: 16px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         /* ── Buttons ── */
//         .mp-btn-primary {
//           display: block;
//           width: 100%;
//           padding: 13px;
//           border-radius: 50px;
//           border: none;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 14px;
//           font-weight: 700;
//           color: #fff;
//           cursor: pointer;
//           text-align: center;
//           text-decoration: none;
//           transition: all 0.35s cubic-bezier(.34,1.56,.64,1);
//           background: linear-gradient(135deg,#FF6B2C,#E84A1A);
//           box-shadow: 0 8px 24px rgba(255,107,44,0.3);
//         }
//         .mp-btn-primary:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 14px 36px rgba(255,107,44,0.45);
//         }
//         .mp-btn-outline {
//           display: block;
//           width: 100%;
//           padding: 13px;
//           border-radius: 50px;
//           border: 1.5px solid rgba(26,10,0,0.14);
//           background: transparent;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 14px;
//           font-weight: 600;
//           color: #1A0A00;
//           cursor: pointer;
//           text-align: center;
//           text-decoration: none;
//           transition: all 0.3s ease;
//         }
//         .mp-btn-outline:hover {
//           border-color: #FF6B2C;
//           color: #FF6B2C;
//           background: rgba(255,107,44,0.04);
//           transform: translateY(-2px);
//         }

//         /* ── Trial banner ── */
//         .mp-trial {
//           background: #fff;
//           border: 1px solid rgba(255,107,44,0.2);
//           border-radius: 24px;
//           padding: 28px;
//           margin-top: 52px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 20px;
//           position: relative;
//           overflow: hidden;
//           box-shadow: 0 8px 50px rgba(255,107,44,0.07);
//           flex-wrap: wrap;
//         }
//         .mp-trial::before {
//           content: '';
//           position: absolute;
//           top: -50px; right: -50px;
//           width: 180px; height: 180px;
//           background: radial-gradient(circle,#FFD580,transparent 70%);
//           opacity: 0.5;
//           pointer-events: none;
//         }
//         .mp-trial-btn {
//           flex-shrink: 0;
//           padding: 13px 26px;
//           border-radius: 50px;
//           background: linear-gradient(135deg,#FF6B2C,#E84A1A);
//           color: #fff;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 14px;
//           font-weight: 700;
//           border: none;
//           cursor: pointer;
//           text-decoration: none;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           transition: all 0.35s cubic-bezier(.34,1.56,.64,1);
//           box-shadow: 0 8px 28px rgba(255,107,44,0.4);
//         }
//         .mp-trial-btn:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 16px 40px rgba(255,107,44,0.5); }

//         /* ── Fade animations ── */
//         .mp-fade { opacity: 0; transform: translateY(30px); transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1); }
//         .mp-root.visible .mp-fade { opacity: 1; transform: translateY(0); }
//         .mp-fade-d1 { transition-delay: 0.08s; }
//         .mp-fade-d2 { transition-delay: 0.16s; }
//         .mp-fade-d3 { transition-delay: 0.24s; }
//         .mp-fade-d4 { transition-delay: 0.32s; }
//         .mp-fade-d5 { transition-delay: 0.40s; }
//         .mp-fade-d6 { transition-delay: 0.52s; }

//         /* ── Container ── */
//         .mp-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 16px;
//           position: relative;
//           z-index: 5;
//         }

//         /* ── Pills row ── */
//         .mp-pills-row {
//           display: flex;
//           justify-content: center;
//           gap: 8px;
//           flex-wrap: wrap;
//           margin-bottom: 28px;
//         }

//         /* ── Note ── */
//         .mp-note {
//           text-align: center;
//           font-size: 12px;
//           color: #9B7B6A;
//           margin-top: 16px;
//           line-height: 1.6;
//         }

//         /* ══════════════════════════════
//            RESPONSIVE BREAKPOINTS
//         ══════════════════════════════ */

//         /* XS: max 360px */
//         @media (max-width: 360px) {
//           .mp-root { padding: 56px 0 72px; }
//           .mp-container { padding: 0 12px; }
//           .mp-toggle-btn { padding: 9px 12px; font-size: 12px; gap: 5px; }
//           .mp-card-body { padding: 20px 16px 18px; }
//           .mp-price { font-size: 32px; }
//           .mp-tier-name { font-size: 18px; }
//           .mp-trial { padding: 20px 16px; }
//           .mp-trial-btn { width: 100%; justify-content: center; }
//           .mp-heading { font-size: 26px; letter-spacing: -0.5px; }
//           .mp-section-label { display: none; }
//         }

//         /* SM: 361–559px */
//         @media (min-width: 361px) and (max-width: 559px) {
//           .mp-root { padding: 64px 0 80px; }
//           .mp-container { padding: 0 14px; }
//           .mp-card-body { padding: 24px 20px 20px; }
//           .mp-price { font-size: 36px; }
//           .mp-trial-btn { width: 100%; justify-content: center; }
//           .mp-section-label { font-size: 9px; letter-spacing: 1px; }
//         }

//         /* MD: 560–767px — 2 columns */
//         @media (min-width: 560px) {
//           .mp-cards-grid { grid-template-columns: 1fr 1fr; }
//           .mp-card.featured {
//             grid-column: span 2;
//             max-width: 440px;
//             width: 100%;
//             margin: 0 auto;
//           }
//         }

//         /* MD-L: 768–899px */
//         @media (min-width: 768px) {
//           .mp-root { padding: 76px 0 96px; }
//           .mp-container { padding: 0 24px; }
//           .mp-toggle-btn { padding: 11px 24px; font-size: 15px; }
//         }

//         /* LG: 900px — 3 columns */
//         @media (min-width: 900px) {
//           .mp-root { padding: 90px 0 110px; }
//           .mp-container { padding: 0 32px; }
//           .mp-spice { display: block; }
//           .mp-cards-grid { grid-template-columns: repeat(3, 1fr); }
//           .mp-card.featured {
//             grid-column: auto;
//             max-width: none;
//             transform: scale(1.04);
//           }
//           .mp-card.featured:hover { transform: scale(1.06) translateY(-7px); }
//         }

//         /* XL: 1200px+ */
//         @media (min-width: 1200px) {
//           .mp-container { padding: 0 48px; }
//           .mp-price { font-size: 44px; }
//           .mp-card-body { padding: 30px 30px 26px; }
//         }
//       `}</style>

//       <section
//         id="meal-plans"
//         ref={sectionRef}
//         className={`mp-root${inView ? ' visible' : ''}`}
//       >
//         {/* Background */}
//         <div className="mp-dots" />
//         <div className="mp-blob" style={{ width: 500, height: 500, background: '#FFD580', top: -80, right: -100, animationDelay: '0s' }} />
//         <div className="mp-blob" style={{ width: 380, height: 380, background: '#FF9F6B', bottom: 0, left: -80, animationDelay: '-4s' }} />
//         <div className="mp-blob" style={{ width: 280, height: 280, background: '#FFCFB0', top: '45%', left: '55%', animationDelay: '-7s' }} />

//         {/* Spice deco (desktop only via CSS) */}
//         <div className="mp-spice" style={{ top: '18%', left: '4%', fontSize: 44 }}>🌶️</div>
//         <div className="mp-spice" style={{ bottom: '18%', right: '3%', fontSize: 56, animationDuration: '30s' }}>🍲</div>

//         <div className="mp-container">

//           {/* ── HEADER ── */}
//           <div style={{ textAlign: 'center', marginBottom: 40 }}>
//             <div className="mp-fade mp-fade-d1">
//               <span className="mp-eyebrow">
//                 <Sparkles size={11} />
//                 Subscription Plans
//               </span>
//             </div>
//             <h2 className="mp-heading mp-fade mp-fade-d2">
//               Choose Your <em>Meal Plan</em>
//             </h2>
//             <p className="mp-fade mp-fade-d3" style={{ fontSize: 15, color: '#9B7B6A', lineHeight: 1.7, margin: '0 auto 22px', maxWidth: 480 }}>
//               Handcrafted every morning by female home chefs — delivered fresh, 6 days a week.
//             </p>

//             {/* Pills */}
//             <div className="mp-fade mp-fade-d3 mp-pills-row">
//               {[
//                 { icon: <Clock size={12} />, text: '6 Days a Week' },
//                 { icon: <Truck size={12} />, text: 'Free Delivery' },
//                 { icon: <Star size={12} />, text: '26 Days / Month' },
//               ].map(({ icon, text }) => (
//                 <span key={text} className="mp-pill">{icon} {text}</span>
//               ))}
//             </div>

//             {/* Toggle */}
//             <div className="mp-fade mp-fade-d4">
//               <div className="mp-toggle-wrap">
//                 <button
//                   className={`mp-toggle-btn${tab === 'veg' ? ' active' : ''}`}
//                   onClick={() => setTab('veg')}
//                 >
//                   <Leaf size={15} /> Veg Plans
//                 </button>
//                 <button
//                   className={`mp-toggle-btn${tab === 'nonveg' ? ' active' : ''}`}
//                   onClick={() => setTab('nonveg')}
//                 >
//                   <Drumstick size={15} /> Non-Veg Plans
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* ── SECTION LABEL ── */}
//           <div className="mp-fade mp-fade-d4 mp-divider-row">
//             <span className="mp-section-title">2 Meals / Day</span>
//             <div className="mp-divider-line" />
//             <span className="mp-section-label">Monthly · Lunch &amp; Dinner</span>
//           </div>

//           {/* ── CARDS ── */}
//           <div className="mp-fade mp-fade-d5 mp-cards-grid">
//             {PLANS.map((plan) => {
//               const price = tab === 'veg' ? plan.vegPrice : plan.nonvegPrice;
//               const features = plan.features[tab];
//               const isFeatured = !!plan.badge;

//               return (
//                 <div key={plan.tier} className={`mp-card${isFeatured ? ' featured' : ''}`}>
//                   {/* Top color stripe */}
//                   <div
//                     className="mp-card-stripe"
//                     style={{ background: `linear-gradient(90deg, ${plan.color}, #F5A623)` }}
//                   />

//                   {/* Badge */}
//                   {isFeatured && <div className="mp-card-badge">{plan.badge}</div>}

//                   <div className="mp-card-body">
//                     <div className="mp-tier-name">{plan.tier} Plan</div>

//                     <div className="mp-price" style={{ color: isFeatured ? plan.color : '#1A0A00' }}>
//                       AED {price}
//                     </div>
//                     <div className="mp-price-sub">per month · 2 meals / day</div>

//                     <ul className="mp-features">
//                       {features.map((f) => (
//                         <li key={f} className="mp-feature-item">
//                           <span
//                             className="mp-check-icon"
//                             style={{ background: isFeatured ? 'rgba(255,107,44,0.1)' : 'rgba(26,10,0,0.05)' }}
//                           >
//                             <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
//                               stroke={isFeatured ? plan.color : '#9B7B6A'}
//                               strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                               <polyline points="20 6 9 17 4 12" />
//                             </svg>
//                           </span>
//                           {f}
//                         </li>
//                       ))}
//                     </ul>

//                     {isFeatured ? (
//                       <a
//                         href={`https://wa.me/${WHATSAPP_NUMBER}`}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="mp-btn-primary"
//                       >
//                         Subscribe Now →
//                       </a>
//                     ) : (
//                       <a
//                         href={`https://wa.me/${WHATSAPP_NUMBER}`}
//                         target="_blank"
//                         rel="noreferrer"
//                         className="mp-btn-outline"
//                       >
//                         Select Plan
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* Note */}
//           <p className="mp-fade mp-fade-d5 mp-note">
//             ✨ Fresh, less oil &amp; ghar jaisa taste · All plans include roti, rice, dal, sabzi &amp; salad daily
//           </p>

//           {/* ── TRIAL BANNER ── */}
//           <div className="mp-fade mp-fade-d6">
//             <div className="mp-trial">
//               <div style={{ display: 'flex', alignItems: 'center', gap: 16, position: 'relative', zIndex: 1, flex: 1, minWidth: 0 }}>
//                 <div style={{
//                   width: 54, height: 54, flexShrink: 0,
//                   background: 'linear-gradient(135deg,#FFF0E0,#FFE4CC)',
//                   border: '1px solid rgba(255,107,44,0.2)',
//                   borderRadius: 16,
//                   display: 'flex', alignItems: 'center', justifyContent: 'center',
//                   fontSize: 26,
//                 }}>
//                   🎁
//                 </div>
//                 <div style={{ minWidth: 0 }}>
//                   <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(16px,2.5vw,20px)', fontWeight: 700, color: '#1A0A00', marginBottom: 3 }}>
//                     Want to taste before subscribing?
//                   </div>
//                   <div style={{ fontSize: 13, color: '#9B7B6A' }}>
//                     Try our 2-day trial meal — no commitment needed. 😊
//                   </div>
//                 </div>
//               </div>
//               <a
//                 href={`https://wa.me/${WHATSAPP_NUMBER}`}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="mp-trial-btn"
//                 style={{ position: 'relative', zIndex: 1 }}
//               >
//                 Book a Trial 🍲
//                 <ChevronRight size={14} />
//               </a>
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }














// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { Leaf, Drumstick, Sparkles, Clock, Truck, Star, ChevronRight } from 'lucide-react';

// const WHATSAPP_NUMBER = '+971557998925';

// /* ─────────────────────────────────────────────
//    WHATSAPP MESSAGE BUILDER
// ───────────────────────────────────────────── */
// function buildWhatsAppUrl(plan: {
//   tier: string;
//   type: 'Veg' | 'Non-Veg';
//   price: number;
//   features: string[];
//   isTrial?: boolean;
// }) {
//   const { tier, type, price, features, isTrial } = plan;

//   if (isTrial) {
//     const msg = [
//       `👋 Hello The Chef Mom!`,
//       ``,
//       `I'd like to book a *2-Day Trial Meal* before subscribing.`,
//       ``,
//       `Please share the trial details and delivery schedule.`,
//       ``,
//       `Thank you! 🙏`,
//     ].join('\n');
//     return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
//   }

//   const msg = [
//     `👋 Hello The Chef Mom!`,
//     ``,
//     `I'm interested in subscribing to the following meal plan:`,
//     ``,
//     `📦 *Plan:* ${tier} Plan (${type})`,
//     `💰 *Price:* AED ${price}/month`,
//     `🍽️ *Includes:*`,
//     ...features.map(f => `   • ${f}`),
//     ``,
//     `Please share payment details and delivery schedule.`,
//     ``,
//     `Thank you! 🙏`,
//   ].join('\n');

//   return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
// }

// const PLANS = [
//   {
//     tier: 'Basic',
//     badge: null,
//     vegPrice: 699,
//     nonvegPrice: 899,
//     color: '#FF6B2C',
//     features: {
//       veg: ['Roti (4 pcs) + Rice', 'Dal + 1 Sabzi', 'Salad & Pickle', 'Mon – Sat delivery'],
//       nonveg: ['Roti (4 pcs) + Rice', 'Chicken / Egg Curry', 'Salad & Pickle', 'Mon – Sat delivery'],
//     },
//   },
//   {
//     tier: 'Standard',
//     badge: '⭐ Most Preferred',
//     vegPrice: 749,
//     nonvegPrice: 949,
//     color: '#E84A1A',
//     features: {
//       veg: ['Roti (4 pcs) + Rice', 'Dal + 2 Sabzi', 'Salad, Pickle & Papad', 'Sweets (3×/week)', 'Mon – Sat delivery'],
//       nonveg: ['Roti (4 pcs) + Rice', 'Chicken Curry + Dal / Sabzi', 'Salad, Pickle & Papad', 'Sweets (3×/week)', 'Mon – Sat delivery'],
//     },
//   },
//   {
//     tier: 'Premium',
//     badge: null,
//     vegPrice: 849,
//     nonvegPrice: 1049,
//     color: '#C73A0F',
//     features: {
//       veg: ['Roti (unlimited) + Rice', 'Dal + 3 Sabzi + Soup', 'Salad, Pickle & Papad', 'Daily Dessert', 'Chaach included', 'Mon – Sat delivery'],
//       nonveg: ['Roti (unlimited) + Rice', 'Chicken + Special Dish', 'Salad, Pickle & Raita', 'Daily Dessert', 'Shorba included', 'Mon – Sat delivery'],
//     },
//   },
// ];

// function useInView(threshold = 0.05) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) setInView(true); },
//       { threshold }
//     );
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return { ref, inView };
// }

// export default function MealPlans() {
//   const [tab, setTab] = useState<'veg' | 'nonveg'>('veg');
//   const { ref: sectionRef, inView } = useInView(0.05);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

//         .mp-root {
//           font-family: 'DM Sans', sans-serif;
//           background: linear-gradient(170deg, #FFF8F0 0%, #FFF0E0 40%, #FFF5EB 100%);
//           position: relative;
//           overflow: hidden;
//           padding: 80px 0 100px;
//         }
//         .mp-blob {
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(90px);
//           opacity: 0.28;
//           pointer-events: none;
//           animation: mpBlobDrift 10s ease-in-out infinite;
//         }
//         @keyframes mpBlobDrift {
//           0%,100% { transform: translate(0,0) scale(1); }
//           40%      { transform: translate(40px,-30px) scale(1.07); }
//           70%      { transform: translate(-25px,25px) scale(0.94); }
//         }
//         .mp-dots {
//           position: absolute;
//           inset: 0;
//           background-image: radial-gradient(circle, rgba(255,107,44,0.12) 1px, transparent 1px);
//           background-size: 36px 36px;
//           pointer-events: none;
//           z-index: 0;
//         }
//         .mp-spice {
//           position: absolute;
//           opacity: 0.055;
//           pointer-events: none;
//           animation: mpSpinSlow 22s linear infinite;
//           z-index: 0;
//           display: none;
//         }
//         @keyframes mpSpinSlow {
//           from { transform: rotate(0deg); }
//           to   { transform: rotate(360deg); }
//         }
//         .mp-eyebrow {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           background: rgba(255,107,44,0.1);
//           border: 1px solid rgba(255,107,44,0.28);
//           border-radius: 50px;
//           padding: 6px 16px;
//           font-size: 11px;
//           font-weight: 600;
//           color: #FF6B2C;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           margin-bottom: 14px;
//         }
//         .mp-heading {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(28px, 5vw, 54px);
//           font-weight: 900;
//           color: #1A0A00;
//           line-height: 1.08;
//           letter-spacing: -1px;
//           margin: 0 0 14px;
//         }
//         .mp-heading em {
//           font-style: italic;
//           color: #FF6B2C;
//           position: relative;
//         }
//         .mp-heading em::after {
//           content: '';
//           position: absolute;
//           bottom: 2px; left: 0; right: 0;
//           height: 3px;
//           background: linear-gradient(90deg,#FF6B2C,#F5A623);
//           border-radius: 2px;
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 1s cubic-bezier(.16,1,.3,1) 0.5s;
//         }
//         .mp-root.visible .mp-heading em::after { transform: scaleX(1); }
//         .mp-pill {
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           background: rgba(255,255,255,0.85);
//           backdrop-filter: blur(10px);
//           border: 1px solid rgba(255,107,44,0.18);
//           border-radius: 50px;
//           padding: 7px 14px;
//           font-size: 12px;
//           font-weight: 500;
//           color: #6B5344;
//           white-space: nowrap;
//         }
//         .mp-toggle-wrap {
//           background: rgba(255,255,255,0.75);
//           backdrop-filter: blur(20px);
//           border: 1px solid rgba(255,107,44,0.2);
//           border-radius: 60px;
//           padding: 5px;
//           display: inline-flex;
//           box-shadow: 0 8px 40px rgba(255,107,44,0.1);
//         }
//         .mp-toggle-btn {
//           display: flex;
//           align-items: center;
//           gap: 7px;
//           padding: 10px 20px;
//           border-radius: 50px;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 14px;
//           font-weight: 600;
//           cursor: pointer;
//           border: none;
//           background: transparent;
//           color: #9B7B6A;
//           transition: all 0.35s cubic-bezier(.34,1.56,.64,1);
//           white-space: nowrap;
//         }
//         .mp-toggle-btn.active {
//           background: linear-gradient(135deg,#FF6B2C,#E84A1A);
//           color: #fff;
//           box-shadow: 0 6px 24px rgba(255,107,44,0.38);
//           transform: scale(1.03);
//         }
//         .mp-divider-row {
//           display: flex;
//           align-items: center;
//           gap: 14px;
//           margin-bottom: 28px;
//         }
//         .mp-section-title {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(16px, 2.5vw, 20px);
//           font-weight: 700;
//           color: #1A0A00;
//           white-space: nowrap;
//         }
//         .mp-section-label {
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           color: #9B7B6A;
//           white-space: nowrap;
//         }
//         .mp-divider-line {
//           flex: 1;
//           height: 1px;
//           background: rgba(26,10,0,0.08);
//           min-width: 12px;
//         }
//         .mp-cards-grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 20px;
//         }
//         .mp-card {
//           background: #fff;
//           border-radius: 24px;
//           border: 1.5px solid rgba(26,10,0,0.07);
//           position: relative;
//           overflow: hidden;
//           transition: all 0.38s cubic-bezier(.34,1.56,.64,1);
//           display: flex;
//           flex-direction: column;
//           box-shadow: 0 4px 24px rgba(26,10,0,0.06);
//         }
//         .mp-card:hover {
//           transform: translateY(-7px) scale(1.01);
//           box-shadow: 0 24px 60px rgba(26,10,0,0.12);
//         }
//         .mp-card.featured {
//           border-color: #FF6B2C;
//           box-shadow: 0 12px 48px rgba(255,107,44,0.18);
//         }
//         .mp-card.featured:hover {
//           box-shadow: 0 28px 70px rgba(255,107,44,0.26);
//         }
//         .mp-card-stripe {
//           height: 4px;
//           width: 100%;
//           flex-shrink: 0;
//         }
//         .mp-card.featured .mp-card-stripe { height: 5px; }
//         .mp-card-badge {
//           position: absolute;
//           top: 0;
//           left: 50%;
//           transform: translateX(-50%);
//           background: linear-gradient(135deg,#FF6B2C,#E84A1A);
//           color: #fff;
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           padding: 5px 16px;
//           border-radius: 0 0 12px 12px;
//           white-space: nowrap;
//         }
//         .mp-card-body {
//           padding: 26px 26px 24px;
//           display: flex;
//           flex-direction: column;
//           flex: 1;
//         }
//         .mp-tier-name {
//           font-family: 'Playfair Display', serif;
//           font-size: 21px;
//           font-weight: 700;
//           color: #1A0A00;
//           margin-bottom: 6px;
//           margin-top: 4px;
//         }
//         .mp-card.featured .mp-tier-name { margin-top: 16px; }
//         .mp-price {
//           font-family: 'Playfair Display', serif;
//           font-size: 40px;
//           font-weight: 900;
//           line-height: 1;
//           margin-bottom: 3px;
//         }
//         .mp-price-sub {
//           font-size: 12px;
//           color: #9B7B6A;
//           margin-bottom: 22px;
//         }
//         .mp-features {
//           list-style: none;
//           margin: 0 0 22px;
//           padding: 0;
//           flex: 1;
//         }
//         .mp-feature-item {
//           display: flex;
//           align-items: flex-start;
//           gap: 9px;
//           font-size: 13px;
//           color: #6B5344;
//           font-weight: 500;
//           line-height: 1.5;
//           padding: 5px 0;
//         }
//         .mp-check-icon {
//           flex-shrink: 0;
//           margin-top: 2px;
//           width: 16px;
//           height: 16px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         /* ── Buttons ── */
//         .mp-btn-primary {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 8px;
//           width: 100%;
//           padding: 13px;
//           border-radius: 50px;
//           border: none;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 14px;
//           font-weight: 700;
//           color: #fff;
//           cursor: pointer;
//           text-align: center;
//           text-decoration: none;
//           transition: all 0.35s cubic-bezier(.34,1.56,.64,1);
//           background: linear-gradient(135deg,#FF6B2C,#E84A1A);
//           box-shadow: 0 8px 24px rgba(255,107,44,0.3);
//         }
//         .mp-btn-primary:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 14px 36px rgba(255,107,44,0.45);
//         }
//         .mp-btn-outline {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 8px;
//           width: 100%;
//           padding: 13px;
//           border-radius: 50px;
//           border: 1.5px solid rgba(26,10,0,0.14);
//           background: transparent;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 14px;
//           font-weight: 600;
//           color: #1A0A00;
//           cursor: pointer;
//           text-align: center;
//           text-decoration: none;
//           transition: all 0.3s ease;
//         }
//         .mp-btn-outline:hover {
//           border-color: #FF6B2C;
//           color: #FF6B2C;
//           background: rgba(255,107,44,0.04);
//           transform: translateY(-2px);
//         }

//         /* WhatsApp icon pulse on hover */
//         .mp-btn-primary:hover .mp-wa-icon,
//         .mp-btn-outline:hover .mp-wa-icon {
//           animation: mpWaPulse 0.5s ease;
//         }
//         @keyframes mpWaPulse {
//           0%   { transform: scale(1); }
//           40%  { transform: scale(1.25); }
//           100% { transform: scale(1); }
//         }

//         .mp-trial {
//           background: #fff;
//           border: 1px solid rgba(255,107,44,0.2);
//           border-radius: 24px;
//           padding: 28px;
//           margin-top: 52px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 20px;
//           position: relative;
//           overflow: hidden;
//           box-shadow: 0 8px 50px rgba(255,107,44,0.07);
//           flex-wrap: wrap;
//         }
//         .mp-trial::before {
//           content: '';
//           position: absolute;
//           top: -50px; right: -50px;
//           width: 180px; height: 180px;
//           background: radial-gradient(circle,#FFD580,transparent 70%);
//           opacity: 0.5;
//           pointer-events: none;
//         }
//         .mp-trial-btn {
//           flex-shrink: 0;
//           padding: 13px 26px;
//           border-radius: 50px;
//           background: linear-gradient(135deg,#FF6B2C,#E84A1A);
//           color: #fff;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 14px;
//           font-weight: 700;
//           border: none;
//           cursor: pointer;
//           text-decoration: none;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           transition: all 0.35s cubic-bezier(.34,1.56,.64,1);
//           box-shadow: 0 8px 28px rgba(255,107,44,0.4);
//         }
//         .mp-trial-btn:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 16px 40px rgba(255,107,44,0.5); }

//         .mp-fade { opacity: 0; transform: translateY(30px); transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1); }
//         .mp-root.visible .mp-fade { opacity: 1; transform: translateY(0); }
//         .mp-fade-d1 { transition-delay: 0.08s; }
//         .mp-fade-d2 { transition-delay: 0.16s; }
//         .mp-fade-d3 { transition-delay: 0.24s; }
//         .mp-fade-d4 { transition-delay: 0.32s; }
//         .mp-fade-d5 { transition-delay: 0.40s; }
//         .mp-fade-d6 { transition-delay: 0.52s; }

//         .mp-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 16px;
//           position: relative;
//           z-index: 5;
//         }
//         .mp-pills-row {
//           display: flex;
//           justify-content: center;
//           gap: 8px;
//           flex-wrap: wrap;
//           margin-bottom: 28px;
//         }
//         .mp-note {
//           text-align: center;
//           font-size: 12px;
//           color: #9B7B6A;
//           margin-top: 16px;
//           line-height: 1.6;
//         }

//         /* ══ RESPONSIVE ══ */
//         @media (max-width: 360px) {
//           .mp-root { padding: 56px 0 72px; }
//           .mp-container { padding: 0 12px; }
//           .mp-toggle-btn { padding: 9px 12px; font-size: 12px; gap: 5px; }
//           .mp-card-body { padding: 20px 16px 18px; }
//           .mp-price { font-size: 32px; }
//           .mp-tier-name { font-size: 18px; }
//           .mp-trial { padding: 20px 16px; }
//           .mp-trial-btn { width: 100%; justify-content: center; }
//           .mp-heading { font-size: 26px; letter-spacing: -0.5px; }
//           .mp-section-label { display: none; }
//         }
//         @media (min-width: 361px) and (max-width: 559px) {
//           .mp-root { padding: 64px 0 80px; }
//           .mp-container { padding: 0 14px; }
//           .mp-card-body { padding: 24px 20px 20px; }
//           .mp-price { font-size: 36px; }
//           .mp-trial-btn { width: 100%; justify-content: center; }
//           .mp-section-label { font-size: 9px; letter-spacing: 1px; }
//         }
//         @media (min-width: 560px) {
//           .mp-cards-grid { grid-template-columns: 1fr 1fr; }
//           .mp-card.featured {
//             grid-column: span 2;
//             max-width: 440px;
//             width: 100%;
//             margin: 0 auto;
//           }
//         }
//         @media (min-width: 768px) {
//           .mp-root { padding: 76px 0 96px; }
//           .mp-container { padding: 0 24px; }
//           .mp-toggle-btn { padding: 11px 24px; font-size: 15px; }
//         }
//         @media (min-width: 900px) {
//           .mp-root { padding: 90px 0 110px; }
//           .mp-container { padding: 0 32px; }
//           .mp-spice { display: block; }
//           .mp-cards-grid { grid-template-columns: repeat(3, 1fr); }
//           .mp-card.featured {
//             grid-column: auto;
//             max-width: none;
//             transform: scale(1.04);
//           }
//           .mp-card.featured:hover { transform: scale(1.06) translateY(-7px); }
//         }
//         @media (min-width: 1200px) {
//           .mp-container { padding: 0 48px; }
//           .mp-price { font-size: 44px; }
//           .mp-card-body { padding: 30px 30px 26px; }
//         }
//       `}</style>

//       <section
//         id="meal-plans"
//         ref={sectionRef}
//         className={`mp-root${inView ? ' visible' : ''}`}
//       >
//         <div className="mp-dots" />
//         <div className="mp-blob" style={{ width: 500, height: 500, background: '#FFD580', top: -80, right: -100, animationDelay: '0s' }} />
//         <div className="mp-blob" style={{ width: 380, height: 380, background: '#FF9F6B', bottom: 0, left: -80, animationDelay: '-4s' }} />
//         <div className="mp-blob" style={{ width: 280, height: 280, background: '#FFCFB0', top: '45%', left: '55%', animationDelay: '-7s' }} />
//         <div className="mp-spice" style={{ top: '18%', left: '4%', fontSize: 44 }}>🌶️</div>
//         <div className="mp-spice" style={{ bottom: '18%', right: '3%', fontSize: 56, animationDuration: '30s' }}>🍲</div>

//         <div className="mp-container">

//           {/* HEADER */}
//           <div style={{ textAlign: 'center', marginBottom: 40 }}>
//             <div className="mp-fade mp-fade-d1">
//               <span className="mp-eyebrow"><Sparkles size={11} /> Subscription Plans</span>
//             </div>
//             <h2 className="mp-heading mp-fade mp-fade-d2">
//               Choose Your <em>Meal Plan</em>
//             </h2>
//             <p className="mp-fade mp-fade-d3" style={{ fontSize: 15, color: '#9B7B6A', lineHeight: 1.7, margin: '0 auto 22px', maxWidth: 480 }}>
//               Handcrafted every morning by female home chefs — delivered fresh, 6 days a week.
//             </p>
//             <div className="mp-fade mp-fade-d3 mp-pills-row">
//               {[
//                 { icon: <Clock size={12} />, text: '6 Days a Week' },
//                 { icon: <Truck size={12} />, text: 'Free Delivery' },
//                 { icon: <Star size={12} />, text: '26 Days / Month' },
//               ].map(({ icon, text }) => (
//                 <span key={text} className="mp-pill">{icon} {text}</span>
//               ))}
//             </div>
//             <div className="mp-fade mp-fade-d4">
//               <div className="mp-toggle-wrap">
//                 <button className={`mp-toggle-btn${tab === 'veg' ? ' active' : ''}`} onClick={() => setTab('veg')}>
//                   <Leaf size={15} /> Veg Plans
//                 </button>
//                 <button className={`mp-toggle-btn${tab === 'nonveg' ? ' active' : ''}`} onClick={() => setTab('nonveg')}>
//                   <Drumstick size={15} /> Non-Veg Plans
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* SECTION LABEL */}
//           <div className="mp-fade mp-fade-d4 mp-divider-row">
//             <span className="mp-section-title">2 Meals / Day</span>
//             <div className="mp-divider-line" />
//             <span className="mp-section-label">Monthly · Lunch &amp; Dinner</span>
//           </div>

//           {/* CARDS */}
//           <div className="mp-fade mp-fade-d5 mp-cards-grid">
//             {PLANS.map((plan) => {
//               const price    = tab === 'veg' ? plan.vegPrice : plan.nonvegPrice;
//               const features = plan.features[tab];
//               const isFeatured = !!plan.badge;
//               const waUrl = buildWhatsAppUrl({
//                 tier: plan.tier,
//                 type: tab === 'veg' ? 'Veg' : 'Non-Veg',
//                 price,
//                 features,
//               });

//               return (
//                 <div key={plan.tier} className={`mp-card${isFeatured ? ' featured' : ''}`}>
//                   <div
//                     className="mp-card-stripe"
//                     style={{ background: `linear-gradient(90deg, ${plan.color}, #F5A623)` }}
//                   />
//                   {isFeatured && <div className="mp-card-badge">{plan.badge}</div>}

//                   <div className="mp-card-body">
//                     <div className="mp-tier-name">{plan.tier} Plan</div>
//                     <div className="mp-price" style={{ color: isFeatured ? plan.color : '#1A0A00' }}>
//                       AED {price}
//                     </div>
//                     <div className="mp-price-sub">per month · 2 meals / day</div>

//                     <ul className="mp-features">
//                       {features.map((f) => (
//                         <li key={f} className="mp-feature-item">
//                           <span
//                             className="mp-check-icon"
//                             style={{ background: isFeatured ? 'rgba(255,107,44,0.1)' : 'rgba(26,10,0,0.05)' }}
//                           >
//                             <svg width="10" height="10" viewBox="0 0 24 24" fill="none"
//                               stroke={isFeatured ? plan.color : '#9B7B6A'}
//                               strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                               <polyline points="20 6 9 17 4 12" />
//                             </svg>
//                           </span>
//                           {f}
//                         </li>
//                       ))}
//                     </ul>

//                     {/* Button with WhatsApp icon + pre-filled message */}
//                     {isFeatured ? (
//                       <a href={waUrl} target="_blank" rel="noreferrer" className="mp-btn-primary">
//                         <svg className="mp-wa-icon" width="16" height="16" viewBox="0 0 24 24" fill="white">
//                           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//                         </svg>
//                         Subscribe Now
//                       </a>
//                     ) : (
//                       <a href={waUrl} target="_blank" rel="noreferrer" className="mp-btn-outline">
//                         <svg className="mp-wa-icon" width="15" height="15" viewBox="0 0 24 24" fill="#25D366">
//                           <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//                         </svg>
//                         Select Plan
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <p className="mp-fade mp-fade-d5 mp-note">
//             ✨ Fresh, less oil &amp; ghar jaisa taste · All plans include roti, rice, dal, sabzi &amp; salad daily
//           </p>

//           {/* TRIAL BANNER */}
//           <div className="mp-fade mp-fade-d6">
//             <div className="mp-trial">
//               <div style={{ display: 'flex', alignItems: 'center', gap: 16, position: 'relative', zIndex: 1, flex: 1, minWidth: 0 }}>
//                 <div style={{
//                   width: 54, height: 54, flexShrink: 0,
//                   background: 'linear-gradient(135deg,#FFF0E0,#FFE4CC)',
//                   border: '1px solid rgba(255,107,44,0.2)',
//                   borderRadius: 16,
//                   display: 'flex', alignItems: 'center', justifyContent: 'center',
//                   fontSize: 26,
//                 }}>
//                   🎁
//                 </div>
//                 <div style={{ minWidth: 0 }}>
//                   <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(16px,2.5vw,20px)', fontWeight: 700, color: '#1A0A00', marginBottom: 3 }}>
//                     Want to taste before subscribing?
//                   </div>
//                   <div style={{ fontSize: 13, color: '#9B7B6A' }}>
//                     Try our 2-day trial meal — no commitment needed. 😊
//                   </div>
//                 </div>
//               </div>
//               <a
//                 href={buildWhatsAppUrl({ tier: 'Trial', type: 'Veg', price: 0, features: [], isTrial: true })}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="mp-trial-btn"
//                 style={{ position: 'relative', zIndex: 1 }}
//               >
//                 <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
//                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//                 </svg>
//                 Book a Trial 🍲
//                 <ChevronRight size={14} />
//               </a>
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }










'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Leaf, Drumstick, Sparkles, Clock, Truck, Star, ChevronRight, Gift } from 'lucide-react';

const WHATSAPP_NUMBER = '+971557998925';

/* ─────────────────────────────────────────────
   WHATSAPP MESSAGE BUILDER
───────────────────────────────────────────── */
function buildWhatsAppUrl(plan: {
  tier: string;
  type: 'Veg' | 'Non-Veg';
  price: number;
  duration: 'weekly' | 'monthly';
  features: string[];
  isTrial?: boolean;
}) {
  const { tier, type, price, duration, features, isTrial } = plan;

  if (isTrial) {
    const msg = [
      `👋 Hello The Chef Mom!`,
      ``,
      `I'd like to book a *2-Day Trial Meal* before subscribing.`,
      ``,
      `Please share the trial details and delivery schedule.`,
      ``,
      `Thank you! 🙏`,
    ].join('\n');
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }

  const msg = [
    `👋 Hello The Chef Mom!`,
    ``,
    `I'm interested in subscribing to the following meal plan:`,
    ``,
    `📦 *Plan:* ${tier} (${type})`,
    `💰 *Price:* AED ${price}/${duration === 'weekly' ? 'week' : 'month'}`,
    `🍽️ *Includes:*`,
    ...features.map(f => `   • ${f}`),
    ``,
    `Please share payment details and delivery schedule.`,
    ``,
    `Thank you! 🙏`,
  ].join('\n');

  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/* ─────────────────────────────────────────────
   PLAN DATA
───────────────────────────────────────────── */
const ONE_MEAL_PLANS = [
  {
    tier: 'Half Meal',
    badge: null as string | null,
    weekly:  { veg: 119, nonveg: 157 },
    monthly: { veg: 449, nonveg: 625 },
    color: '#B85C1A',
    features: {
      veg:    ['Roti (2 pcs) + Rice', 'Dal or Sabzi', 'Salad & Pickle', 'Mon – Sat delivery'],
      nonveg: ['Roti (2 pcs) + Rice', 'Chicken or Egg Curry', 'Salad & Pickle', 'Mon – Sat delivery'],
    },
    featured: false,
  },
  {
    tier: 'Full Meal',
    badge: '⭐ Best Value' as string | null,
    weekly:  { veg: 135, nonveg: 169 },
    monthly: { veg: 549, nonveg: 689 },
    color: '#C84B0A',
    features: {
      veg:    ['Roti (4 pcs) + Rice', 'Dal + Sabzi', 'Salad, Pickle & Papad', 'Mon – Sat delivery'],
      nonveg: ['Roti (4 pcs) + Rice', 'Chicken Curry', 'Salad, Pickle & Papad', 'Mon – Sat delivery'],
    },
    featured: true,
  },
];

const TWO_MEAL_PLANS = [
  {
    tier: 'Basic',
    badge: null as string | null,
    monthly: { veg: 769, nonveg: 949 },
    color: '#B85C1A',
    features: {
      veg:    ['Roti (4 pcs) + Rice', 'Dal + 1 Sabzi', 'Salad & Pickle', 'Mon – Sat delivery'],
      nonveg: ['Roti (4 pcs) + Rice', 'Chicken / Egg Curry', 'Salad & Pickle', 'Mon – Sat delivery'],
    },
    featured: false,
  },
  {
    tier: 'Standard',
    badge: '⭐ Most Preferred' as string | null,
    monthly: { veg: 849, nonveg: 1049 },
    color: '#C84B0A',
    features: {
      veg:    ['Roti (4 pcs) + Rice', 'Dal + 2 Sabzi', 'Salad, Pickle & Papad', 'Sweets 3×/week', 'Mon – Sat delivery'],
      nonveg: ['Roti (4 pcs) + Rice', 'Chicken Curry + Dal/Sabzi', 'Salad, Pickle & Papad', 'Sweets 3×/week', 'Mon – Sat delivery'],
    },
    featured: true,
  },
  {
    tier: 'Premium',
    badge: null as string | null,
    monthly: { veg: 1049, nonveg: 1249 },
    color: '#A03508',
    features: {
      veg:    ['Roti (unlimited) + Rice', 'Dal + 3 Sabzi + Soup', 'Salad, Pickle & Papad', 'Daily Dessert + Chaach', 'Mon – Sat delivery'],
      nonveg: ['Roti (unlimited) + Rice', 'Chicken + Special Dish', 'Salad, Pickle & Raita', 'Daily Dessert + Shorba', 'Mon – Sat delivery'],
    },
    featured: false,
  },
];

/* ─────────────────────────────────────────────
   INTERSECTION OBSERVER HOOK
───────────────────────────────────────────── */
function useInView(threshold = 0.05) {
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
   WHATSAPP SVG ICON
───────────────────────────────────────────── */
function WaIcon({ color = 'white', size = 15 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function MealPlans() {
  const [foodTab, setFoodTab] = useState<'veg' | 'nonveg'>('veg');
  const [durTab,  setDurTab]  = useState<'weekly' | 'monthly'>('weekly');
  const { ref: sectionRef, inView } = useInView(0.05);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;0,800;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        /* ── BASE RESET ── */
        .mp-root *, .mp-root *::before, .mp-root *::after {
          box-sizing: border-box;
        }

        /* ── ROOT ── */
        .mp-root {
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(170deg, #FFF8F0 0%, #FFF0E0 40%, #FFF5EB 100%);
          position: relative;
          overflow: hidden;
          padding: 48px 0 60px;
          -webkit-tap-highlight-color: transparent;
        }
        .mp-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,107,44,0.10) 1px, transparent 1px);
          background-size: 28px 28px;
          pointer-events: none;
          z-index: 0;
        }
        .mp-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(70px);
          opacity: 0.22;
          pointer-events: none;
          animation: mpBlobDrift 10s ease-in-out infinite;
        }
        @keyframes mpBlobDrift {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(30px,-20px) scale(1.06); }
          70%      { transform: translate(-18px,18px) scale(0.95); }
        }
        .mp-spice {
          position: absolute;
          opacity: 0.05;
          pointer-events: none;
          animation: mpSpinSlow 22s linear infinite;
          z-index: 0;
          display: none;
        }
        @keyframes mpSpinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* ── CONTAINER ── */
        .mp-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
          position: relative;
          z-index: 5;
          width: 100%;
        }

        /* ── EYEBROW ── */
        .mp-eyebrow {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          background: rgba(255,107,44,0.10);
          border: 1px solid rgba(255,107,44,0.28);
          border-radius: 50px;
          padding: 5px 14px;
          font-size: 10px;
          font-weight: 600;
          color: #FF6B2C;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          margin-bottom: 12px;
        }

        /* ── HEADING ── */
        .mp-heading {
          font-family: 'Fraunces', serif;
          font-size: clamp(24px, 6vw, 52px);
          font-weight: 800;
          color: #1A0A00;
          line-height: 1.1;
          letter-spacing: -0.5px;
          margin: 0 0 12px;
        }
        .mp-heading em {
          font-style: italic;
          color: #C84B0A;
          position: relative;
        }
        .mp-heading em::after {
          content: '';
          position: absolute;
          bottom: 1px; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg,#FF6B2C,#F5A623);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 1s cubic-bezier(.16,1,.3,1) 0.5s;
        }
        .mp-root.visible .mp-heading em::after { transform: scaleX(1); }

        /* ── PILLS ROW ── */
        .mp-pills-row {
          display: flex;
          justify-content: center;
          gap: 6px;
          flex-wrap: wrap;
          margin-bottom: 22px;
        }
        .mp-pill {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          background: rgba(255,255,255,0.85);
          border: 1px solid rgba(255,107,44,0.18);
          border-radius: 50px;
          padding: 5px 11px;
          font-size: 11px;
          font-weight: 500;
          color: #6B5344;
          white-space: nowrap;
        }

        /* ── TOGGLES ── */
        .mp-toggles-wrap {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 10px;
        }
        .mp-toggle-group {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 5px;
        }
        .mp-toggle-group-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 2px;
          text-transform: uppercase;
          color: #9B7B6A;
        }
        .mp-toggle-wrap {
          background: rgba(255,255,255,0.80);
          border: 1px solid rgba(255,107,44,0.2);
          border-radius: 60px;
          padding: 4px;
          display: inline-flex;
          box-shadow: 0 4px 20px rgba(255,107,44,0.10);
        }
        .mp-toggle-btn {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 9px 16px;
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 600;
          cursor: pointer;
          border: none;
          background: transparent;
          color: #9B7B6A;
          transition: all 0.3s cubic-bezier(.34,1.56,.64,1);
          white-space: nowrap;
          min-height: 44px;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
          user-select: none;
          -webkit-user-select: none;
        }
        .mp-toggle-btn.active {
          background: linear-gradient(135deg,#FF6B2C,#C84B0A);
          color: #fff;
          box-shadow: 0 4px 18px rgba(255,107,44,0.38);
          transform: scale(1.03);
        }
        .mp-toggle-btn:active { transform: scale(0.97) !important; }

        /* ── SECTION DIVIDER ── */
        .mp-divider-row {
          display: flex;
          align-items: center;
          gap: 10px;
          margin-bottom: 16px;
        }
        .mp-section-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(14px, 2.5vw, 19px);
          font-weight: 700;
          color: #1A0A00;
          white-space: nowrap;
        }
        .mp-section-label {
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #9B7B6A;
          white-space: nowrap;
        }
        .mp-divider-line {
          flex: 1;
          height: 1px;
          background: rgba(26,10,0,0.08);
          min-width: 8px;
        }

        /* ── CARDS GRID ── */
        .mp-cards-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 14px;
          margin-bottom: 28px;
        }

        /* ── CARD ── */
        .mp-card {
          background: #fff;
          border-radius: 20px;
          border: 1.5px solid rgba(26,10,0,0.07);
          overflow: hidden;
          display: flex;
          flex-direction: column;
          box-shadow: 0 2px 16px rgba(26,10,0,0.06);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          -webkit-tap-highlight-color: transparent;
        }
        .mp-card.featured {
          border-color: #C84B0A;
          border-width: 2px;
          box-shadow: 0 8px 36px rgba(200,75,10,0.16);
        }
        @media (hover: hover) and (pointer: fine) {
          .mp-card:hover {
            transform: translateY(-5px) scale(1.01);
            box-shadow: 0 18px 48px rgba(26,10,0,0.11);
          }
          .mp-card.featured:hover {
            transform: translateY(-5px) scale(1.01);
            box-shadow: 0 22px 56px rgba(200,75,10,0.22);
          }
        }
        .mp-card-stripe {
          height: 4px;
          width: 100%;
          flex-shrink: 0;
        }
        .mp-card.featured .mp-card-stripe { height: 5px; }

        .mp-card-badge {
          display: inline-block;
          background: linear-gradient(135deg,#FF6B2C,#C84B0A);
          color: #fff;
          font-size: 9px;
          font-weight: 700;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          padding: 4px 10px;
          border-radius: 50px;
          margin-bottom: 7px;
          align-self: flex-start;
        }
        .mp-card-body {
          padding: 16px 16px 14px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }
        .mp-tier-name {
          font-family: 'Fraunces', serif;
          font-size: 18px;
          font-weight: 700;
          color: #1A0A00;
          margin-bottom: 4px;
        }
        .mp-price {
          font-family: 'Fraunces', serif;
          font-size: clamp(30px, 6vw, 40px);
          font-weight: 800;
          line-height: 1;
          margin-bottom: 2px;
        }
        .mp-price-sub {
          font-size: 11px;
          color: #9B7B6A;
          margin-bottom: 14px;
        }
        .mp-features {
          list-style: none;
          margin: 0 0 16px;
          padding: 0;
          flex: 1;
        }
        .mp-feature-item {
          display: flex;
          align-items: flex-start;
          gap: 8px;
          font-size: 12px;
          color: #6B5344;
          font-weight: 500;
          line-height: 1.5;
          padding: 4px 0;
        }
        .mp-check-icon {
          flex-shrink: 0;
          margin-top: 2px;
          width: 15px;
          height: 15px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* ── BUTTONS ── */
        .mp-btn-primary,
        .mp-btn-outline {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 7px;
          width: 100%;
          padding: 13px 12px;
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px;
          font-weight: 700;
          cursor: pointer;
          text-align: center;
          text-decoration: none;
          transition: all 0.22s ease;
          min-height: 48px;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
          user-select: none;
          -webkit-user-select: none;
        }
        .mp-btn-primary {
          border: none;
          color: #fff;
          background: linear-gradient(135deg,#FF6B2C,#C84B0A);
          box-shadow: 0 6px 20px rgba(255,107,44,0.30);
        }
        .mp-btn-outline {
          border: 1.5px solid rgba(26,10,0,0.14);
          background: transparent;
          color: #1A0A00;
        }
        .mp-btn-primary:active  { transform: scale(0.97); opacity: 0.92; }
        .mp-btn-outline:active  { transform: scale(0.97); opacity: 0.85; }
        @media (hover: hover) and (pointer: fine) {
          .mp-btn-primary:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 30px rgba(255,107,44,0.42);
          }
          .mp-btn-outline:hover {
            border-color: #FF6B2C;
            color: #FF6B2C;
            background: rgba(255,107,44,0.04);
            transform: translateY(-2px);
          }
        }

        /* ── MONTHLY-ONLY NOTICE ── */
        .mp-monthly-notice {
          font-size: 11px;
          color: #9B7B6A;
          text-align: center;
          margin-bottom: 12px;
          font-style: italic;
        }

        /* ── TRIAL BANNER ── */
        .mp-trial {
          background: #fff;
          border: 1px solid rgba(255,107,44,0.20);
          border-radius: 20px;
          padding: 18px 16px;
          margin-top: 4px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 14px;
          position: relative;
          overflow: hidden;
          box-shadow: 0 6px 30px rgba(255,107,44,0.07);
          flex-wrap: wrap;
        }
        .mp-trial::before {
          content: '';
          position: absolute;
          top: -36px; right: -36px;
          width: 120px; height: 120px;
          background: radial-gradient(circle,#FFD580,transparent 70%);
          opacity: 0.45;
          pointer-events: none;
        }
        .mp-trial-content {
          display: flex;
          align-items: center;
          gap: 12px;
          position: relative;
          z-index: 1;
          flex: 1;
          min-width: 0;
        }
        .mp-trial-icon {
          width: 46px;
          height: 46px;
          flex-shrink: 0;
          background: linear-gradient(135deg,#FFF0E0,#FFE4CC);
          border: 1px solid rgba(255,107,44,0.2);
          border-radius: 13px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .mp-trial-title {
          font-family: 'Fraunces', serif;
          font-size: clamp(13px, 2.5vw, 17px);
          font-weight: 700;
          color: #1A0A00;
          margin-bottom: 3px;
          line-height: 1.3;
        }
        .mp-trial-sub {
          font-size: 11px;
          color: #9B7B6A;
          line-height: 1.6;
        }
        .mp-trial-btn {
          flex-shrink: 0;
          padding: 13px 18px;
          border-radius: 50px;
          background: linear-gradient(135deg,#FF6B2C,#C84B0A);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 700;
          border: none;
          cursor: pointer;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          gap: 7px;
          position: relative;
          z-index: 1;
          transition: all 0.22s ease;
          box-shadow: 0 6px 22px rgba(255,107,44,0.38);
          min-height: 48px;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
          user-select: none;
          -webkit-user-select: none;
        }
        .mp-trial-btn:active { transform: scale(0.97); }
        @media (hover: hover) and (pointer: fine) {
          .mp-trial-btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 12px 32px rgba(255,107,44,0.48); }
        }

        /* ── FADE ANIMATIONS ── */
        .mp-fade {
          opacity: 0;
          transform: translateY(20px);
          transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1);
        }
        .mp-root.visible .mp-fade { opacity: 1; transform: translateY(0); }
        .mp-fade-d1 { transition-delay: 0.06s; }
        .mp-fade-d2 { transition-delay: 0.12s; }
        .mp-fade-d3 { transition-delay: 0.18s; }
        .mp-fade-d4 { transition-delay: 0.26s; }
        .mp-fade-d5 { transition-delay: 0.34s; }
        .mp-fade-d6 { transition-delay: 0.42s; }
        .mp-fade-d7 { transition-delay: 0.50s; }

        .mp-note {
          text-align: center;
          font-size: 11px;
          color: #9B7B6A;
          margin-top: 8px;
          line-height: 1.7;
          padding: 0 8px;
        }

        /* ══════════════════════════════════════
           RESPONSIVE BREAKPOINTS — MOBILE FIRST
        ══════════════════════════════════════ */

        /* xs — tiny phones (<375px) */
        @media (max-width: 374px) {
          .mp-root { padding: 36px 0 52px; }
          .mp-container { padding: 0 12px; }
          .mp-toggle-btn { padding: 8px 12px; font-size: 12px; gap: 4px; min-height: 40px; }
          .mp-card-body { padding: 14px 13px 12px; }
          .mp-price { font-size: 28px; }
          .mp-tier-name { font-size: 16px; }
          .mp-trial { padding: 16px 14px; }
          .mp-trial-btn { width: 100%; justify-content: center; }
          .mp-section-label { display: none; }
          .mp-pill { font-size: 10px; padding: 4px 9px; }
          .mp-btn-primary, .mp-btn-outline { font-size: 13px; }
        }

        /* sm — phones (375–539px) */
        @media (min-width: 375px) and (max-width: 539px) {
          .mp-root { padding: 44px 0 58px; }
          .mp-container { padding: 0 14px; }
          .mp-card-body { padding: 16px 15px 13px; }
          .mp-trial-btn { width: 100%; justify-content: center; }
        }

        /* md — large phones / small tablets (540–767px) */
        @media (min-width: 540px) and (max-width: 767px) {
          .mp-root { padding: 52px 0 68px; }
          .mp-container { padding: 0 20px; }
          .mp-cards-grid { grid-template-columns: 1fr 1fr; }
          .mp-trial-btn { width: 100%; justify-content: center; }
          .mp-card-body { padding: 18px 17px 15px; }
        }

        /* lg — tablets (768–899px) */
        @media (min-width: 768px) {
          .mp-root { padding: 64px 0 80px; }
          .mp-container { padding: 0 24px; }
          .mp-toggle-btn { padding: 10px 20px; font-size: 14px; }
          .mp-toggles-wrap { flex-direction: row; gap: 20px; }
          .mp-cards-grid { grid-template-columns: 1fr 1fr; }
          .mp-card-body { padding: 22px 20px 18px; }
          .mp-price { font-size: 36px; }
          .mp-tier-name { font-size: 19px; }
        }

        /* xl — desktop (900–1199px) */
        @media (min-width: 900px) {
          .mp-root { padding: 80px 0 100px; }
          .mp-container { padding: 0 32px; }
          .mp-spice { display: block; }
          .mp-cards-grid.two-col   { grid-template-columns: 1fr 1fr; max-width: 720px; margin-left: auto; margin-right: auto; }
          .mp-cards-grid.three-col { grid-template-columns: repeat(3, 1fr); }
          .mp-cards-grid.three-col .mp-card.featured { transform: scale(1.04); }
          .mp-card-body { padding: 24px 24px 20px; }
          .mp-price { font-size: 40px; }
          .mp-tier-name { font-size: 20px; }
        }

        /* 2xl — wide desktop (1200px+) */
        @media (min-width: 1200px) {
          .mp-container { padding: 0 48px; }
          .mp-price { font-size: 44px; }
          .mp-card-body { padding: 28px 28px 24px; }
          .mp-cards-grid.two-col { max-width: 800px; }
        }
      `}</style>

      <section
        id="meal-plans"
        ref={sectionRef}
        className={`mp-root${inView ? ' visible' : ''}`}
      >
        <div className="mp-dots" />
        <div className="mp-blob" style={{ width: 380, height: 380, background: '#FFD580', top: -60, right: -80, animationDelay: '0s' }} />
        <div className="mp-blob" style={{ width: 280, height: 280, background: '#FF9F6B', bottom: 0, left: -60, animationDelay: '-4s' }} />
        <div className="mp-blob" style={{ width: 200, height: 200, background: '#FFCFB0', top: '45%', left: '55%', animationDelay: '-7s' }} />
        <div className="mp-spice" style={{ top: '16%', left: '3%', fontSize: 40 }}>🌶️</div>
        <div className="mp-spice" style={{ bottom: '16%', right: '3%', fontSize: 50, animationDuration: '30s' }}>🍲</div>

        <div className="mp-container">

          {/* ── HEADER ── */}
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div className="mp-fade mp-fade-d1">
              <span className="mp-eyebrow"><Sparkles size={10} /> Subscription Plans</span>
            </div>
            <h2 className="mp-heading mp-fade mp-fade-d2">
              Choose Your <em>Meal Plan</em>
            </h2>
            <p className="mp-fade mp-fade-d3" style={{
              fontSize: 'clamp(12px, 2.5vw, 14px)',
              color: '#9B7B6A',
              lineHeight: 1.7,
              margin: '0 auto 16px',
              maxWidth: 480,
              padding: '0 4px',
            }}>
              Handcrafted every morning by female home chefs — fresh North Indian flavours, delivered 6 days a week in Dubai.
            </p>

            <div className="mp-fade mp-fade-d3 mp-pills-row">
              {[
                { icon: <Clock size={11} />,  text: '6 Days / Week' },
                { icon: <Truck size={11} />,  text: 'Free Delivery' },
                { icon: <Star size={11} />,   text: '26 Days / Month' },
              ].map(({ icon, text }) => (
                <span key={text} className="mp-pill">{icon} {text}</span>
              ))}
            </div>

            {/* ── TOGGLES ── */}
            <div className="mp-fade mp-fade-d4">
              <div className="mp-toggles-wrap">
                <div className="mp-toggle-group">
                  <span className="mp-toggle-group-label">Food type</span>
                  <div className="mp-toggle-wrap">
                    <button
                      className={`mp-toggle-btn${foodTab === 'veg' ? ' active' : ''}`}
                      onClick={() => setFoodTab('veg')}
                    >
                      <Leaf size={13} /> Veg
                    </button>
                    <button
                      className={`mp-toggle-btn${foodTab === 'nonveg' ? ' active' : ''}`}
                      onClick={() => setFoodTab('nonveg')}
                    >
                      <Drumstick size={13} /> Non-Veg
                    </button>
                  </div>
                </div>
                <div className="mp-toggle-group">
                  <span className="mp-toggle-group-label">Duration</span>
                  <div className="mp-toggle-wrap">
                    <button
                      className={`mp-toggle-btn${durTab === 'weekly' ? ' active' : ''}`}
                      onClick={() => setDurTab('weekly')}
                    >
                      Weekly
                    </button>
                    <button
                      className={`mp-toggle-btn${durTab === 'monthly' ? ' active' : ''}`}
                      onClick={() => setDurTab('monthly')}
                    >
                      Monthly
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ── SECTION: 1 MEAL / DAY ── */}
          <div className="mp-fade mp-fade-d4 mp-divider-row">
            <span className="mp-section-title">1 Meal / Day</span>
            <div className="mp-divider-line" />
            <span className="mp-section-label">
              {durTab === 'weekly' ? 'Weekly' : 'Monthly'} · Lunch or Dinner
            </span>
          </div>

          <div className="mp-fade mp-fade-d5 mp-cards-grid two-col">
            {ONE_MEAL_PLANS.map((plan) => {
              const priceVal = durTab === 'weekly' ? plan.weekly[foodTab] : plan.monthly[foodTab];
              const features = plan.features[foodTab];
              const waUrl = buildWhatsAppUrl({
                tier: `${plan.tier} – 1 Meal/Day`,
                type: foodTab === 'veg' ? 'Veg' : 'Non-Veg',
                price: priceVal,
                duration: durTab,
                features,
              });
              return (
                <div key={plan.tier} className={`mp-card${plan.featured ? ' featured' : ''}`}>
                  <div className="mp-card-stripe" style={{ background: `linear-gradient(90deg, ${plan.color}, #F5A623)` }} />
                  <div className="mp-card-body">
                    {plan.badge && <div className="mp-card-badge">{plan.badge}</div>}
                    <div className="mp-tier-name">{plan.tier}</div>
                    <div className="mp-price" style={{ color: plan.featured ? plan.color : '#1A0A00' }}>
                      AED {priceVal}
                    </div>
                    <div className="mp-price-sub">per {durTab === 'weekly' ? 'week' : 'month'} · 1 meal / day</div>
                    <ul className="mp-features">
                      {features.map((f) => (
                        <li key={f} className="mp-feature-item">
                          <span className="mp-check-icon" style={{ background: plan.featured ? 'rgba(200,75,10,0.10)' : 'rgba(26,10,0,0.05)' }}>
                            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={plan.featured ? plan.color : '#9B7B6A'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    {plan.featured ? (
                      <a href={waUrl} target="_blank" rel="noreferrer" className="mp-btn-primary">
                        <WaIcon color="white" size={15} /> Subscribe Now
                      </a>
                    ) : (
                      <a href={waUrl} target="_blank" rel="noreferrer" className="mp-btn-outline">
                        <WaIcon color="#25D366" size={15} /> Select Plan
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* ── SECTION: 2 MEALS / DAY ── */}
          <div className="mp-fade mp-fade-d5 mp-divider-row">
            <span className="mp-section-title">2 Meals / Day</span>
            <div className="mp-divider-line" />
            <span className="mp-section-label">Monthly · Lunch &amp; Dinner</span>
          </div>

          {durTab === 'weekly' && (
            <p className="mp-monthly-notice mp-fade mp-fade-d5">
              2-meal plans are monthly only — showing monthly prices below.
            </p>
          )}

          <div className="mp-fade mp-fade-d6 mp-cards-grid three-col">
            {TWO_MEAL_PLANS.map((plan) => {
              const priceVal = plan.monthly[foodTab];
              const features = plan.features[foodTab];
              const waUrl = buildWhatsAppUrl({
                tier: `${plan.tier} – 2 Meals/Day`,
                type: foodTab === 'veg' ? 'Veg' : 'Non-Veg',
                price: priceVal,
                duration: 'monthly',
                features,
              });
              return (
                <div key={plan.tier} className={`mp-card${plan.featured ? ' featured' : ''}`}>
                  <div className="mp-card-stripe" style={{ background: `linear-gradient(90deg, ${plan.color}, #F5A623)` }} />
                  <div className="mp-card-body">
                    {plan.badge && <div className="mp-card-badge">{plan.badge}</div>}
                    <div className="mp-tier-name">{plan.tier} Plan</div>
                    <div className="mp-price" style={{ color: plan.featured ? plan.color : '#1A0A00' }}>
                      AED {priceVal}
                    </div>
                    <div className="mp-price-sub">per month · 2 meals / day</div>
                    <ul className="mp-features">
                      {features.map((f) => (
                        <li key={f} className="mp-feature-item">
                          <span className="mp-check-icon" style={{ background: plan.featured ? 'rgba(200,75,10,0.10)' : 'rgba(26,10,0,0.05)' }}>
                            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={plan.featured ? plan.color : '#9B7B6A'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12" />
                            </svg>
                          </span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    {plan.featured ? (
                      <a href={waUrl} target="_blank" rel="noreferrer" className="mp-btn-primary">
                        <WaIcon color="white" size={15} /> Subscribe Now
                      </a>
                    ) : (
                      <a href={waUrl} target="_blank" rel="noreferrer" className="mp-btn-outline">
                        <WaIcon color="#25D366" size={15} /> Select Plan
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          <p className="mp-fade mp-fade-d6 mp-note">
            ✨ Fresh, less oil &amp; ghar jaisa taste · Customization available · Roti, rice, dal, sabzi &amp; salad daily
          </p>

          {/* ── TRIAL BANNER ── */}
          <div className="mp-fade mp-fade-d7">
            <div className="mp-trial">
              <div className="mp-trial-content">
                <div className="mp-trial-icon">
                  <Gift size={22} color="#C84B0A" />
                </div>
                <div style={{ minWidth: 0 }}>
                  <div className="mp-trial-title">Want to taste before subscribing?</div>
                  <div className="mp-trial-sub">
                    2-day trial · Veg AED 25 · Non-Veg AED 28<br />No commitment needed 😊
                  </div>
                </div>
              </div>
              <a
                href={buildWhatsAppUrl({ tier: 'Trial', type: 'Veg', price: 0, duration: 'weekly', features: [], isTrial: true })}
                target="_blank"
                rel="noreferrer"
                className="mp-trial-btn"
              >
                <WaIcon color="white" size={14} />
                Book a Trial 🍲
                <ChevronRight size={13} />
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}