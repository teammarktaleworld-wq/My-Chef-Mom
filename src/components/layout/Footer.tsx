// 'use client';

// import React from 'react';
// import { PhoneCall, MessageCircle, MapPin } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="bg-slate-900 text-slate-300 pt-20 pb-10">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          
//           {/* Brand & About */}
//           <div className="col-span-1 md:col-span-2">
//             <div className="flex items-center gap-3 mb-6">
//               <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center text-white">
//                 <span className="text-2xl">👩‍🍳</span>
//               </div>
//               <span className="font-logo text-3xl font-normal text-white leading-none">
//                 The Chef Mom
//               </span>
//             </div>
//             <p className="text-slate-400 max-w-sm leading-relaxed mb-6 font-medium">
//               Bringing the authentic taste of Delhi to Dubai. Healthy, homemade, and hygienic daily meals.
//             </p>
//             <div className="flex gap-4">
//               <a 
//                 href="#" 
//                 className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all text-white shadow-sm"
//               >
//                 IG
//               </a>
//               <a 
//                 href="#" 
//                 className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-rose-500 hover:text-white transition-all text-white shadow-sm"
//               >
//                 FB
//               </a>
//             </div>
//           </div>

//           {/* Quick Links */}
//           <div>
//             <h4 className="text-white font-black uppercase tracking-wider mb-6 text-sm">
//               Quick Links
//             </h4>
//             <ul className="space-y-4 text-sm font-medium">
//               <li><a href="#about" className="hover:text-rose-400 transition-colors">About Us</a></li>
//               <li><a href="#meal-plans" className="hover:text-rose-400 transition-colors">Meal Plans</a></li>
//               <li><a href="#how-it-works" className="hover:text-rose-400 transition-colors">How it Works</a></li>
//               <li><a href="#" className="hover:text-rose-400 transition-colors">Contact Us</a></li>
//             </ul>
//           </div>

//           {/* Contact Info */}
//           <div>
//             <h4 className="text-white font-black uppercase tracking-wider mb-6 text-sm">
//               Contact
//             </h4>
//             <ul className="space-y-4 text-sm font-medium">
//               <li className="flex items-center gap-3">
//                 <PhoneCall size={18} className="text-rose-400" /> 
//                 +971 55 799 8925
//               </li>
//               <li className="flex items-center gap-3">
//                 <MessageCircle size={18} className="text-green-400" /> 
//                 WhatsApp Orders
//               </li>
//               <li className="flex items-start gap-3">
//                 <MapPin size={18} className="text-sky-400 shrink-0" /> 
//                 Delivering across major locations in Dubai.
//               </li>
//             </ul>
//           </div>
//         </div>
        
//         <div className="pt-8 border-t border-slate-800 text-center text-sm font-medium text-slate-500">
//           © {new Date().getFullYear()} The Chef Mom Dubai. All rights reserved.
//         </div>
//       </div>
//     </footer>
//   );
// }









'use client';

import React from 'react';
import { PhoneCall, MessageCircle, MapPin, Heart } from 'lucide-react';

const IconInstagram = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
  </svg>
);

const IconFacebook = () => (
  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const WHATSAPP_NUMBER = '+971557998925';

export default function Footer() {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,900;1,700&family=DM+Sans:wght@300;400;500;600&display=swap');

        .ft-root {
          font-family: 'DM Sans', sans-serif;
          background: #1A0A00;
          position: relative;
          overflow: hidden;
        }
        .ft-wave {
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 120px;
          background: linear-gradient(170deg, #FFF8F0 0%, #FFF0E0 60%, transparent 100%);
          clip-path: ellipse(60% 100% at 50% 0%);
          pointer-events: none;
          z-index: 0;
        }
        .ft-dots {
          position: absolute;
          inset: 0;
          background-image: radial-gradient(circle, rgba(255,107,44,0.08) 1px, transparent 1px);
          background-size: 36px 36px;
          pointer-events: none;
          z-index: 0;
        }
        .ft-blob {
          position: absolute;
          border-radius: 50%;
          filter: blur(80px);
          opacity: 0.18;
          pointer-events: none;
          animation: ftBlobDrift 12s ease-in-out infinite;
        }
        @keyframes ftBlobDrift {
          0%,100% { transform: translate(0,0) scale(1); }
          50%      { transform: translate(20px,-15px) scale(1.06); }
        }
        .ft-logo {
          font-family: 'Playfair Display', serif;
          font-size: 28px;
          font-weight: 900;
          color: #fff;
          letter-spacing: -0.5px;
          line-height: 1;
        }
        .ft-logo em { font-style: italic; color: #FF6B2C; }
        .ft-tagline {
          font-size: 14px;
          color: rgba(255,255,255,0.42);
          line-height: 1.75;
          max-width: 300px;
          margin: 16px 0 24px;
        }
        .ft-social {
          width: 40px; height: 40px;
          border-radius: 12px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.05);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: all 0.35s cubic-bezier(.34,1.56,.64,1);
        }
        .ft-social:hover {
          background: #FF6B2C;
          border-color: #FF6B2C;
          color: #fff;
          transform: translateY(-4px) scale(1.1);
          box-shadow: 0 8px 24px rgba(255,107,44,0.45);
        }
        .ft-heading {
          font-size: 11px;
          font-weight: 700;
          letter-spacing: 2.5px;
          text-transform: uppercase;
          color: #FF6B2C;
          margin-bottom: 22px;
          display: flex;
          align-items: center;
          gap: 8px;
        }
        .ft-heading::after {
          content: '';
          flex: 1;
          height: 1px;
          background: rgba(255,107,44,0.2);
          max-width: 36px;
        }
        .ft-link {
          display: flex;
          align-items: center;
          gap: 0;
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.48);
          text-decoration: none;
          padding: 7px 0;
          transition: all 0.25s ease;
          border: none;
          background: none;
          cursor: pointer;
        }
        .ft-link::before {
          content: '';
          width: 0;
          height: 1.5px;
          background: #FF6B2C;
          transition: width 0.28s ease, margin-right 0.28s ease;
          display: inline-block;
          margin-right: 0;
          flex-shrink: 0;
        }
        .ft-link:hover { color: #fff; }
        .ft-link:hover::before { width: 12px; margin-right: 8px; }
        .ft-contact-item {
          display: flex;
          align-items: flex-start;
          gap: 12px;
          padding: 12px 14px;
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          margin-bottom: 10px;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        a.ft-contact-item:hover {
          background: rgba(255,107,44,0.1);
          border-color: rgba(255,107,44,0.3);
          transform: translateX(5px);
        }
        .ft-contact-icon {
          width: 34px; height: 34px;
          border-radius: 10px;
          display: flex; align-items: center; justify-content: center;
          flex-shrink: 0;
        }
        .ft-contact-label {
          font-size: 10px;
          font-weight: 700;
          letter-spacing: 1px;
          text-transform: uppercase;
          color: rgba(255,255,255,0.3);
          margin-bottom: 2px;
        }
        .ft-contact-value {
          font-size: 14px;
          font-weight: 500;
          color: rgba(255,255,255,0.75);
          line-height: 1.4;
        }
        .ft-bottom {
          border-top: 1px solid rgba(255,255,255,0.06);
          padding-top: 28px;
          margin-top: 60px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 12px;
        }
        .ft-copy {
          font-size: 13px;
          color: rgba(255,255,255,0.28);
          display: flex;
          align-items: center;
          gap: 5px;
        }
        .ft-heart {
          color: #FF6B2C;
          animation: ftHeartBeat 2s ease-in-out infinite;
          display: inline-flex;
        }
        @keyframes ftHeartBeat {
          0%,100% { transform: scale(1); }
          50%      { transform: scale(1.3); }
        }
        .ft-badge {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          background: rgba(255,107,44,0.12);
          border: 1px solid rgba(255,107,44,0.25);
          border-radius: 50px;
          padding: 6px 14px;
          font-size: 12px;
          font-weight: 600;
          color: #FF6B2C;
          margin-bottom: 24px;
        }
        .ft-live-dot {
          width: 6px; height: 6px;
          border-radius: 50%;
          background: #22C55E;
          box-shadow: 0 0 0 3px rgba(34,197,94,.25);
          animation: ftPulse 2s ease-in-out infinite;
          display: inline-block;
          flex-shrink: 0;
        }
        @keyframes ftPulse {
          0%,100% { box-shadow: 0 0 0 3px rgba(34,197,94,.25); }
          50%      { box-shadow: 0 0 0 6px rgba(34,197,94,.08); }
        }

        @media (max-width: 900px) {
          .ft-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 560px) {
          .ft-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>

      <footer className="ft-root">
        <div className="ft-wave" />
        <div className="ft-dots" />
        <div className="ft-blob" style={{ width: 400, height: 400, background: '#FF6B2C', top: -100, right: -100, animationDelay: '0s' }} />
        <div className="ft-blob" style={{ width: 280, height: 280, background: '#F5A623', bottom: 0, left: -60, animationDelay: '-5s' }} />

        <div style={{ maxWidth: 1200, margin: '0 auto', padding: '100px 32px 44px', position: 'relative', zIndex: 5 }}>
          <div className="ft-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: '40px 48px' }}>

            {/* BRAND */}
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 4 }}>
                <div style={{ width: 46, height: 46, background: 'linear-gradient(135deg,#FF6B2C,#E84A1A)', borderRadius: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 22, boxShadow: '0 8px 24px rgba(255,107,44,0.4)', flexShrink: 0 }}>
                  👩‍🍳
                </div>
                <div className="ft-logo">Mom's <em>Kitchen</em></div>
              </div>
              <p className="ft-tagline">
                Bringing the authentic taste of home to Dubai — healthy, homemade, and made with love every single day.
              </p>
              <div className="ft-badge">
                <span className="ft-live-dot" />
                Now Accepting Orders
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <a href="#" className="ft-social" aria-label="Instagram"><IconInstagram /></a>
                <a href="#" className="ft-social" aria-label="Facebook"><IconFacebook /></a>
                <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="ft-social" aria-label="WhatsApp">
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                </a>
              </div>
            </div>

            {/* QUICK LINKS */}
            <div>
              <div className="ft-heading">Pages</div>
              <nav style={{ display: 'flex', flexDirection: 'column' }}>
                {[
                  ['About Us', '#about'],
                  ['Meal Plans', '#meal-plans'],
                  ['How It Works', '#how-it-works'],
                  ['Testimonials', '#testimonials'],
                  ['Contact Us', '#contact'],
                ].map(([label, href]) => (
                  <a key={label} href={href} className="ft-link">{label}</a>
                ))}
              </nav>
            </div>

            {/* PLANS */}
            <div>
              <div className="ft-heading">Plans</div>
              <nav style={{ display: 'flex', flexDirection: 'column' }}>
                {['Basic Veg', 'Premium Veg', 'Basic Non-Veg', 'Premium Non-Veg', 'Family Combo', '2-Day Trial'].map((label) => (
                  <a key={label} href="#meal-plans" className="ft-link">{label}</a>
                ))}
              </nav>
            </div>

            {/* CONTACT */}
            <div>
              <div className="ft-heading">Contact</div>
              <a href={`tel:${WHATSAPP_NUMBER}`} className="ft-contact-item" style={{ cursor: 'pointer' }}>
                <div className="ft-contact-icon" style={{ background: 'rgba(244,63,94,0.14)' }}>
                  <PhoneCall size={16} color="#F43F5E" />
                </div>
                <div>
                  <div className="ft-contact-label">Call Us</div>
                  <div className="ft-contact-value">+971 55 799 8925</div>
                </div>
              </a>
              <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noreferrer" className="ft-contact-item" style={{ cursor: 'pointer' }}>
                <div className="ft-contact-icon" style={{ background: 'rgba(34,197,94,0.14)' }}>
                  <MessageCircle size={16} color="#22C55E" />
                </div>
                <div>
                  <div className="ft-contact-label">WhatsApp</div>
                  <div className="ft-contact-value">Order on WhatsApp</div>
                </div>
              </a>
              <div className="ft-contact-item">
                <div className="ft-contact-icon" style={{ background: 'rgba(56,189,248,0.14)' }}>
                  <MapPin size={16} color="#38BDF8" />
                </div>
                <div>
                  <div className="ft-contact-label">Delivery Area</div>
                  <div className="ft-contact-value">All major areas across Dubai</div>
                </div>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="ft-bottom">
            <div className="ft-copy">
              © {new Date().getFullYear()} Mom's Kitchen Dubai. Made with
              <span className="ft-heart"><Heart size={12} fill="#FF6B2C" strokeWidth={0} /></span>
              in Dubai.
            </div>
            <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.18)' }}>All rights reserved.</div>
          </div>
        </div>
      </footer>
    </>
  );
}