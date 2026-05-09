// 'use client';

// import React from 'react';
// import { PhoneCall, CheckCircle2 } from 'lucide-react';

// const WHATSAPP_NUMBER = "+971557998925";

// export default function HeroSection() {
//   const scrollToPlans = () => {
//     document.getElementById('meal-plans')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
//       {/* Background elements derived from logo */}
//       <div className="absolute top-0 right-0 w-1/2 h-full bg-rose-50/50 rounded-bl-[100px] -z-10" />
//       <div className="absolute top-20 left-10 w-64 h-64 bg-sky-100/40 rounded-full blur-3xl -z-10" />
//       <div className="absolute bottom-20 right-10 w-64 h-64 bg-green-100/40 rounded-full blur-3xl -z-10" />
      
//       <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
//         {/* Hero Content */}
//         <div className="max-w-2xl relative z-10">
//           <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-slate-700 font-bold text-xs mb-6 tracking-wide shadow-sm">
//             <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
//             NOW DELIVERING ACROSS DUBAI
//           </div>
//           <h1 className="text-5xl lg:text-7xl font-black text-slate-900 leading-[1.1] tracking-tight mb-6">
//             Mom's Indian Flavours in <span className="text-rose-500 font-logo font-normal italic pr-2">Dubai</span>
//           </h1>
//           <p className="text-lg text-slate-600 mb-8 leading-relaxed">
//             Fresh homemade meals cooked with <span className="text-rose-500 font-bold">love</span>, delivered to your doorstep. Crafted home-style meal subscriptions for busy professionals, families, and students.
//           </p>
          
//           <div className="flex flex-col sm:flex-row items-center gap-4">
//             <button 
//               onClick={scrollToPlans}
//               className="w-full sm:w-auto px-8 py-4 bg-gradient-to-r from-rose-500 to-rose-600 text-white font-bold rounded-full shadow-lg shadow-rose-500/30 hover:shadow-xl hover:shadow-rose-500/40 hover:-translate-y-1 transition-all"
//             >
//               View Meal Plans
//             </button>
//             <a 
//               href={`tel:${WHATSAPP_NUMBER}`}
//               className="w-full sm:w-auto flex items-center justify-center gap-3 px-8 py-4 bg-white text-slate-900 font-bold rounded-full border border-slate-200 shadow-sm hover:bg-slate-50 hover:-translate-y-1 transition-all"
//             >
//               <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white">
//                 <PhoneCall size={12} />
//               </div>
//               +971 55 799 8925
//             </a>
//           </div>

//           {/* Trust Badges */}
//           <div className="flex items-center gap-6 mt-10 text-sm font-bold text-slate-500">
//             <div className="flex items-center gap-2"><CheckCircle2 className="text-green-500" size={18} /> Fresh Ingredients</div>
//             <div className="flex items-center gap-2"><CheckCircle2 className="text-green-500" size={18} /> Zero Preservatives</div>
//           </div>
//         </div>

//         {/* Hero Image */}
//         <div className="relative z-10 flex justify-center lg:justify-end">
//           <div className="relative w-[320px] h-[320px] md:w-[450px] md:h-[450px]">
//             {/* Decorative Blob */}
//             <div className="absolute inset-0 bg-green-200 blob-shape opacity-40 transform rotate-12 scale-110" />
//             <div className="absolute inset-0 bg-rose-200 blob-shape opacity-30 transform -rotate-12 scale-105 animation-delay-2000" />
//             {/* Main Image */}
//             <img 
//               src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1000&auto=format&fit=crop" 
//               alt="Delicious Indian Thali" 
//               className="absolute inset-0 w-full h-full object-cover rounded-full shadow-2xl border-8 border-white z-10"
//             />
//             {/* Floating Badge */}
//             <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20 flex items-center gap-4 animate-bounce" style={{ animationDuration: '3s' }}>
//               <div className="w-12 h-12 bg-sky-100 rounded-full flex items-center justify-center text-2xl">🍲</div>
//               <div>
//                 <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">Taste</p>
//                 <p className="text-slate-900 font-black">Ghar Jaisa!</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       <style dangerouslySetInnerHTML={{ __html: `
//         .blob-shape {
//           border-radius: 41% 59% 47% 53% / 41% 44% 56% 59%;
//           animation: morph 8s ease-in-out infinite;
//         }
//         @keyframes morph {
//           0%, 100% { border-radius: 41% 59% 47% 53% / 41% 44% 56% 59%; }
//           34% { border-radius: 54% 46% 39% 61% / 54% 56% 44% 46%; }
//           67% { border-radius: 46% 54% 58% 42% / 46% 41% 59% 54%; }
//         }
//         .animation-delay-2000 {
//           animation-delay: 2s;
//         }
//       `}} />
//     </section>
//   );
// }










// 'use client';

// import React, { useEffect, useRef } from 'react';

// const WHATSAPP_NUMBER = '+971557998925';

// export default function HeroSection() {
//   const cardMainRef = useRef(null);
//   const cardSecRef = useRef(null);
//   const cardThirdRef = useRef(null);
//   const statsRef = useRef(null);
//   const countersAnimated = useRef(false);

//   /* ── Parallax on mouse move ── */
//   useEffect(() => {
// const handleMouseMove = (e: MouseEvent) => {      const cx = window.innerWidth / 2;
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

//   /* ── Counter animation on scroll into view ── */
//   useEffect(() => {
//     const animateCounter = (el, target, suffix, duration = 2000) => {
//       const start = performance.now();
//       const update = (now) => {
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
//           const els = statsRef.current?.querySelectorAll('[data-target]');
//           els?.forEach((el) => {
//             const target = parseInt(el.dataset.target, 10);
//             const suffix = el.dataset.suffix || '';
//             animateCounter(el, target, suffix);
//           });
//         }
//       },
//       { threshold: 0.5 }
//     );

//     if (statsRef.current) observer.observe(statsRef.current);
//     return () => observer.disconnect();
//   }, []);

//   const scrollToPlans = () => {
//     document.getElementById('meal-plans')?.scrollIntoView({ behavior: 'smooth' });
//   };

//   return (
//     <>
//       {/* ── Global styles ── */}
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

//         :root {
//           --saffron: #FF6B2C;
//           --turmeric: #F5A623;
//           --cream: #FFF8F0;
//           --deep: #1A0A00;
//           --green: #2D6A4F;
//         }

//         .hero-root {
//           font-family: 'DM Sans', sans-serif;
//           background: var(--cream);
//           overflow-x: hidden;
//         }

//         /* Blobs */
//         .hero-blob {
//           position: absolute;
//           border-radius: 50%;
//           filter: blur(80px);
//           opacity: 0.35;
//           animation: heroFloatBlob 8s ease-in-out infinite;
//           pointer-events: none;
//         }
//         @keyframes heroFloatBlob {
//           0%,100% { transform: translate(0,0) scale(1); }
//           33%      { transform: translate(30px,-20px) scale(1.05); }
//           66%      { transform: translate(-20px,20px) scale(0.95); }
//         }

//         /* Ribbon */
//         .hero-ribbon {
//           background: linear-gradient(90deg, var(--saffron), var(--turmeric), var(--saffron));
//           background-size: 200% 100%;
//           animation: heroRibbonFlow 4s linear infinite;
//           color: #fff;
//           font-size: 12px;
//           font-weight: 600;
//           padding: 9px 0;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           position: relative;
//           z-index: 20;
//         }
//         @keyframes heroRibbonFlow {
//           0%   { background-position: 0% 50%; }
//           100% { background-position: 200% 50%; }
//         }

//         /* Live dot */
//         .hero-live-dot {
//           width: 7px; height: 7px;
//           border-radius: 50%;
//           background: #22C55E;
//           box-shadow: 0 0 0 3px rgba(34,197,94,.3);
//           animation: heroPulse 2s ease-in-out infinite;
//           display: inline-block;
//           flex-shrink: 0;
//         }
//         @keyframes heroPulse {
//           0%,100% { box-shadow: 0 0 0 3px rgba(34,197,94,.3); }
//           50%      { box-shadow: 0 0 0 6px rgba(34,197,94,.1); }
//         }

//         /* Underline grow */
//         .hero-em {
//           font-style: italic;
//           color: var(--saffron);
//           position: relative;
//         }
//         .hero-em::after {
//           content: '';
//           position: absolute;
//           bottom: 4px; left: 0; right: 0;
//           height: 3px;
//           background: linear-gradient(90deg, var(--saffron), var(--turmeric));
//           border-radius: 2px;
//           transform: scaleX(0);
//           transform-origin: left;
//           animation: heroUnderline 1s cubic-bezier(.16,1,.3,1) 1.2s both;
//         }
//         @keyframes heroUnderline {
//           to { transform: scaleX(1); }
//         }

//         /* Fade up */
//         .hero-fade-1 { animation: heroFadeUp .8s cubic-bezier(.16,1,.3,1) .2s both; }
//         .hero-fade-2 { animation: heroFadeUp .8s cubic-bezier(.16,1,.3,1) .3s both; }
//         .hero-fade-3 { animation: heroFadeUp .8s cubic-bezier(.16,1,.3,1) .4s both; }
//         .hero-fade-4 { animation: heroFadeUp .8s cubic-bezier(.16,1,.3,1) .5s both; }
//         .hero-fade-5 { animation: heroFadeUp .8s cubic-bezier(.16,1,.3,1) .6s both; }
//         .hero-fade-6 { animation: heroFadeUp .8s cubic-bezier(.16,1,.3,1) .7s both; }
//         .hero-fade-img { animation: heroFadeUp .9s cubic-bezier(.16,1,.3,1) .4s both; }
//         @keyframes heroFadeUp {
//           from { opacity: 0; transform: translateY(30px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }

//         /* Image cards */
//         .hero-img-card {
//           position: absolute;
//           border-radius: 24px;
//           overflow: hidden;
//           box-shadow: 0 20px 60px rgba(26,10,0,.18);
//           transition: transform .4s cubic-bezier(.34,1.56,.64,1);
//           will-change: transform;
//         }
//         .hero-img-card:hover { transform: scale(1.04) rotate(0deg) !important; z-index: 20; }

//         /* Floating badges */
//         .hero-float-badge {
//           position: absolute;
//           background: #fff;
//           border-radius: 16px;
//           padding: 10px 14px;
//           box-shadow: 0 10px 40px rgba(26,10,0,.14);
//           display: flex;
//           align-items: center;
//           gap: 8px;
//           z-index: 10;
//           white-space: nowrap;
//         }
//         .hero-badge-1 { top: 10px; right: 10px;  animation: heroBadgeFloat 4s ease-in-out infinite; }
//         .hero-badge-2 { bottom: 60px; right: 20px; animation: heroBadgeFloat 4s ease-in-out infinite; animation-delay: -2s; }
//         .hero-badge-3 { top: 180px; left: -10px;  animation: heroBadgeFloat 5s ease-in-out infinite; animation-delay: -1s; }
//         @keyframes heroBadgeFloat {
//           0%,100% { transform: translateY(0); }
//           50%      { transform: translateY(-8px); }
//         }

//         /* Buttons */
//         .hero-btn-primary {
//           background: linear-gradient(135deg, var(--saffron), #E84A1A);
//           color: #fff;
//           border: none;
//           padding: 14px 28px;
//           border-radius: 50px;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 15px;
//           font-weight: 600;
//           cursor: pointer;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           transition: all .3s cubic-bezier(.34,1.56,.64,1);
//           box-shadow: 0 8px 30px rgba(255,107,44,.4);
//           text-decoration: none;
//         }
//         .hero-btn-primary:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 16px 40px rgba(255,107,44,.5); }
//         .hero-btn-primary:hover .hero-arrow { transform: translateX(3px); }
//         .hero-arrow { transition: transform .3s; display: inline-block; }

//         .hero-btn-secondary {
//           background: rgba(255,255,255,.9);
//           color: var(--deep);
//           border: 1.5px solid rgba(26,10,0,.12);
//           padding: 14px 24px;
//           border-radius: 50px;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 15px;
//           font-weight: 600;
//           cursor: pointer;
//           display: inline-flex;
//           align-items: center;
//           gap: 10px;
//           transition: all .3s cubic-bezier(.34,1.56,.64,1);
//           backdrop-filter: blur(10px);
//           text-decoration: none;
//         }
//         .hero-btn-secondary:hover { transform: translateY(-3px); background: #fff; box-shadow: 0 8px 25px rgba(0,0,0,.1); }

//         /* Spice deco */
//         .hero-spice-deco {
//           position: absolute;
//           opacity: .07;
//           z-index: 1;
//           animation: heroSpinSlow 20s linear infinite;
//           pointer-events: none;
//           font-size: 40px;
//         }
//         @keyframes heroSpinSlow {
//           from { transform: rotate(0deg); }
//           to   { transform: rotate(360deg); }
//         }

//         /* Stats */
//         .hero-stat:not(:last-child)::after {
//           content: '';
//           position: absolute;
//           right: 0; top: 20%; bottom: 20%;
//           width: 1px;
//           background: rgba(255,107,44,.15);
//         }

//         /* Nav slide down */
//         .hero-nav-anim { animation: heroSlideDown .8s cubic-bezier(.16,1,.3,1) both; }
//         @keyframes heroSlideDown {
//           from { opacity: 0; transform: translateY(-30px); }
//           to   { opacity: 1; transform: translateY(0); }
//         }
//       `}</style>

//       <section className="hero-root" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'linear-gradient(135deg,#FFF8F0 0%,#FFF0E0 50%,#FFF5EB 100%)' }}>

//         {/* Background blobs */}
//         <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
//           <div className="hero-blob" style={{ width: 500, height: 500, background: '#FFD580', top: -100, right: -100, animationDelay: '0s' }} />
//           <div className="hero-blob" style={{ width: 400, height: 400, background: '#FF9F6B', bottom: -80, left: -80, animationDelay: '-3s' }} />
//           <div className="hero-blob" style={{ width: 300, height: 300, background: '#FFB347', top: '40%', left: '30%', animationDelay: '-5s' }} />
//         </div>

//         {/* Dot pattern */}
//         <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(255,107,44,.15) 1px,transparent 1px)', backgroundSize: '40px 40px', zIndex: 0, pointerEvents: 'none' }} />

//         {/* Spice decorations */}
//         <div className="hero-spice-deco" style={{ top: '20%', left: '5%', animationDirection: 'reverse' }}>🌶️</div>
//         <div className="hero-spice-deco" style={{ bottom: '25%', right: '5%', fontSize: 60, animationDuration: '30s' }}>🍛</div>
//         <div className="hero-spice-deco" style={{ top: '65%', left: '42%', fontSize: 28 }}>✦</div>

//         {/* Ribbon */}
//         <div className="hero-ribbon">
//           <div style={{ display: 'flex', justifyContent: 'center', gap: 30, alignItems: 'center', flexWrap: 'wrap' }}>
//             <span>🍲 Fresh Homemade Meals</span>
//             <span style={{ opacity: .6 }}>✦</span>
//             <span>🚚 Delivering Across Dubai</span>
//             <span style={{ opacity: .6 }}>✦</span>
//             <span>🌿 Zero Preservatives</span>
//             <span style={{ opacity: .6 }}>✦</span>
//             <span>❤️ Made with Love</span>
//           </div>
//         </div>

//         {/* Nav */}
//         <nav className="hero-nav-anim" style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px' }}>
//           <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 700, color: 'var(--deep)', letterSpacing: '-0.5px' }}>
//             Mom's <span style={{ color: 'var(--saffron)', fontStyle: 'italic' }}>Kitchen</span>
//           </div>
//           <div style={{ background: 'rgba(255,255,255,.8)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,107,44,.2)', borderRadius: 50, padding: '8px 20px', fontSize: 13, fontWeight: 500, color: 'var(--deep)', display: 'flex', alignItems: 'center', gap: 8 }}>
//             <span className="hero-live-dot" />
//             Now Accepting Orders
//           </div>
//         </nav>

//         {/* Main grid */}
//         <div style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 40, padding: '20px 40px 60px', flex: 1 }}>

//           {/* ── LEFT ── */}
//           <div>
//             {/* Tag */}
//             <div className="hero-fade-1" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,107,44,.1)', border: '1px solid rgba(255,107,44,.25)', borderRadius: 50, padding: '6px 14px', fontSize: 11, fontWeight: 600, color: 'var(--saffron)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>
//               <span className="hero-live-dot" />
//               Indian Home Cooking · Dubai
//             </div>

//             {/* Headline */}
//             <h1 className="hero-fade-2" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(38px,5vw,62px)', fontWeight: 900, color: 'var(--deep)', lineHeight: 1.08, letterSpacing: -1, marginBottom: 20 }}>
//               Ghar Jaisa<br />
//               Khana, <em className="hero-em">Right</em><br />
//               at Your Door
//             </h1>

//             {/* Subtitle */}
//             <p className="hero-fade-3" style={{ fontSize: 16, color: '#6B5344', lineHeight: 1.7, marginBottom: 32, maxWidth: 420 }}>
//               Homemade Indian meals cooked with <strong>love</strong> and traditional recipes — meal subscriptions crafted for busy professionals, families &amp; students across Dubai.
//             </p>

//             {/* CTA buttons */}
//             <div className="hero-fade-4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
//               <button className="hero-btn-primary" onClick={scrollToPlans}>
//                 View Meal Plans
//                 <span className="hero-arrow">
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                     <path d="M5 12h14M12 5l7 7-7 7" />
//                   </svg>
//                 </span>
//               </button>

//               <a href={`tel:${WHATSAPP_NUMBER}`} className="hero-btn-secondary">
//                 <span style={{ width: 28, height: 28, background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//                   <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
//                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//                   </svg>
//                 </span>
//                 +971 55 799 8925
//               </a>
//             </div>

//             {/* Trust badges */}
//             <div className="hero-fade-5" style={{ display: 'flex', gap: 20, marginTop: 28, flexWrap: 'wrap' }}>
//               {['Fresh Ingredients Daily', 'No Preservatives', 'Subscription Plans'].map((label) => (
//                 <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 500, color: '#6B5344' }}>
//                   <span style={{ width: 22, height: 22, background: 'rgba(45,106,79,.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//                     <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
//                       <polyline points="20 6 9 17 4 12" />
//                     </svg>
//                   </span>
//                   {label}
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* ── RIGHT — image collage ── */}
//           <div className="hero-fade-img" style={{ position: 'relative', height: 520 }}>

//             {/* Main large card */}
//             <div ref={cardMainRef} className="hero-img-card" style={{ width: 280, height: 320, top: 30, right: 0, transform: 'rotate(2deg)', zIndex: 3 }}>
//               <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=560&q=80&auto=format&fit=crop" alt="Indian Thali" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
//             </div>

//             {/* Secondary card */}
//             <div ref={cardSecRef} className="hero-img-card" style={{ width: 200, height: 220, bottom: 20, left: 0, transform: 'rotate(-3deg)', zIndex: 4 }}>
//               <img src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80&auto=format&fit=crop" alt="Dal Makhani" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
//             </div>

//             {/* Third card */}
//             <div ref={cardThirdRef} className="hero-img-card" style={{ width: 160, height: 160, top: 0, left: 30, transform: 'rotate(1.5deg)', zIndex: 2, borderRadius: 20 }}>
//               <img src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=320&q=80&auto=format&fit=crop" alt="Biryani" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
//             </div>

//             {/* Floating badge 1 */}
//             <div className="hero-float-badge hero-badge-1">
//               <span style={{ fontSize: 20 }}>⭐</span>
//               <div>
//                 <span style={{ fontSize: 10, color: '#9B7B6A', fontWeight: 400, display: 'block' }}>Happy Customers</span>
//                 <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--deep)' }}>500+ Families</span>
//               </div>
//             </div>

//             {/* Floating badge 2 */}
//             <div className="hero-float-badge hero-badge-2">
//               <span style={{ fontSize: 20 }}>🕐</span>
//               <div>
//                 <span style={{ fontSize: 10, color: '#9B7B6A', fontWeight: 400, display: 'block' }}>Delivery Time</span>
//                 <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--deep)' }}>On Schedule</span>
//               </div>
//             </div>

//             {/* Floating badge 3 */}
//             <div className="hero-float-badge hero-badge-3">
//               <span style={{ fontSize: 20 }}>🌿</span>
//               <div>
//                 <span style={{ fontSize: 10, color: '#9B7B6A', fontWeight: 400, display: 'block' }}>Cooked Today</span>
//                 <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--deep)' }}>100% Fresh</span>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Stats bar */}
//         <div ref={statsRef} className="hero-fade-6" style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', background: '#fff', borderRadius: 20, margin: '0 40px 40px', boxShadow: '0 -4px 60px rgba(255,107,44,.1),0 10px 40px rgba(26,10,0,.08)', overflow: 'hidden' }}>
//           {[
//             { target: 500, suffix: '+', label: 'Happy Families' },
//             { target: 50,  suffix: '+', label: 'Menu Varieties' },
//             { target: 3,   suffix: '',  label: 'Years Serving Dubai' },
//           ].map(({ target, suffix, label }) => (
//             <div key={label} className="hero-stat" style={{ padding: '22px 30px', textAlign: 'center', position: 'relative' }}>
//               <div data-target={target} data-suffix={suffix} style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 900, color: 'var(--saffron)', lineHeight: 1, marginBottom: 4 }}>
//                 0{suffix}
//               </div>
//               <div style={{ fontSize: 12, color: '#9B7B6A', fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{label}</div>
//             </div>
//           ))}
//         </div>

//       </section>
//     </>
//   );
// }















'use client';

import React, { useEffect, useRef } from 'react';

const WHATSAPP_NUMBER = '+971557998925';

export default function HeroSection() {
  const cardMainRef = useRef<HTMLDivElement>(null);
  const cardSecRef = useRef<HTMLDivElement>(null);
  const cardThirdRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const countersAnimated = useRef<boolean>(false);

  /* ── Parallax on mouse move ── */
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
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

  /* ── Counter animation on scroll into view ── */
  useEffect(() => {
    const animateCounter = (
      el: HTMLElement,
      target: number,
      suffix: string,
      duration = 2000
    ) => {
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
            const target = parseInt(el.dataset.target ?? '0', 10);
            const suffix = el.dataset.suffix ?? '';
            animateCounter(el, target, suffix);
          });
        }
      },
      { threshold: 0.5 }
    );

    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  const scrollToPlans = () => {
    document.getElementById('meal-plans')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      {/* ── Global styles ── */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        :root {
          --saffron: #FF6B2C;
          --turmeric: #F5A623;
          --cream: #FFF8F0;
          --deep: #1A0A00;
          --green: #2D6A4F;
        }

        .hero-root {
          font-family: 'DM Sans', sans-serif;
          background: var(--cream);
          overflow-x: hidden;
        }

        /* Blobs */
        .hero-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.35;
          animation: heroFloatBlob 8s ease-in-out infinite;
          pointer-events: none;
        }
        @keyframes heroFloatBlob {
          0%,100% { transform: translate(0,0) scale(1); }
          33%      { transform: translate(30px,-20px) scale(1.05); }
          66%      { transform: translate(-20px,20px) scale(0.95); }
        }

        /* Ribbon */
        .hero-ribbon {
          background: linear-gradient(90deg, var(--saffron), var(--turmeric), var(--saffron));
          background-size: 200% 100%;
          animation: heroRibbonFlow 4s linear infinite;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 9px 0;
          letter-spacing: 2px;
          text-transform: uppercase;
          position: relative;
          z-index: 20;
        }
        @keyframes heroRibbonFlow {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        /* Live dot */
        .hero-live-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: #22C55E;
          box-shadow: 0 0 0 3px rgba(34,197,94,.3);
          animation: heroPulse 2s ease-in-out infinite;
          display: inline-block;
          flex-shrink: 0;
        }
        @keyframes heroPulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(34,197,94,.3); }
          50%      { box-shadow: 0 0 0 6px rgba(34,197,94,.1); }
        }

        /* Underline grow */
        .hero-em {
          font-style: italic;
          color: var(--saffron);
          position: relative;
        }
        .hero-em::after {
          content: '';
          position: absolute;
          bottom: 4px; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, var(--saffron), var(--turmeric));
          border-radius: 2px;
          transform: scaleX(0);
          transform-origin: left;
          animation: heroUnderline 1s cubic-bezier(.16,1,.3,1) 1.2s both;
        }
        @keyframes heroUnderline {
          to { transform: scaleX(1); }
        }

        /* Fade up */
        .hero-fade-1 { animation: heroFadeUp .8s cubic-bezier(.16,1,.3,1) .2s both; }
        .hero-fade-2 { animation: heroFadeUp .8s cubic-bezier(.16,1,.3,1) .3s both; }
        .hero-fade-3 { animation: heroFadeUp .8s cubic-bezier(.16,1,.3,1) .4s both; }
        .hero-fade-4 { animation: heroFadeUp .8s cubic-bezier(.16,1,.3,1) .5s both; }
        .hero-fade-5 { animation: heroFadeUp .8s cubic-bezier(.16,1,.3,1) .6s both; }
        .hero-fade-6 { animation: heroFadeUp .8s cubic-bezier(.16,1,.3,1) .7s both; }
        .hero-fade-img { animation: heroFadeUp .9s cubic-bezier(.16,1,.3,1) .4s both; }
        @keyframes heroFadeUp {
          from { opacity: 0; transform: translateY(30px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        /* Image cards */
        .hero-img-card {
          position: absolute;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 20px 60px rgba(26,10,0,.18);
          transition: transform .4s cubic-bezier(.34,1.56,.64,1);
          will-change: transform;
        }
        .hero-img-card:hover { transform: scale(1.04) rotate(0deg) !important; z-index: 20; }

        /* Floating badges */
        .hero-float-badge {
          position: absolute;
          background: #fff;
          border-radius: 16px;
          padding: 10px 14px;
          box-shadow: 0 10px 40px rgba(26,10,0,.14);
          display: flex;
          align-items: center;
          gap: 8px;
          z-index: 10;
          white-space: nowrap;
        }
        .hero-badge-1 { top: 10px; right: 10px;  animation: heroBadgeFloat 4s ease-in-out infinite; }
        .hero-badge-2 { bottom: 60px; right: 20px; animation: heroBadgeFloat 4s ease-in-out infinite; animation-delay: -2s; }
        .hero-badge-3 { top: 180px; left: -10px;  animation: heroBadgeFloat 5s ease-in-out infinite; animation-delay: -1s; }
        @keyframes heroBadgeFloat {
          0%,100% { transform: translateY(0); }
          50%      { transform: translateY(-8px); }
        }

        /* Buttons */
        .hero-btn-primary {
          background: linear-gradient(135deg, var(--saffron), #E84A1A);
          color: #fff;
          border: none;
          padding: 14px 28px;
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
          box-shadow: 0 8px 30px rgba(255,107,44,.4);
          text-decoration: none;
        }
        .hero-btn-primary:hover { transform: translateY(-3px) scale(1.02); box-shadow: 0 16px 40px rgba(255,107,44,.5); }
        .hero-btn-primary:hover .hero-arrow { transform: translateX(3px); }
        .hero-arrow { transition: transform .3s; display: inline-block; }

        .hero-btn-secondary {
          background: rgba(255,255,255,.9);
          color: var(--deep);
          border: 1.5px solid rgba(26,10,0,.12);
          padding: 14px 24px;
          border-radius: 50px;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 10px;
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
          backdrop-filter: blur(10px);
          text-decoration: none;
        }
        .hero-btn-secondary:hover { transform: translateY(-3px); background: #fff; box-shadow: 0 8px 25px rgba(0,0,0,.1); }

        /* Spice deco */
        .hero-spice-deco {
          position: absolute;
          opacity: .07;
          z-index: 1;
          animation: heroSpinSlow 20s linear infinite;
          pointer-events: none;
          font-size: 40px;
        }
        @keyframes heroSpinSlow {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* Stats */
        .hero-stat:not(:last-child)::after {
          content: '';
          position: absolute;
          right: 0; top: 20%; bottom: 20%;
          width: 1px;
          background: rgba(255,107,44,.15);
        }

        /* Nav slide down */
        .hero-nav-anim { animation: heroSlideDown .8s cubic-bezier(.16,1,.3,1) both; }
        @keyframes heroSlideDown {
          from { opacity: 0; transform: translateY(-30px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="hero-root" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', overflow: 'hidden', background: 'linear-gradient(135deg,#FFF8F0 0%,#FFF0E0 50%,#FFF5EB 100%)' }}>

        {/* Background blobs */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden', pointerEvents: 'none' }}>
          <div className="hero-blob" style={{ width: 500, height: 500, background: '#FFD580', top: -100, right: -100, animationDelay: '0s' }} />
          <div className="hero-blob" style={{ width: 400, height: 400, background: '#FF9F6B', bottom: -80, left: -80, animationDelay: '-3s' }} />
          <div className="hero-blob" style={{ width: 300, height: 300, background: '#FFB347', top: '40%', left: '30%', animationDelay: '-5s' }} />
        </div>

        {/* Dot pattern */}
        <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(circle,rgba(255,107,44,.15) 1px,transparent 1px)', backgroundSize: '40px 40px', zIndex: 0, pointerEvents: 'none' }} />

        {/* Spice decorations */}
        <div className="hero-spice-deco" style={{ top: '20%', left: '5%', animationDirection: 'reverse' }}>🌶️</div>
        <div className="hero-spice-deco" style={{ bottom: '25%', right: '5%', fontSize: 60, animationDuration: '30s' }}>🍛</div>
        <div className="hero-spice-deco" style={{ top: '65%', left: '42%', fontSize: 28 }}>✦</div>

        {/* Ribbon */}
        <div className="hero-ribbon">
          <div style={{ display: 'flex', justifyContent: 'center', gap: 30, alignItems: 'center', flexWrap: 'wrap' }}>
            <span>🍲 Fresh Homemade Meals</span>
            <span style={{ opacity: .6 }}>✦</span>
            <span>🚚 Delivering Across Dubai</span>
            <span style={{ opacity: .6 }}>✦</span>
            <span>🌿 Zero Preservatives</span>
            <span style={{ opacity: .6 }}>✦</span>
            <span>❤️ Made with Love</span>
          </div>
        </div>

        {/* Nav */}
        <nav className="hero-nav-anim" style={{ position: 'relative', zIndex: 10, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 40px' }}>
          <div style={{ fontFamily: "'Playfair Display',serif", fontSize: 26, fontWeight: 700, color: 'var(--deep)', letterSpacing: '-0.5px' }}>
            Mom&apos;s <span style={{ color: 'var(--saffron)', fontStyle: 'italic' }}>Kitchen</span>
          </div>
          <div style={{ background: 'rgba(255,255,255,.8)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,107,44,.2)', borderRadius: 50, padding: '8px 20px', fontSize: 13, fontWeight: 500, color: 'var(--deep)', display: 'flex', alignItems: 'center', gap: 8 }}>
            <span className="hero-live-dot" />
            Now Accepting Orders
          </div>
        </nav>

        {/* Main grid */}
        <div style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: 40, padding: '20px 40px 60px', flex: 1 }}>

          {/* ── LEFT ── */}
          <div>
            {/* Tag */}
            <div className="hero-fade-1" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, background: 'rgba(255,107,44,.1)', border: '1px solid rgba(255,107,44,.25)', borderRadius: 50, padding: '6px 14px', fontSize: 11, fontWeight: 600, color: 'var(--saffron)', letterSpacing: 1, textTransform: 'uppercase', marginBottom: 20 }}>
              <span className="hero-live-dot" />
              Indian Home Cooking · Dubai
            </div>

            {/* Headline */}
            <h1 className="hero-fade-2" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(38px,5vw,62px)', fontWeight: 900, color: 'var(--deep)', lineHeight: 1.08, letterSpacing: -1, marginBottom: 20 }}>
              Ghar Jaisa<br />
              Khana, <em className="hero-em">Right</em><br />
              at Your Door
            </h1>

            {/* Subtitle */}
            <p className="hero-fade-3" style={{ fontSize: 16, color: '#6B5344', lineHeight: 1.7, marginBottom: 32, maxWidth: 420 }}>
              Homemade Indian meals cooked with <strong>love</strong> and traditional recipes — meal subscriptions crafted for busy professionals, families &amp; students across Dubai.
            </p>

            {/* CTA buttons */}
            <div className="hero-fade-4" style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              <button className="hero-btn-primary" onClick={scrollToPlans}>
                View Meal Plans
                <span className="hero-arrow">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </span>
              </button>

              <a href={`tel:${WHATSAPP_NUMBER}`} className="hero-btn-secondary">
                <span style={{ width: 28, height: 28, background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </span>
                +971 55 799 8925
              </a>
            </div>

            {/* Trust badges */}
            <div className="hero-fade-5" style={{ display: 'flex', gap: 20, marginTop: 28, flexWrap: 'wrap' }}>
              {['Fresh Ingredients Daily', 'No Preservatives', 'Subscription Plans'].map((label) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: 7, fontSize: 13, fontWeight: 500, color: '#6B5344' }}>
                  <span style={{ width: 22, height: 22, background: 'rgba(45,106,79,.15)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#2D6A4F" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                  </span>
                  {label}
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT — image collage ── */}
          <div className="hero-fade-img" style={{ position: 'relative', height: 520 }}>

            {/* Main large card */}
            <div ref={cardMainRef} className="hero-img-card" style={{ width: 280, height: 320, top: 30, right: 0, transform: 'rotate(2deg)', zIndex: 3 }}>
              <img src="https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=560&q=80&auto=format&fit=crop" alt="Indian Thali" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>

            {/* Secondary card */}
            <div ref={cardSecRef} className="hero-img-card" style={{ width: 200, height: 220, bottom: 20, left: 0, transform: 'rotate(-3deg)', zIndex: 4 }}>
              <img src="https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=400&q=80&auto=format&fit=crop" alt="Dal Makhani" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>

            {/* Third card */}
            <div ref={cardThirdRef} className="hero-img-card" style={{ width: 160, height: 160, top: 0, left: 30, transform: 'rotate(1.5deg)', zIndex: 2, borderRadius: 20 }}>
              <img src="https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?w=320&q=80&auto=format&fit=crop" alt="Biryani" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} />
            </div>

            {/* Floating badge 1 */}
            <div className="hero-float-badge hero-badge-1">
              <span style={{ fontSize: 20 }}>⭐</span>
              <div>
                <span style={{ fontSize: 10, color: '#9B7B6A', fontWeight: 400, display: 'block' }}>Happy Customers</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--deep)' }}>500+ Families</span>
              </div>
            </div>

            {/* Floating badge 2 */}
            <div className="hero-float-badge hero-badge-2">
              <span style={{ fontSize: 20 }}>🕐</span>
              <div>
                <span style={{ fontSize: 10, color: '#9B7B6A', fontWeight: 400, display: 'block' }}>Delivery Time</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--deep)' }}>On Schedule</span>
              </div>
            </div>

            {/* Floating badge 3 */}
            <div className="hero-float-badge hero-badge-3">
              <span style={{ fontSize: 20 }}>🌿</span>
              <div>
                <span style={{ fontSize: 10, color: '#9B7B6A', fontWeight: 400, display: 'block' }}>Cooked Today</span>
                <span style={{ fontSize: 14, fontWeight: 700, color: 'var(--deep)' }}>100% Fresh</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div ref={statsRef} className="hero-fade-6" style={{ position: 'relative', zIndex: 10, display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', background: '#fff', borderRadius: 20, margin: '0 40px 40px', boxShadow: '0 -4px 60px rgba(255,107,44,.1),0 10px 40px rgba(26,10,0,.08)', overflow: 'hidden' }}>
          {[
            { target: 500, suffix: '+', label: 'Happy Families' },
            { target: 50,  suffix: '+', label: 'Menu Varieties' },
            { target: 3,   suffix: '',  label: 'Years Serving Dubai' },
          ].map(({ target, suffix, label }) => (
            <div key={label} className="hero-stat" style={{ padding: '22px 30px', textAlign: 'center', position: 'relative' }}>
              <div data-target={target} data-suffix={suffix} style={{ fontFamily: "'Playfair Display',serif", fontSize: 32, fontWeight: 900, color: 'var(--saffron)', lineHeight: 1, marginBottom: 4 }}>
                0{suffix}
              </div>
              <div style={{ fontSize: 12, color: '#9B7B6A', fontWeight: 500, letterSpacing: '0.5px', textTransform: 'uppercase' }}>{label}</div>
            </div>
          ))}
        </div>

      </section>
    </>
  );
}