import React from "react";

const modules = [
  {
    id: "payroll",
    title: "Payroll & Financials",
    category: "Operations",
    x: 170,
    y: 120,
    color: "#FF7A00",
    side: "left",
    delay: "0s",
  },
  {
    id: "workforce",
    title: "Time & Roster Ops",
    category: "Workforce",
    x: 130,
    y: 280,
    color: "#FF5A1F",
    side: "left",
    delay: ".5s",
  },
  {
    id: "talent",
    title: "ATS & Talent Pipeline",
    category: "Recruitment",
    x: 180,
    y: 440,
    color: "#FF9900",
    side: "left",
    delay: "1s",
  },

  {
    id: "people",
    title: "Core HR Directory",
    category: "People Ops",
    x: 1030,
    y: 120,
    color: "#00D9F5",
    side: "right",
    delay: ".3s",
  },
  {
    id: "ai",
    title: "Governed AI Engine",
    category: "Intelligence",
    x: 1070,
    y: 280,
    color: "#00E6FF",
    side: "right",
    delay: ".8s",
  },
  {
    id: "audit",
    title: "Immutable Audit Log",
    category: "Security",
    x: 1020,
    y: 440,
    color: "#06B6D4",
    side: "right",
    delay: "1.3s",
  },
];

export default function EimporaArchitectureSVG() {
  return (
    <>
      {/* Premium Modular Architecture Diagram */}
      <div className="relative overflow-hidden rounded-[28px] border border-slate-200/80 bg-gradient-to-br from-white via-slate-50 to-cyan-50/30 p-4 shadow-[0_24px_70px_rgba(15,23,42,0.06)] sm:p-7 lg:p-9">
  {/* Ambient background */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute left-1/2 top-1/2 h-[430px] w-[430px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/[0.045] blur-[70px]" />
    <div className="absolute left-[35%] top-1/2 h-[300px] w-[300px] -translate-y-1/2 rounded-full bg-orange-400/[0.035] blur-[80px]" />
  </div>

  <svg
    viewBox="0 0 1200 560"
    className="relative z-10 h-auto w-full select-none overflow-visible"
    aria-label="Eimpora Modular System Architecture Diagram"
  >
    <defs>
      {/* ------------------------------------------------ */}
      {/* GRADIENTS */}
      {/* ------------------------------------------------ */}

      <linearGradient
        id="leftFlow"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.95" />
        <stop offset="55%" stopColor="#F59E0B" stopOpacity="0.7" />
        <stop offset="100%" stopColor="#00CFE8" stopOpacity="0.65" />
      </linearGradient>

      <linearGradient
        id="rightFlow"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="0%"
      >
        <stop offset="0%" stopColor="#00D9F5" stopOpacity="0.9" />
        <stop offset="100%" stopColor="#22D3EE" stopOpacity="0.4" />
      </linearGradient>

      <linearGradient
        id="coreStroke"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#00E5FF" />
        <stop offset="55%" stopColor="#00BFD8" />
        <stop offset="100%" stopColor="#FF8A00" />
      </linearGradient>

      <linearGradient
        id="coreInside"
        x1="0%"
        y1="0%"
        x2="100%"
        y2="100%"
      >
        <stop offset="0%" stopColor="#07141D" />
        <stop offset="55%" stopColor="#02080D" />
        <stop offset="100%" stopColor="#0A1018" />
      </linearGradient>

      <radialGradient id="coreHalo">
        <stop offset="0%" stopColor="#00D9F5" stopOpacity="0.12" />
        <stop offset="38%" stopColor="#00D9F5" stopOpacity="0.06" />
        <stop offset="68%" stopColor="#FF7A00" stopOpacity="0.035" />
        <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
      </radialGradient>

      <linearGradient
        id="orangeCardFill"
        x1="0"
        y1="0"
        x2="1"
        y2="1"
      >
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#FFF9F3" />
      </linearGradient>

      <linearGradient
        id="cyanCardFill"
        x1="0"
        y1="0"
        x2="1"
        y2="1"
      >
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="100%" stopColor="#F0FDFF" />
      </linearGradient>

      {/* ------------------------------------------------ */}
      {/* FILTERS */}
      {/* ------------------------------------------------ */}

      <filter
        id="softCyanGlow"
        x="-80%"
        y="-80%"
        width="260%"
        height="260%"
      >
        <feGaussianBlur stdDeviation="3.2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter
        id="softOrangeGlow"
        x="-80%"
        y="-80%"
        width="260%"
        height="260%"
      >
        <feGaussianBlur stdDeviation="3.2" result="blur" />
        <feMerge>
          <feMergeNode in="blur" />
          <feMergeNode in="SourceGraphic" />
        </feMerge>
      </filter>

      <filter
        id="cardShadow"
        x="-30%"
        y="-50%"
        width="160%"
        height="200%"
      >
        <feDropShadow
          dx="0"
          dy="7"
          stdDeviation="7"
          floodColor="#0F172A"
          floodOpacity="0.08"
        />
      </filter>

      <filter
        id="coreShadow"
        x="-80%"
        y="-80%"
        width="260%"
        height="260%"
      >
        <feDropShadow
          dx="0"
          dy="8"
          stdDeviation="12"
          floodColor="#00CFE8"
          floodOpacity="0.18"
        />
      </filter>

      {/* ------------------------------------------------ */}
      {/* BACKGROUND GRID */}
      {/* ------------------------------------------------ */}

      <pattern
        id="architectureGrid"
        width="32"
        height="32"
        patternUnits="userSpaceOnUse"
      >
        <path
          d="M32 0H0V32"
          fill="none"
          stroke="#64748B"
          strokeWidth="0.7"
          strokeOpacity="0.035"
        />
      </pattern>
    </defs>

    {/* ================================================== */}
    {/* BACKGROUND */}
    {/* ================================================== */}

    <rect
      width="1200"
      height="560"
      fill="url(#architectureGrid)"
    />

    <ellipse
      cx="600"
      cy="280"
      rx="245"
      ry="205"
      fill="url(#coreHalo)"
    />

    {/* subtle architecture rings */}
    <circle
      cx="600"
      cy="280"
      r="155"
      fill="none"
      stroke="#00CFE8"
      strokeWidth="1"
      strokeOpacity="0.05"
      strokeDasharray="2 9"
    />

    <circle
      cx="600"
      cy="280"
      r="120"
      fill="none"
      stroke="#FF8A00"
      strokeWidth="1"
      strokeOpacity="0.04"
    />

    {/* ================================================== */}
    {/* SIDE LABELS */}
    {/* ================================================== */}

    <g opacity="0.48">
      <text
        x="170"
        y="64"
        textAnchor="middle"
        fill="#F97316"
        fontSize="8"
        fontWeight="800"
        letterSpacing="2.2"
      >
        OPERATIONAL SYSTEMS
      </text>

      <line
        x1="100"
        y1="74"
        x2="240"
        y2="74"
        stroke="#F97316"
        strokeOpacity="0.15"
      />

      <text
        x="1030"
        y="64"
        textAnchor="middle"
        fill="#06B6D4"
        fontSize="8"
        fontWeight="800"
        letterSpacing="2.2"
      >
        INTELLIGENCE & GOVERNANCE
      </text>

      <line
        x1="945"
        y1="74"
        x2="1115"
        y2="74"
        stroke="#06B6D4"
        strokeOpacity="0.15"
      />
    </g>

    {/* ================================================== */}
    {/* PRIMARY CONNECTION PATHS */}
    {/* ================================================== */}

    <g
      fill="none"
      strokeLinecap="round"
      strokeWidth="1.55"
      className="eimpora-flow-lines"
    >
      {/* LEFT */}

      <path
        d="M260 120 C370 120 428 175 488 226 C522 255 545 271 566 276"
        stroke="url(#leftFlow)"
        strokeOpacity="0.42"
        strokeDasharray="5 9"
      />

      <path
        d="M220 280 C350 280 455 280 566 280"
        stroke="url(#leftFlow)"
        strokeOpacity="0.38"
        strokeDasharray="5 9"
      />

      <path
        d="M270 440 C378 440 430 388 490 335 C524 305 548 289 566 284"
        stroke="url(#leftFlow)"
        strokeOpacity="0.42"
        strokeDasharray="5 9"
      />

      {/* RIGHT */}

      <path
        d="M634 276 C660 269 687 251 720 222 C783 167 835 120 940 120"
        stroke="url(#rightFlow)"
        strokeOpacity="0.46"
        strokeDasharray="5 9"
      />

      <path
        d="M634 280 C755 280 860 280 980 280"
        stroke="url(#rightFlow)"
        strokeOpacity="0.42"
        strokeDasharray="5 9"
      />

      <path
        d="M634 284 C660 293 690 312 724 341 C787 396 834 440 930 440"
        stroke="url(#rightFlow)"
        strokeOpacity="0.46"
        strokeDasharray="5 9"
      />
    </g>

    {/* ================================================== */}
    {/* SECONDARY NETWORK CONNECTIONS */}
    {/* ================================================== */}

    <path
      d="M260 120 C455 70 745 70 940 120"
      fill="none"
      stroke="#00CFE8"
      strokeWidth="1"
      strokeOpacity="0.10"
      strokeDasharray="2 8"
    />

    <path
      d="M220 280 C410 475 790 475 980 280"
      fill="none"
      stroke="#FF8A00"
      strokeWidth="1"
      strokeOpacity="0.075"
      strokeDasharray="2 8"
    />

    {/* ================================================== */}
    {/* CONNECTION JUNCTIONS */}
    {/* ================================================== */}

    {[
      [400, 170, "#FF7A00"],
      [420, 280, "#FF5A1F"],
      [410, 390, "#F59E0B"],
      [790, 170, "#00D9F5"],
      [805, 280, "#00D9F5"],
      [790, 390, "#06B6D4"],
    ].map(([x, y, color], i) => (
      <g key={`junction-${i}`}>
        <circle
          cx={x}
          cy={y}
          r="8"
          fill={color}
          opacity="0.08"
          className="architecture-junction"
          style={{ animationDelay: `${i * 0.35}s` }}
        />

        <circle
          cx={x}
          cy={y}
          r="3.5"
          fill={color}
          opacity="0.9"
        />
      </g>
    ))}

    {/* ================================================== */}
    {/* ANIMATED DATA PARTICLES */}
    {/* ================================================== */}

    <ArchitectureParticle
      path="M260 120 C370 120 428 175 488 226 C522 255 545 271 566 276"
      color="#FF7A00"
      duration="4.4s"
    />

    <ArchitectureParticle
      path="M220 280 C350 280 455 280 566 280"
      color="#FF5A1F"
      duration="3.8s"
      delay=".7s"
    />

    <ArchitectureParticle
      path="M270 440 C378 440 430 388 490 335 C524 305 548 289 566 284"
      color="#F59E0B"
      duration="4.6s"
      delay="1.3s"
    />

    <ArchitectureParticle
      path="M634 276 C660 269 687 251 720 222 C783 167 835 120 940 120"
      color="#00D9F5"
      duration="4.4s"
      delay=".4s"
    />

    <ArchitectureParticle
      path="M634 280 C755 280 860 280 980 280"
      color="#00E5FF"
      duration="3.8s"
      delay="1.1s"
    />

    <ArchitectureParticle
      path="M634 284 C660 293 690 312 724 341 C787 396 834 440 930 440"
      color="#06B6D4"
      duration="4.6s"
      delay="1.7s"
    />

    {/* ================================================== */}
    {/* CENTRAL CORE */}
    {/* ================================================== */}

    <g transform="translate(600 280)">
      {/* very soft center aura */}
      <circle
        r="103"
        fill="#00D9F5"
        opacity="0.025"
        className="core-breath"
      />

      {/* outer orbit */}
      <circle
        r="81"
        fill="none"
        stroke="url(#coreStroke)"
        strokeWidth="1"
        strokeDasharray="4 10"
        strokeOpacity="0.42"
        className="core-orbit-one"
      />

      {/* middle orbit */}
      <circle
        r="68"
        fill="none"
        stroke="#00D9F5"
        strokeWidth="1"
        strokeDasharray="2 8"
        strokeOpacity="0.23"
        className="core-orbit-two"
      />

      {/* core outer frame */}
      <circle
        r="57"
        fill="#FFFFFF"
        stroke="url(#coreStroke)"
        strokeWidth="2"
        filter="url(#coreShadow)"
      />

      {/* black core */}
      <circle
        r="51"
        fill="url(#coreInside)"
        stroke="#FFFFFF"
        strokeOpacity="0.08"
      />

      {/* inner technical ring */}
      <circle
        r="43"
        fill="none"
        stroke="#00D9F5"
        strokeOpacity="0.12"
        strokeWidth="1"
      />

      {/* small architecture icon */}
      <g transform="translate(0 -20)">
        <line
          x1="-15"
          y1="5"
          x2="-5"
          y2="-5"
          stroke="#00D9F5"
          strokeWidth="1.4"
        />

        <line
          x1="-5"
          y1="-5"
          x2="5"
          y2="3"
          stroke="#00D9F5"
          strokeWidth="1.4"
        />

        <line
          x1="5"
          y1="3"
          x2="15"
          y2="-8"
          stroke="#FF8A00"
          strokeWidth="1.4"
        />

        <circle cx="-15" cy="5" r="2.6" fill="#00D9F5" />
        <circle cx="-5" cy="-5" r="2.6" fill="#00D9F5" />
        <circle cx="5" cy="3" r="2.6" fill="#00D9F5" />
        <circle cx="15" cy="-8" r="2.6" fill="#FF8A00" />
      </g>

      <text
        y="9"
        textAnchor="middle"
        fill="#FFFFFF"
        fontSize="12"
        fontWeight="750"
        letterSpacing="0.8"
      >
        EIMPORA
      </text>

      <text
        y="23"
        textAnchor="middle"
        fill="#FFFFFF"
        fillOpacity="0.62"
        fontSize="7.5"
        fontWeight="600"
        letterSpacing="1.2"
      >
        CORE PLATFORM
      </text>

      <text
        y="37"
        textAnchor="middle"
        fill="#00D9F5"
        fontSize="6.5"
        fontWeight="750"
        letterSpacing="1.15"
      >
        AI TELEMETRY
      </text>

      {/* rotating marker */}
      <circle
        cx="0"
        cy="-81"
        r="3.5"
        fill="#00E5FF"
        filter="url(#softCyanGlow)"
        className="core-marker"
      />
    </g>

    {/* ================================================== */}
    {/* MODULE NODES */}
    {/* ================================================== */}

    {modules.map((n) => {
      const orange = n.color.startsWith("#FF");

      return (
        <g
          key={n.id}
          transform={`translate(${n.x}, ${n.y})`}
        >
          <g
            className="architecture-node"
            style={{ animationDelay: n.delay }}
          >
            {/* soft shadow */}
            <rect
              x="-95"
              y="-27"
              width="190"
              height="54"
              rx="16"
              fill="#0F172A"
              opacity="0.025"
              transform="translate(0 6)"
            />

            {/* main card */}
            <rect
              x="-95"
              y="-27"
              width="190"
              height="54"
              rx="16"
              fill={
                orange
                  ? "url(#orangeCardFill)"
                  : "url(#cyanCardFill)"
              }
              stroke={n.color}
              strokeWidth="1.35"
              strokeOpacity="0.78"
              filter="url(#cardShadow)"
            />

            {/* inner highlight */}
            <path
              d="M-77 -22 H77"
              stroke="#FFFFFF"
              strokeWidth="1"
              strokeOpacity="0.8"
              strokeLinecap="round"
            />

            {/* status badge */}
            <circle
              cx="-68"
              cy="0"
              r="10"
              fill={n.color}
              opacity="0.09"
            />

            <circle
              cx="-68"
              cy="0"
              r="4.2"
              fill={n.color}
            />

            <circle
              cx="-68"
              cy="0"
              r="1.4"
              fill="#FFFFFF"
            />

            {/* title */}
            <text
              x="-49"
              y="-4"
              textAnchor="start"
              fill="#0F172A"
              fontSize="10.5"
              fontWeight="700"
            >
              {n.title}
            </text>

            {/* category */}
            <text
              x="-49"
              y="12"
              textAnchor="start"
              fill={n.color}
              fontSize="7.7"
              fontWeight="800"
              letterSpacing=".8"
            >
              {n.category.toUpperCase()}
            </text>

            {/* connection anchor */}
            <circle
              cx={n.x < 600 ? 95 : -95}
              cy="0"
              r="3"
              fill={n.color}
            />

            <circle
              cx={n.x < 600 ? 95 : -95}
              cy="0"
              r="7"
              fill="none"
              stroke={n.color}
              strokeWidth="1"
              strokeOpacity="0.15"
            />
          </g>
        </g>
      );
    })}
  </svg>

  <style>{`
    .eimpora-flow-lines path {
      animation: flowDash 18s linear infinite;
    }

    .architecture-node {
      animation: nodeFloat 6s ease-in-out infinite;
    }

    .architecture-junction {
      transform-box: fill-box;
      transform-origin: center;
      animation: junctionPulse 2.8s ease-out infinite;
    }

    .core-orbit-one {
      transform-box: fill-box;
      transform-origin: center;
      animation: coreRotate 28s linear infinite;
    }

    .core-orbit-two {
      transform-box: fill-box;
      transform-origin: center;
      animation: coreRotateReverse 20s linear infinite;
    }

    .core-marker {
      transform-origin: 0px 0px;
      animation: coreMarkerOrbit 9s linear infinite;
    }

    .core-breath {
      transform-origin: center;
      transform-box: fill-box;
      animation: coreBreath 4.5s ease-in-out infinite;
    }

    @keyframes flowDash {
      to {
        stroke-dashoffset: -150;
      }
    }

    @keyframes nodeFloat {
      0%, 100% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(-4px);
      }
    }

    @keyframes junctionPulse {
      0% {
        transform: scale(.75);
        opacity: .13;
      }

      100% {
        transform: scale(2.2);
        opacity: 0;
      }
    }

    @keyframes coreRotate {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    @keyframes coreRotateReverse {
      from {
        transform: rotate(360deg);
      }

      to {
        transform: rotate(0deg);
      }
    }

    @keyframes coreMarkerOrbit {
      from {
        transform: rotate(0deg);
      }

      to {
        transform: rotate(360deg);
      }
    }

    @keyframes coreBreath {
      0%, 100% {
        transform: scale(.9);
        opacity: .025;
      }

      50% {
        transform: scale(1.25);
        opacity: .075;
      }
    }

    @media (prefers-reduced-motion: reduce) {
      .eimpora-flow-lines path,
      .architecture-node,
      .architecture-junction,
      .core-orbit-one,
      .core-orbit-two,
      .core-marker,
      .core-breath {
        animation: none !important;
      }
    }
  `}</style>
      </div>
    </>
  );
}

function ArchitectureParticle({
  path,
  color,
  duration = "4s",
  delay = "0s",
}) {
  const isOrange = color.startsWith("#FF") || color === "#F59E0B";

  return (
    <g>
      {/* soft trail */}
      <circle r="7" fill={color} opacity="0.08">
        <animateMotion
          dur={duration}
          begin={delay}
          repeatCount="indefinite"
          path={path}
        />
      </circle>

      {/* primary packet */}
      <circle
        r="3.2"
        fill={color}
        filter={
          isOrange
            ? "url(#softOrangeGlow)"
            : "url(#softCyanGlow)"
        }
      >
        <animateMotion
          dur={duration}
          begin={delay}
          repeatCount="indefinite"
          path={path}
        />

        <animate
          attributeName="opacity"
          values="0;1;1;0"
          keyTimes="0;.12;.82;1"
          dur={duration}
          begin={delay}
          repeatCount="indefinite"
        />
      </circle>
    </g>
  );
}

