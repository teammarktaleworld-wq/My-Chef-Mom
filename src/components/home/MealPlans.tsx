









// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { Leaf, Drumstick, Sparkles, Clock, Truck, Star, ChevronRight, Gift } from 'lucide-react';

// const WHATSAPP_NUMBER = '+971557998925';

// /* ─────────────────────────────────────────────
//    WHATSAPP MESSAGE BUILDER
// ───────────────────────────────────────────── */
// function buildWhatsAppUrl(plan: {
//   tier: string;
//   type: 'Veg' | 'Non-Veg';
//   price: number;
//   duration: 'weekly' | 'monthly';
//   features: string[];
//   isTrial?: boolean;
// }) {
//   const { tier, type, price, duration, features, isTrial } = plan;

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
//     `📦 *Plan:* ${tier} (${type})`,
//     `💰 *Price:* AED ${price}/${duration === 'weekly' ? 'week' : 'month'}`,
//     `🍽️ *Includes:*`,
//     ...features.map(f => `   • ${f}`),
//     ``,
//     `Please share payment details and delivery schedule.`,
//     ``,
//     `Thank you! 🙏`,
//   ].join('\n');

//   return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
// }

// /* ─────────────────────────────────────────────
//    PLAN DATA
// ───────────────────────────────────────────── */
// const ONE_MEAL_PLANS = [
//   {
//     tier: 'Half Meal',
//     badge: null as string | null,
//     weekly:  { veg: 119, nonveg: 157 },
//     monthly: { veg: 449, nonveg: 625 },
//     color: '#B85C1A',
//     features: {
//       veg:    ['Roti (2 pcs) + Rice', 'Dal or Sabzi', 'Salad & Pickle', 'Mon – Sat delivery'],
//       nonveg: ['Roti (2 pcs) + Rice', 'Chicken or Egg Curry', 'Salad & Pickle', 'Mon – Sat delivery'],
//     },
//     featured: false,
//   },
//   {
//     tier: 'Full Meal',
//     badge: '⭐ Best Value' as string | null,
//     weekly:  { veg: 135, nonveg: 169 },
//     monthly: { veg: 549, nonveg: 689 },
//     color: '#C84B0A',
//     features: {
//       veg:    ['Roti (4 pcs) + Rice', 'Dal + Sabzi', 'Salad, Pickle & Papad', 'Mon – Sat delivery'],
//       nonveg: ['Roti (4 pcs) + Rice', 'Chicken Curry', 'Salad, Pickle & Papad', 'Mon – Sat delivery'],
//     },
//     featured: true,
//   },
// ];

// const TWO_MEAL_PLANS = [
//   {
//     tier: 'Basic',
//     badge: null as string | null,
//     monthly: { veg: 769, nonveg: 949 },
//     color: '#B85C1A',
//     features: {
//       veg:    ['Roti (4 pcs) + Rice', 'Dal + 1 Sabzi', 'Salad & Pickle', 'Mon – Sat delivery'],
//       nonveg: ['Roti (4 pcs) + Rice', 'Chicken / Egg Curry', 'Salad & Pickle', 'Mon – Sat delivery'],
//     },
//     featured: false,
//   },
//   {
//     tier: 'Standard',
//     badge: '⭐ Most Preferred' as string | null,
//     monthly: { veg: 849, nonveg: 1049 },
//     color: '#C84B0A',
//     features: {
//       veg:    ['Roti (4 pcs) + Rice', 'Dal + 2 Sabzi', 'Salad, Pickle & Papad', 'Sweets 3×/week', 'Mon – Sat delivery'],
//       nonveg: ['Roti (4 pcs) + Rice', 'Chicken Curry + Dal/Sabzi', 'Salad, Pickle & Papad', 'Sweets 3×/week', 'Mon – Sat delivery'],
//     },
//     featured: true,
//   },
//   {
//     tier: 'Premium',
//     badge: null as string | null,
//     monthly: { veg: 1049, nonveg: 1249 },
//     color: '#A03508',
//     features: {
//       veg:    ['Roti (unlimited) + Rice', 'Dal + 3 Sabzi + Soup', 'Salad, Pickle & Papad', 'Daily Dessert + Chaach', 'Mon – Sat delivery'],
//       nonveg: ['Roti (unlimited) + Rice', 'Chicken + Special Dish', 'Salad, Pickle & Raita', 'Daily Dessert + Shorba', 'Mon – Sat delivery'],
//     },
//     featured: false,
//   },
// ];

// /* ─────────────────────────────────────────────
//    INTERSECTION OBSERVER HOOK
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
//    WHATSAPP SVG ICON
// ───────────────────────────────────────────── */
// function WaIcon({ color = 'white', size = 15 }: { color?: string; size?: number }) {
//   return (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
//       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//     </svg>
//   );
// }

// /* ─────────────────────────────────────────────
//    MAIN COMPONENT
// ───────────────────────────────────────────── */
// export default function MealPlans() {
//   const [foodTab, setFoodTab] = useState<'veg' | 'nonveg'>('veg');
//   const [durTab,  setDurTab]  = useState<'weekly' | 'monthly'>('weekly');
//   const { ref: sectionRef, inView } = useInView(0.05);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;0,800;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

//         /* ── BASE RESET ── */
//         .mp-root *, .mp-root *::before, .mp-root *::after {
//           box-sizing: border-box;
//         }

//         /* ── ROOT ── */
//         .mp-root {
//           font-family: 'DM Sans', sans-serif;
//           background: linear-gradient(170deg, #FFF8F0 0%, #FFF0E0 40%, #FFF5EB 100%);
//           position: relative;
//           overflow: hidden;
//           padding: 48px 0 60px;
//           -webkit-tap-highlight-color: transparent;
//         }
//         .mp-dots {
//           position: absolute;
//           inset: 0;
//           background-image: radial-gradient(circle, rgba(255,107,44,0.10) 1px, transparent 1px);
//           background-size: 28px 28px;
//           pointer-events: none;
//           z-index: 0;
//         }
//         .mp-blob {
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(70px);
//           opacity: 0.22;
//           pointer-events: none;
//           animation: mpBlobDrift 10s ease-in-out infinite;
//         }
//         @keyframes mpBlobDrift {
//           0%,100% { transform: translate(0,0) scale(1); }
//           40%      { transform: translate(30px,-20px) scale(1.06); }
//           70%      { transform: translate(-18px,18px) scale(0.95); }
//         }
//         .mp-spice {
//           position: absolute;
//           opacity: 0.05;
//           pointer-events: none;
//           animation: mpSpinSlow 22s linear infinite;
//           z-index: 0;
//           display: none;
//         }
//         @keyframes mpSpinSlow {
//           from { transform: rotate(0deg); }
//           to   { transform: rotate(360deg); }
//         }

//         /* ── CONTAINER ── */
//         .mp-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 16px;
//           position: relative;
//           z-index: 5;
//           width: 100%;
//         }

//         /* ── EYEBROW ── */
//         .mp-eyebrow {
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           background: rgba(255,107,44,0.10);
//           border: 1px solid rgba(255,107,44,0.28);
//           border-radius: 50px;
//           padding: 5px 14px;
//           font-size: 10px;
//           font-weight: 600;
//           color: #FF6B2C;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           margin-bottom: 12px;
//         }

//         /* ── HEADING ── */
//         .mp-heading {
//           font-family: 'Fraunces', serif;
//           font-size: clamp(24px, 6vw, 52px);
//           font-weight: 800;
//           color: #1A0A00;
//           line-height: 1.1;
//           letter-spacing: -0.5px;
//           margin: 0 0 12px;
//         }
//         .mp-heading em {
//           font-style: italic;
//           color: #C84B0A;
//           position: relative;
//         }
//         .mp-heading em::after {
//           content: '';
//           position: absolute;
//           bottom: 1px; left: 0; right: 0;
//           height: 3px;
//           background: linear-gradient(90deg,#FF6B2C,#F5A623);
//           border-radius: 2px;
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 1s cubic-bezier(.16,1,.3,1) 0.5s;
//         }
//         .mp-root.visible .mp-heading em::after { transform: scaleX(1); }

//         /* ── PILLS ROW ── */
//         .mp-pills-row {
//           display: flex;
//           justify-content: center;
//           gap: 6px;
//           flex-wrap: wrap;
//           margin-bottom: 22px;
//         }
//         .mp-pill {
//           display: inline-flex;
//           align-items: center;
//           gap: 5px;
//           background: rgba(255,255,255,0.85);
//           border: 1px solid rgba(255,107,44,0.18);
//           border-radius: 50px;
//           padding: 5px 11px;
//           font-size: 11px;
//           font-weight: 500;
//           color: #6B5344;
//           white-space: nowrap;
//         }

//         /* ── TOGGLES ── */
//         .mp-toggles-wrap {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 10px;
//         }
//         .mp-toggle-group {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           gap: 5px;
//         }
//         .mp-toggle-group-label {
//           font-size: 10px;
//           font-weight: 700;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           color: #9B7B6A;
//         }
//         .mp-toggle-wrap {
//           background: rgba(255,255,255,0.80);
//           border: 1px solid rgba(255,107,44,0.2);
//           border-radius: 60px;
//           padding: 4px;
//           display: inline-flex;
//           box-shadow: 0 4px 20px rgba(255,107,44,0.10);
//         }
//         .mp-toggle-btn {
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           padding: 9px 16px;
//           border-radius: 50px;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 13px;
//           font-weight: 600;
//           cursor: pointer;
//           border: none;
//           background: transparent;
//           color: #9B7B6A;
//           transition: all 0.3s cubic-bezier(.34,1.56,.64,1);
//           white-space: nowrap;
//           min-height: 44px;
//           -webkit-tap-highlight-color: transparent;
//           touch-action: manipulation;
//           user-select: none;
//           -webkit-user-select: none;
//         }
//         .mp-toggle-btn.active {
//           background: linear-gradient(135deg,#FF6B2C,#C84B0A);
//           color: #fff;
//           box-shadow: 0 4px 18px rgba(255,107,44,0.38);
//           transform: scale(1.03);
//         }
//         .mp-toggle-btn:active { transform: scale(0.97) !important; }

//         /* ── SECTION DIVIDER ── */
//         .mp-divider-row {
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           margin-bottom: 16px;
//         }
//         .mp-section-title {
//           font-family: 'Fraunces', serif;
//           font-size: clamp(14px, 2.5vw, 19px);
//           font-weight: 700;
//           color: #1A0A00;
//           white-space: nowrap;
//         }
//         .mp-section-label {
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           color: #9B7B6A;
//           white-space: nowrap;
//         }
//         .mp-divider-line {
//           flex: 1;
//           height: 1px;
//           background: rgba(26,10,0,0.08);
//           min-width: 8px;
//         }

//         /* ── CARDS GRID ── */
//         .mp-cards-grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 14px;
//           margin-bottom: 28px;
//         }

//         /* ── CARD ── */
//         .mp-card {
//           background: #fff;
//           border-radius: 20px;
//           border: 1.5px solid rgba(26,10,0,0.07);
//           overflow: hidden;
//           display: flex;
//           flex-direction: column;
//           box-shadow: 0 2px 16px rgba(26,10,0,0.06);
//           transition: transform 0.3s ease, box-shadow 0.3s ease;
//           -webkit-tap-highlight-color: transparent;
//         }
//         .mp-card.featured {
//           border-color: #C84B0A;
//           border-width: 2px;
//           box-shadow: 0 8px 36px rgba(200,75,10,0.16);
//         }
//         @media (hover: hover) and (pointer: fine) {
//           .mp-card:hover {
//             transform: translateY(-5px) scale(1.01);
//             box-shadow: 0 18px 48px rgba(26,10,0,0.11);
//           }
//           .mp-card.featured:hover {
//             transform: translateY(-5px) scale(1.01);
//             box-shadow: 0 22px 56px rgba(200,75,10,0.22);
//           }
//         }
//         .mp-card-stripe {
//           height: 4px;
//           width: 100%;
//           flex-shrink: 0;
//         }
//         .mp-card.featured .mp-card-stripe { height: 5px; }

//         .mp-card-badge {
//           display: inline-block;
//           background: linear-gradient(135deg,#FF6B2C,#C84B0A);
//           color: #fff;
//           font-size: 9px;
//           font-weight: 700;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           padding: 4px 10px;
//           border-radius: 50px;
//           margin-bottom: 7px;
//           align-self: flex-start;
//         }
//         .mp-card-body {
//           padding: 16px 16px 14px;
//           display: flex;
//           flex-direction: column;
//           flex: 1;
//         }
//         .mp-tier-name {
//           font-family: 'Fraunces', serif;
//           font-size: 18px;
//           font-weight: 700;
//           color: #1A0A00;
//           margin-bottom: 4px;
//         }
//         .mp-price {
//           font-family: 'Fraunces', serif;
//           font-size: clamp(30px, 6vw, 40px);
//           font-weight: 800;
//           line-height: 1;
//           margin-bottom: 2px;
//         }
//         .mp-price-sub {
//           font-size: 11px;
//           color: #9B7B6A;
//           margin-bottom: 14px;
//         }
//         .mp-features {
//           list-style: none;
//           margin: 0 0 16px;
//           padding: 0;
//           flex: 1;
//         }
//         .mp-feature-item {
//           display: flex;
//           align-items: flex-start;
//           gap: 8px;
//           font-size: 12px;
//           color: #6B5344;
//           font-weight: 500;
//           line-height: 1.5;
//           padding: 4px 0;
//         }
//         .mp-check-icon {
//           flex-shrink: 0;
//           margin-top: 2px;
//           width: 15px;
//           height: 15px;
//           border-radius: 50%;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         /* ── BUTTONS ── */
//         .mp-btn-primary,
//         .mp-btn-outline {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           gap: 7px;
//           width: 100%;
//           padding: 13px 12px;
//           border-radius: 50px;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 14px;
//           font-weight: 700;
//           cursor: pointer;
//           text-align: center;
//           text-decoration: none;
//           transition: all 0.22s ease;
//           min-height: 48px;
//           -webkit-tap-highlight-color: transparent;
//           touch-action: manipulation;
//           user-select: none;
//           -webkit-user-select: none;
//         }
//         .mp-btn-primary {
//           border: none;
//           color: #fff;
//           background: linear-gradient(135deg,#FF6B2C,#C84B0A);
//           box-shadow: 0 6px 20px rgba(255,107,44,0.30);
//         }
//         .mp-btn-outline {
//           border: 1.5px solid rgba(26,10,0,0.14);
//           background: transparent;
//           color: #1A0A00;
//         }
//         .mp-btn-primary:active  { transform: scale(0.97); opacity: 0.92; }
//         .mp-btn-outline:active  { transform: scale(0.97); opacity: 0.85; }
//         @media (hover: hover) and (pointer: fine) {
//           .mp-btn-primary:hover {
//             transform: translateY(-2px);
//             box-shadow: 0 12px 30px rgba(255,107,44,0.42);
//           }
//           .mp-btn-outline:hover {
//             border-color: #FF6B2C;
//             color: #FF6B2C;
//             background: rgba(255,107,44,0.04);
//             transform: translateY(-2px);
//           }
//         }

//         /* ── MONTHLY-ONLY NOTICE ── */
//         .mp-monthly-notice {
//           font-size: 11px;
//           color: #9B7B6A;
//           text-align: center;
//           margin-bottom: 12px;
//           font-style: italic;
//         }

//         /* ── TRIAL BANNER ── */
//         .mp-trial {
//           background: #fff;
//           border: 1px solid rgba(255,107,44,0.20);
//           border-radius: 20px;
//           padding: 18px 16px;
//           margin-top: 4px;
//           display: flex;
//           align-items: center;
//           justify-content: space-between;
//           gap: 14px;
//           position: relative;
//           overflow: hidden;
//           box-shadow: 0 6px 30px rgba(255,107,44,0.07);
//           flex-wrap: wrap;
//         }
//         .mp-trial::before {
//           content: '';
//           position: absolute;
//           top: -36px; right: -36px;
//           width: 120px; height: 120px;
//           background: radial-gradient(circle,#FFD580,transparent 70%);
//           opacity: 0.45;
//           pointer-events: none;
//         }
//         .mp-trial-content {
//           display: flex;
//           align-items: center;
//           gap: 12px;
//           position: relative;
//           z-index: 1;
//           flex: 1;
//           min-width: 0;
//         }
//         .mp-trial-icon {
//           width: 46px;
//           height: 46px;
//           flex-shrink: 0;
//           background: linear-gradient(135deg,#FFF0E0,#FFE4CC);
//           border: 1px solid rgba(255,107,44,0.2);
//           border-radius: 13px;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }
//         .mp-trial-title {
//           font-family: 'Fraunces', serif;
//           font-size: clamp(13px, 2.5vw, 17px);
//           font-weight: 700;
//           color: #1A0A00;
//           margin-bottom: 3px;
//           line-height: 1.3;
//         }
//         .mp-trial-sub {
//           font-size: 11px;
//           color: #9B7B6A;
//           line-height: 1.6;
//         }
//         .mp-trial-btn {
//           flex-shrink: 0;
//           padding: 13px 18px;
//           border-radius: 50px;
//           background: linear-gradient(135deg,#FF6B2C,#C84B0A);
//           color: #fff;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 13px;
//           font-weight: 700;
//           border: none;
//           cursor: pointer;
//           text-decoration: none;
//           display: inline-flex;
//           align-items: center;
//           gap: 7px;
//           position: relative;
//           z-index: 1;
//           transition: all 0.22s ease;
//           box-shadow: 0 6px 22px rgba(255,107,44,0.38);
//           min-height: 48px;
//           -webkit-tap-highlight-color: transparent;
//           touch-action: manipulation;
//           user-select: none;
//           -webkit-user-select: none;
//         }
//         .mp-trial-btn:active { transform: scale(0.97); }
//         @media (hover: hover) and (pointer: fine) {
//           .mp-trial-btn:hover { transform: translateY(-2px) scale(1.02); box-shadow: 0 12px 32px rgba(255,107,44,0.48); }
//         }

//         /* ── FADE ANIMATIONS ── */
//         .mp-fade {
//           opacity: 0;
//           transform: translateY(20px);
//           transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1);
//         }
//         .mp-root.visible .mp-fade { opacity: 1; transform: translateY(0); }
//         .mp-fade-d1 { transition-delay: 0.06s; }
//         .mp-fade-d2 { transition-delay: 0.12s; }
//         .mp-fade-d3 { transition-delay: 0.18s; }
//         .mp-fade-d4 { transition-delay: 0.26s; }
//         .mp-fade-d5 { transition-delay: 0.34s; }
//         .mp-fade-d6 { transition-delay: 0.42s; }
//         .mp-fade-d7 { transition-delay: 0.50s; }

//         .mp-note {
//           text-align: center;
//           font-size: 11px;
//           color: #9B7B6A;
//           margin-top: 8px;
//           line-height: 1.7;
//           padding: 0 8px;
//         }

//         /* ══════════════════════════════════════
//            RESPONSIVE BREAKPOINTS — MOBILE FIRST
//         ══════════════════════════════════════ */

//         /* xs — tiny phones (<375px) */
//         @media (max-width: 374px) {
//           .mp-root { padding: 36px 0 52px; }
//           .mp-container { padding: 0 12px; }
//           .mp-toggle-btn { padding: 8px 12px; font-size: 12px; gap: 4px; min-height: 40px; }
//           .mp-card-body { padding: 14px 13px 12px; }
//           .mp-price { font-size: 28px; }
//           .mp-tier-name { font-size: 16px; }
//           .mp-trial { padding: 16px 14px; }
//           .mp-trial-btn { width: 100%; justify-content: center; }
//           .mp-section-label { display: none; }
//           .mp-pill { font-size: 10px; padding: 4px 9px; }
//           .mp-btn-primary, .mp-btn-outline { font-size: 13px; }
//         }

//         /* sm — phones (375–539px) */
//         @media (min-width: 375px) and (max-width: 539px) {
//           .mp-root { padding: 44px 0 58px; }
//           .mp-container { padding: 0 14px; }
//           .mp-card-body { padding: 16px 15px 13px; }
//           .mp-trial-btn { width: 100%; justify-content: center; }
//         }

//         /* md — large phones / small tablets (540–767px) */
//         @media (min-width: 540px) and (max-width: 767px) {
//           .mp-root { padding: 52px 0 68px; }
//           .mp-container { padding: 0 20px; }
//           .mp-cards-grid { grid-template-columns: 1fr 1fr; }
//           .mp-trial-btn { width: 100%; justify-content: center; }
//           .mp-card-body { padding: 18px 17px 15px; }
//         }

//         /* lg — tablets (768–899px) */
//         @media (min-width: 768px) {
//           .mp-root { padding: 64px 0 80px; }
//           .mp-container { padding: 0 24px; }
//           .mp-toggle-btn { padding: 10px 20px; font-size: 14px; }
//           .mp-toggles-wrap { flex-direction: row; gap: 20px; }
//           .mp-cards-grid { grid-template-columns: 1fr 1fr; }
//           .mp-card-body { padding: 22px 20px 18px; }
//           .mp-price { font-size: 36px; }
//           .mp-tier-name { font-size: 19px; }
//         }

//         /* xl — desktop (900–1199px) */
//         @media (min-width: 900px) {
//           .mp-root { padding: 80px 0 100px; }
//           .mp-container { padding: 0 32px; }
//           .mp-spice { display: block; }
//           .mp-cards-grid.two-col   { grid-template-columns: 1fr 1fr; max-width: 720px; margin-left: auto; margin-right: auto; }
//           .mp-cards-grid.three-col { grid-template-columns: repeat(3, 1fr); }
//           .mp-cards-grid.three-col .mp-card.featured { transform: scale(1.04); }
//           .mp-card-body { padding: 24px 24px 20px; }
//           .mp-price { font-size: 40px; }
//           .mp-tier-name { font-size: 20px; }
//         }

//         /* 2xl — wide desktop (1200px+) */
//         @media (min-width: 1200px) {
//           .mp-container { padding: 0 48px; }
//           .mp-price { font-size: 44px; }
//           .mp-card-body { padding: 28px 28px 24px; }
//           .mp-cards-grid.two-col { max-width: 800px; }
//         }
//       `}</style>

//       <section
//         id="meal-plans"
//         ref={sectionRef}
//         className={`mp-root${inView ? ' visible' : ''}`}
//       >
//         <div className="mp-dots" />
//         <div className="mp-blob" style={{ width: 380, height: 380, background: '#FFD580', top: -60, right: -80, animationDelay: '0s' }} />
//         <div className="mp-blob" style={{ width: 280, height: 280, background: '#FF9F6B', bottom: 0, left: -60, animationDelay: '-4s' }} />
//         <div className="mp-blob" style={{ width: 200, height: 200, background: '#FFCFB0', top: '45%', left: '55%', animationDelay: '-7s' }} />
//         <div className="mp-spice" style={{ top: '16%', left: '3%', fontSize: 40 }}>🌶️</div>
//         <div className="mp-spice" style={{ bottom: '16%', right: '3%', fontSize: 50, animationDuration: '30s' }}>🍲</div>

//         <div className="mp-container">

//           {/* ── HEADER ── */}
//           <div style={{ textAlign: 'center', marginBottom: 28 }}>
//             <div className="mp-fade mp-fade-d1">
//               <span className="mp-eyebrow"><Sparkles size={10} /> Subscription Plans</span>
//             </div>
//             <h2 className="mp-heading mp-fade mp-fade-d2">
//               Choose Your <em>Meal Plan</em>
//             </h2>
//             <p className="mp-fade mp-fade-d3" style={{
//               fontSize: 'clamp(12px, 2.5vw, 14px)',
//               color: '#9B7B6A',
//               lineHeight: 1.7,
//               margin: '0 auto 16px',
//               maxWidth: 480,
//               padding: '0 4px',
//             }}>
//               Handcrafted every morning by female home chefs — fresh North Indian flavours, delivered 6 days a week in Dubai.
//             </p>

//             <div className="mp-fade mp-fade-d3 mp-pills-row">
//               {[
//                 { icon: <Clock size={11} />,  text: '6 Days / Week' },
//                 { icon: <Truck size={11} />,  text: 'Free Delivery' },
//                 { icon: <Star size={11} />,   text: '26 Days / Month' },
//               ].map(({ icon, text }) => (
//                 <span key={text} className="mp-pill">{icon} {text}</span>
//               ))}
//             </div>

//             {/* ── TOGGLES ── */}
//             <div className="mp-fade mp-fade-d4">
//               <div className="mp-toggles-wrap">
//                 <div className="mp-toggle-group">
//                   <span className="mp-toggle-group-label">Food type</span>
//                   <div className="mp-toggle-wrap">
//                     <button
//                       className={`mp-toggle-btn${foodTab === 'veg' ? ' active' : ''}`}
//                       onClick={() => setFoodTab('veg')}
//                     >
//                       <Leaf size={13} /> Veg
//                     </button>
//                     <button
//                       className={`mp-toggle-btn${foodTab === 'nonveg' ? ' active' : ''}`}
//                       onClick={() => setFoodTab('nonveg')}
//                     >
//                       <Drumstick size={13} /> Non-Veg
//                     </button>
//                   </div>
//                 </div>
//                 <div className="mp-toggle-group">
//                   <span className="mp-toggle-group-label">Duration</span>
//                   <div className="mp-toggle-wrap">
//                     <button
//                       className={`mp-toggle-btn${durTab === 'weekly' ? ' active' : ''}`}
//                       onClick={() => setDurTab('weekly')}
//                     >
//                       Weekly
//                     </button>
//                     <button
//                       className={`mp-toggle-btn${durTab === 'monthly' ? ' active' : ''}`}
//                       onClick={() => setDurTab('monthly')}
//                     >
//                       Monthly
//                     </button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* ── SECTION: 1 MEAL / DAY ── */}
//           <div className="mp-fade mp-fade-d4 mp-divider-row">
//             <span className="mp-section-title">1 Meal / Day</span>
//             <div className="mp-divider-line" />
//             <span className="mp-section-label">
//               {durTab === 'weekly' ? 'Weekly' : 'Monthly'} · Lunch or Dinner
//             </span>
//           </div>

//           <div className="mp-fade mp-fade-d5 mp-cards-grid two-col">
//             {ONE_MEAL_PLANS.map((plan) => {
//               const priceVal = durTab === 'weekly' ? plan.weekly[foodTab] : plan.monthly[foodTab];
//               const features = plan.features[foodTab];
//               const waUrl = buildWhatsAppUrl({
//                 tier: `${plan.tier} – 1 Meal/Day`,
//                 type: foodTab === 'veg' ? 'Veg' : 'Non-Veg',
//                 price: priceVal,
//                 duration: durTab,
//                 features,
//               });
//               return (
//                 <div key={plan.tier} className={`mp-card${plan.featured ? ' featured' : ''}`}>
//                   <div className="mp-card-stripe" style={{ background: `linear-gradient(90deg, ${plan.color}, #F5A623)` }} />
//                   <div className="mp-card-body">
//                     {plan.badge && <div className="mp-card-badge">{plan.badge}</div>}
//                     <div className="mp-tier-name">{plan.tier}</div>
//                     <div className="mp-price" style={{ color: plan.featured ? plan.color : '#1A0A00' }}>
//                       AED {priceVal}
//                     </div>
//                     <div className="mp-price-sub">per {durTab === 'weekly' ? 'week' : 'month'} · 1 meal / day</div>
//                     <ul className="mp-features">
//                       {features.map((f) => (
//                         <li key={f} className="mp-feature-item">
//                           <span className="mp-check-icon" style={{ background: plan.featured ? 'rgba(200,75,10,0.10)' : 'rgba(26,10,0,0.05)' }}>
//                             <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={plan.featured ? plan.color : '#9B7B6A'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                               <polyline points="20 6 9 17 4 12" />
//                             </svg>
//                           </span>
//                           {f}
//                         </li>
//                       ))}
//                     </ul>
//                     {plan.featured ? (
//                       <a href={waUrl} target="_blank" rel="noreferrer" className="mp-btn-primary">
//                         <WaIcon color="white" size={15} /> Subscribe Now
//                       </a>
//                     ) : (
//                       <a href={waUrl} target="_blank" rel="noreferrer" className="mp-btn-outline">
//                         <WaIcon color="#25D366" size={15} /> Select Plan
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           {/* ── SECTION: 2 MEALS / DAY ── */}
//           <div className="mp-fade mp-fade-d5 mp-divider-row">
//             <span className="mp-section-title">2 Meals / Day</span>
//             <div className="mp-divider-line" />
//             <span className="mp-section-label">Monthly · Lunch &amp; Dinner</span>
//           </div>

//           {durTab === 'weekly' && (
//             <p className="mp-monthly-notice mp-fade mp-fade-d5">
//               2-meal plans are monthly only — showing monthly prices below.
//             </p>
//           )}

//           <div className="mp-fade mp-fade-d6 mp-cards-grid three-col">
//             {TWO_MEAL_PLANS.map((plan) => {
//               const priceVal = plan.monthly[foodTab];
//               const features = plan.features[foodTab];
//               const waUrl = buildWhatsAppUrl({
//                 tier: `${plan.tier} – 2 Meals/Day`,
//                 type: foodTab === 'veg' ? 'Veg' : 'Non-Veg',
//                 price: priceVal,
//                 duration: 'monthly',
//                 features,
//               });
//               return (
//                 <div key={plan.tier} className={`mp-card${plan.featured ? ' featured' : ''}`}>
//                   <div className="mp-card-stripe" style={{ background: `linear-gradient(90deg, ${plan.color}, #F5A623)` }} />
//                   <div className="mp-card-body">
//                     {plan.badge && <div className="mp-card-badge">{plan.badge}</div>}
//                     <div className="mp-tier-name">{plan.tier} Plan</div>
//                     <div className="mp-price" style={{ color: plan.featured ? plan.color : '#1A0A00' }}>
//                       AED {priceVal}
//                     </div>
//                     <div className="mp-price-sub">per month · 2 meals / day</div>
//                     <ul className="mp-features">
//                       {features.map((f) => (
//                         <li key={f} className="mp-feature-item">
//                           <span className="mp-check-icon" style={{ background: plan.featured ? 'rgba(200,75,10,0.10)' : 'rgba(26,10,0,0.05)' }}>
//                             <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke={plan.featured ? plan.color : '#9B7B6A'} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                               <polyline points="20 6 9 17 4 12" />
//                             </svg>
//                           </span>
//                           {f}
//                         </li>
//                       ))}
//                     </ul>
//                     {plan.featured ? (
//                       <a href={waUrl} target="_blank" rel="noreferrer" className="mp-btn-primary">
//                         <WaIcon color="white" size={15} /> Subscribe Now
//                       </a>
//                     ) : (
//                       <a href={waUrl} target="_blank" rel="noreferrer" className="mp-btn-outline">
//                         <WaIcon color="#25D366" size={15} /> Select Plan
//                       </a>
//                     )}
//                   </div>
//                 </div>
//               );
//             })}
//           </div>

//           <p className="mp-fade mp-fade-d6 mp-note">
//             ✨ Fresh, less oil &amp; ghar jaisa taste · Customization available · Roti, rice, dal, sabzi &amp; salad daily
//           </p>

//           {/* ── TRIAL BANNER ── */}
//           <div className="mp-fade mp-fade-d7">
//             <div className="mp-trial">
//               <div className="mp-trial-content">
//                 <div className="mp-trial-icon">
//                   <Gift size={22} color="#C84B0A" />
//                 </div>
//                 <div style={{ minWidth: 0 }}>
//                   <div className="mp-trial-title">Want to taste before subscribing?</div>
//                   <div className="mp-trial-sub">
//                     2-day trial · Veg AED 25 · Non-Veg AED 28<br />No commitment needed 😊
//                   </div>
//                 </div>
//               </div>
//               <a
//                 href={buildWhatsAppUrl({ tier: 'Trial', type: 'Veg', price: 0, duration: 'weekly', features: [], isTrial: true })}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="mp-trial-btn"
//               >
//                 <WaIcon color="white" size={14} />
//                 Book a Trial 🍲
//                 <ChevronRight size={13} />
//               </a>
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }






'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import { Leaf, Drumstick, Sparkles, Clock, Truck, Star, ChevronRight, Gift, Flame } from 'lucide-react';

const WHATSAPP_NUMBER = '+971557998925';

/* ─────────────────────────────────────────────
   WHATSAPP MESSAGE BUILDER
───────────────────────────────────────────── */
function buildWhatsAppUrl(plan: {
  tier: string; type: 'Veg' | 'Non-Veg'; price: number;
  duration: 'weekly' | 'monthly'; features: string[]; isTrial?: boolean;
}) {
  const { tier, type, price, duration, features, isTrial } = plan;
  if (isTrial) {
    const msg = [`👋 Hello The Chef Mom!`, ``, `I'd like to book a *2-Day Trial Meal* before subscribing.`, ``, `Please share the trial details and delivery schedule.`, ``, `Thank you! 🙏`].join('\n');
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
  }
  const msg = [
    `👋 Hello The Chef Mom!`, ``,
    `I'm interested in subscribing to the following meal plan:`, ``,
    `📦 *Plan:* ${tier} (${type})`,
    `💰 *Price:* AED ${price}/${duration === 'weekly' ? 'week' : 'month'}`,
    `🍽️ *Includes:*`,
    ...features.map(f => `   • ${f}`), ``,
    `Please share payment details and delivery schedule.`, ``,
    `Thank you! 🙏`,
  ].join('\n');
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

/* ─────────────────────────────────────────────
   PLAN DATA
───────────────────────────────────────────── */
const ONE_MEAL_PLANS = [
  {
    tier: 'Half Meal', badge: null as string | null,
    weekly: { veg: 125, nonveg: 165 }, monthly: { veg: 469, nonveg: 629 },
    color: '#B85C1A', accentLight: 'rgba(184,92,26,0.07)', accentGlow: 'rgba(184,92,26,0.22)',
    features: {
      veg:    ['Roti (3 pcs) or Rice', 'Dal of the Day + Veg', 'Fresh Salad', 'Pickle', 'Mon – Sat delivery'],
      nonveg: ['Roti (3 pcs) or Rice', 'Dal of the Day + Non-Veg', 'Fresh Salad', 'Pickle', 'Mon – Sat delivery'],
    },
    featured: false,
  },
  {
    tier: 'Full Meal', badge: '⭐ Best Value' as string | null,
    weekly: { veg: 145, nonveg: 185 }, monthly: { veg: 569, nonveg: 699 },
    color: '#C84B0A', accentLight: 'rgba(200,75,10,0.07)', accentGlow: 'rgba(200,75,10,0.32)',
    features: {
      veg:    ['Roti (3 pcs) + Rice', 'Dal of the Day + Veg', 'Sweet or Raita', 'Fresh Salad', 'Pickle or Papad', 'Mon – Sat delivery'],
      nonveg: ['Roti (3 pcs) + Rice', 'Dal of the Day + Non-Veg', 'Sweet or Raita', 'Fresh Salad', 'Pickle or Papad', 'Mon – Sat delivery'],
    },
    featured: true,
  },
];

const TWO_MEAL_PLANS = [
  {
    tier: 'Basic', badge: null as string | null,
    monthly: { veg: 699, nonveg: 899 },
    color: '#B85C1A', accentLight: 'rgba(184,92,26,0.07)', accentGlow: 'rgba(184,92,26,0.22)',
    features: {
      veg:    ['Roti (3 pcs) or Rice', 'Dal of the Day + Veg', 'Fresh Salad', 'Pickle', 'Mon – Sat delivery'],
      nonveg: ['Roti (3 pcs) or Rice', 'Dal of the Day + Non-Veg', 'Fresh Salad', 'Pickle', 'Mon – Sat delivery'],
    },
    featured: false,
  },
  {
    tier: 'Standard', badge: '⭐ Most Preferred' as string | null,
    monthly: { veg: 749, nonveg: 949 },
    color: '#C84B0A', accentLight: 'rgba(200,75,10,0.07)', accentGlow: 'rgba(200,75,10,0.32)',
    features: {
      veg:    ['Roti (3 pcs) + Rice', 'Dal of the Day + Veg', 'Sweet or Raita', 'Fresh Salad', 'Pickle', 'Mon – Sat delivery'],
      nonveg: ['Roti (3 pcs) + Rice', 'Dal of the Day + Non-Veg', 'Sweet or Raita', 'Fresh Salad', 'Pickle', 'Mon – Sat delivery'],
    },
    featured: true,
  },
  {
    tier: 'Premium', badge: null as string | null,
    monthly: { veg: 849, nonveg: 1049 },
    color: '#A03508', accentLight: 'rgba(160,53,8,0.07)', accentGlow: 'rgba(160,53,8,0.28)',
    features: {
      veg:    ['Roti (3 pcs) + Rice', 'Dal of the Day + 3 Variety Sabzi', 'Daily Sweets Included', 'Richer Meal Combinations', 'Special Dish of the Day', 'Dessert or Curd', 'Fresh Salad', 'Pickle or Papad', 'Mon – Sat delivery'],
      nonveg: ['Roti (3 pcs) + Rice', 'Dal of the Day + Special Non-Veg Dish', 'Daily Sweets Included', 'Richer Meal Combinations', 'More Variety Every Day', 'Dessert or Curd', 'Fresh Salad', 'Pickle or Papad', 'Mon – Sat delivery'],
    },
    featured: false,
  },
];

/* ─────────────────────────────────────────────
   HOOKS
───────────────────────────────────────────── */
function useInView(threshold = 0.05) {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

/* ─────────────────────────────────────────────
   FLOATING PARTICLES CANVAS
───────────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf: number;
    const resize = () => {
      canvas.width  = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener('resize', resize);
    type Particle = { x: number; y: number; r: number; vx: number; vy: number; alpha: number; color: string };
    const particles: Particle[] = Array.from({ length: 40 }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      r: Math.random() * 3.2 + 0.8,
      vx: (Math.random() - 0.5) * 0.32,
      vy: -(Math.random() * 0.48 + 0.12),
      alpha: Math.random() * 0.45 + 0.10,
      color: Math.random() > 0.5 ? '#FF6B2C' : '#F5A623',
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = p.alpha;
        ctx.fill();
        p.x += p.vx; p.y += p.vy;
        if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      });
      ctx.globalAlpha = 1;
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return (
    <canvas
      ref={canvasRef}
      style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}
    />
  );
}

/* ─────────────────────────────────────────────
   ANIMATED PRICE — 3D flip on tab change
───────────────────────────────────────────── */
function AnimatedPrice({ value, color }: { value: number; color: string }) {
  const [display, setDisplay] = useState(value);
  const [phase, setPhase]     = useState<'idle' | 'out' | 'in'>('idle');

  useEffect(() => {
    setPhase('out');
    const t1 = setTimeout(() => { setDisplay(value); setPhase('in'); }, 190);
    const t2 = setTimeout(() => setPhase('idle'), 380);
    return () => { clearTimeout(t1); clearTimeout(t2); };
  }, [value]);

  const styles: React.CSSProperties = {
    color,
    display: 'block',
    transition: 'transform 0.19s cubic-bezier(.4,0,.2,1), opacity 0.19s ease',
    transformStyle: 'preserve-3d' as const,
    ...(phase === 'out' ? { transform: 'rotateX(90deg) scale(0.8)', opacity: 0 } :
        phase === 'in'  ? { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0.6 } :
                          { transform: 'rotateX(0deg) scale(1)', opacity: 1 }),
  };

  return (
    <div className="mp-price" style={{ perspective: '500px' }}>
      <span style={styles}>AED {display}</span>
    </div>
  );
}

/* ─────────────────────────────────────────────
   WHATSAPP ICON
───────────────────────────────────────────── */
function WaIcon({ color = 'white', size = 15 }: { color?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

/* ─────────────────────────────────────────────
   MEAL CARD — shimmer, glow, stagger reveal
───────────────────────────────────────────── */
type PlanShape = {
  tier: string; badge: string | null; color: string;
  accentLight: string; accentGlow: string; featured: boolean;
};

function MealCard({
  plan, priceVal, features, waUrl, mealType, delay,
}: {
  plan: PlanShape; priceVal: number; features: string[];
  waUrl: string; mealType: string; delay: number;
}) {
  const [hovered, setHovered]   = useState(false);
  const [shimmer, setShimmer]   = useState(false);
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setRevealed(true), delay);
    return () => clearTimeout(t);
  }, [delay]);

  const handleEnter = useCallback(() => {
    setHovered(true);
    setShimmer(true);
    setTimeout(() => setShimmer(false), 650);
  }, []);

  return (
    <div
      className={`mp-card${plan.featured ? ' featured' : ''}`}
      onMouseEnter={handleEnter}
      onMouseLeave={() => setHovered(false)}
      style={{
        opacity: revealed ? 1 : 0,
        transform: revealed ? 'translateY(0) scale(1)' : 'translateY(36px) scale(0.95)',
        transition: `opacity 0.65s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.65s cubic-bezier(.16,1,.3,1) ${delay}ms, box-shadow 0.35s ease`,
        position: 'relative', overflow: 'hidden',
        boxShadow: hovered
          ? `0 28px 60px ${plan.accentGlow}, 0 4px 16px rgba(26,10,0,0.07)`
          : plan.featured
          ? `0 8px 36px ${plan.accentGlow}`
          : '0 2px 16px rgba(26,10,0,0.06)',
      }}
    >
      {/* Shimmer sweep */}
      {shimmer && (
        <div style={{
          position: 'absolute', top: 0, left: '-100%', width: '55%', height: '100%',
          background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.52) 50%, transparent 80%)',
          animation: 'mpShimmerSweep 0.60s ease forwards',
          zIndex: 30, pointerEvents: 'none',
        }} />
      )}

      {/* Pulse ring on featured */}
      {plan.featured && (
        <div style={{
          position: 'absolute', inset: -3, borderRadius: 23,
          border: `2px solid ${plan.color}`,
          animation: 'mpPulseRing 2.6s ease-in-out infinite',
          pointerEvents: 'none', zIndex: 0,
        }} />
      )}

      {/* Stripe with animated gloss */}
      <div className="mp-card-stripe" style={{ background: `linear-gradient(90deg, ${plan.color}, #F5A623)`, position: 'relative', zIndex: 2, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.42) 50%, transparent 100%)',
          backgroundSize: '200% 100%',
          animation: 'mpStripeGloss 2.8s linear infinite',
        }} />
      </div>

      <div className="mp-card-body" style={{ position: 'relative', zIndex: 2 }}>
        {plan.badge && (
          <div className="mp-card-badge" style={{ animation: 'mpBadgeBounce 2.2s ease-in-out infinite' }}>
            {plan.badge}
          </div>
        )}
        <div className="mp-tier-name">{plan.tier}</div>
        <AnimatedPrice value={priceVal} color={plan.featured ? plan.color : '#1A0A00'} />
        <div className="mp-price-sub">per {mealType} · starting AED {priceVal}</div>

        <ul className="mp-features">
          {features.map((f, i) => (
            <li
              key={f}
              className="mp-feature-item"
              style={{
                opacity: revealed ? 1 : 0,
                transform: revealed ? 'translateX(0)' : 'translateX(-14px)',
                transition: `opacity 0.42s ease ${delay + 220 + i * 55}ms, transform 0.42s ease ${delay + 220 + i * 55}ms`,
              }}
            >
              <span
                className="mp-check-icon"
                style={{ background: plan.featured ? 'rgba(200,75,10,0.10)' : 'rgba(26,10,0,0.05)' }}
              >
                <svg width="9" height="9" viewBox="0 0 24 24" fill="none"
                  stroke={plan.featured ? plan.color : '#9B7B6A'}
                  strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </span>
              {f}
            </li>
          ))}
        </ul>

        {/* Hover tint layer */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 20,
          background: plan.accentLight,
          opacity: hovered ? 1 : 0,
          transition: 'opacity 0.28s ease',
          pointerEvents: 'none', zIndex: -1,
        }} />

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
}

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function MealPlans() {
  const [foodTab, setFoodTab]   = useState<'veg' | 'nonveg'>('veg');
  const [durTab,  setDurTab]    = useState<'weekly' | 'monthly'>('weekly');
  const [toggling, setToggling] = useState(false);
  const { ref: sectionRef, inView } = useInView(0.05);

  const handleFoodTab = (val: 'veg' | 'nonveg') => {
    if (val === foodTab) return;
    setToggling(true); setTimeout(() => { setFoodTab(val); setToggling(false); }, 220);
  };
  const handleDurTab = (val: 'weekly' | 'monthly') => {
    if (val === durTab) return;
    setToggling(true); setTimeout(() => { setDurTab(val); setToggling(false); }, 220);
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;0,800;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .mp-root *, .mp-root *::before, .mp-root *::after { box-sizing: border-box; }

        .mp-root {
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(170deg, #FFF8F0 0%, #FFF0E0 40%, #FFF5EB 100%);
          position: relative; overflow: hidden; padding: 48px 0 60px;
          -webkit-tap-highlight-color: transparent;
        }

        /* ── Animated dot grid ── */
        .mp-dots {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(255,107,44,0.13) 1.5px, transparent 1.5px);
          background-size: 28px 28px; pointer-events: none; z-index: 0;
          animation: mpDotsPulse 6s ease-in-out infinite;
        }
        @keyframes mpDotsPulse { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }

        /* ── Blobs ── */
        .mp-blob {
          position: absolute; border-radius: 50%;
          filter: blur(72px); opacity: 0.22; pointer-events: none;
          animation: mpBlobDrift 12s ease-in-out infinite;
        }
        @keyframes mpBlobDrift {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(28px,-22px) scale(1.07); }
          66%      { transform: translate(-18px,16px) scale(0.93); }
        }

        /* ── Orbiting spice icons ── */
        .mp-spice-wrap { position: absolute; pointer-events: none; z-index: 2; }
        .mp-spice { font-size: 36px; opacity: 0.08; display: inline-block; }
        .mp-orbit-a { animation: mpOrbitA 20s linear infinite; }
        .mp-orbit-b { animation: mpOrbitB 26s linear infinite; }
        @keyframes mpOrbitA {
          from { transform: rotate(0deg) translateX(55px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(55px) rotate(-360deg); }
        }
        @keyframes mpOrbitB {
          from { transform: rotate(180deg) translateX(70px) rotate(-180deg); }
          to   { transform: rotate(540deg) translateX(70px) rotate(-540deg); }
        }

        /* ── Container ── */
        .mp-container { max-width: 1200px; margin: 0 auto; padding: 0 16px; position: relative; z-index: 5; width: 100%; }

        /* ── Eyebrow ── */
        .mp-eyebrow {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,107,44,0.10); border: 1px solid rgba(255,107,44,0.28);
          border-radius: 50px; padding: 5px 14px;
          font-size: 10px; font-weight: 600; color: #FF6B2C;
          letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 12px;
          animation: mpFloat 3.2s ease-in-out infinite;
        }
        @keyframes mpFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }

        /* ── Heading ── */
        .mp-heading {
          font-family: 'Fraunces', serif; font-size: clamp(24px,6vw,52px);
          font-weight: 800; color: #1A0A00; line-height: 1.1;
          letter-spacing: -0.5px; margin: 0 0 12px;
        }
        .mp-heading em { font-style: italic; color: #C84B0A; position: relative; }
        .mp-heading em::after {
          content: ''; position: absolute; bottom: 1px; left: 0; right: 0;
          height: 3px; background: linear-gradient(90deg,#FF6B2C,#F5A623);
          border-radius: 2px; transform: scaleX(0); transform-origin: left;
          transition: transform 1.1s cubic-bezier(.16,1,.3,1) 0.5s;
        }
        .mp-root.visible .mp-heading em::after { transform: scaleX(1); }

        /* ── Pills ── */
        .mp-pills-row { display: flex; justify-content: center; gap: 6px; flex-wrap: wrap; margin-bottom: 22px; }
        .mp-pill {
          display: inline-flex; align-items: center; gap: 5px;
          background: rgba(255,255,255,0.88); border: 1px solid rgba(255,107,44,0.20);
          border-radius: 50px; padding: 5px 11px;
          font-size: 11px; font-weight: 500; color: #6B5344; white-space: nowrap;
          transition: transform 0.22s ease, box-shadow 0.22s ease;
        }
        .mp-pill:hover { transform: translateY(-2px); box-shadow: 0 4px 14px rgba(255,107,44,0.18); }

        /* ── Toggles ── */
        .mp-toggles-wrap { display: flex; flex-direction: column; align-items: center; gap: 10px; }
        .mp-toggle-group { display: flex; flex-direction: column; align-items: center; gap: 5px; }
        .mp-toggle-group-label { font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #9B7B6A; }
        .mp-toggle-wrap {
          background: rgba(255,255,255,0.82); border: 1px solid rgba(255,107,44,0.22);
          border-radius: 60px; padding: 4px; display: inline-flex;
          box-shadow: 0 4px 20px rgba(255,107,44,0.10);
        }
        .mp-toggle-btn {
          display: flex; align-items: center; gap: 6px; padding: 9px 16px; border-radius: 50px;
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600;
          cursor: pointer; border: none; background: transparent; color: #9B7B6A;
          transition: all 0.32s cubic-bezier(.34,1.56,.64,1);
          white-space: nowrap; min-height: 44px;
          -webkit-tap-highlight-color: transparent; touch-action: manipulation;
          user-select: none; -webkit-user-select: none;
        }
        .mp-toggle-btn.active {
          background: linear-gradient(135deg,#FF6B2C,#C84B0A); color: #fff;
          box-shadow: 0 4px 18px rgba(255,107,44,0.42); transform: scale(1.04);
        }
        .mp-toggle-btn:not(.active):hover { background: rgba(255,107,44,0.08); transform: scale(1.02); }
        .mp-toggle-btn:active { transform: scale(0.96) !important; }

        /* ── Section divider ── */
        .mp-divider-row { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
        .mp-section-title { font-family: 'Fraunces', serif; font-size: clamp(14px,2.5vw,19px); font-weight: 700; color: #1A0A00; white-space: nowrap; }
        .mp-section-label { font-size: 9px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #9B7B6A; white-space: nowrap; }
        .mp-divider-line { flex: 1; height: 1px; background: rgba(26,10,0,0.08); min-width: 8px; }

        /* ── Cards grid ── */
        .mp-cards-grid { display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 28px; }
        .mp-cards-toggling { opacity: 0.38; transform: scale(0.985); transition: opacity 0.22s ease, transform 0.22s ease; pointer-events: none; }
        .mp-cards-ready    { opacity: 1;    transform: scale(1);     transition: opacity 0.22s ease, transform 0.22s ease; }

        /* ── Card ── */
        .mp-card {
          background: #fff; border-radius: 20px; border: 1.5px solid rgba(26,10,0,0.07);
          overflow: hidden; display: flex; flex-direction: column;
          -webkit-tap-highlight-color: transparent; cursor: default;
        }
        .mp-card.featured { border-color: #C84B0A; border-width: 2px; }
        @media (hover: hover) and (pointer: fine) {
          .mp-card:hover { transform: translateY(-8px) scale(1.015) rotate(-0.25deg) !important; }
          .mp-card.featured:hover { transform: translateY(-10px) scale(1.02) rotate(0.25deg) !important; }
        }
        .mp-card-stripe { height: 4px; width: 100%; flex-shrink: 0; position: relative; overflow: hidden; }
        .mp-card.featured .mp-card-stripe { height: 5px; }
        .mp-card-badge {
          display: inline-block; background: linear-gradient(135deg,#FF6B2C,#C84B0A);
          color: #fff; font-size: 9px; font-weight: 700; letter-spacing: 1.5px;
          text-transform: uppercase; padding: 4px 10px; border-radius: 50px;
          margin-bottom: 7px; align-self: flex-start;
        }
        @keyframes mpBadgeBounce { 0%,100% { transform: translateY(0); } 42% { transform: translateY(-4px); } 70% { transform: translateY(-2px); } }
        .mp-card-body { padding: 16px 16px 14px; display: flex; flex-direction: column; flex: 1; position: relative; }
        .mp-tier-name { font-family: 'Fraunces', serif; font-size: 18px; font-weight: 700; color: #1A0A00; margin-bottom: 4px; }
        .mp-price { font-family: 'Fraunces', serif; font-size: clamp(30px,6vw,40px); font-weight: 800; line-height: 1; margin-bottom: 2px; }
        .mp-price-sub { font-size: 11px; color: #9B7B6A; margin-bottom: 14px; }
        .mp-features { list-style: none; margin: 0 0 16px; padding: 0; flex: 1; }
        .mp-feature-item { display: flex; align-items: flex-start; gap: 8px; font-size: 12px; color: #6B5344; font-weight: 500; line-height: 1.5; padding: 4px 0; }
        .mp-check-icon { flex-shrink: 0; margin-top: 2px; width: 15px; height: 15px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }

        /* ── Buttons ── */
        .mp-btn-primary, .mp-btn-outline {
          display: flex; align-items: center; justify-content: center; gap: 7px;
          width: 100%; padding: 13px 12px; border-radius: 50px;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 700;
          cursor: pointer; text-align: center; text-decoration: none;
          transition: all 0.26s cubic-bezier(.34,1.3,.64,1);
          min-height: 48px; position: relative; overflow: hidden;
          -webkit-tap-highlight-color: transparent; touch-action: manipulation;
          user-select: none; -webkit-user-select: none;
        }
        .mp-btn-primary { border: none; color: #fff; background: linear-gradient(135deg,#FF6B2C,#C84B0A); box-shadow: 0 6px 20px rgba(255,107,44,0.30); }
        .mp-btn-outline { border: 1.5px solid rgba(26,10,0,0.14); background: transparent; color: #1A0A00; }
        .mp-btn-primary::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
          background: linear-gradient(105deg, transparent, rgba(255,255,255,0.28), transparent);
          animation: mpBtnSheen 2.5s ease-in-out infinite;
        }
        @keyframes mpBtnSheen { 0%,100% { left: -100%; } 50% { left: 160%; } }
        .mp-btn-primary:active, .mp-btn-outline:active { transform: scale(0.96); }
        @media (hover: hover) and (pointer: fine) {
          .mp-btn-primary:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 14px 32px rgba(255,107,44,0.46); }
          .mp-btn-outline:hover { border-color: #FF6B2C; color: #FF6B2C; background: rgba(255,107,44,0.05); transform: translateY(-2px); }
        }

        /* ── Monthly notice ── */
        .mp-monthly-notice { font-size: 11px; color: #9B7B6A; text-align: center; margin-bottom: 12px; font-style: italic; }

        /* ── Trial banner ── */
        .mp-trial {
          background: #fff; border: 1px solid rgba(255,107,44,0.22); border-radius: 20px;
          padding: 18px 16px; margin-top: 4px;
          display: flex; align-items: center; justify-content: space-between; gap: 14px;
          position: relative; overflow: hidden; flex-wrap: wrap;
          animation: mpTrialGlow 3.8s ease-in-out infinite;
        }
        @keyframes mpTrialGlow {
          0%,100% { box-shadow: 0 6px 28px rgba(255,107,44,0.08); }
          50%      { box-shadow: 0 10px 44px rgba(255,107,44,0.22); }
        }
        .mp-trial::before {
          content: ''; position: absolute; top: -40px; right: -40px;
          width: 130px; height: 130px;
          background: radial-gradient(circle,#FFD580,transparent 70%);
          opacity: 0.42; pointer-events: none;
          animation: mpOrbFloat 4.2s ease-in-out infinite;
        }
        @keyframes mpOrbFloat { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-12px,10px) scale(1.18); } }
        .mp-trial-content { display: flex; align-items: center; gap: 12px; position: relative; z-index: 1; flex: 1; min-width: 0; }
        .mp-trial-icon {
          width: 46px; height: 46px; flex-shrink: 0;
          background: linear-gradient(135deg,#FFF0E0,#FFE4CC);
          border: 1px solid rgba(255,107,44,0.2); border-radius: 13px;
          display: flex; align-items: center; justify-content: center;
          animation: mpGiftWiggle 2.5s ease-in-out infinite;
        }
        @keyframes mpGiftWiggle { 0%,100% { transform: scale(1) rotate(0deg); } 25% { transform: scale(1.06) rotate(-6deg); } 75% { transform: scale(1.06) rotate(6deg); } }
        .mp-trial-title { font-family: 'Fraunces', serif; font-size: clamp(13px,2.5vw,17px); font-weight: 700; color: #1A0A00; margin-bottom: 3px; line-height: 1.3; }
        .mp-trial-sub { font-size: 11px; color: #9B7B6A; line-height: 1.6; }
        .mp-trial-btn {
          flex-shrink: 0; padding: 13px 18px; border-radius: 50px;
          background: linear-gradient(135deg,#FF6B2C,#C84B0A); color: #fff;
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 700;
          border: none; cursor: pointer; text-decoration: none;
          display: inline-flex; align-items: center; gap: 7px;
          position: relative; z-index: 1; overflow: hidden;
          transition: all 0.26s cubic-bezier(.34,1.3,.64,1);
          box-shadow: 0 6px 22px rgba(255,107,44,0.42); min-height: 48px;
          -webkit-tap-highlight-color: transparent; touch-action: manipulation;
          user-select: none; -webkit-user-select: none;
        }
        .mp-trial-btn::before {
          content: ''; position: absolute; top: 0; left: -100%; width: 55%; height: 100%;
          background: linear-gradient(105deg, transparent, rgba(255,255,255,0.30), transparent);
          animation: mpBtnSheen 2.2s ease-in-out infinite;
        }
        .mp-trial-btn:active { transform: scale(0.96); }
        @media (hover: hover) and (pointer: fine) {
          .mp-trial-btn:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 14px 36px rgba(255,107,44,0.54); }
        }

        /* ── Keyframe library ── */
        @keyframes mpPulseRing {
          0%   { opacity: 0.75; transform: scale(1); }
          70%  { opacity: 0;    transform: scale(1.04); }
          100% { opacity: 0;    transform: scale(1.04); }
        }
        @keyframes mpShimmerSweep { from { left: -100%; } to { left: 160%; } }
        @keyframes mpStripeGloss  { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }

        /* ── Fade stagger ── */
        .mp-fade { opacity: 0; transform: translateY(22px); transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1); }
        .mp-root.visible .mp-fade { opacity: 1; transform: translateY(0); }
        .mp-fade-d1 { transition-delay: 0.06s; } .mp-fade-d2 { transition-delay: 0.13s; }
        .mp-fade-d3 { transition-delay: 0.20s; } .mp-fade-d4 { transition-delay: 0.28s; }
        .mp-fade-d5 { transition-delay: 0.36s; } .mp-fade-d6 { transition-delay: 0.44s; }
        .mp-fade-d7 { transition-delay: 0.52s; }

        .mp-note { text-align: center; font-size: 11px; color: #9B7B6A; margin-top: 8px; line-height: 1.7; padding: 0 8px; }

        /* ── RESPONSIVE ── */
        @media (max-width: 374px) {
          .mp-root { padding: 36px 0 52px; } .mp-container { padding: 0 12px; }
          .mp-toggle-btn { padding: 8px 12px; font-size: 12px; min-height: 40px; }
          .mp-card-body { padding: 14px 13px 12px; } .mp-price { font-size: 28px; }
          .mp-trial-btn { width: 100%; justify-content: center; } .mp-section-label { display: none; }
        }
        @media (min-width: 375px) and (max-width: 539px) {
          .mp-root { padding: 44px 0 58px; } .mp-container { padding: 0 14px; }
          .mp-trial-btn { width: 100%; justify-content: center; }
        }
        @media (min-width: 540px) and (max-width: 767px) {
          .mp-root { padding: 52px 0 68px; } .mp-container { padding: 0 20px; }
          .mp-cards-grid { grid-template-columns: 1fr 1fr; }
          .mp-trial-btn { width: 100%; justify-content: center; }
        }
        @media (min-width: 768px) {
          .mp-root { padding: 64px 0 80px; } .mp-container { padding: 0 24px; }
          .mp-toggle-btn { padding: 10px 20px; font-size: 14px; }
          .mp-toggles-wrap { flex-direction: row; gap: 20px; }
          .mp-cards-grid { grid-template-columns: 1fr 1fr; }
          .mp-card-body { padding: 22px 20px 18px; } .mp-price { font-size: 36px; } .mp-tier-name { font-size: 19px; }
        }
        @media (min-width: 900px) {
          .mp-root { padding: 80px 0 100px; } .mp-container { padding: 0 32px; }
          .mp-cards-grid.two-col   { grid-template-columns: 1fr 1fr; max-width: 720px; margin-left: auto; margin-right: auto; }
          .mp-cards-grid.three-col { grid-template-columns: repeat(3,1fr); }
          .mp-cards-grid.three-col .mp-card.featured { transform: scale(1.04); }
          .mp-card-body { padding: 24px 24px 20px; } .mp-price { font-size: 40px; } .mp-tier-name { font-size: 20px; }
        }
        @media (min-width: 1200px) {
          .mp-container { padding: 0 48px; } .mp-price { font-size: 44px; }
          .mp-card-body { padding: 28px 28px 24px; } .mp-cards-grid.two-col { max-width: 800px; }
        }
      `}</style>

      <section id="meal-plans" ref={sectionRef} className={`mp-root${inView ? ' visible' : ''}`}>

        {/* Background layers */}
        <div className="mp-dots" />
        <ParticleCanvas />
        <div className="mp-blob" style={{ width: 400, height: 400, background: '#FFD580', top: -70, right: -90, animationDelay: '0s' }} />
        <div className="mp-blob" style={{ width: 300, height: 300, background: '#FF9F6B', bottom: 0, left: -70, animationDelay: '-4s' }} />
        <div className="mp-blob" style={{ width: 220, height: 220, background: '#FFCFB0', top: '45%', left: '55%', animationDelay: '-7s' }} />

        {/* Orbiting spice decorations */}
        <div className="mp-spice-wrap" style={{ top: '18%', left: '6%' }}>
          <div className="mp-spice mp-orbit-a">🌶️</div>
        </div>
        <div className="mp-spice-wrap" style={{ bottom: '20%', right: '6%' }}>
          <div className="mp-spice mp-orbit-b">🍲</div>
        </div>

        <div className="mp-container">

          {/* HEADER */}
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div className="mp-fade mp-fade-d1">
              <span className="mp-eyebrow"><Sparkles size={10} /> Subscription Plans</span>
            </div>
            <h2 className="mp-heading mp-fade mp-fade-d2">
              Choose Your <em>Meal Plan</em>
            </h2>
            <p className="mp-fade mp-fade-d3" style={{ fontSize: 'clamp(12px,2.5vw,14px)', color: '#9B7B6A', lineHeight: 1.7, margin: '0 auto 16px', maxWidth: 480, padding: '0 4px' }}>
              Handcrafted every morning by female home chefs — fresh North Indian flavours, delivered 6 days a week in Dubai.
            </p>

            <div className="mp-fade mp-fade-d3 mp-pills-row">
              {[
                { icon: <Clock size={11} />, text: '6 Days / Week' },
                { icon: <Truck size={11} />, text: 'Free Delivery' },
                { icon: <Star size={11} />,  text: '26 Days / Month' },
                { icon: <Flame size={11} />, text: 'Limited Slots' },
              ].map(({ icon, text }) => (
                <span key={text} className="mp-pill">{icon} {text}</span>
              ))}
            </div>

            {/* TOGGLES */}
            <div className="mp-fade mp-fade-d4">
              <div className="mp-toggles-wrap">
                <div className="mp-toggle-group">
                  <span className="mp-toggle-group-label">Food type</span>
                  <div className="mp-toggle-wrap">
                    <button className={`mp-toggle-btn${foodTab === 'veg' ? ' active' : ''}`} onClick={() => handleFoodTab('veg')}>
                      <Leaf size={13} /> Veg
                    </button>
                    <button className={`mp-toggle-btn${foodTab === 'nonveg' ? ' active' : ''}`} onClick={() => handleFoodTab('nonveg')}>
                      <Drumstick size={13} /> Non-Veg
                    </button>
                  </div>
                </div>
                <div className="mp-toggle-group">
                  <span className="mp-toggle-group-label">Duration</span>
                  <div className="mp-toggle-wrap">
                    <button className={`mp-toggle-btn${durTab === 'weekly' ? ' active' : ''}`} onClick={() => handleDurTab('weekly')}>Weekly</button>
                    <button className={`mp-toggle-btn${durTab === 'monthly' ? ' active' : ''}`} onClick={() => handleDurTab('monthly')}>Monthly</button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 1 MEAL / DAY */}
          <div className="mp-fade mp-fade-d4 mp-divider-row">
            <span className="mp-section-title">1 Meal / Day</span>
            <div className="mp-divider-line" />
            <span className="mp-section-label">{durTab === 'weekly' ? 'Weekly' : 'Monthly'} · Lunch or Dinner</span>
          </div>

          <div className={`mp-cards-grid two-col ${toggling ? 'mp-cards-toggling' : 'mp-cards-ready'}`}>
            {ONE_MEAL_PLANS.map((plan, i) => {
              const priceVal = durTab === 'weekly' ? plan.weekly[foodTab] : plan.monthly[foodTab];
              const features = plan.features[foodTab];
              const waUrl = buildWhatsAppUrl({ tier: `${plan.tier} – 1 Meal/Day`, type: foodTab === 'veg' ? 'Veg' : 'Non-Veg', price: priceVal, duration: durTab, features });
              return (
                <MealCard key={plan.tier} plan={plan} priceVal={priceVal} features={features} waUrl={waUrl} mealType={durTab === 'weekly' ? 'week' : 'month'} delay={inView ? i * 100 : 9999} />
              );
            })}
          </div>

          {/* 2 MEALS / DAY */}
          <div className="mp-fade mp-fade-d5 mp-divider-row" style={{ marginTop: 8 }}>
            <span className="mp-section-title">2 Meals / Day</span>
            <div className="mp-divider-line" />
            <span className="mp-section-label">Monthly · Lunch &amp; Dinner</span>
          </div>

          {durTab === 'weekly' && (
            <p className="mp-monthly-notice">2-meal plans are monthly only — showing monthly prices below.</p>
          )}

          <div className={`mp-cards-grid three-col ${toggling ? 'mp-cards-toggling' : 'mp-cards-ready'}`}>
            {TWO_MEAL_PLANS.map((plan, i) => {
              const priceVal = plan.monthly[foodTab];
              const features = plan.features[foodTab];
              const waUrl = buildWhatsAppUrl({ tier: `${plan.tier} – 2 Meals/Day`, type: foodTab === 'veg' ? 'Veg' : 'Non-Veg', price: priceVal, duration: 'monthly', features });
              const planWithLabel = { ...plan, tier: `${plan.tier} Plan` };
              return (
                <MealCard key={plan.tier} plan={planWithLabel} priceVal={priceVal} features={features} waUrl={waUrl} mealType="month" delay={inView ? i * 110 : 9999} />
              );
            })}
          </div>

          <p className="mp-fade mp-fade-d6 mp-note">
            ✨ Fresh, less oil &amp; ghar jaisa taste · Customization available · Limited subscription slots each week
          </p>

          {/* TRIAL BANNER */}
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
                target="_blank" rel="noreferrer"
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












