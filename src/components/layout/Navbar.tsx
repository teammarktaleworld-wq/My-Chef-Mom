// 'use client';

// import React, { useState, useEffect } from 'react';
// import { ShoppingBag, Search, Menu } from 'lucide-react';

// interface NavbarProps {
//   onOpenCart?: () => void;
//   cartItemCount?: number;
// }

// export default function Navbar({ onOpenCart, cartItemCount = 3 }: NavbarProps) {
//   const [isScrolled, setIsScrolled] = useState(false);

//   // Scroll listener for sticky navbar effect
//   useEffect(() => {
//     const handleScroll = () => {
//       setIsScrolled(window.scrollY > 20);
//     };
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <>
//       {/* Ensure the custom logo font is available */}
//       <style dangerouslySetInnerHTML={{ __html: `
//         @import url('https://fonts.googleapis.com/css2?family=Pacifico&display=swap');
//         .font-logo { font-family: 'Pacifico', cursive; }
//       `}} />

//       <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
//         isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
//       }`}>
//         <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

//           {/* Logo */}
//           <div className="flex items-center gap-3 cursor-pointer">
//             <div className="w-10 h-10 bg-rose-100 rounded-full flex items-center justify-center">
//               <span className="text-2xl">👩‍🍳</span>
//             </div>
//             <div className="flex flex-col">
//               <span className="font-logo text-2xl font-normal text-rose-500 leading-none tracking-wide">
//                 The Chef Mom
//               </span>
//             </div>
//           </div>

//           {/* Desktop Links */}
//           <div className="hidden lg:flex items-center gap-8 font-medium text-slate-600">
//             <a href="#about" className="hover:text-rose-500 transition-colors">About Us</a>
//             <a href="#meal-plans" className="text-slate-900 border-b-2 border-rose-500 pb-1">Meal Plans</a>
//             <a href="#how-it-works" className="hover:text-rose-500 transition-colors">How It Works</a>
//             <a href="#delivery" className="hover:text-rose-500 transition-colors">Delivery</a>
//             <button className="px-5 py-2.5 rounded-full bg-rose-500 text-white hover:bg-rose-600 transition-all shadow-md hover:shadow-lg shadow-rose-500/30 font-bold">
//               Order Now
//             </button>
//           </div>

//           {/* Actions */}
//           <div className="flex items-center gap-5">
//             <button className="text-slate-600 hover:text-rose-500 transition-colors hidden sm:block">
//               <Search size={20} />
//             </button>

//             <button 
//               className="relative text-slate-600 hover:text-rose-500 transition-colors"
//               onClick={onOpenCart}
//             >
//               <ShoppingBag size={22} />
//               {cartItemCount > 0 && (
//                 <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-rose-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center border border-white">
//                   {cartItemCount}
//                 </span>
//               )}
//             </button>

//             <button className="hidden sm:flex items-center gap-2 px-5 py-2.5 bg-slate-100 text-slate-700 font-bold rounded-full hover:bg-slate-200 transition-colors">
//               <span className="text-sm">Login</span>
//             </button>

//             {/* Mobile Menu Toggle */}
//             <button className="lg:hidden text-slate-800">
//               <Menu size={24} />
//             </button>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// }









// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { ShoppingBag, Menu, X, Phone, ChevronRight } from 'lucide-react';

// interface NavbarProps {
//   onOpenCart?: () => void;
//   cartItemCount?: number;
// }

// const NAV_LINKS = [
//   { label: 'About Us',     href: '#about' },
//   { label: 'Meal Plans',   href: '#meal-plans' },
//   { label: 'How It Works', href: '#how-it-works' },
//   { label: 'Delivery',     href: '#delivery' },
// ];

// const WHATSAPP = '+971557998925';

// export default function Navbar({ onOpenCart, cartItemCount = 3 }: NavbarProps) {
//   const [isScrolled, setIsScrolled]     = useState(false);
//   const [mobileOpen, setMobileOpen]     = useState(false);
//   const [activeLink, setActiveLink]     = useState('');
//   const indicatorRef                    = useRef<HTMLSpanElement>(null);
//   const linkRefs                        = useRef<Record<string, HTMLAnchorElement | null>>({});

//   /* ── Scroll detection ── */
//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 24);
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   /* ── Close mobile menu on resize ── */
//   useEffect(() => {
//     const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
//     window.addEventListener('resize', onResize);
//     return () => window.removeEventListener('resize', onResize);
//   }, []);

//   /* ── Sliding indicator ── */
//   useEffect(() => {
//     const el = linkRefs.current[activeLink];
//     const indicator = indicatorRef.current;
//     if (!el || !indicator) return;
//     const { offsetLeft, offsetWidth } = el;
//     indicator.style.left  = `${offsetLeft}px`;
//     indicator.style.width = `${offsetWidth}px`;
//   }, [activeLink]);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&family=DM+Sans:wght@400;500;600&display=swap');

//         :root {
//           --saffron: #FF6B2C;
//           --turmeric: #F5A623;
//           --cream: #FFF8F0;
//           --deep: #1A0A00;
//         }

//         /* ── Pill badge ── */
//         .nav-cart-badge {
//           position: absolute;
//           top: -6px; right: -6px;
//           width: 18px; height: 18px;
//           background: var(--saffron);
//           color: #fff;
//           font-size: 10px;
//           font-weight: 700;
//           border-radius: 50%;
//           display: flex; align-items: center; justify-content: center;
//           border: 2px solid #fff;
//           animation: navBadgePop .3s cubic-bezier(.34,1.56,.64,1);
//         }
//         @keyframes navBadgePop {
//           from { transform: scale(0); }
//           to   { transform: scale(1); }
//         }

//         /* ── Sliding nav indicator ── */
//         .nav-indicator {
//           position: absolute;
//           bottom: -2px;
//           height: 2px;
//           background: linear-gradient(90deg, var(--saffron), var(--turmeric));
//           border-radius: 2px;
//           transition: left .35s cubic-bezier(.4,0,.2,1), width .35s cubic-bezier(.4,0,.2,1);
//           pointer-events: none;
//         }

//         /* ── Mobile drawer ── */
//         .nav-mobile-drawer {
//           position: fixed;
//           top: 0; left: 0; right: 0; bottom: 0;
//           z-index: 60;
//           display: flex;
//         }
//         .nav-mobile-backdrop {
//           flex: 1;
//           background: rgba(26,10,0,.45);
//           backdrop-filter: blur(4px);
//           animation: navFadeIn .25s ease both;
//         }
//         @keyframes navFadeIn {
//           from { opacity: 0; }
//           to   { opacity: 1; }
//         }
//         .nav-mobile-panel {
//           width: min(320px, 85vw);
//           background: #fff;
//           display: flex;
//           flex-direction: column;
//           animation: navSlideIn .3s cubic-bezier(.16,1,.3,1) both;
//           box-shadow: -20px 0 60px rgba(26,10,0,.15);
//           overflow-y: auto;
//         }
//         @keyframes navSlideIn {
//           from { transform: translateX(100%); }
//           to   { transform: translateX(0); }
//         }

//         /* ── CTA button ── */
//         .nav-cta {
//           background: linear-gradient(135deg, var(--saffron), #E84A1A);
//           color: #fff;
//           border: none;
//           border-radius: 50px;
//           padding: 10px 22px;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 14px;
//           font-weight: 600;
//           cursor: pointer;
//           display: inline-flex;
//           align-items: center;
//           gap: 6px;
//           transition: all .3s cubic-bezier(.34,1.56,.64,1);
//           box-shadow: 0 6px 20px rgba(255,107,44,.35);
//           white-space: nowrap;
//         }
//         .nav-cta:hover {
//           transform: translateY(-2px) scale(1.03);
//           box-shadow: 0 10px 28px rgba(255,107,44,.5);
//         }
//         .nav-cta:active { transform: scale(.97); }

//         /* ── Icon button ── */
//         .nav-icon-btn {
//           position: relative;
//           width: 40px; height: 40px;
//           border-radius: 50%;
//           border: none;
//           background: transparent;
//           cursor: pointer;
//           display: flex; align-items: center; justify-content: center;
//           transition: background .2s;
//           color: var(--deep);
//         }
//         .nav-icon-btn:hover { background: rgba(255,107,44,.08); color: var(--saffron); }

//         /* ── Scrolled navbar ── */
//         .nav-bar {
//           position: fixed;
//           top: 0; left: 0; width: 100%;
//           z-index: 50;
//           transition: all .4s cubic-bezier(.4,0,.2,1);
//         }
//         .nav-bar.scrolled {
//           background: rgba(255,248,240,.92);
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);
//           box-shadow: 0 1px 0 rgba(255,107,44,.1), 0 8px 32px rgba(26,10,0,.06);
//         }

//         /* ── Top ribbon ── */
//         .nav-ribbon {
//           background: linear-gradient(90deg, var(--saffron), var(--turmeric), var(--saffron));
//           background-size: 200% 100%;
//           animation: navRibbonFlow 5s linear infinite;
//           color: #fff;
//           font-size: 11.5px;
//           font-weight: 600;
//           text-align: center;
//           padding: 7px 16px;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//         }
//         @keyframes navRibbonFlow {
//           0%   { background-position: 0% 50%; }
//           100% { background-position: 200% 50%; }
//         }

//         .nav-link {
//           font-family: 'DM Sans', sans-serif;
//           font-size: 14.5px;
//           font-weight: 500;
//           color: #5C3D2E;
//           text-decoration: none;
//           padding: 4px 0;
//           transition: color .2s;
//           position: relative;
//         }
//         .nav-link:hover, .nav-link.active { color: var(--saffron); }

//         .nav-logo-text {
//           font-family: 'Playfair Display', serif;
//           font-style: italic;
//           font-size: 22px;
//           font-weight: 700;
//           color: var(--saffron);
//           line-height: 1;
//           letter-spacing: -0.3px;
//         }
//         .nav-logo-sub {
//           font-family: 'DM Sans', sans-serif;
//           font-size: 10px;
//           font-weight: 600;
//           color: #9B7B6A;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           margin-top: 1px;
//         }
//       `}</style>

//       {/* ── Top info ribbon ── */}
//       <div className="nav-ribbon" style={{ position: 'fixed', top: 0, left: 0, width: '100%', zIndex: 51 }}>
//         <span>🚴 Free delivery on your first order · Call us: +971 55 799 8925</span>
//       </div>

//       {/* ── Main Navbar ── */}
//       <nav className={`nav-bar ${isScrolled ? 'scrolled' : ''}`} style={{ top: 32 }}>
//         <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: isScrolled ? 64 : 76, transition: 'height .4s' }}>

//           {/* ── Logo ── */}
//           <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
//             <div style={{ position: 'relative', width: isScrolled ? 48 : 58, height: isScrolled ? 48 : 58, transition: 'all .4s', flexShrink: 0 }}>
//               <Image
//                 src="/logo3.png"
//                 alt="The Chef Mom logo"
//                 fill
//                 style={{ objectFit: 'contain', objectPosition: 'center' }}
//                 priority
//               />
//             </div>
//             <div style={{ display: 'flex', flexDirection: 'column' }}>
//               <span className="nav-logo-text">The Chef Mom</span>
//               <span className="nav-logo-sub">Dubai · Homemade Indian Food</span>
//             </div>
//           </a>

//           {/* ── Desktop links ── */}
//           <div style={{ display: 'none', alignItems: 'center', gap: 32, position: 'relative' }} className="lg-flex">
//             <span ref={indicatorRef} className="nav-indicator" />
//             {NAV_LINKS.map(({ label, href }) => (
//               <a
//                 key={href}
//                 href={href}
//                 ref={(el) => { linkRefs.current[href] = el; }}
//                 className={`nav-link ${activeLink === href ? 'active' : ''}`}
//                 onClick={() => setActiveLink(href)}
//               >
//                 {label}
//               </a>
//             ))}
//           </div>

//           {/* ── Right actions ── */}
//           <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
//             {/* WhatsApp */}
//             <a
//               href={`tel:${WHATSAPP}`}
//               style={{ display: 'none', alignItems: 'center', gap: 7, padding: '8px 16px', borderRadius: 50, border: '1.5px solid rgba(255,107,44,.25)', background: 'rgba(255,107,44,.05)', textDecoration: 'none', transition: 'all .2s', flexShrink: 0, fontFamily: "'DM Sans',sans-serif", fontSize: 13, fontWeight: 600, color: '#5C3D2E' }}
//               className="sm-flex"
//             >
//               <span style={{ width: 24, height: 24, background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//                 <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
//                   <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//                 </svg>
//               </span>
//               +971 55 799 8925
//             </a>

//             {/* Cart */}
//             <button className="nav-icon-btn" onClick={onOpenCart} aria-label="Open cart">
//               <ShoppingBag size={20} />
//               {cartItemCount > 0 && (
//                 <span className="nav-cart-badge">{cartItemCount}</span>
//               )}
//             </button>

//             {/* Order Now CTA — desktop */}
//             <button className="nav-cta lg-flex" style={{ display: 'none' }} onClick={() => document.getElementById('meal-plans')?.scrollIntoView({ behavior: 'smooth' })}>
//               Order Now
//               <ChevronRight size={15} />
//             </button>

//             {/* Mobile hamburger */}
//             <button
//               className="nav-icon-btn lg-hidden"
//               onClick={() => setMobileOpen(true)}
//               aria-label="Open menu"
//               style={{ display: 'flex' }}
//             >
//               <Menu size={22} />
//             </button>
//           </div>
//         </div>

//         {/* ── Scrolled bottom border glow ── */}
//         {isScrolled && (
//           <div style={{ height: 1, background: 'linear-gradient(90deg,transparent,rgba(255,107,44,.3),transparent)' }} />
//         )}
//       </nav>

//       {/* ── Mobile Drawer ── */}
//       {mobileOpen && (
//         <div className="nav-mobile-drawer" style={{ flexDirection: 'row-reverse' }}>
//           <div className="nav-mobile-panel">
//             {/* Panel header */}
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid rgba(255,107,44,.1)' }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                 <div style={{ position: 'relative', width: 44, height: 44, flexShrink: 0 }}>
//                   <Image src="/logo3.png" alt="The Chef Mom" fill style={{ objectFit: 'contain' }} />
//                 </div>
//                 <span className="nav-logo-text" style={{ fontSize: 18 }}>The Chef Mom</span>
//               </div>
//               <button className="nav-icon-btn" onClick={() => setMobileOpen(false)} aria-label="Close menu">
//                 <X size={20} />
//               </button>
//             </div>

//             {/* Links */}
//             <div style={{ flex: 1, padding: '12px 0' }}>
//               {NAV_LINKS.map(({ label, href }, i) => (
//                 <a
//                   key={href}
//                   href={href}
//                   style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '14px 24px', fontFamily: "'DM Sans',sans-serif", fontSize: 15, fontWeight: 500, color: '#1A0A00', textDecoration: 'none', borderBottom: i < NAV_LINKS.length - 1 ? '1px solid rgba(26,10,0,.05)' : 'none', transition: 'background .2s', animationDelay: `${i * 0.05}s` }}
//                   onClick={() => setMobileOpen(false)}
//                   onMouseEnter={(e) => (e.currentTarget.style.background = 'rgba(255,107,44,.04)')}
//                   onMouseLeave={(e) => (e.currentTarget.style.background = 'transparent')}
//                 >
//                   {label}
//                   <ChevronRight size={16} style={{ color: 'rgba(255,107,44,.5)' }} />
//                 </a>
//               ))}
//             </div>

//             {/* Panel footer */}
//             <div style={{ padding: '20px 24px', borderTop: '1px solid rgba(255,107,44,.1)', display: 'flex', flexDirection: 'column', gap: 12 }}>
//               <button
//                 className="nav-cta"
//                 style={{ width: '100%', justifyContent: 'center', padding: '13px 24px', fontSize: 15 }}
//                 onClick={() => { setMobileOpen(false); document.getElementById('meal-plans')?.scrollIntoView({ behavior: 'smooth' }); }}
//               >
//                 Order Now
//                 <ChevronRight size={16} />
//               </button>
//               <a
//                 href={`tel:${WHATSAPP}`}
//                 style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px', borderRadius: 50, border: '1.5px solid rgba(255,107,44,.2)', textDecoration: 'none', fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 600, color: '#5C3D2E' }}
//               >
//                 <Phone size={15} style={{ color: 'var(--saffron)' }} />
//                 +971 55 799 8925
//               </a>
//             </div>
//           </div>

//           {/* Backdrop */}
//           <div className="nav-mobile-backdrop" onClick={() => setMobileOpen(false)} />
//         </div>
//       )}

//       {/* ── Responsive helpers ── */}
//       <style>{`
//         @media (min-width: 640px)  { .sm-flex  { display: flex !important; } }
//         @media (min-width: 1024px) { .lg-flex  { display: flex !important; } .lg-hidden { display: none !important; } }
//         /* push page content below ribbon + navbar */
//         body { padding-top: 108px; }
//       `}</style>
//     </>
//   );
// }

















'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';

import { ShoppingBag, Menu, X, Phone, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenCart?: () => void;
  cartItemCount?: number;
}

const NAV_LINKS = [
  { label: 'About Us', href: '#about' },
  { label: 'Meal Plans', href: '#meal-plans' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Delivery', href: '#delivery' },
];

const WHATSAPP = '+971557998925';

export default function Navbar({ onOpenCart, cartItemCount = 3 }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);

  useEffect(() => {
    const el = linkRefs.current[activeLink];
    const ind = indicatorRef.current;
    if (!el || !ind) return;
    ind.style.left = `${el.offsetLeft}px`;
    ind.style.width = `${el.offsetWidth}px`;
  }, [activeLink]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&family=DM+Sans:wght@400;500;600&display=swap');

        :root {
          --saffron:  #FF6B2C;
          --turmeric: #F5A623;
          --cream:    #FFF8F0;
          --deep:     #1A0A00;
        }

        /* Ribbon */
        .nav-ribbon {
          position: fixed; top: 0; left: 0; width: 100%; z-index: 51;
          background: linear-gradient(90deg, var(--saffron), var(--turmeric), var(--saffron));
          background-size: 200% 100%;
          animation: navRibbon 5s linear infinite;
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 11.5px; font-weight: 600;
          text-align: center; letter-spacing: 1.5px; text-transform: uppercase;
          height: 32px;
          display: flex; align-items: center; justify-content: center;
        }
        @keyframes navRibbon {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        /* Main bar — warm cream, NEVER dark */
        .nav-bar {
          position: fixed; top: 32px; left: 0; width: 100%; z-index: 50;
          background: #FFF8F0;
          border-bottom: 1.5px solid rgba(255, 107, 44, 0.15);
          transition: all .35s cubic-bezier(.4,0,.2,1);
        }
        .nav-bar.scrolled {
          background: rgba(255, 248, 240, 0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 4px 30px rgba(255,107,44,.1), 0 1px 0 rgba(255,107,44,.1);
        }

        /* Sliding underline indicator */
        .nav-indicator {
          position: absolute; bottom: -1px; height: 2.5px;
          background: linear-gradient(90deg, var(--saffron), var(--turmeric));
          border-radius: 2px;
          transition: left .35s cubic-bezier(.4,0,.2,1), width .35s cubic-bezier(.4,0,.2,1);
          pointer-events: none;
        }

        /* Nav links */
        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 14.5px; font-weight: 500;
          color: #5C3D2E; text-decoration: none; padding: 4px 0;
          transition: color .2s; position: relative;
        }
        .nav-link:hover, .nav-link.active { color: var(--saffron); }

        /* Logo */
        .nav-logo-text {
          font-family: 'Playfair Display', serif;
          font-style: italic; font-size: 22px; font-weight: 700;
          color: var(--saffron); line-height: 1; letter-spacing: -.3px;
        }
        .nav-logo-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 10px; font-weight: 600;
          color: #9B7B6A; letter-spacing: 2px; text-transform: uppercase;
          margin-top: 2px;
        }

        /* CTA */
        .nav-cta {
          background: linear-gradient(135deg, var(--saffron), #E84A1A);
          color: #fff; border: none; border-radius: 50px;
          padding: 10px 22px;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600;
          cursor: pointer;
          display: inline-flex; align-items: center; gap: 6px;
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
          box-shadow: 0 6px 20px rgba(255,107,44,.35);
          white-space: nowrap; text-decoration: none;
        }
        .nav-cta:hover { transform: translateY(-2px) scale(1.03); box-shadow: 0 10px 28px rgba(255,107,44,.5); }
        .nav-cta:active { transform: scale(.97); }

        /* WhatsApp pill */
        .nav-wa-pill {
          display: flex; align-items: center; gap: 7px;
          padding: 8px 16px; border-radius: 50px;
          border: 1.5px solid rgba(255,107,44,.25);
          background: rgba(255,107,44,.06);
          text-decoration: none;
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600;
          color: #5C3D2E; transition: all .2s; white-space: nowrap;
        }
        .nav-wa-pill:hover { background: rgba(255,107,44,.1); border-color: rgba(255,107,44,.4); }

        /* Icon button */
        .nav-icon-btn {
          position: relative; width: 40px; height: 40px;
          border-radius: 50%; border: none; background: transparent;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: background .2s; color: #5C3D2E;
        }
        .nav-icon-btn:hover { background: rgba(255,107,44,.08); color: var(--saffron); }

        /* Cart badge */
        .nav-cart-badge {
          position: absolute; top: -5px; right: -5px;
          width: 18px; height: 18px;
          background: var(--saffron); color: #fff;
          font-size: 10px; font-weight: 700; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 2px solid #FFF8F0;
          animation: navBadgePop .3s cubic-bezier(.34,1.56,.64,1);
        }
        @keyframes navBadgePop { from { transform: scale(0); } to { transform: scale(1); } }

        /* Mobile drawer */
        .nav-drawer {
          position: fixed; inset: 0; z-index: 60;
          display: flex; flex-direction: row-reverse;
        }
        .nav-drawer-backdrop {
          flex: 1; background: rgba(26,10,0,.4);
          backdrop-filter: blur(4px);
          animation: navFadeIn .25s ease both;
        }
        @keyframes navFadeIn { from { opacity: 0; } to { opacity: 1; } }
        .nav-drawer-panel {
          width: min(320px, 85vw); background: #FFF8F0;
          display: flex; flex-direction: column;
          animation: navSlideIn .3s cubic-bezier(.16,1,.3,1) both;
          box-shadow: -20px 0 60px rgba(26,10,0,.15); overflow-y: auto;
        }
        @keyframes navSlideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }

        /* Responsive */
        .nav-sm-show { display: none !important; }
        .nav-lg-show { display: none !important; }
        .nav-lg-hide { display: flex !important; }
        @media (min-width: 640px)  { .nav-sm-show { display: flex !important; } }
        @media (min-width: 1024px) {
          .nav-lg-show { display: flex !important; }
          .nav-lg-hide { display: none !important; }
        }
      `}</style>

      {/* Ribbon */}
      <div className="nav-ribbon">
        🚴&nbsp; Free delivery on your first order &nbsp;·&nbsp; Call us: +971 55 799 8925
      </div>

      {/* Navbar */}
      <nav className={`nav-bar${isScrolled ? ' scrolled' : ''}`}>
        <div style={{
          maxWidth: 1280, margin: '0 auto', padding: '0 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: isScrolled ? 64 : 76, transition: 'height .4s'
        }}>

          {/* Logo */}
          {/* <a href="public/images/logo2.png" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ position: 'relative', width: isScrolled ? 50 : 60, height: isScrolled ? 50 : 60, flexShrink: 0, transition: 'all .4s' }}>
              <Image src="/logo3.png" alt="The Chef Mom" fill style={{ objectFit: 'contain' }} priority />
            </div>
            <div>
              <div className="nav-logo-text">The Chef Mom</div>
              <div className="nav-logo-sub">Dubai · Homemade Indian Food</div>
            </div>
          </a> */}

          {/* Logo */}
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                position: "relative",
                width: isScrolled ? 50 : 60,
                height: isScrolled ? 50 : 60,
                flexShrink: 0,
                transition: "all .4s",
              }}
            >
              <Image
  src="/images/logo2.png"
  alt="The Chef Mom"
  width={60}
  height={60}
  priority
/>
            </div>

            <div>
              <div className="nav-logo-text">
                The Chef Mom
              </div>

              <div className="nav-logo-sub">
                Dubai · Homemade Indian Food
              </div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="nav-lg-show" style={{ alignItems: 'center', gap: 32, position: 'relative' }}>
            <span ref={indicatorRef} className="nav-indicator" />
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={href}
                href={href}
                ref={(el) => { linkRefs.current[href] = el; }}
                className={`nav-link${activeLink === href ? ' active' : ''}`}
                onClick={() => setActiveLink(href)}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Right actions */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
            <a href={`tel:${WHATSAPP}`} className="nav-wa-pill nav-sm-show">
              <span style={{ width: 24, height: 24, background: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
              </span>
              +971 55 799 8925
            </a>

            <button className="nav-icon-btn" onClick={onOpenCart} aria-label="Open cart">
              <ShoppingBag size={20} />
              {cartItemCount > 0 && <span className="nav-cart-badge">{cartItemCount}</span>}
            </button>

            <button
              className="nav-cta nav-lg-show"
              onClick={() => document.getElementById('meal-plans')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Order Now <ChevronRight size={15} />
            </button>

            <button className="nav-icon-btn nav-lg-hide" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="nav-drawer">
          <div className="nav-drawer-panel">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 24px', borderBottom: '1px solid rgba(255,107,44,.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ position: 'relative', width: 44, height: 44, flexShrink: 0 }}>
                  <Image src="/logo3.png" alt="The Chef Mom" fill style={{ objectFit: 'contain' }} />
                </div>
                <span className="nav-logo-text" style={{ fontSize: 18 }}>The Chef Mom</span>
              </div>
              <button className="nav-icon-btn" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={20} />
              </button>
            </div>

            <div style={{ flex: 1, padding: '8px 0' }}>
              {NAV_LINKS.map(({ label, href }, i) => (
                <a
                  key={href}
                  href={href}
                  style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '15px 24px', fontFamily: "'DM Sans',sans-serif", fontSize: 15, fontWeight: 500, color: '#1A0A00', textDecoration: 'none', borderBottom: i < NAV_LINKS.length - 1 ? '1px solid rgba(26,10,0,.05)' : 'none', transition: 'background .2s' }}
                  onClick={() => setMobileOpen(false)}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,107,44,.04)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                >
                  {label}
                  <ChevronRight size={16} style={{ color: 'rgba(255,107,44,.5)' }} />
                </a>
              ))}
            </div>

            <div style={{ padding: '20px 24px', borderTop: '1px solid rgba(255,107,44,.1)', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <button
                className="nav-cta"
                style={{ width: '100%', justifyContent: 'center', padding: '13px 24px', fontSize: 15 }}
                onClick={() => { setMobileOpen(false); document.getElementById('meal-plans')?.scrollIntoView({ behavior: 'smooth' }); }}
              >
                Order Now <ChevronRight size={16} />
              </button>
              <a
                href={`tel:${WHATSAPP}`}
                style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px', borderRadius: 50, border: '1.5px solid rgba(255,107,44,.2)', textDecoration: 'none', fontFamily: "'DM Sans',sans-serif", fontSize: 14, fontWeight: 600, color: '#5C3D2E' }}
              >
                <Phone size={15} style={{ color: '#FF6B2C' }} />
                +971 55 799 8925
              </a>
            </div>
          </div>
          <div className="nav-drawer-backdrop" onClick={() => setMobileOpen(false)} />
        </div>
      )}
    </>
  );
}