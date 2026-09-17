import React from "react";

export default function EimporaIntelligenceSVG({ className = "absolute inset-0 w-full h-full pointer-events-none overflow-hidden" }) {
  return (
    <div className={className}>
      <svg
        viewBox="0 0 1440 760"
        preserveAspectRatio="none"
        className="w-full h-full block"
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



        {/* ============================= */}
        {/* BACKGROUND STAR FIELD */}
        {/* ============================= */}
        <g className="ei-star-field" aria-hidden="true">
          {[
            // x, y, radius, opacity, delay
            [72, 92, 1.4, 0.15, 0],
            [116, 106, 1.8, 0.25, 0.8],
            [194, 174, 1.0, 0.18, 1.4],
            [286, 88, 1.5, 0.55, 2.1],
            [350, 86, 2.0, 0.15, 0.4],
            [418, 156, 0.9, 0.3, 1.8],
            [492, 72, 1.1, 0.14, 2.8],
            [548, 132, 0.8, 0.25, 0.9],
            [612, 94, 1.0, 0.15, 2.3],
            [658, 112, 1.2, 0.45, 1.1],
            [720, 82, 0.8, 0.13, 3.0],
            [774, 166, 1.4, 0.5, 0.6],
            [846, 126, 0.9, 0.15, 2.0],
            [908, 104, 1.6, 0.5, 1.2],
            [982, 152, 0.8, 0.13, 2.6],
            [1050, 92, 1.0, 0.4, 0.5],
            [1128, 138, 1.2, 0.15, 1.7],
            [1212, 78, 0.9, 0.3, 2.5],
            [1276, 126, 1.4, 0.15, 0.7],
            [1340, 92, 1.8, 0.35, 1.9],
            [54, 248, 0.8, 0.15, 2.2],
            [142, 298, 1.0, 0.3, 0.9],
            [238, 252, 1.6, 0.15, 1.5],
            [318, 326, 0.7, 0.25, 2.8],
            [404, 286, 1.0, 0.15, 0.3],
            [520, 238, 0.8, 0.25, 1.6],
            [610, 316, 1.2, 0.15, 2.4],
            [812, 268, 0.9, 0.3, 0.8],
            [902, 322, 1.0, 0.15, 2.1],
            [1020, 278, 1.3, 0.4, 1.0],
            [1136, 312, 0.8, 0.13, 2.7],
            [1238, 254, 1.1, 0.35, 1.4],
            [1354, 308, 1.4, 0.14, 2.3],

            [78, 470, 1.0, 0.3, 1.2],
            [166, 536, 0.8, 0.15, 2.5],
            [252, 448, 1.3, 0.35, 0.4],
            [348, 512, 0.9, 0.13, 1.8],
            [454, 584, 1.1, 0.35, 2.9],
            [548, 526, 0.8, 0.15, 0.7],
            [638, 624, 1.2, 0.4, 2.0],
            [734, 548, 0.8, 0.15, 1.3],
            [828, 632, 1.5, 0.45, 2.6],
            [934, 586, 1.0, 0.15, 0.5],
            [1042, 626, 0.8, 0.3, 1.9],
            [1108, 674, 1.4, 0.15, 2.8],
            [1184, 556, 0.9, 0.3, 0.9],
            [1272, 628, 1.1, 0.15, 2.2],
            [1360, 548, 0.8, 0.25, 1.1],

            [1326, 366, 1.3, 0.15, 0.6],
            [1142, 394, 0.8, 0.3, 2.4],
            [1048, 408, 1.0, 0.15, 1.5],
            [404, 374, 1.1, 0.4, 2.7],
            [286, 406, 0.7, 0.15, 0.8],
          ].map(([cx, cy, r, opacity, delay], index) => (
            <circle
              key={`star-${index}`}
              cx={cx}
              cy={cy}
              r={r}
              fill="#B8F8FF"
              opacity={opacity}
              className="ei-star"
              style={{
                animationDelay: `${delay}s`,
              }}
            />
          ))}

          {/* A few brighter distant stars */}
          <g className="ei-bright-stars">
            <circle cx="350" cy="86" r="2.1" fill="#B8F8FF" />
            <circle cx="908" cy="104" r="1.8" fill="#D7FCFF" />
            <circle cx="1128" cy="138" r="1.4" fill="#B8F8FF" />
            <circle cx="78" cy="248" r="1.6" fill="#55E9FF" />
            <circle cx="1128" cy="220" r="1.5" fill="#55E9FF" />
            <circle cx="72" cy="574" r="1.4" fill="#D7FCFF" />
          </g>
        </g>

        {/* Decorative ambient polygons */}
        <g opacity="0.25" className="ei-float-slow">
          <circle cx="126" cy="135" r="3" fill="#55E9FF" />
        </g>

        <g opacity="0.22" className="ei-float-reverse">
          <circle cx="1333" cy="133" r="3" fill="#55E9FF" />
        </g>


        {/* Connection Paths */}
        <g>
          {/* Signal Ingress -> AI Core */}
          <path
            id="signalPath"
            d="M 220 380 C 380 380, 480 380, 648 380"
            fill="none"
            stroke="url(#ei-line)"
            strokeWidth="0.3"
            className="ei-path"
          />

          {/* Policy Node -> Human Authorization Node */}
          <path
            id="humanPath"
            d="M 1020 300 C 1120 290, 1180 260, 1280 250"
            fill="none"
            stroke="url(#ei-line)"
            strokeWidth="0.3"
            className="ei-path delay-two"
          />

          {/* AI Core -> Audit Trail Node */}
          <path
            id="auditPath"
            d="M 720 452 C 720 520, 840 520, 980 520"
            fill="none"
            stroke="url(#ei-line)"
            strokeWidth="0.3"
            className="ei-path delay-three"
          />
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
        {/* MOVING DATA PARTICLES */}
        {/* ============================= */}
       

       

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
        .ei-bright-stars circle {
          filter: drop-shadow(0 0 4px rgba(85, 233, 255, 0.65));
          animation: eiBrightStar 5s ease-in-out infinite;
        }

        .ei-bright-stars circle:nth-child(2) {
          animation-delay: 1.2s;
        }

        .ei-bright-stars circle:nth-child(3) {
          animation-delay: 2.4s;
        }

        .ei-bright-stars circle:nth-child(4) {
          animation-delay: 0.8s;
        }

        .ei-bright-stars circle:nth-child(5) {
          animation-delay: 3s;
        }

        .ei-bright-stars circle:nth-child(6) {
          animation-delay: 1.7s;
        }

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
          0%, 100% {
            opacity: 0.15;
          }

          50% {
            opacity: 0.85;
          }
        }

        @keyframes eiBrightStar {
          0%, 100% {
            opacity: 0.35;
          }

          50% {
            opacity: 1;
          }
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