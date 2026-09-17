import React from "react";

const nodes = [
  { label: "People", x: 149.9, y: 55, color: "#22d3ee" },
  { label: "Payroll", x: 268, y: 125, color: "#ff7a00" },
  { label: "AI", x: 268, y: 260, color: "#22d3ee" },
  { label: "Analytics", x: 149.9, y: 330, color: "#ff7a00" },
  { label: "Talent", x: 32, y: 260, color: "#22d3ee" },
  { label: "Operations", x: 32, y: 125, color: "#ff7a00" },
];

function hexPoints(cx, cy, radius) {
  return Array.from({ length: 6 })
    .map((_, i) => {
      const angle = (Math.PI / 3) * i - Math.PI / 6;
      return `${cx + radius * Math.cos(angle)},${cy + radius * Math.sin(angle)
        }`;
    })
    .join(" ");
}

export default function EimporaHexagon() {
  return (
    <div className="relative flex min-h-[480px] w-full items-center justify-center select-none">
      {/* Ambient glows (Cyan + Orange) */}
      <div className="absolute h-[360px] w-[360px] rounded-full bg-cyan-400/10 blur-[90px]" />
      <div className="absolute right-10 top-20 h-[180px] w-[180px] rounded-full bg-cyan-300/10 blur-[70px]" />

      <svg
        viewBox="0 0 300 385"
        className="relative z-10 w-full max-w-[520px] overflow-visible"
      >
        <defs>
          <linearGradient id="cyanStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#22d3ee" />
            <stop offset="50%" stopColor="#06b6d4" />
            <stop offset="100%" stopColor="#67e8f9" />
          </linearGradient>

          <linearGradient id="orangeStroke" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ff7a00" />
            <stop offset="50%" stopColor="#ff5500" />
            <stop offset="100%" stopColor="#ff9900" />
          </linearGradient>

          <linearGradient id="centerFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="50%" stopColor="#07141b" />
            <stop offset="100%" stopColor="#083344" />
          </linearGradient>

          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Rotating outer system */}
        <g className="origin-center animate-[spin_30s_linear_infinite]">
          <polygon
            points={hexPoints(150, 192, 136)}
            fill="none"
            stroke="#22d3ee"
            strokeOpacity="0.2"
            strokeWidth="1"
            strokeDasharray="4 7"
          />

          <polygon
            points={hexPoints(150, 192, 110)}
            fill="none"
            stroke="#ff7a00"
            strokeOpacity="0.15"
            strokeWidth="1"
          />
        </g>

        {/* Connection lines */}
        {nodes.map((node, index) => (
          <line
            key={`line-${index}`}
            x1="150"
            y1="192"
            x2={node.x}
            y2={node.y}
            stroke={node.color === "#ff7a00" ? "url(#orangeStroke)" : "url(#cyanStroke)"}
            strokeWidth="1"
            strokeOpacity="0.3"
            strokeDasharray="3 5"
            className="hex-line"
            style={{
              animationDelay: `${index * 0.25}s`,
            }}
          />
        ))}

        {/* Animated outer nodes */}
        {nodes.map((node, index) => (
          <g
            key={node.label}
            className="hex-node"
            style={{
              transformOrigin: `${node.x}px ${node.y}px`,
              animationDelay: `${index * 0.3}s`,
            }}
          >
            <polygon
              points={hexPoints(node.x, node.y, 37)}
              fill="rgba(8, 20, 27, 0.85)"
              stroke={node.color === "#ff7a00" ? "url(#orangeStroke)" : "url(#cyanStroke)"}
              strokeWidth="1.2"
              strokeOpacity="0.7"
            />

            <polygon
              points={hexPoints(node.x, node.y, 31)}
              fill="none"
              stroke={node.color}
              strokeWidth="0.6"
              strokeOpacity="0.3"
            />

            <circle
              cx={node.x}
              cy={node.y - 9}
              r="3"
              fill={node.color}
              filter="url(#glow)"
            />

            <text
              x={node.x}
              y={node.y + 10}
              textAnchor="middle"
              fill="#ffffff"
              fontSize="8.5"
              fontWeight="600"
              letterSpacing="0.2"
            >
              {node.label}
            </text>
          </g>
        ))}

        {/* Main Eimpora Hexagon */}
        <g className="eimpora-center">
          <polygon
            points={hexPoints(150, 192, 67)}
            fill="url(#centerFill)"
            stroke="url(#cyanStroke)"
            strokeWidth="1.2"
            filter="url(#glow)"
          />

          <polygon
            points={hexPoints(150, 192, 57)}
            fill="none"
            stroke="#ff7a00"
            strokeWidth="0.8"
            strokeOpacity="0.5"
          />

          <circle cx="150" cy="167" r="4" fill="#ff7a00" filter="url(#glow)" />

          <text
            x="150"
            y="195"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="17"
            fontWeight="700"
            letterSpacing="1"
          >
            EIMPORA
          </text>

          <text
            x="150"
            y="209"
            textAnchor="middle"
            fill="#22d3ee"
            fontSize="5.5"
            fontWeight="600"
            letterSpacing="1"
          >
            ENTERPRISE INTELLIGENCE
          </text>

        </g>

        {/* Moving data particles */}
        {nodes.map((node, index) => (
          <circle
            key={`particle-${index}`}
            r="2.4"
            fill={node.color}
            filter="url(#glow)"
          >
            <animate
              attributeName="cx"
              values={`150;${node.x};150`}
              dur={`${4 + index * 0.35}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="cy"
              values={`192;${node.y};192`}
              dur={`${4 + index * 0.35}s`}
              repeatCount="indefinite"
            />
            <animate
              attributeName="opacity"
              values="0.2;1;0.2"
              dur={`${4 + index * 0.35}s`}
              repeatCount="indefinite"
            />
          </circle>
        ))}
      </svg>

      <style>{`
        .hex-node {
          animation: hexFloat 5s ease-in-out infinite;
        }

        .hex-line {
          animation: linePulse 3s ease-in-out infinite;
        }

        .eimpora-center {
          transform-origin: 150px 192px;
          animation: centerPulse 4s ease-in-out infinite;
        }

        @keyframes hexFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @keyframes linePulse {
          0%, 100% {
            stroke-opacity: 0.15;
          }
          50% {
            stroke-opacity: 0.55;
          }
        }

        @keyframes centerPulse {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.025);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .hex-node,
          .hex-line,
          .eimpora-center {
            animation: none !important;
          }
        }
      `}</style>
    </div>
  );
}
