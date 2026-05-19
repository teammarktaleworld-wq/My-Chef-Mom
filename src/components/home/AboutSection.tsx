






// 'use client';

// import React, { useEffect, useRef } from 'react';

// const STATS = [
//   { value: '500+', label: 'Happy Families' },
//   { value: '3+',   label: 'Years in Dubai' },
//   { value: '0',    label: 'Preservatives' },
// ];

// export default function AboutSection() {
//   const sectionRef = useRef<HTMLElement>(null);

//   useEffect(() => {
//     const els = sectionRef.current?.querySelectorAll<HTMLElement>('.about-reveal');
//     if (!els) return;
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             (entry.target as HTMLElement).style.opacity = '1';
//             (entry.target as HTMLElement).style.transform = 'translateY(0) scale(1)';
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );
//     els.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,800;1,700&family=DM+Sans:wght@400;500;600&display=swap');

//         :root {
//           --saffron:  #FF6B2C;
//           --turmeric: #F5A623;
//           --cream:    #FFF8F0;
//           --deep:     #1A0A00;
//           --green:    #2D6A4F;
//         }

//         /* ── Reveal animation ── */
//         .about-reveal {
//           opacity: 0;
//           transform: translateY(28px) scale(0.98);
//           transition: opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1);
//         }
//         .about-reveal.delay-1 { transition-delay: .1s; }
//         .about-reveal.delay-2 { transition-delay: .2s; }
//         .about-reveal.delay-3 { transition-delay: .3s; }
//         .about-reveal.delay-4 { transition-delay: .4s; }
//         .about-reveal.delay-5 { transition-delay: .5s; }

//         /* ── Image zoom ── */
//         .about-img-wrap { overflow: hidden; border-radius: 2rem; }
//         .about-img-wrap img {
//           transition: transform .8s cubic-bezier(.4,0,.2,1);
//           width: 100%; height: 100%; object-fit: cover; display: block;
//         }
//         .about-img-wrap:hover img { transform: scale(1.06); }

//         /* ── Stat cards ── */
//         .about-stat {
//           background: rgba(255,255,255,.9);
//           backdrop-filter: blur(12px);
//           border: 1px solid rgba(255,107,44,.15);
//           border-radius: 14px;
//           padding: 12px 16px;
//           text-align: center;
//           transition: transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s;
//         }
//         .about-stat:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 12px 28px rgba(255,107,44,.15);
//         }

//         /* ── Highlight box ── */
//         .about-highlight {
//           background: #FFF8F0;
//           border: 1px solid rgba(255,107,44,.18);
//           border-left: 4px solid var(--green);
//           border-radius: 16px;
//           padding: 20px 20px;
//           display: flex; align-items: flex-start; gap: 14px;
//           transition: box-shadow .3s, transform .3s cubic-bezier(.34,1.56,.64,1);
//         }
//         .about-highlight:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 10px 28px rgba(45,106,79,.1);
//         }

//         /* ── Tag ── */
//         .about-tag {
//           display: inline-flex; align-items: center; gap: 6px;
//           background: rgba(255,107,44,.1);
//           border: 1px solid rgba(255,107,44,.25);
//           border-radius: 50px;
//           padding: 5px 14px;
//           font-size: 11px; font-weight: 600;
//           color: var(--saffron); letter-spacing: 2px; text-transform: uppercase;
//           font-family: 'DM Sans', sans-serif;
//         }

//         /* ── Quote badge ── */
//         .about-quote-badge {
//           position: absolute; bottom: 20px; left: 16px; right: 16px;
//           background: rgba(26,10,0,.72);
//           backdrop-filter: blur(16px);
//           border-radius: 16px;
//           padding: 16px 18px;
//           border: 1px solid rgba(255,255,255,.1);
//         }

//         /* ── Decorative ring ── */
//         .about-ring {
//           position: absolute;
//           border-radius: 50%;
//           border: 2px dashed rgba(255,107,44,.18);
//           animation: aboutSpin 22s linear infinite;
//           pointer-events: none;
//         }
//         @keyframes aboutSpin {
//           from { transform: rotate(0deg); }
//           to   { transform: rotate(360deg); }
//         }

//         /* ── CTA buttons ── */
//         .about-btn-primary {
//           background: linear-gradient(135deg,#FF6B2C,#E84A1A);
//           color: #fff; border: none; border-radius: 50px;
//           padding: 12px 24px;
//           font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600;
//           cursor: pointer; display: inline-flex; align-items: center; gap: 6px;
//           box-shadow: 0 6px 20px rgba(255,107,44,.35);
//           transition: all .3s cubic-bezier(.34,1.56,.64,1);
//           text-decoration: none; white-space: nowrap;
//         }
//         .about-btn-primary:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 12px 28px rgba(255,107,44,.45); }

//         .about-btn-secondary {
//           display: inline-flex; align-items: center; gap: 8px;
//           padding: 12px 20px; border-radius: 50px;
//           border: 1.5px solid rgba(255,107,44,.25);
//           background: rgba(255,107,44,.06);
//           text-decoration: none;
//           font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600;
//           color: #5C3D2E; transition: all .2s; white-space: nowrap;
//         }
//         .about-btn-secondary:hover { background: rgba(255,107,44,.12); }

//         /* ════════════════════════════
//            LAYOUT — mobile first
//         ════════════════════════════ */

//         .about-section {
//           padding: 72px 0 80px;
//           background: linear-gradient(180deg,#FFF8F0 0%,#ffffff 60%,#FFF8F0 100%);
//         }

//         .about-container {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 20px;
//           display: flex;
//           flex-direction: column;
//           gap: 56px;
//         }

//         /* ── Image collage ── */
//         .about-collage {
//           position: relative;
//           height: 340px;         /* compact on mobile */
//           width: 100%;
//           max-width: 500px;
//           margin: 0 auto;
//           flex-shrink: 0;
//         }

//         /* Rings hidden on mobile (too large) */
//         .about-ring { display: none; }

//         /* Stat cards: row on mobile, column on desktop */
//         .about-stats-col {
//           position: absolute;
//           top: 16px; right: -12px;
//           display: flex; flex-direction: column; gap: 8px;
//           z-index: 10;
//         }

//         /* Content side */
//         .about-content { font-family: 'DM Sans', sans-serif; }

//         /* CTA row */
//         .about-cta-row {
//           display: flex; gap: 10px; margin-top: 24px; flex-wrap: wrap;
//         }

//         /* ── 480px ── */
//         @media (min-width: 480px) {
//           .about-collage { height: 380px; }
//           .about-stats-col { right: -4px; }
//         }

//         /* ── Tablet 640px ── */
//         @media (min-width: 640px) {
//           .about-section { padding: 88px 0 96px; }
//           .about-container { padding: 0 32px; gap: 60px; }
//           .about-collage { height: 440px; max-width: 580px; }
//           .about-ring { display: block; }
//           .about-stats-col { right: -18px; gap: 10px; }
//           .about-quote-badge { bottom: 24px; left: 20px; right: 20px; }
//         }

//         /* ── Desktop 1024px — two column ── */
//         @media (min-width: 1024px) {
//           .about-section { padding: 100px 0; }
//           .about-container {
//             flex-direction: row;
//             align-items: center;
//             gap: 64px;
//           }
//           .about-collage {
//             height: 520px;
//             max-width: none;
//             flex: 1;
//             margin: 0;
//           }
//           .about-content { flex: 1; }
//           .about-stats-col { right: -20px; gap: 12px; }
//         }

//         /* ── Wide 1280px ── */
//         @media (min-width: 1280px) {
//           .about-container { padding: 0 48px; gap: 80px; }
//         }

//         /* Highlight icon — smaller on mobile */
//         .about-hl-icon {
//           width: 44px; height: 44px; font-size: 20px;
//           flex-shrink: 0;
//         }
//         @media (min-width: 640px) {
//           .about-hl-icon { width: 52px; height: 52px; font-size: 24px; }
//         }

//         /* Stat values — scale down on tiny screens */
//         .about-stat-val { font-size: 20px; }
//         .about-stat-lbl { font-size: 9px; }
//         @media (min-width: 400px) {
//           .about-stat-val { font-size: 22px; }
//         }
//         @media (min-width: 640px) {
//           .about-stat-val { font-size: 24px; }
//           .about-stat-lbl { font-size: 11px; }
//           .about-stat { padding: 14px 20px; }
//         }
//       `}</style>

//       <section ref={sectionRef} id="about" className="about-section">
//         <div className="about-container">

//           {/* ── LEFT: image collage ── */}
//           <div className="about-reveal about-collage">

//             {/* Decorative rings */}
//             <div className="about-ring" style={{ width: 420, height: 420, top: 40, left: -10, animationDuration: '25s' }} />
//             <div className="about-ring" style={{ width: 290, height: 290, top: 115, left: 65, animationDirection: 'reverse', opacity: .5 }} />

//             {/* Main image */}
//             <div className="about-img-wrap" style={{ position: 'absolute', inset: 0, boxShadow: '0 20px 56px rgba(26,10,0,.14)', border: '4px solid #fff' }}>
//               <img
//                 src="https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?q=80&w=1000&auto=format&fit=crop"
//                 alt="Indian Roti and Curry"
//               />
//               <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top,rgba(26,10,0,.75) 0%,rgba(26,10,0,.1) 50%,transparent 100%)' }} />
//             </div>

//             {/* Quote badge */}
//             <div className="about-quote-badge">
//               <div style={{ display: 'flex', gap: 3, marginBottom: 8 }}>
//                 {[...Array(5)].map((_, i) => (
//                   <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F5A623">
//                     <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                   </svg>
//                 ))}
//               </div>
//               <p style={{ fontFamily: "'Playfair Display',serif", fontStyle: 'italic', fontSize: 'clamp(14px,3vw,18px)', fontWeight: 700, color: '#fff', lineHeight: 1.4, marginBottom: 6 }}>
//                 "Best tiffin service in Dubai!"
//               </p>
//               <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 12, color: 'rgba(255,255,255,.65)', fontWeight: 500 }}>
//                 — Priya S., Dubai Marina
//               </p>
//             </div>

//             {/* Stat cards */}
//             <div className="about-stats-col">
//               {STATS.map(({ value, label }, i) => (
//                 <div key={label} className={`about-stat about-reveal delay-${i + 2}`}>
//                   <div className="about-stat-val" style={{ fontFamily: "'Playfair Display',serif", fontWeight: 800, color: '#FF6B2C', lineHeight: 1 }}>{value}</div>
//                   <div className="about-stat-lbl" style={{ fontFamily: "'DM Sans',sans-serif", color: '#9B7B6A', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginTop: 2 }}>{label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ── RIGHT: content ── */}
//           <div className="about-content">
//             <div className="about-reveal about-tag" style={{ marginBottom: 16 }}>
//               <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF6B2C', display: 'inline-block' }} />
//               About The Chef Mom
//             </div>

//             <h2 className="about-reveal delay-1" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(28px,4.5vw,50px)', fontWeight: 800, color: '#1A0A00', lineHeight: 1.1, letterSpacing: -1, marginBottom: 20 }}>
//               From a Delhi Kitchen<br />
//               to <em style={{ color: '#FF6B2C', fontStyle: 'italic' }}>Dubai Homes</em>
//             </h2>

//             <p className="about-reveal delay-2" style={{ fontSize: 'clamp(14px,1.8vw,16px)', color: '#6B5344', lineHeight: 1.75, marginBottom: 14 }}>
//               The Chef Mom was created with a simple mission — to bring the comforting taste of authentic Delhi-style home cooking to people living in Dubai.
//             </p>

//             <p className="about-reveal delay-3" style={{ fontSize: 'clamp(14px,1.8vw,16px)', color: '#6B5344', lineHeight: 1.75, marginBottom: 28 }}>
//               For many people living away from home, the biggest thing they miss is{' '}
//               <strong style={{ color: '#1A0A00', background: 'rgba(255,107,44,.1)', padding: '2px 8px', borderRadius: 6 }}>ghar ka khana</strong>
//               {' '}— fresh, simple, and full of flavour. Every meal is prepared by home chefs using fresh ingredients, traditional spices, and recipes passed through generations.
//             </p>

//             <div className="about-reveal delay-4 about-highlight">
//               <div
//                 className="about-hl-icon"
//                 style={{ background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(0,0,0,.07)' }}
//               >
//                 👩‍🍳
//               </div>
//               <div>
//                 <h4 style={{ fontWeight: 700, color: '#1A0A00', fontSize: 'clamp(15px,2vw,17px)', marginBottom: 6 }}>Our Goal is Simple:</h4>
//                 <p style={{ color: '#6B5344', lineHeight: 1.65, fontSize: 'clamp(13px,1.6vw,15px)' }}>
//                   To make every meal feel like it was cooked in your mom's kitchen. Less oil, balanced spices, maximum love.
//                 </p>
//               </div>
//             </div>

//             <div className="about-reveal delay-5 about-cta-row">
//               <button
//                 className="about-btn-primary"
//                 onClick={() => document.getElementById('meal-plans')?.scrollIntoView({ behavior: 'smooth' })}
//               >
//                 View Meal Plans
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M5 12h14M12 5l7 7-7 7"/>
//                 </svg>
//               </button>
//               <a href="tel:+971557998925" className="about-btn-secondary">
//                 📞 Call Us Now
//               </a>
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }

















// 'use client';

// import React, { useEffect, useRef, useState } from 'react';

// const STATS = [
//   { value: '500+', label: 'Happy Families' },
//   { value: '3+',   label: 'Years in Dubai' },
//   { value: '0',    label: 'Preservatives' },
// ];

// // Homemade Indian thali / tiffin photos (Unsplash — no momos)
// const THALI_PHOTOS = [
//   {
//     src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop',
//     alt: 'Traditional Indian thali with dal, sabzi, roti and rice',
//     caption: 'Fresh Dal, Roti & Sabzi — everyday comfort',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200&auto=format&fit=crop',
//     alt: 'North Indian home-style thali',
//     caption: 'North Indian home-style thali — just like mom makes',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=1200&auto=format&fit=crop',
//     alt: 'Indian curry and roti home meal',
//     caption: 'Ghar ka khana — fresh, balanced, full of flavour',
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1200&auto=format&fit=crop',
//     alt: 'Indian home cooked meal with multiple dishes',
//     caption: 'Made fresh every morning by our home chefs',
//   },
// ];

// export default function AboutSection() {
//   const sectionRef   = useRef<HTMLElement>(null);
//   const [current, setCurrent]   = useState(0);
//   const [animating, setAnimating] = useState(false);
//   const [direction, setDirection] = useState<'next' | 'prev'>('next');
//   const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

//   /* ── Auto-advance ── */
//   const startAutoPlay = () => {
//     intervalRef.current = setInterval(() => {
//       goTo('next');
//     }, 3500);
//   };

//   const stopAutoPlay = () => {
//     if (intervalRef.current) clearInterval(intervalRef.current);
//   };

//   useEffect(() => {
//     startAutoPlay();
//     return () => stopAutoPlay();
//   }, [current]);                   // restart timer after every slide change

//   const goTo = (dir: 'next' | 'prev') => {
//     if (animating) return;
//     setAnimating(true);
//     setDirection(dir);
//     setTimeout(() => {
//       setCurrent(prev =>
//         dir === 'next'
//           ? (prev + 1) % THALI_PHOTOS.length
//           : (prev - 1 + THALI_PHOTOS.length) % THALI_PHOTOS.length
//       );
//       setAnimating(false);
//     }, 500);
//   };

//   /* ── Reveal on scroll ── */
//   useEffect(() => {
//     const els = sectionRef.current?.querySelectorAll<HTMLElement>('.about-reveal');
//     if (!els) return;
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             (entry.target as HTMLElement).style.opacity = '1';
//             (entry.target as HTMLElement).style.transform = 'translateY(0) scale(1)';
//             observer.unobserve(entry.target);
//           }
//         });
//       },
//       { threshold: 0.1 }
//     );
//     els.forEach((el) => observer.observe(el));
//     return () => observer.disconnect();
//   }, []);

//   const photo = THALI_PHOTOS[current];

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,800;1,700&family=DM+Sans:wght@400;500;600&display=swap');

//         :root {
//           --saffron:  #FF6B2C;
//           --turmeric: #F5A623;
//           --cream:    #FFF8F0;
//           --deep:     #1A0A00;
//           --green:    #2D6A4F;
//         }

//         /* ── Reveal animation ── */
//         .about-reveal {
//           opacity: 0;
//           transform: translateY(28px) scale(0.98);
//           transition: opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1);
//         }
//         .about-reveal.delay-1 { transition-delay: .1s; }
//         .about-reveal.delay-2 { transition-delay: .2s; }
//         .about-reveal.delay-3 { transition-delay: .3s; }
//         .about-reveal.delay-4 { transition-delay: .4s; }
//         .about-reveal.delay-5 { transition-delay: .5s; }

//         /* ── Carousel wrapper ── */
//         .about-carousel {
//           position: absolute;
//           inset: 0;
//           overflow: hidden;
//           border-radius: 2rem;
//           box-shadow: 0 20px 56px rgba(26,10,0,.14);
//           border: 4px solid #fff;
//         }

//         /* ── Slide transition ── */
//         .about-slide {
//           position: absolute;
//           inset: 0;
//           transition: transform 0.55s cubic-bezier(.77,0,.18,1), opacity 0.55s ease;
//         }
//         .about-slide.active   { transform: translateX(0);    opacity: 1; z-index: 2; }
//         .about-slide.exit-next { transform: translateX(-100%); opacity: 0; z-index: 1; }
//         .about-slide.exit-prev { transform: translateX(100%);  opacity: 0; z-index: 1; }
//         .about-slide.enter-next { transform: translateX(100%);  opacity: 0; z-index: 3; }
//         .about-slide.enter-prev { transform: translateX(-100%); opacity: 0; z-index: 3; }
//         .about-slide.active-enter { transform: translateX(0); opacity: 1; z-index: 3; }

//         .about-slide img {
//           width: 100%; height: 100%; object-fit: cover; display: block;
//         }
//         .about-slide-overlay {
//           position: absolute; inset: 0;
//           background: linear-gradient(to top, rgba(26,10,0,.78) 0%, rgba(26,10,0,.08) 55%, transparent 100%);
//         }

//         /* ── Carousel controls ── */
//         .about-carousel-controls {
//           position: absolute;
//           bottom: 16px;
//           left: 50%;
//           transform: translateX(-50%);
//           z-index: 20;
//           display: flex;
//           align-items: center;
//           gap: 10px;
//         }
//         .about-dot {
//           width: 7px; height: 7px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.45);
//           cursor: pointer;
//           transition: all 0.3s ease;
//           border: none;
//           padding: 0;
//           flex-shrink: 0;
//         }
//         .about-dot.active {
//           background: #fff;
//           width: 22px;
//           border-radius: 4px;
//         }
//         .about-arrow {
//           position: absolute;
//           top: 50%;
//           transform: translateY(-50%);
//           z-index: 20;
//           width: 34px; height: 34px;
//           border-radius: 50%;
//           background: rgba(255,255,255,0.18);
//           backdrop-filter: blur(8px);
//           border: 1px solid rgba(255,255,255,0.3);
//           color: #fff;
//           display: flex; align-items: center; justify-content: center;
//           cursor: pointer;
//           transition: background 0.2s, transform 0.2s;
//           -webkit-tap-highlight-color: transparent;
//           touch-action: manipulation;
//         }
//         .about-arrow:hover  { background: rgba(255,255,255,0.32); transform: translateY(-50%) scale(1.08); }
//         .about-arrow:active { transform: translateY(-50%) scale(0.95); }
//         .about-arrow-left  { left: 12px; }
//         .about-arrow-right { right: 12px; }

//         /* ── Caption badge ── */
//         .about-caption-badge {
//           position: absolute;
//           bottom: 44px;
//           left: 16px; right: 16px;
//           background: rgba(26,10,0,.68);
//           backdrop-filter: blur(16px);
//           border-radius: 14px;
//           padding: 12px 16px;
//           border: 1px solid rgba(255,255,255,.1);
//           z-index: 10;
//           transition: opacity 0.4s ease;
//         }

//         /* ── Slide number badge ── */
//         .about-slide-count {
//           position: absolute;
//           top: 14px;
//           left: 14px;
//           z-index: 20;
//           background: rgba(26,10,0,.55);
//           backdrop-filter: blur(8px);
//           color: #fff;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 11px;
//           font-weight: 600;
//           padding: 4px 10px;
//           border-radius: 50px;
//           border: 1px solid rgba(255,255,255,.15);
//           letter-spacing: 0.5px;
//         }

//         /* ── Progress bar ── */
//         .about-progress-bar {
//           position: absolute;
//           top: 0; left: 0;
//           height: 3px;
//           background: linear-gradient(90deg, #FF6B2C, #F5A623);
//           border-radius: 0 2px 2px 0;
//           z-index: 20;
//           animation: aboutProgress 3.5s linear;
//           transform-origin: left;
//         }
//         @keyframes aboutProgress {
//           from { width: 0%; }
//           to   { width: 100%; }
//         }

//         /* ── Stat cards ── */
//         .about-stat {
//           background: rgba(255,255,255,.9);
//           backdrop-filter: blur(12px);
//           border: 1px solid rgba(255,107,44,.15);
//           border-radius: 14px;
//           padding: 12px 16px;
//           text-align: center;
//           transition: transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s;
//         }
//         .about-stat:hover {
//           transform: translateY(-4px);
//           box-shadow: 0 12px 28px rgba(255,107,44,.15);
//         }

//         /* ── Highlight box ── */
//         .about-highlight {
//           background: #FFF8F0;
//           border: 1px solid rgba(255,107,44,.18);
//           border-left: 4px solid var(--green);
//           border-radius: 16px;
//           padding: 20px 20px;
//           display: flex; align-items: flex-start; gap: 14px;
//           transition: box-shadow .3s, transform .3s cubic-bezier(.34,1.56,.64,1);
//         }
//         .about-highlight:hover {
//           transform: translateY(-3px);
//           box-shadow: 0 10px 28px rgba(45,106,79,.1);
//         }

//         /* ── Tag ── */
//         .about-tag {
//           display: inline-flex; align-items: center; gap: 6px;
//           background: rgba(255,107,44,.1);
//           border: 1px solid rgba(255,107,44,.25);
//           border-radius: 50px;
//           padding: 5px 14px;
//           font-size: 11px; font-weight: 600;
//           color: var(--saffron); letter-spacing: 2px; text-transform: uppercase;
//           font-family: 'DM Sans', sans-serif;
//         }

//         /* ── Decorative ring ── */
//         .about-ring {
//           position: absolute;
//           border-radius: 50%;
//           border: 2px dashed rgba(255,107,44,.18);
//           animation: aboutSpin 22s linear infinite;
//           pointer-events: none;
//           display: none;
//         }
//         @keyframes aboutSpin {
//           from { transform: rotate(0deg); }
//           to   { transform: rotate(360deg); }
//         }

//         /* ── CTA buttons ── */
//         .about-btn-primary {
//           background: linear-gradient(135deg,#FF6B2C,#E84A1A);
//           color: #fff; border: none; border-radius: 50px;
//           padding: 13px 24px;
//           font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600;
//           cursor: pointer; display: inline-flex; align-items: center; gap: 6px;
//           box-shadow: 0 6px 20px rgba(255,107,44,.35);
//           transition: all .3s cubic-bezier(.34,1.56,.64,1);
//           text-decoration: none; white-space: nowrap;
//           min-height: 48px;
//           -webkit-tap-highlight-color: transparent;
//           touch-action: manipulation;
//         }
//         .about-btn-primary:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 12px 28px rgba(255,107,44,.45); }
//         .about-btn-primary:active { transform: scale(0.97); }

//         .about-btn-secondary {
//           display: inline-flex; align-items: center; gap: 8px;
//           padding: 13px 20px; border-radius: 50px;
//           border: 1.5px solid rgba(255,107,44,.25);
//           background: rgba(255,107,44,.06);
//           text-decoration: none;
//           font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600;
//           color: #5C3D2E; transition: all .2s; white-space: nowrap;
//           min-height: 48px;
//           -webkit-tap-highlight-color: transparent;
//           touch-action: manipulation;
//         }
//         .about-btn-secondary:hover { background: rgba(255,107,44,.12); }
//         .about-btn-secondary:active { transform: scale(0.97); }

//         /* ════════════════════════════
//            LAYOUT — mobile first
//         ════════════════════════════ */
//         .about-section {
//           padding: 60px 0 72px;
//           background: linear-gradient(180deg,#FFF8F0 0%,#ffffff 60%,#FFF8F0 100%);
//         }
//         .about-container {
//           max-width: 1280px;
//           margin: 0 auto;
//           padding: 0 16px;
//           display: flex;
//           flex-direction: column;
//           gap: 48px;
//         }

//         /* ── Image collage ── */
//         .about-collage {
//           position: relative;
//           height: 320px;
//           width: 100%;
//           max-width: 500px;
//           margin: 0 auto;
//           flex-shrink: 0;
//         }

//         /* Stat cards */
//         .about-stats-col {
//           position: absolute;
//           top: 14px; right: -10px;
//           display: flex; flex-direction: column; gap: 8px;
//           z-index: 10;
//         }

//         /* Content side */
//         .about-content { font-family: 'DM Sans', sans-serif; }

//         /* CTA row */
//         .about-cta-row {
//           display: flex; gap: 10px; margin-top: 22px; flex-wrap: wrap;
//         }

//         /* ── 400px ── */
//         @media (min-width: 400px) {
//           .about-collage { height: 360px; }
//         }

//         /* ── 480px ── */
//         @media (min-width: 480px) {
//           .about-collage { height: 400px; }
//           .about-stats-col { right: -4px; }
//         }

//         /* ── Tablet 640px ── */
//         @media (min-width: 640px) {
//           .about-section { padding: 80px 0 90px; }
//           .about-container { padding: 0 28px; gap: 56px; }
//           .about-collage { height: 460px; max-width: 580px; }
//           .about-ring { display: block; }
//           .about-stats-col { right: -16px; gap: 10px; }
//           .about-arrow { width: 38px; height: 38px; }
//           .about-caption-badge { bottom: 48px; left: 18px; right: 18px; }
//         }

//         /* ── Desktop 1024px ── */
//         @media (min-width: 1024px) {
//           .about-section { padding: 96px 0; }
//           .about-container {
//             flex-direction: row;
//             align-items: center;
//             gap: 64px;
//           }
//           .about-collage {
//             height: 520px;
//             max-width: none;
//             flex: 1;
//             margin: 0;
//           }
//           .about-content { flex: 1; }
//           .about-stats-col { right: -20px; gap: 12px; }
//         }

//         /* ── Wide 1280px ── */
//         @media (min-width: 1280px) {
//           .about-container { padding: 0 48px; gap: 80px; }
//         }

//         /* Highlight icon */
//         .about-hl-icon {
//           width: 44px; height: 44px; font-size: 20px;
//           flex-shrink: 0;
//         }
//         @media (min-width: 640px) {
//           .about-hl-icon { width: 52px; height: 52px; font-size: 24px; }
//         }

//         /* Stat values */
//         .about-stat-val { font-size: 20px; }
//         .about-stat-lbl { font-size: 9px; }
//         @media (min-width: 400px) { .about-stat-val { font-size: 22px; } }
//         @media (min-width: 640px) {
//           .about-stat-val { font-size: 24px; }
//           .about-stat-lbl { font-size: 11px; }
//           .about-stat { padding: 14px 20px; }
//         }

//         /* ── Swipe touch support ── */
//         .about-carousel { user-select: none; -webkit-user-select: none; }
//       `}</style>

//       <section ref={sectionRef} id="about" className="about-section">
//         <div className="about-container">

//           {/* ── LEFT: carousel collage ── */}
//           <div className="about-reveal about-collage">

//             {/* Decorative rings */}
//             <div className="about-ring" style={{ width: 420, height: 420, top: 40, left: -10, animationDuration: '25s' }} />
//             <div className="about-ring" style={{ width: 290, height: 290, top: 115, left: 65, animationDirection: 'reverse', opacity: .5 }} />

//             {/* Carousel */}
//             <div
//               className="about-carousel"
//               onMouseEnter={stopAutoPlay}
//               onMouseLeave={startAutoPlay}
//             >
//               {/* Progress bar — re-mounts on current change to restart animation */}
//               <div key={`progress-${current}`} className="about-progress-bar" />

//               {/* Slide counter */}
//               <div className="about-slide-count">{current + 1} / {THALI_PHOTOS.length}</div>

//               {/* Slides */}
//               {THALI_PHOTOS.map((ph, idx) => {
//                 let cls = '';
//                 if (idx === current) {
//                   cls = animating ? 'about-slide active-enter' : 'about-slide active';
//                 } else if (animating) {
//                   // outgoing slide
//                   const prevIdx = direction === 'next'
//                     ? (current - 1 + THALI_PHOTOS.length) % THALI_PHOTOS.length
//                     : (current + 1) % THALI_PHOTOS.length;
//                   if (idx === prevIdx) {
//                     cls = direction === 'next' ? 'about-slide exit-next' : 'about-slide exit-prev';
//                   } else {
//                     cls = 'about-slide';
//                   }
//                 } else {
//                   cls = 'about-slide';
//                 }

//                 return (
//                   <div key={idx} className={cls} style={{ visibility: Math.abs(idx - current) <= 1 || (current === 0 && idx === THALI_PHOTOS.length - 1) || (current === THALI_PHOTOS.length - 1 && idx === 0) ? 'visible' : 'hidden' }}>
//                     <img src={ph.src} alt={ph.alt} loading={idx === 0 ? 'eager' : 'lazy'} />
//                     <div className="about-slide-overlay" />
//                   </div>
//                 );
//               })}

//               {/* Caption */}
//               <div className="about-caption-badge">
//                 <div style={{ display: 'flex', gap: 3, marginBottom: 6 }}>
//                   {[...Array(5)].map((_, i) => (
//                     <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#F5A623">
//                       <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
//                     </svg>
//                   ))}
//                 </div>
//                 <p style={{ fontFamily: "'Playfair Display',serif", fontStyle: 'italic', fontSize: 'clamp(13px,2.5vw,16px)', fontWeight: 700, color: '#fff', lineHeight: 1.4, marginBottom: 4 }}>
//                   "{photo.caption}"
//                 </p>
//                 <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: 'rgba(255,255,255,.6)', fontWeight: 500 }}>
//                   — The Chef Mom Kitchen
//                 </p>
//               </div>

//               {/* Dot indicators */}
//               <div className="about-carousel-controls">
//                 {THALI_PHOTOS.map((_, idx) => (
//                   <button
//                     key={idx}
//                     className={`about-dot${idx === current ? ' active' : ''}`}
//                     onClick={() => { stopAutoPlay(); setDirection(idx > current ? 'next' : 'prev'); setCurrent(idx); }}
//                     aria-label={`Go to slide ${idx + 1}`}
//                   />
//                 ))}
//               </div>

//               {/* Arrow buttons */}
//               <button
//                 className="about-arrow about-arrow-left"
//                 onClick={() => { stopAutoPlay(); goTo('prev'); }}
//                 aria-label="Previous photo"
//               >
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M15 18l-6-6 6-6"/>
//                 </svg>
//               </button>
//               <button
//                 className="about-arrow about-arrow-right"
//                 onClick={() => { stopAutoPlay(); goTo('next'); }}
//                 aria-label="Next photo"
//               >
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M9 18l6-6-6-6"/>
//                 </svg>
//               </button>
//             </div>

//             {/* Stat cards */}
//             <div className="about-stats-col">
//               {STATS.map(({ value, label }, i) => (
//                 <div key={label} className={`about-stat about-reveal delay-${i + 2}`}>
//                   <div className="about-stat-val" style={{ fontFamily: "'Playfair Display',serif", fontWeight: 800, color: '#FF6B2C', lineHeight: 1 }}>{value}</div>
//                   <div className="about-stat-lbl" style={{ fontFamily: "'DM Sans',sans-serif", color: '#9B7B6A', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginTop: 2 }}>{label}</div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ── RIGHT: content ── */}
//           <div className="about-content">
//             <div className="about-reveal about-tag" style={{ marginBottom: 16 }}>
//               <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF6B2C', display: 'inline-block' }} />
//               About The Chef Mom
//             </div>

//             <h2 className="about-reveal delay-1" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(26px,4.5vw,50px)', fontWeight: 800, color: '#1A0A00', lineHeight: 1.1, letterSpacing: -1, marginBottom: 18 }}>
//               From a Delhi Kitchen<br />
//               to <em style={{ color: '#FF6B2C', fontStyle: 'italic' }}>Dubai Homes</em>
//             </h2>

//             <p className="about-reveal delay-2" style={{ fontSize: 'clamp(13px,1.8vw,16px)', color: '#6B5344', lineHeight: 1.75, marginBottom: 14 }}>
//               The Chef Mom was created with a simple mission — to bring the comforting taste of authentic Delhi-style home cooking to people living in Dubai.
//             </p>

//             <p className="about-reveal delay-3" style={{ fontSize: 'clamp(13px,1.8vw,16px)', color: '#6B5344', lineHeight: 1.75, marginBottom: 26 }}>
//               For many people living away from home, the biggest thing they miss is{' '}
//               <strong style={{ color: '#1A0A00', background: 'rgba(255,107,44,.1)', padding: '2px 8px', borderRadius: 6 }}>ghar ka khana</strong>
//               {' '}— fresh, simple, and full of flavour. Every meal is prepared by home chefs using fresh ingredients, traditional spices, and recipes passed through generations.
//             </p>

//             <div className="about-reveal delay-4 about-highlight">
//               <div
//                 className="about-hl-icon"
//                 style={{ background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(0,0,0,.07)' }}
//               >
//                 👩‍🍳
//               </div>
//               <div>
//                 <h4 style={{ fontWeight: 700, color: '#1A0A00', fontSize: 'clamp(14px,2vw,17px)', marginBottom: 6 }}>Our Goal is Simple:</h4>
//                 <p style={{ color: '#6B5344', lineHeight: 1.65, fontSize: 'clamp(12px,1.6vw,15px)' }}>
//                   To make every meal feel like it was cooked in your mom's kitchen. Less oil, balanced spices, maximum love.
//                 </p>
//               </div>
//             </div>

//             <div className="about-reveal delay-5 about-cta-row">
//               <button
//                 className="about-btn-primary"
//                 onClick={() => document.getElementById('meal-plans')?.scrollIntoView({ behavior: 'smooth' })}
//               >
//                 View Meal Plans
//                 <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                   <path d="M5 12h14M12 5l7 7-7 7"/>
//                 </svg>
//               </button>
//               <a href="tel:+971557998925" className="about-btn-secondary">
//                 📞 Call Us Now
//               </a>
//             </div>
//           </div>

//         </div>
//       </section>
//     </>
//   );
// }










// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import { ChevronRight } from 'lucide-react';

// const WHATSAPP_NUMBER = '971557998925';
// const WA_ORDER_MSG = encodeURIComponent(
//   `👋 Hello The Chef Mom!\n\nI'd like to subscribe to a meal plan.\n\nPlease share the available plans and next steps.\n\nThank you! 🙏`
// );
// const WA_ORDER = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_ORDER_MSG}`;

// /* ─────────────────────────────────────────────
//    DUMMY FOUNDER ILLUSTRATION — Indian woman chef
//    (SVG avatar — replace src with real photo later)
// ───────────────────────────────────────────── */
// function FounderIllustration() {
//   return (
//     <svg viewBox="0 0 320 420" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
//       {/* Background warm gradient */}
//       <defs>
//         <radialGradient id="bgGrad" cx="50%" cy="60%" r="60%">
//           <stop offset="0%" stopColor="#FFE4CC" />
//           <stop offset="100%" stopColor="#FFF8F0" />
//         </radialGradient>
//         <radialGradient id="skinGrad" cx="40%" cy="35%" r="65%">
//           <stop offset="0%" stopColor="#D4956A" />
//           <stop offset="100%" stopColor="#B5704A" />
//         </radialGradient>
//         <radialGradient id="apronGrad" cx="50%" cy="30%" r="70%">
//           <stop offset="0%" stopColor="#FF8C4A" />
//           <stop offset="100%" stopColor="#FF6B2C" />
//         </radialGradient>
//         <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" stopColor="#C0392B" />
//           <stop offset="100%" stopColor="#96281B" />
//         </linearGradient>
//         <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
//           <stop offset="0%" stopColor="#4A3728" />
//           <stop offset="100%" stopColor="#2C2018" />
//         </linearGradient>
//         <filter id="softShadow">
//           <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgba(26,10,0,0.15)" />
//         </filter>
//       </defs>

//       {/* BG circle */}
//       <ellipse cx="160" cy="240" rx="148" ry="170" fill="url(#bgGrad)" />

//       {/* Body / Shirt */}
//       <ellipse cx="160" cy="370" rx="90" ry="70" fill="url(#shirtGrad)" />
//       <rect x="70" y="300" width="180" height="80" rx="20" fill="url(#shirtGrad)" />

//       {/* Apron */}
//       <path d="M118 260 Q160 248 202 260 L210 370 Q160 385 110 370 Z" fill="url(#apronGrad)" opacity="0.92" />
//       {/* Apron pocket */}
//       <rect x="136" y="315" width="48" height="34" rx="8" fill="rgba(255,255,255,0.25)" />
//       {/* Apron strings */}
//       <path d="M118 260 Q100 240 108 220" stroke="#FF6B2C" strokeWidth="6" fill="none" strokeLinecap="round" />
//       <path d="M202 260 Q220 240 212 220" stroke="#FF6B2C" strokeWidth="6" fill="none" strokeLinecap="round" />
//       <path d="M108 220 Q160 208 212 220" stroke="#FF6B2C" strokeWidth="6" fill="none" strokeLinecap="round" />

//       {/* Arms */}
//       {/* Left arm */}
//       <ellipse cx="96" cy="300" rx="22" ry="52" fill="url(#skinGrad)" transform="rotate(-18 96 300)" />
//       {/* Right arm — slightly raised, holding spoon */}
//       <ellipse cx="224" cy="290" rx="22" ry="52" fill="url(#skinGrad)" transform="rotate(22 224 290)" />

//       {/* Left hand */}
//       <ellipse cx="78" cy="338" rx="15" ry="12" fill="url(#skinGrad)" transform="rotate(-18 78 338)" />
//       {/* Right hand */}
//       <ellipse cx="242" cy="325" rx="15" ry="12" fill="url(#skinGrad)" transform="rotate(22 242 325)" />

//       {/* Wooden spoon in right hand */}
//       <line x1="248" y1="318" x2="270" y2="268" stroke="#8B5E3C" strokeWidth="5" strokeLinecap="round" />
//       <ellipse cx="272" cy="263" rx="11" ry="8" fill="#A0724A" transform="rotate(-30 272 263)" />

//       {/* Neck */}
//       <rect x="147" y="222" width="26" height="42" rx="12" fill="url(#skinGrad)" />

//       {/* Head */}
//       <ellipse cx="160" cy="190" rx="58" ry="62" fill="url(#skinGrad)" filter="url(#softShadow)" />

//       {/* Hair — bun style */}
//       <ellipse cx="160" cy="138" rx="52" ry="30" fill="url(#hairGrad)" />
//       {/* Hair sides */}
//       <ellipse cx="108" cy="168" rx="18" ry="30" fill="url(#hairGrad)" />
//       <ellipse cx="212" cy="168" rx="18" ry="30" fill="url(#hairGrad)" />
//       {/* Hair top bun */}
//       <ellipse cx="160" cy="128" rx="28" ry="20" fill="#3D2B1A" />
//       <ellipse cx="160" cy="122" rx="18" ry="13" fill="#4A3728" />

//       {/* Chef's hat */}
//       <rect x="128" y="102" width="64" height="18" rx="9" fill="white" />
//       <ellipse cx="160" cy="96" rx="36" ry="32" fill="white" />
//       {/* Hat shadow line */}
//       <path d="M130 108 Q160 114 190 108" stroke="#E8DDD6" strokeWidth="2" fill="none" />

//       {/* Face details */}
//       {/* Eyes */}
//       <ellipse cx="142" cy="186" rx="7" ry="8" fill="#2C1A0E" />
//       <ellipse cx="178" cy="186" rx="7" ry="8" fill="#2C1A0E" />
//       {/* Eye shine */}
//       <circle cx="145" cy="183" r="2.5" fill="white" />
//       <circle cx="181" cy="183" r="2.5" fill="white" />
//       {/* Eyebrows */}
//       <path d="M133 176 Q142 171 151 174" stroke="#2C1A0E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
//       <path d="M169 174 Q178 171 187 176" stroke="#2C1A0E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
//       {/* Nose */}
//       <path d="M160 192 Q156 202 160 206 Q164 202 160 192" fill="#A0724A" opacity="0.6" />
//       {/* Smile */}
//       <path d="M147 214 Q160 224 173 214" stroke="#8B5030" strokeWidth="3" fill="none" strokeLinecap="round" />
//       {/* Cheeks */}
//       <ellipse cx="132" cy="207" rx="12" ry="8" fill="#E8856A" opacity="0.35" />
//       <ellipse cx="188" cy="207" rx="12" ry="8" fill="#E8856A" opacity="0.35" />

//       {/* Earrings */}
//       <circle cx="103" cy="193" r="5" fill="#F5A623" />
//       <ellipse cx="103" cy="202" rx="3" ry="6" fill="#F5A623" opacity="0.8" />
//       <circle cx="217" cy="193" r="5" fill="#F5A623" />
//       <ellipse cx="217" cy="202" rx="3" ry="6" fill="#F5A623" opacity="0.8" />

//       {/* Bindi */}
//       <circle cx="160" cy="173" r="4" fill="#C0392B" />

//       {/* Steam from spoon - animated via CSS */}
//       <g className="founder-steam" opacity="0.5">
//         <path d="M272 252 Q268 242 272 232 Q276 222 272 212" stroke="#FF9F6B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
//         <path d="M282 248 Q278 238 282 228 Q286 218 282 208" stroke="#FF9F6B" strokeWidth="2" fill="none" strokeLinecap="round" />
//       </g>
//     </svg>
//   );
// }

// /* ─────────────────────────────────────────────
//    VISION CARD HIGHLIGHTS
// ───────────────────────────────────────────── */
// const VISION_POINTS = [
//   { icon: '🌿', label: 'No Preservatives', desc: 'Every meal made fresh daily — zero shortcuts, zero chemicals.' },
//   { icon: '🧡', label: 'Made with Love', desc: 'Recipes passed through generations, cooked with maternal care.' },
//   { icon: '🏠', label: 'Ghar ka Khana', desc: 'Authentic Delhi-style cooking that tastes just like home.' },
// ];

// /* ─────────────────────────────────────────────
//    MAIN COMPONENT
// ───────────────────────────────────────────── */
// export default function FounderSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) setVisible(true); },
//       { threshold: 0.08 }
//     );
//     if (sectionRef.current) obs.observe(sectionRef.current);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');

//         :root {
//           --saffron:   #FF6B2C;
//           --turmeric:  #F5A623;
//           --cream:     #FFF8F0;
//           --deep:      #1A0A00;
//           --red:       #C0392B;
//           --green:     #2D6A4F;
//         }

//         /* ── Section shell ── */
//         .fs-section {
//           padding: 80px 0 96px;
//           background: linear-gradient(170deg, #FFF8F0 0%, #ffffff 50%, #FFF4E8 100%);
//           position: relative;
//           overflow: hidden;
//           font-family: 'DM Sans', sans-serif;
//         }

//         /* ── Subtle dot pattern ── */
//         .fs-dots {
//           position: absolute; inset: 0; pointer-events: none; z-index: 0;
//           background-image: radial-gradient(circle, rgba(255,107,44,0.07) 1.5px, transparent 1.5px);
//           background-size: 26px 26px;
//         }

//         /* ── Blob accents ── */
//         .fs-blob {
//           position: absolute; border-radius: 50%;
//           filter: blur(90px); pointer-events: none; z-index: 0;
//         }

//         /* ── Container ── */
//         .fs-container {
//           max-width: 1200px; margin: 0 auto;
//           padding: 0 20px;
//           position: relative; z-index: 2;
//         }

//         /* ── Section header ── */
//         .fs-header {
//           text-align: center;
//           margin-bottom: 56px;
//         }
//         .fs-tag {
//           display: inline-flex; align-items: center; gap: 6px;
//           background: rgba(255,107,44,0.1);
//           border: 1px solid rgba(255,107,44,0.25);
//           border-radius: 50px;
//           padding: 5px 16px;
//           font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
//           color: var(--saffron); margin-bottom: 16px;
//         }
//         .fs-heading {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(32px, 5.5vw, 54px);
//           font-weight: 800; color: var(--deep);
//           line-height: 1.08; letter-spacing: -0.5px;
//           margin: 0 0 12px;
//         }
//         .fs-heading em { color: var(--saffron); font-style: italic; }
//         .fs-subhead {
//           color: #9B7B6A; font-size: 15px; font-weight: 500;
//           letter-spacing: 1px; text-transform: uppercase; font-size: 12px;
//         }

//         /* ── Main two-col layout ── */
//         .fs-layout {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 40px;
//           align-items: start;
//         }
//         @media (min-width: 900px) {
//           .fs-layout {
//             grid-template-columns: 420px 1fr;
//             gap: 60px;
//             align-items: center;
//           }
//         }
//         @media (min-width: 1100px) {
//           .fs-layout { grid-template-columns: 460px 1fr; gap: 80px; }
//         }

//         /* ── Left: founder card ── */
//         .fs-founder-card {
//           background: #fff;
//           border-radius: 28px;
//           overflow: hidden;
//           box-shadow: 0 24px 60px rgba(26,10,0,0.10);
//           border: 1px solid rgba(255,107,44,0.12);
//           position: relative;
//         }

//         /* Warm gradient top strip */
//         .fs-card-stripe {
//           height: 8px;
//           background: linear-gradient(90deg, var(--red), var(--saffron), var(--turmeric));
//         }

//         .fs-card-body {
//           padding: 28px 28px 0;
//           display: flex;
//           align-items: flex-end;
//           gap: 24px;
//         }

//         /* Illustration frame */
//         .fs-illus-frame {
//           flex-shrink: 0;
//           width: 160px;
//           height: 200px;
//           border-radius: 18px 18px 0 0;
//           overflow: hidden;
//           background: linear-gradient(180deg, #FFE4CC 0%, #FFF0E0 100%);
//           position: relative;
//         }

//         /* Name block beside illustration */
//         .fs-name-block {
//           padding-bottom: 20px;
//         }
//         .fs-divider-line {
//           width: 3px; height: 48px;
//           background: linear-gradient(180deg, var(--saffron), var(--turmeric));
//           border-radius: 2px;
//           display: inline-block;
//           vertical-align: middle;
//           margin-right: 14px;
//         }

//         /* Bio text area */
//         .fs-card-bio {
//           padding: 20px 28px 28px;
//           border-top: 1px solid rgba(255,107,44,0.08);
//           margin-top: 20px;
//         }

//         /* Quote mark */
//         .fs-quote-mark {
//           font-family: 'Playfair Display', serif;
//           font-size: 80px; color: rgba(255,107,44,0.12);
//           line-height: 0.7; float: left; margin-right: 6px;
//           margin-top: 12px;
//           font-style: italic;
//         }

//         /* Signature badge */
//         .fs-signature {
//           margin-top: 18px;
//           display: flex; align-items: center; gap: 10px;
//           padding: 10px 14px;
//           background: rgba(255,107,44,0.06);
//           border-radius: 12px;
//           border: 1px solid rgba(255,107,44,0.14);
//         }

//         /* ── Right: vision card ── */
//         .fs-vision-card {
//           background: linear-gradient(145deg, #FFF4ED 0%, #FFF8F0 100%);
//           border: 1px solid rgba(255,107,44,0.16);
//           border-radius: 28px;
//           padding: 32px 32px 28px;
//           box-shadow: 0 12px 40px rgba(255,107,44,0.07);
//         }

//         .fs-vision-title {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(18px, 2.5vw, 24px);
//           font-weight: 800; color: var(--deep);
//           margin-bottom: 6px;
//         }
//         .fs-vision-subtitle {
//           font-size: 12px; color: var(--saffron);
//           font-weight: 700; letter-spacing: 2px;
//           text-transform: uppercase;
//           font-style: italic;
//           padding: 6px 12px;
//           background: rgba(255,107,44,0.08);
//           border-radius: 8px;
//           display: inline-block;
//           margin-bottom: 22px;
//           border: 1px solid rgba(255,107,44,0.2);
//         }

//         .fs-vision-body {
//           font-size: clamp(13px, 1.6vw, 15px);
//           color: #6B5344; line-height: 1.8;
//           margin-bottom: 20px;
//         }

//         /* Vision highlight points */
//         .fs-vision-points {
//           display: flex; flex-direction: column; gap: 14px;
//           margin-bottom: 28px;
//         }
//         .fs-vision-point {
//           display: flex; align-items: flex-start; gap: 14px;
//           padding: 14px 16px;
//           background: #fff;
//           border-radius: 14px;
//           border: 1px solid rgba(255,107,44,0.12);
//           transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s;
//         }
//         .fs-vision-point:hover {
//           transform: translateX(6px);
//           box-shadow: 0 8px 24px rgba(255,107,44,0.12);
//         }
//         .fs-vp-icon {
//           width: 40px; height: 40px; border-radius: 10px;
//           background: linear-gradient(135deg, #FFF4ED, #FFE4CC);
//           display: flex; align-items: center; justify-content: center;
//           font-size: 18px; flex-shrink: 0;
//           box-shadow: 0 2px 8px rgba(255,107,44,0.12);
//         }
//         .fs-vp-label {
//           font-weight: 700; font-size: 14px; color: var(--deep); margin-bottom: 2px;
//         }
//         .fs-vp-desc { font-size: 12px; color: #9B7B6A; line-height: 1.5; }

//         /* CTA */
//         .fs-cta-row {
//           display: flex; gap: 12px; flex-wrap: wrap;
//         }
//         .fs-btn-primary {
//           background: linear-gradient(135deg, #FF6B2C, #E84A1A);
//           color: #fff; border: none; border-radius: 50px;
//           padding: 13px 26px;
//           font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 700;
//           cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
//           box-shadow: 0 8px 24px rgba(255,107,44,0.35);
//           transition: all 0.3s cubic-bezier(.34,1.56,.64,1);
//           text-decoration: none; white-space: nowrap;
//           min-height: 48px;
//         }
//         .fs-btn-primary:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 14px 32px rgba(255,107,44,0.45); }

//         .fs-btn-secondary {
//           display: inline-flex; align-items: center; gap: 8px;
//           padding: 13px 22px; border-radius: 50px;
//           border: 1.5px solid rgba(255,107,44,0.25);
//           background: rgba(255,107,44,0.06);
//           font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600;
//           color: #5C3D2E; text-decoration: none; white-space: nowrap;
//           transition: all 0.2s;
//           min-height: 48px;
//         }
//         .fs-btn-secondary:hover { background: rgba(255,107,44,0.12); }

//         /* ── Reveal animations ── */
//         .fs-reveal {
//           opacity: 0;
//           transform: translateY(30px);
//           transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1);
//         }
//         .fs-reveal.visible { opacity: 1; transform: translateY(0); }
//         .fs-reveal.d1 { transition-delay: 0.1s; }
//         .fs-reveal.d2 { transition-delay: 0.2s; }
//         .fs-reveal.d3 { transition-delay: 0.3s; }
//         .fs-reveal.d4 { transition-delay: 0.4s; }
//         .fs-reveal.d5 { transition-delay: 0.5s; }

//         /* ── Steam animation ── */
//         @keyframes steamRise {
//           0%   { transform: translateY(0) scaleX(1); opacity: 0.5; }
//           50%  { transform: translateY(-12px) scaleX(1.15); opacity: 0.3; }
//           100% { transform: translateY(-24px) scaleX(0.8); opacity: 0; }
//         }
//         .founder-steam path { animation: steamRise 2s ease-in-out infinite; }
//         .founder-steam path:nth-child(2) { animation-delay: 0.5s; }

//         /* ── Floating badge ── */
//         .fs-floating-badge {
//           position: absolute;
//           top: -16px; right: -12px;
//           background: linear-gradient(135deg, var(--saffron), var(--turmeric));
//           color: #fff;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 11px; font-weight: 800;
//           padding: 8px 14px;
//           border-radius: 50px;
//           box-shadow: 0 6px 20px rgba(255,107,44,0.4);
//           white-space: nowrap;
//           animation: floatBadge 3s ease-in-out infinite;
//           letter-spacing: 0.5px;
//           border: 2px solid #fff;
//         }
//         @keyframes floatBadge {
//           0%,100% { transform: translateY(0) rotate(-2deg); }
//           50%      { transform: translateY(-6px) rotate(2deg); }
//         }

//         /* ── Decorative spinning ring ── */
//         .fs-spin-ring {
//           position: absolute;
//           border-radius: 50%;
//           border: 2px dashed rgba(255,107,44,0.18);
//           pointer-events: none;
//           animation: fsSpin 20s linear infinite;
//         }
//         @keyframes fsSpin {
//           from { transform: rotate(0deg); }
//           to   { transform: rotate(360deg); }
//         }
//       `}</style>

//       <section id="founder" ref={sectionRef} className="fs-section">
//         {/* Background layers */}
//         <div className="fs-dots" />
//         <div className="fs-blob" style={{ width: 500, height: 500, background: '#FFD580', top: -120, left: -180, opacity: 0.12 }} />
//         <div className="fs-blob" style={{ width: 380, height: 380, background: '#FF9F6B', bottom: -80, right: -100, opacity: 0.10 }} />

//         <div className="fs-container">

//           {/* Section header */}
//           <div className={`fs-header fs-reveal${visible ? ' visible' : ''}`}>
//             <div className="fs-tag">
//               <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--saffron)', display: 'inline-block' }} />
//               The Heart Behind The Kitchen
//             </div>
//             <h2 className="fs-heading">
//               Meet <em>Our Founder</em>
//             </h2>
//             <p className="fs-subhead">The Vision Behind The Chef Mom · Dubai</p>
//           </div>

//           {/* Main layout */}
//           <div className="fs-layout">

//             {/* ── LEFT: Founder card ── */}
//             <div className={`fs-reveal d1${visible ? ' visible' : ''}`} style={{ position: 'relative' }}>
//               {/* Decorative spinning ring behind card */}
//               <div className="fs-spin-ring" style={{ width: 380, height: 380, top: 60, left: 20, zIndex: 0 }} />

//               <div className="fs-founder-card" style={{ position: 'relative', zIndex: 1 }}>
//                 <div className="fs-card-stripe" />

//                 {/* Floating badge */}
//                 <div className="fs-floating-badge">👩‍🍳 Home Chef · Dubai</div>

//                 {/* Illustration + name side-by-side */}
//                 <div className="fs-card-body">
//                   <div className="fs-illus-frame">
//                     <FounderIllustration />
//                   </div>
//                   <div className="fs-name-block">
//                     <div style={{ display: 'flex', alignItems: 'center', gap: 0 }}>
//                       <span className="fs-divider-line" />
//                       <div>
//                         <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 800, color: 'var(--deep)', lineHeight: 1.2 }}>
//                           Anita Sharma
//                         </div>
//                         <div style={{ fontSize: 12, color: 'var(--saffron)', fontWeight: 700, letterSpacing: 1.5, textTransform: 'uppercase', marginTop: 4 }}>
//                           Founder & Head Chef
//                         </div>
//                       </div>
//                     </div>

//                     {/* Stars */}
//                     <div style={{ display: 'flex', gap: 2, marginTop: 12 }}>
//                       {[...Array(5)].map((_, i) => (
//                         <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F5A623">
//                           <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                         </svg>
//                       ))}
//                     </div>
//                     <div style={{ fontSize: 11, color: '#9B7B6A', marginTop: 4, fontWeight: 500 }}>500+ happy families served</div>
//                   </div>
//                 </div>

//                 {/* Bio */}
//                 <div className="fs-card-bio">
//                   <span className="fs-quote-mark">"</span>
//                   <p style={{ fontSize: 14, color: '#5C3D2E', lineHeight: 1.75, marginBottom: 12 }}>
//                     Anita leads The Chef Mom kitchen with a singular focus — delivering the true taste of home-cooked Delhi food to Indian families in Dubai. Every dish she prepares carries the warmth of tradition and the care of a mother's touch.
//                   </p>
//                   <p style={{ fontSize: 13, color: '#9B7B6A', lineHeight: 1.7 }}>
//                     With an emphasis on fresh, locally sourced ingredients and zero preservatives, she ensures each meal reflects both tradition and wellbeing — a perfect balance of flavour and nutrition.
//                   </p>

//                   {/* Signature badge */}
//                   <div className="fs-signature">
//                     <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'linear-gradient(135deg, #FFF4ED, #FFE4CC)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 18, flexShrink: 0, border: '1px solid rgba(255,107,44,0.2)' }}>
//                       ✍️
//                     </div>
//                     <div>
//                       <div style={{ fontFamily: "'Playfair Display', serif", fontSize: 13, fontStyle: 'italic', color: 'var(--saffron)', fontWeight: 700 }}>
//                         "From my kitchen to your heart"
//                       </div>
//                       <div style={{ fontSize: 10, color: '#9B7B6A', marginTop: 1 }}>— Anita Sharma, The Chef Mom</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* ── RIGHT: Vision card ── */}
//             <div className={`fs-reveal d2${visible ? ' visible' : ''}`}>
//               <div className="fs-vision-card">
//                 <div className="fs-vision-title">The Vision Behind The Chef Mom</div>
//                 <div className="fs-vision-subtitle">Maintaining Quality · Freshness · Love</div>

//                 <p className="fs-vision-body">
//                   At The Chef Mom, we believe in delivering the true essence of Indian home-cooked meals — with an unwavering focus on quality, freshness, and heart. Our motto,{' '}
//                   <strong style={{ color: 'var(--deep)', background: 'rgba(255,107,44,0.08)', padding: '2px 8px', borderRadius: 6 }}>
//                     "From Our Kitchen to Your Heart,"
//                   </strong>
//                   {' '}reflects our passion for providing wholesome, delicious tiffins that bring the flavours of India straight to your doorstep in Dubai.
//                 </p>

//                 <p className="fs-vision-body" style={{ marginBottom: 24 }}>
//                   Enjoy the rich diversity of Indian cuisine with our carefully curated meal plans — designed to bring a touch of home to your dining experience every single day.
//                 </p>

//                 {/* Vision points */}
//                 <div className="fs-vision-points">
//                   {VISION_POINTS.map(({ icon, label, desc }, i) => (
//                     <div key={label} className={`fs-vision-point fs-reveal d${i + 3}${visible ? ' visible' : ''}`}>
//                       <div className="fs-vp-icon">{icon}</div>
//                       <div>
//                         <div className="fs-vp-label">{label}</div>
//                         <div className="fs-vp-desc">{desc}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTAs */}
//                 <div className="fs-cta-row">
//                   <a href={WA_ORDER} target="_blank" rel="noreferrer" className="fs-btn-primary">
//                     Book a Tiffin <ChevronRight size={16} />
//                   </a>
//                   <button
//                     className="fs-btn-secondary"
//                     onClick={() => document.getElementById('meal-plans')?.scrollIntoView({ behavior: 'smooth' })}
//                   >
//                     View Meal Plans
//                   </button>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// }














// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import Image from 'next/image';
// import { ChevronRight, ChevronLeft } from 'lucide-react';

// const WHATSAPP_NUMBER = '971557998925';
// const WA_ORDER_MSG = encodeURIComponent(
//   `👋 Hello The Chef Mom!\n\nI'd like to subscribe to a meal plan.\n\nPlease share the available plans and next steps.\n\nThank you! 🙏`
// );
// const WA_ORDER = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_ORDER_MSG}`;

// /* ─────────────────────────────────────────────
//    GRAPHIC ILLUSTRATION — fallback / slide 2
// ───────────────────────────────────────────── */
// function FounderIllustration() {
//   return (
//     <svg viewBox="0 0 320 420" xmlns="http://www.w3.org/2000/svg" style={{ width: '100%', height: '100%', display: 'block' }}>
//       <defs>
//         <radialGradient id="bgGrad" cx="50%" cy="60%" r="60%">
//           <stop offset="0%" stopColor="#FFE4CC" />
//           <stop offset="100%" stopColor="#FFF8F0" />
//         </radialGradient>
//         <radialGradient id="skinGrad" cx="40%" cy="35%" r="65%">
//           <stop offset="0%" stopColor="#D4956A" />
//           <stop offset="100%" stopColor="#B5704A" />
//         </radialGradient>
//         <radialGradient id="apronGrad" cx="50%" cy="30%" r="70%">
//           <stop offset="0%" stopColor="#FF8C4A" />
//           <stop offset="100%" stopColor="#FF6B2C" />
//         </radialGradient>
//         <linearGradient id="shirtGrad" x1="0%" y1="0%" x2="100%" y2="100%">
//           <stop offset="0%" stopColor="#C0392B" />
//           <stop offset="100%" stopColor="#96281B" />
//         </linearGradient>
//         <linearGradient id="hairGrad" x1="0%" y1="0%" x2="0%" y2="100%">
//           <stop offset="0%" stopColor="#4A3728" />
//           <stop offset="100%" stopColor="#2C2018" />
//         </linearGradient>
//         <filter id="softShadow">
//           <feDropShadow dx="0" dy="4" stdDeviation="6" floodColor="rgba(26,10,0,0.15)" />
//         </filter>
//       </defs>
//       <ellipse cx="160" cy="240" rx="148" ry="170" fill="url(#bgGrad)" />
//       <ellipse cx="160" cy="370" rx="90" ry="70" fill="url(#shirtGrad)" />
//       <rect x="70" y="300" width="180" height="80" rx="20" fill="url(#shirtGrad)" />
//       <path d="M118 260 Q160 248 202 260 L210 370 Q160 385 110 370 Z" fill="url(#apronGrad)" opacity="0.92" />
//       <rect x="136" y="315" width="48" height="34" rx="8" fill="rgba(255,255,255,0.25)" />
//       <path d="M118 260 Q100 240 108 220" stroke="#FF6B2C" strokeWidth="6" fill="none" strokeLinecap="round" />
//       <path d="M202 260 Q220 240 212 220" stroke="#FF6B2C" strokeWidth="6" fill="none" strokeLinecap="round" />
//       <path d="M108 220 Q160 208 212 220" stroke="#FF6B2C" strokeWidth="6" fill="none" strokeLinecap="round" />
//       <ellipse cx="96" cy="300" rx="22" ry="52" fill="url(#skinGrad)" transform="rotate(-18 96 300)" />
//       <ellipse cx="224" cy="290" rx="22" ry="52" fill="url(#skinGrad)" transform="rotate(22 224 290)" />
//       <ellipse cx="78" cy="338" rx="15" ry="12" fill="url(#skinGrad)" transform="rotate(-18 78 338)" />
//       <ellipse cx="242" cy="325" rx="15" ry="12" fill="url(#skinGrad)" transform="rotate(22 242 325)" />
//       <line x1="248" y1="318" x2="270" y2="268" stroke="#8B5E3C" strokeWidth="5" strokeLinecap="round" />
//       <ellipse cx="272" cy="263" rx="11" ry="8" fill="#A0724A" transform="rotate(-30 272 263)" />
//       <rect x="147" y="222" width="26" height="42" rx="12" fill="url(#skinGrad)" />
//       <ellipse cx="160" cy="190" rx="58" ry="62" fill="url(#skinGrad)" filter="url(#softShadow)" />
//       <ellipse cx="160" cy="138" rx="52" ry="30" fill="url(#hairGrad)" />
//       <ellipse cx="108" cy="168" rx="18" ry="30" fill="url(#hairGrad)" />
//       <ellipse cx="212" cy="168" rx="18" ry="30" fill="url(#hairGrad)" />
//       <ellipse cx="160" cy="128" rx="28" ry="20" fill="#3D2B1A" />
//       <ellipse cx="160" cy="122" rx="18" ry="13" fill="#4A3728" />
//       <rect x="128" y="102" width="64" height="18" rx="9" fill="white" />
//       <ellipse cx="160" cy="96" rx="36" ry="32" fill="white" />
//       <path d="M130 108 Q160 114 190 108" stroke="#E8DDD6" strokeWidth="2" fill="none" />
//       <ellipse cx="142" cy="186" rx="7" ry="8" fill="#2C1A0E" />
//       <ellipse cx="178" cy="186" rx="7" ry="8" fill="#2C1A0E" />
//       <circle cx="145" cy="183" r="2.5" fill="white" />
//       <circle cx="181" cy="183" r="2.5" fill="white" />
//       <path d="M133 176 Q142 171 151 174" stroke="#2C1A0E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
//       <path d="M169 174 Q178 171 187 176" stroke="#2C1A0E" strokeWidth="2.5" fill="none" strokeLinecap="round" />
//       <path d="M160 192 Q156 202 160 206 Q164 202 160 192" fill="#A0724A" opacity="0.6" />
//       <path d="M147 214 Q160 224 173 214" stroke="#8B5030" strokeWidth="3" fill="none" strokeLinecap="round" />
//       <ellipse cx="132" cy="207" rx="12" ry="8" fill="#E8856A" opacity="0.35" />
//       <ellipse cx="188" cy="207" rx="12" ry="8" fill="#E8856A" opacity="0.35" />
//       <circle cx="103" cy="193" r="5" fill="#F5A623" />
//       <ellipse cx="103" cy="202" rx="3" ry="6" fill="#F5A623" opacity="0.8" />
//       <circle cx="217" cy="193" r="5" fill="#F5A623" />
//       <ellipse cx="217" cy="202" rx="3" ry="6" fill="#F5A623" opacity="0.8" />
//       <circle cx="160" cy="173" r="4" fill="#C0392B" />
//       <g className="founder-steam" opacity="0.5">
//         <path d="M272 252 Q268 242 272 232 Q276 222 272 212" stroke="#FF9F6B" strokeWidth="2.5" fill="none" strokeLinecap="round" />
//         <path d="M282 248 Q278 238 282 228 Q286 218 282 208" stroke="#FF9F6B" strokeWidth="2" fill="none" strokeLinecap="round" />
//       </g>
//     </svg>
//   );
// }

// /* ─────────────────────────────────────────────
//    IMAGE SLIDER — real photo first, graphic second
// ───────────────────────────────────────────── */
// function FounderImageSlider() {
//   const [slide, setSlide] = useState(0);
//   const [dragging, setDragging] = useState(false);
//   const startX = useRef(0);

//   const prev = () => setSlide(0);
//   const next = () => setSlide(1);

//   const onTouchStart = (e: React.TouchEvent) => {
//     startX.current = e.touches[0].clientX;
//   };
//   const onTouchEnd = (e: React.TouchEvent) => {
//     const diff = startX.current - e.changedTouches[0].clientX;
//     if (diff > 40) next();
//     if (diff < -40) prev();
//   };
//   const onMouseDown = (e: React.MouseEvent) => {
//     setDragging(false);
//     startX.current = e.clientX;
//   };
//   const onMouseUp = (e: React.MouseEvent) => {
//     if (dragging) return;
//     const diff = startX.current - e.clientX;
//     if (diff > 40) next();
//     if (diff < -40) prev();
//   };

//   return (
//     <div className="fs-slider-wrap">
//       {/* Slides */}
//       <div
//         className="fs-slider-track"
//         style={{ transform: `translateX(-${slide * 100}%)` }}
//         onTouchStart={onTouchStart}
//         onTouchEnd={onTouchEnd}
//         onMouseDown={onMouseDown}
//         onMouseUp={onMouseUp}
//       >
//         {/* Slide 1 — real photo */}
//         <div className="fs-slide">
//           <div className="fs-real-photo-wrap">
//             <Image
//               src="/chefmom/chefmomfounder.jpeg"
//               alt="Hema — Founder of The Chef Mom"
//               fill
//               style={{ objectFit: 'cover', objectPosition: 'top center' }}
//               sizes="(max-width: 768px) 100vw, 420px"
//               priority
//             />
//             <div className="fs-photo-gradient" />
//           </div>
//         </div>

//         {/* Slide 2 — graphic illustration */}
//         <div className="fs-slide">
//           <div className="fs-illus-slide">
//             <FounderIllustration />
//           </div>
//         </div>
//       </div>

//       {/* Arrows */}
//       {slide === 0 && (
//         <button className="fs-arrow fs-arrow-right" onClick={next} aria-label="See illustration">
//           <ChevronRight size={18} />
//         </button>
//       )}
//       {slide === 1 && (
//         <button className="fs-arrow fs-arrow-left" onClick={prev} aria-label="See real photo">
//           <ChevronLeft size={18} />
//         </button>
//       )}

//       {/* Dots */}
//       <div className="fs-dots-nav">
//         <button
//           className={`fs-dot ${slide === 0 ? 'active' : ''}`}
//           onClick={prev}
//           aria-label="Real photo"
//         />
//         <button
//           className={`fs-dot ${slide === 1 ? 'active' : ''}`}
//           onClick={next}
//           aria-label="Illustration"
//         />
//       </div>

//       {/* Slide label */}
//       <div className="fs-slide-label">
//         {slide === 0 ? '📸 Real photo' : '🎨 Illustration'}
//       </div>
//     </div>
//   );
// }

// /* ─────────────────────────────────────────────
//    VISION POINTS
// ───────────────────────────────────────────── */
// const VISION_POINTS = [
//   { icon: '🌿', label: 'No Preservatives', desc: 'Every meal made fresh daily — zero shortcuts, zero chemicals.' },
//   { icon: '🧡', label: 'Less Oil, Less Masala', desc: 'Balanced flavours that remind you of home, not heavy restaurant food.' },
//   { icon: '🏠', label: 'Ghar ka Khana', desc: 'Authentic Delhi-style cooking that feels safe, comforting, and cared for.' },
// ];

// /* ─────────────────────────────────────────────
//    MAIN COMPONENT
// ───────────────────────────────────────────── */
// export default function FounderSection() {
//   const sectionRef = useRef<HTMLElement>(null);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const obs = new IntersectionObserver(
//       ([e]) => { if (e.isIntersecting) setVisible(true); },
//       { threshold: 0.06 }
//     );
//     if (sectionRef.current) obs.observe(sectionRef.current);
//     return () => obs.disconnect();
//   }, []);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');

//         :root {
//           --saffron:  #FF6B2C;
//           --turmeric: #F5A623;
//           --cream:    #FFF8F0;
//           --deep:     #1A0A00;
//           --red:      #C0392B;
//           --green:    #2D6A4F;
//         }

//         .fs-section {
//           padding: 80px 0 96px;
//           background: linear-gradient(170deg, #FFF8F0 0%, #ffffff 50%, #FFF4E8 100%);
//           position: relative; overflow: hidden;
//           font-family: 'DM Sans', sans-serif;
//         }
//         .fs-bg-dots {
//           position: absolute; inset: 0; pointer-events: none; z-index: 0;
//           background-image: radial-gradient(circle, rgba(255,107,44,0.07) 1.5px, transparent 1.5px);
//           background-size: 26px 26px;
//         }
//         .fs-blob {
//           position: absolute; border-radius: 50%;
//           filter: blur(90px); pointer-events: none; z-index: 0;
//         }
//         .fs-container {
//           max-width: 1200px; margin: 0 auto;
//           padding: 0 20px; position: relative; z-index: 2;
//         }

//         /* Header */
//         .fs-header { text-align: center; margin-bottom: 56px; }
//         .fs-tag {
//           display: inline-flex; align-items: center; gap: 6px;
//           background: rgba(255,107,44,0.1);
//           border: 1px solid rgba(255,107,44,0.25);
//           border-radius: 50px; padding: 5px 16px;
//           font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
//           color: var(--saffron); margin-bottom: 16px;
//         }
//         .fs-heading {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(32px, 5.5vw, 54px);
//           font-weight: 800; color: var(--deep);
//           line-height: 1.08; letter-spacing: -0.5px;
//           margin: 0 0 12px;
//         }
//         .fs-heading em { color: var(--saffron); font-style: italic; }
//         .fs-subhead {
//           color: #9B7B6A; font-size: 12px; font-weight: 500;
//           letter-spacing: 1px; text-transform: uppercase;
//         }

//         /* Layout */
//         .fs-layout {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 40px; align-items: start;
//         }
//         @media (min-width: 900px) {
//           .fs-layout { grid-template-columns: 420px 1fr; gap: 60px; align-items: center; }
//         }
//         @media (min-width: 1100px) {
//           .fs-layout { grid-template-columns: 460px 1fr; gap: 80px; }
//         }

//         /* Founder card */
//         .fs-founder-card {
//           background: #fff; border-radius: 28px; overflow: hidden;
//           box-shadow: 0 24px 60px rgba(26,10,0,0.10);
//           border: 1px solid rgba(255,107,44,0.12);
//           position: relative;
//         }
//         .fs-card-stripe {
//           height: 8px;
//           background: linear-gradient(90deg, var(--red), var(--saffron), var(--turmeric));
//         }

//         /* ── Image Slider ── */
//         .fs-slider-wrap {
//           position: relative;
//           width: 100%;
//           height: 340px;
//           overflow: hidden;
//           background: linear-gradient(180deg, #FFE4CC, #FFF0E0);
//         }
//         .fs-slider-track {
//           display: flex;
//           width: 200%;
//           height: 100%;
//           transition: transform 0.45s cubic-bezier(.77,0,.18,1);
//           cursor: grab;
//           user-select: none;
//         }
//         .fs-slider-track:active { cursor: grabbing; }
//         .fs-slide {
//           width: 50%;
//           height: 100%;
//           flex-shrink: 0;
//           position: relative;
//         }
//         .fs-real-photo-wrap {
//           position: relative;
//           width: 100%; height: 100%;
//         }
//         .fs-photo-gradient {
//           position: absolute; inset: 0;
//           background: linear-gradient(to bottom, transparent 55%, rgba(26,10,0,0.35) 100%);
//           pointer-events: none;
//         }
//         .fs-illus-slide {
//           width: 100%; height: 100%;
//           display: flex; align-items: flex-end;
//           background: linear-gradient(180deg, #FFE4CC 0%, #FFF0E0 100%);
//           padding: 0 20px;
//         }

//         /* Arrows */
//         .fs-arrow {
//           position: absolute; top: 50%; transform: translateY(-50%);
//           width: 34px; height: 34px; border-radius: 50%;
//           background: rgba(255,255,255,0.9);
//           border: 1.5px solid rgba(255,107,44,0.25);
//           display: flex; align-items: center; justify-content: center;
//           cursor: pointer; color: var(--saffron);
//           box-shadow: 0 4px 14px rgba(0,0,0,0.12);
//           transition: all 0.2s; z-index: 10;
//         }
//         .fs-arrow:hover { background: var(--saffron); color: #fff; transform: translateY(-50%) scale(1.08); }
//         .fs-arrow-right { right: 10px; }
//         .fs-arrow-left  { left: 10px; }

//         /* Dots nav */
//         .fs-dots-nav {
//           position: absolute; bottom: 40px; left: 50%;
//           transform: translateX(-50%);
//           display: flex; gap: 6px; z-index: 10;
//         }
//         .fs-dot {
//           width: 7px; height: 7px; border-radius: 50%;
//           background: rgba(255,255,255,0.5);
//           border: none; cursor: pointer; padding: 0;
//           transition: all 0.25s;
//         }
//         .fs-dot.active { background: #fff; width: 20px; border-radius: 4px; }

//         /* Slide label */
//         .fs-slide-label {
//           position: absolute; bottom: 12px; left: 50%;
//           transform: translateX(-50%);
//           font-size: 10px; font-weight: 700; letter-spacing: 1px;
//           color: rgba(255,255,255,0.8);
//           background: rgba(0,0,0,0.25);
//           padding: 3px 10px; border-radius: 20px;
//           white-space: nowrap; z-index: 10;
//           backdrop-filter: blur(4px);
//         }

//         /* Name + bio block */
//         .fs-card-info {
//           padding: 20px 24px 24px;
//         }
//         .fs-name-row {
//           display: flex; align-items: center; gap: 0;
//           margin-bottom: 10px;
//         }
//         .fs-divider-line {
//           width: 3px; height: 44px;
//           background: linear-gradient(180deg, var(--saffron), var(--turmeric));
//           border-radius: 2px; display: inline-block;
//           vertical-align: middle; margin-right: 14px; flex-shrink: 0;
//         }
//         .fs-founder-name {
//           font-family: 'Playfair Display', serif;
//           font-size: 22px; font-weight: 800; color: var(--deep); line-height: 1.2;
//         }
//         .fs-founder-role {
//           font-size: 11px; color: var(--saffron); font-weight: 700;
//           letter-spacing: 1.5px; text-transform: uppercase; margin-top: 3px;
//         }
//         .fs-stars { display: flex; gap: 2px; margin-bottom: 4px; }
//         .fs-families { font-size: 11px; color: #9B7B6A; margin-bottom: 14px; font-weight: 500; }

//         .fs-quote-mark {
//           font-family: 'Playfair Display', serif;
//           font-size: 72px; color: rgba(255,107,44,0.12);
//           line-height: 0.7; float: left;
//           margin-right: 6px; margin-top: 12px; font-style: italic;
//         }
//         .fs-bio-text {
//           font-size: 13px; color: #5C3D2E; line-height: 1.8; margin-bottom: 10px;
//         }

//         /* Signature */
//         .fs-signature {
//           margin-top: 14px;
//           display: flex; align-items: center; gap: 10px;
//           padding: 10px 14px;
//           background: rgba(255,107,44,0.06);
//           border-radius: 12px;
//           border: 1px solid rgba(255,107,44,0.14);
//         }
//         .fs-sig-icon {
//           width: 36px; height: 36px; border-radius: 50%;
//           background: linear-gradient(135deg, #FFF4ED, #FFE4CC);
//           display: flex; align-items: center; justify-content: center;
//           font-size: 18px; flex-shrink: 0;
//           border: 1px solid rgba(255,107,44,0.2);
//         }
//         .fs-sig-quote {
//           font-family: 'Playfair Display', serif;
//           font-size: 13px; font-style: italic; color: var(--saffron); font-weight: 700;
//         }
//         .fs-sig-name { font-size: 10px; color: #9B7B6A; margin-top: 1px; }

//         /* Floating badge */
//         .fs-floating-badge {
//           position: absolute; top: 12px; right: 12px;
//           background: linear-gradient(135deg, var(--saffron), var(--turmeric));
//           color: #fff; font-family: 'DM Sans', sans-serif;
//           font-size: 11px; font-weight: 800;
//           padding: 7px 13px; border-radius: 50px;
//           box-shadow: 0 6px 20px rgba(255,107,44,0.4);
//           white-space: nowrap; letter-spacing: 0.5px;
//           border: 2px solid rgba(255,255,255,0.6);
//           animation: floatBadge 3s ease-in-out infinite; z-index: 10;
//         }
//         @keyframes floatBadge {
//           0%,100% { transform: translateY(0) rotate(-2deg); }
//           50%      { transform: translateY(-5px) rotate(2deg); }
//         }

//         /* ── Vision card ── */
//         .fs-vision-card {
//           background: linear-gradient(145deg, #FFF4ED 0%, #FFF8F0 100%);
//           border: 1px solid rgba(255,107,44,0.16);
//           border-radius: 28px; padding: 32px 32px 28px;
//           box-shadow: 0 12px 40px rgba(255,107,44,0.07);
//         }
//         .fs-vision-title {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(18px, 2.5vw, 24px);
//           font-weight: 800; color: var(--deep); margin-bottom: 6px;
//         }
//         .fs-vision-subtitle {
//           font-size: 11px; color: var(--saffron); font-weight: 700;
//           letter-spacing: 2px; text-transform: uppercase; font-style: italic;
//           padding: 6px 12px; background: rgba(255,107,44,0.08);
//           border-radius: 8px; display: inline-block; margin-bottom: 22px;
//           border: 1px solid rgba(255,107,44,0.2);
//         }
//         .fs-vision-body {
//           font-size: clamp(13px, 1.6vw, 14.5px);
//           color: #6B5344; line-height: 1.85; margin-bottom: 18px;
//         }

//         /* Veg / Non-veg partnership */
//         .fs-brand-split {
//           display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 22px;
//         }
//         .fs-brand-pill {
//           display: flex; align-items: center; gap: 8px;
//           padding: 10px 16px; border-radius: 14px;
//           border: 1.5px solid; flex: 1; min-width: 160px;
//         }
//         .fs-brand-pill.veg {
//           background: rgba(45,106,79,0.07);
//           border-color: rgba(45,106,79,0.25);
//         }
//         .fs-brand-pill.nonveg {
//           background: rgba(192,57,43,0.07);
//           border-color: rgba(192,57,43,0.25);
//         }
//         .fs-brand-dot {
//           width: 10px; height: 10px; border-radius: 50%; flex-shrink: 0;
//         }
//         .fs-brand-dot.veg   { background: #2D6A4F; }
//         .fs-brand-dot.nonveg { background: #C0392B; }
//         .fs-brand-label {
//           font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase;
//         }
//         .fs-brand-label.veg   { color: #2D6A4F; }
//         .fs-brand-label.nonveg { color: #C0392B; }
//         .fs-brand-name {
//           font-size: 13px; font-weight: 700; color: var(--deep);
//         }
//         .fs-brand-desc { font-size: 11px; color: #9B7B6A; }

//         /* Vision points */
//         .fs-vision-points { display: flex; flex-direction: column; gap: 12px; margin-bottom: 26px; }
//         .fs-vision-point {
//           display: flex; align-items: flex-start; gap: 14px;
//           padding: 14px 16px; background: #fff;
//           border-radius: 14px; border: 1px solid rgba(255,107,44,0.12);
//           transition: transform 0.3s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s;
//         }
//         .fs-vision-point:hover { transform: translateX(6px); box-shadow: 0 8px 24px rgba(255,107,44,0.12); }
//         .fs-vp-icon {
//           width: 40px; height: 40px; border-radius: 10px;
//           background: linear-gradient(135deg, #FFF4ED, #FFE4CC);
//           display: flex; align-items: center; justify-content: center;
//           font-size: 18px; flex-shrink: 0;
//           box-shadow: 0 2px 8px rgba(255,107,44,0.12);
//         }
//         .fs-vp-label { font-weight: 700; font-size: 14px; color: var(--deep); margin-bottom: 2px; }
//         .fs-vp-desc  { font-size: 12px; color: #9B7B6A; line-height: 1.5; }

//         /* CTA */
//         .fs-cta-row { display: flex; gap: 12px; flex-wrap: wrap; }
//         .fs-btn-primary {
//           background: linear-gradient(135deg, #FF6B2C, #E84A1A);
//           color: #fff; border: none; border-radius: 50px;
//           padding: 13px 26px;
//           font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 700;
//           cursor: pointer; display: inline-flex; align-items: center; gap: 8px;
//           box-shadow: 0 8px 24px rgba(255,107,44,0.35);
//           transition: all 0.3s cubic-bezier(.34,1.56,.64,1);
//           text-decoration: none; white-space: nowrap; min-height: 48px;
//         }
//         .fs-btn-primary:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 14px 32px rgba(255,107,44,0.45); }
//         .fs-btn-secondary {
//           display: inline-flex; align-items: center; gap: 8px;
//           padding: 13px 22px; border-radius: 50px;
//           border: 1.5px solid rgba(255,107,44,0.25);
//           background: rgba(255,107,44,0.06);
//           font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600;
//           color: #5C3D2E; text-decoration: none; white-space: nowrap;
//           transition: all 0.2s; min-height: 48px; cursor: pointer;
//         }
//         .fs-btn-secondary:hover { background: rgba(255,107,44,0.12); }

//         /* Reveal animations */
//         .fs-reveal {
//           opacity: 0; transform: translateY(30px);
//           transition: opacity 0.7s cubic-bezier(.16,1,.3,1), transform 0.7s cubic-bezier(.16,1,.3,1);
//         }
//         .fs-reveal.visible { opacity: 1; transform: translateY(0); }
//         .fs-reveal.d1 { transition-delay: 0.1s; }
//         .fs-reveal.d2 { transition-delay: 0.2s; }
//         .fs-reveal.d3 { transition-delay: 0.3s; }
//         .fs-reveal.d4 { transition-delay: 0.4s; }
//         .fs-reveal.d5 { transition-delay: 0.5s; }

//         /* Steam */
//         @keyframes steamRise {
//           0%   { transform: translateY(0) scaleX(1); opacity: 0.5; }
//           50%  { transform: translateY(-12px) scaleX(1.15); opacity: 0.3; }
//           100% { transform: translateY(-24px) scaleX(0.8); opacity: 0; }
//         }
//         .founder-steam path { animation: steamRise 2s ease-in-out infinite; }
//         .founder-steam path:nth-child(2) { animation-delay: 0.5s; }

//         /* Spin ring */
//         .fs-spin-ring {
//           position: absolute; border-radius: 50%;
//           border: 2px dashed rgba(255,107,44,0.18);
//           pointer-events: none;
//           animation: fsSpin 20s linear infinite;
//         }
//         @keyframes fsSpin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

//         /* Swipe hint */
//         .fs-swipe-hint {
//           position: absolute; bottom: 62px; left: 50%; transform: translateX(-50%);
//           font-size: 10px; color: rgba(255,255,255,0.7);
//           letter-spacing: 1px; text-transform: uppercase; font-weight: 600;
//           white-space: nowrap; z-index: 10; pointer-events: none;
//           animation: hintFade 3s ease-in-out 1.5s forwards;
//           opacity: 0;
//         }
//         @keyframes hintFade {
//           0%   { opacity: 0; }
//           20%  { opacity: 1; }
//           80%  { opacity: 1; }
//           100% { opacity: 0; }
//         }

//         @media (max-width: 600px) {
//           .fs-vision-card { padding: 22px 18px 20px; }
//           .fs-card-info   { padding: 16px 18px 20px; }
//         }
//       `}</style>

//       <section id="founder" ref={sectionRef} className="fs-section">
//         <div className="fs-bg-dots" />
//         <div className="fs-blob" style={{ width: 500, height: 500, background: '#FFD580', top: -120, left: -180, opacity: 0.12 }} />
//         <div className="fs-blob" style={{ width: 380, height: 380, background: '#FF9F6B', bottom: -80, right: -100, opacity: 0.10 }} />

//         <div className="fs-container">

//           {/* Header */}
//           <div className={`fs-header fs-reveal${visible ? ' visible' : ''}`}>
//             <div className="fs-tag">
//               <span style={{ width: 6, height: 6, borderRadius: '50%', background: 'var(--saffron)', display: 'inline-block' }} />
//               The Heart Behind The Kitchen
//             </div>
//             <h2 className="fs-heading">
//               Meet <em>Our Founder</em>
//             </h2>
//             <p className="fs-subhead">Mom's Delhi Flavours · Now in Dubai</p>
//           </div>

//           <div className="fs-layout">

//             {/* LEFT — founder card with slider */}
//             <div className={`fs-reveal d1${visible ? ' visible' : ''}`} style={{ position: 'relative' }}>
//               <div className="fs-spin-ring" style={{ width: 380, height: 380, top: 60, left: 20, zIndex: 0 }} />

//               <div className="fs-founder-card" style={{ position: 'relative', zIndex: 1 }}>
//                 <div className="fs-card-stripe" />
//                 <div className="fs-floating-badge">👩‍🍳 Home Chef · Dubai</div>

//                 {/* Image slider */}
//                 <FounderImageSlider />
//                 <div className="fs-swipe-hint">← Swipe to see illustration →</div>

//                 {/* Name + bio */}
//                 <div className="fs-card-info">
//                   <div className="fs-name-row">
//                     <span className="fs-divider-line" />
//                     <div>
//                       <div className="fs-founder-name">Hema</div>
//                       <div className="fs-founder-role">Founder & Head Chef · The Chef Mom</div>
//                     </div>
//                   </div>
//                   <div className="fs-stars">
//                     {[...Array(5)].map((_, i) => (
//                       <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F5A623">
//                         <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
//                       </svg>
//                     ))}
//                   </div>
//                   <div className="fs-families">500+ happy families served</div>

//                   <div>
//                     <span className="fs-quote-mark">"</span>
//                     <p className="fs-bio-text">
//                       The Chef Mom started in 2019 from Ashok Vihar, Delhi with a very personal thought — why should anyone living away from home miss the feeling of homemade food? Sometimes, one simple homemade meal can make a person feel safe, comforted, and cared for after a long day.
//                     </p>
//                     <p className="fs-bio-text" style={{ color: '#9B7B6A', fontSize: 12 }}>
//                       For me, comfort food means simple, fresh, hygienic meals — less oil, less masala, and flavours that remind you of home. What began as a small dream in Delhi has now reached Dubai, but the emotion behind it is still the same.
//                     </p>
//                   </div>

//                   <div className="fs-signature">
//                     <div className="fs-sig-icon">✍️</div>
//                     <div>
//                       <div className="fs-sig-quote">"Serving food that feels like home, even when you are far from it."</div>
//                       <div className="fs-sig-name">— Hema, Founder · The Chef Mom</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>

//             {/* RIGHT — vision */}
//             <div className={`fs-reveal d2${visible ? ' visible' : ''}`}>
//               <div className="fs-vision-card">
//                 <div className="fs-vision-title">The Vision Behind The Chef Mom</div>
//                 <div className="fs-vision-subtitle">Delhi's Home Flavours · Delivered in Dubai</div>

//                 <p className="fs-vision-body">
//                   At The Chef Mom, we believe in delivering the true essence of Indian home-cooked meals — with an unwavering focus on quality, freshness, and heart. Our motto,{' '}
//                   <strong style={{ color: 'var(--deep)', background: 'rgba(255,107,44,0.08)', padding: '2px 8px', borderRadius: 6 }}>
//                     "From Our Kitchen to Your Heart,"
//                   </strong>
//                   {' '}reflects our passion for bringing the warmth of home to your doorstep in Dubai — every single day.
//                 </p>

//                 {/* Veg / Non-veg brand split */}
//                 <div className="fs-brand-split">
//                   <div className="fs-brand-pill veg">
//                     <span className="fs-brand-dot veg" />
//                     <div>
//                       <div className="fs-brand-label veg">🌱 Vegetarian</div>
//                       <div className="fs-brand-name">The Chef Mom</div>
//                       <div className="fs-brand-desc">Fresh Delhi-style veg tiffins</div>
//                     </div>
//                   </div>
//                   <div className="fs-brand-pill nonveg">
//                     <span className="fs-brand-dot nonveg" />
//                     <div>
//                       <div className="fs-brand-label nonveg">🍗 Non-Vegetarian</div>
//                       <div className="fs-brand-name">Currytales</div>
//                       <div className="fs-brand-desc">Non-veg by our partner brand</div>
//                     </div>
//                   </div>
//                 </div>

//                 {/* Vision points */}
//                 <div className="fs-vision-points">
//                   {VISION_POINTS.map(({ icon, label, desc }, i) => (
//                     <div key={label} className={`fs-vision-point fs-reveal d${i + 3}${visible ? ' visible' : ''}`}>
//                       <div className="fs-vp-icon">{icon}</div>
//                       <div>
//                         <div className="fs-vp-label">{label}</div>
//                         <div className="fs-vp-desc">{desc}</div>
//                       </div>
//                     </div>
//                   ))}
//                 </div>

//                 {/* CTAs */}
//                 <div className="fs-cta-row">
//                   <a href={WA_ORDER} target="_blank" rel="noreferrer" className="fs-btn-primary">
//                     Book a Tiffin <ChevronRight size={16} />
//                   </a>
//                   <button
//                     className="fs-btn-secondary"
//                     onClick={() => document.getElementById('meal-plans')?.scrollIntoView({ behavior: 'smooth' })}
//                   >
//                     View Meal Plans
//                   </button>
//                 </div>
//               </div>
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   );
// }











'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const WHATSAPP_NUMBER = '971557998925';
const WA_ORDER_MSG = encodeURIComponent(
  `👋 Hello The Chef Mom!\n\nI'd like to subscribe to a meal plan.\n\nPlease share the available plans and next steps.\n\nThank you! 🙏`
);
const WA_ORDER = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_ORDER_MSG}`;

/* ─────────────────────────────────────────────
   CHEF GRAPHIC SLIDE — fully self-contained div
   No SVG gradient IDs that can clash with slide 1
───────────────────────────────────────────── */
function ChefGraphic() {
  return (
    <div style={{
      width: '100%', height: '100%', position: 'relative', overflow: 'hidden',
      background: 'linear-gradient(150deg, #FF6B2C 0%, #FF9A4A 45%, #FFD08A 100%)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
    }}>
      {/* Decorative rings */}
      <div style={{ position:'absolute', width:260, height:260, borderRadius:'50%', border:'2px dashed rgba(255,255,255,0.18)', top:-40, left:-40, animation:'tcmSpin 18s linear infinite' }} />
      <div style={{ position:'absolute', width:180, height:180, borderRadius:'50%', border:'1px solid rgba(255,255,255,0.12)', bottom:-20, right:-20 }} />

      {/* SVG Chef — all gradients use inline stops (no defs IDs that clash) */}
      <svg viewBox="0 0 280 360" xmlns="http://www.w3.org/2000/svg"
        style={{ width:'78%', maxWidth:220, position:'relative', zIndex:2,
          filter:'drop-shadow(0 14px 30px rgba(0,0,0,0.22))' }}>

        {/* ── Body shirt ── */}
        <rect x="70" y="268" width="140" height="75" rx="20"
          style={{ fill:'#8E1B0E' }} />
        <ellipse cx="140" cy="340" rx="80" ry="52" style={{ fill:'#8E1B0E' }} />

        {/* ── White apron ── */}
        <path d="M100 248 Q140 236 180 248 L186 350 Q140 362 94 350 Z"
          style={{ fill:'#F5F0EB', opacity:0.96 }} />
        {/* Apron band */}
        <rect x="98" y="240" width="84" height="14" rx="7" style={{ fill:'#FFFFFF', opacity:0.9 }} />
        {/* Pocket */}
        <rect x="118" y="292" width="44" height="30" rx="7"
          style={{ fill:'rgba(200,188,176,0.28)', stroke:'rgba(180,168,156,0.38)', strokeWidth:1 }} />
        {/* Apron strings */}
        <path d="M98 246 Q80 230 87 212" stroke="#DDD8D0" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M182 246 Q200 230 193 212" stroke="#DDD8D0" strokeWidth="3.5" fill="none" strokeLinecap="round" />
        <path d="M87 212 Q140 203 193 212" stroke="#DDD8D0" strokeWidth="3.5" fill="none" strokeLinecap="round" />

        {/* ── Left arm — pot side ── */}
        <ellipse cx="74" cy="280" rx="18" ry="42" style={{ fill:'#C97B4B' }} transform="rotate(-14 74 280)" />
        <ellipse cx="62" cy="312" rx="13" ry="10" style={{ fill:'#D4956A' }} transform="rotate(-14 62 312)" />

        {/* ── Right arm — spoon side ── */}
        <ellipse cx="206" cy="272" rx="18" ry="42" style={{ fill:'#C97B4B' }} transform="rotate(18 206 272)" />
        <ellipse cx="218" cy="304" rx="13" ry="10" style={{ fill:'#D4956A' }} transform="rotate(18 218 304)" />

        {/* ── Cooking pot ── */}
        <rect x="14" y="286" width="58" height="32" rx="9" style={{ fill:'#7A5C38' }} />
        <ellipse cx="43" cy="286" rx="30" ry="9" style={{ fill:'#9A7850' }} />
        {/* Curry */}
        <ellipse cx="43" cy="284" rx="24" ry="6" style={{ fill:'#FF8800' }} />
        {/* Steam lines */}
        <path d="M30 278 Q27 268 30 258 Q33 248 30 238" stroke="rgba(255,255,255,0.55)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M43 276 Q40 266 43 256 Q46 246 43 236" stroke="rgba(255,255,255,0.45)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        <path d="M56 278 Q53 268 56 258 Q59 248 56 238" stroke="rgba(255,255,255,0.35)" strokeWidth="1.8" fill="none" strokeLinecap="round" />
        {/* Handles */}
        <rect x="8" y="294" width="10" height="7" rx="3.5" style={{ fill:'#5A3E20' }} />
        <rect x="72" y="294" width="10" height="7" rx="3.5" style={{ fill:'#5A3E20' }} />

        {/* ── Wooden spoon ── */}
        <line x1="224" y1="298" x2="248" y2="248" stroke="#8B5E3C" strokeWidth="5.5" strokeLinecap="round" />
        <ellipse cx="251" cy="243" rx="11" ry="8" style={{ fill:'#A0724A' }} transform="rotate(-28 251 243)" />

        {/* ── Neck ── */}
        <rect x="129" y="210" width="22" height="34" rx="10" style={{ fill:'#D4956A' }} />

        {/* ── Head ── */}
        <ellipse cx="140" cy="178" rx="52" ry="54" style={{ fill:'#D4956A' }} />

        {/* ── Hair back ── */}
        <ellipse cx="140" cy="146" rx="48" ry="24" style={{ fill:'#2C1A0E' }} />
        <ellipse cx="92" cy="164" rx="15" ry="26" style={{ fill:'#2C1A0E' }} />
        <ellipse cx="188" cy="164" rx="15" ry="26" style={{ fill:'#2C1A0E' }} />
        {/* Bun */}
        <ellipse cx="140" cy="130" rx="20" ry="16" style={{ fill:'#1E140C' }} />
        <ellipse cx="140" cy="126" rx="13" ry="10" style={{ fill:'#3D2B1A' }} />

        {/* ── Chef hat ── */}
        <rect x="112" y="104" width="56" height="14" rx="7" style={{ fill:'#FFFFFF' }} />
        <path d="M118 108 Q121 72 140 64 Q159 72 162 108 Z" style={{ fill:'#FFFFFF' }} />
        <ellipse cx="140" cy="82" rx="26" ry="27" style={{ fill:'#FFFFFF' }} />
        <ellipse cx="140" cy="62" rx="16" ry="7" style={{ fill:'#F0EDE8' }} />
        <path d="M116 110 Q140 116 164 110" stroke="#E0D8CE" strokeWidth="1.2" fill="none" />

        {/* ── Eyes ── */}
        <ellipse cx="126" cy="174" rx="6.5" ry="7" style={{ fill:'#1E0E06' }} />
        <ellipse cx="154" cy="174" rx="6.5" ry="7" style={{ fill:'#1E0E06' }} />
        <circle cx="129" cy="171" r="2.2" style={{ fill:'white' }} />
        <circle cx="157" cy="171" r="2.2" style={{ fill:'white' }} />

        {/* ── Eyebrows ── */}
        <path d="M118 164 Q126 159 134 162" stroke="#2C1A0E" strokeWidth="2.2" fill="none" strokeLinecap="round" />
        <path d="M146 162 Q154 159 162 164" stroke="#2C1A0E" strokeWidth="2.2" fill="none" strokeLinecap="round" />

        {/* ── Nose ── */}
        <path d="M140 181 Q136 190 140 193 Q144 190 140 181" style={{ fill:'#B8784A', opacity:0.5 }} />

        {/* ── Smile ── */}
        <path d="M129 204 Q140 215 151 204" stroke="#7A3D22" strokeWidth="2.4" fill="none" strokeLinecap="round" />

        {/* ── Cheeks ── */}
        <ellipse cx="112" cy="193" rx="12" ry="8" style={{ fill:'#E8856A', opacity:0.26 }} />
        <ellipse cx="168" cy="193" rx="12" ry="8" style={{ fill:'#E8856A', opacity:0.26 }} />

        {/* ── Bindi ── */}
        <circle cx="140" cy="162" r="4" style={{ fill:'#C0392B' }} />
        <circle cx="140" cy="162" r="2.2" style={{ fill:'#FF5A44' }} />

        {/* ── Earrings ── */}
        <circle cx="89" cy="182" r="4.5" style={{ fill:'#F5A623' }} />
        <ellipse cx="89" cy="191" rx="3" ry="6" style={{ fill:'#F5A623', opacity:0.82 }} />
        <circle cx="89" cy="197" r="2.8" style={{ fill:'#F5A623' }} />
        <circle cx="191" cy="182" r="4.5" style={{ fill:'#F5A623' }} />
        <ellipse cx="191" cy="191" rx="3" ry="6" style={{ fill:'#F5A623', opacity:0.82 }} />
        <circle cx="191" cy="197" r="2.8" style={{ fill:'#F5A623' }} />

        {/* ── Banner ── */}
        <rect x="50" y="348" width="180" height="16" rx="8" style={{ fill:'rgba(255,255,255,0.22)' }} />
        <text x="140" y="360" textAnchor="middle" fill="white" fontSize="8.5" fontWeight="700"
          fontFamily="sans-serif" letterSpacing="1.8">THE CHEF MOM · DUBAI</text>
      </svg>

      {/* Bottom label */}
      <div style={{
        position:'absolute', bottom:14, left:'50%', transform:'translateX(-50%)',
        background:'rgba(0,0,0,0.22)', backdropFilter:'blur(6px)',
        borderRadius:20, padding:'5px 14px', fontSize:11, fontWeight:700,
        color:'rgba(255,255,255,0.88)', letterSpacing:1,
        border:'1px solid rgba(255,255,255,0.25)', whiteSpace:'nowrap', zIndex:3,
      }}>
        🎨 Graphic Illustration
      </div>

      <style>{`
        @keyframes tcmSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
      `}</style>
    </div>
  );
}

/* ─────────────────────────────────────────────
   IMAGE SLIDER
───────────────────────────────────────────── */
function FounderImageSlider() {
  const [slide, setSlide] = useState(0);
  const startX = useRef(0);

  return (
    <div className="fs-slider-wrap">
      <div
        className="fs-slider-track"
        style={{ transform: `translateX(-${slide * 50}%)` }}
        onTouchStart={(e) => { startX.current = e.touches[0].clientX; }}
        onTouchEnd={(e) => {
          const diff = startX.current - e.changedTouches[0].clientX;
          if (diff > 40) setSlide(1);
          if (diff < -40) setSlide(0);
        }}
      >
        {/* Slide 1 — real photo */}
        <div className="fs-slide">
          <div style={{ position:'relative', width:'100%', height:'100%' }}>
            <Image
              src="/chefmom/chefmomfounder.jpeg"
              alt="Hema — Founder of The Chef Mom"
              fill
              style={{ objectFit:'cover', objectPosition:'top center' }}
              sizes="(max-width: 768px) 100vw, 460px"
              priority
            />
            <div style={{ position:'absolute', inset:0, background:'linear-gradient(to bottom, transparent 55%, rgba(26,10,0,0.28) 100%)' }} />
            <div style={{
              position:'absolute', bottom:14, left:'50%', transform:'translateX(-50%)',
              background:'rgba(0,0,0,0.26)', backdropFilter:'blur(6px)',
              borderRadius:20, padding:'5px 14px', fontSize:11, fontWeight:700,
              color:'rgba(255,255,255,0.86)', letterSpacing:1,
              border:'1px solid rgba(255,255,255,0.2)', whiteSpace:'nowrap',
            }}>📸 Real Photo</div>
          </div>
        </div>

        {/* Slide 2 — chef graphic */}
        <div className="fs-slide">
          <ChefGraphic />
        </div>
      </div>

      {/* Arrows */}
      {slide === 0 && (
        <button className="fs-arrow fs-arrow-right" onClick={() => setSlide(1)} aria-label="See illustration">
          <ChevronRight size={16} />
        </button>
      )}
      {slide === 1 && (
        <button className="fs-arrow fs-arrow-left" onClick={() => setSlide(0)} aria-label="See real photo">
          <ChevronLeft size={16} />
        </button>
      )}

      {/* Dots */}
      <div className="fs-dots-nav">
        <button className={`fs-dot${slide === 0 ? ' active' : ''}`} onClick={() => setSlide(0)} aria-label="Real photo" />
        <button className={`fs-dot${slide === 1 ? ' active' : ''}`} onClick={() => setSlide(1)} aria-label="Illustration" />
      </div>
    </div>
  );
}

/* ─────────────────────────────────────────────
   VISION POINTS
───────────────────────────────────────────── */
const VISION_POINTS = [
  { icon:'🌿', label:'No Preservatives',     desc:'Every meal made fresh daily — zero shortcuts, zero chemicals.' },
  { icon:'🧡', label:'Less Oil, Less Masala', desc:'Balanced flavours that remind you of home, not heavy restaurant food.' },
  { icon:'🏠', label:'Ghar ka Khana',         desc:'Authentic Delhi-style cooking that feels safe, comforting, and cared for.' },
];

/* ─────────────────────────────────────────────
   MAIN COMPONENT
───────────────────────────────────────────── */
export default function FounderSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.06 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  const rv = (d: number) => `fs-reveal d${d}${visible ? ' visible' : ''}`;

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');
        :root{--saffron:#FF6B2C;--turmeric:#F5A623;--deep:#1A0A00;--red:#C0392B;--green:#2D6A4F;}

        .fs-section{padding:80px 0 96px;background:linear-gradient(170deg,#FFF8F0 0%,#fff 50%,#FFF4E8 100%);position:relative;overflow:hidden;font-family:'DM Sans',sans-serif;}
        .fs-bg-dots{position:absolute;inset:0;pointer-events:none;z-index:0;background-image:radial-gradient(circle,rgba(255,107,44,0.07) 1.5px,transparent 1.5px);background-size:26px 26px;}
        .fs-blob{position:absolute;border-radius:50%;filter:blur(90px);pointer-events:none;z-index:0;}
        .fs-container{max-width:1200px;margin:0 auto;padding:0 20px;position:relative;z-index:2;}

        .fs-header{text-align:center;margin-bottom:56px;}
        .fs-tag{display:inline-flex;align-items:center;gap:6px;background:rgba(255,107,44,0.1);border:1px solid rgba(255,107,44,0.25);border-radius:50px;padding:5px 16px;font-size:11px;font-weight:700;letter-spacing:2px;text-transform:uppercase;color:var(--saffron);margin-bottom:16px;}
        .fs-heading{font-family:'Playfair Display',serif;font-size:clamp(32px,5.5vw,54px);font-weight:800;color:var(--deep);line-height:1.08;letter-spacing:-0.5px;margin:0 0 12px;}
        .fs-heading em{color:var(--saffron);font-style:italic;}
        .fs-subhead{color:#9B7B6A;font-size:12px;font-weight:500;letter-spacing:1px;text-transform:uppercase;}

        .fs-layout{display:grid;grid-template-columns:1fr;gap:40px;align-items:start;}
        @media(min-width:900px){.fs-layout{grid-template-columns:420px 1fr;gap:60px;align-items:center;}}
        @media(min-width:1100px){.fs-layout{grid-template-columns:460px 1fr;gap:80px;}}

        .fs-founder-card{background:#fff;border-radius:28px;overflow:hidden;box-shadow:0 24px 60px rgba(26,10,0,0.10);border:1px solid rgba(255,107,44,0.12);position:relative;}
        .fs-card-stripe{height:8px;background:linear-gradient(90deg,var(--red),var(--saffron),var(--turmeric));}

        .fs-slider-wrap{position:relative;width:100%;height:340px;overflow:hidden;}
        .fs-slider-track{display:flex;width:200%;height:100%;transition:transform 0.48s cubic-bezier(0.77,0,0.18,1);}
        .fs-slide{width:50%;height:100%;flex-shrink:0;position:relative;}

        .fs-arrow{position:absolute;top:50%;transform:translateY(-50%);width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,0.92);border:1.5px solid rgba(255,107,44,0.3);display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--saffron);box-shadow:0 4px 16px rgba(0,0,0,0.14);transition:all 0.2s;z-index:10;}
        .fs-arrow:hover{background:var(--saffron);color:#fff;transform:translateY(-50%) scale(1.1);box-shadow:0 6px 20px rgba(255,107,44,0.35);}
        .fs-arrow-right{right:12px;}
        .fs-arrow-left{left:12px;}

        .fs-dots-nav{position:absolute;bottom:50px;left:50%;transform:translateX(-50%);display:flex;gap:6px;z-index:10;}
        .fs-dot{width:7px;height:7px;border-radius:50%;background:rgba(255,255,255,0.5);border:none;cursor:pointer;padding:0;transition:all 0.28s;}
        .fs-dot.active{background:#fff;width:22px;border-radius:4px;}

        .fs-card-info{padding:20px 24px 24px;}
        .fs-name-row{display:flex;align-items:center;margin-bottom:10px;}
        .fs-divider-line{width:3px;height:44px;background:linear-gradient(180deg,var(--saffron),var(--turmeric));border-radius:2px;margin-right:14px;flex-shrink:0;}
        .fs-founder-name{font-family:'Playfair Display',serif;font-size:22px;font-weight:800;color:var(--deep);line-height:1.2;}
        .fs-founder-role{font-size:11px;color:var(--saffron);font-weight:700;letter-spacing:1.5px;text-transform:uppercase;margin-top:3px;}
        .fs-stars{display:flex;gap:2px;margin-bottom:4px;}
        .fs-families{font-size:11px;color:#9B7B6A;margin-bottom:14px;font-weight:500;}
        .fs-quote-mark{font-family:'Playfair Display',serif;font-size:72px;color:rgba(255,107,44,0.12);line-height:0.7;float:left;margin-right:6px;margin-top:12px;font-style:italic;}
        .fs-bio-text{font-size:13px;color:#5C3D2E;line-height:1.8;margin-bottom:10px;}

        .fs-signature{margin-top:14px;display:flex;align-items:center;gap:10px;padding:10px 14px;background:rgba(255,107,44,0.06);border-radius:12px;border:1px solid rgba(255,107,44,0.14);}
        .fs-sig-icon{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,#FFF4ED,#FFE4CC);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;border:1px solid rgba(255,107,44,0.2);}
        .fs-sig-quote{font-family:'Playfair Display',serif;font-size:13px;font-style:italic;color:var(--saffron);font-weight:700;}
        .fs-sig-name{font-size:10px;color:#9B7B6A;margin-top:1px;}

        .fs-floating-badge{position:absolute;top:12px;right:12px;background:linear-gradient(135deg,var(--saffron),var(--turmeric));color:#fff;font-family:'DM Sans',sans-serif;font-size:11px;font-weight:800;padding:7px 13px;border-radius:50px;box-shadow:0 6px 20px rgba(255,107,44,0.4);white-space:nowrap;letter-spacing:0.5px;border:2px solid rgba(255,255,255,0.6);animation:floatBadge 3s ease-in-out infinite;z-index:10;}
        @keyframes floatBadge{0%,100%{transform:translateY(0) rotate(-2deg);}50%{transform:translateY(-5px) rotate(2deg);}}

        .fs-vision-card{background:linear-gradient(145deg,#FFF4ED 0%,#FFF8F0 100%);border:1px solid rgba(255,107,44,0.16);border-radius:28px;padding:32px 32px 28px;box-shadow:0 12px 40px rgba(255,107,44,0.07);}
        .fs-vision-title{font-family:'Playfair Display',serif;font-size:clamp(18px,2.5vw,24px);font-weight:800;color:var(--deep);margin-bottom:6px;}
        .fs-vision-subtitle{font-size:11px;color:var(--saffron);font-weight:700;letter-spacing:2px;text-transform:uppercase;font-style:italic;padding:6px 12px;background:rgba(255,107,44,0.08);border-radius:8px;display:inline-block;margin-bottom:22px;border:1px solid rgba(255,107,44,0.2);}
        .fs-vision-body{font-size:clamp(13px,1.6vw,14.5px);color:#6B5344;line-height:1.85;margin-bottom:18px;}

        .fs-brand-split{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:22px;}
        .fs-brand-pill{display:flex;align-items:center;gap:10px;padding:12px 16px;border-radius:14px;border:1.5px solid;flex:1;min-width:150px;}
        .fs-brand-pill.veg{background:rgba(45,106,79,0.07);border-color:rgba(45,106,79,0.25);}
        .fs-brand-pill.nonveg{background:rgba(192,57,43,0.07);border-color:rgba(192,57,43,0.25);}
        .fs-brand-dot{width:10px;height:10px;border-radius:50%;flex-shrink:0;}
        .fs-brand-dot.veg{background:#2D6A4F;}
        .fs-brand-dot.nonveg{background:#C0392B;}
        .fs-brand-label{font-size:10px;font-weight:700;letter-spacing:0.5px;text-transform:uppercase;margin-bottom:2px;}
        .fs-brand-label.veg{color:#2D6A4F;}
        .fs-brand-label.nonveg{color:#C0392B;}
        .fs-brand-name{font-size:14px;font-weight:800;color:var(--deep);}
        .fs-brand-desc{font-size:11px;color:#9B7B6A;}

        .fs-vision-points{display:flex;flex-direction:column;gap:12px;margin-bottom:26px;}
        .fs-vision-point{display:flex;align-items:flex-start;gap:14px;padding:14px 16px;background:#fff;border-radius:14px;border:1px solid rgba(255,107,44,0.12);transition:transform 0.3s cubic-bezier(.34,1.56,.64,1),box-shadow 0.3s;}
        .fs-vision-point:hover{transform:translateX(6px);box-shadow:0 8px 24px rgba(255,107,44,0.12);}
        .fs-vp-icon{width:40px;height:40px;border-radius:10px;background:linear-gradient(135deg,#FFF4ED,#FFE4CC);display:flex;align-items:center;justify-content:center;font-size:18px;flex-shrink:0;box-shadow:0 2px 8px rgba(255,107,44,0.12);}
        .fs-vp-label{font-weight:700;font-size:14px;color:var(--deep);margin-bottom:2px;}
        .fs-vp-desc{font-size:12px;color:#9B7B6A;line-height:1.5;}

        .fs-cta-row{display:flex;gap:12px;flex-wrap:wrap;}
        .fs-btn-primary{background:linear-gradient(135deg,#FF6B2C,#E84A1A);color:#fff;border:none;border-radius:50px;padding:13px 26px;font-family:'DM Sans',sans-serif;font-size:14px;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;gap:8px;box-shadow:0 8px 24px rgba(255,107,44,0.35);transition:all 0.3s cubic-bezier(.34,1.56,.64,1);text-decoration:none;white-space:nowrap;min-height:48px;}
        .fs-btn-primary:hover{transform:translateY(-2px) scale(1.03);box-shadow:0 14px 32px rgba(255,107,44,0.45);}
        .fs-btn-secondary{display:inline-flex;align-items:center;gap:8px;padding:13px 22px;border-radius:50px;border:1.5px solid rgba(255,107,44,0.25);background:rgba(255,107,44,0.06);font-family:'DM Sans',sans-serif;font-size:14px;font-weight:600;color:#5C3D2E;text-decoration:none;white-space:nowrap;transition:all 0.2s;min-height:48px;cursor:pointer;}
        .fs-btn-secondary:hover{background:rgba(255,107,44,0.12);}

        .fs-reveal{opacity:0;transform:translateY(30px);transition:opacity 0.7s cubic-bezier(.16,1,.3,1),transform 0.7s cubic-bezier(.16,1,.3,1);}
        .fs-reveal.visible{opacity:1;transform:translateY(0);}
        .fs-reveal.d1{transition-delay:0.1s;}
        .fs-reveal.d2{transition-delay:0.2s;}
        .fs-reveal.d3{transition-delay:0.3s;}
        .fs-reveal.d4{transition-delay:0.4s;}
        .fs-reveal.d5{transition-delay:0.5s;}

        .fs-spin-ring{position:absolute;border-radius:50%;border:2px dashed rgba(255,107,44,0.18);pointer-events:none;animation:fsSpin 20s linear infinite;}
        @keyframes fsSpin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}

        @media(max-width:600px){
          .fs-vision-card{padding:22px 18px 20px;}
          .fs-card-info{padding:16px 18px 20px;}
          .fs-slider-wrap{height:300px;}
        }
      `}</style>

      <section id="founder" ref={sectionRef} className="fs-section">
        <div className="fs-bg-dots" />
        <div className="fs-blob" style={{ width:500, height:500, background:'#FFD580', top:-120, left:-180, opacity:0.12 }} />
        <div className="fs-blob" style={{ width:380, height:380, background:'#FF9F6B', bottom:-80, right:-100, opacity:0.10 }} />

        <div className="fs-container">

          {/* Header */}
          <div className={`fs-header fs-reveal${visible ? ' visible' : ''}`}>
            <div className="fs-tag">
              <span style={{ width:6, height:6, borderRadius:'50%', background:'var(--saffron)', display:'inline-block' }} />
              The Heart Behind The Kitchen
            </div>
            <h2 className="fs-heading">Meet <em>Our Founder</em></h2>
            <p className="fs-subhead">Mom's Delhi Flavours · Now in Dubai</p>
          </div>

          <div className="fs-layout">

            {/* LEFT */}
            <div className={`fs-reveal d1${visible ? ' visible' : ''}`} style={{ position:'relative' }}>
              <div className="fs-spin-ring" style={{ width:380, height:380, top:60, left:20, zIndex:0 }} />
              <div className="fs-founder-card" style={{ position:'relative', zIndex:1 }}>
                <div className="fs-card-stripe" />
                <div className="fs-floating-badge">👩‍🍳 Home Chef · Dubai</div>

                <FounderImageSlider />

                <div className="fs-card-info">
                  <div className="fs-name-row">
                    <span className="fs-divider-line" />
                    <div>
                      <div className="fs-founder-name">Hema</div>
                      <div className="fs-founder-role">Founder & Head Chef · The Chef Mom</div>
                    </div>
                  </div>
                  <div className="fs-stars">
                    {[...Array(5)].map((_,i) => (
                      <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#F5A623">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    ))}
                  </div>
                  <div className="fs-families">500+ happy families served</div>
                  <span className="fs-quote-mark">"</span>
                  <p className="fs-bio-text">
                    The Chef Mom started in 2019 from Ashok Vihar, Delhi with a very personal thought — why should anyone living away from home miss the feeling of homemade food? Sometimes, one simple homemade meal can make a person feel safe, comforted, and cared for after a long day.
                  </p>
                  <p className="fs-bio-text" style={{ color:'#9B7B6A', fontSize:12 }}>
                    For me, comfort food means simple, fresh, hygienic meals — less oil, less masala, and flavours that remind you of home. What began as a small dream in Delhi has now reached Dubai, but the emotion behind it is still the same.
                  </p>
                  <div className="fs-signature">
                    <div className="fs-sig-icon">✍️</div>
                    <div>
                      <div className="fs-sig-quote">"Serving food that feels like home, even when you are far from it."</div>
                      <div className="fs-sig-name">— Hema, Founder · The Chef Mom</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className={`fs-reveal d2${visible ? ' visible' : ''}`}>
              <div className="fs-vision-card">
                <div className="fs-vision-title">The Vision Behind The Chef Mom</div>
                <div className="fs-vision-subtitle">Delhi's Home Flavours · Delivered in Dubai</div>
                <p className="fs-vision-body">
                  At The Chef Mom, we believe in delivering the true essence of Indian home-cooked meals — with an unwavering focus on quality, freshness, and heart. Our motto,{' '}
                  <strong style={{ color:'var(--deep)', background:'rgba(255,107,44,0.08)', padding:'2px 8px', borderRadius:6 }}>
                    "From Our Kitchen to Your Heart,"
                  </strong>{' '}
                  reflects our passion for bringing the warmth of home to your doorstep in Dubai — every single day.
                </p>

                <div className="fs-brand-split">
                  <div className="fs-brand-pill veg">
                    <span className="fs-brand-dot veg" />
                    <div>
                      <div className="fs-brand-label veg">🌱 Vegetarian</div>
                      <div className="fs-brand-name">The Chef Mom</div>
                      <div className="fs-brand-desc">Fresh Delhi-style veg tiffins</div>
                    </div>
                  </div>
                  <div className="fs-brand-pill nonveg">
                    <span className="fs-brand-dot nonveg" />
                    <div>
                      <div className="fs-brand-label nonveg">🍗 Non-Vegetarian</div>
                      <div className="fs-brand-name">Curry Craft</div>
                      <div className="fs-brand-desc">Non-veg by our partner brand</div>
                    </div>
                  </div>
                </div>

                <div className="fs-vision-points">
                  {VISION_POINTS.map(({ icon, label, desc }, i) => (
                    <div key={label} className={`fs-vision-point ${rv(i + 3)}`}>
                      <div className="fs-vp-icon">{icon}</div>
                      <div>
                        <div className="fs-vp-label">{label}</div>
                        <div className="fs-vp-desc">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="fs-cta-row">
                  <a href={WA_ORDER} target="_blank" rel="noreferrer" className="fs-btn-primary">
                    Book a Tiffin <ChevronRight size={16} />
                  </a>
                  <button className="fs-btn-secondary"
                    onClick={() => document.getElementById('meal-plans')?.scrollIntoView({ behavior:'smooth' })}>
                    View Meal Plans
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}