










'use client';

import React, { useState, useEffect } from 'react';

const WHATSAPP_NUMBER = '+971557998925';
const WHATSAPP_MESSAGE =
  'Hello The Chef Mom! 🍽️ I\'d like to place an order / subscribe to a meal plan. Please share the available plans and next steps. Thank you! 🙏';

export default function FloatingWhatsApp() {
  const [visible, setVisible] = useState(false);
  const [showBubble, setShowBubble] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 200);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 4000);
    return () => clearTimeout(t);
  }, []);

  const handleClick = () => {
    setShowBubble(false);
    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(WHATSAPP_MESSAGE)}`,
      '_blank'
    );
  };

  // ... rest of your component stays exactly the same

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600&display=swap');

        /* ── Wrapper ── */
        .wa-wrap {
          position: fixed;
          bottom: 20px;
          right: 16px;
          z-index: 9999;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
          gap: 10px;
          font-family: 'DM Sans', sans-serif;
        }

        /* ── Chat bubble ── */
        .wa-bubble {
          background: #fff;
          border-radius: 18px 18px 4px 18px;
          padding: 14px 16px;
          box-shadow: 0 8px 40px rgba(0,0,0,0.14);
          width: min(220px, calc(100vw - 80px));
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
          width: 30px; height: 30px;
          border-radius: 50%;
          background: linear-gradient(135deg,#25D366,#128C7E);
          display: flex; align-items: center; justify-content: center;
          font-size: 15px;
          flex-shrink: 0;
        }
        .wa-bubble-name {
          font-size: 12px;
          font-weight: 700;
          color: #1A0A00;
          line-height: 1.1;
        }
        .wa-bubble-status {
          font-size: 10px;
          color: #25D366;
          font-weight: 500;
        }
        .wa-bubble-text {
          font-size: 12px;
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
          padding: 7px 14px;
          border-radius: 50px;
          border: none;
          cursor: pointer;
          transition: all 0.3s ease;
          width: 100%;
          justify-content: center;
          font-family: 'DM Sans', sans-serif;
        }
        .wa-bubble-cta:hover {
          background: #1da851;
          transform: translateY(-1px);
          box-shadow: 0 6px 20px rgba(37,211,102,0.4);
        }
        .wa-bubble-dismiss {
          position: absolute;
          top: 8px; right: 8px;
          width: 20px; height: 20px;
          border-radius: 50%;
          background: rgba(0,0,0,0.06);
          border: none;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          font-size: 11px;
          color: #999;
          transition: background 0.2s;
          line-height: 1;
          padding: 0;
        }
        .wa-bubble-dismiss:hover { background: rgba(0,0,0,0.14); color: #555; }

        /* ── Main FAB button ── */
        .wa-btn-wrap {
          position: relative;
        }
        .wa-btn {
          width: 56px; height: 56px;
          border-radius: 50%;
          background: linear-gradient(135deg, #25D366, #128C7E);
          border: none;
          cursor: pointer;
          display: flex; align-items: center; justify-content: center;
          position: relative;
          transition: transform 0.4s cubic-bezier(.34,1.56,.64,1), box-shadow 0.3s ease;
          box-shadow: 0 8px 32px rgba(37,211,102,0.45);
        }
        .wa-btn:hover {
          transform: scale(1.12) rotate(-5deg);
          box-shadow: 0 16px 48px rgba(37,211,102,0.55);
        }
        .wa-btn:active { transform: scale(0.94); }

        /* ── Pulse rings ── */
        .wa-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 2px solid rgba(37,211,102,0.5);
          animation: waRingPulse 2.5s ease-out infinite;
          pointer-events: none;
        }
        .wa-ring-2 { animation-delay: 0.8s; }
        .wa-ring-3 { animation-delay: 1.6s; }
        @keyframes waRingPulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(2.2); opacity: 0;   }
        }

        /* ── Notification dot ── */
        .wa-notif {
          position: absolute;
          top: 1px; right: 1px;
          width: 16px; height: 16px;
          background: #FF6B2C;
          border-radius: 50%;
          border: 2px solid #fff;
          display: flex; align-items: center; justify-content: center;
          font-size: 9px;
          font-weight: 700;
          color: #fff;
          animation: waNotifBounce 1s cubic-bezier(.34,1.56,.64,1) 1s both;
          font-family: 'DM Sans', sans-serif;
        }
        @keyframes waNotifBounce {
          from { opacity: 0; transform: scale(0); }
          to   { opacity: 1; transform: scale(1); }
        }

        /* ── Tooltip (desktop only) ── */
        .wa-tooltip {
          position: absolute;
          right: calc(100% + 12px);
          top: 50%;
          background: #1A0A00;
          color: #fff;
          font-size: 12px;
          font-weight: 600;
          padding: 7px 13px;
          border-radius: 10px;
          white-space: nowrap;
          pointer-events: none;
          opacity: 0;
          transform: translateY(-50%) translateX(6px);
          transition: all 0.25s ease;
          font-family: 'DM Sans', sans-serif;
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
        .wa-btn-wrap:hover .wa-tooltip { opacity: 1; transform: translateY(-50%) translateX(0); }

        /* ── Enter animation ── */
        .wa-enter {
          animation: waEnter 0.6s cubic-bezier(.34,1.56,.64,1) both;
        }
        @keyframes waEnter {
          from { opacity: 0; transform: scale(0.5) translateY(20px); }
          to   { opacity: 1; transform: scale(1) translateY(0); }
        }

        /* ── Icon ── */
        .wa-icon { transition: transform 0.4s cubic-bezier(.34,1.56,.64,1); }
        .wa-btn:hover .wa-icon { transform: rotate(10deg) scale(1.1); }

        /* ══════════════════════
           RESPONSIVE
        ══════════════════════ */

        /* XS / very small: tighten position */
        @media (max-width: 360px) {
          .wa-wrap { bottom: 14px; right: 12px; gap: 8px; }
          .wa-btn { width: 50px; height: 50px; }
          .wa-bubble { padding: 12px 12px; }
          .wa-tooltip { display: none; }
        }

        /* SM phones */
        @media (min-width: 361px) and (max-width: 559px) {
          .wa-wrap { bottom: 18px; right: 14px; }
          .wa-btn { width: 54px; height: 54px; }
          .wa-tooltip { display: none; }
        }

        /* Tablet */
        @media (min-width: 560px) and (max-width: 899px) {
          .wa-wrap { bottom: 24px; right: 20px; }
          .wa-tooltip { display: none; }
        }

        /* Desktop */
        @media (min-width: 900px) {
          .wa-wrap { bottom: 28px; right: 28px; }
          .wa-btn { width: 60px; height: 60px; }
        }
      `}</style>

      <div className="wa-wrap">
        {/* Chat bubble */}
        {showBubble && (
          <div className="wa-bubble">
            <button className="wa-bubble-dismiss" onClick={() => setShowBubble(false)}>✕</button>
            <div className="wa-bubble-header">
              <div className="wa-bubble-avatar">👩‍🍳</div>
              <div>
                <div className="wa-bubble-name">The Chef Mom</div>
                <div className="wa-bubble-status">● Online now</div>
              </div>
            </div>
            <p className="wa-bubble-text">
              Namasté! 🙏 Ready to order fresh homemade meals? Chat with us on WhatsApp!
            </p>
            <button className="wa-bubble-cta" onClick={handleClick}>
              <svg width="13" height="13" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Start Chat
            </button>
          </div>
        )}

        {/* Main FAB */}
        {visible && (
          <div className="wa-btn-wrap wa-enter">
            <div className="wa-tooltip">Chat on WhatsApp</div>
            <button className="wa-btn" onClick={handleClick} aria-label="Chat on WhatsApp">
              <span className="wa-ring" />
              <span className="wa-ring wa-ring-2" />
              <span className="wa-ring wa-ring-3" />
              <span className="wa-notif">1</span>
              <span className="wa-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="white">
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