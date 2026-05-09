// import { MessageCircle } from "lucide-react";
// import { WHATSAPP_NUMBER } from "@/lib/constant";

// export default function FloatingWhatsApp() {
//   return (
//     <a
//       href={`https://wa.me/${WHATSAPP_NUMBER}`}
//       target="_blank"
//       className="fixed bottom-6 right-6 w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white"
//     >
//       <MessageCircle size={30} />
//     </a>
//   );
// }






'use client';

import React, { useState, useEffect } from 'react';

const WHATSAPP_NUMBER = '+971557998925';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  /* Show button after scroll */
  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  /* Show chat bubble after 4 seconds if user hasn't interacted */
  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 4000);
    return () => clearTimeout(t);
  }, []);

  const handleClick = () => {
    setShowBubble(false);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}`, '_blank');
  };

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');

        /* ── Container ── */
        .wa-wrap {
          position: fixed;
          bottom: 28px;
          right: 28px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 12px;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Chat bubble ── */
        .wa-bubble {
          background: #fff;
          border-radius: 18px 18px 4px 18px;
          padding: 14px 18px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.14);
          max-width: 220px;
          position: relative;
          transform-origin: bottom right;
          animation: waBubbleIn 0.5s cubic-bezier(.34,1.56,.64,1) both;
          border: 1px solid rgba(0,0,0,0.06);
        }
        @keyframes waBubbleIn {
          from { opacity: 0; transform: scale(0.7) translateY(10px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .wa-bubble-header {
          display: flex;
          align-items: center;
          gap: 8px;
          margin-bottom: 8px;
        }
        .wa-bubble-avatar {
          width: 32px; height: 32px;
          border-radius: 50%;
          background: linear-gradient(135deg,#25D366,#128C7E);
          display: flex; align-items: center; justify-content: center;
          font-size: 16px;
          flex-shrink: 0;
        }
        .wa-bubble-name {
          font-size: 13px;
          font-weight: 700;
          color: #1A0A00;
          line-height: 1.1;
        }
        .wa-bubble-status {
          font-size: 11px;
          color: #25D366;
          font-weight: 500;
        }
        .wa-bubble-text {
          font-size: 13px;
          color: #444;
          line-height: 1.5;
          margin: 0;
        }
        .wa-bubble-cta {
          display: inline-flex;
          align-items: center;
          gap: 5px;
          margin-top: 10px;
          background: #25D366;
          color: #fff;
          font-size: 12px;
          font-weight: 700;
          padding: 6px 14px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          justify-content: center;
        }
        .wa-bubble-cta:hover {
          background: #1da851;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(37,211,102,0.4);
        }
        .wa-bubble-dismiss {
          position: absolute;
          top: 8px; right: 10px;
          width: 20px; height: 20px;
          border-radius: 50%;
          background: rgba(0,0,0,0.06);
          border: none;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 12px;
          color: #999;
          transition: background 0.2s;
        }
        .wa-bubble-dismiss:hover { background: rgba(0,0,0,0.12); color: #555; }

        /* ── Main button ── */
        .wa-btn {
          width: 60px; height: 60px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25D366, #128C7E);
          border: none;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          position: relative;
          transition: transform 0.4s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease, opacity 0.4s ease;
          box-shadow: 0 8px 32px rgba(37,211,102,0.45);
        }
        .wa-btn:hover {
          transform: scale(1.12) rotate(-5deg) !important;
          box-shadow: 0 16px 48px rgba(37,211,102,0.55);
        }
        .wa-btn:active { transform: scale(0.96) !important; }

        /* ── Pulse rings ── */
        .wa-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid rgba(37,211,102,0.5);
          animation: waRingPulse 2.5s ease-out infinite;
          pointer-events: none;
        }
        .wa-ring-2 {
          animation-delay: 0.8s;
        }
        .wa-ring-3 {
          animation-delay: 1.6s;
        }
        @keyframes waRingPulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(2.2); opacity: 0;   }
        }

        /* ── Notification dot ── */
        .wa-notif {
          position: absolute;
          top: 2px; right: 2px;
          width: 16px; height: 16px;
          background: #FF6B2C;
          border-radius: 50%;
          border: 2px solid #fff;
          display: flex; align-items: center; justify-content: center;
          font-size: 9px;
          font-weight: 700;
          color: #fff;
          animation: waNotifBounce 1s cubic-bezier(.34,1.56,.64,1) 1s both;
        }
        @keyframes waNotifBounce {
          from { opacity: 0; transform: scale(0); }
          to   { opacity: 1; transform: scale(1); }
        }

        /* ── Tooltip on hover ── */
        .wa-tooltip {
          position: absolute;
          right: calc(100% + 12px);
          top: 50%;
          transform: translateY(-50%);
          background: #1A0A00;
          color: #fff;
          font-size: 13px;
          font-weight: 600;
          padding: 8px 14px;
          border-radius: 10px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transform: translateY(-50%) translateX(6px);
          transition: all 0.25s ease;
        }
        .wa-tooltip::after {
          content: '';
          position: absolute;
          left: 100%;
          top: 50%;
          transform: translateY(-50%);
          border: 6px solid transparent;
          border-left-color: #1A0A00;
        }
        .wa-btn-wrap:hover .wa-tooltip {
          opacity: 1;
          transform: translateY(-50%) translateX(0);
        }

        /* ── Entrance animation ── */
        .wa-enter {
          animation: waEnter 0.6s cubic-bezier(.34,1.56,.64,1) both;
        }
        @keyframes waEnter {
          from { opacity: 0; transform: scale(0.5) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }
        .wa-exit {
          animation: waExit 0.3s ease both;
        }
        @keyframes waExit {
          to { opacity: 0; transform: scale(0.5) translateY(20px); }
        }

        /* ── WhatsApp icon ── */
        .wa-icon {
          transition: transform 0.4s cubic-bezier(.34,1.56,.64,1);
        }
        .wa-btn:hover .wa-icon { transform: rotate(10deg) scale(1.1); }
      `}</style>

      <div className="wa-wrap">
        {/* Chat bubble */}
        {showBubble && (
          <div className="wa-bubble">
            <button className="wa-bubble-dismiss" onClick={() => setShowBubble(false)}>✕</button>
            <div className="wa-bubble-header">
              <div className="wa-bubble-avatar">👩‍🍳</div>
              <div>
                <div className="wa-bubble-name">Mom's Kitchen</div>
                <div className="wa-bubble-status">● Online now</div>
              </div>
            </div>
            <p className="wa-bubble-text">
              Namasté! 🙏 Ready to order fresh homemade meals? Chat with us on WhatsApp!
            </p>
            <button className="wa-bubble-cta" onClick={handleClick}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Start Chat
            </button>
          </div>
        )}

        {/* Main FAB */}
        {visible && (
          <div className="wa-btn-wrap wa-enter" style={{ position: 'relative' }}>
            <div className="wa-tooltip">Chat on WhatsApp</div>
            <button className="wa-btn" onClick={handleClick} aria-label="Chat on WhatsApp">
              {/* Pulse rings */}
              <span className="wa-ring" />
              <span className="wa-ring wa-ring-2" />
              <span className="wa-ring wa-ring-3" />

              {/* Notification dot */}
              <span className="wa-notif">1</span>

              {/* Icon */}
              <span className="wa-icon">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="white">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
              </span>
            </button>
          </div>
        )}
      </div>
    </>
  );
}