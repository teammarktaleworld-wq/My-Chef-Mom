






// 'use client';

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { Leaf, Drumstick, Sparkles, Clock, Truck, Star, ChevronRight, Gift, Flame } from 'lucide-react';

// const WHATSAPP_NUMBER = '+971557998925';

// /* ─────────────────────────────────────────────
//    WHATSAPP MESSAGE BUILDER
// ───────────────────────────────────────────── */
// function buildWhatsAppUrl(plan: {
//   tier: string; type: 'Veg' | 'Non-Veg'; price: number;
//   duration: 'weekly' | 'monthly'; features: string[]; isTrial?: boolean;
// }) {
//   const { tier, type, price, duration, features, isTrial } = plan;
//   if (isTrial) {
//     const msg = [`👋 Hello The Chef Mom!`, ``, `I'd like to book a *2-Day Trial Meal* before subscribing.`, ``, `Please share the trial details and delivery schedule.`, ``, `Thank you! 🙏`].join('\n');
//     return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
//   }
//   const msg = [
//     `👋 Hello The Chef Mom!`, ``,
//     `I'm interested in subscribing to the following meal plan:`, ``,
//     `📦 *Plan:* ${tier} (${type})`,
//     `💰 *Price:* AED ${price}/${duration === 'weekly' ? 'week' : 'month'}`,
//     `🍽️ *Includes:*`,
//     ...features.map(f => `   • ${f}`), ``,
//     `Please share payment details and delivery schedule.`, ``,
//     `Thank you! 🙏`,
//   ].join('\n');
//   return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
// }

// /* ─────────────────────────────────────────────
//    PLAN DATA
// ───────────────────────────────────────────── */
// const ONE_MEAL_PLANS = [
//   {
//     tier: 'Half Meal', badge: null as string | null,
//     weekly: { veg: 125, nonveg: 165 }, monthly: { veg: 469, nonveg: 629 },
//     color: '#B85C1A', accentLight: 'rgba(184,92,26,0.07)', accentGlow: 'rgba(184,92,26,0.22)',
//     features: {
//       veg:    ['Roti (3 pcs) or Rice', 'Dal of the Day + Veg', 'Fresh Salad', 'Pickle', 'Mon – Sat delivery'],
//       nonveg: ['Roti (3 pcs) or Rice', 'Dal of the Day + Non-Veg', 'Fresh Salad', 'Pickle', 'Mon – Sat delivery'],
//     },
//     featured: false,
//   },
//   {
//     tier: 'Full Meal', badge: '⭐ Best Value' as string | null,
//     weekly: { veg: 145, nonveg: 185 }, monthly: { veg: 569, nonveg: 699 },
//     color: '#C84B0A', accentLight: 'rgba(200,75,10,0.07)', accentGlow: 'rgba(200,75,10,0.32)',
//     features: {
//       veg:    ['Roti (3 pcs) + Rice', 'Dal of the Day + Veg', 'Sweet or Raita', 'Fresh Salad', 'Pickle or Papad', 'Mon – Sat delivery'],
//       nonveg: ['Roti (3 pcs) + Rice', 'Dal of the Day + Non-Veg', 'Sweet or Raita', 'Fresh Salad', 'Pickle or Papad', 'Mon – Sat delivery'],
//     },
//     featured: true,
//   },
// ];

// const TWO_MEAL_PLANS = [
//   {
//     tier: 'Basic', badge: null as string | null,
//     monthly: { veg: 699, nonveg: 899 },
//     color: '#B85C1A', accentLight: 'rgba(184,92,26,0.07)', accentGlow: 'rgba(184,92,26,0.22)',
//     features: {
//       veg:    ['Roti (3 pcs) or Rice', 'Dal of the Day + Veg', 'Fresh Salad', 'Pickle', 'Mon – Sat delivery'],
//       nonveg: ['Roti (3 pcs) or Rice', 'Dal of the Day + Non-Veg', 'Fresh Salad', 'Pickle', 'Mon – Sat delivery'],
//     },
//     featured: false,
//   },
//   {
//     tier: 'Standard', badge: '⭐ Most Preferred' as string | null,
//     monthly: { veg: 749, nonveg: 949 },
//     color: '#C84B0A', accentLight: 'rgba(200,75,10,0.07)', accentGlow: 'rgba(200,75,10,0.32)',
//     features: {
//       veg:    ['Roti (3 pcs) + Rice', 'Dal of the Day + Veg', 'Sweet or Raita', 'Fresh Salad', 'Pickle', 'Mon – Sat delivery'],
//       nonveg: ['Roti (3 pcs) + Rice', 'Dal of the Day + Non-Veg', 'Sweet or Raita', 'Fresh Salad', 'Pickle', 'Mon – Sat delivery'],
//     },
//     featured: true,
//   },
//   {
//     tier: 'Premium', badge: null as string | null,
//     monthly: { veg: 849, nonveg: 1049 },
//     color: '#A03508', accentLight: 'rgba(160,53,8,0.07)', accentGlow: 'rgba(160,53,8,0.28)',
//     features: {
//       veg:    ['Roti (3 pcs) + Rice', 'Dal of the Day + 3 Variety Sabzi', 'Daily Sweets Included', 'Richer Meal Combinations', 'Special Dish of the Day', 'Dessert or Curd', 'Fresh Salad', 'Pickle or Papad', 'Mon – Sat delivery'],
//       nonveg: ['Roti (3 pcs) + Rice', 'Dal of the Day + Special Non-Veg Dish', 'Daily Sweets Included', 'Richer Meal Combinations', 'More Variety Every Day', 'Dessert or Curd', 'Fresh Salad', 'Pickle or Papad', 'Mon – Sat delivery'],
//     },
//     featured: false,
//   },
// ];

// /* ─────────────────────────────────────────────
//    HOOKS
// ───────────────────────────────────────────── */
// function useInView(threshold = 0.05) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return { ref, inView };
// }

// /* ─────────────────────────────────────────────
//    FLOATING PARTICLES CANVAS
// ───────────────────────────────────────────── */
// function ParticleCanvas() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;
//     let raf: number;
//     const resize = () => {
//       canvas.width  = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };
//     resize();
//     window.addEventListener('resize', resize);
//     type Particle = { x: number; y: number; r: number; vx: number; vy: number; alpha: number; color: string };
//     const particles: Particle[] = Array.from({ length: 40 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       r: Math.random() * 3.2 + 0.8,
//       vx: (Math.random() - 0.5) * 0.32,
//       vy: -(Math.random() * 0.48 + 0.12),
//       alpha: Math.random() * 0.45 + 0.10,
//       color: Math.random() > 0.5 ? '#FF6B2C' : '#F5A623',
//     }));
//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach(p => {
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = p.color;
//         ctx.globalAlpha = p.alpha;
//         ctx.fill();
//         p.x += p.vx; p.y += p.vy;
//         if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
//         if (p.x < -10) p.x = canvas.width + 10;
//         if (p.x > canvas.width + 10) p.x = -10;
//       });
//       ctx.globalAlpha = 1;
//       raf = requestAnimationFrame(draw);
//     };
//     draw();
//     return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
//   }, []);
//   return (
//     <canvas
//       ref={canvasRef}
//       style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}
//     />
//   );
// }

// /* ─────────────────────────────────────────────
//    ANIMATED PRICE — 3D flip on tab change
// ───────────────────────────────────────────── */
// function AnimatedPrice({ value, color }: { value: number; color: string }) {
//   const [display, setDisplay] = useState(value);
//   const [phase, setPhase]     = useState<'idle' | 'out' | 'in'>('idle');

//   useEffect(() => {
//     setPhase('out');
//     const t1 = setTimeout(() => { setDisplay(value); setPhase('in'); }, 190);
//     const t2 = setTimeout(() => setPhase('idle'), 380);
//     return () => { clearTimeout(t1); clearTimeout(t2); };
//   }, [value]);

//   const styles: React.CSSProperties = {
//     color,
//     display: 'block',
//     transition: 'transform 0.19s cubic-bezier(.4,0,.2,1), opacity 0.19s ease',
//     transformStyle: 'preserve-3d' as const,
//     ...(phase === 'out' ? { transform: 'rotateX(90deg) scale(0.8)', opacity: 0 } :
//         phase === 'in'  ? { transform: 'rotateX(-30deg) scale(0.9)', opacity: 0.6 } :
//                           { transform: 'rotateX(0deg) scale(1)', opacity: 1 }),
//   };

//   return (
//     <div className="mp-price" style={{ perspective: '500px' }}>
//       <span style={styles}>AED {display}</span>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    WHATSAPP ICON
// ───────────────────────────────────────────── */
// function WaIcon({ color = 'white', size = 15 }: { color?: string; size?: number }) {
//   return (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill={color} style={{ flexShrink: 0 }}>
//       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//     </svg>
//   );
// }

// /* ─────────────────────────────────────────────
//    MEAL CARD — shimmer, glow, stagger reveal
// ───────────────────────────────────────────── */
// type PlanShape = {
//   tier: string; badge: string | null; color: string;
//   accentLight: string; accentGlow: string; featured: boolean;
// };

// function MealCard({
//   plan, priceVal, features, waUrl, mealType, delay,
// }: {
//   plan: PlanShape; priceVal: number; features: string[];
//   waUrl: string; mealType: string; delay: number;
// }) {
//   const [hovered, setHovered]   = useState(false);
//   const [shimmer, setShimmer]   = useState(false);
//   const [revealed, setRevealed] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setRevealed(true), delay);
//     return () => clearTimeout(t);
//   }, [delay]);

//   const handleEnter = useCallback(() => {
//     setHovered(true);
//     setShimmer(true);
//     setTimeout(() => setShimmer(false), 650);
//   }, []);

//   return (
//     <div
//       className={`mp-card${plan.featured ? ' featured' : ''}`}
//       onMouseEnter={handleEnter}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         opacity: revealed ? 1 : 0,
//         transform: revealed ? 'translateY(0) scale(1)' : 'translateY(36px) scale(0.95)',
//         transition: `opacity 0.65s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.65s cubic-bezier(.16,1,.3,1) ${delay}ms, box-shadow 0.35s ease`,
//         position: 'relative', overflow: 'hidden',
//         boxShadow: hovered
//           ? `0 28px 60px ${plan.accentGlow}, 0 4px 16px rgba(26,10,0,0.07)`
//           : plan.featured
//           ? `0 8px 36px ${plan.accentGlow}`
//           : '0 2px 16px rgba(26,10,0,0.06)',
//       }}
//     >
//       {/* Shimmer sweep */}
//       {shimmer && (
//         <div style={{
//           position: 'absolute', top: 0, left: '-100%', width: '55%', height: '100%',
//           background: 'linear-gradient(105deg, transparent 20%, rgba(255,255,255,0.52) 50%, transparent 80%)',
//           animation: 'mpShimmerSweep 0.60s ease forwards',
//           zIndex: 30, pointerEvents: 'none',
//         }} />
//       )}

//       {/* Pulse ring on featured */}
//       {plan.featured && (
//         <div style={{
//           position: 'absolute', inset: -3, borderRadius: 23,
//           border: `2px solid ${plan.color}`,
//           animation: 'mpPulseRing 2.6s ease-in-out infinite',
//           pointerEvents: 'none', zIndex: 0,
//         }} />
//       )}

//       {/* Stripe with animated gloss */}
//       <div className="mp-card-stripe" style={{ background: `linear-gradient(90deg, ${plan.color}, #F5A623)`, position: 'relative', zIndex: 2, overflow: 'hidden' }}>
//         <div style={{
//           position: 'absolute', inset: 0,
//           background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.42) 50%, transparent 100%)',
//           backgroundSize: '200% 100%',
//           animation: 'mpStripeGloss 2.8s linear infinite',
//         }} />
//       </div>

//       <div className="mp-card-body" style={{ position: 'relative', zIndex: 2 }}>
//         {plan.badge && (
//           <div className="mp-card-badge" style={{ animation: 'mpBadgeBounce 2.2s ease-in-out infinite' }}>
//             {plan.badge}
//           </div>
//         )}
//         <div className="mp-tier-name">{plan.tier}</div>
//         <AnimatedPrice value={priceVal} color={plan.featured ? plan.color : '#1A0A00'} />
//         <div className="mp-price-sub">per {mealType} · starting AED {priceVal}</div>

//         <ul className="mp-features">
//           {features.map((f, i) => (
//             <li
//               key={f}
//               className="mp-feature-item"
//               style={{
//                 opacity: revealed ? 1 : 0,
//                 transform: revealed ? 'translateX(0)' : 'translateX(-14px)',
//                 transition: `opacity 0.42s ease ${delay + 220 + i * 55}ms, transform 0.42s ease ${delay + 220 + i * 55}ms`,
//               }}
//             >
//               <span
//                 className="mp-check-icon"
//                 style={{ background: plan.featured ? 'rgba(200,75,10,0.10)' : 'rgba(26,10,0,0.05)' }}
//               >
//                 <svg width="9" height="9" viewBox="0 0 24 24" fill="none"
//                   stroke={plan.featured ? plan.color : '#9B7B6A'}
//                   strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
//                   <polyline points="20 6 9 17 4 12" />
//                 </svg>
//               </span>
//               {f}
//             </li>
//           ))}
//         </ul>

//         {/* Hover tint layer */}
//         <div style={{
//           position: 'absolute', inset: 0, borderRadius: 20,
//           background: plan.accentLight,
//           opacity: hovered ? 1 : 0,
//           transition: 'opacity 0.28s ease',
//           pointerEvents: 'none', zIndex: -1,
//         }} />

//         {plan.featured ? (
//           <a href={waUrl} target="_blank" rel="noreferrer" className="mp-btn-primary">
//             <WaIcon color="white" size={15} /> Subscribe Now
//           </a>
//         ) : (
//           <a href={waUrl} target="_blank" rel="noreferrer" className="mp-btn-outline">
//             <WaIcon color="#25D366" size={15} /> Select Plan
//           </a>
//         )}
//       </div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    MAIN COMPONENT
// ───────────────────────────────────────────── */
// export default function MealPlans() {
//   const [foodTab, setFoodTab]   = useState<'veg' | 'nonveg'>('veg');
//   const [durTab,  setDurTab]    = useState<'weekly' | 'monthly'>('weekly');
//   const [toggling, setToggling] = useState(false);
//   const { ref: sectionRef, inView } = useInView(0.05);

//   const handleFoodTab = (val: 'veg' | 'nonveg') => {
//     if (val === foodTab) return;
//     setToggling(true); setTimeout(() => { setFoodTab(val); setToggling(false); }, 220);
//   };
//   const handleDurTab = (val: 'weekly' | 'monthly') => {
//     if (val === durTab) return;
//     setToggling(true); setTimeout(() => { setDurTab(val); setToggling(false); }, 220);
//   };

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;0,800;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

//         .mp-root *, .mp-root *::before, .mp-root *::after { box-sizing: border-box; }

//         .mp-root {
//           font-family: 'DM Sans', sans-serif;
//           background: linear-gradient(170deg, #FFF8F0 0%, #FFF0E0 40%, #FFF5EB 100%);
//           position: relative; overflow: hidden; padding: 48px 0 60px;
//           -webkit-tap-highlight-color: transparent;
//         }

//         /* ── Animated dot grid ── */
//         .mp-dots {
//           position: absolute; inset: 0;
//           background-image: radial-gradient(circle, rgba(255,107,44,0.13) 1.5px, transparent 1.5px);
//           background-size: 28px 28px; pointer-events: none; z-index: 0;
//           animation: mpDotsPulse 6s ease-in-out infinite;
//         }
//         @keyframes mpDotsPulse { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }

//         /* ── Blobs ── */
//         .mp-blob {
//           position: absolute; border-radius: 50%;
//           filter: blur(72px); opacity: 0.22; pointer-events: none;
//           animation: mpBlobDrift 12s ease-in-out infinite;
//         }
//         @keyframes mpBlobDrift {
//           0%,100% { transform: translate(0,0) scale(1); }
//           33%      { transform: translate(28px,-22px) scale(1.07); }
//           66%      { transform: translate(-18px,16px) scale(0.93); }
//         }

//         /* ── Orbiting spice icons ── */
//         .mp-spice-wrap { position: absolute; pointer-events: none; z-index: 2; }
//         .mp-spice { font-size: 36px; opacity: 0.08; display: inline-block; }
//         .mp-orbit-a { animation: mpOrbitA 20s linear infinite; }
//         .mp-orbit-b { animation: mpOrbitB 26s linear infinite; }
//         @keyframes mpOrbitA {
//           from { transform: rotate(0deg) translateX(55px) rotate(0deg); }
//           to   { transform: rotate(360deg) translateX(55px) rotate(-360deg); }
//         }
//         @keyframes mpOrbitB {
//           from { transform: rotate(180deg) translateX(70px) rotate(-180deg); }
//           to   { transform: rotate(540deg) translateX(70px) rotate(-540deg); }
//         }

//         /* ── Container ── */
//         .mp-container { max-width: 1200px; margin: 0 auto; padding: 0 16px; position: relative; z-index: 5; width: 100%; }

//         /* ── Eyebrow ── */
//         .mp-eyebrow {
//           display: inline-flex; align-items: center; gap: 6px;
//           background: rgba(255,107,44,0.10); border: 1px solid rgba(255,107,44,0.28);
//           border-radius: 50px; padding: 5px 14px;
//           font-size: 10px; font-weight: 600; color: #FF6B2C;
//           letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 12px;
//           animation: mpFloat 3.2s ease-in-out infinite;
//         }
//         @keyframes mpFloat { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-4px); } }

//         /* ── Heading ── */
//         .mp-heading {
//           font-family: 'Fraunces', serif; font-size: clamp(24px,6vw,52px);
//           font-weight: 800; color: #1A0A00; line-height: 1.1;
//           letter-spacing: -0.5px; margin: 0 0 12px;
//         }
//         .mp-heading em { font-style: italic; color: #C84B0A; position: relative; }
//         .mp-heading em::after {
//           content: ''; position: absolute; bottom: 1px; left: 0; right: 0;
//           height: 3px; background: linear-gradient(90deg,#FF6B2C,#F5A623);
//           border-radius: 2px; transform: scaleX(0); transform-origin: left;
//           transition: transform 1.1s cubic-bezier(.16,1,.3,1) 0.5s;
//         }
//         .mp-root.visible .mp-heading em::after { transform: scaleX(1); }

//         /* ── Pills ── */
//         .mp-pills-row { display: flex; justify-content: center; gap: 6px; flex-wrap: wrap; margin-bottom: 22px; }
//         .mp-pill {
//           display: inline-flex; align-items: center; gap: 5px;
//           background: rgba(255,255,255,0.88); border: 1px solid rgba(255,107,44,0.20);
//           border-radius: 50px; padding: 5px 11px;
//           font-size: 11px; font-weight: 500; color: #6B5344; white-space: nowrap;
//           transition: transform 0.22s ease, box-shadow 0.22s ease;
//         }
//         .mp-pill:hover { transform: translateY(-2px); box-shadow: 0 4px 14px rgba(255,107,44,0.18); }

//         /* ── Toggles ── */
//         .mp-toggles-wrap { display: flex; flex-direction: column; align-items: center; gap: 10px; }
//         .mp-toggle-group { display: flex; flex-direction: column; align-items: center; gap: 5px; }
//         .mp-toggle-group-label { font-size: 10px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #9B7B6A; }
//         .mp-toggle-wrap {
//           background: rgba(255,255,255,0.82); border: 1px solid rgba(255,107,44,0.22);
//           border-radius: 60px; padding: 4px; display: inline-flex;
//           box-shadow: 0 4px 20px rgba(255,107,44,0.10);
//         }
//         .mp-toggle-btn {
//           display: flex; align-items: center; gap: 6px; padding: 9px 16px; border-radius: 50px;
//           font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600;
//           cursor: pointer; border: none; background: transparent; color: #9B7B6A;
//           transition: all 0.32s cubic-bezier(.34,1.56,.64,1);
//           white-space: nowrap; min-height: 44px;
//           -webkit-tap-highlight-color: transparent; touch-action: manipulation;
//           user-select: none; -webkit-user-select: none;
//         }
//         .mp-toggle-btn.active {
//           background: linear-gradient(135deg,#FF6B2C,#C84B0A); color: #fff;
//           box-shadow: 0 4px 18px rgba(255,107,44,0.42); transform: scale(1.04);
//         }
//         .mp-toggle-btn:not(.active):hover { background: rgba(255,107,44,0.08); transform: scale(1.02); }
//         .mp-toggle-btn:active { transform: scale(0.96) !important; }

//         /* ── Section divider ── */
//         .mp-divider-row { display: flex; align-items: center; gap: 10px; margin-bottom: 16px; }
//         .mp-section-title { font-family: 'Fraunces', serif; font-size: clamp(14px,2.5vw,19px); font-weight: 700; color: #1A0A00; white-space: nowrap; }
//         .mp-section-label { font-size: 9px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; color: #9B7B6A; white-space: nowrap; }
//         .mp-divider-line { flex: 1; height: 1px; background: rgba(26,10,0,0.08); min-width: 8px; }

//         /* ── Cards grid ── */
//         .mp-cards-grid { display: grid; grid-template-columns: 1fr; gap: 14px; margin-bottom: 28px; }
//         .mp-cards-toggling { opacity: 0.38; transform: scale(0.985); transition: opacity 0.22s ease, transform 0.22s ease; pointer-events: none; }
//         .mp-cards-ready    { opacity: 1;    transform: scale(1);     transition: opacity 0.22s ease, transform 0.22s ease; }

//         /* ── Card ── */
//         .mp-card {
//           background: #fff; border-radius: 20px; border: 1.5px solid rgba(26,10,0,0.07);
//           overflow: hidden; display: flex; flex-direction: column;
//           -webkit-tap-highlight-color: transparent; cursor: default;
//         }
//         .mp-card.featured { border-color: #C84B0A; border-width: 2px; }
//         @media (hover: hover) and (pointer: fine) {
//           .mp-card:hover { transform: translateY(-8px) scale(1.015) rotate(-0.25deg) !important; }
//           .mp-card.featured:hover { transform: translateY(-10px) scale(1.02) rotate(0.25deg) !important; }
//         }
//         .mp-card-stripe { height: 4px; width: 100%; flex-shrink: 0; position: relative; overflow: hidden; }
//         .mp-card.featured .mp-card-stripe { height: 5px; }
//         .mp-card-badge {
//           display: inline-block; background: linear-gradient(135deg,#FF6B2C,#C84B0A);
//           color: #fff; font-size: 9px; font-weight: 700; letter-spacing: 1.5px;
//           text-transform: uppercase; padding: 4px 10px; border-radius: 50px;
//           margin-bottom: 7px; align-self: flex-start;
//         }
//         @keyframes mpBadgeBounce { 0%,100% { transform: translateY(0); } 42% { transform: translateY(-4px); } 70% { transform: translateY(-2px); } }
//         .mp-card-body { padding: 16px 16px 14px; display: flex; flex-direction: column; flex: 1; position: relative; }
//         .mp-tier-name { font-family: 'Fraunces', serif; font-size: 18px; font-weight: 700; color: #1A0A00; margin-bottom: 4px; }
//         .mp-price { font-family: 'Fraunces', serif; font-size: clamp(30px,6vw,40px); font-weight: 800; line-height: 1; margin-bottom: 2px; }
//         .mp-price-sub { font-size: 11px; color: #9B7B6A; margin-bottom: 14px; }
//         .mp-features { list-style: none; margin: 0 0 16px; padding: 0; flex: 1; }
//         .mp-feature-item { display: flex; align-items: flex-start; gap: 8px; font-size: 12px; color: #6B5344; font-weight: 500; line-height: 1.5; padding: 4px 0; }
//         .mp-check-icon { flex-shrink: 0; margin-top: 2px; width: 15px; height: 15px; border-radius: 50%; display: flex; align-items: center; justify-content: center; }

//         /* ── Buttons ── */
//         .mp-btn-primary, .mp-btn-outline {
//           display: flex; align-items: center; justify-content: center; gap: 7px;
//           width: 100%; padding: 13px 12px; border-radius: 50px;
//           font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 700;
//           cursor: pointer; text-align: center; text-decoration: none;
//           transition: all 0.26s cubic-bezier(.34,1.3,.64,1);
//           min-height: 48px; position: relative; overflow: hidden;
//           -webkit-tap-highlight-color: transparent; touch-action: manipulation;
//           user-select: none; -webkit-user-select: none;
//         }
//         .mp-btn-primary { border: none; color: #fff; background: linear-gradient(135deg,#FF6B2C,#C84B0A); box-shadow: 0 6px 20px rgba(255,107,44,0.30); }
//         .mp-btn-outline { border: 1.5px solid rgba(26,10,0,0.14); background: transparent; color: #1A0A00; }
//         .mp-btn-primary::before {
//           content: ''; position: absolute; top: 0; left: -100%; width: 50%; height: 100%;
//           background: linear-gradient(105deg, transparent, rgba(255,255,255,0.28), transparent);
//           animation: mpBtnSheen 2.5s ease-in-out infinite;
//         }
//         @keyframes mpBtnSheen { 0%,100% { left: -100%; } 50% { left: 160%; } }
//         .mp-btn-primary:active, .mp-btn-outline:active { transform: scale(0.96); }
//         @media (hover: hover) and (pointer: fine) {
//           .mp-btn-primary:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 14px 32px rgba(255,107,44,0.46); }
//           .mp-btn-outline:hover { border-color: #FF6B2C; color: #FF6B2C; background: rgba(255,107,44,0.05); transform: translateY(-2px); }
//         }

//         /* ── Monthly notice ── */
//         .mp-monthly-notice { font-size: 11px; color: #9B7B6A; text-align: center; margin-bottom: 12px; font-style: italic; }

//         /* ── Trial banner ── */
//         .mp-trial {
//           background: #fff; border: 1px solid rgba(255,107,44,0.22); border-radius: 20px;
//           padding: 18px 16px; margin-top: 4px;
//           display: flex; align-items: center; justify-content: space-between; gap: 14px;
//           position: relative; overflow: hidden; flex-wrap: wrap;
//           animation: mpTrialGlow 3.8s ease-in-out infinite;
//         }
//         @keyframes mpTrialGlow {
//           0%,100% { box-shadow: 0 6px 28px rgba(255,107,44,0.08); }
//           50%      { box-shadow: 0 10px 44px rgba(255,107,44,0.22); }
//         }
//         .mp-trial::before {
//           content: ''; position: absolute; top: -40px; right: -40px;
//           width: 130px; height: 130px;
//           background: radial-gradient(circle,#FFD580,transparent 70%);
//           opacity: 0.42; pointer-events: none;
//           animation: mpOrbFloat 4.2s ease-in-out infinite;
//         }
//         @keyframes mpOrbFloat { 0%,100% { transform: translate(0,0) scale(1); } 50% { transform: translate(-12px,10px) scale(1.18); } }
//         .mp-trial-content { display: flex; align-items: center; gap: 12px; position: relative; z-index: 1; flex: 1; min-width: 0; }
//         .mp-trial-icon {
//           width: 46px; height: 46px; flex-shrink: 0;
//           background: linear-gradient(135deg,#FFF0E0,#FFE4CC);
//           border: 1px solid rgba(255,107,44,0.2); border-radius: 13px;
//           display: flex; align-items: center; justify-content: center;
//           animation: mpGiftWiggle 2.5s ease-in-out infinite;
//         }
//         @keyframes mpGiftWiggle { 0%,100% { transform: scale(1) rotate(0deg); } 25% { transform: scale(1.06) rotate(-6deg); } 75% { transform: scale(1.06) rotate(6deg); } }
//         .mp-trial-title { font-family: 'Fraunces', serif; font-size: clamp(13px,2.5vw,17px); font-weight: 700; color: #1A0A00; margin-bottom: 3px; line-height: 1.3; }
//         .mp-trial-sub { font-size: 11px; color: #9B7B6A; line-height: 1.6; }
//         .mp-trial-btn {
//           flex-shrink: 0; padding: 13px 18px; border-radius: 50px;
//           background: linear-gradient(135deg,#FF6B2C,#C84B0A); color: #fff;
//           font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 700;
//           border: none; cursor: pointer; text-decoration: none;
//           display: inline-flex; align-items: center; gap: 7px;
//           position: relative; z-index: 1; overflow: hidden;
//           transition: all 0.26s cubic-bezier(.34,1.3,.64,1);
//           box-shadow: 0 6px 22px rgba(255,107,44,0.42); min-height: 48px;
//           -webkit-tap-highlight-color: transparent; touch-action: manipulation;
//           user-select: none; -webkit-user-select: none;
//         }
//         .mp-trial-btn::before {
//           content: ''; position: absolute; top: 0; left: -100%; width: 55%; height: 100%;
//           background: linear-gradient(105deg, transparent, rgba(255,255,255,0.30), transparent);
//           animation: mpBtnSheen 2.2s ease-in-out infinite;
//         }
//         .mp-trial-btn:active { transform: scale(0.96); }
//         @media (hover: hover) and (pointer: fine) {
//           .mp-trial-btn:hover { transform: translateY(-3px) scale(1.03); box-shadow: 0 14px 36px rgba(255,107,44,0.54); }
//         }

//         /* ── Keyframe library ── */
//         @keyframes mpPulseRing {
//           0%   { opacity: 0.75; transform: scale(1); }
//           70%  { opacity: 0;    transform: scale(1.04); }
//           100% { opacity: 0;    transform: scale(1.04); }
//         }
//         @keyframes mpShimmerSweep { from { left: -100%; } to { left: 160%; } }
//         @keyframes mpStripeGloss  { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }

//         /* ── Fade stagger ── */
//         .mp-fade { opacity: 0; transform: translateY(22px); transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1); }
//         .mp-root.visible .mp-fade { opacity: 1; transform: translateY(0); }
//         .mp-fade-d1 { transition-delay: 0.06s; } .mp-fade-d2 { transition-delay: 0.13s; }
//         .mp-fade-d3 { transition-delay: 0.20s; } .mp-fade-d4 { transition-delay: 0.28s; }
//         .mp-fade-d5 { transition-delay: 0.36s; } .mp-fade-d6 { transition-delay: 0.44s; }
//         .mp-fade-d7 { transition-delay: 0.52s; }

//         .mp-note { text-align: center; font-size: 11px; color: #9B7B6A; margin-top: 8px; line-height: 1.7; padding: 0 8px; }

//         /* ── RESPONSIVE ── */
//         @media (max-width: 374px) {
//           .mp-root { padding: 36px 0 52px; } .mp-container { padding: 0 12px; }
//           .mp-toggle-btn { padding: 8px 12px; font-size: 12px; min-height: 40px; }
//           .mp-card-body { padding: 14px 13px 12px; } .mp-price { font-size: 28px; }
//           .mp-trial-btn { width: 100%; justify-content: center; } .mp-section-label { display: none; }
//         }
//         @media (min-width: 375px) and (max-width: 539px) {
//           .mp-root { padding: 44px 0 58px; } .mp-container { padding: 0 14px; }
//           .mp-trial-btn { width: 100%; justify-content: center; }
//         }
//         @media (min-width: 540px) and (max-width: 767px) {
//           .mp-root { padding: 52px 0 68px; } .mp-container { padding: 0 20px; }
//           .mp-cards-grid { grid-template-columns: 1fr 1fr; }
//           .mp-trial-btn { width: 100%; justify-content: center; }
//         }
//         @media (min-width: 768px) {
//           .mp-root { padding: 64px 0 80px; } .mp-container { padding: 0 24px; }
//           .mp-toggle-btn { padding: 10px 20px; font-size: 14px; }
//           .mp-toggles-wrap { flex-direction: row; gap: 20px; }
//           .mp-cards-grid { grid-template-columns: 1fr 1fr; }
//           .mp-card-body { padding: 22px 20px 18px; } .mp-price { font-size: 36px; } .mp-tier-name { font-size: 19px; }
//         }
//         @media (min-width: 900px) {
//           .mp-root { padding: 80px 0 100px; } .mp-container { padding: 0 32px; }
//           .mp-cards-grid.two-col   { grid-template-columns: 1fr 1fr; max-width: 720px; margin-left: auto; margin-right: auto; }
//           .mp-cards-grid.three-col { grid-template-columns: repeat(3,1fr); }
//           .mp-cards-grid.three-col .mp-card.featured { transform: scale(1.04); }
//           .mp-card-body { padding: 24px 24px 20px; } .mp-price { font-size: 40px; } .mp-tier-name { font-size: 20px; }
//         }
//         @media (min-width: 1200px) {
//           .mp-container { padding: 0 48px; } .mp-price { font-size: 44px; }
//           .mp-card-body { padding: 28px 28px 24px; } .mp-cards-grid.two-col { max-width: 800px; }
//         }
//       `}</style>

//       <section id="meal-plans" ref={sectionRef} className={`mp-root${inView ? ' visible' : ''}`}>

//         {/* Background layers */}
//         <div className="mp-dots" />
//         <ParticleCanvas />
//         <div className="mp-blob" style={{ width: 400, height: 400, background: '#FFD580', top: -70, right: -90, animationDelay: '0s' }} />
//         <div className="mp-blob" style={{ width: 300, height: 300, background: '#FF9F6B', bottom: 0, left: -70, animationDelay: '-4s' }} />
//         <div className="mp-blob" style={{ width: 220, height: 220, background: '#FFCFB0', top: '45%', left: '55%', animationDelay: '-7s' }} />

//         {/* Orbiting spice decorations */}
//         <div className="mp-spice-wrap" style={{ top: '18%', left: '6%' }}>
//           <div className="mp-spice mp-orbit-a">🌶️</div>
//         </div>
//         <div className="mp-spice-wrap" style={{ bottom: '20%', right: '6%' }}>
//           <div className="mp-spice mp-orbit-b">🍲</div>
//         </div>

//         <div className="mp-container">

//           {/* HEADER */}
//           <div style={{ textAlign: 'center', marginBottom: 28 }}>
//             <div className="mp-fade mp-fade-d1">
//               <span className="mp-eyebrow"><Sparkles size={10} /> Subscription Plans</span>
//             </div>
//             <h2 className="mp-heading mp-fade mp-fade-d2">
//               Choose Your <em>Meal Plan</em>
//             </h2>
//             <p className="mp-fade mp-fade-d3" style={{ fontSize: 'clamp(12px,2.5vw,14px)', color: '#9B7B6A', lineHeight: 1.7, margin: '0 auto 16px', maxWidth: 480, padding: '0 4px' }}>
//               Handcrafted every morning by female home chefs — fresh North Indian flavours, delivered 6 days a week in Dubai.
//             </p>

//             <div className="mp-fade mp-fade-d3 mp-pills-row">
//               {[
//                 { icon: <Clock size={11} />, text: '6 Days / Week' },
//                 { icon: <Truck size={11} />, text: 'Free Delivery' },
//                 { icon: <Star size={11} />,  text: '26 Days / Month' },
//                 { icon: <Flame size={11} />, text: 'Limited Slots' },
//               ].map(({ icon, text }) => (
//                 <span key={text} className="mp-pill">{icon} {text}</span>
//               ))}
//             </div>

//             {/* TOGGLES */}
//             <div className="mp-fade mp-fade-d4">
//               <div className="mp-toggles-wrap">
//                 <div className="mp-toggle-group">
//                   <span className="mp-toggle-group-label">Food type</span>
//                   <div className="mp-toggle-wrap">
//                     <button className={`mp-toggle-btn${foodTab === 'veg' ? ' active' : ''}`} onClick={() => handleFoodTab('veg')}>
//                       <Leaf size={13} /> Veg
//                     </button>
//                     <button className={`mp-toggle-btn${foodTab === 'nonveg' ? ' active' : ''}`} onClick={() => handleFoodTab('nonveg')}>
//                       <Drumstick size={13} /> Non-Veg
//                     </button>
//                   </div>
//                 </div>
//                 <div className="mp-toggle-group">
//                   <span className="mp-toggle-group-label">Duration</span>
//                   <div className="mp-toggle-wrap">
//                     <button className={`mp-toggle-btn${durTab === 'weekly' ? ' active' : ''}`} onClick={() => handleDurTab('weekly')}>Weekly</button>
//                     <button className={`mp-toggle-btn${durTab === 'monthly' ? ' active' : ''}`} onClick={() => handleDurTab('monthly')}>Monthly</button>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* 1 MEAL / DAY */}
//           <div className="mp-fade mp-fade-d4 mp-divider-row">
//             <span className="mp-section-title">1 Meal / Day</span>
//             <div className="mp-divider-line" />
//             <span className="mp-section-label">{durTab === 'weekly' ? 'Weekly' : 'Monthly'} · Lunch or Dinner</span>
//           </div>

//           <div className={`mp-cards-grid two-col ${toggling ? 'mp-cards-toggling' : 'mp-cards-ready'}`}>
//             {ONE_MEAL_PLANS.map((plan, i) => {
//               const priceVal = durTab === 'weekly' ? plan.weekly[foodTab] : plan.monthly[foodTab];
//               const features = plan.features[foodTab];
//               const waUrl = buildWhatsAppUrl({ tier: `${plan.tier} – 1 Meal/Day`, type: foodTab === 'veg' ? 'Veg' : 'Non-Veg', price: priceVal, duration: durTab, features });
//               return (
//                 <MealCard key={plan.tier} plan={plan} priceVal={priceVal} features={features} waUrl={waUrl} mealType={durTab === 'weekly' ? 'week' : 'month'} delay={inView ? i * 100 : 9999} />
//               );
//             })}
//           </div>

//           {/* 2 MEALS / DAY */}
//           <div className="mp-fade mp-fade-d5 mp-divider-row" style={{ marginTop: 8 }}>
//             <span className="mp-section-title">2 Meals / Day</span>
//             <div className="mp-divider-line" />
//             <span className="mp-section-label">Monthly · Lunch &amp; Dinner</span>
//           </div>

//           {durTab === 'weekly' && (
//             <p className="mp-monthly-notice">2-meal plans are monthly only — showing monthly prices below.</p>
//           )}

//           <div className={`mp-cards-grid three-col ${toggling ? 'mp-cards-toggling' : 'mp-cards-ready'}`}>
//             {TWO_MEAL_PLANS.map((plan, i) => {
//               const priceVal = plan.monthly[foodTab];
//               const features = plan.features[foodTab];
//               const waUrl = buildWhatsAppUrl({ tier: `${plan.tier} – 2 Meals/Day`, type: foodTab === 'veg' ? 'Veg' : 'Non-Veg', price: priceVal, duration: 'monthly', features });
//               const planWithLabel = { ...plan, tier: `${plan.tier} Plan` };
//               return (
//                 <MealCard key={plan.tier} plan={planWithLabel} priceVal={priceVal} features={features} waUrl={waUrl} mealType="month" delay={inView ? i * 110 : 9999} />
//               );
//             })}
//           </div>

//           <p className="mp-fade mp-fade-d6 mp-note">
//             ✨ Fresh, less oil &amp; ghar jaisa taste · Customization available · Limited subscription slots each week
//           </p>

//           {/* TRIAL BANNER */}
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
//                 target="_blank" rel="noreferrer"
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










// 'use client';

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { Leaf, Drumstick, Sparkles, Clock, Truck, Star, ChevronRight, Gift, Flame } from 'lucide-react';

// const WHATSAPP_NUMBER = '+971557998925';

// /* ─────────────────────────────────────────────
//    WHATSAPP MESSAGE BUILDER
// ───────────────────────────────────────────── */
// function buildWhatsAppUrl(plan: {
//   tier: string; type: 'Veg' | 'Non-Veg'; price: number;
//   duration: 'weekly' | 'monthly'; features: string[]; isTrial?: boolean;
// }) {
//   const { tier, type, price, duration, features, isTrial } = plan;
//   if (isTrial) {
//     const msg = [`👋 Hello The Chef Mom!`, ``, `I'd like to book a *2-Day Trial Meal* before subscribing.`, ``, `Please share the trial details and delivery schedule.`, ``, `Thank you! 🙏`].join('\n');
//     return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
//   }
//   const msg = [
//     `👋 Hello The Chef Mom!`, ``,
//     `I'm interested in subscribing to the following meal plan:`, ``,
//     `📦 *Plan:* ${tier} (${type})`,
//     `💰 *Price:* AED ${price}/${duration === 'weekly' ? 'week' : 'month'}`,
//     `🍽️ *Includes:*`,
//     ...features.map(f => `   • ${f}`), ``,
//     `Please share payment details and delivery schedule.`, ``,
//     `Thank you! 🙏`,
//   ].join('\n');
//   return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
// }

// /* ─────────────────────────────────────────────
//    PLAN DATA
// ───────────────────────────────────────────── */
// // Added 'image' to each plan to render the Thali
// const ONE_MEAL_PLANS = [
//   {
//     tier: 'Half Meal', badge: null,
//     weekly: { veg: 119, nonveg: 157 }, monthly: { veg: 449, nonveg: 625 },
//     color: '#FF6B2C',
//     image: {
//       veg: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400",
//       nonveg: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&q=80&w=400"
//     },
//     features: {
//       veg:    ['1 Dal / Curry', '1 Dry Sabzi', '3 Roti or Rice', 'Salad'],
//       nonveg: ['1 Chicken/Mutton Curry', '1 Dry Sabzi', '3 Roti or Rice', 'Salad'],
//     },
//     featured: false,
//   },
//   {
//     tier: 'Full Meal', badge: '⭐ Best Value',
//     weekly: { veg: 135, nonveg: 169 }, monthly: { veg: 549, nonveg: 689 },
//     color: '#FF6B2C',
//     image: {
//       veg: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400",
//       nonveg: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&q=80&w=400"
//     },
//     features: {
//       veg:    ['1 Dal / Curry', '1 Dry Sabzi', '4 Roti & Rice', 'Salad & Dessert'],
//       nonveg: ['1 Chicken/Mutton Curry', '1 Dry Sabzi', '4 Roti & Rice', 'Salad & Dessert'],
//     },
//     featured: true,
//   },
// ];

// const TWO_MEAL_PLANS = [
//   {
//     tier: 'Basic Plan', badge: null,
//     monthly: { veg: 769, nonveg: 949 },
//     color: '#FF6B2C',
//     image: {
//       veg: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400",
//       nonveg: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&q=80&w=400"
//     },
//     features: {
//       veg:    ['2 Meals / Day', 'Standard Menu', 'Roti, Rice, Dal, Sabzi, Salad'],
//       nonveg: ['2 Meals / Day', 'Standard Menu', 'Chicken 3x a week, Dal, Roti'],
//     },
//     featured: false,
//   },
//   {
//     tier: 'Standard Plan', badge: '⭐ Most Preferred',
//     monthly: { veg: 849, nonveg: 1049 },
//     color: '#FF6B2C',
//     image: {
//       veg: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400",
//       nonveg: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&q=80&w=400"
//     },
//     features: {
//       veg:    ['2 Meals / Day', 'Premium Menu', 'Includes Sweets', 'Flexible Delivery'],
//       nonveg: ['2 Meals / Day', 'Premium Menu', 'Chicken/Mutton', 'Includes Sweets'],
//     },
//     featured: true,
//   },
//   {
//     tier: 'Premium Plan', badge: null,
//     monthly: { veg: 1049, nonveg: 1249 },
//     color: '#FF6B2C',
//     image: {
//       veg: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&q=80&w=400",
//       nonveg: "https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&q=80&w=400"
//     },
//     features: {
//       veg:    ['2 Meals / Day', 'Deluxe Menu', 'Special Weekend Dishes', 'Customizable portions'],
//       nonveg: ['2 Meals / Day', 'Deluxe Menu', 'Special Weekend Dishes', 'Customizable portions'],
//     },
//     featured: false,
//   },
// ];

// /* ─────────────────────────────────────────────
//    HOOKS
// ───────────────────────────────────────────── */
// function useInView(threshold = 0.05) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return { ref, inView };
// }

// /* ─────────────────────────────────────────────
//    FLOATING PARTICLES CANVAS
// ───────────────────────────────────────────── */
// function ParticleCanvas() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;
//     let raf: number;
//     const resize = () => {
//       canvas.width  = canvas.offsetWidth;
//       canvas.height = canvas.offsetHeight;
//     };
//     resize();
//     window.addEventListener('resize', resize);
//     type Particle = { x: number; y: number; r: number; vx: number; vy: number; alpha: number; color: string };
//     const particles: Particle[] = Array.from({ length: 40 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       r: Math.random() * 3.2 + 0.8,
//       vx: (Math.random() - 0.5) * 0.32,
//       vy: -(Math.random() * 0.48 + 0.12),
//       alpha: Math.random() * 0.45 + 0.10,
//       color: Math.random() > 0.5 ? '#FF6B2C' : '#F5A623',
//     }));
//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach(p => {
//         ctx.beginPath();
//         ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = p.color;
//         ctx.globalAlpha = p.alpha;
//         ctx.fill();
//         p.x += p.vx; p.y += p.vy;
//         if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
//         if (p.x < -10) p.x = canvas.width + 10;
//         if (p.x > canvas.width + 10) p.x = -10;
//       });
//       ctx.globalAlpha = 1;
//       raf = requestAnimationFrame(draw);
//     };
//     draw();
//     return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
//   }, []);
//   return (
//     <canvas
//       ref={canvasRef}
//       style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}
//     />
//   );
// }

// /* ─────────────────────────────────────────────
//    THALI MEAL CARD
// ───────────────────────────────────────────── */
// function ThaliMealCard({
//   plan, priceVal, features, waUrl, mealType, delay, imageSrc, totalMeals
// }: {
//   plan: any; priceVal: number; features: string[];
//   waUrl: string; mealType: string; delay: number; imageSrc: string; totalMeals: number;
// }) {
//   const [hovered, setHovered]   = useState(false);
//   const [revealed, setRevealed] = useState(false);

//   useEffect(() => {
//     const t = setTimeout(() => setRevealed(true), delay);
//     return () => clearTimeout(t);
//   }, [delay]);

//   // Calculate per meal price for the tag
//   const perMealPrice = Math.round(priceVal / totalMeals);

//   return (
//     <div
//       className="flex flex-col items-center text-center p-4 relative"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         opacity: revealed ? 1 : 0,
//         transform: revealed ? 'translateY(0)' : 'translateY(36px)',
//         transition: `opacity 0.65s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.65s cubic-bezier(.16,1,.3,1) ${delay}ms`,
//       }}
//     >
//       {/* Optional Badge */}
//       {plan.badge && (
//         <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-[#1A0A00] font-black text-xs px-4 py-1.5 rounded-full shadow-md z-20 whitespace-nowrap">
//           {plan.badge}
//         </div>
//       )}

//       {/* Image & Tag Wrapper */}
//       <div className="relative mb-6">
//         {/* Dashed Border Circle */}
//         <div className={`rounded-full border-[3px] border-dashed border-[#FF6B2C] p-[6px] transition-transform duration-700 ${hovered ? 'scale-105 rotate-3' : 'scale-100 rotate-0'}`}>
//           <img 
//             src={imageSrc} 
//             alt={plan.tier}
//             className="w-48 h-48 md:w-56 md:h-56 rounded-full object-cover shadow-xl"
//           />
//         </div>

//         {/* Price Tag */}
//         <div className="absolute -top-2 -right-4 md:-right-8 bg-[#FF6B2C] text-white px-4 py-2 font-bold text-xs shadow-lg rotate-[15deg] group hover:rotate-12 transition-transform z-10 flex items-center gap-2"
//              style={{ borderRadius: '4px' }}>
//           {/* Hole punch detail for the tag */}
//           <div className="w-1.5 h-1.5 bg-white rounded-full opacity-80" />
//           <div className="border border-dashed border-white/60 px-2 py-1 rounded-sm">
//             {perMealPrice} AED/ Meal
//           </div>
//           {/* String attachment detail */}
//           <svg className="absolute -left-3 top-1/2 -translate-y-1/2 text-white/50" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//             <path d="M10 12c-2.5-2.5-5-1.5-7 1s-1.5 5 1 7 5 1.5 7-1 1.5-5-1-7Z"></path>
//           </svg>
//         </div>
//       </div>

//       {/* Title */}
//       <h3 className="text-2xl md:text-3xl font-black text-[#2A3342] mb-3 font-['Outfit']">
//         {plan.tier}
//       </h3>

//       {/* Features Description */}
//       <p className="text-[#64748B] text-sm md:text-base font-medium max-w-[280px] leading-relaxed mb-6 h-auto min-h-[60px]">
//         {features.join(', ')}
//       </p>

//       {/* Action Button */}
//       <a 
//         href={waUrl} 
//         target="_blank" 
//         rel="noreferrer" 
//         className="w-full max-w-[280px] bg-[#FF6B2C] hover:bg-[#E55A1F] text-white rounded-2xl py-3.5 px-6 flex flex-col items-center justify-center transition-all duration-300 hover:shadow-[0_8px_25px_rgba(255,107,44,0.4)] hover:-translate-y-1"
//       >
//         <span className="text-xl md:text-2xl font-black">
//           AED {priceVal} <span className="text-sm font-medium opacity-90">/ {mealType}</span>
//         </span>
//         <span className="text-sm font-bold uppercase tracking-wider mt-0.5 flex items-center gap-1">
//           Order Now <ChevronRight size={16} />
//         </span>
//       </a>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    MAIN COMPONENT
// ───────────────────────────────────────────── */
// export default function MealPlans() {
//   const [foodTab, setFoodTab]   = useState<'veg' | 'nonveg'>('veg');
//   const [durTab,  setDurTab]    = useState<'weekly' | 'monthly'>('weekly');
//   const [toggling, setToggling] = useState(false);
//   const { ref: sectionRef, inView } = useInView(0.05);

//   const handleFoodTab = (val: 'veg' | 'nonveg') => {
//     if (val === foodTab) return;
//     setToggling(true); setTimeout(() => { setFoodTab(val); setToggling(false); }, 220);
//   };
//   const handleDurTab = (val: 'weekly' | 'monthly') => {
//     if (val === durTab) return;
//     setToggling(true); setTimeout(() => { setDurTab(val); setToggling(false); }, 220);
//   };

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{__html: `
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;0,800;1,700&family=Outfit:wght@300;400;500;700;900&display=swap');

//         .mp-root *, .mp-root *::before, .mp-root *::after { box-sizing: border-box; }

//         .mp-root {
//           font-family: 'Outfit', sans-serif;
//           background: #FCFAF6; /* Off-white restaurant background */
//           position: relative; overflow: hidden; padding: 60px 0 80px;
//           -webkit-tap-highlight-color: transparent;
//         }

//         /* ── Animated dot grid ── */
//         .mp-dots {
//           position: absolute; inset: 0;
//           background-image: radial-gradient(circle, rgba(255,107,44,0.1) 1.5px, transparent 1.5px);
//           background-size: 28px 28px; pointer-events: none; z-index: 0;
//           animation: mpDotsPulse 6s ease-in-out infinite;
//         }
//         @keyframes mpDotsPulse { 0%,100% { opacity: 1; } 50% { opacity: 0.5; } }

//         /* ── Blobs ── */
//         .mp-blob {
//           position: absolute; border-radius: 50%;
//           filter: blur(80px); opacity: 0.15; pointer-events: none;
//           animation: mpBlobDrift 15s ease-in-out infinite alternate;
//         }
//         @keyframes mpBlobDrift {
//           0% { transform: translate(0,0) scale(1); }
//           100% { transform: translate(50px,-30px) scale(1.1); }
//         }

//         /* ── Container ── */
//         .mp-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 5; width: 100%; }

//         /* ── Heading ── */
//         .mp-heading {
//           font-family: 'Fraunces', serif; font-size: clamp(32px,6vw,56px);
//           font-weight: 800; color: #1A0A00; line-height: 1.1;
//           letter-spacing: -0.5px; margin: 0 0 16px;
//         }

//         /* ── Toggles ── */
//         .mp-toggles-wrap { display: flex; flex-direction: column; align-items: center; gap: 16px; margin-bottom: 48px; }
//         .mp-toggle-group { display: flex; flex-direction: column; align-items: center; gap: 8px; }
//         .mp-toggle-group-label { font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: #94A3B8; }
//         .mp-toggle-wrap {
//           background: #FFFFFF; border: 1px solid #E2E8F0;
//           border-radius: 60px; padding: 6px; display: inline-flex;
//           box-shadow: 0 4px 15px rgba(0,0,0,0.03);
//         }
//         .mp-toggle-btn {
//           display: flex; align-items: center; gap: 8px; padding: 10px 24px; border-radius: 50px;
//           font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 700;
//           cursor: pointer; border: none; background: transparent; color: #64748B;
//           transition: all 0.3s ease; white-space: nowrap; outline: none;
//         }
//         .mp-toggle-btn.active {
//           background: #FF6B2C; color: #fff;
//           box-shadow: 0 4px 15px rgba(255,107,44,0.3);
//         }
//         .mp-toggle-btn:not(.active):hover { background: #F8FAFC; color: #1E293B; }

//         /* ── Section divider ── */
//         .mp-divider-row { display: flex; align-items: center; gap: 16px; margin: 40px 0 32px; justify-content: center; }
//         .mp-section-title { font-family: 'Fraunces', serif; font-size: 24px; font-weight: 800; color: #1E293B; }
//         .mp-divider-line { flex: 1; height: 1px; background: #E2E8F0; max-width: 200px; }

//         /* ── Grids ── */
//         .mp-grid { 
//           display: grid; grid-template-columns: 1fr; gap: 40px; 
//           transition: opacity 0.3s ease, transform 0.3s ease;
//         }
//         @media (min-width: 768px) {
//           .mp-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
//           .mp-toggles-wrap { flex-direction: row; gap: 32px; justify-content: center; }
//         }
//         @media (min-width: 1024px) {
//           .mp-grid.three-col { grid-template-columns: repeat(3, 1fr); }
//         }

//         .mp-cards-toggling { opacity: 0; transform: translateY(10px); }
//         .mp-cards-ready    { opacity: 1; transform: translateY(0); }

//         /* ── Trial banner ── */
//         .mp-trial {
//           background: #fff; border: 1px solid #E2E8F0; border-radius: 32px;
//           padding: 24px 32px; margin-top: 64px;
//           display: flex; align-items: center; justify-content: space-between; gap: 24px;
//           box-shadow: 0 10px 40px rgba(0,0,0,0.03);
//           flex-wrap: wrap; text-align: left;
//         }
//         .mp-trial-btn {
//           padding: 14px 28px; border-radius: 50px;
//           background: #FF6B2C; color: #fff; font-weight: 800; text-decoration: none;
//           display: inline-flex; align-items: center; gap: 8px;
//           transition: all 0.3s ease; white-space: nowrap;
//         }
//         .mp-trial-btn:hover { background: #E55A1F; transform: translateY(-2px); box-shadow: 0 8px 25px rgba(255,107,44,0.3); }

//         @media (max-width: 640px) {
//           .mp-trial { flex-direction: column; text-align: center; justify-content: center; padding: 24px; }
//           .mp-trial-btn { width: 100%; justify-content: center; }
//         }
//       `}} />

//       <section id="meal-plans" ref={sectionRef} className={`mp-root${inView ? ' visible' : ''}`}>

//         {/* Background layers */}
//         <div className="mp-dots" />
//         <ParticleCanvas />
//         <div className="mp-blob" style={{ width: 500, height: 500, background: '#FFD580', top: -100, right: -150 }} />
//         <div className="mp-blob" style={{ width: 400, height: 400, background: '#FF9F6B', bottom: -50, left: -100, animationDelay: '-5s' }} />

//         <div className="mp-container">

//           {/* HEADER */}
//           <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
//             <h2 className="mp-heading" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
//               Choose Your Meal Plan
//             </h2>
//             <div className="flex justify-center items-center gap-4 flex-wrap text-[#64748B] font-medium text-sm" style={{ opacity: inView ? 1 : 0, transition: 'all 0.6s ease 0.2s' }}>
//               <span className="flex items-center gap-1.5"><Clock size={16} className="text-[#FF6B2C]"/> 6 Days / Week</span>
//               <span className="hidden sm:block">•</span>
//               <span className="flex items-center gap-1.5"><Truck size={16} className="text-[#FF6B2C]"/> Free Delivery</span>
//               <span className="hidden sm:block">•</span>
//               <span className="flex items-center gap-1.5"><Star size={16} className="text-[#FF6B2C]"/> 26 Days / Month</span>
//             </div>
//           </div>

//           {/* TOGGLES */}
//           <div className="mp-toggles-wrap" style={{ opacity: inView ? 1 : 0, transition: 'all 0.6s ease 0.3s' }}>
//             <div className="mp-toggle-group">
//               <span className="mp-toggle-group-label">Diet Preference</span>
//               <div className="mp-toggle-wrap">
//                 <button className={`mp-toggle-btn${foodTab === 'veg' ? ' active' : ''}`} onClick={() => handleFoodTab('veg')}>
//                   <Leaf size={16} /> Veg
//                 </button>
//                 <button className={`mp-toggle-btn${foodTab === 'nonveg' ? ' active' : ''}`} onClick={() => handleFoodTab('nonveg')}>
//                   <Drumstick size={16} /> Non-Veg
//                 </button>
//               </div>
//             </div>
//             <div className="mp-toggle-group">
//               <span className="mp-toggle-group-label">Billing Cycle</span>
//               <div className="mp-toggle-wrap">
//                 <button className={`mp-toggle-btn${durTab === 'weekly' ? ' active' : ''}`} onClick={() => handleDurTab('weekly')}>Weekly</button>
//                 <button className={`mp-toggle-btn${durTab === 'monthly' ? ' active' : ''}`} onClick={() => handleDurTab('monthly')}>Monthly</button>
//               </div>
//             </div>
//           </div>

//           {/* 1 MEAL / DAY (Grid) */}
//           <div className="mp-divider-row" style={{ opacity: inView ? 1 : 0, transition: 'all 0.6s ease 0.4s' }}>
//             <div className="mp-divider-line hidden md:block" />
//             <span className="mp-section-title">1 Meal / Day <span className="text-sm font-medium text-[#94A3B8] ml-2 font-sans tracking-normal">(Lunch OR Dinner)</span></span>
//             <div className="mp-divider-line hidden md:block" />
//           </div>

//           <div className={`mp-grid two-col max-w-4xl mx-auto ${toggling ? 'mp-cards-toggling' : 'mp-cards-ready'}`}>
//             {ONE_MEAL_PLANS.map((plan, i) => {
//               const priceVal = durTab === 'weekly' ? plan.weekly[foodTab] : plan.monthly[foodTab];
//               const features = plan.features[foodTab];
//               const totalMeals = durTab === 'weekly' ? 6 : 26; // 6 days a week, or 26 days a month
//               const imageSrc = plan.image[foodTab];
//               const waUrl = buildWhatsAppUrl({ tier: `${plan.tier} – 1 Meal/Day`, type: foodTab === 'veg' ? 'Veg' : 'Non-Veg', price: priceVal, duration: durTab, features });

//               return (
//                 <ThaliMealCard 
//                   key={plan.tier} 
//                   plan={plan} 
//                   priceVal={priceVal} 
//                   features={features} 
//                   waUrl={waUrl} 
//                   mealType={durTab === 'weekly' ? 'week' : 'month'} 
//                   delay={inView ? i * 100 : 9999}
//                   imageSrc={imageSrc}
//                   totalMeals={totalMeals}
//                 />
//               );
//             })}
//           </div>

//           {/* 2 MEALS / DAY (Grid) */}
//           <div className="mp-divider-row" style={{ marginTop: '64px', opacity: inView ? 1 : 0, transition: 'all 0.6s ease 0.5s' }}>
//             <div className="mp-divider-line hidden md:block" />
//             <span className="mp-section-title">2 Meals / Day <span className="text-sm font-medium text-[#94A3B8] ml-2 font-sans tracking-normal">(Lunch & Dinner)</span></span>
//             <div className="mp-divider-line hidden md:block" />
//           </div>

//           {durTab === 'weekly' && (
//             <p className="text-center text-[#FF6B2C] font-bold text-sm mb-6 animate-pulse">
//               * 2-meal plans are available on a monthly basis only.
//             </p>
//           )}

//           <div className={`mp-grid three-col ${toggling ? 'mp-cards-toggling' : 'mp-cards-ready'}`}>
//             {TWO_MEAL_PLANS.map((plan, i) => {
//               const priceVal = plan.monthly[foodTab];
//               const features = plan.features[foodTab];
//               const totalMeals = 52; // 2 meals * 26 days
//               const imageSrc = plan.image[foodTab];
//               const waUrl = buildWhatsAppUrl({ tier: `${plan.tier} – 2 Meals/Day`, type: foodTab === 'veg' ? 'Veg' : 'Non-Veg', price: priceVal, duration: 'monthly', features });

//               return (
//                 <ThaliMealCard 
//                   key={plan.tier} 
//                   plan={plan} 
//                   priceVal={priceVal} 
//                   features={features} 
//                   waUrl={waUrl} 
//                   mealType="month" 
//                   delay={inView ? i * 150 : 9999} 
//                   imageSrc={imageSrc}
//                   totalMeals={totalMeals}
//                 />
//               );
//             })}
//           </div>

//           {/* TRIAL BANNER */}
//           <div className="mp-trial" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 0.8s' }}>
//             <div className="flex items-center gap-6">
//               <div className="w-16 h-16 bg-[#FFF4ED] border border-[#FF6B2C]/20 rounded-2xl flex items-center justify-center text-3xl shadow-inner flex-shrink-0">
//                 🎁
//               </div>
//               <div>
//                 <h4 className="text-xl font-black text-[#1E293B] mb-1">Want to taste before subscribing?</h4>
//                 <p className="text-[#64748B] font-medium text-sm">
//                   2-Day Trial · Veg AED 25 · Non-Veg AED 28. <br className="sm:hidden"/> No commitment needed 😊
//                 </p>
//               </div>
//             </div>
//             <a
//               href={buildWhatsAppUrl({ tier: 'Trial', type: 'Veg', price: 0, duration: 'weekly', features: [], isTrial: true })}
//               target="_blank" rel="noreferrer"
//               className="mp-trial-btn"
//             >
//               Book a Trial 🍲 <ChevronRight size={18} />
//             </a>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }










// 'use client';

// import React, { useState, useEffect, useRef, useCallback } from 'react';
// import { Leaf, Drumstick, Sparkles, Clock, Truck, Star, ChevronRight, Gift, Flame } from 'lucide-react';

// const WHATSAPP_NUMBER = '+971557998925';

// /* ─────────────────────────────────────────────
//    WHATSAPP MESSAGE BUILDER
// ───────────────────────────────────────────── */
// function buildWhatsAppUrl(plan: {
//   tier: string; type: 'Veg' | 'Non-Veg'; price: number;
//   duration: 'weekly' | 'monthly'; features: string[]; isTrial?: boolean;
// }) {
//   const { tier, type, price, duration, features, isTrial } = plan;
//   if (isTrial) {
//     const msg = [`👋 Hello The Chef Mom!`, ``, `I'd like to book a *2-Day Trial Meal* before subscribing.`, ``, `Please share the trial details and delivery schedule.`, ``, `Thank you! 🙏`].join('\n');
//     return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
//   }
//   const msg = [
//     `👋 Hello The Chef Mom!`, ``,
//     `I'm interested in subscribing to the following meal plan:`, ``,
//     `📦 *Plan:* ${tier} (${type})`,
//     `💰 *Price:* AED ${price}/${duration === 'weekly' ? 'week' : 'month'}`,
//     `🍽️ *Includes:*`,
//     ...features.map(f => `   • ${f}`), ``,
//     `Please share payment details and delivery schedule.`, ``,
//     `Thank you! 🙏`,
//   ].join('\n');
//   return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
// }

// /* ─────────────────────────────────────────────
//    PLAN DATA — using local /chefmom/ images
// ───────────────────────────────────────────── */
// const ONE_MEAL_PLANS = [
//   {
//     tier: 'Half Meal', badge: null,
//     weekly: { veg: 119, nonveg: 157 }, monthly: { veg: 449, nonveg: 625 },
//     color: '#FF6B2C',
//     // same image for both tabs — swap if you have separate veg/non-veg shots
//     image: {
//       veg:    '/chefmom/Basic plan week.png',
//       nonveg: '/chefmom/Basic plan week.png',
//     },
//     features: {
//       veg:    ['1 Dal / Curry', '1 Dry Sabzi', '3 Roti or Rice', 'Salad'],
//       nonveg: ['1 Chicken/Mutton Curry', '1 Dry Sabzi', '3 Roti or Rice', 'Salad'],
//     },
//     featured: false,
//   },
//   {
//     tier: 'Full Meal', badge: '⭐ Best Value',
//     weekly: { veg: 135, nonveg: 169 }, monthly: { veg: 549, nonveg: 689 },
//     color: '#FF6B2C',
//     image: {
//       veg:    '/chefmom/Basic plan.png',
//       nonveg: '/chefmom/Basic plan.png',
//     },
//     features: {
//       veg:    ['1 Dal / Curry', '1 Dry Sabzi', '4 Roti & Rice', 'Salad & Dessert'],
//       nonveg: ['1 Chicken/Mutton Curry', '1 Dry Sabzi', '4 Roti & Rice', 'Salad & Dessert'],
//     },
//     featured: true,
//   },
// ];

// const TWO_MEAL_PLANS = [
//   {
//     tier: 'Basic Plan', badge: null,
//     monthly: { veg: 769, nonveg: 949 },
//     color: '#FF6B2C',
//     image: {
//       veg:    '/chefmom/Basic plan.png',
//       nonveg: '/chefmom/Basic plan.png',
//     },
//     features: {
//       veg:    ['2 Meals / Day', 'Standard Menu', 'Roti, Rice, Dal, Sabzi, Salad'],
//       nonveg: ['2 Meals / Day', 'Standard Menu', 'Chicken 3x a week, Dal, Roti'],
//     },
//     featured: false,
//   },
//   {
//     tier: 'Standard Plan', badge: '⭐ Most Preferred',
//     monthly: { veg: 849, nonveg: 1049 },
//     color: '#FF6B2C',
//     image: {
//       veg:    '/chefmom/Standard plan.png',
//       nonveg: '/chefmom/Standard plan week.png',
//     },
//     features: {
//       veg:    ['2 Meals / Day', 'Premium Menu', 'Includes Sweets', 'Flexible Delivery'],
//       nonveg: ['2 Meals / Day', 'Premium Menu', 'Chicken/Mutton', 'Includes Sweets'],
//     },
//     featured: true,
//   },
//   {
//     tier: 'Premium Plan', badge: null,
//     monthly: { veg: 1049, nonveg: 1249 },
//     color: '#FF6B2C',
//     image: {
//       veg:    '/chefmom/Premium-Meal.png',
//       nonveg: '/chefmom/Premium-Meal weak.png',
//     },
//     features: {
//       veg:    ['2 Meals / Day', 'Deluxe Menu', 'Special Weekend Dishes', 'Customizable portions'],
//       nonveg: ['2 Meals / Day', 'Deluxe Menu', 'Special Weekend Dishes', 'Customizable portions'],
//     },
//     featured: false,
//   },
// ];

// /* ─────────────────────────────────────────────
//    HOOKS
// ───────────────────────────────────────────── */
// function useInView(threshold = 0.05) {
//   const ref = useRef<HTMLDivElement>(null);
//   const [inView, setInView] = useState(false);
//   useEffect(() => {
//     const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
//     if (ref.current) obs.observe(ref.current);
//     return () => obs.disconnect();
//   }, [threshold]);
//   return { ref, inView };
// }

// /* ─────────────────────────────────────────────
//    FLOATING PARTICLES CANVAS
// ───────────────────────────────────────────── */
// function ParticleCanvas() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;
//     let raf: number;
//     const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
//     resize();
//     window.addEventListener('resize', resize);
//     type Particle = { x: number; y: number; r: number; vx: number; vy: number; alpha: number; color: string };
//     const particles: Particle[] = Array.from({ length: 48 }, () => ({
//       x: Math.random() * canvas.width,
//       y: Math.random() * canvas.height,
//       r: Math.random() * 3.5 + 0.8,
//       vx: (Math.random() - 0.5) * 0.32,
//       vy: -(Math.random() * 0.5 + 0.1),
//       alpha: Math.random() * 0.45 + 0.1,
//       color: Math.random() > 0.5 ? '#FF6B2C' : '#F5A623',
//     }));
//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       particles.forEach(p => {
//         ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = p.color; ctx.globalAlpha = p.alpha; ctx.fill();
//         p.x += p.vx; p.y += p.vy;
//         if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
//         if (p.x < -10) p.x = canvas.width + 10;
//         if (p.x > canvas.width + 10) p.x = -10;
//       });
//       ctx.globalAlpha = 1;
//       raf = requestAnimationFrame(draw);
//     };
//     draw();
//     return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
//   }, []);
//   return (
//     <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }} />
//   );
// }

// /* ─────────────────────────────────────────────
//    SHIMMER EFFECT — runs over the image on hover
// ───────────────────────────────────────────── */
// function ShimmerOverlay({ active }: { active: boolean }) {
//   return (
//     <div
//       style={{
//         position: 'absolute', inset: 0, borderRadius: '50%', overflow: 'hidden',
//         pointerEvents: 'none', zIndex: 3,
//         opacity: active ? 1 : 0,
//         transition: 'opacity 0.3s ease',
//       }}
//     >
//       <div style={{
//         position: 'absolute', top: 0, left: '-100%', width: '60%', height: '100%',
//         background: 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.35) 50%, transparent 60%)',
//         animation: active ? 'shimmerSlide 0.7s ease forwards' : 'none',
//       }} />
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    THALI MEAL CARD
// ───────────────────────────────────────────── */
// function ThaliMealCard({
//   plan, priceVal, features, waUrl, mealType, delay, imageSrc, totalMeals
// }: {
//   plan: any; priceVal: number; features: string[];
//   waUrl: string; mealType: string; delay: number; imageSrc: string; totalMeals: number;
// }) {
//   const [hovered, setHovered]   = useState(false);
//   const [revealed, setRevealed] = useState(false);
//   const [imgKey,   setImgKey]   = useState(imageSrc);

//   // reset shimmer when image src changes (tab switch)
//   useEffect(() => { setImgKey(imageSrc); }, [imageSrc]);

//   useEffect(() => {
//     const t = setTimeout(() => setRevealed(true), delay);
//     return () => clearTimeout(t);
//   }, [delay]);

//   const perMealPrice = Math.round(priceVal / totalMeals);

//   return (
//     <div
//       className="flex flex-col items-center text-center p-4 relative"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//       style={{
//         opacity: revealed ? 1 : 0,
//         transform: revealed ? 'translateY(0)' : 'translateY(40px)',
//         transition: `opacity 0.7s cubic-bezier(.16,1,.3,1) ${delay}ms, transform 0.7s cubic-bezier(.16,1,.3,1) ${delay}ms`,
//       }}
//     >
//       {/* Badge */}
//       {plan.badge && (
//         <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-[#1A0A00] font-black text-xs px-4 py-1.5 rounded-full shadow-md z-20 whitespace-nowrap">
//           {plan.badge}
//         </div>
//       )}

//       {/* ── Image wrapper with all animations ── */}
//       <div
//         className="relative mb-6"
//         style={{
//           animation: 'floatThali 6s ease-in-out infinite',
//           animationDelay: `${(delay % 3) * 0.8}s`,
//         }}
//       >
//         {/* Glowing ring behind plate */}
//         <div
//           style={{
//             position: 'absolute', inset: '-12px', borderRadius: '50%', zIndex: 0,
//             background: 'radial-gradient(circle, rgba(255,107,44,0.22) 0%, transparent 70%)',
//             transform: hovered ? 'scale(1.18)' : 'scale(1)',
//             transition: 'transform 0.5s ease',
//             filter: hovered ? 'blur(0px)' : 'blur(2px)',
//           }}
//         />

//         {/* Dashed orbit ring */}
//         <div
//           style={{
//             position: 'absolute', inset: '-6px', borderRadius: '50%', zIndex: 1,
//             border: '3px dashed rgba(255,107,44,0.55)',
//             animation: hovered ? 'orbitSpin 4s linear infinite' : 'orbitSpin 18s linear infinite',
//             transition: 'animation-duration 0.8s ease',
//           }}
//         />

//         {/* Inner padding ring */}
//         <div
//           style={{
//             position: 'relative', zIndex: 2, padding: '6px', borderRadius: '50%',
//             background: hovered
//               ? 'linear-gradient(135deg, #FFF4ED 0%, #FFE0CC 100%)'
//               : 'transparent',
//             transition: 'background 0.4s ease',
//             boxShadow: hovered ? '0 0 30px rgba(255,107,44,0.25)' : 'none',
//           }}
//         >
//           <div style={{ position: 'relative', width: 200, height: 200 }}>
//             <img
//               key={imgKey}
//               src={imageSrc}
//               alt={plan.tier}
//               style={{
//                 width: '100%', height: '100%', borderRadius: '50%', objectFit: 'cover',
//                 boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
//                 transform: hovered ? 'scale(1.07)' : 'scale(1)',
//                 transition: 'transform 0.5s cubic-bezier(.34,1.56,.64,1)',
//                 animation: 'imgReveal 0.5s ease',
//               }}
//             />
//             {/* Shimmer flash */}
//             <ShimmerOverlay active={hovered} />
//           </div>
//         </div>

//         {/* Orbiting dot */}
//         <div
//           style={{
//             position: 'absolute', top: '50%', left: '50%', zIndex: 4,
//             width: 212, height: 212, marginLeft: -106, marginTop: -106,
//             animation: hovered ? 'orbitDot 2s linear infinite' : 'orbitDot 6s linear infinite',
//             pointerEvents: 'none',
//             transition: 'animation-duration 0.6s ease',
//           }}
//         >
//           <div style={{
//             position: 'absolute', top: -5, left: '50%',
//             width: 10, height: 10, borderRadius: '50%',
//             background: '#FF6B2C',
//             boxShadow: '0 0 8px #FF6B2C',
//             transform: 'translateX(-50%)',
//           }} />
//         </div>

//         {/* Price tag */}
//         <div
//           className="absolute -top-2 -right-6 z-10"
//           style={{
//             background: 'linear-gradient(135deg, #FF6B2C, #E55A1F)',
//             color: '#fff', padding: '8px 14px',
//             borderRadius: '4px',
//             fontWeight: 800, fontSize: 11,
//             boxShadow: '0 4px 14px rgba(255,107,44,0.45)',
//             transform: hovered ? 'rotate(10deg) scale(1.08)' : 'rotate(16deg) scale(1)',
//             transition: 'transform 0.4s cubic-bezier(.34,1.56,.64,1)',
//             display: 'flex', alignItems: 'center', gap: 6,
//           }}
//         >
//           <div style={{ width: 6, height: 6, background: '#fff', borderRadius: '50%', opacity: 0.8 }} />
//           <div style={{ border: '1px dashed rgba(255,255,255,0.6)', padding: '3px 8px', borderRadius: 3 }}>
//             {perMealPrice} AED/Meal
//           </div>
//         </div>
//       </div>

//       {/* Title */}
//       <h3 className="text-2xl md:text-3xl font-black text-[#2A3342] mb-3" style={{ fontFamily: "'Outfit', sans-serif" }}>
//         {plan.tier}
//       </h3>

//       {/* Features */}
//       <p className="text-[#64748B] text-sm md:text-base font-medium max-w-[280px] leading-relaxed mb-6 min-h-[60px]">
//         {features.join(', ')}
//       </p>

//       {/* CTA */}
//       <a
//         href={waUrl} target="_blank" rel="noreferrer"
//         className="w-full max-w-[280px] text-white rounded-2xl py-3.5 px-6 flex flex-col items-center justify-center"
//         style={{
//           background: 'linear-gradient(135deg, #FF6B2C 0%, #E84F00 100%)',
//           transition: 'all 0.3s ease',
//           boxShadow: hovered ? '0 12px 30px rgba(255,107,44,0.5)' : '0 4px 15px rgba(255,107,44,0.25)',
//           transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
//         }}
//       >
//         <span className="text-xl md:text-2xl font-black">
//           AED {priceVal} <span className="text-sm font-medium opacity-90">/ {mealType}</span>
//         </span>
//         <span className="text-sm font-bold uppercase tracking-wider mt-0.5 flex items-center gap-1">
//           Order Now <ChevronRight size={16} />
//         </span>
//       </a>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    MAIN COMPONENT
// ───────────────────────────────────────────── */
// export default function MealPlans() {
//   const [foodTab, setFoodTab]   = useState<'veg' | 'nonveg'>('veg');
//   const [durTab,  setDurTab]    = useState<'weekly' | 'monthly'>('weekly');
//   const [toggling, setToggling] = useState(false);
//   const { ref: sectionRef, inView } = useInView(0.05);

//   const handleFoodTab = (val: 'veg' | 'nonveg') => {
//     if (val === foodTab) return;
//     setToggling(true); setTimeout(() => { setFoodTab(val); setToggling(false); }, 240);
//   };
//   const handleDurTab = (val: 'weekly' | 'monthly') => {
//     if (val === durTab) return;
//     setToggling(true); setTimeout(() => { setDurTab(val); setToggling(false); }, 240);
//   };

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{__html: `
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;0,800;1,700&family=Outfit:wght@300;400;500;700;900&display=swap');

//         .mp-root *, .mp-root *::before, .mp-root *::after { box-sizing: border-box; }

//         .mp-root {
//           font-family: 'Outfit', sans-serif;
//           background: #FCFAF6;
//           position: relative; overflow: hidden; padding: 60px 0 80px;
//           -webkit-tap-highlight-color: transparent;
//         }

//         /* ── Dot grid ── */
//         .mp-dots {
//           position: absolute; inset: 0;
//           background-image: radial-gradient(circle, rgba(255,107,44,0.1) 1.5px, transparent 1.5px);
//           background-size: 28px 28px; pointer-events: none; z-index: 0;
//           animation: mpDotsPulse 6s ease-in-out infinite;
//         }
//         @keyframes mpDotsPulse { 0%,100% { opacity:1; } 50% { opacity:0.5; } }

//         /* ── Blobs ── */
//         .mp-blob {
//           position: absolute; border-radius: 50%;
//           filter: blur(80px); opacity: 0.15; pointer-events: none;
//           animation: mpBlobDrift 15s ease-in-out infinite alternate;
//         }
//         @keyframes mpBlobDrift {
//           0%   { transform: translate(0,0) scale(1); }
//           100% { transform: translate(50px,-30px) scale(1.1); }
//         }

//         /* ── Orbit ring spin ── */
//         @keyframes orbitSpin {
//           from { transform: rotate(0deg); }
//           to   { transform: rotate(360deg); }
//         }

//         /* ── Orbiting dot ── */
//         @keyframes orbitDot {
//           from { transform: rotate(0deg); }
//           to   { transform: rotate(360deg); }
//         }

//         /* ── Card float ── */
//         @keyframes floatThali {
//           0%,100% { transform: translateY(0px); }
//           50%     { transform: translateY(-14px); }
//         }

//         /* ── Image swap reveal ── */
//         @keyframes imgReveal {
//           0%   { opacity:0; transform: scale(0.92); }
//           100% { opacity:1; transform: scale(1); }
//         }

//         /* ── Shimmer slide ── */
//         @keyframes shimmerSlide {
//           0%   { left: -100%; }
//           100% { left: 160%; }
//         }

//         /* ── Container ── */
//         .mp-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 5; width: 100%; }

//         /* ── Heading ── */
//         .mp-heading {
//           font-family: 'Fraunces', serif; font-size: clamp(32px,6vw,56px);
//           font-weight: 800; color: #1A0A00; line-height: 1.1;
//           letter-spacing: -0.5px; margin: 0 0 16px;
//         }

//         /* ── Toggles ── */
//         .mp-toggles-wrap { display: flex; flex-direction: column; align-items: center; gap: 16px; margin-bottom: 48px; }
//         .mp-toggle-group { display: flex; flex-direction: column; align-items: center; gap: 8px; }
//         .mp-toggle-group-label { font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: #94A3B8; }
//         .mp-toggle-wrap {
//           background: #FFFFFF; border: 1px solid #E2E8F0; border-radius: 60px; padding: 6px;
//           display: inline-flex; box-shadow: 0 4px 15px rgba(0,0,0,0.03);
//         }
//         .mp-toggle-btn {
//           display: flex; align-items: center; gap: 8px; padding: 10px 24px; border-radius: 50px;
//           font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 700;
//           cursor: pointer; border: none; background: transparent; color: #64748B;
//           transition: all 0.3s ease; white-space: nowrap; outline: none;
//         }
//         .mp-toggle-btn.active { background: #FF6B2C; color: #fff; box-shadow: 0 4px 15px rgba(255,107,44,0.3); }
//         .mp-toggle-btn:not(.active):hover { background: #F8FAFC; color: #1E293B; }

//         /* ── Section divider ── */
//         .mp-divider-row { display: flex; align-items: center; gap: 16px; margin: 40px 0 32px; justify-content: center; }
//         .mp-section-title { font-family: 'Fraunces', serif; font-size: 24px; font-weight: 800; color: #1E293B; }
//         .mp-divider-line { flex: 1; height: 1px; background: #E2E8F0; max-width: 200px; }

//         /* ── Grids ── */
//         .mp-grid {
//           display: grid; grid-template-columns: 1fr; gap: 40px;
//           transition: opacity 0.3s ease, transform 0.3s ease;
//         }
//         @media (min-width: 768px) {
//           .mp-grid { grid-template-columns: repeat(2, 1fr); gap: 24px; }
//           .mp-toggles-wrap { flex-direction: row; gap: 32px; justify-content: center; }
//         }
//         @media (min-width: 1024px) { .mp-grid.three-col { grid-template-columns: repeat(3, 1fr); } }

//         .mp-cards-toggling { opacity: 0; transform: translateY(10px); }
//         .mp-cards-ready    { opacity: 1; transform: translateY(0); }

//         /* ── Trial banner ── */
//         .mp-trial {
//           background: #fff; border: 1px solid #E2E8F0; border-radius: 32px;
//           padding: 24px 32px; margin-top: 64px;
//           display: flex; align-items: center; justify-content: space-between; gap: 24px;
//           box-shadow: 0 10px 40px rgba(0,0,0,0.03); flex-wrap: wrap; text-align: left;
//         }
//         .mp-trial-btn {
//           padding: 14px 28px; border-radius: 50px;
//           background: linear-gradient(135deg, #FF6B2C, #E84F00); color: #fff; font-weight: 800;
//           text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
//           transition: all 0.3s ease; white-space: nowrap;
//         }
//         .mp-trial-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(255,107,44,0.35); }

//         @media (max-width: 640px) {
//           .mp-trial { flex-direction: column; text-align: center; justify-content: center; padding: 24px; }
//           .mp-trial-btn { width: 100%; justify-content: center; }
//         }
//       `}} />

//       <section id="meal-plans" ref={sectionRef} className="mp-root">

//         <div className="mp-dots" />
//         <ParticleCanvas />
//         <div className="mp-blob" style={{ width: 500, height: 500, background: '#FFD580', top: -100, right: -150 }} />
//         <div className="mp-blob" style={{ width: 400, height: 400, background: '#FF9F6B', bottom: -50, left: -100, animationDelay: '-5s' }} />

//         <div className="mp-container">

//           {/* HEADER */}
//           <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
//             <h2 className="mp-heading" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease' }}>
//               Choose Your Meal Plan
//             </h2>
//             <div className="flex justify-center items-center gap-4 flex-wrap text-[#64748B] font-medium text-sm" style={{ opacity: inView ? 1 : 0, transition: 'all 0.6s ease 0.2s' }}>
//               <span className="flex items-center gap-1.5"><Clock size={16} className="text-[#FF6B2C]" /> 6 Days / Week</span>
//               <span className="hidden sm:block">•</span>
//               <span className="flex items-center gap-1.5"><Truck size={16} className="text-[#FF6B2C]" /> Free Delivery</span>
//               <span className="hidden sm:block">•</span>
//               <span className="flex items-center gap-1.5"><Star size={16} className="text-[#FF6B2C]" /> 26 Days / Month</span>
//             </div>
//           </div>

//           {/* TOGGLES */}
//           <div className="mp-toggles-wrap" style={{ opacity: inView ? 1 : 0, transition: 'all 0.6s ease 0.3s' }}>
//             <div className="mp-toggle-group">
//               <span className="mp-toggle-group-label">Diet Preference</span>
//               <div className="mp-toggle-wrap">
//                 <button className={`mp-toggle-btn${foodTab === 'veg' ? ' active' : ''}`} onClick={() => handleFoodTab('veg')}><Leaf size={16} /> Veg</button>
//                 <button className={`mp-toggle-btn${foodTab === 'nonveg' ? ' active' : ''}`} onClick={() => handleFoodTab('nonveg')}><Drumstick size={16} /> Non-Veg</button>
//               </div>
//             </div>
//             <div className="mp-toggle-group">
//               <span className="mp-toggle-group-label">Billing Cycle</span>
//               <div className="mp-toggle-wrap">
//                 <button className={`mp-toggle-btn${durTab === 'weekly' ? ' active' : ''}`} onClick={() => handleDurTab('weekly')}>Weekly</button>
//                 <button className={`mp-toggle-btn${durTab === 'monthly' ? ' active' : ''}`} onClick={() => handleDurTab('monthly')}>Monthly</button>
//               </div>
//             </div>
//           </div>

//           {/* 1 MEAL / DAY */}
//           <div className="mp-divider-row" style={{ opacity: inView ? 1 : 0, transition: 'all 0.6s ease 0.4s' }}>
//             <div className="mp-divider-line hidden md:block" />
//             <span className="mp-section-title">1 Meal / Day <span className="text-sm font-medium text-[#94A3B8] ml-2 font-sans tracking-normal">(Lunch OR Dinner)</span></span>
//             <div className="mp-divider-line hidden md:block" />
//           </div>

//           <div className={`mp-grid two-col max-w-4xl mx-auto ${toggling ? 'mp-cards-toggling' : 'mp-cards-ready'}`}>
//             {ONE_MEAL_PLANS.map((plan, i) => {
//               const priceVal   = durTab === 'weekly' ? plan.weekly[foodTab] : plan.monthly[foodTab];
//               const features   = plan.features[foodTab];
//               const totalMeals = durTab === 'weekly' ? 6 : 26;
//               const imageSrc   = plan.image[foodTab];
//               const waUrl      = buildWhatsAppUrl({ tier: `${plan.tier} – 1 Meal/Day`, type: foodTab === 'veg' ? 'Veg' : 'Non-Veg', price: priceVal, duration: durTab, features });
//               return (
//                 <ThaliMealCard key={plan.tier} plan={plan} priceVal={priceVal} features={features} waUrl={waUrl}
//                   mealType={durTab === 'weekly' ? 'week' : 'month'} delay={inView ? i * 100 : 9999}
//                   imageSrc={imageSrc} totalMeals={totalMeals} />
//               );
//             })}
//           </div>

//           {/* 2 MEALS / DAY */}
//           <div className="mp-divider-row" style={{ marginTop: '64px', opacity: inView ? 1 : 0, transition: 'all 0.6s ease 0.5s' }}>
//             <div className="mp-divider-line hidden md:block" />
//             <span className="mp-section-title">2 Meals / Day <span className="text-sm font-medium text-[#94A3B8] ml-2 font-sans tracking-normal">(Lunch & Dinner)</span></span>
//             <div className="mp-divider-line hidden md:block" />
//           </div>

//           {durTab === 'weekly' && (
//             <p className="text-center text-[#FF6B2C] font-bold text-sm mb-6 animate-pulse">
//               * 2-meal plans are available on a monthly basis only.
//             </p>
//           )}

//           <div className={`mp-grid three-col ${toggling ? 'mp-cards-toggling' : 'mp-cards-ready'}`}>
//             {TWO_MEAL_PLANS.map((plan, i) => {
//               const priceVal = plan.monthly[foodTab];
//               const features = plan.features[foodTab];
//               const imageSrc = plan.image[foodTab];
//               const waUrl    = buildWhatsAppUrl({ tier: `${plan.tier} – 2 Meals/Day`, type: foodTab === 'veg' ? 'Veg' : 'Non-Veg', price: priceVal, duration: 'monthly', features });
//               return (
//                 <ThaliMealCard key={plan.tier} plan={plan} priceVal={priceVal} features={features} waUrl={waUrl}
//                   mealType="month" delay={inView ? i * 150 : 9999}
//                   imageSrc={imageSrc} totalMeals={52} />
//               );
//             })}
//           </div>

//           {/* TRIAL BANNER */}
//           <div className="mp-trial" style={{ opacity: inView ? 1 : 0, transform: inView ? 'translateY(0)' : 'translateY(20px)', transition: 'all 0.6s ease 0.8s' }}>
//             <div className="flex items-center gap-6">
//               <div className="w-16 h-16 bg-[#FFF4ED] border border-[#FF6B2C]/20 rounded-2xl flex items-center justify-center text-3xl shadow-inner flex-shrink-0">🎁</div>
//               <div>
//                 <h4 className="text-xl font-black text-[#1E293B] mb-1">Want to taste before subscribing?</h4>
//                 <p className="text-[#64748B] font-medium text-sm">
//                   2-Day Trial · Veg AED 25 · Non-Veg AED 28. <br className="sm:hidden" /> No commitment needed 😊
//                 </p>
//               </div>
//             </div>
//             <a href={buildWhatsAppUrl({ tier: 'Trial', type: 'Veg', price: 0, duration: 'weekly', features: [], isTrial: true })}
//               target="_blank" rel="noreferrer" className="mp-trial-btn">
//               Book a Trial 🍲 <ChevronRight size={18} />
//             </a>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }
















// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { Leaf, Drumstick, Clock, Truck, Star, ChevronRight } from 'lucide-react';

// const WHATSAPP_NUMBER = '+971557998925';

// /* ─────────────────────────────────────────────
//    WHATSAPP MESSAGE BUILDER
// ───────────────────────────────────────────── */
// function buildWhatsAppUrl(plan: {
//   tier: string; type: 'Veg' | 'Non-Veg'; price: number;
//   duration: 'weekly' | 'monthly'; features: string[]; isTrial?: boolean;
// }) {
//   const { tier, type, price, duration, features, isTrial } = plan;
//   if (isTrial) {
//     const msg = [`👋 Hello The Chef Mom!`, ``, `I'd like to book a *2-Day Trial Meal* before subscribing.`, ``, `Please share the trial details and delivery schedule.`, ``, `Thank you! 🙏`].join('\n');
//     return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
//   }
//   const msg = [
//     `👋 Hello The Chef Mom!`, ``,
//     `I'm interested in subscribing to the following meal plan:`, ``,
//     `📦 *Plan:* ${tier} (${type})`,
//     `💰 *Price:* AED ${price}/${duration === 'weekly' ? 'week' : 'month'}`,
//     `🍽️ *Includes:*`,
//     ...features.map(f => `   • ${f}`), ``,
//     `Please share payment details and delivery schedule.`, ``,
//     `Thank you! 🙏`,
//   ].join('\n');
//   return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
// }

// /* ─────────────────────────────────────────────
//    PLAN DATA
// ───────────────────────────────────────────── */
// const ONE_MEAL_PLANS = [
//   {
//     tier: 'Half Meal', badge: null,
//     weekly: { veg: 119, nonveg: 157 }, monthly: { veg: 449, nonveg: 625 },
//     image: { veg: '/chefmom/Basic plan week.png', nonveg: '/chefmom/Basic plan week.png' },
//     features: {
//       veg:    ['1 Dal / Curry', '1 Dry Sabzi', '3 Roti or Rice', 'Salad'],
//       nonveg: ['1 Chicken/Mutton Curry', '1 Dry Sabzi', '3 Roti or Rice', 'Salad'],
//     },
//   },
//   {
//     tier: 'Full Meal', badge: '⭐ Best Value',
//     weekly: { veg: 135, nonveg: 169 }, monthly: { veg: 549, nonveg: 689 },
//     image: { veg: '/chefmom/Basic plan.png', nonveg: '/chefmom/Basic plan.png' },
//     features: {
//       veg:    ['1 Dal / Curry', '1 Dry Sabzi', '4 Roti & Rice', 'Salad & Dessert'],
//       nonveg: ['1 Chicken/Mutton Curry', '1 Dry Sabzi', '4 Roti & Rice', 'Salad & Dessert'],
//     },
//   },
// ];

// const TWO_MEAL_PLANS = [
//   {
//     tier: 'Basic Plan', badge: null,
//     monthly: { veg: 769, nonveg: 949 },
//     image: { veg: '/chefmom/Basic plan.png', nonveg: '/chefmom/Basic plan.png' },
//     features: {
//       veg:    ['2 Meals / Day', 'Standard Menu', 'Roti, Rice, Dal, Sabzi, Salad'],
//       nonveg: ['2 Meals / Day', 'Standard Menu', 'Chicken 3x a week, Dal, Roti'],
//     },
//   },
//   {
//     tier: 'Standard Plan', badge: '⭐ Most Preferred',
//     monthly: { veg: 949, nonveg: 1169 },
//     image: { veg: '/chefmom/Standard plan.png', nonveg: '/chefmom/Standard plan week.png' },
//     features: {
//       veg:    ['2 Meals / Day', 'Premium Menu', 'Includes Sweets', 'Flexible Delivery'],
//       nonveg: ['2 Meals / Day', 'Premium Menu', 'Chicken', 'Includes Sweets'],
//     },
//   },
//   {
//     tier: 'Premium Plan', badge: null,
//     monthly: { veg: 1149, nonveg: 1369 },
//     image: { veg: '/chefmom/Premium-Meal.png', nonveg: '/chefmom/Premium-Meal weak.png' },
//     features: {
//       veg:    ['2 Meals / Day', 'Deluxe Menu', 'Special Weekend Dishes', 'Customizable portions'],
//       nonveg: ['2 Meals / Day', 'Deluxe Menu', 'Special Weekend Dishes', 'Customizable portions'],
//     },
//   },
// ];

// /* ─────────────────────────────────────────────
//    FLOATING PARTICLES CANVAS
// ───────────────────────────────────────────── */
// function ParticleCanvas() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;
//     let raf: number;
//     const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
//     resize();
//     window.addEventListener('resize', resize);
//     type P = { x: number; y: number; r: number; vx: number; vy: number; alpha: number; color: string };
//     const ps: P[] = Array.from({ length: 48 }, () => ({
//       x: Math.random() * canvas.width, y: Math.random() * canvas.height,
//       r: Math.random() * 3.5 + 0.8, vx: (Math.random() - 0.5) * 0.32,
//       vy: -(Math.random() * 0.5 + 0.1), alpha: Math.random() * 0.45 + 0.1,
//       color: Math.random() > 0.5 ? '#FF6B2C' : '#F5A623',
//     }));
//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ps.forEach(p => {
//         ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = p.color; ctx.globalAlpha = p.alpha; ctx.fill();
//         p.x += p.vx; p.y += p.vy;
//         if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
//         if (p.x < -10) p.x = canvas.width + 10;
//         if (p.x > canvas.width + 10) p.x = -10;
//       });
//       ctx.globalAlpha = 1;
//       raf = requestAnimationFrame(draw);
//     };
//     draw();
//     return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
//   }, []);
//   return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }} />;
// }

// /* ─────────────────────────────────────────────
//    THALI MEAL CARD
//    ✅ No internal reveal state — visibility is
//       controlled purely via CSS class from parent
// ───────────────────────────────────────────── */
// function ThaliMealCard({
//   plan, priceVal, features, waUrl, mealType, animIndex, imageSrc, totalMeals,
// }: {
//   plan: { tier: string; badge: string | null };
//   priceVal: number; features: string[];
//   waUrl: string; mealType: string;
//   animIndex: number; imageSrc: string; totalMeals: number;
// }) {
//   const [hovered, setHovered] = useState(false);
//   const perMealPrice = Math.round(priceVal / totalMeals);

//   return (
//     <div
//       className="mp-card-item"
//       style={{ animationDelay: `${animIndex * 120}ms` }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div className="flex flex-col items-center text-center p-4 relative">

//         {/* Badge */}
//         {plan.badge && (
//           <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-[#1A0A00] font-black text-xs px-4 py-1.5 rounded-full shadow-md z-20 whitespace-nowrap">
//             {plan.badge}
//           </div>
//         )}

//         {/* Image + orbit ring */}
//         <div className="relative mb-6" style={{ animation: `floatThali 6s ease-in-out ${animIndex * 0.8}s infinite` }}>
//           {/* Glow */}
//           <div style={{
//             position: 'absolute', inset: '-12px', borderRadius: '50%', zIndex: 0,
//             background: 'radial-gradient(circle, rgba(255,107,44,0.22) 0%, transparent 70%)',
//             transform: hovered ? 'scale(1.18)' : 'scale(1)',
//             transition: 'transform 0.5s ease',
//             filter: hovered ? 'blur(0px)' : 'blur(2px)',
//           }} />
//           {/* Orbit ring */}
//           <div style={{
//             position: 'absolute', inset: '-6px', borderRadius: '50%', zIndex: 1,
//             border: '3px dashed rgba(255,107,44,0.55)',
//             animation: hovered ? 'orbitSpin 4s linear infinite' : 'orbitSpin 18s linear infinite',
//           }} />
//           {/* Inner */}
//           <div style={{
//             position: 'relative', zIndex: 2, padding: '6px', borderRadius: '50%',
//             background: hovered ? 'linear-gradient(135deg,#FFF4ED,#FFE0CC)' : 'transparent',
//             transition: 'background 0.4s ease',
//             boxShadow: hovered ? '0 0 30px rgba(255,107,44,0.25)' : 'none',
//           }}>
//             <img
//               src={imageSrc}
//               alt={plan.tier}
//               style={{
//                 width: 200, height: 200, borderRadius: '50%', objectFit: 'cover',
//                 boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
//                 transform: hovered ? 'scale(1.07)' : 'scale(1)',
//                 transition: 'transform 0.5s cubic-bezier(.34,1.56,.64,1)',
//                 display: 'block',
//               }}
//             />
//           </div>
//           {/* Orbiting dot */}
//           <div style={{
//             position: 'absolute', top: '50%', left: '50%', zIndex: 4,
//             width: 212, height: 212, marginLeft: -106, marginTop: -106,
//             animation: hovered ? 'orbitDot 2s linear infinite' : 'orbitDot 6s linear infinite',
//             pointerEvents: 'none',
//           }}>
//             <div style={{
//               position: 'absolute', top: -5, left: '50%',
//               width: 10, height: 10, borderRadius: '50%',
//               background: '#FF6B2C', boxShadow: '0 0 8px #FF6B2C',
//               transform: 'translateX(-50%)',
//             }} />
//           </div>
//           {/* Price tag */}
//           <div className="absolute -top-2 -right-6 z-10" style={{
//             background: 'linear-gradient(135deg,#FF6B2C,#E55A1F)', color: '#fff',
//             padding: '8px 14px', borderRadius: '4px', fontWeight: 800, fontSize: 11,
//             boxShadow: '0 4px 14px rgba(255,107,44,0.45)',
//             transform: hovered ? 'rotate(10deg) scale(1.08)' : 'rotate(16deg) scale(1)',
//             transition: 'transform 0.4s cubic-bezier(.34,1.56,.64,1)',
//             display: 'flex', alignItems: 'center', gap: 6,
//           }}>
//             <div style={{ width: 6, height: 6, background: '#fff', borderRadius: '50%', opacity: 0.8 }} />
//             <div style={{ border: '1px dashed rgba(255,255,255,0.6)', padding: '3px 8px', borderRadius: 3 }}>
//               {perMealPrice} AED/Meal
//             </div>
//           </div>
//         </div>

//         {/* Title */}
//         <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(20px,3vw,28px)', fontWeight: 900, color: '#2A3342', marginBottom: 12 }}>
//           {plan.tier}
//         </h3>

//         {/* Features */}
//         <p style={{ color: '#64748B', fontSize: 14, fontWeight: 500, maxWidth: 280, lineHeight: 1.7, marginBottom: 24, minHeight: 60 }}>
//           {features.join(', ')}
//         </p>

//         {/* CTA */}
//         <a
//           href={waUrl} target="_blank" rel="noreferrer"
//           style={{
//             width: '100%', maxWidth: 280, color: '#fff', borderRadius: 16,
//             padding: '14px 24px', display: 'flex', flexDirection: 'column',
//             alignItems: 'center', justifyContent: 'center', textDecoration: 'none',
//             background: 'linear-gradient(135deg,#FF6B2C 0%,#E84F00 100%)',
//             transition: 'all 0.3s ease',
//             boxShadow: hovered ? '0 12px 30px rgba(255,107,44,0.5)' : '0 4px 15px rgba(255,107,44,0.25)',
//             transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
//           }}
//         >
//           <span style={{ fontSize: 'clamp(18px,3vw,24px)', fontWeight: 900 }}>
//             AED {priceVal} <span style={{ fontSize: 13, fontWeight: 500, opacity: 0.9 }}>/ {mealType}</span>
//           </span>
//           <span style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
//             Order Now <ChevronRight size={14} />
//           </span>
//         </a>
//       </div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    MAIN COMPONENT
// ───────────────────────────────────────────── */
// export default function MealPlans() {
//   const [foodTab, setFoodTab] = useState<'veg' | 'nonveg'>('veg');
//   const [durTab,  setDurTab]  = useState<'weekly' | 'monthly'>('weekly');
//   const [inView,  setInView]  = useState(false);
//   const [gridKey, setGridKey] = useState(0); // forces grid re-animation on tab switch
//   const sectionRef = useRef<HTMLDivElement>(null);

//   /* IntersectionObserver — fires once when section enters viewport */
//   useEffect(() => {
//     const el = sectionRef.current;
//     if (!el) return;
//     // If section is already in viewport on mount (e.g. after reload), fire immediately
//     const rect = el.getBoundingClientRect();
//     if (rect.top < window.innerHeight && rect.bottom > 0) {
//       setInView(true);
//       return;
//     }
//     const obs = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
//       { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, []);

//   const handleFoodTab = (val: 'veg' | 'nonveg') => {
//     if (val === foodTab) return;
//     setFoodTab(val);
//     setGridKey(k => k + 1);
//   };
//   const handleDurTab = (val: 'weekly' | 'monthly') => {
//     if (val === durTab) return;
//     setDurTab(val);
//     setGridKey(k => k + 1);
//   };

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{ __html: `
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;0,800;1,700&family=Outfit:wght@300;400;500;700;900&display=swap');

//         .mp-root *, .mp-root *::before, .mp-root *::after { box-sizing: border-box; }
//         .mp-root {
//           font-family: 'Outfit', sans-serif;
//           background: #FCFAF6;
//           position: relative; overflow: hidden; padding: 60px 0 80px;
//         }
//         .mp-dots {
//           position: absolute; inset: 0;
//           background-image: radial-gradient(circle, rgba(255,107,44,0.1) 1.5px, transparent 1.5px);
//           background-size: 28px 28px; pointer-events: none; z-index: 0;
//           animation: mpDotsPulse 6s ease-in-out infinite;
//         }
//         @keyframes mpDotsPulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
//         .mp-blob {
//           position: absolute; border-radius: 50%; filter: blur(80px);
//           opacity: 0.15; pointer-events: none;
//           animation: mpBlobDrift 15s ease-in-out infinite alternate;
//         }
//         @keyframes mpBlobDrift { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(50px,-30px) scale(1.1)} }

//         /* ── Card entrance animation — runs when .mp-cards-visible is present ── */
//         @keyframes cardSlideUp {
//           from { opacity: 0; transform: translateY(44px) scale(0.96); }
//           to   { opacity: 1; transform: translateY(0)   scale(1); }
//         }
//         .mp-cards-hidden .mp-card-item {
//           opacity: 0;
//         }
//         .mp-cards-visible .mp-card-item {
//           animation: cardSlideUp 0.65s cubic-bezier(.16,1,.3,1) both;
//         }

//         @keyframes floatThali  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
//         @keyframes orbitSpin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
//         @keyframes orbitDot    { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

//         .mp-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 5; }

//         .mp-heading {
//           font-family: 'Fraunces', serif;
//           font-size: clamp(32px,6vw,56px); font-weight: 800; color: #1A0A00;
//           line-height: 1.1; letter-spacing: -0.5px; margin: 0 0 16px;
//         }

//         /* Entrance for heading */
//         .mp-header-hidden { opacity: 0; transform: translateY(20px); }
//         .mp-header-visible { opacity: 1; transform: translateY(0); transition: opacity 0.6s ease, transform 0.6s ease; }
//         .mp-header-visible.d2 { transition-delay: 0.15s; }
//         .mp-header-visible.d3 { transition-delay: 0.25s; }

//         .mp-toggles-wrap { display: flex; flex-direction: column; align-items: center; gap: 16px; margin-bottom: 48px; }
//         .mp-toggle-group { display: flex; flex-direction: column; align-items: center; gap: 8px; }
//         .mp-toggle-group-label { font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: #94A3B8; }
//         .mp-toggle-wrap {
//           background: #fff; border: 1px solid #E2E8F0; border-radius: 60px; padding: 6px;
//           display: inline-flex; box-shadow: 0 4px 15px rgba(0,0,0,0.03);
//         }
//         .mp-toggle-btn {
//           display: flex; align-items: center; gap: 8px; padding: 10px 24px; border-radius: 50px;
//           font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 700;
//           cursor: pointer; border: none; background: transparent; color: #64748B;
//           transition: all 0.3s ease; white-space: nowrap; outline: none;
//         }
//         .mp-toggle-btn.active { background: #FF6B2C; color: #fff; box-shadow: 0 4px 15px rgba(255,107,44,0.3); }
//         .mp-toggle-btn:not(.active):hover { background: #F8FAFC; color: #1E293B; }

//         .mp-divider-row { display: flex; align-items: center; gap: 16px; margin: 40px 0 32px; justify-content: center; }
//         .mp-section-title { font-family: 'Fraunces', serif; font-size: 24px; font-weight: 800; color: #1E293B; }
//         .mp-divider-line { flex: 1; height: 1px; background: #E2E8F0; max-width: 200px; }

//         .mp-grid {
//           display: grid; grid-template-columns: 1fr; gap: 40px;
//         }
//         @media(min-width:768px) {
//           .mp-grid { grid-template-columns: repeat(2,1fr); gap: 24px; }
//           .mp-toggles-wrap { flex-direction: row; gap: 32px; justify-content: center; }
//         }
//         @media(min-width:1024px) { .mp-grid.three-col { grid-template-columns: repeat(3,1fr); } }

//         .mp-trial {
//           background: #fff; border: 1px solid #E2E8F0; border-radius: 32px;
//           padding: 24px 32px; margin-top: 64px;
//           display: flex; align-items: center; justify-content: space-between; gap: 24px;
//           box-shadow: 0 10px 40px rgba(0,0,0,0.03); flex-wrap: wrap;
//         }
//         .mp-trial-btn {
//           padding: 14px 28px; border-radius: 50px;
//           background: linear-gradient(135deg,#FF6B2C,#E84F00); color: #fff;
//           font-weight: 800; text-decoration: none;
//           display: inline-flex; align-items: center; gap: 8px;
//           transition: all 0.3s ease; white-space: nowrap;
//         }
//         .mp-trial-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(255,107,44,0.35); }
//         @media(max-width:640px) {
//           .mp-trial { flex-direction: column; text-align: center; justify-content: center; padding: 24px; }
//           .mp-trial-btn { width: 100%; justify-content: center; }
//         }
//       `}} />

//       <section id="meal-plans" className="mp-root">
//         <div className="mp-dots" />
//         <ParticleCanvas />
//         <div className="mp-blob" style={{ width: 500, height: 500, background: '#FFD580', top: -100, right: -150 }} />
//         <div className="mp-blob" style={{ width: 400, height: 400, background: '#FF9F6B', bottom: -50, left: -100, animationDelay: '-5s' }} />

//         <div className="mp-container" ref={sectionRef}>

//           {/* HEADER */}
//           <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
//             <h2 className={`mp-heading ${inView ? 'mp-header-visible' : 'mp-header-hidden'}`}>
//               Choose Your Meal Plan
//             </h2>
//             <div className={`${inView ? 'mp-header-visible d2' : 'mp-header-hidden'}`}
//               style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, flexWrap: 'wrap', color: '#64748B', fontWeight: 500, fontSize: 14 }}>
//               <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Clock size={16} color="#FF6B2C" /> 6 Days / Week</span>
//               <span>•</span>
//               <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Truck size={16} color="#FF6B2C" /> Free Delivery</span>
//               <span>•</span>
//               <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Star size={16} color="#FF6B2C" /> 26 Days / Month</span>
//             </div>
//           </div>

//           {/* TOGGLES */}
//           <div className={`mp-toggles-wrap ${inView ? 'mp-header-visible d3' : 'mp-header-hidden'}`}>
//             <div className="mp-toggle-group">
//               <span className="mp-toggle-group-label">Diet Preference</span>
//               <div className="mp-toggle-wrap">
//                 <button className={`mp-toggle-btn${foodTab === 'veg' ? ' active' : ''}`} onClick={() => handleFoodTab('veg')}>
//                   <Leaf size={16} /> Veg
//                 </button>
//                 <button className={`mp-toggle-btn${foodTab === 'nonveg' ? ' active' : ''}`} onClick={() => handleFoodTab('nonveg')}>
//                   <Drumstick size={16} /> Non-Veg
//                 </button>
//               </div>
//             </div>
//             <div className="mp-toggle-group">
//               <span className="mp-toggle-group-label">Billing Cycle</span>
//               <div className="mp-toggle-wrap">
//                 <button className={`mp-toggle-btn${durTab === 'weekly' ? ' active' : ''}`} onClick={() => handleDurTab('weekly')}>Weekly</button>
//                 <button className={`mp-toggle-btn${durTab === 'monthly' ? ' active' : ''}`} onClick={() => handleDurTab('monthly')}>Monthly</button>
//               </div>
//             </div>
//           </div>

//           {/* 1 MEAL / DAY */}
//           <div className={`mp-divider-row ${inView ? 'mp-header-visible' : 'mp-header-hidden'}`}>
//             <div className="mp-divider-line" style={{ display: 'none' }} />
//             <span className="mp-section-title">
//               1 Meal / Day{' '}
//               <span style={{ fontSize: 14, fontWeight: 500, color: '#94A3B8', fontFamily: 'Outfit,sans-serif' }}>(Lunch OR Dinner)</span>
//             </span>
//             <div className="mp-divider-line" style={{ display: 'none' }} />
//           </div>

//           {/* key= forces full remount → animation replays on tab switch */}
//           <div key={`one-${gridKey}`} className={`mp-grid max-w-4xl mx-auto ${inView ? 'mp-cards-visible' : 'mp-cards-hidden'}`} style={{ maxWidth: 860, margin: '0 auto' }}>
//             {ONE_MEAL_PLANS.map((plan, i) => {
//               const priceVal   = durTab === 'weekly' ? plan.weekly[foodTab] : plan.monthly[foodTab];
//               const totalMeals = durTab === 'weekly' ? 6 : 26;
//               const waUrl      = buildWhatsAppUrl({ tier: `${plan.tier} – 1 Meal/Day`, type: foodTab === 'veg' ? 'Veg' : 'Non-Veg', price: priceVal, duration: durTab, features: plan.features[foodTab] });
//               return (
//                 <ThaliMealCard
//                   key={plan.tier}
//                   plan={plan} priceVal={priceVal}
//                   features={plan.features[foodTab]}
//                   waUrl={waUrl}
//                   mealType={durTab === 'weekly' ? 'week' : 'month'}
//                   animIndex={i}
//                   imageSrc={plan.image[foodTab]}
//                   totalMeals={totalMeals}
//                 />
//               );
//             })}
//           </div>

//           {/* 2 MEALS / DAY */}
//           <div className={`mp-divider-row ${inView ? 'mp-header-visible' : 'mp-header-hidden'}`} style={{ marginTop: 64 }}>
//             <span className="mp-section-title">
//               2 Meals / Day{' '}
//               <span style={{ fontSize: 14, fontWeight: 500, color: '#94A3B8', fontFamily: 'Outfit,sans-serif' }}>(Lunch & Dinner)</span>
//             </span>
//           </div>

//           {durTab === 'weekly' && (
//             <p style={{ textAlign: 'center', color: '#FF6B2C', fontWeight: 700, fontSize: 14, marginBottom: 24 }}>
//               * 2-meal plans are available on a monthly basis only.
//             </p>
//           )}

//           <div key={`two-${gridKey}`} className={`mp-grid three-col ${inView ? 'mp-cards-visible' : 'mp-cards-hidden'}`}>
//             {TWO_MEAL_PLANS.map((plan, i) => {
//               const priceVal = plan.monthly[foodTab];
//               const waUrl    = buildWhatsAppUrl({ tier: `${plan.tier} – 2 Meals/Day`, type: foodTab === 'veg' ? 'Veg' : 'Non-Veg', price: priceVal, duration: 'monthly', features: plan.features[foodTab] });
//               return (
//                 <ThaliMealCard
//                   key={plan.tier}
//                   plan={plan} priceVal={priceVal}
//                   features={plan.features[foodTab]}
//                   waUrl={waUrl}
//                   mealType="month"
//                   animIndex={i}
//                   imageSrc={plan.image[foodTab]}
//                   totalMeals={52}
//                 />
//               );
//             })}
//           </div>

//           {/* TRIAL BANNER */}
//           <div className={`mp-trial ${inView ? 'mp-header-visible' : 'mp-header-hidden'}`} style={{ transitionDelay: '0.5s' }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
//               <div style={{ width: 64, height: 64, background: '#FFF4ED', border: '1px solid rgba(255,107,44,0.2)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, flexShrink: 0 }}>🎁</div>
//               <div>
//                 <h4 style={{ fontSize: 18, fontWeight: 900, color: '#1E293B', marginBottom: 4 }}>Want to taste before subscribing?</h4>
//                 <p style={{ color: '#64748B', fontWeight: 500, fontSize: 14 }}>
//                   2-Day Trial · Veg AED 25 · Non-Veg AED 28. No commitment needed 😊
//                 </p>
//               </div>
//             </div>
//             <a href={buildWhatsAppUrl({ tier: 'Trial', type: 'Veg', price: 0, duration: 'weekly', features: [], isTrial: true })}
//               target="_blank" rel="noreferrer" className="mp-trial-btn">
//               Book a Trial 🍲 <ChevronRight size={18} />
//             </a>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }













// C:\Marktale-projectes\My-Chef-Mom\src\components\home\MealPlans.tsx


// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import { Leaf, Drumstick, Clock, Truck, Star, ChevronRight } from 'lucide-react';

// const WHATSAPP_NUMBER = '+971557998925';

// function buildWhatsAppUrl(plan: {
//   tier: string; type: 'Veg' | 'Non-Veg'; price: number;
//   duration: 'weekly' | 'monthly'; features: string[]; isTrial?: boolean;
// }) {
//   const { tier, type, price, duration, features, isTrial } = plan;
//   if (isTrial) {
//     const msg = [`👋 Hello The Chef Mom!`, ``, `I'd like to book a *2-Day Trial Meal* before subscribing.`, ``, `Please share the trial details and delivery schedule.`, ``, `Thank you! 🙏`].join('\n');
//     return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
//   }
//   const msg = [
//     `👋 Hello The Chef Mom!`, ``,
//     `I'm interested in subscribing to the following meal plan:`, ``,
//     `📦 *Plan:* ${tier} (${type})`,
//     `💰 *Price:* AED ${price}/${duration === 'weekly' ? 'week' : 'month'}`,
//     `🍽️ *Includes:*`,
//     ...features.map(f => `   • ${f}`), ``,
//     `Please share payment details and delivery schedule.`, ``,
//     `Thank you! 🙏`,
//   ].join('\n');
//   return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
// }

// const ONE_MEAL_PLANS = [
//   {
//     tier: 'Half Meal', badge: null,
//     weekly: { veg: 119, nonveg: 157 }, monthly: { veg: 449, nonveg: 625 },
//     image: { veg: '/chefmom/Basic plan week.png', nonveg: '/chefmom/Basic plan week.png' },
//     features: {
//       veg: ['1 Dal / Curry', '1 Dry Sabzi', '3 Roti or Rice', 'Salad'],
//       nonveg: ['1 Chicken Curry', '1 Dry Sabzi', '3 Roti or Rice', 'Salad'],
//     },
//   },
//   {
//     tier: 'Full Meal', badge: '⭐ Best Value',
//     weekly: { veg: 135, nonveg: 169 }, monthly: { veg: 549, nonveg: 689 },
//     image: { veg: '/chefmom/Basic plan.png', nonveg: '/chefmom/Basic plan.png' },
//     features: {
//       veg: ['1 Dal / Curry', '1 Dry Sabzi', '3 Roti & Rice', 'Salad & Sweet or Raita'],
//       nonveg: ['1 Chicken Curry', '1 Dry Sabzi', '3 Roti & Rice', 'Salad & Sweet or Raita'],
//     },
//   },
// ];

// const TWO_MEAL_PLANS = [
//   {
//     tier: 'Basic Plan', badge: null,
//     monthly: { veg: 769, nonveg: 949 },
//     image: { veg: '/chefmom/Basic plan.png', nonveg: '/chefmom/Basic plan.png' },
//     features: {
//       veg: ['2 Meals / Day', 'Standard Menu', 'Roti, Rice, Dal, Sabzi, Salad'],
//       nonveg: ['2 Meals / Day', 'Standard Menu', 'Chicken 3x a week, Dal, Roti'],
//     },
//   },
//   {
//     tier: 'Standard Plan', badge: '⭐ Most Preferred',
//     monthly: { veg: 949, nonveg: 1169 },
//     image: { veg: '/chefmom/Standard plan.png', nonveg: '/chefmom/Standard plan week.png' },
//     features: {
//       veg: ['2 Meals / Day', 'Premium Menu', 'Sweet or Raita', 'Flexible Delivery'],
//       nonveg: ['2 Meals / Day', 'Premium Menu', 'Chicken', 'Sweet or Raita'],
//     },
//   },
//   {
//     tier: 'Premium Plan', badge: null,
//     monthly: { veg: 1149, nonveg: 1369 },
//     image: { veg: '/chefmom/Premium-Meal.png', nonveg: '/chefmom/Premium-Meal weak.png' },
//     features: {
//       veg: ['2 Meals / Day', 'Deluxe Menu', '4 Roti & Rice', 'Sweet or Raita', 'Special Weekend Dishes'],
//       nonveg: ['2 Meals / Day', 'Deluxe Menu', '4 Roti & Rice', 'Sweet or Raita', 'Special Weekend Dishes'],
//     },
//   },
// ];

// function ParticleCanvas() {
//   const canvasRef = useRef<HTMLCanvasElement>(null);
//   useEffect(() => {
//     const canvas = canvasRef.current;
//     if (!canvas) return;
//     const ctx = canvas.getContext('2d');
//     if (!ctx) return;
//     let raf: number;
//     const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
//     resize();
//     window.addEventListener('resize', resize);
//     type P = { x: number; y: number; r: number; vx: number; vy: number; alpha: number; color: string };
//     const ps: P[] = Array.from({ length: 48 }, () => ({
//       x: Math.random() * canvas.width, y: Math.random() * canvas.height,
//       r: Math.random() * 3.5 + 0.8, vx: (Math.random() - 0.5) * 0.32,
//       vy: -(Math.random() * 0.5 + 0.1), alpha: Math.random() * 0.45 + 0.1,
//       color: Math.random() > 0.5 ? '#FF6B2C' : '#F5A623',
//     }));
//     const draw = () => {
//       ctx.clearRect(0, 0, canvas.width, canvas.height);
//       ps.forEach(p => {
//         ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
//         ctx.fillStyle = p.color; ctx.globalAlpha = p.alpha; ctx.fill();
//         p.x += p.vx; p.y += p.vy;
//         if (p.y < -10) { p.y = canvas.height + 10; p.x = Math.random() * canvas.width; }
//         if (p.x < -10) p.x = canvas.width + 10;
//         if (p.x > canvas.width + 10) p.x = -10;
//       });
//       ctx.globalAlpha = 1;
//       raf = requestAnimationFrame(draw);
//     };
//     draw();
//     return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
//   }, []);
//   return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }} />;
// }

// function ThaliMealCard({
//   plan, priceVal, features, waUrl, mealType, animIndex, imageSrc, totalMeals,
// }: {
//   plan: { tier: string; badge: string | null };
//   priceVal: number; features: string[];
//   waUrl: string; mealType: string;
//   animIndex: number; imageSrc: string; totalMeals: number;
// }) {
//   const [hovered, setHovered] = useState(false);
//   const perMealPrice = Math.round(priceVal / totalMeals);

//   const glowStyle: React.CSSProperties = {
//     position: 'absolute', inset: '-12px', borderRadius: '50%', zIndex: 0,
//     background: 'radial-gradient(circle, rgba(255,107,44,0.22) 0%, transparent 70%)',
//     transform: hovered ? 'scale(1.18)' : 'scale(1)',
//     transition: 'transform 0.5s ease',
//     filter: hovered ? 'blur(0px)' : 'blur(2px)',
//   };

//   const orbitRingStyle: React.CSSProperties = {
//     position: 'absolute', inset: '-6px', borderRadius: '50%', zIndex: 1,
//     border: '3px dashed rgba(255,107,44,0.55)',
//     animation: hovered ? 'orbitSpin 4s linear infinite' : 'orbitSpin 18s linear infinite',
//   };

//   const innerWrapStyle: React.CSSProperties = {
//     position: 'relative', zIndex: 2, padding: '6px', borderRadius: '50%',
//     background: hovered ? 'linear-gradient(135deg,#FFF4ED,#FFE0CC)' : 'transparent',
//     transition: 'background 0.4s ease',
//     boxShadow: hovered ? '0 0 30px rgba(255,107,44,0.25)' : 'none',
//   };

//   const imgStyle: React.CSSProperties = {
//     width: 200, height: 200, borderRadius: '50%', objectFit: 'cover',
//     boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
//     transform: hovered ? 'scale(1.07)' : 'scale(1)',
//     transition: 'transform 0.5s cubic-bezier(.34,1.56,.64,1)',
//     display: 'block',
//   };

//   const orbitDotWrapStyle: React.CSSProperties = {
//     position: 'absolute', top: '50%', left: '50%', zIndex: 4,
//     width: 212, height: 212, marginLeft: -106, marginTop: -106,
//     animation: hovered ? 'orbitDot 2s linear infinite' : 'orbitDot 6s linear infinite',
//     pointerEvents: 'none',
//   };

//   const priceStickerStyle: React.CSSProperties = {
//     background: 'linear-gradient(135deg,#FF6B2C,#E55A1F)', color: '#fff',
//     padding: '8px 14px', borderRadius: '4px', fontWeight: 800, fontSize: 11,
//     boxShadow: '0 4px 14px rgba(255,107,44,0.45)',
//     transform: hovered ? 'rotate(10deg) scale(1.08)' : 'rotate(16deg) scale(1)',
//     transition: 'transform 0.4s cubic-bezier(.34,1.56,.64,1)',
//     display: 'flex', alignItems: 'center', gap: 6,
//   };

//   const ctaStyle: React.CSSProperties = {
//     width: '100%', maxWidth: 280, color: '#fff', borderRadius: 16,
//     padding: '14px 24px', display: 'flex', flexDirection: 'column',
//     alignItems: 'center', justifyContent: 'center', textDecoration: 'none',
//     background: 'linear-gradient(135deg,#FF6B2C 0%,#E84F00 100%)',
//     transition: 'all 0.3s ease',
//     boxShadow: hovered ? '0 12px 30px rgba(255,107,44,0.5)' : '0 4px 15px rgba(255,107,44,0.25)',
//     transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
//   };

//   return (
//     <div
//       className="mp-card-item"
//       style={{ animationDelay: `${animIndex * 120}ms` }}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div className="flex flex-col items-center text-center p-4 relative">

//         {plan.badge && (
//           <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-[#1A0A00] font-black text-xs px-4 py-1.5 rounded-full shadow-md z-20 whitespace-nowrap">
//             {plan.badge}
//           </div>
//         )}

//         <div className="relative mb-6" style={{ animation: `floatThali 6s ease-in-out ${animIndex * 0.8}s infinite` }}>
//           <div style={glowStyle} />
//           <div style={orbitRingStyle} />
//           <div style={innerWrapStyle}>
//             <img src={imageSrc} alt={plan.tier} style={imgStyle} />
//           </div>
//           <div style={orbitDotWrapStyle}>
//             <div style={{
//               position: 'absolute', top: -5, left: '50%',
//               width: 10, height: 10, borderRadius: '50%',
//               background: '#FF6B2C', boxShadow: '0 0 8px #FF6B2C',
//               transform: 'translateX(-50%)',
//             }} />
//           </div>
//           <div className="absolute -top-2 -right-6 z-10" style={priceStickerStyle}>
//             <div style={{ width: 6, height: 6, background: '#fff', borderRadius: '50%', opacity: 0.8 }} />
//             <div style={{ border: '1px dashed rgba(255,255,255,0.6)', padding: '3px 8px', borderRadius: 3 }}>
//               {perMealPrice} AED/Meal
//             </div>
//           </div>
//         </div>

//         <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(20px,3vw,28px)', fontWeight: 900, color: '#2A3342', marginBottom: 12 }}>
//           {plan.tier}
//         </h3>

//         <p style={{ color: '#64748B', fontSize: 14, fontWeight: 500, maxWidth: 280, lineHeight: 1.7, marginBottom: 24, minHeight: 60 }}>
//           {features.join(', ')}
//         </p>

//         <a href={waUrl} target="_blank" rel="noreferrer" style={ctaStyle}>
//           <span style={{ fontSize: 'clamp(18px,3vw,24px)', fontWeight: 900 }}>
//             AED {priceVal} <span style={{ fontSize: 13, fontWeight: 500, opacity: 0.9 }}>/ {mealType}</span>
//           </span>
//           <span style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
//             Order Now <ChevronRight size={14} />
//           </span>
//         </a>

//       </div>
//     </div>
//   );
// }

// export default function MealPlans() {
//   const [foodTab, setFoodTab] = useState<'veg' | 'nonveg'>('veg');
//   const [durTab, setDurTab] = useState<'weekly' | 'monthly'>('weekly');
//   const [inView, setInView] = useState(false);
//   const [gridKey, setGridKey] = useState(0);
//   const sectionRef = useRef<HTMLDivElement>(null);

//   useEffect(() => {
//     const el = sectionRef.current;
//     if (!el) return;
//     const rect = el.getBoundingClientRect();
//     if (rect.top < window.innerHeight && rect.bottom > 0) {
//       setInView(true);
//       return;
//     }
//     const obs = new IntersectionObserver(
//       ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
//       { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
//     );
//     obs.observe(el);
//     return () => obs.disconnect();
//   }, []);

//   const handleFoodTab = (val: 'veg' | 'nonveg') => {
//     if (val === foodTab) return;
//     setFoodTab(val);
//     setGridKey(k => k + 1);
//   };
//   const handleDurTab = (val: 'weekly' | 'monthly') => {
//     if (val === durTab) return;
//     setDurTab(val);
//     setGridKey(k => k + 1);
//   };

//   return (
//     <>
//       <style dangerouslySetInnerHTML={{
//         __html: `
//         @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;0,800;1,700&family=Outfit:wght@300;400;500;700;900&display=swap');

//         .mp-root *, .mp-root *::before, .mp-root *::after { box-sizing: border-box; }
//         .mp-root {
//           font-family: 'Outfit', sans-serif;
//           background: #FCFAF6;
//           position: relative; overflow: hidden; padding: 60px 0 80px;
//         }
//         .mp-dots {
//           position: absolute; inset: 0;
//           background-image: radial-gradient(circle, rgba(255,107,44,0.1) 1.5px, transparent 1.5px);
//           background-size: 28px 28px; pointer-events: none; z-index: 0;
//           animation: mpDotsPulse 6s ease-in-out infinite;
//         }
//         @keyframes mpDotsPulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
//         .mp-blob {
//           position: absolute; border-radius: 50%; filter: blur(80px);
//           opacity: 0.15; pointer-events: none;
//           animation: mpBlobDrift 15s ease-in-out infinite alternate;
//         }
//         @keyframes mpBlobDrift { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(50px,-30px) scale(1.1)} }

//         @keyframes cardSlideUp {
//           from { opacity: 0; transform: translateY(44px) scale(0.96); }
//           to   { opacity: 1; transform: translateY(0) scale(1); }
//         }
//         .mp-cards-hidden .mp-card-item { opacity: 0; }
//         .mp-cards-visible .mp-card-item {
//           animation: cardSlideUp 0.65s cubic-bezier(.16,1,.3,1) both;
//         }

//         @keyframes floatThali  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
//         @keyframes orbitSpin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
//         @keyframes orbitDot    { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

//         .mp-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 5; }

//         .mp-heading {
//           font-family: 'Fraunces', serif;
//           font-size: clamp(32px,6vw,56px); font-weight: 800; color: #1A0A00;
//           line-height: 1.1; letter-spacing: -0.5px; margin: 0 0 16px;
//         }

//         .mp-header-hidden { opacity: 0; transform: translateY(20px); }
//         .mp-header-visible { opacity: 1; transform: translateY(0); transition: opacity 0.6s ease, transform 0.6s ease; }
//         .mp-header-visible.d2 { transition-delay: 0.15s; }
//         .mp-header-visible.d3 { transition-delay: 0.25s; }

//         .mp-toggles-wrap { display: flex; flex-direction: column; align-items: center; gap: 16px; margin-bottom: 48px; }
//         .mp-toggle-group { display: flex; flex-direction: column; align-items: center; gap: 8px; }
//         .mp-toggle-group-label { font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: #94A3B8; }
//         .mp-toggle-wrap {
//           background: #fff; border: 1px solid #E2E8F0; border-radius: 60px; padding: 6px;
//           display: inline-flex; box-shadow: 0 4px 15px rgba(0,0,0,0.03);
//         }
//         .mp-toggle-btn {
//           display: flex; align-items: center; gap: 8px; padding: 10px 24px; border-radius: 50px;
//           font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 700;
//           cursor: pointer; border: none; background: transparent; color: #64748B;
//           transition: all 0.3s ease; white-space: nowrap; outline: none;
//         }
//         .mp-toggle-btn.active { background: #FF6B2C; color: #fff; box-shadow: 0 4px 15px rgba(255,107,44,0.3); }
//         .mp-toggle-btn:not(.active):hover { background: #F8FAFC; color: #1E293B; }

//         .mp-divider-row { display: flex; align-items: center; gap: 16px; margin: 40px 0 32px; justify-content: center; }
//         .mp-section-title { font-family: 'Fraunces', serif; font-size: 24px; font-weight: 800; color: #1E293B; }
//         .mp-divider-line { flex: 1; height: 1px; background: #E2E8F0; max-width: 200px; }

//         .mp-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
//         @media(min-width:768px) {
//           .mp-grid { grid-template-columns: repeat(2,1fr); gap: 24px; }
//           .mp-toggles-wrap { flex-direction: row; gap: 32px; justify-content: center; }
//         }
//         @media(min-width:1024px) { .mp-grid.three-col { grid-template-columns: repeat(3,1fr); } }

//         .mp-trial {
//           background: #fff; border: 1px solid #E2E8F0; border-radius: 32px;
//           padding: 24px 32px; margin-top: 64px;
//           display: flex; align-items: center; justify-content: space-between; gap: 24px;
//           box-shadow: 0 10px 40px rgba(0,0,0,0.03); flex-wrap: wrap;
//         }
//         .mp-trial-btn {
//           padding: 14px 28px; border-radius: 50px;
//           background: linear-gradient(135deg,#FF6B2C,#E84F00); color: #fff;
//           font-weight: 800; text-decoration: none;
//           display: inline-flex; align-items: center; gap: 8px;
//           transition: all 0.3s ease; white-space: nowrap;
//         }
//         .mp-trial-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(255,107,44,0.35); }
//         @media(max-width:640px) {
//           .mp-trial { flex-direction: column; text-align: center; justify-content: center; padding: 24px; }
//           .mp-trial-btn { width: 100%; justify-content: center; }
//         }
//       `}} />

//       <section id="meal-plans" className="mp-root">
//         <div className="mp-dots" />
//         <ParticleCanvas />
//         <div className="mp-blob" style={{ width: 500, height: 500, background: '#FFD580', top: -100, right: -150 }} />
//         <div className="mp-blob" style={{ width: 400, height: 400, background: '#FF9F6B', bottom: -50, left: -100, animationDelay: '-5s' }} />

//         <div className="mp-container" ref={sectionRef}>

//           {/* HEADER */}
//           <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
//             <h2 className={`mp-heading ${inView ? 'mp-header-visible' : 'mp-header-hidden'}`}>
//               Choose Your Meal Plan
//             </h2>
//             <div
//               className={inView ? 'mp-header-visible d2' : 'mp-header-hidden'}
//               style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, flexWrap: 'wrap', color: '#64748B', fontWeight: 500, fontSize: 14 }}
//             >
//               <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Clock size={16} color="#FF6B2C" /> 6 Days / Week</span>
//               <span>•</span>
//               <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Truck size={16} color="#FF6B2C" /> Free Delivery</span>
//               <span>•</span>
//               <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Star size={16} color="#FF6B2C" /> 26 Days / Month</span>
//             </div>
//           </div>

//           {/* TOGGLES */}
//           <div className={`mp-toggles-wrap ${inView ? 'mp-header-visible d3' : 'mp-header-hidden'}`}>
//             <div className="mp-toggle-group">
//               <span className="mp-toggle-group-label">Diet Preference</span>
//               <div className="mp-toggle-wrap">
//                 <button className={`mp-toggle-btn${foodTab === 'veg' ? ' active' : ''}`} onClick={() => handleFoodTab('veg')}>
//                   <Leaf size={16} /> Veg
//                 </button>
//                 <button className={`mp-toggle-btn${foodTab === 'nonveg' ? ' active' : ''}`} onClick={() => handleFoodTab('nonveg')}>
//                   <Drumstick size={16} /> Non-Veg
//                 </button>
//               </div>
//             </div>
//             <div className="mp-toggle-group">
//               <span className="mp-toggle-group-label">Billing Cycle</span>
//               <div className="mp-toggle-wrap">
//                 <button className={`mp-toggle-btn${durTab === 'weekly' ? ' active' : ''}`} onClick={() => handleDurTab('weekly')}>Weekly</button>
//                 <button className={`mp-toggle-btn${durTab === 'monthly' ? ' active' : ''}`} onClick={() => handleDurTab('monthly')}>Monthly</button>
//               </div>
//             </div>
//           </div>

//           {/* 1 MEAL / DAY */}
//           <div className={`mp-divider-row ${inView ? 'mp-header-visible' : 'mp-header-hidden'}`}>
//             <div className="mp-divider-line" style={{ display: 'none' }} />
//             <span className="mp-section-title">
//               1 Meal / Day{' '}
//               <span style={{ fontSize: 14, fontWeight: 500, color: '#94A3B8', fontFamily: 'Outfit,sans-serif' }}>(Lunch OR Dinner)</span>
//             </span>
//             <div className="mp-divider-line" style={{ display: 'none' }} />
//           </div>

//           <div
//             key={`one-${gridKey}`}
//             className={`mp-grid ${inView ? 'mp-cards-visible' : 'mp-cards-hidden'}`}
//             style={{ maxWidth: 860, margin: '0 auto' }}
//           >
//             {ONE_MEAL_PLANS.map((plan, i) => {
//               const priceVal = durTab === 'weekly' ? plan.weekly[foodTab] : plan.monthly[foodTab];
//               const totalMeals = durTab === 'weekly' ? 6 : 26;
//               const waUrl = buildWhatsAppUrl({ tier: `${plan.tier} – 1 Meal/Day`, type: foodTab === 'veg' ? 'Veg' : 'Non-Veg', price: priceVal, duration: durTab, features: plan.features[foodTab] });
//               return (
//                 <ThaliMealCard
//                   key={plan.tier}
//                   plan={plan}
//                   priceVal={priceVal}
//                   features={plan.features[foodTab]}
//                   waUrl={waUrl}
//                   mealType={durTab === 'weekly' ? 'week' : 'month'}
//                   animIndex={i}
//                   imageSrc={plan.image[foodTab]}
//                   totalMeals={totalMeals}
//                 />
//               );
//             })}
//           </div>

//           {/* 2 MEALS / DAY */}
//           <div className={`mp-divider-row ${inView ? 'mp-header-visible' : 'mp-header-hidden'}`} style={{ marginTop: 64 }}>
//             <span className="mp-section-title">
//               2 Meals / Day{' '}
//               <span style={{ fontSize: 14, fontWeight: 500, color: '#94A3B8', fontFamily: 'Outfit,sans-serif' }}>(Lunch & Dinner)</span>
//             </span>
//           </div>

//           {durTab === 'weekly' && (
//             <p style={{ textAlign: 'center', color: '#FF6B2C', fontWeight: 700, fontSize: 14, marginBottom: 24 }}>
//               * 2-meal plans are available on a monthly basis only.
//             </p>
//           )}

//           <div
//             key={`two-${gridKey}`}
//             className={`mp-grid three-col ${inView ? 'mp-cards-visible' : 'mp-cards-hidden'}`}
//           >
//             {TWO_MEAL_PLANS.map((plan, i) => {
//               const priceVal = plan.monthly[foodTab];
//               const waUrl = buildWhatsAppUrl({ tier: `${plan.tier} – 2 Meals/Day`, type: foodTab === 'veg' ? 'Veg' : 'Non-Veg', price: priceVal, duration: 'monthly', features: plan.features[foodTab] });
//               return (
//                 <ThaliMealCard
//                   key={plan.tier}
//                   plan={plan}
//                   priceVal={priceVal}
//                   features={plan.features[foodTab]}
//                   waUrl={waUrl}
//                   mealType="month"
//                   animIndex={i}
//                   imageSrc={plan.image[foodTab]}
//                   totalMeals={52}
//                 />
//               );
//             })}
//           </div>

//           {/* TRIAL BANNER */}
//           <div className={`mp-trial ${inView ? 'mp-header-visible' : 'mp-header-hidden'}`} style={{ transitionDelay: '0.5s' }}>
//             <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
//               <div style={{ width: 64, height: 64, background: '#FFF4ED', border: '1px solid rgba(255,107,44,0.2)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, flexShrink: 0 }}>🎁</div>
//               <div>
//                 <h4 style={{ fontSize: 18, fontWeight: 900, color: '#1E293B', marginBottom: 4 }}>Want to taste before subscribing?</h4>
//                 <p style={{ color: '#64748B', fontWeight: 500, fontSize: 14 }}>
//                   2-Day Trial · Veg AED 25 · Non-Veg AED 28. No commitment needed 😊
//                 </p>
//               </div>
//             </div>

//             <a
//               href={buildWhatsAppUrl({
//                 tier: "Trial",
//                 type: "Veg",
//                 price: 0,
//                 duration: "weekly",
//                 features: [],
//                 isTrial: true,
//               })}
//               target="_blank"
//               rel="noreferrer"
//               className="mp-trial-btn"
//             >
//               Book a Trial 🍲 <ChevronRight size={18} />
//             </a>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }



'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Leaf, Drumstick, Clock, Truck, Star, ChevronRight } from 'lucide-react';

const WHATSAPP_NUMBER = '+971557998925';

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

const ONE_MEAL_PLANS = [
  {
    tier: 'Half Meal', badge: null,
    weekly: { veg: 125, nonveg: 165 }, monthly: { veg: 469, nonveg: 629 },
    image: { veg: '/chefmom/Basic plan week.png', nonveg: '/chefmom/Basic plan week.png' },
    features: {
      veg: ['1 Dal / Curry', '1 Dry Sabzi', '3 Roti or Rice', 'Salad'],
      nonveg: ['1 Chicken Curry', '1 Dry Sabzi', '3 Roti or Rice', 'Salad'],
    },
  },
  {
    tier: 'Full Meal', badge: '⭐ Best Value',
    weekly: { veg: 145, nonveg: 185 }, monthly: { veg: 569, nonveg: 699 },
    image: { veg: '/chefmom/Basic plan.png', nonveg: '/chefmom/Basic plan.png' },
    features: {
      veg: ['1 Dal / Curry', '1 Dry Sabzi', '3 Roti & Rice', 'Salad & Sweet or Raita'],
      nonveg: ['1 Chicken Curry', '1 Dry Sabzi', '3 Roti & Rice', 'Salad & Sweet or Raita'],
    },
  },
];

const TWO_MEAL_PLANS = [
  {
    tier: 'Basic Plan', badge: null,
    monthly: { veg: 769, nonveg: 949 },
    image: { veg: '/chefmom/Basic plan.png', nonveg: '/chefmom/Basic plan.png' },
    features: {
      veg: ['2 Meals / Day', 'Standard Menu', 'Roti, Rice, Dal, Sabzi, Salad'],
      nonveg: ['2 Meals / Day', 'Standard Menu', 'Chicken 3x a week, Dal, Roti'],
    },
  },
  {
    tier: 'Standard Plan', badge: '⭐ Most Preferred',
    monthly: { veg: 949, nonveg: 1169 },
    image: { veg: '/chefmom/Standard plan.png', nonveg: '/chefmom/Standard plan week.png' },
    features: {
      veg: ['2 Meals / Day', 'Premium Menu', 'Sweet or Raita', 'Flexible Delivery'],
      nonveg: ['2 Meals / Day', 'Premium Menu', 'Chicken', 'Sweet or Raita'],
    },
  },
  {
    tier: 'Premium Plan', badge: null,
    monthly: { veg: 1149, nonveg: 1369 },
    image: { veg: '/chefmom/Premium-Meal.png', nonveg: '/chefmom/Premium-Meal weak.png' },
    features: {
      veg: ['2 Meals / Day', 'Deluxe Menu', '4 Roti & Rice', 'Sweet or Raita', 'Special Weekend Dishes'],
      nonveg: ['2 Meals / Day', 'Deluxe Menu', '4 Roti & Rice', 'Sweet or Raita', 'Special Weekend Dishes'],
    },
  },
];

function ParticleCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    let raf: number;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize();
    window.addEventListener('resize', resize);
    type P = { x: number; y: number; r: number; vx: number; vy: number; alpha: number; color: string };
    const ps: P[] = Array.from({ length: 48 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 3.5 + 0.8, vx: (Math.random() - 0.5) * 0.32,
      vy: -(Math.random() * 0.5 + 0.1), alpha: Math.random() * 0.45 + 0.1,
      color: Math.random() > 0.5 ? '#FF6B2C' : '#F5A623',
    }));
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ps.forEach(p => {
        ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = p.color; ctx.globalAlpha = p.alpha; ctx.fill();
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
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }} />;
}

function ThaliMealCard({
  plan, priceVal, features, waUrl, mealType, animIndex, imageSrc, totalMeals,
}: {
  plan: { tier: string; badge: string | null };
  priceVal: number; features: string[];
  waUrl: string; mealType: string;
  animIndex: number; imageSrc: string; totalMeals: number;
}) {
  const [hovered, setHovered] = useState(false);
  const perMealPrice = Math.round(priceVal / totalMeals);

  const glowStyle: React.CSSProperties = {
    position: 'absolute', inset: '-12px', borderRadius: '50%', zIndex: 0,
    background: 'radial-gradient(circle, rgba(255,107,44,0.22) 0%, transparent 70%)',
    transform: hovered ? 'scale(1.18)' : 'scale(1)',
    transition: 'transform 0.5s ease',
    filter: hovered ? 'blur(0px)' : 'blur(2px)',
  };

  const orbitRingStyle: React.CSSProperties = {
    position: 'absolute', inset: '-6px', borderRadius: '50%', zIndex: 1,
    border: '3px dashed rgba(255,107,44,0.55)',
    animation: hovered ? 'orbitSpin 4s linear infinite' : 'orbitSpin 18s linear infinite',
  };

  const innerWrapStyle: React.CSSProperties = {
    position: 'relative', zIndex: 2, padding: '6px', borderRadius: '50%',
    background: hovered ? 'linear-gradient(135deg,#FFF4ED,#FFE0CC)' : 'transparent',
    transition: 'background 0.4s ease',
    boxShadow: hovered ? '0 0 30px rgba(255,107,44,0.25)' : 'none',
  };

  const imgStyle: React.CSSProperties = {
    width: 200, height: 200, borderRadius: '50%', objectFit: 'cover',
    boxShadow: '0 12px 40px rgba(0,0,0,0.18)',
    transform: hovered ? 'scale(1.07)' : 'scale(1)',
    transition: 'transform 0.5s cubic-bezier(.34,1.56,.64,1)',
    display: 'block',
  };

  const orbitDotWrapStyle: React.CSSProperties = {
    position: 'absolute', top: '50%', left: '50%', zIndex: 4,
    width: 212, height: 212, marginLeft: -106, marginTop: -106,
    animation: hovered ? 'orbitDot 2s linear infinite' : 'orbitDot 6s linear infinite',
    pointerEvents: 'none',
  };

  const priceStickerStyle: React.CSSProperties = {
    background: 'linear-gradient(135deg,#FF6B2C,#E55A1F)', color: '#fff',
    padding: '8px 14px', borderRadius: '4px', fontWeight: 800, fontSize: 11,
    boxShadow: '0 4px 14px rgba(255,107,44,0.45)',
    transform: hovered ? 'rotate(10deg) scale(1.08)' : 'rotate(16deg) scale(1)',
    transition: 'transform 0.4s cubic-bezier(.34,1.56,.64,1)',
    display: 'flex', alignItems: 'center', gap: 6,
  };

  const ctaStyle: React.CSSProperties = {
    width: '100%', maxWidth: 280, color: '#fff', borderRadius: 16,
    padding: '14px 24px', display: 'flex', flexDirection: 'column',
    alignItems: 'center', justifyContent: 'center', textDecoration: 'none',
    background: 'linear-gradient(135deg,#FF6B2C 0%,#E84F00 100%)',
    transition: 'all 0.3s ease',
    boxShadow: hovered ? '0 12px 30px rgba(255,107,44,0.5)' : '0 4px 15px rgba(255,107,44,0.25)',
    transform: hovered ? 'translateY(-3px)' : 'translateY(0)',
  };

  return (
    <div
      className="mp-card-item"
      style={{ animationDelay: `${animIndex * 120}ms` }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div className="flex flex-col items-center text-center p-4 relative">

        {plan.badge && (
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-[#1A0A00] font-black text-xs px-4 py-1.5 rounded-full shadow-md z-20 whitespace-nowrap">
            {plan.badge}
          </div>
        )}

        <div className="relative mb-6" style={{ animation: `floatThali 6s ease-in-out ${animIndex * 0.8}s infinite` }}>
          <div style={glowStyle} />
          <div style={orbitRingStyle} />
          <div style={innerWrapStyle}>
            <img src={imageSrc} alt={plan.tier} style={imgStyle} />
          </div>
          <div style={orbitDotWrapStyle}>
            <div style={{
              position: 'absolute', top: -5, left: '50%',
              width: 10, height: 10, borderRadius: '50%',
              background: '#FF6B2C', boxShadow: '0 0 8px #FF6B2C',
              transform: 'translateX(-50%)',
            }} />
          </div>
          <div className="absolute -top-2 -right-6 z-10" style={priceStickerStyle}>
            <div style={{ width: 6, height: 6, background: '#fff', borderRadius: '50%', opacity: 0.8 }} />
            <div style={{ border: '1px dashed rgba(255,255,255,0.6)', padding: '3px 8px', borderRadius: 3 }}>
              {perMealPrice} AED/Meal
            </div>
          </div>
        </div>

        <h3 style={{ fontFamily: "'Outfit',sans-serif", fontSize: 'clamp(20px,3vw,28px)', fontWeight: 900, color: '#2A3342', marginBottom: 12 }}>
          {plan.tier}
        </h3>

        <p style={{ color: '#64748B', fontSize: 14, fontWeight: 500, maxWidth: 280, lineHeight: 1.7, marginBottom: 24, minHeight: 60 }}>
          {features.join(', ')}
        </p>

        <a href={waUrl} target="_blank" rel="noreferrer" style={ctaStyle}>
          <span style={{ fontSize: 'clamp(18px,3vw,24px)', fontWeight: 900 }}>
            AED {priceVal} <span style={{ fontSize: 13, fontWeight: 500, opacity: 0.9 }}>/ {mealType}</span>
          </span>
          <span style={{ fontSize: 12, fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.08em', marginTop: 2, display: 'flex', alignItems: 'center', gap: 4 }}>
            Order Now <ChevronRight size={14} />
          </span>
        </a>

      </div>
    </div>
  );
}

export default function MealPlans() {
  const [foodTab, setFoodTab] = useState<'veg' | 'nonveg'>('veg');
  const [durTab, setDurTab] = useState<'weekly' | 'monthly'>('weekly');
  const [inView, setInView] = useState(false);
  const [gridKey, setGridKey] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight && rect.bottom > 0) {
      setInView(true);
      return;
    }
    const obs = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setInView(true); obs.disconnect(); } },
      { threshold: 0.05, rootMargin: '0px 0px -40px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const handleFoodTab = (val: 'veg' | 'nonveg') => {
    if (val === foodTab) return;
    setFoodTab(val);
    setGridKey(k => k + 1);
  };
  const handleDurTab = (val: 'weekly' | 'monthly') => {
    if (val === durTab) return;
    setDurTab(val);
    setGridKey(k => k + 1);
  };

  return (
    <>
      <style dangerouslySetInnerHTML={{
        __html: `
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,600;0,800;1,700&family=Outfit:wght@300;400;500;700;900&display=swap');

        .mp-root *, .mp-root *::before, .mp-root *::after { box-sizing: border-box; }
        .mp-root {
          font-family: 'Outfit', sans-serif;
          background: #FCFAF6;
          position: relative; overflow: hidden; padding: 60px 0 80px;
        }
        .mp-dots {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(255,107,44,0.1) 1.5px, transparent 1.5px);
          background-size: 28px 28px; pointer-events: none; z-index: 0;
          animation: mpDotsPulse 6s ease-in-out infinite;
        }
        @keyframes mpDotsPulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
        .mp-blob {
          position: absolute; border-radius: 50%; filter: blur(80px);
          opacity: 0.15; pointer-events: none;
          animation: mpBlobDrift 15s ease-in-out infinite alternate;
        }
        @keyframes mpBlobDrift { 0%{transform:translate(0,0) scale(1)} 100%{transform:translate(50px,-30px) scale(1.1)} }

        @keyframes cardSlideUp {
          from { opacity: 0; transform: translateY(44px) scale(0.96); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }
        .mp-cards-hidden .mp-card-item { opacity: 0; }
        .mp-cards-visible .mp-card-item {
          animation: cardSlideUp 0.65s cubic-bezier(.16,1,.3,1) both;
        }

        @keyframes floatThali  { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-14px)} }
        @keyframes orbitSpin   { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        @keyframes orbitDot    { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }

        .mp-container { max-width: 1200px; margin: 0 auto; padding: 0 24px; position: relative; z-index: 5; }

        .mp-heading {
          font-family: 'Fraunces', serif;
          font-size: clamp(32px,6vw,56px); font-weight: 800; color: #1A0A00;
          line-height: 1.1; letter-spacing: -0.5px; margin: 0 0 16px;
        }

        .mp-header-hidden { opacity: 0; transform: translateY(20px); }
        .mp-header-visible { opacity: 1; transform: translateY(0); transition: opacity 0.6s ease, transform 0.6s ease; }
        .mp-header-visible.d2 { transition-delay: 0.15s; }
        .mp-header-visible.d3 { transition-delay: 0.25s; }

        .mp-toggles-wrap { display: flex; flex-direction: column; align-items: center; gap: 16px; margin-bottom: 48px; }
        .mp-toggle-group { display: flex; flex-direction: column; align-items: center; gap: 8px; }
        .mp-toggle-group-label { font-size: 11px; font-weight: 800; letter-spacing: 2px; text-transform: uppercase; color: #94A3B8; }
        .mp-toggle-wrap {
          background: #fff; border: 1px solid #E2E8F0; border-radius: 60px; padding: 6px;
          display: inline-flex; box-shadow: 0 4px 15px rgba(0,0,0,0.03);
        }
        .mp-toggle-btn {
          display: flex; align-items: center; gap: 8px; padding: 10px 24px; border-radius: 50px;
          font-family: 'Outfit', sans-serif; font-size: 14px; font-weight: 700;
          cursor: pointer; border: none; background: transparent; color: #64748B;
          transition: all 0.3s ease; white-space: nowrap; outline: none;
        }
        .mp-toggle-btn.active { background: #FF6B2C; color: #fff; box-shadow: 0 4px 15px rgba(255,107,44,0.3); }
        .mp-toggle-btn:not(.active):hover { background: #F8FAFC; color: #1E293B; }

        .mp-divider-row { display: flex; align-items: center; gap: 16px; margin: 40px 0 32px; justify-content: center; }
        .mp-section-title { font-family: 'Fraunces', serif; font-size: 24px; font-weight: 800; color: #1E293B; }
        .mp-divider-line { flex: 1; height: 1px; background: #E2E8F0; max-width: 200px; }

        .mp-grid { display: grid; grid-template-columns: 1fr; gap: 40px; }
        @media(min-width:768px) {
          .mp-grid { grid-template-columns: repeat(2,1fr); gap: 24px; }
          .mp-toggles-wrap { flex-direction: row; gap: 32px; justify-content: center; }
        }
        @media(min-width:1024px) { .mp-grid.three-col { grid-template-columns: repeat(3,1fr); } }

        .mp-trial {
          background: #fff; border: 1px solid #E2E8F0; border-radius: 32px;
          padding: 24px 32px; margin-top: 64px;
          display: flex; align-items: center; justify-content: space-between; gap: 24px;
          box-shadow: 0 10px 40px rgba(0,0,0,0.03); flex-wrap: wrap;
        }
        .mp-trial-btn {
          padding: 14px 28px; border-radius: 50px;
          background: linear-gradient(135deg,#FF6B2C,#E84F00); color: #fff;
          font-weight: 800; text-decoration: none;
          display: inline-flex; align-items: center; gap: 8px;
          transition: all 0.3s ease; white-space: nowrap;
        }
        .mp-trial-btn:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(255,107,44,0.35); }
        @media(max-width:640px) {
          .mp-trial { flex-direction: column; text-align: center; justify-content: center; padding: 24px; }
          .mp-trial-btn { width: 100%; justify-content: center; }
        }
      `}} />

      <section id="meal-plans" className="mp-root">
        <div className="mp-dots" />
        <ParticleCanvas />
        <div className="mp-blob" style={{ width: 500, height: 500, background: '#FFD580', top: -100, right: -150 }} />
        <div className="mp-blob" style={{ width: 400, height: 400, background: '#FF9F6B', bottom: -50, left: -100, animationDelay: '-5s' }} />

        <div className="mp-container" ref={sectionRef}>

          {/* HEADER */}
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <h2 className={`mp-heading ${inView ? 'mp-header-visible' : 'mp-header-hidden'}`}>
              Choose Your Meal Plan
            </h2>
            <div
              className={inView ? 'mp-header-visible d2' : 'mp-header-hidden'}
              style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 16, flexWrap: 'wrap', color: '#64748B', fontWeight: 500, fontSize: 14 }}
            >
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Clock size={16} color="#FF6B2C" /> 6 Days / Week</span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Truck size={16} color="#FF6B2C" /> Free Delivery</span>
              <span>•</span>
              <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><Star size={16} color="#FF6B2C" /> 26 Days / Month</span>
            </div>
          </div>

          {/* TOGGLES */}
          <div className={`mp-toggles-wrap ${inView ? 'mp-header-visible d3' : 'mp-header-hidden'}`}>
            <div className="mp-toggle-group">
              <span className="mp-toggle-group-label">Diet Preference</span>
              <div className="mp-toggle-wrap">
                <button className={`mp-toggle-btn${foodTab === 'veg' ? ' active' : ''}`} onClick={() => handleFoodTab('veg')}>
                  <Leaf size={16} /> Veg
                </button>
                <button className={`mp-toggle-btn${foodTab === 'nonveg' ? ' active' : ''}`} onClick={() => handleFoodTab('nonveg')}>
                  <Drumstick size={16} /> Non-Veg
                </button>
              </div>
            </div>
            <div className="mp-toggle-group">
              <span className="mp-toggle-group-label">Billing Cycle</span>
              <div className="mp-toggle-wrap">
                <button className={`mp-toggle-btn${durTab === 'weekly' ? ' active' : ''}`} onClick={() => handleDurTab('weekly')}>Weekly</button>
                <button className={`mp-toggle-btn${durTab === 'monthly' ? ' active' : ''}`} onClick={() => handleDurTab('monthly')}>Monthly</button>
              </div>
            </div>
          </div>

          {/* 1 MEAL / DAY */}
          <div className={`mp-divider-row ${inView ? 'mp-header-visible' : 'mp-header-hidden'}`}>
            <div className="mp-divider-line" style={{ display: 'none' }} />
            <span className="mp-section-title">
              1 Meal / Day{' '}
              <span style={{ fontSize: 14, fontWeight: 500, color: '#94A3B8', fontFamily: 'Outfit,sans-serif' }}>(Lunch OR Dinner)</span>
            </span>
            <div className="mp-divider-line" style={{ display: 'none' }} />
          </div>

          <div
            key={`one-${gridKey}`}
            className={`mp-grid ${inView ? 'mp-cards-visible' : 'mp-cards-hidden'}`}
            style={{ maxWidth: 860, margin: '0 auto' }}
          >
            {ONE_MEAL_PLANS.map((plan, i) => {
              const priceVal = durTab === 'weekly' ? plan.weekly[foodTab] : plan.monthly[foodTab];
              const totalMeals = durTab === 'weekly' ? 6 : 26;
              const waUrl = buildWhatsAppUrl({ tier: `${plan.tier} – 1 Meal/Day`, type: foodTab === 'veg' ? 'Veg' : 'Non-Veg', price: priceVal, duration: durTab, features: plan.features[foodTab] });
              return (
                <ThaliMealCard
                  key={plan.tier}
                  plan={plan}
                  priceVal={priceVal}
                  features={plan.features[foodTab]}
                  waUrl={waUrl}
                  mealType={durTab === 'weekly' ? 'week' : 'month'}
                  animIndex={i}
                  imageSrc={plan.image[foodTab]}
                  totalMeals={totalMeals}
                />
              );
            })}
          </div>

          {/* 2 MEALS / DAY */}
          <div className={`mp-divider-row ${inView ? 'mp-header-visible' : 'mp-header-hidden'}`} style={{ marginTop: 64 }}>
            <span className="mp-section-title">
              2 Meals / Day{' '}
              <span style={{ fontSize: 14, fontWeight: 500, color: '#94A3B8', fontFamily: 'Outfit,sans-serif' }}>(Lunch & Dinner)</span>
            </span>
          </div>

          {durTab === 'weekly' && (
            <p style={{ textAlign: 'center', color: '#FF6B2C', fontWeight: 700, fontSize: 14, marginBottom: 24 }}>
              * 2-meal plans are available on a monthly basis only.
            </p>
          )}

          <div
            key={`two-${gridKey}`}
            className={`mp-grid three-col ${inView ? 'mp-cards-visible' : 'mp-cards-hidden'}`}
          >
            {TWO_MEAL_PLANS.map((plan, i) => {
              const priceVal = plan.monthly[foodTab];
              const waUrl = buildWhatsAppUrl({ tier: `${plan.tier} – 2 Meals/Day`, type: foodTab === 'veg' ? 'Veg' : 'Non-Veg', price: priceVal, duration: 'monthly', features: plan.features[foodTab] });
              return (
                <ThaliMealCard
                  key={plan.tier}
                  plan={plan}
                  priceVal={priceVal}
                  features={plan.features[foodTab]}
                  waUrl={waUrl}
                  mealType="month"
                  animIndex={i}
                  imageSrc={plan.image[foodTab]}
                  totalMeals={52}
                />
              );
            })}
          </div>

          {/* TRIAL BANNER */}
          <div className={`mp-trial ${inView ? 'mp-header-visible' : 'mp-header-hidden'}`} style={{ transitionDelay: '0.5s' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
              <div style={{ width: 64, height: 64, background: '#FFF4ED', border: '1px solid rgba(255,107,44,0.2)', borderRadius: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, flexShrink: 0 }}>🎁</div>
              <div>
                <h4 style={{ fontSize: 18, fontWeight: 900, color: '#1E293B', marginBottom: 4 }}>Want to taste before subscribing?</h4>
                <p style={{ color: '#64748B', fontWeight: 500, fontSize: 14 }}>
                  2-Day Trial · Veg AED 25 · Non-Veg AED 28. No commitment needed 😊
                </p>
              </div>
            </div>

            <a
              href={buildWhatsAppUrl({
                tier: "Trial",
                type: "Veg",
                price: 0,
                duration: "weekly",
                features: [],
                isTrial: true,
              })}
              target="_blank"
              rel="noreferrer"
              className="mp-trial-btn"
            >
              Book a Trial 🍲 <ChevronRight size={18} />
            </a>
          </div>

        </div>
      </section>
    </>
  );
}