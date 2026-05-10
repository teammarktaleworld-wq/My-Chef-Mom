// 'use client';

// import React, { useEffect, useRef, useState } from 'react';

// /* ─────────────────────────────────────────────
//    REVIEWS DATA
// ───────────────────────────────────────────── */
// const REVIEWS = [
//   {
//     name: 'Priya Sharma',
//     location: 'Bur Dubai',
//     avatar: '👩',
//     rating: 5,
//     plan: 'Standard Veg Plan',
//     text: 'Bilkul ghar jaisa khana! After moving to Dubai 2 years ago, I was missing my mom\'s cooking so much. The dal makhani and roti here taste exactly like home. Delivery is always on time and the portions are generous. Highly recommend!',
//     dish: '🍛',
//     dishLabel: 'Dal Makhani',
//     since: 'Customer since Jan 2024',
//   },
//   {
//     name: 'Rajesh Kumar',
//     location: 'Deira',
//     avatar: '👨',
//     rating: 5,
//     plan: 'Premium Non-Veg Plan',
//     text: 'Best chicken curry I have had outside India! My whole family loves the food — the kids especially love the sweets that come with the premium plan. Fresh, less oil, and the taste is authentic North Indian. Worth every dirham!',
//     dish: '🍗',
//     dishLabel: 'Chicken Curry',
//     since: 'Customer since Mar 2024',
//   },
//   {
//     name: 'Ananya Verma',
//     location: 'Jumeirah Village Circle',
//     avatar: '👩',
//     rating: 5,
//     plan: 'Basic Veg Plan',
//     text: 'As a working professional, cooking was always a struggle after long office hours. The Chef Mom has been a lifesaver! Healthy, hygienic, and delicious. The roti is always soft and the sabzi changes daily so I never get bored.',
//     dish: '🫓',
//     dishLabel: 'Fresh Rotis',
//     since: 'Customer since Nov 2023',
//   },
//   {
//     name: 'Suresh Nair',
//     location: 'Al Nahda',
//     avatar: '👨',
//     rating: 5,
//     plan: 'Standard Non-Veg Plan',
//     text: 'I tried the 2-day trial and was so impressed that I immediately subscribed for the monthly plan! The biryani on special days is outstanding. Packaging is neat, delivery is punctual. This is exactly what we needed in Dubai.',
//     dish: '🍲',
//     dishLabel: 'Biryani Special',
//     since: 'Customer since Feb 2024',
//   },
//   {
//     name: 'Meera Patel',
//     location: 'International City',
//     avatar: '👩',
//     rating: 5,
//     plan: 'Premium Veg Plan',
//     text: 'The chaach included in the premium plan is such a lovely touch — reminds me of Rajasthan! The food is cooked with so much love, you can literally taste the care. Sweets every day make my evenings special. Thank you Chef Mom! ❤️',
//     dish: '🥛',
//     dishLabel: 'Buttermilk & Sweets',
//     since: 'Customer since Oct 2023',
//   },
//   {
//     name: 'Vikram Singh',
//     location: 'Silicon Oasis',
//     avatar: '👨',
//     rating: 5,
//     plan: 'Basic Non-Veg Plan',
//     text: 'Moved from Delhi 6 months ago and was craving North Indian food badly. Found The Chef Mom and honestly it is the best decision I made! Egg curry, dal, fresh roti — everything is spot on. Even my friends from the office order now!',
//     dish: '🥚',
//     dishLabel: 'Egg Curry',
//     since: 'Customer since Apr 2024',
//   },
// ];

// /* ─────────────────────────────────────────────
//    FLOATING DISHES (background deco)
// ───────────────────────────────────────────── */
// const FLOATING_DISHES = [
//   { emoji: '🍛', size: 48, top: '8%', left: '3%', delay: '0s', duration: '6s' },
//   { emoji: '🫓', size: 36, top: '15%', right: '4%', delay: '-2s', duration: '8s' },
//   { emoji: '🍲', size: 52, top: '55%', left: '1%', delay: '-4s', duration: '7s' },
//   { emoji: '🌶️', size: 30, top: '70%', right: '2%', delay: '-1s', duration: '9s' },
//   { emoji: '🍗', size: 42, top: '35%', right: '1%', delay: '-5s', duration: '6.5s' },
//   { emoji: '🥛', size: 32, top: '85%', left: '4%', delay: '-3s', duration: '7.5s' },
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
//    STAR RATING
// ───────────────────────────────────────────── */
// function Stars({ count }: { count: number }) {
//   return (
//     <div style={{ display: 'flex', gap: 2 }}>
//       {Array.from({ length: count }).map((_, i) => (
//         <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FF6B2C">
//           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//         </svg>
//       ))}
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    COMPONENT
// ───────────────────────────────────────────── */
// export default function ReviewsSection() {
//   const { ref: sectionRef, inView } = useInView(0.05);
//   const [activeIndex, setActiveIndex] = useState<number | null>(null);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

//         /* ─ Root ─ */
//         .rv-root {
//           font-family: 'DM Sans', sans-serif;
//           background: linear-gradient(160deg, #1A0A00 0%, #2D1200 40%, #1A0A00 100%);
//           position: relative;
//           overflow: hidden;
//           padding: 80px 0 100px;
//         }

//         /* ─ Blobs ─ */
//         .rv-blob {
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(100px);
//           opacity: 0.15;
//           pointer-events: none;
//           animation: rvBlobDrift 10s ease-in-out infinite;
//         }
//         @keyframes rvBlobDrift {
//           0%,100% { transform: translate(0,0) scale(1); }
//           40%      { transform: translate(30px,-25px) scale(1.06); }
//           70%      { transform: translate(-20px,22px) scale(0.93); }
//         }

//         /* ─ Dot pattern ─ */
//         .rv-dots {
//           position: absolute;
//           inset: 0;
//           background-image: radial-gradient(circle, rgba(255,107,44,0.08) 1px, transparent 1px);
//           background-size: 36px 36px;
//           pointer-events: none;
//           z-index: 0;
//         }

//         /* ─ Floating dishes ─ */
//         .rv-float-dish {
//           position: absolute;
//           pointer-events: none;
//           z-index: 1;
//           animation: rvDishFloat var(--duration, 7s) ease-in-out var(--delay, 0s) infinite;
//           filter: drop-shadow(0 4px 12px rgba(255,107,44,0.15));
//           display: none; /* hidden mobile, shown desktop */
//         }
//         @keyframes rvDishFloat {
//           0%,100% { transform: translateY(0) rotate(-3deg) scale(1); }
//           30%      { transform: translateY(-18px) rotate(2deg) scale(1.04); }
//           60%      { transform: translateY(-8px) rotate(-1deg) scale(0.97); }
//         }

//         /* ─ Eyebrow ─ */
//         .rv-eyebrow {
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           background: rgba(255,107,44,0.12);
//           border: 1px solid rgba(255,107,44,0.3);
//           border-radius: 50px;
//           padding: 6px 16px;
//           font-size: 11px;
//           font-weight: 600;
//           color: #FF6B2C;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           margin-bottom: 14px;
//         }

//         /* ─ Heading ─ */
//         .rv-heading {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(28px, 5vw, 54px);
//           font-weight: 900;
//           color: #FFF8F0;
//           line-height: 1.08;
//           letter-spacing: -1px;
//           margin: 0 0 14px;
//         }
//         .rv-heading em {
//           font-style: italic;
//           color: #FF6B2C;
//           position: relative;
//         }
//         .rv-heading em::after {
//           content: '';
//           position: absolute;
//           bottom: 2px; left: 0; right: 0;
//           height: 3px;
//           background: linear-gradient(90deg, #FF6B2C, #F5A623);
//           border-radius: 2px;
//           transform: scaleX(0);
//           transform-origin: left;
//           transition: transform 1s cubic-bezier(.16,1,.3,1) 0.5s;
//         }
//         .rv-root.visible .rv-heading em::after { transform: scaleX(1); }

//         /* ─ Container ─ */
//         .rv-container {
//           max-width: 1200px;
//           margin: 0 auto;
//           padding: 0 16px;
//           position: relative;
//           z-index: 5;
//         }

//         /* ─ Cards grid ─ */
//         .rv-grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 18px;
//           margin-top: 44px;
//         }

//         /* ─ Review Card ─ */
//         .rv-card {
//           background: rgba(255,255,255,0.04);
//           border: 1px solid rgba(255,255,255,0.08);
//           border-radius: 22px;
//           padding: 24px;
//           position: relative;
//           overflow: hidden;
//           transition: all 0.38s cubic-bezier(.34,1.56,.64,1);
//           cursor: default;
//           backdrop-filter: blur(10px);
//         }
//         .rv-card::before {
//           content: '';
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(135deg, rgba(255,107,44,0.06) 0%, transparent 60%);
//           opacity: 0;
//           transition: opacity 0.35s ease;
//           border-radius: inherit;
//         }
//         .rv-card:hover {
//           background: rgba(255,255,255,0.07);
//           border-color: rgba(255,107,44,0.35);
//           transform: translateY(-6px) scale(1.01);
//           box-shadow: 0 20px 60px rgba(255,107,44,0.14), 0 0 0 1px rgba(255,107,44,0.15);
//         }
//         .rv-card:hover::before { opacity: 1; }

//         /* ─ Quote mark ─ */
//         .rv-quote-mark {
//           position: absolute;
//           top: 16px;
//           right: 20px;
//           font-family: 'Playfair Display', serif;
//           font-size: 72px;
//           line-height: 1;
//           color: rgba(255,107,44,0.12);
//           font-weight: 900;
//           pointer-events: none;
//           user-select: none;
//           transition: color 0.35s ease;
//         }
//         .rv-card:hover .rv-quote-mark { color: rgba(255,107,44,0.22); }

//         /* ─ Dish badge (hover reveal) ─ */
//         .rv-dish-badge {
//           position: absolute;
//           bottom: 18px;
//           right: 18px;
//           background: rgba(255,107,44,0.12);
//           border: 1px solid rgba(255,107,44,0.25);
//           border-radius: 12px;
//           padding: 6px 10px;
//           display: flex;
//           align-items: center;
//           gap: 6px;
//           font-size: 11px;
//           font-weight: 600;
//           color: #FF9F6B;
//           opacity: 0;
//           transform: translateY(6px) scale(0.95);
//           transition: all 0.35s cubic-bezier(.34,1.56,.64,1);
//           pointer-events: none;
//         }
//         .rv-card:hover .rv-dish-badge {
//           opacity: 1;
//           transform: translateY(0) scale(1);
//         }

//         /* ─ Avatar ─ */
//         .rv-avatar {
//           width: 46px;
//           height: 46px;
//           border-radius: 50%;
//           background: linear-gradient(135deg, #FF6B2C22, #F5A62322);
//           border: 2px solid rgba(255,107,44,0.3);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           font-size: 22px;
//           flex-shrink: 0;
//           transition: all 0.35s cubic-bezier(.34,1.56,.64,1);
//         }
//         .rv-card:hover .rv-avatar {
//           border-color: #FF6B2C;
//           background: rgba(255,107,44,0.15);
//           transform: scale(1.08);
//         }

//         /* ─ Plan pill ─ */
//         .rv-plan-pill {
//           display: inline-block;
//           background: rgba(255,107,44,0.1);
//           border: 1px solid rgba(255,107,44,0.2);
//           border-radius: 50px;
//           padding: 3px 10px;
//           font-size: 10px;
//           font-weight: 600;
//           color: #FF9F6B;
//           letter-spacing: 0.5px;
//           margin-bottom: 10px;
//           white-space: nowrap;
//         }

//         /* ─ Text ─ */
//         .rv-text {
//           font-size: 13.5px;
//           color: rgba(255,248,240,0.7);
//           line-height: 1.75;
//           font-weight: 400;
//           position: relative;
//           z-index: 1;
//           margin-bottom: 36px; /* space for dish badge */
//         }

//         /* ─ Name ─ */
//         .rv-name {
//           font-weight: 700;
//           font-size: 15px;
//           color: #FFF8F0;
//         }
//         .rv-location {
//           font-size: 12px;
//           color: rgba(255,248,240,0.45);
//           margin-top: 1px;
//         }
//         .rv-since {
//           font-size: 10px;
//           color: rgba(255,107,44,0.6);
//           margin-top: 3px;
//           font-weight: 500;
//         }

//         /* ─ Summary bar ─ */
//         .rv-summary {
//           background: rgba(255,255,255,0.04);
//           border: 1px solid rgba(255,107,44,0.15);
//           border-radius: 20px;
//           padding: 20px 24px;
//           display: flex;
//           align-items: center;
//           justify-content: space-around;
//           gap: 16px;
//           margin-top: 56px;
//           flex-wrap: wrap;
//         }
//         .rv-summary-item {
//           text-align: center;
//         }
//         .rv-summary-num {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(24px, 4vw, 36px);
//           font-weight: 900;
//           color: #FF6B2C;
//           line-height: 1;
//           margin-bottom: 4px;
//         }
//         .rv-summary-lbl {
//           font-size: 11px;
//           color: rgba(255,248,240,0.5);
//           font-weight: 500;
//           letter-spacing: 0.5px;
//           text-transform: uppercase;
//         }
//         .rv-summary-divider {
//           width: 1px;
//           height: 40px;
//           background: rgba(255,107,44,0.15);
//           flex-shrink: 0;
//         }

//         /* ─ Fade animations ─ */
//         .rv-fade { opacity: 0; transform: translateY(28px); transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1); }
//         .rv-root.visible .rv-fade { opacity: 1; transform: translateY(0); }
//         .rv-fade-d1 { transition-delay: 0.08s; }
//         .rv-fade-d2 { transition-delay: 0.16s; }
//         .rv-fade-d3 { transition-delay: 0.24s; }
//         .rv-fade-d4 { transition-delay: 0.32s; }
//         .rv-fade-d5 { transition-delay: 0.40s; }
//         .rv-fade-d6 { transition-delay: 0.48s; }
//         .rv-fade-d7 { transition-delay: 0.56s; }

//         /* ─ Stagger cards ─ */
//         .rv-root.visible .rv-card-0 { animation: rvCardIn 0.6s cubic-bezier(.16,1,.3,1) 0.30s both; }
//         .rv-root.visible .rv-card-1 { animation: rvCardIn 0.6s cubic-bezier(.16,1,.3,1) 0.40s both; }
//         .rv-root.visible .rv-card-2 { animation: rvCardIn 0.6s cubic-bezier(.16,1,.3,1) 0.50s both; }
//         .rv-root.visible .rv-card-3 { animation: rvCardIn 0.6s cubic-bezier(.16,1,.3,1) 0.60s both; }
//         .rv-root.visible .rv-card-4 { animation: rvCardIn 0.6s cubic-bezier(.16,1,.3,1) 0.70s both; }
//         .rv-root.visible .rv-card-5 { animation: rvCardIn 0.6s cubic-bezier(.16,1,.3,1) 0.80s both; }
//         @keyframes rvCardIn {
//           from { opacity: 0; transform: translateY(32px) scale(0.97); }
//           to   { opacity: 1; transform: translateY(0) scale(1); }
//         }

//         /* ═══════════════════════════════
//            RESPONSIVE
//         ═══════════════════════════════ */

//         /* XS ≤360 */
//         @media (max-width: 360px) {
//           .rv-root { padding: 56px 0 72px; }
//           .rv-container { padding: 0 12px; }
//           .rv-card { padding: 18px 14px 20px; }
//           .rv-text { font-size: 12.5px; margin-bottom: 28px; }
//           .rv-heading { font-size: 26px; letter-spacing: -0.5px; }
//           .rv-summary { padding: 16px 12px; gap: 10px; }
//           .rv-summary-divider { display: none; }
//         }

//         /* SM 361–559 */
//         @media (min-width: 361px) and (max-width: 559px) {
//           .rv-root { padding: 64px 0 80px; }
//           .rv-card { padding: 20px 18px 22px; }
//         }

//         /* MD 560–767 — 2 cols */
//         @media (min-width: 560px) {
//           .rv-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
//         }

//         /* LG 900+ — 3 cols + floating dishes */
//         @media (min-width: 900px) {
//           .rv-root { padding: 90px 0 110px; }
//           .rv-container { padding: 0 32px; }
//           .rv-grid { grid-template-columns: repeat(3, 1fr); gap: 22px; }
//           .rv-float-dish { display: block; }
//         }

//         /* XL 1200+ */
//         @media (min-width: 1200px) {
//           .rv-container { padding: 0 48px; }
//           .rv-card { padding: 28px 26px 26px; }
//           .rv-text { font-size: 14px; }
//         }
//       `}</style>

//       <section
//         id="reviews"
//         ref={sectionRef}
//         className={`rv-root${inView ? ' visible' : ''}`}
//       >
//         {/* Blobs */}
//         <div className="rv-blob" style={{ width: 500, height: 500, background: '#FF6B2C', top: -100, right: -120, animationDelay: '0s' }} />
//         <div className="rv-blob" style={{ width: 400, height: 400, background: '#F5A623', bottom: -80, left: -100, animationDelay: '-5s' }} />
//         <div className="rv-blob" style={{ width: 300, height: 300, background: '#E84A1A', top: '45%', left: '40%', animationDelay: '-3s' }} />

//         {/* Dot pattern */}
//         <div className="rv-dots" />

//         {/* Floating dishes — desktop only via CSS */}
//         {FLOATING_DISHES.map((d, i) => (
//           <div
//             key={i}
//             className="rv-float-dish"
//             style={{
//               fontSize: d.size,
//               top: d.top,
//               left: (d as any).left,
//               right: (d as any).right,
//               '--delay': d.delay,
//               '--duration': d.duration,
//             } as React.CSSProperties}
//           >
//             {d.emoji}
//           </div>
//         ))}

//         <div className="rv-container">

//           {/* ── HEADER ── */}
//           <div style={{ textAlign: 'center', marginBottom: 8 }}>
//             <div className="rv-fade rv-fade-d1">
//               <span className="rv-eyebrow">
//                 <svg width="11" height="11" viewBox="0 0 24 24" fill="#FF6B2C"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
//                 Customer Reviews
//               </span>
//             </div>

//             <h2 className="rv-heading rv-fade rv-fade-d2">
//               What Our <em>Families</em> Say
//             </h2>

//             <p className="rv-fade rv-fade-d3" style={{ fontSize: 15, color: 'rgba(255,248,240,0.55)', lineHeight: 1.7, margin: '0 auto', maxWidth: 460 }}>
//               Real reviews from Indians living in Dubai — who found their <strong style={{ color: 'rgba(255,248,240,0.8)' }}>ghar ka khana</strong> with us 🏠
//             </p>
//           </div>

//           {/* ── CARDS ── */}
//           <div className="rv-grid">
//             {REVIEWS.map((review, i) => (
//               <div
//                 key={review.name}
//                 className={`rv-card rv-card-${i}`}
//                 onMouseEnter={() => setActiveIndex(i)}
//                 onMouseLeave={() => setActiveIndex(null)}
//               >
//                 {/* Big quote mark */}
//                 <div className="rv-quote-mark">"</div>

//                 {/* Plan pill */}
//                 <div className="rv-plan-pill">{review.plan}</div>

//                 {/* Stars */}
//                 <div style={{ marginBottom: 10 }}>
//                   <Stars count={review.rating} />
//                 </div>

//                 {/* Review text */}
//                 <p className="rv-text">"{review.text}"</p>

//                 {/* Reviewer info */}
//                 <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative', zIndex: 1 }}>
//                   <div className="rv-avatar">{review.avatar}</div>
//                   <div>
//                     <div className="rv-name">{review.name}</div>
//                     <div className="rv-location">📍 {review.location}</div>
//                     <div className="rv-since">{review.since}</div>
//                   </div>
//                 </div>

//                 {/* Floating dish badge (hover) */}
//                 <div className="rv-dish-badge">
//                   <span style={{ fontSize: 16 }}>{review.dish}</span>
//                   <span>{review.dishLabel}</span>
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* ── SUMMARY BAR ── */}
//           <div className="rv-fade rv-fade-d7">
//             <div className="rv-summary">
//               {[
//                 { num: '500+', label: 'Happy Families' },
//                 { num: '4.9★', label: 'Average Rating' },
//                 { num: '3+', label: 'Years in Dubai' },
//                 { num: '26', label: 'Days / Month' },
//               ].map((item, i, arr) => (
//                 <React.Fragment key={item.label}>
//                   <div className="rv-summary-item">
//                     <div className="rv-summary-num">{item.num}</div>
//                     <div className="rv-summary-lbl">{item.label}</div>
//                   </div>
//                   {i < arr.length - 1 && <div className="rv-summary-divider" />}
//                 </React.Fragment>
//               ))}
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }







'use client';

import React, { useEffect, useRef, useState } from 'react';

const REVIEWS = [
  {
    name: 'Priya Sharma',
    location: 'Bur Dubai',
    avatar: '👩',
    rating: 5,
    plan: 'Standard Veg Plan',
    text: 'Bilkul ghar jaisa khana! After moving to Dubai 2 years ago, I was missing my mom\'s cooking so much. The dal makhani and roti here taste exactly like home. Delivery is always on time and the portions are generous. Highly recommend!',
    dish: '🍛',
    dishLabel: 'Dal Makhani',
    since: 'Customer since Jan 2024',
  },
  {
    name: 'Rajesh Kumar',
    location: 'Deira',
    avatar: '👨',
    rating: 5,
    plan: 'Premium Non-Veg Plan',
    text: 'Best chicken curry I have had outside India! My whole family loves the food — the kids especially love the sweets that come with the premium plan. Fresh, less oil, and the taste is authentic North Indian. Worth every dirham!',
    dish: '🍗',
    dishLabel: 'Chicken Curry',
    since: 'Customer since Mar 2024',
  },
  {
    name: 'Ananya Verma',
    location: 'Jumeirah Village Circle',
    avatar: '👩',
    rating: 5,
    plan: 'Basic Veg Plan',
    text: 'As a working professional, cooking was always a struggle after long office hours. The Chef Mom has been a lifesaver! Healthy, hygienic, and delicious. The roti is always soft and the sabzi changes daily so I never get bored.',
    dish: '🫓',
    dishLabel: 'Fresh Rotis',
    since: 'Customer since Nov 2023',
  },
  {
    name: 'Suresh Nair',
    location: 'Al Nahda',
    avatar: '👨',
    rating: 5,
    plan: 'Standard Non-Veg Plan',
    text: 'I tried the 2-day trial and was so impressed that I immediately subscribed for the monthly plan! The biryani on special days is outstanding. Packaging is neat, delivery is punctual. This is exactly what we needed in Dubai.',
    dish: '🍲',
    dishLabel: 'Biryani Special',
    since: 'Customer since Feb 2024',
  },
  {
    name: 'Meera Patel',
    location: 'International City',
    avatar: '👩',
    rating: 5,
    plan: 'Premium Veg Plan',
    text: 'The chaach included in the premium plan is such a lovely touch — reminds me of Rajasthan! The food is cooked with so much love, you can literally taste the care. Sweets every day make my evenings special. Thank you Chef Mom! ❤️',
    dish: '🥛',
    dishLabel: 'Buttermilk & Sweets',
    since: 'Customer since Oct 2023',
  },
  {
    name: 'Vikram Singh',
    location: 'Silicon Oasis',
    avatar: '👨',
    rating: 5,
    plan: 'Basic Non-Veg Plan',
    text: 'Moved from Delhi 6 months ago and was craving North Indian food badly. Found The Chef Mom and honestly it is the best decision I made! Egg curry, dal, fresh roti — everything is spot on. Even my friends from the office order now!',
    dish: '🥚',
    dishLabel: 'Egg Curry',
    since: 'Customer since Apr 2024',
  },
];

const FLOATING_DISHES = [
  { emoji: '🍛', size: 44, top: '8%',  left: '2%',  right: undefined, delay: '0s',  duration: '6s' },
  { emoji: '🫓', size: 34, top: '15%', left: undefined, right: '3%',  delay: '-2s', duration: '8s' },
  { emoji: '🍲', size: 48, top: '55%', left: '1%',  right: undefined, delay: '-4s', duration: '7s' },
  { emoji: '🌶️', size: 28, top: '70%', left: undefined, right: '2%',  delay: '-1s', duration: '9s' },
  { emoji: '🍗', size: 40, top: '35%', left: undefined, right: '1%',  delay: '-5s', duration: '6.5s' },
  { emoji: '🥛', size: 30, top: '85%', left: '3%',  right: undefined, delay: '-3s', duration: '7.5s' },
];

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

function Stars({ count }: { count: number }) {
  return (
    <div style={{ display: 'flex', gap: 2 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#FF6B2C">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function ReviewsSection() {
  const { ref: sectionRef, inView } = useInView(0.05);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .rv-root {
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(160deg, #FFF8F0 0%, #FFF0E0 45%, #FFF5EB 100%);
          position: relative;
          overflow: hidden;
          padding: 80px 0 100px;
        }

        .rv-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(90px);
          opacity: 0.28;
          pointer-events: none;
          animation: rvBlobDrift 10s ease-in-out infinite;
        }
        @keyframes rvBlobDrift {
          0%,100% { transform: translate(0,0) scale(1); }
          40%      { transform: translate(30px,-25px) scale(1.06); }
          70%      { transform: translate(-20px,22px) scale(0.93); }
        }

        .rv-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,107,44,0.12) 1px, transparent 1px);
          background-size: 36px 36px;
          pointer-events: none;
          z-index: 0;
        }

        .rv-float-dish {
          position: absolute;
          pointer-events: none;
          z-index: 1;
          animation: rvDishFloat var(--duration,7s) ease-in-out var(--delay,0s) infinite;
          opacity: 0.08;
          display: none;
        }
        @keyframes rvDishFloat {
          0%,100% { transform: translateY(0) rotate(-3deg) scale(1); }
          30%      { transform: translateY(-18px) rotate(2deg) scale(1.04); }
          60%      { transform: translateY(-8px) rotate(-1deg) scale(0.97); }
        }

        .rv-eyebrow {
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
          margin-bottom: 14px;
        }

        .rv-heading {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 5vw, 54px);
          font-weight: 900;
          color: #1A0A00;
          line-height: 1.08;
          letter-spacing: -1px;
          margin: 0 0 14px;
        }
        .rv-heading em {
          font-style: italic;
          color: #FF6B2C;
          position: relative;
        }
        .rv-heading em::after {
          content: '';
          position: absolute;
          bottom: 2px; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #FF6B2C, #F5A623);
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          transition: transform 1s cubic-bezier(.16,1,.3,1) 0.5s;
        }
        .rv-root.visible .rv-heading em::after { transform: scaleX(1); }

        .rv-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 16px;
          position: relative;
          z-index: 5;
        }

        .rv-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 18px;
          margin-top: 44px;
        }

        /* White cards — same as MealPlan cards */
        .rv-card {
          background: #fff;
          border: 1.5px solid rgba(26,10,0,0.07);
          border-radius: 22px;
          padding: 24px;
          position: relative;
          overflow: hidden;
          transition: all 0.38s cubic-bezier(.34,1.56,.64,1);
          box-shadow: 0 4px 24px rgba(26,10,0,0.06);
          display: flex;
          flex-direction: column;
        }
        .rv-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,107,44,0.04) 0%, transparent 60%);
          opacity: 0;
          transition: opacity 0.35s ease;
          border-radius: inherit;
        }
        .rv-card:hover {
          border-color: rgba(255,107,44,0.3);
          transform: translateY(-6px) scale(1.01);
          box-shadow: 0 20px 60px rgba(255,107,44,0.13), 0 0 0 1px rgba(255,107,44,0.1);
        }
        .rv-card:hover::before { opacity: 1; }

        /* Stripe on top — same as plan cards */
        .rv-card-stripe {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, #FF6B2C, #F5A623);
          border-radius: 22px 22px 0 0;
          opacity: 0;
          transition: opacity 0.35s ease;
        }
        .rv-card:hover .rv-card-stripe { opacity: 1; }

        .rv-quote-mark {
          position: absolute;
          top: 12px; right: 18px;
          font-family: 'Playfair Display', serif;
          font-size: 80px;
          line-height: 1;
          color: rgba(255,107,44,0.07);
          font-weight: 900;
          pointer-events: none;
          user-select: none;
          transition: color 0.35s ease;
        }
        .rv-card:hover .rv-quote-mark { color: rgba(255,107,44,0.13); }

        .rv-dish-badge {
          position: absolute;
          bottom: 16px; right: 16px;
          background: rgba(255,107,44,0.08);
          border: 1px solid rgba(255,107,44,0.2);
          border-radius: 12px;
          padding: 5px 10px;
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 11px;
          font-weight: 600;
          color: #FF6B2C;
          opacity: 0;
          transform: translateY(6px) scale(0.95);
          transition: all 0.35s cubic-bezier(.34,1.56,.64,1);
          pointer-events: none;
        }
        .rv-card:hover .rv-dish-badge { opacity: 1; transform: translateY(0) scale(1); }

        .rv-avatar {
          width: 46px; height: 46px;
          border-radius: 50%;
          background: linear-gradient(135deg, rgba(255,107,44,0.08), rgba(245,166,35,0.08));
          border: 2px solid rgba(255,107,44,0.18);
          display: flex; align-items: center; justify-content: center;
          font-size: 22px; flex-shrink: 0;
          transition: all 0.35s cubic-bezier(.34,1.56,.64,1);
        }
        .rv-card:hover .rv-avatar { border-color: #FF6B2C; transform: scale(1.08); }

        .rv-plan-pill {
          display: inline-block;
          background: rgba(255,107,44,0.08);
          border: 1px solid rgba(255,107,44,0.18);
          border-radius: 50px;
          padding: 3px 10px;
          font-size: 10px;
          font-weight: 600;
          color: #FF6B2C;
          letter-spacing: 0.5px;
          margin-bottom: 10px;
          white-space: nowrap;
        }

        .rv-text {
          font-size: 13.5px;
          color: #6B5344;
          line-height: 1.75;
          font-weight: 400;
          position: relative;
          z-index: 1;
          margin-bottom: 34px;
          flex: 1;
        }

        .rv-name   { font-weight: 700; font-size: 15px; color: #1A0A00; }
        .rv-location { font-size: 12px; color: #9B7B6A; margin-top: 1px; }
        .rv-since  { font-size: 10px; color: #FF6B2C; margin-top: 3px; font-weight: 600; opacity: 0.8; }

        /* Summary bar — same white card style as hero stats */
        .rv-summary {
          background: #fff;
          border: 1px solid rgba(255,107,44,0.12);
          border-radius: 20px;
          padding: 20px 24px;
          display: flex;
          align-items: center;
          justify-content: space-around;
          gap: 16px;
          margin-top: 52px;
          flex-wrap: wrap;
          box-shadow: 0 8px 36px rgba(26,10,0,0.07);
        }
        .rv-summary-num {
          font-family: 'Playfair Display', serif;
          font-size: clamp(24px, 4vw, 34px);
          font-weight: 900;
          color: #FF6B2C;
          line-height: 1;
          margin-bottom: 4px;
        }
        .rv-summary-lbl {
          font-size: 11px;
          color: #9B7B6A;
          font-weight: 500;
          letter-spacing: 0.5px;
          text-transform: uppercase;
        }
        .rv-summary-divider {
          width: 1px; height: 40px;
          background: rgba(255,107,44,0.15);
          flex-shrink: 0;
        }

        /* Fade */
        .rv-fade { opacity: 0; transform: translateY(28px); transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1); }
        .rv-root.visible .rv-fade { opacity: 1; transform: translateY(0); }
        .rv-fade-d1 { transition-delay: 0.08s; }
        .rv-fade-d2 { transition-delay: 0.16s; }
        .rv-fade-d3 { transition-delay: 0.24s; }
        .rv-fade-d7 { transition-delay: 0.56s; }

        /* Card stagger */
        .rv-root.visible .rv-card-0 { animation: rvCardIn 0.6s cubic-bezier(.16,1,.3,1) 0.30s both; }
        .rv-root.visible .rv-card-1 { animation: rvCardIn 0.6s cubic-bezier(.16,1,.3,1) 0.40s both; }
        .rv-root.visible .rv-card-2 { animation: rvCardIn 0.6s cubic-bezier(.16,1,.3,1) 0.50s both; }
        .rv-root.visible .rv-card-3 { animation: rvCardIn 0.6s cubic-bezier(.16,1,.3,1) 0.60s both; }
        .rv-root.visible .rv-card-4 { animation: rvCardIn 0.6s cubic-bezier(.16,1,.3,1) 0.70s both; }
        .rv-root.visible .rv-card-5 { animation: rvCardIn 0.6s cubic-bezier(.16,1,.3,1) 0.80s both; }
        @keyframes rvCardIn {
          from { opacity: 0; transform: translateY(32px) scale(0.97); }
          to   { opacity: 1; transform: translateY(0) scale(1); }
        }

        /* ══ RESPONSIVE ══ */
        @media (max-width: 360px) {
          .rv-root { padding: 56px 0 72px; }
          .rv-container { padding: 0 12px; }
          .rv-card { padding: 18px 14px 20px; }
          .rv-text { font-size: 12.5px; }
          .rv-heading { font-size: 26px; letter-spacing: -0.5px; }
          .rv-summary { padding: 16px 12px; gap: 10px; }
          .rv-summary-divider { display: none; }
        }
        @media (min-width: 361px) and (max-width: 559px) {
          .rv-root { padding: 64px 0 80px; }
          .rv-card { padding: 20px 18px 22px; }
        }
        @media (min-width: 560px) {
          .rv-grid { grid-template-columns: 1fr 1fr; gap: 20px; }
        }
        @media (min-width: 900px) {
          .rv-root { padding: 90px 0 110px; }
          .rv-container { padding: 0 32px; }
          .rv-grid { grid-template-columns: repeat(3, 1fr); gap: 22px; }
          .rv-float-dish { display: block; }
        }
        @media (min-width: 1200px) {
          .rv-container { padding: 0 48px; }
          .rv-card { padding: 28px 26px 26px; }
          .rv-text { font-size: 14px; }
        }
      `}</style>

      <section
        id="reviews"
        ref={sectionRef}
        className={`rv-root${inView ? ' visible' : ''}`}
      >
        {/* Same blobs as HeroSection / MealPlans */}
        <div className="rv-blob" style={{ width: 480, height: 480, background: '#FFD580', top: -100, right: -120, animationDelay: '0s' }} />
        <div className="rv-blob" style={{ width: 360, height: 360, background: '#FF9F6B', bottom: -60, left: -100, animationDelay: '-5s' }} />
        <div className="rv-blob" style={{ width: 260, height: 260, background: '#FFB347', top: '45%', left: '40%', animationDelay: '-3s' }} />
        <div className="rv-dots" />

        {FLOATING_DISHES.map((d, i) => (
          <div
            key={i}
            className="rv-float-dish"
            style={{
              fontSize: d.size,
              top: d.top,
              ...(d.left  ? { left:  d.left  } : {}),
              ...(d.right ? { right: d.right } : {}),
              '--delay':    d.delay,
              '--duration': d.duration,
            } as React.CSSProperties}
          >
            {d.emoji}
          </div>
        ))}

        <div className="rv-container">
          <div style={{ textAlign: 'center', marginBottom: 8 }}>
            <div className="rv-fade rv-fade-d1">
              <span className="rv-eyebrow">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="#FF6B2C"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
                Customer Reviews
              </span>
            </div>
            <h2 className="rv-heading rv-fade rv-fade-d2">
              What Our <em>Families</em> Say
            </h2>
            <p className="rv-fade rv-fade-d3" style={{ fontSize: 15, color: '#9B7B6A', lineHeight: 1.7, margin: '0 auto', maxWidth: 460 }}>
              Real reviews from Indians living in Dubai — who found their <strong style={{ color: '#6B5344' }}>ghar ka khana</strong> with us 🏠
            </p>
          </div>

          <div className="rv-grid">
            {REVIEWS.map((review, i) => (
              <div key={review.name} className={`rv-card rv-card-${i}`}>
                <div className="rv-card-stripe" />
                <div className="rv-quote-mark">"</div>
                <div className="rv-plan-pill">{review.plan}</div>
                <div style={{ marginBottom: 10 }}><Stars count={review.rating} /></div>
                <p className="rv-text">"{review.text}"</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12, position: 'relative', zIndex: 1 }}>
                  <div className="rv-avatar">{review.avatar}</div>
                  <div>
                    <div className="rv-name">{review.name}</div>
                    <div className="rv-location">📍 {review.location}</div>
                    <div className="rv-since">{review.since}</div>
                  </div>
                </div>
                <div className="rv-dish-badge">
                  <span style={{ fontSize: 16 }}>{review.dish}</span>
                  <span>{review.dishLabel}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="rv-fade rv-fade-d7">
            <div className="rv-summary">
              {[
                { num: '500+', label: 'Happy Families' },
                { num: '4.9★', label: 'Average Rating' },
                { num: '3+',   label: 'Years in Dubai' },
                { num: '26',   label: 'Days / Month' },
              ].map((item, i, arr) => (
                <React.Fragment key={item.label}>
                  <div style={{ textAlign: 'center' }}>
                    <div className="rv-summary-num">{item.num}</div>
                    <div className="rv-summary-lbl">{item.label}</div>
                  </div>
                  {i < arr.length - 1 && <div className="rv-summary-divider" />}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}