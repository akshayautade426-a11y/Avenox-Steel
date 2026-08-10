import React from "react";

export default function AnimatedLogo({ size = 80 }: { size?: number }) {
  const width = Math.min(Math.max(size, 48), 400);
  return (
    <div className="avenox-logo-wrapper" style={{ width }}>
      <svg
        className="avenox-logo-svg"
        viewBox="0 0 1000 500"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Avenox Steel animated logo"
      >
        <defs>
          <linearGradient id="orangeMetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FF6B00" />
            <stop offset="50%" stopColor="#D03000" />
            <stop offset="100%" stopColor="#801000" />
          </linearGradient>

          <linearGradient id="silverMetal" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFFFFF" />
            <stop offset="50%" stopColor="#A6A6A6" />
            <stop offset="100%" stopColor="#555555" />
          </linearGradient>

          <linearGradient id="shineSweep" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.8)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>

        <g className="logo-wireframe" stroke="#888888" strokeWidth="1.5" fill="none" opacity="0.4">
          <path className="draw-line" d="M 130 380 L 130 250 L 310 250 L 310 380 Z" />
          <path className="draw-line" d="M 130 250 L 220 180 L 310 250" />
          <path className="draw-line" d="M 160 380 L 160 270 M 200 380 L 200 270 M 240 380 L 240 270 M 280 380 L 280 270" />
        </g>

        <g className="logo-ibeam" fill="url(#silverMetal)" stroke="#333" strokeWidth="1">
          <path d="M 180 380 L 260 380 L 250 365 L 225 365 L 225 305 L 250 305 L 260 290 L 180 290 L 190 305 L 215 305 L 215 365 L 190 365 Z" />
        </g>

        <g className="logo-a-frame">
          <path d="M 210 50 L 50 420 L 120 420 L 210 200 L 300 420 L 370 420 Z" fill="url(#orangeMetal)" />
          <path className="shine-effect" d="M 210 50 L 50 420 L 120 420 L 210 200 L 300 420 L 370 420 Z" fill="url(#shineSweep)" opacity="0.6" />
        </g>

        <path className="logo-arrow" d="M 130 410 C 230 410, 350 350, 420 180 L 400 195 L 435 140 L 450 205 L 430 200 C 360 360, 230 425, 130 410 Z" fill="url(#orangeMetal)" />

        <line x1="480" y1="210" x2="480" y2="390" stroke="#D03000" strokeWidth="3" strokeLinecap="round" />

        <g className="logo-text-avenox" fontFamily="Arial Black, sans-serif" fontSize="78" fontWeight="900" letterSpacing="2">
          <text x="510" y="290" fill="url(#orangeMetal)">AVENO</text>
          <text x="865" y="290" fill="url(#silverMetal)">X</text>
        </g>

        <text x="510" y="340" fontFamily="Arial, sans-serif" fontSize="30" fontWeight="800" fill="#2A2A2A" letterSpacing="3" className="logo-text-sub">
          STEEL SERVICES LLC
        </text>

        <g className="logo-tagline" fontFamily="Arial, sans-serif" fontSize="14" fontWeight={700} fill="#D03000" letterSpacing="1">
          <line x1="510" y1="375" x2="535" y2="375" stroke="#D03000" strokeWidth="1.5" />
          <text x="545" y="380">PRECISION • EXCELLENCE • RELIABILITY</text>
          <line x1="935" y1="375" x2="960" y2="375" stroke="#D03000" strokeWidth="1.5" />
        </g>
      </svg>

      <style>{`
        .avenox-logo-wrapper { display:inline-flex; align-items:center; justify-content:center; }
        .avenox-logo-svg { width: 100%; height: auto; overflow: visible; }
        .draw-line { stroke-dasharray: 500; stroke-dashoffset: 500; animation: drawFrame 2.6s ease-in-out forwards; }
        @keyframes drawFrame { 0% { stroke-dashoffset: 500; opacity: 0.08 } 100% { stroke-dashoffset: 0; opacity: 0.45 } }
        .shine-effect { transform: translateX(-140%); animation: shineSweep 3.6s ease-in-out infinite; }
        @keyframes shineSweep { 0%,30% { transform: translateX(-150%) } 70%,100% { transform: translateX(150%) } }
        .logo-arrow { transform-origin: bottom left; animation: arrowPulse 3s ease-in-out infinite alternate; }
        @keyframes arrowPulse { 0% { transform: scale(1) } 100% { transform: scale(1.03) translate(2px, -3px) } }
        .avenox-logo-svg:hover .logo-ibeam { filter: drop-shadow(0px 4px 8px rgba(0,0,0,0.3)); transition: filter 0.28s ease; }
        .avenox-logo-svg:hover .logo-arrow { animation-duration: 1.1s; }
      `}</style>
    </div>
  );
}
