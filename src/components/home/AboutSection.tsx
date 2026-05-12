






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

















'use client';

import React, { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: '500+', label: 'Happy Families' },
  { value: '3+',   label: 'Years in Dubai' },
  { value: '0',    label: 'Preservatives' },
];

// Homemade Indian thali / tiffin photos (Unsplash — no momos)
const THALI_PHOTOS = [
  {
    src: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1200&auto=format&fit=crop',
    alt: 'Traditional Indian thali with dal, sabzi, roti and rice',
    caption: 'Fresh Dal, Roti & Sabzi — everyday comfort',
  },
  {
    src: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?q=80&w=1200&auto=format&fit=crop',
    alt: 'North Indian home-style thali',
    caption: 'North Indian home-style thali — just like mom makes',
  },
  {
    src: 'https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=1200&auto=format&fit=crop',
    alt: 'Indian curry and roti home meal',
    caption: 'Ghar ka khana — fresh, balanced, full of flavour',
  },
  {
    src: 'https://images.unsplash.com/photo-1606491956689-2ea866880c84?q=80&w=1200&auto=format&fit=crop',
    alt: 'Indian home cooked meal with multiple dishes',
    caption: 'Made fresh every morning by our home chefs',
  },
];

export default function AboutSection() {
  const sectionRef   = useRef<HTMLElement>(null);
  const [current, setCurrent]   = useState(0);
  const [animating, setAnimating] = useState(false);
  const [direction, setDirection] = useState<'next' | 'prev'>('next');
  const intervalRef = useRef<ReturnType<typeof setInterval> | null>(null);

  /* ── Auto-advance ── */
  const startAutoPlay = () => {
    intervalRef.current = setInterval(() => {
      goTo('next');
    }, 3500);
  };

  const stopAutoPlay = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
  };

  useEffect(() => {
    startAutoPlay();
    return () => stopAutoPlay();
  }, [current]);                   // restart timer after every slide change

  const goTo = (dir: 'next' | 'prev') => {
    if (animating) return;
    setAnimating(true);
    setDirection(dir);
    setTimeout(() => {
      setCurrent(prev =>
        dir === 'next'
          ? (prev + 1) % THALI_PHOTOS.length
          : (prev - 1 + THALI_PHOTOS.length) % THALI_PHOTOS.length
      );
      setAnimating(false);
    }, 500);
  };

  /* ── Reveal on scroll ── */
  useEffect(() => {
    const els = sectionRef.current?.querySelectorAll<HTMLElement>('.about-reveal');
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
      { threshold: 0.1 }
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const photo = THALI_PHOTOS[current];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,800;1,700&family=DM+Sans:wght@400;500;600&display=swap');

        :root {
          --saffron:  #FF6B2C;
          --turmeric: #F5A623;
          --cream:    #FFF8F0;
          --deep:     #1A0A00;
          --green:    #2D6A4F;
        }

        /* ── Reveal animation ── */
        .about-reveal {
          opacity: 0;
          transform: translateY(28px) scale(0.98);
          transition: opacity .7s cubic-bezier(.16,1,.3,1), transform .7s cubic-bezier(.16,1,.3,1);
        }
        .about-reveal.delay-1 { transition-delay: .1s; }
        .about-reveal.delay-2 { transition-delay: .2s; }
        .about-reveal.delay-3 { transition-delay: .3s; }
        .about-reveal.delay-4 { transition-delay: .4s; }
        .about-reveal.delay-5 { transition-delay: .5s; }

        /* ── Carousel wrapper ── */
        .about-carousel {
          position: absolute;
          inset: 0;
          overflow: hidden;
          border-radius: 2rem;
          box-shadow: 0 20px 56px rgba(26,10,0,.14);
          border: 4px solid #fff;
        }

        /* ── Slide transition ── */
        .about-slide {
          position: absolute;
          inset: 0;
          transition: transform 0.55s cubic-bezier(.77,0,.18,1), opacity 0.55s ease;
        }
        .about-slide.active   { transform: translateX(0);    opacity: 1; z-index: 2; }
        .about-slide.exit-next { transform: translateX(-100%); opacity: 0; z-index: 1; }
        .about-slide.exit-prev { transform: translateX(100%);  opacity: 0; z-index: 1; }
        .about-slide.enter-next { transform: translateX(100%);  opacity: 0; z-index: 3; }
        .about-slide.enter-prev { transform: translateX(-100%); opacity: 0; z-index: 3; }
        .about-slide.active-enter { transform: translateX(0); opacity: 1; z-index: 3; }

        .about-slide img {
          width: 100%; height: 100%; object-fit: cover; display: block;
        }
        .about-slide-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(to top, rgba(26,10,0,.78) 0%, rgba(26,10,0,.08) 55%, transparent 100%);
        }

        /* ── Carousel controls ── */
        .about-carousel-controls {
          position: absolute;
          bottom: 16px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 20;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .about-dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,0.45);
          cursor: pointer;
          transition: all 0.3s ease;
          border: none;
          padding: 0;
          flex-shrink: 0;
        }
        .about-dot.active {
          background: #fff;
          width: 22px;
          border-radius: 4px;
        }
        .about-arrow {
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          z-index: 20;
          width: 34px; height: 34px;
          border-radius: 50%;
          background: rgba(255,255,255,0.18);
          backdrop-filter: blur(8px);
          border: 1px solid rgba(255,255,255,0.3);
          color: #fff;
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: background 0.2s, transform 0.2s;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        .about-arrow:hover  { background: rgba(255,255,255,0.32); transform: translateY(-50%) scale(1.08); }
        .about-arrow:active { transform: translateY(-50%) scale(0.95); }
        .about-arrow-left  { left: 12px; }
        .about-arrow-right { right: 12px; }

        /* ── Caption badge ── */
        .about-caption-badge {
          position: absolute;
          bottom: 44px;
          left: 16px; right: 16px;
          background: rgba(26,10,0,.68);
          backdrop-filter: blur(16px);
          border-radius: 14px;
          padding: 12px 16px;
          border: 1px solid rgba(255,255,255,.1);
          z-index: 10;
          transition: opacity 0.4s ease;
        }

        /* ── Slide number badge ── */
        .about-slide-count {
          position: absolute;
          top: 14px;
          left: 14px;
          z-index: 20;
          background: rgba(26,10,0,.55);
          backdrop-filter: blur(8px);
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 11px;
          font-weight: 600;
          padding: 4px 10px;
          border-radius: 50px;
          border: 1px solid rgba(255,255,255,.15);
          letter-spacing: 0.5px;
        }

        /* ── Progress bar ── */
        .about-progress-bar {
          position: absolute;
          top: 0; left: 0;
          height: 3px;
          background: linear-gradient(90deg, #FF6B2C, #F5A623);
          border-radius: 0 2px 2px 0;
          z-index: 20;
          animation: aboutProgress 3.5s linear;
          transform-origin: left;
        }
        @keyframes aboutProgress {
          from { width: 0%; }
          to   { width: 100%; }
        }

        /* ── Stat cards ── */
        .about-stat {
          background: rgba(255,255,255,.9);
          backdrop-filter: blur(12px);
          border: 1px solid rgba(255,107,44,.15);
          border-radius: 14px;
          padding: 12px 16px;
          text-align: center;
          transition: transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s;
        }
        .about-stat:hover {
          transform: translateY(-4px);
          box-shadow: 0 12px 28px rgba(255,107,44,.15);
        }

        /* ── Highlight box ── */
        .about-highlight {
          background: #FFF8F0;
          border: 1px solid rgba(255,107,44,.18);
          border-left: 4px solid var(--green);
          border-radius: 16px;
          padding: 20px 20px;
          display: flex; align-items: flex-start; gap: 14px;
          transition: box-shadow .3s, transform .3s cubic-bezier(.34,1.56,.64,1);
        }
        .about-highlight:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 28px rgba(45,106,79,.1);
        }

        /* ── Tag ── */
        .about-tag {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,107,44,.1);
          border: 1px solid rgba(255,107,44,.25);
          border-radius: 50px;
          padding: 5px 14px;
          font-size: 11px; font-weight: 600;
          color: var(--saffron); letter-spacing: 2px; text-transform: uppercase;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Decorative ring ── */
        .about-ring {
          position: absolute;
          border-radius: 50%;
          border: 2px dashed rgba(255,107,44,.18);
          animation: aboutSpin 22s linear infinite;
          pointer-events: none;
          display: none;
        }
        @keyframes aboutSpin {
          from { transform: rotate(0deg); }
          to   { transform: rotate(360deg); }
        }

        /* ── CTA buttons ── */
        .about-btn-primary {
          background: linear-gradient(135deg,#FF6B2C,#E84A1A);
          color: #fff; border: none; border-radius: 50px;
          padding: 13px 24px;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600;
          cursor: pointer; display: inline-flex; align-items: center; gap: 6px;
          box-shadow: 0 6px 20px rgba(255,107,44,.35);
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
          text-decoration: none; white-space: nowrap;
          min-height: 48px;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        .about-btn-primary:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 12px 28px rgba(255,107,44,.45); }
        .about-btn-primary:active { transform: scale(0.97); }

        .about-btn-secondary {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 13px 20px; border-radius: 50px;
          border: 1.5px solid rgba(255,107,44,.25);
          background: rgba(255,107,44,.06);
          text-decoration: none;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600;
          color: #5C3D2E; transition: all .2s; white-space: nowrap;
          min-height: 48px;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        .about-btn-secondary:hover { background: rgba(255,107,44,.12); }
        .about-btn-secondary:active { transform: scale(0.97); }

        /* ════════════════════════════
           LAYOUT — mobile first
        ════════════════════════════ */
        .about-section {
          padding: 60px 0 72px;
          background: linear-gradient(180deg,#FFF8F0 0%,#ffffff 60%,#FFF8F0 100%);
        }
        .about-container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 16px;
          display: flex;
          flex-direction: column;
          gap: 48px;
        }

        /* ── Image collage ── */
        .about-collage {
          position: relative;
          height: 320px;
          width: 100%;
          max-width: 500px;
          margin: 0 auto;
          flex-shrink: 0;
        }

        /* Stat cards */
        .about-stats-col {
          position: absolute;
          top: 14px; right: -10px;
          display: flex; flex-direction: column; gap: 8px;
          z-index: 10;
        }

        /* Content side */
        .about-content { font-family: 'DM Sans', sans-serif; }

        /* CTA row */
        .about-cta-row {
          display: flex; gap: 10px; margin-top: 22px; flex-wrap: wrap;
        }

        /* ── 400px ── */
        @media (min-width: 400px) {
          .about-collage { height: 360px; }
        }

        /* ── 480px ── */
        @media (min-width: 480px) {
          .about-collage { height: 400px; }
          .about-stats-col { right: -4px; }
        }

        /* ── Tablet 640px ── */
        @media (min-width: 640px) {
          .about-section { padding: 80px 0 90px; }
          .about-container { padding: 0 28px; gap: 56px; }
          .about-collage { height: 460px; max-width: 580px; }
          .about-ring { display: block; }
          .about-stats-col { right: -16px; gap: 10px; }
          .about-arrow { width: 38px; height: 38px; }
          .about-caption-badge { bottom: 48px; left: 18px; right: 18px; }
        }

        /* ── Desktop 1024px ── */
        @media (min-width: 1024px) {
          .about-section { padding: 96px 0; }
          .about-container {
            flex-direction: row;
            align-items: center;
            gap: 64px;
          }
          .about-collage {
            height: 520px;
            max-width: none;
            flex: 1;
            margin: 0;
          }
          .about-content { flex: 1; }
          .about-stats-col { right: -20px; gap: 12px; }
        }

        /* ── Wide 1280px ── */
        @media (min-width: 1280px) {
          .about-container { padding: 0 48px; gap: 80px; }
        }

        /* Highlight icon */
        .about-hl-icon {
          width: 44px; height: 44px; font-size: 20px;
          flex-shrink: 0;
        }
        @media (min-width: 640px) {
          .about-hl-icon { width: 52px; height: 52px; font-size: 24px; }
        }

        /* Stat values */
        .about-stat-val { font-size: 20px; }
        .about-stat-lbl { font-size: 9px; }
        @media (min-width: 400px) { .about-stat-val { font-size: 22px; } }
        @media (min-width: 640px) {
          .about-stat-val { font-size: 24px; }
          .about-stat-lbl { font-size: 11px; }
          .about-stat { padding: 14px 20px; }
        }

        /* ── Swipe touch support ── */
        .about-carousel { user-select: none; -webkit-user-select: none; }
      `}</style>

      <section ref={sectionRef} id="about" className="about-section">
        <div className="about-container">

          {/* ── LEFT: carousel collage ── */}
          <div className="about-reveal about-collage">

            {/* Decorative rings */}
            <div className="about-ring" style={{ width: 420, height: 420, top: 40, left: -10, animationDuration: '25s' }} />
            <div className="about-ring" style={{ width: 290, height: 290, top: 115, left: 65, animationDirection: 'reverse', opacity: .5 }} />

            {/* Carousel */}
            <div
              className="about-carousel"
              onMouseEnter={stopAutoPlay}
              onMouseLeave={startAutoPlay}
            >
              {/* Progress bar — re-mounts on current change to restart animation */}
              <div key={`progress-${current}`} className="about-progress-bar" />

              {/* Slide counter */}
              <div className="about-slide-count">{current + 1} / {THALI_PHOTOS.length}</div>

              {/* Slides */}
              {THALI_PHOTOS.map((ph, idx) => {
                let cls = '';
                if (idx === current) {
                  cls = animating ? 'about-slide active-enter' : 'about-slide active';
                } else if (animating) {
                  // outgoing slide
                  const prevIdx = direction === 'next'
                    ? (current - 1 + THALI_PHOTOS.length) % THALI_PHOTOS.length
                    : (current + 1) % THALI_PHOTOS.length;
                  if (idx === prevIdx) {
                    cls = direction === 'next' ? 'about-slide exit-next' : 'about-slide exit-prev';
                  } else {
                    cls = 'about-slide';
                  }
                } else {
                  cls = 'about-slide';
                }

                return (
                  <div key={idx} className={cls} style={{ visibility: Math.abs(idx - current) <= 1 || (current === 0 && idx === THALI_PHOTOS.length - 1) || (current === THALI_PHOTOS.length - 1 && idx === 0) ? 'visible' : 'hidden' }}>
                    <img src={ph.src} alt={ph.alt} loading={idx === 0 ? 'eager' : 'lazy'} />
                    <div className="about-slide-overlay" />
                  </div>
                );
              })}

              {/* Caption */}
              <div className="about-caption-badge">
                <div style={{ display: 'flex', gap: 3, marginBottom: 6 }}>
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill="#F5A623">
                      <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                    </svg>
                  ))}
                </div>
                <p style={{ fontFamily: "'Playfair Display',serif", fontStyle: 'italic', fontSize: 'clamp(13px,2.5vw,16px)', fontWeight: 700, color: '#fff', lineHeight: 1.4, marginBottom: 4 }}>
                  "{photo.caption}"
                </p>
                <p style={{ fontFamily: "'DM Sans',sans-serif", fontSize: 11, color: 'rgba(255,255,255,.6)', fontWeight: 500 }}>
                  — The Chef Mom Kitchen
                </p>
              </div>

              {/* Dot indicators */}
              <div className="about-carousel-controls">
                {THALI_PHOTOS.map((_, idx) => (
                  <button
                    key={idx}
                    className={`about-dot${idx === current ? ' active' : ''}`}
                    onClick={() => { stopAutoPlay(); setDirection(idx > current ? 'next' : 'prev'); setCurrent(idx); }}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>

              {/* Arrow buttons */}
              <button
                className="about-arrow about-arrow-left"
                onClick={() => { stopAutoPlay(); goTo('prev'); }}
                aria-label="Previous photo"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M15 18l-6-6 6-6"/>
                </svg>
              </button>
              <button
                className="about-arrow about-arrow-right"
                onClick={() => { stopAutoPlay(); goTo('next'); }}
                aria-label="Next photo"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M9 18l6-6-6-6"/>
                </svg>
              </button>
            </div>

            {/* Stat cards */}
            <div className="about-stats-col">
              {STATS.map(({ value, label }, i) => (
                <div key={label} className={`about-stat about-reveal delay-${i + 2}`}>
                  <div className="about-stat-val" style={{ fontFamily: "'Playfair Display',serif", fontWeight: 800, color: '#FF6B2C', lineHeight: 1 }}>{value}</div>
                  <div className="about-stat-lbl" style={{ fontFamily: "'DM Sans',sans-serif", color: '#9B7B6A', fontWeight: 600, letterSpacing: 1, textTransform: 'uppercase', marginTop: 2 }}>{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* ── RIGHT: content ── */}
          <div className="about-content">
            <div className="about-reveal about-tag" style={{ marginBottom: 16 }}>
              <span style={{ width: 6, height: 6, borderRadius: '50%', background: '#FF6B2C', display: 'inline-block' }} />
              About The Chef Mom
            </div>

            <h2 className="about-reveal delay-1" style={{ fontFamily: "'Playfair Display',serif", fontSize: 'clamp(26px,4.5vw,50px)', fontWeight: 800, color: '#1A0A00', lineHeight: 1.1, letterSpacing: -1, marginBottom: 18 }}>
              From a Delhi Kitchen<br />
              to <em style={{ color: '#FF6B2C', fontStyle: 'italic' }}>Dubai Homes</em>
            </h2>

            <p className="about-reveal delay-2" style={{ fontSize: 'clamp(13px,1.8vw,16px)', color: '#6B5344', lineHeight: 1.75, marginBottom: 14 }}>
              The Chef Mom was created with a simple mission — to bring the comforting taste of authentic Delhi-style home cooking to people living in Dubai.
            </p>

            <p className="about-reveal delay-3" style={{ fontSize: 'clamp(13px,1.8vw,16px)', color: '#6B5344', lineHeight: 1.75, marginBottom: 26 }}>
              For many people living away from home, the biggest thing they miss is{' '}
              <strong style={{ color: '#1A0A00', background: 'rgba(255,107,44,.1)', padding: '2px 8px', borderRadius: 6 }}>ghar ka khana</strong>
              {' '}— fresh, simple, and full of flavour. Every meal is prepared by home chefs using fresh ingredients, traditional spices, and recipes passed through generations.
            </p>

            <div className="about-reveal delay-4 about-highlight">
              <div
                className="about-hl-icon"
                style={{ background: '#fff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 14px rgba(0,0,0,.07)' }}
              >
                👩‍🍳
              </div>
              <div>
                <h4 style={{ fontWeight: 700, color: '#1A0A00', fontSize: 'clamp(14px,2vw,17px)', marginBottom: 6 }}>Our Goal is Simple:</h4>
                <p style={{ color: '#6B5344', lineHeight: 1.65, fontSize: 'clamp(12px,1.6vw,15px)' }}>
                  To make every meal feel like it was cooked in your mom's kitchen. Less oil, balanced spices, maximum love.
                </p>
              </div>
            </div>

            <div className="about-reveal delay-5 about-cta-row">
              <button
                className="about-btn-primary"
                onClick={() => document.getElementById('meal-plans')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Meal Plans
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <a href="tel:+971557998925" className="about-btn-secondary">
                📞 Call Us Now
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}