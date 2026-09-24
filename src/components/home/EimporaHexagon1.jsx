import React from "react";

function octagonPoints(cx, cy, radius) {
  return Array.from({ length: 8 })
    .map((_, i) => {
      const angle = (Math.PI / 4) * i - Math.PI / 8;
      return `${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)}`;
    })
    .join(" ");
}

export default function EimporaIntelligenceSVG({ className = "relative w-full h-[520px]  sm:h-[620px] pointer-events-none" }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 1440 760"
        preserveAspectRatio="xMidYMid meet"
        className="h-full w-full overflow-visible"
        aria-hidden="true"
      >
        <defs>
          {/* Cyan line gradient */}
          <linearGradient id="ei-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#00D4F5" stopOpacity="0" />
            <stop offset="45%" stopColor="#00D4F5" stopOpacity="0.6" />
            <stop offset="55%" stopColor="#5EEBFF" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#00D4F5" stopOpacity="0" />
          </linearGradient>

          {/* Core fill */}
          <radialGradient id="ei-core" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#21DDF8" stopOpacity="0.25" />
            <stop offset="55%" stopColor="#00BBD9" stopOpacity="0.1" />
            <stop offset="100%" stopColor="#001218" stopOpacity="0" />
          </radialGradient>

          {/* Node gradient */}
          <linearGradient id="ei-node" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#06232B" stopOpacity="0.92" />
            <stop offset="100%" stopColor="#02090D" stopOpacity="0.85" />
          </linearGradient>

          {/* 3D Isometric E Logo Gradients for AI Core */}
          <linearGradient id="eiLogoTopLeft" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F5FF" />
            <stop offset="60%" stopColor="#00D2FF" />
            <stop offset="100%" stopColor="#00A5E0" />
          </linearGradient>

          <linearGradient id="eiLogoTopRight" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00E5FF" />
            <stop offset="100%" stopColor="#008EA8" />
          </linearGradient>

          <linearGradient id="eiLogoMidTop" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00F0FF" />
            <stop offset="100%" stopColor="#00A8E8" />
          </linearGradient>

          <linearGradient id="eiLogoMidShadow" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#008EA8" />
            <stop offset="100%" stopColor="#004D63" />
          </linearGradient>

          <linearGradient id="eiLogoBottomOuter" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#00D2FF" />
            <stop offset="50%" stopColor="#0096C7" />
            <stop offset="100%" stopColor="#004356" />
          </linearGradient>

          <linearGradient id="eiLogoBottomInner" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0077B6" />
            <stop offset="100%" stopColor="#002D3A" />
          </linearGradient>

          {/* Cyan glow filter */}
          <filter id="ei-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="5" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>

          <filter id="ei-soft-glow" x="-100%" y="-100%" width="300%" height="300%">
            <feGaussianBlur stdDeviation="16" />
          </filter>

          {/* Subtle grid pattern */}
          <pattern id="ei-grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#17CFE8" strokeOpacity="0.04" strokeWidth="1" />
          </pattern>
        </defs>



        {/* Background star field */}
        <g className="ei-star-field" aria-hidden="true">
          {[
            [70, 92, 1.6, 0.55], [188, 214, 1.1, 0.4], [286, 88, 2, 0.7],

            [684, 98, 1.4, 0.5], [774, 166, 1.8, 0.6], [868, 72, 1.1, 0.4],

            [1380, 92, 1.3, 0.5], [54, 548, 1.2, 0.45], [210, 646, 1.8, 0.6],

            [828, 632, 1.7, 0.55], [934, 586, 1.1, 0.4], [1108, 674, 1.5, 0.5],

            [1326, 366, 1.4, 0.5], [404, 374, 1.2, 0.4], [1048, 408, 1, 0.35],
          ].map(([cx, cy, r, opacity], index) => (
            <circle
              key={`star-${index}`}
              cx={cx}
              cy={cy}
              r={r}
              fill="#B8F8FF"
              opacity={opacity}
              className="ei-star"
              style={{ animationDelay: `${(index % 4) * 0.45}s` }}
            />
          ))}
        </g>

        {/* Decorative ambient polygons */}
        <g opacity="0.25" className="ei-float-slow">
          <polygon points="100,120 126,105 152,120 152,150 126,165 100,150" fill="none" stroke="#00D9F5" strokeOpacity="0.35" />
          <circle cx="126" cy="135" r="3" fill="#55E9FF" />
        </g>

        <g opacity="0.22" className="ei-float-reverse">
          <polygon points="1310,120 1333,107 1356,120 1356,146 1333,159 1310,146" fill="none" stroke="#00D9F5" strokeOpacity="0.4" />
          <circle cx="1333" cy="133" r="3" fill="#55E9FF" />
        </g>

        <polygon
          points={octagonPoints(720, 380, 150)}
          fill="none"
          stroke="#4DEAFF"
          strokeWidth="1"
          strokeDasharray="6 10"
          strokeOpacity="0.3"
          className="ei-rotate-reverse"
        />

        {/* Connection Paths */}
        <g>
          {/* Signal Ingress -> AI Core */}
          <path
            id="signalPath"
            d="M 220 380 C 380 380, 480 380, 648 380"
            fill="none"
            stroke="url(#ei-line)"
            strokeWidth="1.6"
            strokeDasharray="6 8"
            className="ei-path"
          />

          {/* AI Core -> Policy Node */}
          <path
            id="policyPath"
            d="M 792 380 C 870 380, 930 310, 1020 300"
            fill="none"
            stroke="url(#ei-line)"
            strokeWidth="1.6"
            strokeDasharray="6 8"
            className="ei-path delay-one"
          />

          {/* Policy Node -> Human Authorization Node */}
          <path
            id="humanPath"
            d="M 1020 300 C 1120 290, 1180 260, 1280 250"
            fill="none"
            stroke="url(#ei-line)"
            strokeWidth="1.6"
            strokeDasharray="6 8"
            className="ei-path delay-two"
          />

          {/* AI Core -> Audit Trail Node */}
          <path
            id="auditPath"
            d="M 720 452 C 720 520, 840 520, 980 520"
            fill="none"
            stroke="url(#ei-line)"
            strokeWidth="1.4"
            strokeDasharray="5 8"
            className="ei-path delay-three"
          />
        </g>

        {/* ============================= */}
        {/* LEFT SIGNAL INGRESS NODE */}
        {/* ============================= */}
        <g className="ei-node-float">
          
          <polygon
            points={octagonPoints(220, 380, 38)}
            fill="url(#ei-node)"
            stroke="#00D9F5"
            strokeOpacity="0.5"
          />

          <circle cx="220" cy="380" r="5" fill="#50E9FF" filter="url(#ei-glow)" />
          <circle cx="220" cy="380" r="16" fill="none" stroke="#00D9F5" strokeOpacity="0.2" className="ei-pulse-ring" />

          <text x="220" y="442" textAnchor="middle" fill="#94A3B8" fontSize="10" fontWeight="600" letterSpacing="0.8">
            OPERATIONAL SIGNALS
          </text>
        </g>

        {/* Small Micro Signal Sources */}
        {[
          [80, 320],
          [110, 440],
          [140, 350],
          [170, 420],
        ].map(([cx, cy], index) => (
          <g key={index}>
            <circle
              cx={cx}
              cy={cy}
              r="3"
              fill="#42E7FF"
              opacity="0.75"
              filter="url(#ei-glow)"
              className="ei-dot"
              style={{ animationDelay: `${index * 0.3}s` }}
            />
            <line x1={cx} y1={cy} x2="220" y2="380" stroke="#00D9F5" strokeOpacity="0.12" />
          </g>
        ))}

        {/* ============================= */}
        {/* CENTRAL EIMPORA AI CORE */}
        {/* ============================= */}
        <g className="ei-core-group">
          {/* Outer glow aura */}
          <circle cx="720" cy="380" r="125" fill="url(#ei-core)" className="ei-core-glow" />




          {/* Inner Octagon Frame */}
          <polygon
            points={octagonPoints(720, 380, 88)}
            fill="#041B22"
            stroke="#39E8FF"
            strokeOpacity="0.7"
            filter="url(#ei-glow)"
          />

          {/* Embedded 3D Isometric E Logo inside AI Core */}
          <g transform="translate(692, 348) scale(0.6)">
            {/* Top-Left Spine */}
            <path d="M10 28L50 5V25L26 39L10 72V28Z" fill="url(#eiLogoTopLeft)" />
            {/* Top-Right Arm */}
            <path d="M50 5L90 28L73 38L50 25V5Z" fill="url(#eiLogoTopRight)" />
            {/* Middle Arm Top */}
            <path d="M26 47L50 33L73 47L50 40Z" fill="url(#eiLogoMidTop)" />
            {/* Middle Arm Shadow */}
            <path d="M26 47L50 40L73 47L50 61Z" fill="url(#eiLogoMidShadow)" />
            {/* Bottom Arm Inner */}
            <path d="M26 61L50 75L73 61L50 67Z" fill="url(#eiLogoBottomInner)" />
            {/* Bottom Arm Outer */}
            <path d="M10 72L26 61L50 75L73 61L90 72L50 95L10 72Z" fill="url(#eiLogoBottomOuter)" />
          </g>



          {/* Orbit particle */}
          <circle cx="720" cy="285" r="4" fill="#61ECFF" filter="url(#ei-glow)" className="ei-orbit-dot" />
        </g>

        {/* ============================= */}
        {/* POLICY & GOVERNANCE NODE */}
        {/* ============================= */}
        <g className="ei-node-float delay-node">
          
          <polygon
            points={octagonPoints(1020, 300, 38)}
            fill="url(#ei-node)"
            stroke="#00D9F5"
            strokeOpacity="0.7"
            strokeWidth="1.5"
            filter="url(#ei-glow)"
          />

          {/* Shield Icon */}
          <path
            d="M1020 284 L1032 288 V299 C1032 309 1025 315 1020 318 C1015 315 1008 309 1008 299 V288 Z"
            fill="rgba(0, 245, 255, 0.08)"
            stroke="#00F5FF"
            strokeWidth="1"
            strokeLinejoin="round"
            filter="url(#ei-glow)"
          />
          <path
            d="M1014 299 L1019 304 L1027 294"
            fill="none"
            stroke="#00F5FF"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#ei-glow)"
          />

          <text x="1020" y="360" textAnchor="middle" fill="#38BDF8" fontSize="10" fontWeight="700" letterSpacing="0.8">
            POLICY & RULE ENGINE
          </text>
        </g>

        {/* ============================= */}
        {/* HUMAN AUTHORIZATION NODE */}
        {/* ============================= */}
        <g className="ei-node-float delay-node-two">
          <polygon
            points="1245,230 1280,210 1315,230 1315,270 1280,290 1245,270"
            fill="url(#ei-node)"
            stroke="#00D9F5"
            strokeOpacity="0.7"
            strokeWidth="1.5"
            filter="url(#ei-glow)"
          />

          {/* User Icon */}
          <circle cx="1280" cy="239" r="8" fill="rgba(0, 245, 255, 0.08)" stroke="#00F5FF" strokeWidth="1" filter="url(#ei-glow)" />
          <path
            d="M1265 264 C1265 252 1295 252 1295 264"
            fill="none"
            stroke="#00F5FF"
            strokeWidth="1"
            strokeLinecap="round"
            filter="url(#ei-glow)"
          />

          <text x="1280" y="312" textAnchor="middle" fill="#38BDF8" fontSize="10" fontWeight="700" letterSpacing="0.8">
            HUMAN AUTHORIZATION
          </text>
        </g>

        {/* ============================= */}
        {/* IMMUTABLE AUDIT NODE */}
        {/* ============================= */}
        <g className="ei-node-float delay-node-three">
          <polygon
            points="945,500 980,480 1015,500 1015,540 980,560 945,540"
            fill="url(#ei-node)"
            stroke="#00D9F5"
            strokeOpacity="0.7"
            strokeWidth="1"
            filter="url(#ei-glow)"
          />

          {/* Audit Check Circle Icon */}
          <circle cx="980" cy="520" r="14" fill="rgba(0, 245, 255, 0.08)" stroke="#00F5FF" strokeWidth="1" filter="url(#ei-glow)" />
          <path
            d="M973 520 L978 525 L988 514"
            fill="none"
            stroke="#00F5FF"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            filter="url(#ei-glow)"
          />

          <text x="980" y="580" textAnchor="middle" fill="#38BDF8" fontSize="10" fontWeight="700" letterSpacing="0.8">
            IMMUTABLE AUDIT TRAIL
          </text>
        </g>

        {/* ============================= */}
        {/* MOVING DATA PARTICLES */}
        {/* ============================= */}
        <circle r="3.5" fill="#61EEFF" filter="url(#ei-glow)">
          <animateMotion dur="3.2s" repeatCount="indefinite" path="M 220 380 C 380 380, 480 380, 648 380" />
          <animate attributeName="opacity" values="0;1;1;0" dur="3.2s" repeatCount="indefinite" />
        </circle>

        <circle r="3.5" fill="#61EEFF" filter="url(#ei-glow)">
          <animateMotion dur="3.4s" begin="0.8s" repeatCount="indefinite" path="M 792 380 C 870 380, 930 310, 1020 300" />
          <animate attributeName="opacity" values="0;1;1;0" dur="3.4s" begin="0.8s" repeatCount="indefinite" />
        </circle>

        <circle r="3.5" fill="#61EEFF" filter="url(#ei-glow)">
          <animateMotion dur="3.6s" begin="1.4s" repeatCount="indefinite" path="M 1020 300 C 1120 290, 1180 260, 1280 250" />
          <animate attributeName="opacity" values="0;1;1;0" dur="3.6s" begin="1.4s" repeatCount="indefinite" />
        </circle>

        <circle r="3" fill="#61EEFF" filter="url(#ei-glow)">
          <animateMotion dur="4.0s" begin="0.6s" repeatCount="indefinite" path="M 720 452 C 720 520, 840 520, 980 520" />
          <animate attributeName="opacity" values="0;1;1;0" dur="4.0s" begin="0.6s" repeatCount="indefinite" />
        </circle>

        {/* Micro floating particles */}
        {[
          [100, 480],
          [350, 220],
          [550, 600],
          [1150, 460],
          [1360, 400],
        ].map(([cx, cy], index) => (
          <circle
            key={`micro-${index}`}
            cx={cx}
            cy={cy}
            r="1.8"
            fill="#55E9FF"
            className="ei-micro-dot"
            style={{ animationDelay: `${index * 0.6}s` }}
          />
        ))}
      </svg>

      <style>{`
        .ei-path {
          animation: eiDash 12s linear infinite;
        }
        .delay-one { animation-delay: -2s; }
        .delay-two { animation-delay: -4s; }
        .delay-three { animation-delay: -6s; }

        .ei-core-glow {
          animation: eiCorePulse 4s ease-in-out infinite;
        }

        .ei-core-group {
          transform-origin: 720px 380px;
          animation: eiCoreFloat 6s ease-in-out infinite;
        }

        .ei-orbit {
          transform-origin: 720px 380px;
          animation: eiRotate 22s linear infinite;
        }

        .ei-orbit-dot {
          transform-origin: 720px 380px;
          animation: eiRotate 8s linear infinite;
        }

        .ei-rotate {
          transform-origin: 720px 380px;
          animation: eiRotate 60s linear infinite;
        }

        .ei-rotate-reverse {
          transform-origin: 720px 380px;
          animation: eiRotateReverse 44s linear infinite;
        }

        .ei-node-float {
          animation: eiNodeFloat 5.5s ease-in-out infinite;
        }

        .delay-node { animation-delay: -1.4s; }
        .delay-node-two { animation-delay: -2.8s; }
        .delay-node-three { animation-delay: -3.7s; }

        .ei-pulse-ring {
          transform-origin: 220px 380px;
          animation: eiRing 2.8s ease-out infinite;
        }

        .ei-dot { animation: eiDotPulse 2.5s ease-in-out infinite; }
        .ei-micro-dot { animation: eiMicro 3.5s ease-in-out infinite; }
        .ei-star { animation: eiStarTwinkle 4.5s ease-in-out infinite; }
        .ei-ambient { animation: eiAmbient 7s ease-in-out infinite; }
        .ei-float-slow { animation: eiDecoration 8s ease-in-out infinite; }
        .ei-float-reverse { animation: eiDecoration 9s ease-in-out infinite reverse; }

        @keyframes eiDash {
          from { stroke-dashoffset: 0; }
          to { stroke-dashoffset: -130; }
        }

        @keyframes eiCorePulse {
          0%, 100% { opacity: 0.75; transform: scale(0.95); transform-origin: 720px 380px; }
          50% { opacity: 1; transform: scale(1.08); transform-origin: 720px 380px; }
        }

        @keyframes eiCoreFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px); }
        }

        @keyframes eiRotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes eiRotateReverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }

        @keyframes eiNodeFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-7px); }
        }

        @keyframes eiRing {
          0% { transform: scale(0.75); opacity: 0.8; }
          100% { transform: scale(2); opacity: 0; }
        }

        @keyframes eiDotPulse {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 1; }
        }

        @keyframes eiMicro {
          0%, 100% { opacity: 0.15; transform: translateY(0); }
          50% { opacity: 0.75; transform: translateY(-8px); }
        }

        @keyframes eiStarTwinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.75); }
          50% { opacity: 1; transform: scale(1.35); }
        }

        @keyframes eiAmbient {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }

        @keyframes eiDecoration {
          0%, 100% { transform: translateY(0) rotate(0); }
          50% { transform: translateY(-10px) rotate(4deg); }
        }

        @media (prefers-reduced-motion: reduce) {
          .ei-path, .ei-core-glow, .ei-core-group, .ei-orbit, .ei-orbit-dot,
          .ei-rotate, .ei-rotate-reverse, .ei-node-float, .ei-pulse-ring,
          .ei-dot, .ei-micro-dot, .ei-star, .ei-ambient, .ei-float-slow, .ei-float-reverse {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}