











// 'use client';

// import React from 'react';
// import { PhoneCall, MessageCircle, MapPin, Heart } from 'lucide-react';

// const IconInstagram = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
//   </svg>
// );

// const IconFacebook = () => (
//   <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//     <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
//   </svg>
// );

// const WA_NUMBER = '971557998925'; // no + for wa.me

// /* ── Pre-filled WhatsApp messages ── */
// const WA_GENERAL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
//   `👋 Hello The Chef Mom!\n\nI'm interested in your homemade Indian meal subscription in Dubai.\n\nCould you please share:\n• Available meal plans & pricing\n• Delivery areas you cover\n• How to get started\n\nThank you! 🙏`
// )}`;

// const WA_ORDER = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
//   `👋 Hello The Chef Mom!\n\nI'd like to place an order / subscribe to a meal plan.\n\nPlease share the available plans and next steps.\n\nThank you! 🙏`
// )}`;

// const buildPlanWa = (plan: string) =>
//   `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
//     `👋 Hello The Chef Mom!\n\nI'm interested in the *${plan}* meal plan.\n\nCould you please share the pricing and delivery details?\n\nThank you! 🙏`
//   )}`;

// export default function Footer() {
//   return (
//     <>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

//         .ft-root {
//           font-family: 'DM Sans', sans-serif;
//           background: linear-gradient(170deg, #FFF5EB 0%, #FFF0E0 50%, #FFF8F0 100%);
//           position: relative;
//           overflow: hidden;
//           border-top: 1px solid rgba(255,107,44,0.12);
//         }
//         .ft-dots {
//           position: absolute; inset: 0;
//           background-image: radial-gradient(circle, rgba(255,107,44,0.1) 1px, transparent 1px);
//           background-size: 36px 36px;
//           pointer-events: none; z-index: 0;
//         }
//         .ft-blob {
//           position: absolute; border-radius: 50%;
//           filter: blur(90px); opacity: 0.25;
//           pointer-events: none;
//           animation: ftBlobDrift 12s ease-in-out infinite;
//         }
//         @keyframes ftBlobDrift {
//           0%,100% { transform: translate(0,0) scale(1); }
//           50%      { transform: translate(20px,-15px) scale(1.06); }
//         }

//         /* ── Logo ── */
//         .ft-logo {
//           font-family: 'Playfair Display', serif;
//           font-size: clamp(20px, 3.5vw, 26px);
//           font-weight: 900; color: #1A0A00;
//           letter-spacing: -0.5px; line-height: 1;
//         }
//         .ft-logo em { font-style: italic; color: #FF6B2C; }
//         .ft-tagline {
//           font-size: 14px; color: #9B7B6A;
//           line-height: 1.75; max-width: 300px;
//           margin: 14px 0 20px;
//         }

//         /* ── Social buttons ── */
//         .ft-social {
//           width: 40px; height: 40px; border-radius: 12px;
//           border: 1.5px solid rgba(26,10,0,0.1);
//           background: rgba(255,255,255,0.7);
//           display: flex; align-items: center; justify-content: center;
//           color: #6B5344; text-decoration: none;
//           transition: all 0.35s cubic-bezier(.34,1.56,.64,1);
//           flex-shrink: 0; backdrop-filter: blur(8px);
//           -webkit-tap-highlight-color: transparent;
//           touch-action: manipulation;
//         }
//         .ft-social:hover {
//           background: #FF6B2C; border-color: #FF6B2C; color: #fff;
//           transform: translateY(-4px) scale(1.1);
//           box-shadow: 0 8px 24px rgba(255,107,44,0.4);
//         }
//         .ft-social.wa:hover {
//           background: #25D366; border-color: #25D366;
//           box-shadow: 0 8px 24px rgba(37,211,102,0.4);
//         }
//         .ft-social:active { transform: scale(0.95); }

//         /* ── Section heading ── */
//         .ft-heading {
//           font-size: 11px; font-weight: 700;
//           letter-spacing: 2.5px; text-transform: uppercase;
//           color: #FF6B2C; margin-bottom: 20px;
//           display: flex; align-items: center; gap: 8px;
//         }
//         .ft-heading::after {
//           content: ''; flex: 1; height: 1px;
//           background: rgba(255,107,44,0.2); max-width: 36px;
//         }

//         /* ── Nav links ── */
//         .ft-link {
//           display: flex; align-items: center; gap: 0;
//           font-size: 14px; font-weight: 500; color: #9B7B6A;
//           text-decoration: none; padding: 6px 0;
//           transition: all 0.25s ease;
//           border: none; background: none; cursor: pointer;
//           width: fit-content;
//           -webkit-tap-highlight-color: transparent;
//         }
//         .ft-link::before {
//           content: ''; width: 0; height: 1.5px;
//           background: #FF6B2C;
//           transition: width 0.28s ease, margin-right 0.28s ease;
//           display: inline-block; margin-right: 0; flex-shrink: 0;
//         }
//         .ft-link:hover { color: #1A0A00; }
//         .ft-link:hover::before { width: 12px; margin-right: 8px; }

//         /* ── Contact items ── */
//         .ft-contact-item {
//           display: flex; align-items: flex-start; gap: 12px;
//           padding: 11px 13px;
//           background: rgba(255,255,255,0.65);
//           border: 1.5px solid rgba(26,10,0,0.07);
//           border-radius: 14px; margin-bottom: 10px;
//           transition: all 0.3s ease;
//           text-decoration: none;
//           backdrop-filter: blur(8px);
//           -webkit-tap-highlight-color: transparent;
//         }
//         a.ft-contact-item:hover {
//           background: rgba(255,255,255,0.9);
//           border-color: rgba(255,107,44,0.3);
//           transform: translateX(5px);
//           box-shadow: 0 6px 20px rgba(255,107,44,0.1);
//         }
//         a.ft-contact-item.wa-item:hover {
//           border-color: rgba(37,211,102,0.35);
//           box-shadow: 0 6px 20px rgba(37,211,102,0.12);
//         }
//         a.ft-contact-item:active { transform: scale(0.98); }
//         .ft-contact-icon {
//           width: 34px; height: 34px; border-radius: 10px;
//           display: flex; align-items: center; justify-content: center;
//           flex-shrink: 0;
//         }
//         .ft-contact-label {
//           font-size: 10px; font-weight: 700;
//           letter-spacing: 1px; text-transform: uppercase;
//           color: #9B7B6A; margin-bottom: 2px;
//         }
//         .ft-contact-value {
//           font-size: 13px; font-weight: 600;
//           color: #1A0A00; line-height: 1.4;
//         }

//         /* ── WhatsApp CTA card ── */
//         .ft-wa-cta {
//           display: flex; align-items: center; gap: 12px;
//           padding: 14px 16px;
//           background: linear-gradient(135deg, rgba(37,211,102,0.10), rgba(37,211,102,0.06));
//           border: 1.5px solid rgba(37,211,102,0.28);
//           border-radius: 16px; margin-bottom: 10px;
//           text-decoration: none;
//           transition: all 0.3s ease;
//           -webkit-tap-highlight-color: transparent;
//           touch-action: manipulation;
//           cursor: pointer;
//         }
//         .ft-wa-cta:hover {
//           background: linear-gradient(135deg, rgba(37,211,102,0.18), rgba(37,211,102,0.10));
//           border-color: rgba(37,211,102,0.5);
//           transform: translateX(5px);
//           box-shadow: 0 8px 24px rgba(37,211,102,0.15);
//         }
//         .ft-wa-cta:active { transform: scale(0.98); }
//         .ft-wa-cta-icon {
//           width: 40px; height: 40px;
//           background: #25D366; border-radius: 12px;
//           display: flex; align-items: center; justify-content: center;
//           flex-shrink: 0;
//           box-shadow: 0 4px 12px rgba(37,211,102,0.4);
//           animation: ftWaPulse 2.5s ease-in-out infinite;
//         }
//         @keyframes ftWaPulse {
//           0%,100% { box-shadow: 0 4px 12px rgba(37,211,102,0.35); }
//           50%      { box-shadow: 0 4px 20px rgba(37,211,102,0.6); }
//         }
//         .ft-wa-cta-label {
//           font-size: 10px; font-weight: 700;
//           letter-spacing: 1px; text-transform: uppercase;
//           color: #1A7A4A; margin-bottom: 2px;
//         }
//         .ft-wa-cta-value {
//           font-size: 13px; font-weight: 700;
//           color: #1A4D2E; line-height: 1.3;
//         }
//         .ft-wa-cta-sub {
//           font-size: 11px; font-weight: 400;
//           color: #4A9A6A; margin-top: 1px;
//         }

//         /* ── Bottom bar ── */
//         .ft-bottom {
//           padding-top: 24px; margin-top: 52px;
//           display: flex; align-items: center;
//           justify-content: space-between;
//           flex-wrap: wrap; gap: 10px;
//           border-top: 1px solid rgba(255,107,44,0.12);
//         }
//         .ft-copy {
//           font-size: 12px; color: #9B7B6A;
//           display: flex; align-items: center; gap: 5px; flex-wrap: wrap;
//         }
//         .ft-heart { animation: ftHeartBeat 2s ease-in-out infinite; display: inline-flex; }
//         @keyframes ftHeartBeat {
//           0%,100% { transform: scale(1); }
//           50%      { transform: scale(1.3); }
//         }

//         /* ── Live badge ── */
//         .ft-badge {
//           display: inline-flex; align-items: center; gap: 7px;
//           background: rgba(255,107,44,0.08);
//           border: 1px solid rgba(255,107,44,0.22);
//           border-radius: 50px; padding: 6px 14px;
//           font-size: 12px; font-weight: 600; color: #FF6B2C;
//           margin-bottom: 20px;
//         }
//         .ft-live-dot {
//           width: 6px; height: 6px; border-radius: 50%;
//           background: #22C55E;
//           box-shadow: 0 0 0 3px rgba(34,197,94,.25);
//           animation: ftPulse 2s ease-in-out infinite;
//           display: inline-block; flex-shrink: 0;
//         }
//         @keyframes ftPulse {
//           0%,100% { box-shadow: 0 0 0 3px rgba(34,197,94,.25); }
//           50%      { box-shadow: 0 0 0 6px rgba(34,197,94,.08); }
//         }

//         /* ══ LAYOUT ══ */
//         .ft-container {
//           max-width: 1200px; margin: 0 auto;
//           padding: 72px 16px 36px;
//           position: relative; z-index: 5;
//         }
//         .ft-grid {
//           display: grid;
//           grid-template-columns: 1fr;
//           gap: 36px 40px;
//         }

//         /* ══ RESPONSIVE ══ */
//         @media (max-width: 360px) {
//           .ft-container { padding: 56px 12px 28px; }
//           .ft-bottom { margin-top: 32px; flex-direction: column; align-items: flex-start; }
//           .ft-contact-value { font-size: 12px; }
//           .ft-tagline { font-size: 13px; margin: 10px 0 14px; }
//         }
//         @media (min-width: 361px) and (max-width: 559px) {
//           .ft-container { padding: 64px 16px 32px; }
//         }
//         @media (min-width: 560px) {
//           .ft-grid { grid-template-columns: 1fr 1fr; gap: 36px 32px; }
//           .ft-brand-col { grid-column: span 2; }
//           .ft-container { padding: 72px 24px 36px; }
//         }
//         @media (min-width: 900px) {
//           .ft-grid { grid-template-columns: 2fr 1fr 1fr 1.5fr; gap: 40px 48px; }
//           .ft-brand-col { grid-column: auto; }
//           .ft-container { padding: 88px 32px 40px; }
//           .ft-bottom { margin-top: 56px; }
//         }
//         @media (min-width: 1200px) {
//           .ft-container { padding: 88px 48px 40px; }
//         }
//         @media (max-width: 559px) {
//           .ft-plans-nav { display: grid !important; grid-template-columns: 1fr 1fr; gap: 0 12px; }
//         }
//       `}</style>

//       <footer className="ft-root">
//         <div className="ft-dots" />
//         <div className="ft-blob" style={{ width: 420, height: 420, background: '#FFD580', top: -80, right: -80,  animationDelay: '0s' }} />
//         <div className="ft-blob" style={{ width: 300, height: 300, background: '#FF9F6B', bottom: -40, left: -60, animationDelay: '-5s' }} />
//         <div className="ft-blob" style={{ width: 220, height: 220, background: '#FFB347', top: '40%', left: '50%', animationDelay: '-3s' }} />

//         <div className="ft-container">
//           <div className="ft-grid">

//             {/* ── BRAND ── */}
//             <div className="ft-brand-col">
//               <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
//                 <div style={{
//                   width: 44, height: 44,
//                   background: 'linear-gradient(135deg,#FF6B2C,#E84A1A)',
//                   borderRadius: 13, display: 'flex', alignItems: 'center', justifyContent: 'center',
//                   fontSize: 21, boxShadow: '0 8px 24px rgba(255,107,44,0.35)', flexShrink: 0,
//                 }}>
//                   👩‍🍳
//                 </div>
//                 <div className="ft-logo">The Chef Mom <em>&amp; CurryCraft</em></div>
//               </div>
//               <p className="ft-tagline">
//                 Bringing authentic North Indian home food to Dubai — healthy, fresh, and made with love every single day.
//               </p>
//               <div className="ft-badge">
//                 <span className="ft-live-dot" />
//                 Now Accepting Orders
//               </div>
//               <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
//                 <a href="#" className="ft-social" aria-label="Instagram"><IconInstagram /></a>
//                 <a href="#" className="ft-social" aria-label="Facebook"><IconFacebook /></a>
//                 {/* WhatsApp social icon — pre-filled general enquiry */}
//                 <a href={WA_GENERAL} target="_blank" rel="noreferrer" className="ft-social wa" aria-label="WhatsApp">
//                   <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
//                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//                   </svg>
//                 </a>
//               </div>
//             </div>

//             {/* ── PAGES ── */}
//             <div>
//               <div className="ft-heading">Pages</div>
//               <nav style={{ display: 'flex', flexDirection: 'column' }}>
//                 {[
//                   ['About Us',     '#about'],
//                   ['Meal Plans',   '#meal-plans'],
//                   ['How It Works', '#how-it-works'],
//                   ['Reviews',      '#reviews'],
//                   ['Contact Us',   '#contact'],
//                 ].map(([label, href]) => (
//                   <a key={label} href={href} className="ft-link">{label}</a>
//                 ))}
//               </nav>
//             </div>

//             {/* ── PLANS — each links to WhatsApp with that plan's enquiry ── */}
//             <div>
//               <div className="ft-heading">Plans</div>
//               <nav className="ft-plans-nav" style={{ display: 'flex', flexDirection: 'column' }}>
//                 {[
//                   'Basic Veg',
//                   'Standard Veg',
//                   'Premium Veg',
//                   'Basic Non-Veg',
//                   'Standard Non-Veg',
//                   'Premium Non-Veg',
//                 ].map((label) => (
//                   <a
//                     key={label}
//                     href={buildPlanWa(label)}
//                     target="_blank"
//                     rel="noreferrer"
//                     className="ft-link"
//                   >
//                     {label}
//                   </a>
//                 ))}
//               </nav>
//             </div>

//             {/* ── CONTACT ── */}
//             <div>
//               <div className="ft-heading">Contact</div>

//               {/* WhatsApp primary CTA card */}
//               <a href={WA_ORDER} target="_blank" rel="noreferrer" className="ft-wa-cta">
//                 <div className="ft-wa-cta-icon">
//                   <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
//                     <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
//                   </svg>
//                 </div>
//                 <div>
//                   <div className="ft-wa-cta-label">Order on WhatsApp</div>
//                   <div className="ft-wa-cta-value">Start Your Subscription</div>
//                   <div className="ft-wa-cta-sub">Tap to send a message →</div>
//                 </div>
//               </a>

//               {/* Phone call */}
//               <a href="tel:+971557998925" className="ft-contact-item" style={{ cursor: 'pointer' }}>
//                 <div className="ft-contact-icon" style={{ background: 'rgba(244,63,94,0.1)' }}>
//                   <PhoneCall size={15} color="#F43F5E" />
//                 </div>
//                 <div>
//                   <div className="ft-contact-label">Call Us</div>
//                   <div className="ft-contact-value">+971 55 799 8925</div>
//                 </div>
//               </a>

//               {/* WhatsApp general enquiry */}
//               <a href={WA_GENERAL} target="_blank" rel="noreferrer" className="ft-contact-item wa-item" style={{ cursor: 'pointer' }}>
//                 <div className="ft-contact-icon" style={{ background: 'rgba(34,197,94,0.1)' }}>
//                   <MessageCircle size={15} color="#22C55E" />
//                 </div>
//                 <div>
//                   <div className="ft-contact-label">WhatsApp Enquiry</div>
//                   <div className="ft-contact-value">Ask about meal plans</div>
//                 </div>
//               </a>

//               {/* Location */}
//               <div className="ft-contact-item">
//                 <div className="ft-contact-icon" style={{ background: 'rgba(56,189,248,0.1)' }}>
//                   <MapPin size={15} color="#0EA5E9" />
//                 </div>
//                 <div>
//                   <div className="ft-contact-label">Delivery Area</div>
//                   <div className="ft-contact-value">All major areas across Dubai</div>
//                 </div>
//               </div>
//             </div>

//           </div>

//           {/* ── BOTTOM BAR ── */}
//           <div className="ft-bottom">
//             <div className="ft-copy">
//               © {new Date().getFullYear()} The Chef Mom &amp; CurryCraft, Dubai. Made with
//               <span className="ft-heart"><Heart size={12} fill="#FF6B2C" strokeWidth={0} /></span>
//               in Dubai.
//             </div>
//             <div style={{ fontSize: 12, color: '#9B7B6A' }}>All rights reserved.</div>
//           </div>
//         </div>
//       </footer>
//     </>
//   );
// }






'use client';

import React from 'react';
import { PhoneCall, MessageCircle, MapPin, Heart } from 'lucide-react';

/* ── Social SVG Icons ── */
const IconInstagram = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const IconFacebook = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const IconYouTube = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const IconTikTok = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.17 8.17 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z"/>
  </svg>
);

const IconWhatsApp = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

const WA_NUMBER = '971557998925';

const WA_GENERAL = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  `👋 Hello The Chef Mom!\n\nI'm interested in your homemade Indian meal subscription in Dubai.\n\nCould you please share:\n• Available meal plans & pricing\n• Delivery areas you cover\n• How to get started\n\nThank you! 🙏`
)}`;

const WA_ORDER = `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
  `👋 Hello The Chef Mom!\n\nI'd like to place an order / subscribe to a meal plan.\n\nPlease share the available plans and next steps.\n\nThank you! 🙏`
)}`;

const buildPlanWa = (plan: string) =>
  `https://wa.me/${WA_NUMBER}?text=${encodeURIComponent(
    `👋 Hello The Chef Mom!\n\nI'm interested in the *${plan}* meal plan.\n\nCould you please share the pricing and delivery details?\n\nThank you! 🙏`
  )}`;

const SOCIALS = [
  {
    label:    'Instagram',
    href:     'https://www.instagram.com/thechefmomofficial/',
    icon:     <IconInstagram />,
    hoverBg:  'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)',
    hoverShadow: 'rgba(131,58,180,0.45)',
    className: '',
  },
  {
    label:    'Facebook',
    href:     'https://www.facebook.com/profile.php?id=61584389497765',
    icon:     <IconFacebook />,
    hoverBg:  '#1877F2',
    hoverShadow: 'rgba(24,119,242,0.45)',
    className: '',
  },
  {
    label:    'YouTube',
    href:     'https://youtube.com/@thechefmom3897?si=SPU8gdEM0vcx8R0C',
    icon:     <IconYouTube />,
    hoverBg:  '#FF0000',
    hoverShadow: 'rgba(255,0,0,0.4)',
    className: '',
  },
  {
    label:    'TikTok',
    href:     'https://www.tiktok.com/@thechefmomofficial?_r=1&_t=ZS-96VmTaJpElM',  // update when you have the real URL
    icon:     <IconTikTok />,
    hoverBg:  '#000000',
    hoverShadow: 'rgba(0,0,0,0.4)',
    className: '',
  },
  {
    label:    'WhatsApp',
    href:     WA_GENERAL,
    icon:     <IconWhatsApp />,
    hoverBg:  '#25D366',
    hoverShadow: 'rgba(37,211,102,0.45)',
    className: 'ft-social-wa',
  },
];

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ft-root {
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(170deg, #FFF5EB 0%, #FFF0E0 50%, #FFF8F0 100%);
          position: relative; overflow: hidden;
          border-top: 1px solid rgba(255,107,44,0.12);
        }
        .ft-dots {
          position: absolute; inset: 0;
          background-image: radial-gradient(circle, rgba(255,107,44,0.1) 1px, transparent 1px);
          background-size: 36px 36px;
          pointer-events: none; z-index: 0;
        }
        .ft-blob {
          position: absolute; border-radius: 50%;
          filter: blur(90px); opacity: 0.25; pointer-events: none;
          animation: ftBlobDrift 12s ease-in-out infinite;
        }
        @keyframes ftBlobDrift {
          0%,100%{transform:translate(0,0) scale(1)}
          50%{transform:translate(20px,-15px) scale(1.06)}
        }

        /* ── Logo ── */
        .ft-logo-wrap { display: flex; align-items: center; gap: 12px; margin-bottom: 4px; }
        .ft-logo-icon {
          width: 44px; height: 44px;
          background: linear-gradient(135deg,#FF6B2C,#E84A1A);
          border-radius: 13px; display: flex; align-items: center; justify-content: center;
          font-size: 21px; box-shadow: 0 8px 24px rgba(255,107,44,0.35); flex-shrink: 0;
        }
        .ft-logo {
          font-family: 'Playfair Display', serif;
          font-size: clamp(18px,3vw,24px); font-weight: 900;
          line-height: 1.15; letter-spacing: -0.3px;
        }
        /* ✅ "The Chef Mom" in red, "& Currytales" smaller below */
        .ft-logo-main { color: #C0392B; display: block; }
        .ft-logo-sub  { color: #9B7B6A; font-size: 0.68em; font-style: italic; display: block; margin-top: 1px; }

        .ft-tagline {
          font-size: 14px; color: #9B7B6A; line-height: 1.75;
          max-width: 300px; margin: 14px 0 20px;
        }

        /* ── Social buttons ── */
        .ft-socials-row { display: flex; gap: 9px; flex-wrap: wrap; }
        .ft-social {
          width: 40px; height: 40px; border-radius: 12px;
          border: 1.5px solid rgba(26,10,0,0.1);
          background: rgba(255,255,255,0.7);
          display: flex; align-items: center; justify-content: center;
          color: #6B5344; text-decoration: none;
          transition: all 0.32s cubic-bezier(.34,1.56,.64,1);
          flex-shrink: 0; backdrop-filter: blur(8px);
          -webkit-tap-highlight-color: transparent;
          touch-action: manipulation; position: relative;
        }
        /* Individual hover colours via data-attr approach — done with specific classes */
        .ft-social.ig:hover  { background:linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045); border-color:transparent; color:#fff; transform:translateY(-4px) scale(1.1); box-shadow:0 8px 22px rgba(131,58,180,0.4); }
        .ft-social.fb:hover  { background:#1877F2; border-color:#1877F2; color:#fff; transform:translateY(-4px) scale(1.1); box-shadow:0 8px 22px rgba(24,119,242,0.4); }
        .ft-social.yt:hover  { background:#FF0000; border-color:#FF0000; color:#fff; transform:translateY(-4px) scale(1.1); box-shadow:0 8px 22px rgba(255,0,0,0.38); }
        .ft-social.tt:hover  { background:#000; border-color:#000; color:#fff; transform:translateY(-4px) scale(1.1); box-shadow:0 8px 22px rgba(0,0,0,0.3); }
        .ft-social.wa:hover  { background:#25D366; border-color:#25D366; color:#fff; transform:translateY(-4px) scale(1.1); box-shadow:0 8px 22px rgba(37,211,102,0.4); }
        .ft-social:active    { transform:scale(0.93)!important; }

        /* Tooltip */
        .ft-social::after {
          content: attr(aria-label);
          position: absolute; bottom: calc(100% + 8px); left: 50%;
          transform: translateX(-50%) translateY(4px);
          background: #1A0A00; color: #fff;
          font-size: 10px; font-weight: 700; letter-spacing: 0.5px;
          padding: 4px 9px; border-radius: 6px; white-space: nowrap;
          opacity: 0; pointer-events: none;
          transition: opacity 0.2s, transform 0.2s;
          font-family: 'DM Sans', sans-serif;
        }
        .ft-social:hover::after { opacity: 1; transform: translateX(-50%) translateY(0); }

        /* ── Section heading ── */
        .ft-heading {
          font-size: 11px; font-weight: 700; letter-spacing: 2.5px;
          text-transform: uppercase; color: #FF6B2C; margin-bottom: 20px;
          display: flex; align-items: center; gap: 8px;
        }
        .ft-heading::after {
          content:''; flex:1; height:1px;
          background:rgba(255,107,44,0.2); max-width:36px;
        }

        /* ── Nav links ── */
        .ft-link {
          display: flex; align-items: center; gap: 0;
          font-size: 14px; font-weight: 500; color: #9B7B6A;
          text-decoration: none; padding: 6px 0;
          transition: all 0.25s ease;
          border: none; background: none; cursor: pointer;
          width: fit-content; -webkit-tap-highlight-color: transparent;
        }
        .ft-link::before {
          content:''; width:0; height:1.5px; background:#FF6B2C;
          transition: width 0.28s ease, margin-right 0.28s ease;
          display:inline-block; margin-right:0; flex-shrink:0;
        }
        .ft-link:hover { color:#1A0A00; }
        .ft-link:hover::before { width:12px; margin-right:8px; }

        /* ── Contact items ── */
        .ft-contact-item {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 11px 13px;
          background: rgba(255,255,255,0.65);
          border: 1.5px solid rgba(26,10,0,0.07);
          border-radius: 14px; margin-bottom: 10px;
          transition: all 0.3s ease; text-decoration: none;
          backdrop-filter: blur(8px);
          -webkit-tap-highlight-color: transparent;
        }
        a.ft-contact-item:hover {
          background: rgba(255,255,255,0.9);
          border-color: rgba(255,107,44,0.3);
          transform: translateX(5px);
          box-shadow: 0 6px 20px rgba(255,107,44,0.1);
        }
        a.ft-contact-item.wa-item:hover {
          border-color: rgba(37,211,102,0.35);
          box-shadow: 0 6px 20px rgba(37,211,102,0.12);
        }
        a.ft-contact-item:active { transform: scale(0.98); }
        .ft-contact-icon {
          width: 34px; height: 34px; border-radius: 10px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .ft-contact-label {
          font-size: 10px; font-weight: 700; letter-spacing: 1px;
          text-transform: uppercase; color: #9B7B6A; margin-bottom: 2px;
        }
        .ft-contact-value { font-size: 13px; font-weight: 600; color: #1A0A00; line-height: 1.4; }

        /* ── WhatsApp CTA card ── */
        .ft-wa-cta {
          display: flex; align-items: center; gap: 12px;
          padding: 14px 16px;
          background: linear-gradient(135deg,rgba(37,211,102,0.10),rgba(37,211,102,0.06));
          border: 1.5px solid rgba(37,211,102,0.28);
          border-radius: 16px; margin-bottom: 10px;
          text-decoration: none; transition: all 0.3s ease;
          -webkit-tap-highlight-color: transparent; cursor: pointer;
        }
        .ft-wa-cta:hover {
          background: linear-gradient(135deg,rgba(37,211,102,0.18),rgba(37,211,102,0.10));
          border-color: rgba(37,211,102,0.5);
          transform: translateX(5px);
          box-shadow: 0 8px 24px rgba(37,211,102,0.15);
        }
        .ft-wa-cta:active { transform: scale(0.98); }
        .ft-wa-cta-icon {
          width: 40px; height: 40px; background: #25D366; border-radius: 12px;
          display: flex; align-items: center; justify-content: center; flex-shrink: 0;
          box-shadow: 0 4px 12px rgba(37,211,102,0.4);
          animation: ftWaPulse 2.5s ease-in-out infinite;
        }
        @keyframes ftWaPulse {
          0%,100%{box-shadow:0 4px 12px rgba(37,211,102,0.35)}
          50%{box-shadow:0 4px 20px rgba(37,211,102,0.6)}
        }
        .ft-wa-cta-label { font-size:10px; font-weight:700; letter-spacing:1px; text-transform:uppercase; color:#1A7A4A; margin-bottom:2px; }
        .ft-wa-cta-value { font-size:13px; font-weight:700; color:#1A4D2E; line-height:1.3; }
        .ft-wa-cta-sub   { font-size:11px; font-weight:400; color:#4A9A6A; margin-top:1px; }

        /* ── Bottom bar ── */
        .ft-bottom {
          padding-top: 24px; margin-top: 52px;
          display: flex; align-items: center;
          justify-content: space-between; flex-wrap: wrap; gap: 10px;
          border-top: 1px solid rgba(255,107,44,0.12);
        }
        .ft-copy {
          font-size: 12px; color: #9B7B6A;
          display: flex; align-items: center; gap: 5px; flex-wrap: wrap;
        }
        .ft-heart { animation: ftHeartBeat 2s ease-in-out infinite; display:inline-flex; }
        @keyframes ftHeartBeat {
          0%,100%{transform:scale(1)} 50%{transform:scale(1.3)}
        }

        /* ── Live badge ── */
        .ft-badge {
          display: inline-flex; align-items: center; gap: 7px;
          background: rgba(255,107,44,0.08); border: 1px solid rgba(255,107,44,0.22);
          border-radius: 50px; padding: 6px 14px;
          font-size: 12px; font-weight: 600; color: #FF6B2C; margin-bottom: 20px;
        }
        .ft-live-dot {
          width: 6px; height: 6px; border-radius: 50%; background: #22C55E;
          box-shadow: 0 0 0 3px rgba(34,197,94,.25);
          animation: ftPulse 2s ease-in-out infinite;
          display: inline-block; flex-shrink: 0;
        }
        @keyframes ftPulse {
          0%,100%{box-shadow:0 0 0 3px rgba(34,197,94,.25)}
          50%{box-shadow:0 0 0 6px rgba(34,197,94,.08)}
        }

        /* ══ LAYOUT ══ */
        .ft-container {
          max-width: 1200px; margin: 0 auto;
          padding: 72px 16px 36px;
          position: relative; z-index: 5;
        }
        .ft-grid {
          display: grid; grid-template-columns: 1fr; gap: 36px 40px;
        }

        /* ══ RESPONSIVE ══ */
        @media(max-width:360px) {
          .ft-container{padding:56px 12px 28px;}
          .ft-bottom{margin-top:32px;flex-direction:column;align-items:flex-start;}
          .ft-contact-value{font-size:12px;}
          .ft-tagline{font-size:13px;margin:10px 0 14px;}
        }
        @media(min-width:560px) {
          .ft-grid{grid-template-columns:1fr 1fr;gap:36px 32px;}
          .ft-brand-col{grid-column:span 2;}
          .ft-container{padding:72px 24px 36px;}
        }
        @media(min-width:900px) {
          .ft-grid{grid-template-columns:2fr 1fr 1fr 1.5fr;gap:40px 48px;}
          .ft-brand-col{grid-column:auto;}
          .ft-container{padding:88px 32px 40px;}
          .ft-bottom{margin-top:56px;}
        }
        @media(min-width:1200px) {
          .ft-container{padding:88px 48px 40px;}
        }
        @media(max-width:559px) {
          .ft-plans-nav{display:grid!important;grid-template-columns:1fr 1fr;gap:0 12px;}
        }
      `}</style>

      <footer className="ft-root">
        <div className="ft-dots" />
        <div className="ft-blob" style={{ width:420, height:420, background:'#FFD580', top:-80, right:-80,  animationDelay:'0s' }} />
        <div className="ft-blob" style={{ width:300, height:300, background:'#FF9F6B', bottom:-40, left:-60, animationDelay:'-5s' }} />
        <div className="ft-blob" style={{ width:220, height:220, background:'#FFB347', top:'40%', left:'50%', animationDelay:'-3s' }} />

        <div className="ft-container">
          <div className="ft-grid">

            {/* ── BRAND ── */}
            <div className="ft-brand-col">
              <div className="ft-logo-wrap">
                <div className="ft-logo-icon">👩‍🍳</div>
                <div className="ft-logo">
                  <span className="ft-logo-main">The Chef Mom</span>
                  <span className="ft-logo-sub">&amp; Curry Craft</span>
                </div>
              </div>

              <p className="ft-tagline">
                Bringing authentic North Indian home food to Dubai — healthy, fresh, and made with love every single day.
              </p>

              <div className="ft-badge">
                <span className="ft-live-dot" />
                Now Accepting Orders
              </div>

              {/* Social icons row */}
              <div className="ft-socials-row">
                <a
                  href="https://www.instagram.com/thechefmomofficial/"
                  target="_blank" rel="noreferrer"
                  className="ft-social ig"
                  aria-label="Instagram"
                >
                  <IconInstagram />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61584389497765"
                  target="_blank" rel="noreferrer"
                  className="ft-social fb"
                  aria-label="Facebook"
                >
                  <IconFacebook />
                </a>
                <a
               href="https://youtube.com/@thechefmom3897?si=SPU8gdEM0vcx8R0C"
                  target="_blank" rel="noreferrer"
                  className="ft-social yt"
                  aria-label="YouTube"
                >
                  <IconYouTube />
                </a>
                <a
                 href="https://www.tiktok.com/@thechefmomofficial?_r=1&_t=ZS-96VmTaJpElM"
                  target="_blank" rel="noreferrer"
                  className="ft-social tt"
                  aria-label="TikTok"
                >
                  <IconTikTok />
                </a>
                <a
                  href={WA_GENERAL}
                  target="_blank" rel="noreferrer"
                  className="ft-social wa"
                  aria-label="WhatsApp"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* ── PAGES ── */}
            <div>
              <div className="ft-heading">Pages</div>
              <nav style={{ display:'flex', flexDirection:'column' }}>
                {[
                  ['About Us',     '#about'],
                  ['Meal Plans',   '#meal-plans'],
                  ['How It Works', '#how-it-works'],
                  ['Reviews',      '#reviews'],
                  ['Contact Us',   '#contact'],
                ].map(([label, href]) => (
                  <a key={label} href={href} className="ft-link">{label}</a>
                ))}
              </nav>
            </div>

            {/* ── PLANS ── */}
            <div>
              <div className="ft-heading">Plans</div>
              <nav className="ft-plans-nav" style={{ display:'flex', flexDirection:'column' }}>
                {[
                  'Basic Veg',
                  'Standard Veg',
                  'Premium Veg',
                  'Basic Non-Veg',
                  'Standard Non-Veg',
                  'Premium Non-Veg',
                ].map((label) => (
                  <a key={label} href={buildPlanWa(label)} target="_blank" rel="noreferrer" className="ft-link">
                    {label}
                  </a>
                ))}
              </nav>
            </div>

            {/* ── CONTACT ── */}
            <div>
              <div className="ft-heading">Contact</div>

              {/* WhatsApp primary CTA */}
              <a href={WA_ORDER} target="_blank" rel="noreferrer" className="ft-wa-cta">
                <div className="ft-wa-cta-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </div>
                <div>
                  <div className="ft-wa-cta-label">Order on WhatsApp</div>
                  <div className="ft-wa-cta-value">Start Your Subscription</div>
                  <div className="ft-wa-cta-sub">Tap to send a message →</div>
                </div>
              </a>

              {/* Phone */}
              <a href="tel:+971557998925" className="ft-contact-item">
                <div className="ft-contact-icon" style={{ background:'rgba(244,63,94,0.1)' }}>
                  <PhoneCall size={15} color="#F43F5E" />
                </div>
                <div>
                  <div className="ft-contact-label">Call Us</div>
                  <div className="ft-contact-value">+971 55 799 8925</div>
                </div>
              </a>

              {/* WhatsApp enquiry */}
              <a href={WA_GENERAL} target="_blank" rel="noreferrer" className="ft-contact-item wa-item">
                <div className="ft-contact-icon" style={{ background:'rgba(34,197,94,0.1)' }}>
                  <MessageCircle size={15} color="#22C55E" />
                </div>
                <div>
                  <div className="ft-contact-label">WhatsApp Enquiry</div>
                  <div className="ft-contact-value">Ask about meal plans</div>
                </div>
              </a>

              {/* Location */}
              <div className="ft-contact-item">
                <div className="ft-contact-icon" style={{ background:'rgba(56,189,248,0.1)' }}>
                  <MapPin size={15} color="#0EA5E9" />
                </div>
                <div>
                  <div className="ft-contact-label">Delivery Area</div>
                  <div className="ft-contact-value">All major areas across Dubai</div>
                </div>
              </div>
            </div>

          </div>

          {/* ── BOTTOM BAR ── */}
          <div className="ft-bottom">
            <div className="ft-copy">
              © {new Date().getFullYear()}
              <span style={{ color:'#C0392B', fontWeight:700 }}>The Chef Mom</span>
              &amp; Currytales, Dubai. Made with
              <span className="ft-heart"><Heart size={12} fill="#FF6B2C" strokeWidth={0} /></span>
              in Dubai.
            </div>
            <div style={{ fontSize:12, color:'#9B7B6A' }}>All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  );
}