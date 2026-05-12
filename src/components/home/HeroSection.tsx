


// 'use client';

// import React, { useEffect, useRef } from 'react';

// const WHATSAPP_NUMBER = '+971557998925';

// export default function HeroSection() {
//   const cardMainRef = useRef<HTMLDivElement>(null);
//   const cardSecRef = useRef<HTMLDivElement>(null);
//   const cardThirdRef = useRef<HTMLDivElement>(null);
//   const statsRef = useRef<HTMLDivElement>(null);
//   const countersAnimated = useRef<boolean>(false);

//   /* ── Parallax (desktop only) ── */
//   useEffect(() => {
//     const handleMouseMove = (e: MouseEvent) => {
//       if (window.innerWidth < 1024) return;
//       const cx = window.innerWidth / 2;
//       const cy = window.innerHeight / 2;
//       const dx = (e.clientX - cx) / cx;
//       const dy = (e.clientY - cy) / cy;
//       if (cardMainRef.current)
//         cardMainRef.current.style.transform = `rotate(2deg) translate(${dx * -6}px,${dy * -6}px)`;
//       if (cardSecRef.current)
//         cardSecRef.current.style.transform = `rotate(-3deg) translate(${dx * 8}px,${dy * 8}px)`;
//       if (cardThirdRef.current)
//         cardThirdRef.current.style.transform = `rotate(1.5deg) translate(${dx * -4}px,${dy * -4}px)`;
//     };
//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   /* ── Counters ── */
//   useEffect(() => {
//     const animateCounter = (el: HTMLElement, target: number, suffix: string, duration = 2000) => {
//       const start = performance.now();
//       const update = (now: number) => {
//         const progress = Math.min((now - start) / duration, 1);
//         const ease = 1 - Math.pow(1 - progress, 3);
//         el.textContent = Math.floor(ease * target) + suffix;
//         if (progress < 1) requestAnimationFrame(update);
//         else el.textContent = target + suffix;
//       };
//       requestAnimationFrame(update);
//     };
//     const observer = new IntersectionObserver(
//       (entries) => {
//         if (entries[0].isIntersecting && !countersAnimated.current) {
//           countersAnimated.current = true;
//           const els = statsRef.current?.querySelectorAll<HTMLElement>('[data-target]');
//           els?.forEach((el) => {
//             animateCounter(el, parseInt(el.dataset.target ?? '0', 10), el.dataset.suffix ?? '');
//           });
//         }
//       },
//       { threshold: 0.4 }
//     );
//     if (statsRef.current) observer.observe(statsRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const scrollToPlans = () =>
//     document.getElementById('meal-plans')?.scrollIntoView({ behavior: 'smooth' });

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

//         :root {
//           --saffron:  #FF6B2C;
//           --turmeric: #F5A623;
//           --cream:    #FFF8F0;
//           --deep:     #1A0A00;
//           --green:    #2D6A4F;
//         }

//         /* ─ Root ─ */
//         .hs-root {
//           font-family: 'DM Sans', sans-serif;
//           overflow-x: hidden;
//           position: relative;
//           background: linear-gradient(135deg,#FFF8F0 0%,#FFF0E0 50%,#FFF5EB 100%);
//           /* accounts for ribbon 32px + navbar ~72px */
//           padding-top: 104px;
//         }

//         /* ─ Blobs ─ */
//         .hs-blob {
//           position: absolute; border-radius: 50%;
//           filter: blur(80px); opacity: 0.3;
//           animation: hsBlobDrift 8s ease-in-out infinite;
//           pointer-events: none;
//         }
//         @keyframes hsBlobDrift {
//           0%,100% { transform: translate(0,0) scale(1); }
//           33%      { transform: translate(28px,-18px) scale(1.05); }
//           66%      { transform: translate(-18px,22px) scale(0.94); }
//         }

//         /* ─ Live dot ─ */
//         .hs-dot {
//           width: 7px; height: 7px; border-radius: 50%;
//           background: #22C55E;
//           box-shadow: 0 0 0 3px rgba(34,197,94,.3);
//           animation: hsPulse 2s ease-in-out infinite;
//           display: inline-block; flex-shrink: 0;
//         }
//         @keyframes hsPulse {
//           0%,100% { box-shadow: 0 0 0 3px rgba(34,197,94,.3); }
//           50%      { box-shadow: 0 0 0 6px rgba(34,197,94,.1); }
//         }

//         /* ─ Italic underline ─ */
//         .hs-em {
//           font-style: italic; color: var(--saffron); position: relative;
//         }
//         .hs-em::after {
//           content: ''; position: absolute;
//           bottom: 4px; left: 0; right: 0; height: 3px;
//           background: linear-gradient(90deg, var(--saffron), var(--turmeric));
//           border-radius: 2px; transform: scaleX(0); transform-origin: left;
//           animation: hsUnderline 1s cubic-bezier(.16,1,.3,1) 1.2s both;
//         }
//         @keyframes hsUnderline { to { transform: scaleX(1); } }

//         /* ─ Fade-up ─ */
//         .hs-f1 { animation: hsFadeUp .8s cubic-bezier(.16,1,.3,1) .15s both; }
//         .hs-f2 { animation: hsFadeUp .8s cubic-bezier(.16,1,.3,1) .25s both; }
//         .hs-f3 { animation: hsFadeUp .8s cubic-bezier(.16,1,.3,1) .35s both; }
//         .hs-f4 { animation: hsFadeUp .8s cubic-bezier(.16,1,.3,1) .45s both; }
//         .hs-f5 { animation: hsFadeUp .8s cubic-bezier(.16,1,.3,1) .55s both; }
//         .hs-f6 { animation: hsFadeUp .8s cubic-bezier(.16,1,.3,1) .65s both; }
//         .hs-fi { animation: hsFadeUp .9s cubic-bezier(.16,1,.3,1) .3s both; }
//         @keyframes hsFadeUp {
//           from { opacity: 0; transform: translateY(28px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }

//         /* ─ Buttons ─ */
//         .hs-btn-primary {
//           background: linear-gradient(135deg, var(--saffron), #E84A1A);
//           color: #fff; border: none; padding: 13px 24px;
//           border-radius: 50px; font-family: 'DM Sans', sans-serif;
//           font-size: 15px; font-weight: 600; cursor: pointer;
//           display: inline-flex; align-items: center; gap: 8px;
//           transition: all .3s cubic-bezier(.34,1.56,.64,1);
//           box-shadow: 0 8px 28px rgba(255,107,44,.4); text-decoration: none;
//           white-space: nowrap;
//         }
//         .hs-btn-primary:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 14px 38px rgba(255,107,44,.5); }
//         .hs-btn-primary:hover .hs-arrow { transform: translateX(3px); }
//         .hs-arrow { transition: transform .3s; display: inline-block; }

//         .hs-btn-secondary {
//           background: rgba(255,255,255,.9); color: var(--deep);
//           border: 1.5px solid rgba(26,10,0,.12); padding: 13px 20px;
//           border-radius: 50px; font-family: 'DM Sans', sans-serif;
//           font-size: 14px; font-weight: 600; cursor: pointer;
//           display: inline-flex; align-items: center; gap: 10px;
//           transition: all .3s cubic-bezier(.34,1.56,.64,1);
//           backdrop-filter: blur(10px); text-decoration: none; white-space: nowrap;
//         }
//         .hs-btn-secondary:hover { transform: translateY(-3px); background: #fff; box-shadow: 0 8px 24px rgba(0,0,0,.1); }

//         /* ─ Spice deco ─ */
//         .hs-spice {
//           position: absolute; opacity: .07; z-index: 1;
//           animation: hsSpinSlow 20s linear infinite;
//           pointer-events: none;
//           display: none;           /* hidden on mobile */
//         }
//         @keyframes hsSpinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

//         /* ─ Image cards ─ */
//         .hs-card {
//           position: absolute; border-radius: 22px; overflow: hidden;
//           box-shadow: 0 18px 55px rgba(26,10,0,.18);
//           transition: transform .4s cubic-bezier(.34,1.56,.64,1);
//           will-change: transform;
//         }
//         .hs-card:hover { transform: scale(1.04) rotate(0deg) !important; z-index: 20; }

//         /* ─ Floating badges ─ */
//         .hs-badge {
//           position: absolute; background: #fff; border-radius: 14px;
//           padding: 8px 12px; box-shadow: 0 8px 32px rgba(26,10,0,.12);
//           display: flex; align-items: center; gap: 8px; z-index: 10; white-space: nowrap;
//         }
//         .hs-badge-1 { top: 8px; right: 8px; animation: hsBadgeFloat 4s ease-in-out infinite; }
//         .hs-badge-2 { bottom: 40px; right: 12px; animation: hsBadgeFloat 4s ease-in-out infinite; animation-delay: -2s; }
//         .hs-badge-3 { top: 160px; left: -4px; animation: hsBadgeFloat 5s ease-in-out infinite; animation-delay: -1s; display: none; }
//         @keyframes hsBadgeFloat {
//           0%,100% { transform: translateY(0); }
//           50%      { transform: translateY(-7px); }
//         }

//         /* ─ Stat dividers ─ */
//         .hs-stat:not(:last-child)::after {
//           content: ''; position: absolute;
//           right: 0; top: 20%; bottom: 20%; width: 1px;
//           background: rgba(255,107,44,.15);
//         }

//         /* ════════════════════════
//            LAYOUT — mobile-first
//         ════════════════════════ */

//         /* Main grid: column stack on mobile */
//         .hs-grid {
//           position: relative; z-index: 10;
//           display: flex; flex-direction: column;
//           gap: 40px;
//           padding: 28px 20px 44px;
//         }

//         /* Collage container */
//         .hs-collage {
//           position: relative;
//           height: 260px;
//           width: 100%; max-width: 360px;
//           margin: 0 auto;
//           flex-shrink: 0;
//         }

//         /* Card sizes — mobile */
//         .hs-card-main  { width: 170px; height: 200px; top: 28px; right: 0; transform: rotate(2deg); z-index: 3; }
//         .hs-card-sec   { width: 130px; height: 148px; bottom: 8px; left: 0; transform: rotate(-3deg); z-index: 4; }
//         .hs-card-third { width: 95px;  height: 95px;  top: 0; left: 16px; transform: rotate(1.5deg); z-index: 2; border-radius: 16px !important; }

//         /* Stats bar */
//         .hs-stats {
//           position: relative; z-index: 10;
//           display: grid; grid-template-columns: repeat(3,1fr);
//           background: #fff; border-radius: 16px;
//           margin: 0 16px 32px;
//           box-shadow: 0 -4px 40px rgba(255,107,44,.07), 0 8px 36px rgba(26,10,0,.07);
//           overflow: hidden;
//         }
//         .hs-stat-num { font-size: 22px; }
//         .hs-stat-lbl { font-size: 9px; }

//         /* CTA row */
//         .hs-ctas {
//           display: flex; gap: 10px; flex-wrap: wrap;
//         }

//         /* Trust */
//         .hs-trust {
//           display: flex; gap: 12px; margin-top: 20px; flex-wrap: wrap;
//         }

//         /* ─ 400px ─ */
//         @media (min-width: 400px) {
//           .hs-badge-3 { display: flex; }
//           .hs-collage { height: 290px; }
//           .hs-card-main  { width: 190px; height: 225px; }
//           .hs-card-sec   { width: 148px; height: 168px; }
//           .hs-card-third { width: 110px; height: 110px; }
//         }

//         /* ─ Tablet 640px ─ */
//         @media (min-width: 640px) {
//           .hs-root { padding-top: 108px; }
//           .hs-grid { padding: 36px 32px 52px; gap: 40px; }
//           .hs-collage { height: 340px; max-width: 430px; }
//           .hs-card-main  { width: 220px; height: 258px; }
//           .hs-card-sec   { width: 168px; height: 192px; }
//           .hs-card-third { width: 128px; height: 128px; }
//           .hs-stats { margin: 0 24px 36px; border-radius: 18px; }
//           .hs-stat-num { font-size: 26px; }
//           .hs-stat-lbl { font-size: 10px; }
//           .hs-spice { display: block; }
//         }

//         /* ─ Desktop 1024px ─ */
//         @media (min-width: 1024px) {
//           .hs-root { min-height: 100vh; display: flex; flex-direction: column; padding-top: 112px; }
//           .hs-grid {
//             flex-direction: row;
//             align-items: center;
//             gap: 48px;
//             padding: 20px 48px 56px;
//             flex: 1;
//           }
//           .hs-grid > .hs-left { flex: 1; }
//           .hs-collage {
//             flex: 1; height: 500px;
//             max-width: none; margin: 0;
//           }
//           .hs-card-main  { width: 268px; height: 308px; top: 28px; right: 0; }
//           .hs-card-sec   { width: 196px; height: 216px; bottom: 18px; left: 0; }
//           .hs-card-third { width: 152px; height: 152px; top: 0; left: 28px; }
//           .hs-badge-2    { bottom: 52px; }
//           .hs-stats { margin: 0 48px 44px; border-radius: 20px; }
//           .hs-stat-num { font-size: 30px; }
//           .hs-stat-lbl { font-size: 11px; }
//         }

//         /* ─ Wide 1280px ─ */
//         @media (min-width: 1280px) {
//           .hs-grid { padding: 20px 64px 56px; gap: 60px; }
//           .hs-collage { height: 520px; }
//           .hs-card-main  { width: 280px; height: 320px; }
//           .hs-card-sec   { width: 200px; height: 220px; }
//           .hs-card-third { width: 160px; height: 160px; left: 30px; }
//           .hs-stats { margin: 0 64px 44px; }
//           .hs-stat-num { font-size: 32px; }
//           .hs-stat-lbl { font-size: 12px; }
//         }
//       `}</style>

//       <section className="hs-root">
//         {/* Blobs */}
//         <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
//           <div className="hs-blob" style={{ width: 400, height: 400, background: '#FFD580', top: -80, right: -80, animationDelay: '0s' }} />
//           <div className="hs-blob" style={{ width: 320, height: 320, background: '#FF9F6B', bottom: -50, left: -50, animationDelay: '-3s' }} />
//           <div className="hs-blob" style={{ width: 250, height: 250, background: '#FFB347', top: '40%', left: '35%', animationDelay: '-5s' }} />
//         </div>

//         {/* Dots */}
//         <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(255,107,44,.12) 1px,transparent 1px)', backgroundSize: '38px 38px', zIndex: 0, pointerEvents: 'none' }} />

//         {/* Spice */}
//         <div className="hs-spice" style={{ top: '20%', left: '4%', fontSize: 40, animationDirection: 'reverse' }}>🌶️</div>
//         <div className="hs-spice" style={{ bottom: '22%', right: '4%', fontSize: 56, animationDuration: '30s' }}>🍛</div>

//         {/* ── MAIN GRID ── */}
//         <div className="hs-grid">

//           {/* LEFT */}
//           <div className="hs-left">
//             {/* Tag */}
//             <div className="hs-f1" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,107,44,.1)', border: '1px solid rgba(255,107,44,.25)', borderRadius: 50, padding: '6px 14px', fontSize: 11, fontWeight: 600, color: 'var(--saffron)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>
//               <span className="hs-dot" />
//               Indian Home Cooking · Dubai
//             </div>

//             {/* Headline */}
//             <h1 className="hs-f2" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(32px,6vw,62px)', fontWeight: 900, color: 'var(--deep)', lineHeight: 1.1, letterSpacing: -1, marginBottom: 16 }}>
//               Ghar Jaisa<br />
//               Khana, <em className="hs-em">Right</em><br />
//               at Your Door
//             </h1>

//             {/* Subtitle */}
//             <p className="hs-f3" style={{ fontSize: 'clamp(14px,1.8vw,16px)', color: '#6B5344', lineHeight: 1.72, marginBottom: 28, maxWidth: 460 }}>
//               Homemade Indian meals cooked with <strong>love</strong> and traditional recipes — meal subscriptions crafted for busy professionals, families &amp; students across Dubai.
//             </p>

//             {/* CTAs */}
//             <div className="hs-f4 hs-ctas">
//               <button className="hs-btn-primary" onClick={scrollToPlans}>
//                 View Meal Plans
//                 <span className="hs-arrow">
//                   <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
//                 </span>
//               </button>
//               <a href={`tel:${WHATSAPP_NUMBER}`} className="hs-btn-secondary">
//                 <span style={{ width: 26, height: 26, background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//                   <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
//                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//                   </svg>
//                 </span>
//                 +971 55 799 8925
//               </a>
//             </div>

//             {/* Trust */}
//             <div className="hs-f5 hs-trust">
//               {['Fresh Daily', 'No Preservatives', 'Subscriptions'].map((label) => (
//                 <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 500, color: '#6B5344' }}>
//                   <span style={{ width: 20, height: 20, background: 'rgba(45,106,79,.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//                     <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
//                   </span>
//                   {label}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* RIGHT — collage */}
//           <div className="hs-fi hs-collage">
//             <div ref={cardMainRef} className="hs-card hs-card-main">
//               <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=560&q=80&auto=format&fit=crop" alt="Indian Thali" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
//             </div>
//             <div ref={cardSecRef} className="hs-card hs-card-sec">
//               <img src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80&auto=format&fit=crop" alt="Dal Makhani" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
//             </div>
//             <div ref={cardThirdRef} className="hs-card hs-card-third">
//               <img src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=320&q=80&auto=format&fit=crop" alt="Biryani" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
//             </div>

//             <div className="hs-badge hs-badge-1">
//               <span style={{ fontSize: 17 }}>⭐</span>
//               <div>
//                 <span style={{ fontSize: 9, color: '#9B7B6A', fontWeight: 400, display: 'block' }}>Happy Customers</span>
//                 <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--deep)' }}>500+ Families</span>
//               </div>
//             </div>
//             <div className="hs-badge hs-badge-2">
//               <span style={{ fontSize: 17 }}>🕐</span>
//               <div>
//                 <span style={{ fontSize: 9, color: '#9B7B6A', fontWeight: 400, display: 'block' }}>Delivery</span>
//                 <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--deep)' }}>On Schedule</span>
//               </div>
//             </div>
//             <div className="hs-badge hs-badge-3">
//               <span style={{ fontSize: 17 }}>🌿</span>
//               <div>
//                 <span style={{ fontSize: 9, color: '#9B7B6A', fontWeight: 400, display: 'block' }}>Cooked Today</span>
//                 <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--deep)' }}>100% Fresh</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* ── Stats bar ── */}
//         <div ref={statsRef} className="hs-f6 hs-stats">
//           {[
//             { target: 500, suffix: '+', label: 'Happy Families' },
//             { target: 50,  suffix: '+', label: 'Menu Varieties' },
//             { target: 3,   suffix: '',  label: 'Years in Dubai' },
//           ].map(({ target, suffix, label }) => (
//             <div key={label} className="hs-stat" style={{ padding: '16px 8px', textAlign: 'center', position: 'relative' }}>
//               <div
//                 data-target={target}
//                 data-suffix={suffix}
//                 className="hs-stat-num"
//                 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, color: 'var(--saffron)', lineHeight: 1, marginBottom: 4 }}
//               >
//                 0{suffix}
//               </div>
//               <div className="hs-stat-lbl" style={{ color: '#9B7B6A', fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
//                 {label}
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>
//     </>
//   );
// }























'use client';

import React, { useEffect, useRef } from 'react';

const WHATSAPP_NUMBER = '971557998925'; // no + for wa.me links

const WA_MESSAGE = encodeURIComponent(
  `👋 Hello The Chef Mom!\n\nI'm interested in your homemade Indian meal subscription in Dubai.\n\nCould you please share:\n• Available meal plans & pricing\n• Delivery areas you cover\n• How to get started\n\nThank you! 🙏`
);

const WA_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_MESSAGE}`;

export default function HeroSection() {
  const cardMainRef  = useRef<HTMLDivElement>(null);
  const cardSecRef   = useRef<HTMLDivElement>(null);
  const cardThirdRef = useRef<HTMLDivElement>(null);
  const statsRef     = useRef<HTMLDivElement>(null);
  const countersAnimated = useRef<boolean>(false);

  /* ── Parallax (desktop only) ── */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (window.innerWidth < 1024) return;
      const cx = window.innerWidth / 2;
      const cy = window.innerHeight / 2;
      const dx = (e.clientX - cx) / cx;
      const dy = (e.clientY - cy) / cy;
      if (cardMainRef.current)
        cardMainRef.current.style.transform = `rotate(2deg) translate(${dx * -6}px,${dy * -6}px)`;
      if (cardSecRef.current)
        cardSecRef.current.style.transform = `rotate(-3deg) translate(${dx * 8}px,${dy * 8}px)`;
      if (cardThirdRef.current)
        cardThirdRef.current.style.transform = `rotate(1.5deg) translate(${dx * -4}px,${dy * -4}px)`;
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  /* ── Counters ── */
  useEffect(() => {
    const animateCounter = (el: HTMLElement, target: number, suffix: string, duration = 2000) => {
      const start = performance.now();
      const update = (now: number) => {
        const progress = Math.min((now - start) / duration, 1);
        const ease = 1 - Math.pow(1 - progress, 3);
        el.textContent = Math.floor(ease * target) + suffix;
        if (progress < 1) requestAnimationFrame(update);
        else el.textContent = target + suffix;
      };
      requestAnimationFrame(update);
    };
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersAnimated.current) {
          countersAnimated.current = true;
          const els = statsRef.current?.querySelectorAll<HTMLElement>('[data-target]');
          els?.forEach((el) => {
            animateCounter(el, parseInt(el.dataset.target ?? '0', 10), el.dataset.suffix ?? '');
          });
        }
      },
      { threshold: 0.4 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToPlans = () =>
    document.getElementById('meal-plans')?.scrollIntoView({ behavior: 'smooth' });

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --saffron:  #FF6B2C;
          --turmeric: #F5A623;
          --cream:    #FFF8F0;
          --deep:     #1A0A00;
          --green:    #2D6A4F;
        }

        /* ─ Root ─ */
        .hs-root {
          font-family: 'DM Sans', sans-serif;
          overflow-x: hidden;
          position: relative;
          background: linear-gradient(135deg,#FFF8F0 0%,#FFF0E0 50%,#FFF5EB 100%);
          padding-top: 104px;
        }

        /* ─ Blobs ─ */
        .hs-blob {
          position: absolute; border-radius: 50%;
          filter: blur(80px); opacity: 0.3;
          animation: hsBlobDrift 8s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes hsBlobDrift {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(28px,-18px) scale(1.05); }
          66%      { transform: translate(-18px,22px) scale(0.94); }
        }

        /* ─ Live dot ─ */
        .hs-dot {
          width: 7px; height: 7px; border-radius: 50%;
          background: #22C55E;
          box-shadow: 0 0 0 3px rgba(34,197,94,.3);
          animation: hsPulse 2s ease-in-out infinite;
          display: inline-block; flex-shrink: 0;
        }
        @keyframes hsPulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(34,197,94,.3); }
          50%      { box-shadow: 0 0 0 6px rgba(34,197,94,.1); }
        }

        /* ─ Italic underline ─ */
        .hs-em {
          font-style: italic; color: var(--saffron); position: relative;
        }
        .hs-em::after {
          content: ''; position: absolute;
          bottom: 4px; left: 0; right: 0; height: 3px;
          background: linear-gradient(90deg, var(--saffron), var(--turmeric));
          border-radius: 2px; transform: scaleX(0); transform-origin: left;
          animation: hsUnderline 1s cubic-bezier(.16,1,.3,1) 1.2s both;
        }
        @keyframes hsUnderline { to { transform: scaleX(1); } }

        /* ─ Fade-up ─ */
        .hs-f1 { animation: hsFadeUp .8s cubic-bezier(.16,1,.3,1) .15s both; }
        .hs-f2 { animation: hsFadeUp .8s cubic-bezier(.16,1,.3,1) .25s both; }
        .hs-f3 { animation: hsFadeUp .8s cubic-bezier(.16,1,.3,1) .35s both; }
        .hs-f4 { animation: hsFadeUp .8s cubic-bezier(.16,1,.3,1) .45s both; }
        .hs-f5 { animation: hsFadeUp .8s cubic-bezier(.16,1,.3,1) .55s both; }
        .hs-f6 { animation: hsFadeUp .8s cubic-bezier(.16,1,.3,1) .65s both; }
        .hs-fi { animation: hsFadeUp .9s cubic-bezier(.16,1,.3,1) .3s both; }
        @keyframes hsFadeUp {
          from { opacity: 0; transform: translateY(28px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* ─ Primary button ─ */
        .hs-btn-primary {
          background: linear-gradient(135deg, var(--saffron), #E84A1A);
          color: #fff; border: none; padding: 13px 24px;
          border-radius: 50px; font-family: 'DM Sans', sans-serif;
          font-size: 15px; font-weight: 600; cursor: pointer;
          display: inline-flex; align-items: center; gap: 8px;
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
          box-shadow: 0 8px 28px rgba(255,107,44,.4); text-decoration: none;
          white-space: nowrap; min-height: 48px;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        .hs-btn-primary:hover  { transform: translateY(-3px) scale(1.02); box-shadow: 0 14px 38px rgba(255,107,44,.5); }
        .hs-btn-primary:active { transform: scale(.97); }
        .hs-btn-primary:hover .hs-arrow { transform: translateX(3px); }
        .hs-arrow { transition: transform .3s; display: inline-block; }

        /* ─ WhatsApp button ─ */
        .hs-btn-wa {
          background: #fff;
          color: var(--deep);
          border: 1.5px solid rgba(26,10,0,.12);
          padding: 13px 20px;
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-size: 14px; font-weight: 600; cursor: pointer;
          display: inline-flex; align-items: center; gap: 10px;
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
          backdrop-filter: blur(10px); text-decoration: none;
          white-space: nowrap; min-height: 48px;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
          position: relative; overflow: hidden;
        }
        .hs-btn-wa::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(37,211,102,.08), rgba(37,211,102,.04));
          opacity: 0;
          transition: opacity .25s;
          border-radius: 50px;
        }
        .hs-btn-wa:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(37,211,102,.2); border-color: rgba(37,211,102,.35); }
        .hs-btn-wa:hover::before { opacity: 1; }
        .hs-btn-wa:active { transform: scale(.97); }

        /* ─ WA icon circle ─ */
        .hs-wa-circle {
          width: 28px; height: 28px;
          background: #25D366; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          box-shadow: 0 3px 10px rgba(37,211,102,.4);
          animation: hsWaPulse 2.5s ease-in-out infinite;
        }
        @keyframes hsWaPulse {
          0%,100% { box-shadow: 0 3px 10px rgba(37,211,102,.35); }
          50%      { box-shadow: 0 3px 18px rgba(37,211,102,.6); }
        }

        /* ─ Spice deco ─ */
        .hs-spice {
          position: absolute; opacity: .07; z-index: 1;
          animation: hsSpinSlow 20s linear infinite;
          pointer-events: none; display: none;
        }
        @keyframes hsSpinSlow { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }

        /* ─ Image cards ─ */
        .hs-card {
          position: absolute; border-radius: 22px; overflow: hidden;
          box-shadow: 0 18px 55px rgba(26,10,0,.18);
          transition: transform .4s cubic-bezier(.34,1.56,.64,1);
          will-change: transform;
        }
        .hs-card:hover { transform: scale(1.04) rotate(0deg) !important; z-index: 20; }

        /* ─ Floating badges ─ */
        .hs-badge {
          position: absolute; background: #fff; border-radius: 14px;
          padding: 8px 12px; box-shadow: 0 8px 32px rgba(26,10,0,.12);
          display: flex; align-items: center; gap: 8px; z-index: 10; white-space: nowrap;
        }
        .hs-badge-1 { top: 8px; right: 8px; animation: hsBadgeFloat 4s ease-in-out infinite; }
        .hs-badge-2 { bottom: 40px; right: 12px; animation: hsBadgeFloat 4s ease-in-out infinite; animation-delay: -2s; }
        .hs-badge-3 { top: 160px; left: -4px; animation: hsBadgeFloat 5s ease-in-out infinite; animation-delay: -1s; display: none; }
        @keyframes hsBadgeFloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-7px); }
        }

        /* ─ Stat dividers ─ */
        .hs-stat:not(:last-child)::after {
          content: ''; position: absolute;
          right: 0; top: 20%; bottom: 20%; width: 1px;
          background: rgba(255,107,44,.15);
        }

        /* ════════════════════════
           LAYOUT — mobile-first
        ════════════════════════ */
        .hs-grid {
          position: relative; z-index: 10;
          display: flex; flex-direction: column;
          gap: 40px;
          padding: 28px 16px 44px;
        }
        .hs-collage {
          position: relative;
          height: 260px;
          width: 100%; max-width: 360px;
          margin: 0 auto;
          flex-shrink: 0;
        }

        /* Card sizes — mobile */
        .hs-card-main  { width: 170px; height: 200px; top: 28px; right: 0; transform: rotate(2deg); z-index: 3; }
        .hs-card-sec   { width: 130px; height: 148px; bottom: 8px; left: 0; transform: rotate(-3deg); z-index: 4; }
        .hs-card-third { width: 95px;  height: 95px;  top: 0; left: 16px; transform: rotate(1.5deg); z-index: 2; border-radius: 16px !important; }

        /* Stats bar */
        .hs-stats {
          position: relative; z-index: 10;
          display: grid; grid-template-columns: repeat(3,1fr);
          background: #fff; border-radius: 16px;
          margin: 0 12px 32px;
          box-shadow: 0 -4px 40px rgba(255,107,44,.07), 0 8px 36px rgba(26,10,0,.07);
          overflow: hidden;
        }
        .hs-stat-num { font-size: 22px; }
        .hs-stat-lbl { font-size: 9px; }

        /* CTA row */
        .hs-ctas { display: flex; gap: 10px; flex-wrap: wrap; }

        /* Trust row */
        .hs-trust { display: flex; gap: 12px; margin-top: 20px; flex-wrap: wrap; }

        /* 400px */
        @media (min-width: 400px) {
          .hs-badge-3 { display: flex; }
          .hs-collage { height: 290px; }
          .hs-card-main  { width: 190px; height: 225px; }
          .hs-card-sec   { width: 148px; height: 168px; }
          .hs-card-third { width: 110px; height: 110px; }
        }

        /* 640px */
        @media (min-width: 640px) {
          .hs-root { padding-top: 108px; }
          .hs-grid { padding: 36px 32px 52px; gap: 40px; }
          .hs-collage { height: 340px; max-width: 430px; }
          .hs-card-main  { width: 220px; height: 258px; }
          .hs-card-sec   { width: 168px; height: 192px; }
          .hs-card-third { width: 128px; height: 128px; }
          .hs-stats { margin: 0 24px 36px; border-radius: 18px; }
          .hs-stat-num { font-size: 26px; }
          .hs-stat-lbl { font-size: 10px; }
          .hs-spice { display: block; }
        }

        /* 1024px */
        @media (min-width: 1024px) {
          .hs-root { min-height: 100vh; display: flex; flex-direction: column; padding-top: 112px; }
          .hs-grid {
            flex-direction: row; align-items: center;
            gap: 48px; padding: 20px 48px 56px; flex: 1;
          }
          .hs-grid > .hs-left { flex: 1; }
          .hs-collage { flex: 1; height: 500px; max-width: none; margin: 0; }
          .hs-card-main  { width: 268px; height: 308px; top: 28px; right: 0; }
          .hs-card-sec   { width: 196px; height: 216px; bottom: 18px; left: 0; }
          .hs-card-third { width: 152px; height: 152px; top: 0; left: 28px; }
          .hs-badge-2    { bottom: 52px; }
          .hs-stats { margin: 0 48px 44px; border-radius: 20px; }
          .hs-stat-num { font-size: 30px; }
          .hs-stat-lbl { font-size: 11px; }
        }

        /* 1280px */
        @media (min-width: 1280px) {
          .hs-grid { padding: 20px 64px 56px; gap: 60px; }
          .hs-collage { height: 520px; }
          .hs-card-main  { width: 280px; height: 320px; }
          .hs-card-sec   { width: 200px; height: 220px; }
          .hs-card-third { width: 160px; height: 160px; left: 30px; }
          .hs-stats { margin: 0 64px 44px; }
          .hs-stat-num { font-size: 32px; }
          .hs-stat-lbl { font-size: 12px; }
        }
      `}</style>

      <section className="hs-root">
        {/* Blobs */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div className="hs-blob" style={{ width: 400, height: 400, background: '#FFD580', top: -80, right: -80, animationDelay: '0s' }} />
          <div className="hs-blob" style={{ width: 320, height: 320, background: '#FF9F6B', bottom: -50, left: -50, animationDelay: '-3s' }} />
          <div className="hs-blob" style={{ width: 250, height: 250, background: '#FFB347', top: '40%', left: '35%', animationDelay: '-5s' }} />
        </div>
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(255,107,44,.12) 1px,transparent 1px)', backgroundSize: '38px 38px', zIndex: 0, pointerEvents: 'none' }} />
        <div className="hs-spice" style={{ top: '20%', left: '4%', fontSize: 40, animationDirection: 'reverse' }}>🌶️</div>
        <div className="hs-spice" style={{ bottom: '22%', right: '4%', fontSize: 56, animationDuration: '30s' }}>🍛</div>

        {/* ── MAIN GRID ── */}
        <div className="hs-grid">

          {/* LEFT */}
          <div className="hs-left">
            {/* Tag */}
            <div className="hs-f1" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,107,44,.1)', border: '1px solid rgba(255,107,44,.25)', borderRadius: 50, padding: '6px 14px', fontSize: 11, fontWeight: 600, color: 'var(--saffron)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 16 }}>
              <span className="hs-dot" />
              Indian Home Cooking · Dubai
            </div>

            {/* Headline */}
            <h1 className="hs-f2" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(32px,6vw,62px)', fontWeight: 900, color: 'var(--deep)', lineHeight: 1.1, letterSpacing: -1, marginBottom: 16 }}>
              Ghar Jaisa<br />
              Khana, <em className="hs-em">Right</em><br />
              at Your Door
            </h1>

            {/* Subtitle */}
            <p className="hs-f3" style={{ fontSize: 'clamp(14px,1.8vw,16px)', color: '#6B5344', lineHeight: 1.72, marginBottom: 28, maxWidth: 460 }}>
              Homemade Indian meals cooked with <strong>love</strong> and traditional recipes — meal subscriptions crafted for busy professionals, families &amp; students across Dubai.
            </p>

            {/* CTAs */}
            <div className="hs-f4 hs-ctas">
              <button className="hs-btn-primary" onClick={scrollToPlans}>
                View Meal Plans
                <span className="hs-arrow">
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </button>

              {/* WhatsApp button — opens with pre-filled enquiry */}
              <a href={WA_URL} target="_blank" rel="noreferrer" className="hs-btn-wa">
                <span className="hs-wa-circle">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                Chat on WhatsApp
              </a>
            </div>

            {/* Trust */}
            <div className="hs-f5 hs-trust">
              {['Fresh Daily', 'No Preservatives', 'Subscriptions'].map((label) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 500, color: '#6B5344' }}>
                  <span style={{ width: 20, height: 20, background: 'rgba(45,106,79,.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — collage */}
          <div className="hs-fi hs-collage">
            <div ref={cardMainRef} className="hs-card hs-card-main">
              <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=560&q=80&auto=format&fit=crop" alt="Indian Thali" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div ref={cardSecRef} className="hs-card hs-card-sec">
              <img src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80&auto=format&fit=crop" alt="Dal Makhani" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>
            <div ref={cardThirdRef} className="hs-card hs-card-third">
              <img src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=320&q=80&auto=format&fit=crop" alt="Biryani" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>

            <div className="hs-badge hs-badge-1">
              <span style={{ fontSize: 17 }}>⭐</span>
              <div>
                <span style={{ fontSize: 9, color: '#9B7B6A', fontWeight: 400, display: 'block' }}>Happy Customers</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--deep)' }}>500+ Families</span>
              </div>
            </div>
            <div className="hs-badge hs-badge-2">
              <span style={{ fontSize: 17 }}>🕐</span>
              <div>
                <span style={{ fontSize: 9, color: '#9B7B6A', fontWeight: 400, display: 'block' }}>Delivery</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--deep)' }}>On Schedule</span>
              </div>
            </div>
            <div className="hs-badge hs-badge-3">
              <span style={{ fontSize: 17 }}>🌿</span>
              <div>
                <span style={{ fontSize: 9, color: '#9B7B6A', fontWeight: 400, display: 'block' }}>Cooked Today</span>
                <span style={{ fontSize: 12, fontWeight: 700, color: 'var(--deep)' }}>100% Fresh</span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats bar ── */}
        <div ref={statsRef} className="hs-f6 hs-stats">
          {[
            { target: 500, suffix: '+', label: 'Happy Families' },
            { target: 50,  suffix: '+', label: 'Menu Varieties' },
            { target: 3,   suffix: '',  label: 'Years in Dubai' },
          ].map(({ target, suffix, label }) => (
            <div key={label} className="hs-stat" style={{ padding: '16px 8px', textAlign: 'center', position: 'relative' }}>
              <div
                data-target={target}
                data-suffix={suffix}
                className="hs-stat-num"
                style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, color: 'var(--saffron)', lineHeight: 1, marginBottom: 4 }}
              >
                0{suffix}
              </div>
              <div className="hs-stat-lbl" style={{ color: '#9B7B6A', fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase' }}>
                {label}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}