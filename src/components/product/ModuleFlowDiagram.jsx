import React from 'react';

export default function ModuleFlowDiagram() {
  const nodes = [
    {
      id: 1,
      title: 'Payroll & Financials',
      category: 'OPERATIONS',
      color: '#FF7A00',
      bgColor: '#FFF7ED',
      x: 200,
      y: 120,
      dotOffset: { x: 95, y: 3 },
      pathStart: { x: 290, y: 134 },
      delay: '0s'
    },
    {
      id: 2,
      title: 'Time & Roster Ops',
      category: 'WORKFORCE',
      color: '#FF5500',
      bgColor: '#FFF7ED',
      x: 160,
      y: 280,
      dotOffset: { x: 95, y: 1 },
      pathStart: { x: 255, y: 280 },
      delay: '0.5s'
    },
    {
      id: 3,
      title: 'ATS & Talent Pipeline',
      category: 'RECRUITMENT',
      color: '#FF7A00',
      bgColor: '#FFF7ED',
      x: 210,
      y: 440,
      dotOffset: { x: 95, y: -2 },
      pathStart: { x: 300, y: 426 },
      delay: '1.0s'
    },
    {
      id: 4,
      title: 'Core HR Directory',
      category: 'PEOPLE OPS',
      color: '#00D9F5',
      bgColor: '#ECFEFF',
      x: 1000,
      y: 120,
      dotOffset: { x: -94, y: 1 },
      pathStart: { x: 910, y: 134 },
      delay: '1.5s'
    },
    {
      id: 5,
      title: 'Governed AI Engine',
      category: 'INTELLIGENCE',
      color: '#00D9F5',
      bgColor: '#ECFEFF',
      x: 1040,
      y: 280,
      dotOffset: { x: -95, y: 1 },
      pathStart: { x: 945, y: 280 },
      delay: '2.0s'
    },
    {
      id: 6,
      title: 'Immutable Audit Log',
      category: 'SECURITY',
      color: '#00D9F5',
      bgColor: '#ECFEFF',
      x: 990,
      y: 440,
      dotOffset: { x: -95, y: -2 },
      pathStart: { x: 900, y: 426 },
      delay: '2.5s'
    }
  ];

  const buildFlowPath = (node) => {
    const startX = node.x + node.dotOffset.x;
    const startY = node.y + node.dotOffset.y;
    const endX = node.x < 600 ? 560 : 640;
    const endY = 280;
    const curveX = node.x < 600 ? startX + 110 : startX - 110;

    return `M ${startX} ${startY} C ${curveX} ${startY}, ${endX + (node.x < 600 ? -50 : 50)} ${endY}, ${endX} ${endY}`;
  };

  return (
    <section className="relative py-24 bg-white text-navy-950 border-b border-slate-200 overflow-hidden select-none">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 bg-grid-pattern-light opacity-60 pointer-events-none" aria-hidden="true" />

      {/* Subtle Background Glow Blurs */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-orange-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 tracking-tight leading-tight">
            Seamless Interconnected <br />
            <span className="bg-gradient-to-r from-teal-500 via-cyan-600 to-cyan-400 bg-clip-text text-transparent">
              Modular Architecture
            </span>
          </h2>
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-light">
            Eimpora’s canonical modules stream real-time telemetry across intelligent data pathways—synchronizing rosters, payroll, AI governance, and security logs.
          </p>
        </div>

        {/* Main Canvas Card */}
        <div className="relative ">
          <svg
            viewBox="0 0 1200 560"
            className="w-full h-auto overflow-visible"
            aria-label="Eimpora Modular Telemetry Network Diagram"
          >
            <defs>
              {/* Soft Drop Glow Filters */}
              <filter id="cyanPillGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#00D9F5" floodOpacity="0.25" />
              </filter>

              <filter id="orangePillGlow" x="-20%" y="-20%" width="140%" height="140%">
                <feDropShadow dx="0" dy="4" stdDeviation="8" floodColor="#FF7A00" floodOpacity="0.25" />
              </filter>

              <filter id="centerShadow" x="-30%" y="-30%" width="160%" height="160%">
                <feDropShadow dx="0" dy="6" stdDeviation="12" floodColor="#00D9F5" floodOpacity="0.2" />
              </filter>

              <filter id="particleCyanGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              <filter id="particleOrangeGlow" x="-50%" y="-50%" width="200%" height="200%">
                <feGaussianBlur stdDeviation="3" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>

              {/* Central Radial Aura Glow */}
              <radialGradient id="centralAura" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="#FFF7ED" stopOpacity="0.9" />
                <stop offset="35%" stopColor="#FF7A00" stopOpacity="0.18" />
                <stop offset="70%" stopColor="#00D9F5" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#FFFFFF" stopOpacity="0" />
              </radialGradient>

              {/* Connection Gradients */}
              <linearGradient id="gradOrangeToCenter" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#FF7A00" stopOpacity="0.8" />
                <stop offset="100%" stopColor="#FF9900" stopOpacity="0.4" />
              </linearGradient>

              <linearGradient id="gradCenterToCyan" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#00D9F5" stopOpacity="0.4" />
                <stop offset="100%" stopColor="#00D9F5" stopOpacity="0.8" />
              </linearGradient>
            </defs>

            
            {/* Background Arching Dashed Guide Lines */}
            <path
              d="M 230 134 C 610 60, 910 134, 910 114"
              fill="none"
              stroke="#00D9F5"
              strokeWidth="1.2"
              strokeDasharray="4 6"
              strokeOpacity="0.45"
            />
            <path
              d="M 260 426 C 600 520, 900 426, 900 446"
              fill="none"
              stroke="#FF7A00"
              strokeWidth="1.2"
              strokeDasharray="4 6"
              strokeOpacity="0.45"
            />
           

            {/* Connected Curved Flow Paths */}
            <g fill="none" strokeWidth="1.5" strokeDasharray="5 7">
              {nodes.map((node) => (
                <path
                  key={`flow-${node.id}`}
                  d={buildFlowPath(node)}
                  stroke={node.x < 600 ? 'url(#gradOrangeToCenter)' : 'url(#gradCenterToCyan)'}
                  strokeOpacity="0.9"
                />
              ))}
            </g>
            

            {/* Moving Animated Data Particles */}
            {nodes.map((node, index) => (
              <circle
                key={`particle-${node.id}`}
                r={node.x < 600 ? 4 : 4.5}
                fill={node.x < 600 ? '#FF7A00' : '#00D9F5'}
                filter={node.x < 600 ? 'url(#particleOrangeGlow)' : 'url(#particleCyanGlow)'}
              >
                <animateMotion
                  dur={`${3.5 + index * 0.4}s`}
                  begin={`${index * 0.4}s`}
                  repeatCount="indefinite"
                  path={buildFlowPath(node)}
                />
                <animate
                  attributeName="opacity"
                  values="0.2;1;1;0.2"
                  dur={`${3.5 + index * 0.4}s`}
                  begin={`${index * 0.4}s`}
                  repeatCount="indefinite"
                />
              </circle>
            ))}

            {/* Static Ambient Orbit Dots (Matching Reference Image) */}
            
           
           

            {/* Central White Core Hub (600, 280) */}
            <g transform="translate(600, 280)">
              
              {/* Main White Central Circle */}
              <circle r="50" fill="#FFFFFF" stroke="#00D9F5" strokeWidth="1.5" filter="url(#centerShadow)" />
              <circle r="45" fill="none" stroke="#00D9F5" strokeWidth="0.8" strokeOpacity="0.25" />

              {/* Central Text */}
              <text y="4" textAnchor="middle" fill="#00D9F5" fontSize="14" fontWeight="800" letterSpacing="1.2">
               EIMPORA
              </text>
            </g>

            {/* Node Component Badges (Pill Cards) */}
            {nodes.map((n) => {
              const isOrange = n.color.startsWith('#FF');
              return (
                <g key={n.id} transform={`translate(${n.x}, ${n.y})`}>
                  <g className="node-float-inner" style={{ animationDelay: n.delay }}>
                    {/* Main White Pill Card */}
                    <rect
                      x="-95"
                      y="-24"
                      width="190"
                      height="48"
                      rx="24"
                      fill="#FFFFFF"
                      stroke={n.color}
                      strokeWidth="1.5"
                      filter={isOrange ? 'url(#orangePillGlow)' : 'url(#cyanPillGlow)'}
                    />

                    {/* Target Icon on Left */}
                    <circle cx="-68" cy="0" r="6" fill="#FFFFFF" stroke={n.color} strokeWidth="1.8" />
                    <circle cx="-68" cy="0" r="2.2" fill={n.color} />

                    {/* Badge Title & Category */}
                    <text x="-52" y="-3" textAnchor="start" fill="#0F172A" fontSize="11" fontWeight="700">
                      {n.title}
                    </text>
                    <text x="-52" y="11" textAnchor="start" fill={n.color} fontSize="8.5" fontWeight="800" letterSpacing="0.8">
                      {n.category}
                    </text>

                    {/* Connector Dot on Pill Boundary */}
                    <circle cx={n.dotOffset.x} cy={n.dotOffset.y} r="4" fill={n.color} stroke="#FFFFFF" strokeWidth="1.5" />
                  </g>
                </g>
              );
            })}
          </svg>
        </div>
      </div>

      <style>{`
        .node-float-inner {
          animation: nodeFloat 4s ease-in-out infinite;
        }

        @keyframes nodeFloat {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-5px);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .node-float-inner {
            animation: none !important;
          }
        }
      `}</style>
    </section>
  );
}
