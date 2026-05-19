'use client';

import React, { useEffect, useRef, useState } from 'react';

/* ─── Delivery Areas ─────────────────────────────────────── */
const AREAS = [
  { name: 'JLT', note: 'Hub · 15 km radius', hub: true },
  { name: 'Business Bay',       note: 'Daily delivery' },
  { name: 'Al Barsha South',    note: 'Daily delivery' },
  { name: 'Internet City',      note: 'Daily delivery' },
  { name: 'Satwa',              note: 'Daily delivery' },
  { name: 'Media City',         note: 'Daily delivery' },
  { name: 'JBR',                note: 'Daily delivery' },
  { name: 'Al Safa',            note: 'Daily delivery' },
  { name: 'Greens',             note: 'Daily delivery' },
  { name: 'Barsha Heights',     note: 'Daily delivery' },
  { name: 'Marina',             note: 'Daily delivery' },
  { name: 'JVC',                note: 'Daily delivery' },
  { name: 'Discovery Garden',   note: 'Daily delivery' },
  { name: 'Jumeirah Village Triangle', note: 'Daily delivery' },
];

/* ─── Process Steps ──────────────────────────────────────── */
const STEPS = [
  {
    id: 1, icon: '🧺', label: 'Fresh Sourcing',
    desc: 'Ingredients sourced fresh every morning',
    color: '#2D6A4F', light: '#E8F5EE',
    anim: 'basket',
  },
  {
    id: 2, icon: '🔥', label: 'Commercial Kitchen',
    desc: 'Prepared by Hema with love & no preservatives',
    color: '#FF6B2C', light: '#FFF0E8',
    anim: 'flame',
  },
  {
    id: 3, icon: '🥘', label: 'Careful Packing',
    desc: 'Hygienically packed, hot & fresh',
    color: '#C0392B', light: '#FDECEA',
    anim: 'pot',
  },
  {
    id: 4, icon: '📦', label: 'Quality Check',
    desc: 'Every tiffin checked before dispatch',
    color: '#F5A623', light: '#FFF8E8',
    anim: 'check',
  },
  {
    id: 5, icon: '🛵', label: 'Out for Delivery',
    desc: 'Dispatched to your door on time',
    color: '#1565C0', light: '#E8F0FE',
    anim: 'bike',
  },
  {
    id: 6, icon: '🏠', label: 'Delivered!',
    desc: 'Ghar ka khana at your doorstep',
    color: '#6A1B9A', light: '#F3E5F5',
    anim: 'home',
  },
];

/* ─── Animated SVG Icons ─────────────────────────────────── */
function AnimBasket() {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 44, height: 44 }}>
      <style>{`
        @keyframes basketBounce { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-4px)} }
        .basket-g { animation: basketBounce 1.6s ease-in-out infinite; }
      `}</style>
      <g className="basket-g">
        <path d="M12 28h36l-4 18H16L12 28z" fill="#2D6A4F" opacity=".9"/>
        <path d="M8 28h44" stroke="#2D6A4F" strokeWidth="3" strokeLinecap="round"/>
        <path d="M20 28c0-5.5 4.5-10 10-10s10 4.5 10 10" stroke="#2D6A4F" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <circle cx="22" cy="20" r="2" fill="#F5A623"/>
        <circle cx="30" cy="17" r="2" fill="#FF6B2C"/>
        <circle cx="38" cy="20" r="2" fill="#2D6A4F"/>
      </g>
    </svg>
  );
}

function AnimFlame() {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 44, height: 44 }}>
      <style>{`
        @keyframes flameDance {
          0%,100%{transform:scaleY(1) scaleX(1)}
          25%{transform:scaleY(1.12) scaleX(0.92)}
          75%{transform:scaleY(0.95) scaleX(1.06)}
        }
        @keyframes flameGlow {
          0%,100%{opacity:0.6} 50%{opacity:1}
        }
        .flame-main { animation: flameDance 0.8s ease-in-out infinite; transform-origin: 50% 90%; }
        .flame-glow { animation: flameGlow 0.8s ease-in-out infinite; }
      `}</style>
      <g className="flame-glow">
        <ellipse cx="30" cy="48" rx="14" ry="4" fill="#FF6B2C" opacity=".25"/>
      </g>
      <g className="flame-main">
        <path d="M30 10 C22 18 14 26 14 36 C14 44 21 50 30 50 C39 50 46 44 46 36 C46 26 38 18 30 10Z" fill="url(#fg1)"/>
        <path d="M30 22 C26 28 22 32 22 38 C22 43 25.5 46 30 46 C34.5 46 38 43 38 38 C38 32 34 28 30 22Z" fill="#FFD580" opacity=".8"/>
        <path d="M30 32 C28 34 27 37 27 39 C27 41.2 28.3 43 30 43 C31.7 43 33 41.2 33 39 C33 37 32 34 30 32Z" fill="white" opacity=".6"/>
      </g>
      <defs>
        <linearGradient id="fg1" x1="30" y1="10" x2="30" y2="50" gradientUnits="userSpaceOnUse">
          <stop stopColor="#FF6B2C"/>
          <stop offset="1" stopColor="#C0392B"/>
        </linearGradient>
      </defs>
    </svg>
  );
}

function AnimPot() {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 44, height: 44 }}>
      <style>{`
        @keyframes potSteam {
          0%{transform:translateY(0) scaleX(1);opacity:0.7}
          100%{transform:translateY(-10px) scaleX(1.3);opacity:0}
        }
        .st1{animation:potSteam 1.2s ease-out infinite;}
        .st2{animation:potSteam 1.2s ease-out 0.4s infinite;}
        .st3{animation:potSteam 1.2s ease-out 0.8s infinite;}
      `}</style>
      <rect x="14" y="28" width="32" height="22" rx="8" fill="#C0392B"/>
      <ellipse cx="30" cy="28" rx="17" ry="6" fill="#E84A1A"/>
      <ellipse cx="30" cy="26" rx="13" ry="4" fill="#FF8C4A"/>
      <rect x="8" y="30" width="8" height="5" rx="2.5" fill="#8E1B0E"/>
      <rect x="44" y="30" width="8" height="5" rx="2.5" fill="#8E1B0E"/>
      <rect x="22" y="18" width="16" height="12" rx="5" fill="#E84A1A" opacity=".4"/>
      <path className="st1" d="M24 18 Q22 12 24 8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path className="st2" d="M30 16 Q28 10 30 6" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
      <path className="st3" d="M36 18 Q34 12 36 8" stroke="white" strokeWidth="2" fill="none" strokeLinecap="round"/>
    </svg>
  );
}

function AnimCheck() {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 44, height: 44 }}>
      <style>{`
        @keyframes checkPop {
          0%,100%{transform:scale(1)} 40%{transform:scale(1.15)} 70%{transform:scale(0.95)}
        }
        @keyframes checkDraw {
          from{stroke-dashoffset:30} to{stroke-dashoffset:0}
        }
        .check-circle{animation:checkPop 1.8s ease-in-out infinite;}
        .check-mark{stroke-dasharray:30;animation:checkDraw 0.6s ease-out 0.2s both,checkPop 1.8s ease-in-out 0.2s infinite;}
      `}</style>
      <circle className="check-circle" cx="30" cy="30" r="20" fill="#F5A623" opacity=".18"/>
      <circle cx="30" cy="30" r="16" fill="#F5A623"/>
      <path className="check-mark" d="M20 30 L27 38 L40 22" stroke="white" strokeWidth="3.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );
}

function AnimBike() {
  return (
    <svg viewBox="0 0 80 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 56, height: 44 }}>
      <style>{`
        @keyframes bikeRoll {
          0%,100%{transform:translateY(0) rotate(0deg)} 25%{transform:translateY(-2px) rotate(-1deg)} 75%{transform:translateY(-1px) rotate(0.5deg)}
        }
        @keyframes wheelSpin { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
        .bike-body{animation:bikeRoll 0.7s ease-in-out infinite;}
        .wheel-l{transform-origin:18px 44px;animation:wheelSpin 0.5s linear infinite;}
        .wheel-r{transform-origin:62px 44px;animation:wheelSpin 0.5s linear infinite;}
        @keyframes roadLines {
          from{transform:translateX(0)} to{transform:translateX(-40px)}
        }
        .road-line{animation:roadLines 0.4s linear infinite;}
      `}</style>
      {/* Road lines */}
      <g className="road-line">
        <rect x="5"  y="52" width="14" height="2" rx="1" fill="#DDD" opacity=".5"/>
        <rect x="30" y="52" width="14" height="2" rx="1" fill="#DDD" opacity=".5"/>
        <rect x="55" y="52" width="14" height="2" rx="1" fill="#DDD" opacity=".5"/>
      </g>
      {/* Bike */}
      <g className="bike-body">
        {/* Wheels */}
        <g className="wheel-l"><circle cx="18" cy="44" r="10" stroke="#1565C0" strokeWidth="3" fill="none"/><circle cx="18" cy="44" r="3" fill="#1565C0"/></g>
        <g className="wheel-r"><circle cx="62" cy="44" r="10" stroke="#1565C0" strokeWidth="3" fill="none"/><circle cx="62" cy="44" r="3" fill="#1565C0"/></g>
        {/* Frame */}
        <path d="M18 44 L30 20 L50 20 L62 44" stroke="#1565C0" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M30 20 L38 44" stroke="#1565C0" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M38 44 L62 44" stroke="#1565C0" strokeWidth="2" fill="none" strokeLinecap="round"/>
        {/* Rider */}
        <circle cx="32" cy="14" r="6" fill="#FF6B2C"/>
        <path d="M26 20 Q28 30 38 30 Q48 30 50 22" stroke="#FF6B2C" strokeWidth="3" fill="none" strokeLinecap="round"/>
        {/* Tiffin box */}
        <rect x="50" y="15" width="14" height="10" rx="3" fill="#F5A623"/>
        <rect x="50" y="13" width="14" height="4" rx="2" fill="#E8A020"/>
      </g>
    </svg>
  );
}

function AnimHome() {
  return (
    <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 44, height: 44 }}>
      <style>{`
        @keyframes homeGlow {
          0%,100%{filter:drop-shadow(0 0 0px #6A1B9A)} 50%{filter:drop-shadow(0 0 8px #6A1B9A88)}
        }
        @keyframes doorOpen {
          0%,60%,100%{transform:scaleX(1)} 70%,90%{transform:scaleX(0.4)}
        }
        .home-g{animation:homeGlow 2s ease-in-out infinite;}
        .door{transform-origin:25px 50px;animation:doorOpen 3s ease-in-out infinite;}
      `}</style>
      <g className="home-g">
        <path d="M8 28 L30 10 L52 28" fill="#6A1B9A" opacity=".9"/>
        <rect x="12" y="28" width="36" height="22" rx="3" fill="#7B1FA2"/>
        <rect x="21" y="18" width="18" height="12" rx="2" fill="#9C27B0" opacity=".4"/>
        <g className="door">
          <rect x="23" y="36" width="14" height="14" rx="2" fill="#4A0072"/>
          <circle cx="35" cy="43" r="1.5" fill="#F5A623"/>
        </g>
        <rect x="14" y="32" width="10" height="8" rx="2" fill="#CE93D8" opacity=".5"/>
        <rect x="36" y="32" width="10" height="8" rx="2" fill="#CE93D8" opacity=".5"/>
        {/* Tiffin at door */}
        <rect x="18" y="47" width="8" height="6" rx="1.5" fill="#F5A623" opacity=".9"/>
        <rect x="18" y="45" width="8" height="3" rx="1.5" fill="#E8A020" opacity=".9"/>
      </g>
    </svg>
  );
}

const ANIM_MAP: Record<string, React.ReactNode> = {
  basket: <AnimBasket />,
  flame:  <AnimFlame />,
  pot:    <AnimPot />,
  check:  <AnimCheck />,
  bike:   <AnimBike />,
  home:   <AnimHome />,
};

/* ─── Main Component ─────────────────────────────────────── */
export default function DeliverySection() {
  const sectionRef  = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVisible(true); },
      { threshold: 0.05 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  // Auto-advance steps
  useEffect(() => {
    if (!visible) return;
    const t = setInterval(() => setActiveStep(s => (s + 1) % STEPS.length), 1800);
    return () => clearInterval(t);
  }, [visible]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;0,800;1,700&family=DM+Sans:wght@400;500;600;700&display=swap');

        .ds-section {
          font-family: 'DM Sans', sans-serif;
          background: linear-gradient(175deg, #FFFDF8 0%, #FFF8F0 40%, #FFFDF8 100%);
          position: relative; overflow: hidden;
          padding: 88px 0 100px;
        }
        .ds-bg-dots {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image: radial-gradient(circle, rgba(255,107,44,0.06) 1.5px, transparent 1.5px);
          background-size: 28px 28px;
        }
        .ds-blob {
          position: absolute; border-radius: 50%;
          filter: blur(100px); pointer-events: none; z-index: 0;
        }
        .ds-container {
          max-width: 1200px; margin: 0 auto; padding: 0 20px;
          position: relative; z-index: 2;
        }

        /* ── Section header ── */
        .ds-section-tag {
          display: inline-flex; align-items: center; gap: 6px;
          background: rgba(255,107,44,0.1); border: 1px solid rgba(255,107,44,0.25);
          border-radius: 50px; padding: 5px 16px;
          font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase;
          color: #FF6B2C; margin-bottom: 14px;
        }
        .ds-section-title {
          font-family: 'Playfair Display', serif;
          font-size: clamp(28px, 5vw, 48px); font-weight: 800;
          color: #1A0A00; line-height: 1.1; margin: 0 0 10px;
        }
        .ds-section-title em { color: #FF6B2C; font-style: italic; }
        .ds-section-sub { font-size: 14px; color: #9B7B6A; font-weight: 500; }

        /* ── Process animation section ── */
        .ds-process {
          margin-bottom: 72px;
        }
        .ds-process-header { margin-bottom: 36px; }

        /* Running track */
        .ds-track-wrap {
          position: relative;
          background: #fff;
          border-radius: 24px;
          border: 1px solid rgba(255,107,44,0.12);
          box-shadow: 0 8px 40px rgba(26,10,0,0.06);
          padding: 32px 28px 28px;
          overflow: hidden;
        }
        /* Animated background gradient */
        .ds-track-bg {
          position: absolute; inset: 0;
          background: linear-gradient(90deg,
            rgba(45,106,79,0.04) 0%,
            rgba(255,107,44,0.04) 30%,
            rgba(192,57,43,0.04) 50%,
            rgba(245,166,35,0.04) 70%,
            rgba(21,101,192,0.04) 85%,
            rgba(106,27,154,0.04) 100%
          );
          background-size: 200% 100%;
          animation: dsTrackFlow 4s linear infinite;
        }
        @keyframes dsTrackFlow {
          from{background-position:0% 0%} to{background-position:-200% 0%}
        }

        /* Steps rail */
        .ds-steps-rail {
          display: flex; align-items: flex-start;
          gap: 0; position: relative; z-index: 1;
        }
        /* Connector line */
        .ds-steps-rail::before {
          content: '';
          position: absolute; top: 36px; left: 36px; right: 36px; height: 3px;
          background: linear-gradient(90deg, #2D6A4F, #FF6B2C, #C0392B, #F5A623, #1565C0, #6A1B9A);
          border-radius: 2px; z-index: 0;
          background-size: 200% 100%;
          animation: dsConnectorFlow 3s linear infinite;
        }
        @keyframes dsConnectorFlow {
          from{background-position:0% 0%} to{background-position:-200% 0%}
        }

        .ds-step {
          flex: 1; display: flex; flex-direction: column; align-items: center;
          gap: 10px; position: relative; z-index: 1; cursor: pointer;
          transition: transform 0.3s cubic-bezier(.34,1.56,.64,1);
        }
        .ds-step:hover { transform: translateY(-4px); }

        .ds-step-icon-wrap {
          width: 72px; height: 72px; border-radius: 20px;
          display: flex; align-items: center; justify-content: center;
          position: relative; transition: all 0.35s cubic-bezier(.34,1.56,.64,1);
          border: 2px solid transparent;
        }
        .ds-step-icon-wrap.active {
          transform: scale(1.18);
          box-shadow: 0 8px 28px rgba(0,0,0,0.14);
        }

        .ds-step-num {
          position: absolute; top: -8px; right: -8px;
          width: 20px; height: 20px; border-radius: 50%;
          font-size: 9px; font-weight: 900; color: #fff;
          display: flex; align-items: center; justify-content: center;
          border: 2px solid #fff;
          box-shadow: 0 2px 6px rgba(0,0,0,0.18);
        }

        .ds-step-label {
          font-size: 11px; font-weight: 700; color: #1A0A00; text-align: center;
          line-height: 1.3; letter-spacing: 0.2px;
          transition: color 0.3s;
        }
        .ds-step-label.active { font-size: 12px; }

        /* Active step detail card */
        .ds-active-detail {
          margin-top: 24px; padding: 18px 22px;
          border-radius: 16px; border: 1.5px solid;
          display: flex; align-items: center; gap: 16px;
          transition: all 0.4s cubic-bezier(.16,1,.3,1);
          position: relative; z-index: 1;
          animation: dsDetailIn 0.4s cubic-bezier(.16,1,.3,1) both;
        }
        @keyframes dsDetailIn {
          from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)}
        }
        .ds-active-detail-icon { font-size: 28px; flex-shrink: 0; }
        .ds-active-detail-step {
          font-size: 10px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; opacity: 0.6; margin-bottom: 2px;
        }
        .ds-active-detail-title {
          font-family: 'Playfair Display', serif;
          font-size: 18px; font-weight: 800; color: #1A0A00; margin-bottom: 3px;
        }
        .ds-active-detail-desc { font-size: 13px; color: #6B5344; line-height: 1.5; }

        /* Progress dots */
        .ds-progress-dots {
          display: flex; gap: 6px; justify-content: center; margin-top: 20px;
          position: relative; z-index: 1;
        }
        .ds-progress-dot {
          height: 5px; border-radius: 3px;
          transition: all 0.35s cubic-bezier(.34,1.56,.64,1);
          cursor: pointer;
        }

        /* ── Delivery areas section ── */
        .ds-delivery { }
        .ds-delivery-header { margin-bottom: 32px; }

        /* HUB card */
        .ds-hub-card {
          background: linear-gradient(135deg, #1565C0, #1976D2);
          border-radius: 22px; padding: 28px 32px;
          display: flex; align-items: center; gap: 24px;
          box-shadow: 0 12px 40px rgba(21,101,192,0.28);
          margin-bottom: 20px; position: relative; overflow: hidden;
        }
        .ds-hub-card::before {
          content: '';
          position: absolute; width: 200px; height: 200px; border-radius: 50%;
          background: rgba(255,255,255,0.07);
          top: -60px; right: -40px;
        }
        .ds-hub-card::after {
          content: '';
          position: absolute; width: 120px; height: 120px; border-radius: 50%;
          background: rgba(255,255,255,0.05);
          bottom: -30px; left: 120px;
        }
        .ds-hub-icon {
          width: 64px; height: 64px; border-radius: 18px;
          background: rgba(255,255,255,0.15);
          display: flex; align-items: center; justify-content: center;
          font-size: 28px; flex-shrink: 0; position: relative; z-index: 1;
          border: 1.5px solid rgba(255,255,255,0.2);
          animation: hubPulse 2.5s ease-in-out infinite;
        }
        @keyframes hubPulse {
          0%,100%{box-shadow:0 0 0 0 rgba(255,255,255,0.15)}
          50%{box-shadow:0 0 0 10px rgba(255,255,255,0)}
        }
        .ds-hub-info { position: relative; z-index: 1; }
        .ds-hub-badge {
          display: inline-block; background: rgba(255,255,255,0.2);
          border-radius: 50px; padding: 3px 12px;
          font-size: 10px; font-weight: 800; color: rgba(255,255,255,0.9);
          letter-spacing: 1.5px; text-transform: uppercase; margin-bottom: 8px;
          border: 1px solid rgba(255,255,255,0.25);
        }
        .ds-hub-name { font-family: 'Playfair Display', serif; font-size: 26px; font-weight: 800; color: #fff; margin-bottom: 4px; }
        .ds-hub-desc { font-size: 13px; color: rgba(255,255,255,0.8); font-weight: 500; }
        .ds-hub-radius {
          margin-left: auto; position: relative; z-index: 1;
          text-align: center; flex-shrink: 0;
        }
        .ds-hub-radius-num {
          font-family: 'Playfair Display', serif; font-size: 36px; font-weight: 800; color: #fff; line-height: 1;
        }
        .ds-hub-radius-label { font-size: 11px; color: rgba(255,255,255,0.75); font-weight: 600; letter-spacing: 1px; }

        /* Ripple animation for hub */
        .ds-hub-ripple {
          position: relative; display: inline-block;
        }
        .ds-hub-ripple::before, .ds-hub-ripple::after {
          content: '';
          position: absolute; inset: -10px; border-radius: 50%;
          border: 2px solid rgba(255,255,255,0.2);
          animation: rippleOut 2s ease-out infinite;
        }
        .ds-hub-ripple::after { animation-delay: 1s; }
        @keyframes rippleOut {
          0%{transform:scale(0.6);opacity:1} 100%{transform:scale(1.4);opacity:0}
        }

        /* Areas grid */
        .ds-areas-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 12px;
          margin-bottom: 24px;
        }
        @media(max-width:900px){ .ds-areas-grid{grid-template-columns:repeat(3,1fr);} }
        @media(max-width:600px){ .ds-areas-grid{grid-template-columns:repeat(2,1fr);} }

        .ds-area-card {
          background: #fff; border-radius: 14px; padding: 14px 16px;
          border: 1.5px solid #FFF0E8;
          display: flex; align-items: center; gap: 10px;
          transition: all 0.25s cubic-bezier(.34,1.56,.64,1);
          cursor: default; position: relative; overflow: hidden;
        }
        .ds-area-card::before {
          content: '';
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(255,107,44,0.06), transparent);
          opacity: 0; transition: opacity 0.25s;
        }
        .ds-area-card:hover { transform: translateY(-3px); border-color: rgba(255,107,44,0.35); box-shadow: 0 6px 20px rgba(255,107,44,0.1); }
        .ds-area-card:hover::before { opacity: 1; }
        .ds-area-dot { width: 8px; height: 8px; border-radius: 50%; background: #FF6B2C; flex-shrink: 0; }
        .ds-area-name { font-size: 13px; font-weight: 700; color: #1A0A00; }

        /* Bulk/catering banner */
        .ds-bulk-banner {
          background: linear-gradient(135deg, #FF6B2C, #FFB347);
          border-radius: 20px; padding: 24px 28px;
          display: flex; align-items: center; gap: 20px;
          box-shadow: 0 10px 36px rgba(255,107,44,0.28);
          position: relative; overflow: hidden;
        }
        .ds-bulk-banner::before {
          content: '';
          position: absolute; width: 180px; height: 180px; border-radius: 50%;
          background: rgba(255,255,255,0.08); top: -60px; right: 60px;
        }
        .ds-bulk-icon {
          width: 56px; height: 56px; border-radius: 16px;
          background: rgba(255,255,255,0.2);
          display: flex; align-items: center; justify-content: center;
          font-size: 24px; flex-shrink: 0; position: relative; z-index: 1;
          border: 1.5px solid rgba(255,255,255,0.3);
        }
        .ds-bulk-info { position: relative; z-index: 1; }
        .ds-bulk-label {
          font-size: 10px; font-weight: 800; color: rgba(255,255,255,0.85);
          letter-spacing: 2px; text-transform: uppercase; margin-bottom: 5px;
        }
        .ds-bulk-title {
          font-family: 'Playfair Display', serif;
          font-size: 20px; font-weight: 800; color: #fff; margin-bottom: 4px;
        }
        .ds-bulk-desc { font-size: 13px; color: rgba(255,255,255,0.85); font-weight: 500; }
        .ds-bulk-cta {
          margin-left: auto; position: relative; z-index: 1; flex-shrink: 0;
          background: #fff; color: #FF6B2C; border: none; border-radius: 50px;
          padding: 11px 22px; font-family: 'DM Sans', sans-serif;
          font-size: 13px; font-weight: 800; cursor: pointer;
          box-shadow: 0 4px 14px rgba(0,0,0,0.1);
          transition: all 0.2s; white-space: nowrap;
          text-decoration: none; display: inline-block;
        }
        .ds-bulk-cta:hover { transform: scale(1.04); box-shadow: 0 6px 18px rgba(0,0,0,0.14); }

        /* Reveal */
        .ds-reveal { opacity:0; transform:translateY(28px); transition:opacity 0.7s cubic-bezier(.16,1,.3,1),transform 0.7s cubic-bezier(.16,1,.3,1); }
        .ds-reveal.visible { opacity:1; transform:translateY(0); }
        .ds-reveal.d1{transition-delay:0.08s} .ds-reveal.d2{transition-delay:0.16s}
        .ds-reveal.d3{transition-delay:0.24s} .ds-reveal.d4{transition-delay:0.32s}
        .ds-reveal.d5{transition-delay:0.40s} .ds-reveal.d6{transition-delay:0.48s}

        @media(max-width:680px){
          .ds-hub-card{flex-wrap:wrap;gap:16px;}
          .ds-hub-radius{margin-left:0;}
          .ds-steps-rail{flex-wrap:wrap;gap:16px;}
          .ds-steps-rail::before{display:none;}
          .ds-bulk-banner{flex-wrap:wrap;}
          .ds-bulk-cta{margin-left:0;}
          .ds-step{flex:0 0 calc(33% - 12px);}
        }
        @media(max-width:420px){
          .ds-step{flex:0 0 calc(50% - 8px);}
        }
      `}</style>

      <section id="delivery" ref={sectionRef} className="ds-section">
        <div className="ds-bg-dots" />
        <div className="ds-blob" style={{ width:400, height:400, background:'#FFD580', top:-100, right:-120, opacity:0.1 }} />
        <div className="ds-blob" style={{ width:300, height:300, background:'#FF9F6B', bottom:-80, left:-80, opacity:0.09 }} />

        <div className="ds-container">

          {/* ══════════════════════════════════
              PROCESS ANIMATION
          ══════════════════════════════════ */}
          <div className={`ds-process ds-reveal d1${visible ? ' visible' : ''}`}>
            <div className="ds-process-header">
              <div className="ds-section-tag">
                <span style={{ width:6, height:6, borderRadius:'50%', background:'#FF6B2C', display:'inline-block' }} />
                From Kitchen to Doorstep
              </div>
              <h2 className="ds-section-title">How Your <em>Tiffin Travels</em></h2>
              <p className="ds-section-sub">Every step, crafted with love — watch the journey live</p>
            </div>

            <div className="ds-track-wrap">
              <div className="ds-track-bg" />

              {/* Steps */}
              <div className="ds-steps-rail">
                {STEPS.map((step, i) => {
                  const isActive = i === activeStep;
                  return (
                    <div
                      key={step.id}
                      className="ds-step"
                      onClick={() => setActiveStep(i)}
                    >
                      <div
                        className={`ds-step-icon-wrap${isActive ? ' active' : ''}`}
                        style={{
                          background: isActive ? step.light : '#F8F4F0',
                          borderColor: isActive ? step.color + '55' : 'transparent',
                        }}
                      >
                        {ANIM_MAP[step.anim]}
                        <div
                          className="ds-step-num"
                          style={{ background: step.color }}
                        >
                          {step.id}
                        </div>
                      </div>
                      <div
                        className={`ds-step-label${isActive ? ' active' : ''}`}
                        style={{ color: isActive ? step.color : '#6B5344' }}
                      >
                        {step.label}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Active detail */}
              {(() => {
                const s = STEPS[activeStep];
                return (
                  <div
                    key={activeStep}
                    className="ds-active-detail"
                    style={{ background: s.light, borderColor: s.color + '44' }}
                  >
                    <div className="ds-active-detail-icon">{s.icon}</div>
                    <div>
                      <div className="ds-active-detail-step" style={{ color: s.color }}>
                        Step {s.id} of {STEPS.length}
                      </div>
                      <div className="ds-active-detail-title">{s.label}</div>
                      <div className="ds-active-detail-desc">{s.desc}</div>
                    </div>
                    {/* Animated progress bar */}
                    <div style={{ marginLeft:'auto', display:'flex', flexDirection:'column', alignItems:'center', gap:6, flexShrink:0 }}>
                      <div style={{ width:56, height:56, borderRadius:'50%', border:`3px solid ${s.color}22`, position:'relative', display:'flex', alignItems:'center', justifyContent:'center' }}>
                        <svg viewBox="0 0 56 56" width="56" height="56" style={{ position:'absolute', inset:0, transform:'rotate(-90deg)' }}>
                          <circle cx="28" cy="28" r="24" fill="none" stroke={s.color} strokeWidth="3"
                            strokeDasharray={`${((activeStep + 1) / STEPS.length) * 150.8} 150.8`}
                            strokeLinecap="round" style={{ transition:'stroke-dasharray 0.5s' }} />
                        </svg>
                        <span style={{ fontSize:11, fontWeight:800, color:s.color }}>
                          {Math.round(((activeStep + 1) / STEPS.length) * 100)}%
                        </span>
                      </div>
                      <span style={{ fontSize:9, color:'#9B7B6A', fontWeight:700, letterSpacing:1, textTransform:'uppercase' }}>Progress</span>
                    </div>
                  </div>
                );
              })()}

              {/* Dots nav */}
              <div className="ds-progress-dots">
                {STEPS.map((s, i) => (
                  <div
                    key={i}
                    className="ds-progress-dot"
                    style={{
                      background: i === activeStep ? s.color : '#E8DDD6',
                      width: i === activeStep ? 28 : 8,
                    }}
                    onClick={() => setActiveStep(i)}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ══════════════════════════════════
              DELIVERY AREAS
          ══════════════════════════════════ */}
          <div className={`ds-delivery ds-reveal d2${visible ? ' visible' : ''}`}>
            <div className="ds-delivery-header">
              <div className="ds-section-tag">
                <span style={{ width:6, height:6, borderRadius:'50%', background:'#FF6B2C', display:'inline-block' }} />
                Where We Deliver
              </div>
              <h2 className="ds-section-title">Our <em>Delivery Areas</em></h2>
              <p className="ds-section-sub">Serving daily tiffins across Dubai's key neighbourhoods</p>
            </div>

            {/* Hub card — JLT */}
            <div className={`ds-hub-card ds-reveal d3${visible ? ' visible' : ''}`}>
              <div className="ds-hub-icon">
                <div className="ds-hub-ripple">📍</div>
              </div>
              <div className="ds-hub-info">
                <div className="ds-hub-badge">🏠 Central Hub</div>
                <div className="ds-hub-name">JLT — Jumeirah Lake Towers</div>
                <div className="ds-hub-desc">Our kitchen base · Widest coverage · Fastest delivery</div>
              </div>
              <div className="ds-hub-radius">
                <div className="ds-hub-radius-num">15 km</div>
                <div className="ds-hub-radius-label">Delivery Radius</div>
              </div>
            </div>

            {/* Areas grid */}
            <div className="ds-areas-grid">
              {AREAS.filter(a => !a.hub).map((area, i) => (
                <div
                  key={area.name}
                  className={`ds-area-card ds-reveal d${Math.min(i + 3, 6)}${visible ? ' visible' : ''}`}
                >
                  <div className="ds-area-dot" style={{ animationDelay: `${i * 0.1}s` }} />
                  <div>
                    <div className="ds-area-name">{area.name}</div>
                    <div style={{ fontSize:10, color:'#9B7B6A', fontWeight:600, marginTop:1 }}>{area.note}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bulk / Catering banner */}
            <div className={`ds-bulk-banner ds-reveal d4${visible ? ' visible' : ''}`}>
              <div className="ds-bulk-icon">🍽️</div>
              <div className="ds-bulk-info">
                <div className="ds-bulk-label">Bulk & Corporate Catering</div>
                <div className="ds-bulk-title">All Over Dubai</div>
                <div className="ds-bulk-desc">For bulk orders, events & corporate catering — we deliver anywhere across Dubai. No location too far!</div>
              </div>
              <a
                href={`https://wa.me/971557998925?text=${encodeURIComponent('👋 Hi! I\'m interested in bulk/catering order for The Chef Mom. Please share details.')}`}
                target="_blank" rel="noreferrer"
                className="ds-bulk-cta"
              >
                Enquire on WhatsApp →
              </a>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}