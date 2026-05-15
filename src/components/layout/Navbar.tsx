

















// 'use client';

// import React, { useState, useEffect, useRef } from 'react';
// import Image from 'next/image';
// import { ShoppingBag, Menu, X, ChevronRight } from 'lucide-react';

// interface NavbarProps {
//   onOpenCart?: () => void;
//   cartItemCount?: number;
// }

// const NAV_LINKS = [
//   { label: 'About Us',    href: '#about' },
//   { label: 'Meal Plans',  href: '#meal-plans' },
//   { label: 'How It Works',href: '#how-it-works' },
//   { label: 'Delivery',    href: '#delivery' },
// ];

// const WHATSAPP_NUMBER = '971557998925'; // no + for wa.me

// /* ── Pre-filled WhatsApp messages ── */
// const WA_GENERAL_MSG = encodeURIComponent(
//   `👋 Hello The Chef Mom!\n\nI'm interested in your homemade Indian meal subscription in Dubai.\n\nCould you please share:\n• Available meal plans & pricing\n• Delivery areas you cover\n• How to get started\n\nThank you! 🙏`
// );
// const WA_ORDER_MSG = encodeURIComponent(
//   `👋 Hello The Chef Mom!\n\nI'd like to place an order / subscribe to a meal plan.\n\nPlease share the available plans and next steps.\n\nThank you! 🙏`
// );

// const WA_GENERAL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_GENERAL_MSG}`;
// const WA_ORDER   = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_ORDER_MSG}`;

// /* ── WhatsApp SVG icon ── */
// function WaIcon({ size = 12, color = 'white' }: { size?: number; color?: string }) {
//   return (
//     <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
//       <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
//     </svg>
//   );
// }

// export default function Navbar({ onOpenCart, cartItemCount = 3 }: NavbarProps) {
//   const [isScrolled,  setIsScrolled]  = useState(false);
//   const [mobileOpen,  setMobileOpen]  = useState(false);
//   const [activeLink,  setActiveLink]  = useState('');
//   const indicatorRef = useRef<HTMLSpanElement>(null);
//   const linkRefs     = useRef<Record<string, HTMLAnchorElement | null>>({});

//   useEffect(() => {
//     const onScroll = () => setIsScrolled(window.scrollY > 24);
//     window.addEventListener('scroll', onScroll, { passive: true });
//     return () => window.removeEventListener('scroll', onScroll);
//   }, []);

//   useEffect(() => {
//     const onResize = () => { if (window.innerWidth >= 1024) setMobileOpen(false); };
//     window.addEventListener('resize', onResize);
//     return () => window.removeEventListener('resize', onResize);
//   }, []);

//   useEffect(() => {
//     const el  = linkRefs.current[activeLink];
//     const ind = indicatorRef.current;
//     if (!el || !ind) return;
//     ind.style.left  = `${el.offsetLeft}px`;
//     ind.style.width = `${el.offsetWidth}px`;
//   }, [activeLink]);

//   useEffect(() => {
//     document.body.style.overflow = mobileOpen ? 'hidden' : '';
//     return () => { document.body.style.overflow = ''; };
//   }, [mobileOpen]);

//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&family=DM+Sans:wght@400;500;600&display=swap');

//         :root {
//           --saffron:  #FF6B2C;
//           --turmeric: #F5A623;
//           --cream:    #FFF8F0;
//           --deep:     #1A0A00;
//         }

//         /* ── Ribbon ── */
//         .nav-ribbon {
//           position: fixed; top: 0; left: 0; width: 100%; z-index: 51;
//           background: linear-gradient(90deg, var(--saffron), var(--turmeric), var(--saffron));
//           background-size: 200% 100%;
//           animation: navRibbon 5s linear infinite;
//           color: #fff;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 11.5px; font-weight: 600;
//           text-align: center; letter-spacing: 1.5px; text-transform: uppercase;
//           height: 32px;
//           display: flex; align-items: center; justify-content: center;
//           padding: 0 12px;
//           white-space: nowrap; overflow: hidden;
//         }
//         @keyframes navRibbon {
//           0%   { background-position: 0% 50%; }
//           100% { background-position: 200% 50%; }
//         }

//         /* ── Main bar ── */
//         .nav-bar {
//           position: fixed; top: 32px; left: 0; width: 100%; z-index: 50;
//           background: #FFF8F0;
//           border-bottom: 1.5px solid rgba(255,107,44,0.15);
//           transition: all .35s cubic-bezier(.4,0,.2,1);
//         }
//         .nav-bar.scrolled {
//           background: rgba(255,248,240,0.97);
//           backdrop-filter: blur(20px);
//           -webkit-backdrop-filter: blur(20px);
//           box-shadow: 0 4px 30px rgba(255,107,44,.1), 0 1px 0 rgba(255,107,44,.1);
//         }

//         /* ── Inner ── */
//         .nav-inner {
//           max-width: 1280px; margin: 0 auto;
//           padding: 0 20px;
//           display: flex; align-items: center; justify-content: space-between;
//           transition: height .4s;
//         }

//         /* ── Sliding underline ── */
//         .nav-indicator {
//           position: absolute; bottom: -1px; height: 2.5px;
//           background: linear-gradient(90deg, var(--saffron), var(--turmeric));
//           border-radius: 2px;
//           transition: left .35s cubic-bezier(.4,0,.2,1), width .35s cubic-bezier(.4,0,.2,1);
//           pointer-events: none;
//         }

//         /* ── Nav links ── */
//         .nav-link {
//           font-family: 'DM Sans', sans-serif;
//           font-size: 14.5px; font-weight: 500;
//           color: #5C3D2E; text-decoration: none; padding: 4px 0;
//           transition: color .2s; position: relative; white-space: nowrap;
//         }
//         .nav-link:hover, .nav-link.active { color: var(--saffron); }

//         /* ── Logo ── */
//         .nav-logo-text {
//           font-family: 'Playfair Display', serif;
//           font-style: italic; font-size: 20px; font-weight: 700;
//           color: var(--saffron); line-height: 1; letter-spacing: -.3px;
//         }
//         .nav-logo-sub {
//           font-family: 'DM Sans', sans-serif;
//           font-size: 9px; font-weight: 600;
//           color: #9B7B6A; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 2px;
//         }

//         /* ── Order Now CTA ── */
//         .nav-cta {
//           background: linear-gradient(135deg, var(--saffron), #E84A1A);
//           color: #fff; border: none; border-radius: 50px;
//           padding: 10px 20px;
//           font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600;
//           cursor: pointer;
//           display: inline-flex; align-items: center; gap: 6px;
//           transition: all .3s cubic-bezier(.34,1.56,.64,1);
//           box-shadow: 0 6px 20px rgba(255,107,44,.35);
//           white-space: nowrap; text-decoration: none;
//           min-height: 44px;
//           -webkit-tap-highlight-color: transparent;
//           touch-action: manipulation;
//         }
//         .nav-cta:hover  { transform: translateY(-2px) scale(1.03); box-shadow: 0 10px 28px rgba(255,107,44,.5); }
//         .nav-cta:active { transform: scale(.97); }

//         /* ── WhatsApp pill (desktop) ── */
//         .nav-wa-pill {
//           display: flex; align-items: center; gap: 7px;
//           padding: 8px 14px; border-radius: 50px;
//           border: 1.5px solid rgba(37,211,102,.3);
//           background: rgba(37,211,102,.07);
//           text-decoration: none;
//           font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600;
//           color: #1A4D2E;
//           transition: all .2s; white-space: nowrap;
//           min-height: 40px;
//           -webkit-tap-highlight-color: transparent;
//           touch-action: manipulation;
//         }
//         .nav-wa-pill:hover {
//           background: rgba(37,211,102,.14);
//           border-color: rgba(37,211,102,.5);
//           box-shadow: 0 4px 16px rgba(37,211,102,.18);
//           transform: translateY(-1px);
//         }
//         .nav-wa-pill:active { transform: scale(.97); }

//         /* Pulsing WA circle */
//         .nav-wa-circle {
//           width: 22px; height: 22px; background: #25D366;
//           border-radius: 50%;
//           display: flex; align-items: center; justify-content: center;
//           flex-shrink: 0;
//           animation: navWaPulse 2.5s ease-in-out infinite;
//         }
//         @keyframes navWaPulse {
//           0%,100% { box-shadow: 0 0 0 0 rgba(37,211,102,.4); }
//           50%      { box-shadow: 0 0 0 5px rgba(37,211,102,.0); }
//         }

//         /* ── Icon button ── */
//         .nav-icon-btn {
//           position: relative; width: 40px; height: 40px;
//           border-radius: 50%; border: none; background: transparent;
//           cursor: pointer; display: flex; align-items: center; justify-content: center;
//           transition: background .2s; color: #5C3D2E; flex-shrink: 0;
//           -webkit-tap-highlight-color: transparent;
//         }
//         .nav-icon-btn:hover { background: rgba(255,107,44,.08); color: var(--saffron); }

//         /* ── Cart badge ── */
//         .nav-cart-badge {
//           position: absolute; top: -4px; right: -4px;
//           width: 18px; height: 18px;
//           background: var(--saffron); color: #fff;
//           font-size: 10px; font-weight: 700; border-radius: 50%;
//           display: flex; align-items: center; justify-content: center;
//           border: 2px solid #FFF8F0;
//           animation: navBadgePop .3s cubic-bezier(.34,1.56,.64,1);
//         }
//         @keyframes navBadgePop { from { transform: scale(0); } to { transform: scale(1); } }

//         /* ── Mobile drawer ── */
//         .nav-drawer {
//           position: fixed; inset: 0; z-index: 60;
//           display: flex; flex-direction: row-reverse;
//         }
//         .nav-drawer-backdrop {
//           flex: 1; background: rgba(26,10,0,.45);
//           backdrop-filter: blur(4px);
//           animation: navFadeIn .25s ease both;
//         }
//         @keyframes navFadeIn { from { opacity: 0; } to { opacity: 1; } }
//         .nav-drawer-panel {
//           width: min(300px, 82vw); background: #FFF8F0;
//           display: flex; flex-direction: column;
//           animation: navSlideIn .3s cubic-bezier(.16,1,.3,1) both;
//           box-shadow: -20px 0 60px rgba(26,10,0,.15); overflow-y: auto;
//         }
//         @keyframes navSlideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }

//         /* ── Visibility helpers ── */
//         .nav-desktop-links { display: none; }
//         .nav-wa-desktop    { display: none; }
//         .nav-hamburger     { display: flex; }

//         @media (min-width: 768px) { .nav-wa-desktop { display: flex; } }
//         @media (min-width: 1024px) {
//           .nav-desktop-links { display: flex; }
//           .nav-hamburger     { display: none; }
//         }

//         /* ── Ribbon: shorter on small screens ── */
//         .nav-ribbon-full  { display: none; }
//         .nav-ribbon-short { display: block; }
//         @media (min-width: 540px) {
//           .nav-ribbon-full  { display: block; }
//           .nav-ribbon-short { display: none; }
//         }

//         /* ── Mobile WA button in drawer ── */
//         .nav-drawer-wa {
//           display: flex; align-items: center; justify-content: center; gap: 10px;
//           padding: 13px; border-radius: 50px;
//           background: #25D366; color: #fff;
//           font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 700;
//           text-decoration: none;
//           transition: all .2s;
//           box-shadow: 0 4px 16px rgba(37,211,102,.35);
//           min-height: 48px;
//           -webkit-tap-highlight-color: transparent;
//         }
//         .nav-drawer-wa:hover  { background: #1ea95a; transform: translateY(-1px); }
//         .nav-drawer-wa:active { transform: scale(.97); }
//       `}</style>

//       {/* ── Ribbon — clicking opens WhatsApp ── */}
//       <a href={WA_GENERAL} target="_blank" rel="noreferrer" className="nav-ribbon" style={{ textDecoration: 'none' }}>
//         <span className="nav-ribbon-short">💬 Chat on WhatsApp — Free delivery on 1st order</span>
//         <span className="nav-ribbon-full">💬 Chat on WhatsApp &nbsp;·&nbsp; Free delivery on your first order &nbsp;·&nbsp; +971 55 799 8925</span>
//       </a>

//       {/* ── Navbar ── */}
//       <nav className={`nav-bar${isScrolled ? ' scrolled' : ''}`}>
//         <div className="nav-inner" style={{ height: isScrolled ? 60 : 72 }}>

//           {/* Logo */}
//           <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
//             <div style={{ position: 'relative', width: isScrolled ? 42 : 52, height: isScrolled ? 42 : 52, flexShrink: 0, transition: 'all .4s' }}>
//               <Image src="/images/logo2.png" alt="The Chef Mom" width={52} height={52} priority style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
//             </div>
//             <div>
//               <div className="nav-logo-text">The Chef Mom</div>
//               <div className="nav-logo-sub">Dubai · Homemade Indian Food</div>
//             </div>
//           </a>

//           {/* Desktop links */}
//           <div className="nav-desktop-links" style={{ alignItems: 'center', gap: 28, position: 'relative' }}>
//             <span ref={indicatorRef} className="nav-indicator" />
//             {NAV_LINKS.map(({ label, href }) => (
//               <a
//                 key={href}
//                 href={href}
//                 ref={(el) => { linkRefs.current[href] = el; }}
//                 className={`nav-link${activeLink === href ? ' active' : ''}`}
//                 onClick={() => setActiveLink(href)}
//               >
//                 {label}
//               </a>
//             ))}
//           </div>

//           {/* Right actions */}
//           <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>

//             {/* WhatsApp pill — md+ — opens WhatsApp with pre-filled message */}
//             <a href={WA_GENERAL} target="_blank" rel="noreferrer" className="nav-wa-pill nav-wa-desktop">
//               <span className="nav-wa-circle"><WaIcon size={12} color="white" /></span>
//               Chat on WhatsApp
//             </a>

//             {/* Cart icon */}
//             <button className="nav-icon-btn" onClick={onOpenCart} aria-label="Open cart">
//               <ShoppingBag size={20} />
//               {cartItemCount > 0 && <span className="nav-cart-badge">{cartItemCount}</span>}
//             </button>

//             {/* Order Now — desktop only, opens WhatsApp order message */}
//             <a
//               href={WA_ORDER}
//               target="_blank"
//               rel="noreferrer"
//               className="nav-cta"
//               id="nav-order-btn"
//               style={{ display: 'none' }}
//             >
//               Order Now <ChevronRight size={15} />
//             </a>

//             {/* Hamburger — mobile/tablet */}
//             <button className="nav-icon-btn nav-hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
//               <Menu size={22} />
//             </button>
//           </div>
//         </div>
//       </nav>

//       {/* Show Order Now on desktop */}
//       <style>{`@media(min-width:1024px){#nav-order-btn{display:inline-flex!important;}}`}</style>

//       {/* ── Mobile Drawer ── */}
//       {mobileOpen && (
//         <div className="nav-drawer">
//           <div className="nav-drawer-panel">

//             {/* Header */}
//             <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid rgba(255,107,44,.1)' }}>
//               <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
//                 <Image src="/images/logo2.png" alt="The Chef Mom" width={40} height={40} style={{ objectFit: 'contain' }} />
//                 <span className="nav-logo-text" style={{ fontSize: 17 }}>The Chef Mom</span>
//               </div>
//               <button className="nav-icon-btn" onClick={() => setMobileOpen(false)} aria-label="Close menu">
//                 <X size={20} />
//               </button>
//             </div>

//             {/* Links */}
//             <div style={{ flex: 1, padding: '4px 0' }}>
//               {NAV_LINKS.map(({ label, href }, i) => (
//                 <a
//                   key={href}
//                   href={href}
//                   style={{
//                     display: 'flex', alignItems: 'center', justifyContent: 'space-between',
//                     padding: '16px 20px',
//                     fontFamily: "'DM Sans',sans-serif", fontSize: 15, fontWeight: 500,
//                     color: '#1A0A00', textDecoration: 'none',
//                     borderBottom: i < NAV_LINKS.length - 1 ? '1px solid rgba(26,10,0,.05)' : 'none',
//                     transition: 'background .2s',
//                   }}
//                   onClick={() => setMobileOpen(false)}
//                   onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,107,44,.04)'; }}
//                   onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
//                 >
//                   {label}
//                   <ChevronRight size={16} style={{ color: 'rgba(255,107,44,.5)' }} />
//                 </a>
//               ))}
//             </div>

//             {/* Footer CTAs */}
//             <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,107,44,.1)', display: 'flex', flexDirection: 'column', gap: 10 }}>
//               {/* Order Now — scrolls to plans */}
//               <button
//                 className="nav-cta"
//                 style={{ width: '100%', justifyContent: 'center', padding: '13px 24px', fontSize: 15 }}
//                 onClick={() => {
//                   setMobileOpen(false);
//                   document.getElementById('meal-plans')?.scrollIntoView({ behavior: 'smooth' });
//                 }}
//               >
//                 View Meal Plans <ChevronRight size={16} />
//               </button>

//               {/* WhatsApp — opens with pre-filled message */}
//               <a
//                 href={WA_GENERAL}
//                 target="_blank"
//                 rel="noreferrer"
//                 className="nav-drawer-wa"
//                 onClick={() => setMobileOpen(false)}
//               >
//                 <span style={{ width: 24, height: 24, background: 'rgba(255,255,255,0.25)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
//                   <WaIcon size={13} color="white" />
//                 </span>
//                 Chat on WhatsApp
//               </a>

//               {/* Phone number display */}
//               <div style={{ textAlign: 'center', fontSize: 12, color: '#9B7B6A', fontFamily: "'DM Sans',sans-serif" }}>
//                 +971 55 799 8925
//               </div>
//             </div>
//           </div>
//           <div className="nav-drawer-backdrop" onClick={() => setMobileOpen(false)} />
//         </div>
//       )}
//     </>
//   );
// }















'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { ShoppingBag, Menu, X, ChevronRight } from 'lucide-react';

interface NavbarProps {
  onOpenCart?: () => void;
  cartItemCount?: number;
}

const NAV_LINKS = [
  { label: 'About Us',    href: '#about' },
  { label: 'Meal Plans',  href: '#meal-plans' },
  { label: 'How It Works',href: '#how-it-works' },
  { label: 'Delivery',    href: '#delivery' },
];

const WHATSAPP_NUMBER = '971557998925';

const WA_GENERAL_MSG = encodeURIComponent(
  `👋 Hello The Chef Mom!\n\nI'm interested in your homemade Indian meal subscription in Dubai.\n\nCould you please share:\n• Available meal plans & pricing\n• Delivery areas you cover\n• How to get started\n\nThank you! 🙏`
);
const WA_ORDER_MSG = encodeURIComponent(
  `👋 Hello The Chef Mom!\n\nI'd like to place an order / subscribe to a meal plan.\n\nPlease share the available plans and next steps.\n\nThank you! 🙏`
);

const WA_GENERAL = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_GENERAL_MSG}`;
const WA_ORDER   = `https://wa.me/${WHATSAPP_NUMBER}?text=${WA_ORDER_MSG}`;

function WaIcon({ size = 12, color = 'white' }: { size?: number; color?: string }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}

export default function Navbar({ onOpenCart, cartItemCount = 3 }: NavbarProps) {
  const [isScrolled,  setIsScrolled]  = useState(false);
  const [mobileOpen,  setMobileOpen]  = useState(false);
  const [activeLink,  setActiveLink]  = useState('');
  const indicatorRef = useRef<HTMLSpanElement>(null);
  const linkRefs     = useRef<Record<string, HTMLAnchorElement | null>>({});

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
    const el  = linkRefs.current[activeLink];
    const ind = indicatorRef.current;
    if (!el || !ind) return;
    ind.style.left  = `${el.offsetLeft}px`;
    ind.style.width = `${el.offsetWidth}px`;
  }, [activeLink]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700&family=DM+Sans:wght@400;500;600&display=swap');

        :root {
          --saffron:    #FF6B2C;
          --turmeric:   #F5A623;
          --cream:      #FFF8F0;
          --deep:       #1A0A00;
          --brand-red:  #C0392B;   /* ← matches the logo red */
        }

        /* ── Ribbon ── */
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
          padding: 0 12px;
          white-space: nowrap; overflow: hidden;
        }
        @keyframes navRibbon {
          0%   { background-position: 0% 50%; }
          100% { background-position: 200% 50%; }
        }

        /* ── Main bar ── */
        .nav-bar {
          position: fixed; top: 32px; left: 0; width: 100%; z-index: 50;
          background: #FFF8F0;
          border-bottom: 1.5px solid rgba(255,107,44,0.15);
          transition: all .35s cubic-bezier(.4,0,.2,1);
        }
        .nav-bar.scrolled {
          background: rgba(255,248,240,0.97);
          backdrop-filter: blur(20px);
          -webkit-backdrop-filter: blur(20px);
          box-shadow: 0 4px 30px rgba(255,107,44,.1), 0 1px 0 rgba(255,107,44,.1);
        }

        /* ── Inner ── */
        .nav-inner {
          max-width: 1280px; margin: 0 auto;
          padding: 0 20px;
          display: flex; align-items: center; justify-content: space-between;
          transition: height .4s;
        }

        /* ── Sliding underline ── */
        .nav-indicator {
          position: absolute; bottom: -1px; height: 2.5px;
          background: linear-gradient(90deg, var(--saffron), var(--turmeric));
          border-radius: 2px;
          transition: left .35s cubic-bezier(.4,0,.2,1), width .35s cubic-bezier(.4,0,.2,1);
          pointer-events: none;
        }

        /* ── Nav links ── */
        .nav-link {
          font-family: 'DM Sans', sans-serif;
          font-size: 14.5px; font-weight: 500;
          color: #5C3D2E; text-decoration: none; padding: 4px 0;
          transition: color .2s; position: relative; white-space: nowrap;
        }
        .nav-link:hover, .nav-link.active { color: var(--saffron); }

        /* ── Logo ── */
        .nav-logo-text {
          font-family: 'Playfair Display', serif;
          font-style: italic; font-size: 20px; font-weight: 700;
          color: var(--brand-red);   /* ✅ logo red instead of orange */
          line-height: 1; letter-spacing: -.3px;
        }
        .nav-logo-sub {
          font-family: 'DM Sans', sans-serif;
          font-size: 9px; font-weight: 600;
          color: #9B7B6A; letter-spacing: 1.5px; text-transform: uppercase; margin-top: 2px;
        }

        /* ── Order Now CTA ── */
        .nav-cta {
          background: linear-gradient(135deg, var(--saffron), #E84A1A);
          color: #fff; border: none; border-radius: 50px;
          padding: 10px 20px;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 600;
          cursor: pointer;
          display: inline-flex; align-items: center; gap: 6px;
          transition: all .3s cubic-bezier(.34,1.56,.64,1);
          box-shadow: 0 6px 20px rgba(255,107,44,.35);
          white-space: nowrap; text-decoration: none;
          min-height: 44px;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        .nav-cta:hover  { transform: translateY(-2px) scale(1.03); box-shadow: 0 10px 28px rgba(255,107,44,.5); }
        .nav-cta:active { transform: scale(.97); }

        /* ── WhatsApp pill (desktop) ── */
        .nav-wa-pill {
          display: flex; align-items: center; gap: 7px;
          padding: 8px 14px; border-radius: 50px;
          border: 1.5px solid rgba(37,211,102,.3);
          background: rgba(37,211,102,.07);
          text-decoration: none;
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 600;
          color: #1A4D2E;
          transition: all .2s; white-space: nowrap;
          min-height: 40px;
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation;
        }
        .nav-wa-pill:hover {
          background: rgba(37,211,102,.14);
          border-color: rgba(37,211,102,.5);
          box-shadow: 0 4px 16px rgba(37,211,102,.18);
          transform: translateY(-1px);
        }
        .nav-wa-pill:active { transform: scale(.97); }

        .nav-wa-circle {
          width: 22px; height: 22px; background: #25D366;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
          animation: navWaPulse 2.5s ease-in-out infinite;
        }
        @keyframes navWaPulse {
          0%,100% { box-shadow: 0 0 0 0 rgba(37,211,102,.4); }
          50%      { box-shadow: 0 0 0 5px rgba(37,211,102,.0); }
        }

        /* ── Icon button ── */
        .nav-icon-btn {
          position: relative; width: 40px; height: 40px;
          border-radius: 50%; border: none; background: transparent;
          cursor: pointer; display: flex; align-items: center; justify-content: center;
          transition: background .2s; color: #5C3D2E; flex-shrink: 0;
          -webkit-tap-highlight-color: transparent;
        }
        .nav-icon-btn:hover { background: rgba(255,107,44,.08); color: var(--saffron); }

        /* ── Cart badge ── */
        .nav-cart-badge {
          position: absolute; top: -4px; right: -4px;
          width: 18px; height: 18px;
          background: var(--saffron); color: #fff;
          font-size: 10px; font-weight: 700; border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          border: 2px solid #FFF8F0;
          animation: navBadgePop .3s cubic-bezier(.34,1.56,.64,1);
        }
        @keyframes navBadgePop { from { transform: scale(0); } to { transform: scale(1); } }

        /* ── Mobile drawer ── */
        .nav-drawer {
          position: fixed; inset: 0; z-index: 60;
          display: flex; flex-direction: row-reverse;
        }
        .nav-drawer-backdrop {
          flex: 1; background: rgba(26,10,0,.45);
          backdrop-filter: blur(4px);
          animation: navFadeIn .25s ease both;
        }
        @keyframes navFadeIn { from { opacity: 0; } to { opacity: 1; } }
        .nav-drawer-panel {
          width: min(300px, 82vw); background: #FFF8F0;
          display: flex; flex-direction: column;
          animation: navSlideIn .3s cubic-bezier(.16,1,.3,1) both;
          box-shadow: -20px 0 60px rgba(26,10,0,.15); overflow-y: auto;
        }
        @keyframes navSlideIn { from { transform: translateX(100%); } to { transform: translateX(0); } }

        .nav-desktop-links { display: none; }
        .nav-wa-desktop    { display: none; }
        .nav-hamburger     { display: flex; }

        @media (min-width: 768px) { .nav-wa-desktop { display: flex; } }
        @media (min-width: 1024px) {
          .nav-desktop-links { display: flex; }
          .nav-hamburger     { display: none; }
        }

        .nav-ribbon-full  { display: none; }
        .nav-ribbon-short { display: block; }
        @media (min-width: 540px) {
          .nav-ribbon-full  { display: block; }
          .nav-ribbon-short { display: none; }
        }

        .nav-drawer-wa {
          display: flex; align-items: center; justify-content: center; gap: 10px;
          padding: 13px; border-radius: 50px;
          background: #25D366; color: #fff;
          font-family: 'DM Sans', sans-serif; font-size: 14px; font-weight: 700;
          text-decoration: none;
          transition: all .2s;
          box-shadow: 0 4px 16px rgba(37,211,102,.35);
          min-height: 48px;
          -webkit-tap-highlight-color: transparent;
        }
        .nav-drawer-wa:hover  { background: #1ea95a; transform: translateY(-1px); }
        .nav-drawer-wa:active { transform: scale(.97); }
      `}</style>

      {/* ── Ribbon ── */}
      <a href={WA_GENERAL} target="_blank" rel="noreferrer" className="nav-ribbon" style={{ textDecoration: 'none' }}>
        <span className="nav-ribbon-short">💬 Chat on WhatsApp — Free delivery on 1st order</span>
        <span className="nav-ribbon-full">💬 Chat on WhatsApp &nbsp;·&nbsp; Free delivery on your first order &nbsp;·&nbsp; +971 55 799 8925</span>
      </a>

      {/* ── Navbar ── */}
      <nav className={`nav-bar${isScrolled ? ' scrolled' : ''}`}>
        <div className="nav-inner" style={{ height: isScrolled ? 60 : 72 }}>

          {/* Logo */}
          <a href="/" style={{ display: 'flex', alignItems: 'center', gap: 10, textDecoration: 'none', flexShrink: 0 }}>
            <div style={{ position: 'relative', width: isScrolled ? 42 : 52, height: isScrolled ? 42 : 52, flexShrink: 0, transition: 'all .4s' }}>
              <Image src="/images/logo2.png" alt="The Chef Mom" width={52} height={52} priority style={{ objectFit: 'contain', width: '100%', height: '100%' }} />
            </div>
            <div>
              <div className="nav-logo-text">The Chef Mom</div>
              <div className="nav-logo-sub">Dubai · Homemade Indian Food</div>
            </div>
          </a>

          {/* Desktop links */}
          <div className="nav-desktop-links" style={{ alignItems: 'center', gap: 28, position: 'relative' }}>
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
          <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
            <a href={WA_GENERAL} target="_blank" rel="noreferrer" className="nav-wa-pill nav-wa-desktop">
              <span className="nav-wa-circle"><WaIcon size={12} color="white" /></span>
              Chat on WhatsApp
            </a>

            <button className="nav-icon-btn" onClick={onOpenCart} aria-label="Open cart">
              <ShoppingBag size={20} />
              {cartItemCount > 0 && <span className="nav-cart-badge">{cartItemCount}</span>}
            </button>

            <a
              href={WA_ORDER}
              target="_blank"
              rel="noreferrer"
              className="nav-cta"
              id="nav-order-btn"
              style={{ display: 'none' }}
            >
              Order Now <ChevronRight size={15} />
            </a>

            <button className="nav-icon-btn nav-hamburger" onClick={() => setMobileOpen(true)} aria-label="Open menu">
              <Menu size={22} />
            </button>
          </div>
        </div>
      </nav>

      <style>{`@media(min-width:1024px){#nav-order-btn{display:inline-flex!important;}}`}</style>

      {/* ── Mobile Drawer ── */}
      {mobileOpen && (
        <div className="nav-drawer">
          <div className="nav-drawer-panel">
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 20px', borderBottom: '1px solid rgba(255,107,44,.1)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <Image src="/images/logo2.png" alt="The Chef Mom" width={40} height={40} style={{ objectFit: 'contain' }} />
                {/* ✅ brand-red applied here too */}
                <span className="nav-logo-text" style={{ fontSize: 17 }}>The Chef Mom</span>
              </div>
              <button className="nav-icon-btn" onClick={() => setMobileOpen(false)} aria-label="Close menu">
                <X size={20} />
              </button>
            </div>

            <div style={{ flex: 1, padding: '4px 0' }}>
              {NAV_LINKS.map(({ label, href }, i) => (
                <a
                  key={href}
                  href={href}
                  style={{
                    display: 'flex', alignItems: 'center', justifyContent: 'space-between',
                    padding: '16px 20px',
                    fontFamily: "'DM Sans',sans-serif", fontSize: 15, fontWeight: 500,
                    color: '#1A0A00', textDecoration: 'none',
                    borderBottom: i < NAV_LINKS.length - 1 ? '1px solid rgba(26,10,0,.05)' : 'none',
                    transition: 'background .2s',
                  }}
                  onClick={() => setMobileOpen(false)}
                  onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.background = 'rgba(255,107,44,.04)'; }}
                  onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.background = 'transparent'; }}
                >
                  {label}
                  <ChevronRight size={16} style={{ color: 'rgba(255,107,44,.5)' }} />
                </a>
              ))}
            </div>

            <div style={{ padding: '16px 20px', borderTop: '1px solid rgba(255,107,44,.1)', display: 'flex', flexDirection: 'column', gap: 10 }}>
              <button
                className="nav-cta"
                style={{ width: '100%', justifyContent: 'center', padding: '13px 24px', fontSize: 15 }}
                onClick={() => {
                  setMobileOpen(false);
                  document.getElementById('meal-plans')?.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                View Meal Plans <ChevronRight size={16} />
              </button>

              <a
                href={WA_GENERAL}
                target="_blank"
                rel="noreferrer"
                className="nav-drawer-wa"
                onClick={() => setMobileOpen(false)}
              >
                <span style={{ width: 24, height: 24, background: 'rgba(255,255,255,0.25)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <WaIcon size={13} color="white" />
                </span>
                Chat on WhatsApp
              </a>

              <div style={{ textAlign: 'center', fontSize: 12, color: '#9B7B6A', fontFamily: "'DM Sans',sans-serif" }}>
                +971 55 799 8925
              </div>
            </div>
          </div>
          <div className="nav-drawer-backdrop" onClick={() => setMobileOpen(false)} />
        </div>
      )}
    </>
  );
}