import React, { useState } from 'react';
import {
  ShieldCheck, Lock, KeyRound, FileCheck, Server, BadgeCheck,
  Eye, RefreshCw, Cpu, Database, Globe, Users, Layers, Activity
} from 'lucide-react';

const SECURITY_NODES = [
  {
    id: 'identity',
    title: 'Identity & SSO Federation',
    subtitle: 'SAML 2.0 / OIDC & SCIM 2.0',
    category: 'Authentication Perimeter',
    x: 230,
    y: 130,
    metrics: [
      { label: 'Protocols', value: 'SAML 2.0, OIDC, SCIM 2.0' },
      { label: 'Providers', value: 'Microsoft Entra ID, Okta, Ping' },
      { label: 'MFA Enforcement', value: '100% Strict Required' },
      { label: 'Session Timeouts', value: '15-min Auto Invalidation' }
    ],
    details: 'Enforces centralized enterprise single sign-on with real-time SCIM user provisioning and instant access revocation upon offboarding.'
  },
  {
    id: 'encryption',
    title: 'AES-256 Field Column Encryption',
    subtitle: 'Envelope Crypto & CMEK Vault',
    category: 'Data Protection Layer',
    x: 970,
    y: 130,
    metrics: [
      { label: 'Algorithm', value: 'AES-256-GCM Column-Level' },
      { label: 'Key Vault', value: 'AWS KMS / Azure Key Vault (CMEK)' },
      { label: 'In-Transit', value: 'TLS 1.3 / Perfect Forward Secrecy' },
      { label: 'Key Rotation', value: 'Automated 90-Day Schedule' }
    ],
    details: 'Sensitive PII, biometric templates, and salary data are encrypted at rest per-column using customer-managed cryptographic keys.'
  },
  {
    id: 'audit',
    title: 'Immutable Cryptographic Audit',
    subtitle: 'SHA-256 Hashed Event Stream',
    category: 'Governance & Compliance',
    x: 230,
    y: 430,
    metrics: [
      { label: 'Hash Digest', value: 'Cryptographic SHA-256 Chain' },
      { label: 'SOX 404 Audit', value: '100% Immutable Log' },
      { label: 'Event Retention', value: '7-Year Audit Vault' },
      { label: 'Real-time SIEM', value: 'Splunk & Datadog Streaming' }
    ],
    details: 'Every record view, export, payroll lock, and permission mutation is cryptographically hashed into an append-only, tamper-proof ledger.'
  },
  {
    id: 'rbac',
    title: 'RBAC & Field Masking Guard',
    subtitle: 'Least-Privilege & SoD Scoping',
    category: 'Access Policy Engine',
    x: 970,
    y: 430,
    metrics: [
      { label: 'Policy Model', value: 'Granular Attribute & RBAC' },
      { label: 'Field Masking', value: 'Automatic SSN / Salary Redaction' },
      { label: 'SoD Enforcement', value: 'Multi-tier Payroll Sign-off' },
      { label: 'Audit Scoping', value: 'Zero Cross-Tenant Leakage' }
    ],
    details: 'Enforces Segregation of Duties (SoD) across HR managers, finance directors, and executive reviewers with automatic field masking.'
  }
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

export default function SecuritySvgModule() {
  const [activeNodeId, setActiveNodeId] = useState('encryption');
  const [isLiveStream, setIsLiveStream] = useState(true);

  const activeNode = SECURITY_NODES.find((n) => n.id === activeNodeId) || SECURITY_NODES[1];

  return (
    <div className="relative overflow-hidden rounded-3xl border-2 border-cyan-500 bg-navy-900 p-6 sm:p-8 lg:p-10 shadow-2xl shadow-cyan-500/30 backdrop-blur-2xl">
      {/* Background Radial Glow & Cyan Ambient Highlights */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />
        <div className="absolute left-1/4 top-1/3 h-[250px] w-[250px] rounded-full bg-cyan-400/10 blur-[80px]" />
        <div className="absolute right-1/4 bottom-1/3 h-[250px] w-[250px] rounded-full bg-cyan-300/10 blur-[80px]" />
      </div>

      {/* Header bar of the SVG module */}
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-cyan-500/20">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-bold uppercase tracking-widest">
            <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            Interactive Security Substrate Topology
          </div>
          <h3 className="font-display text-2xl sm:text-3xl font-bold text-white mt-2">
            Zero-Trust Data Protection Kernel
          </h3>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setIsLiveStream(!isLiveStream)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold transition-all border ${isLiveStream
              ? 'bg-orange-500/20 border-orange-400 text-orange-300 shadow-orange-500/30'
              : 'bg-white/5 border-white/10 text-slate-400 hover:text-white'
              }`}
          >
            <RefreshCw className={`w-3.5 h-3.5 ${isLiveStream ? 'animate-spin' : ''}`} />
            {isLiveStream ? 'Live Packet Stream Active' : 'Stream Paused'}
          </button>
        </div>
      </div>

      {/* SVG Diagram Canvas */}
      <div className="relative z-10 my-6">
        <svg
          viewBox="0 0 1200 560"
          className="w-full h-auto select-none overflow-visible"
          aria-label="Eimpora Zero-Trust Security Architecture Diagram"
        >
          <defs>
            {/* Cyan Stroke & Glow Gradients */}
            <linearGradient id="secCyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" stopOpacity="1" />
              <stop offset="50%" stopColor="#fb923c" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#fdba74" stopOpacity="0.9" />
            </linearGradient>

            <linearGradient id="secLineGlow" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b1f10" stopOpacity="0.3" />
              <stop offset="50%" stopColor="#f97316" stopOpacity="0.9" />
              <stop offset="100%" stopColor="#3b1f10" stopOpacity="0.3" />
            </linearGradient>

            <linearGradient id="centerCoreBg" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#0f172a" />
              <stop offset="50%" stopColor="#1f2937" />
              <stop offset="100%" stopColor="#f97316" />
            </linearGradient>

            <filter id="cyanGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="6" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          {/* Background Grid Pattern */}
          <g opacity="0.05">
            <line x1="0" y1="140" x2="1200" y2="140" stroke="#22d3ee" strokeDasharray="4 8" strokeWidth="1" />
            <line x1="0" y1="280" x2="1200" y2="280" stroke="#22d3ee" strokeDasharray="4 8" strokeWidth="1" />
            <line x1="0" y1="420" x2="1200" y2="420" stroke="#22d3ee" strokeDasharray="4 8" strokeWidth="1" />
            <line x1="300" y1="0" x2="300" y2="560" stroke="#22d3ee" strokeDasharray="4 8" strokeWidth="1" />
            <line x1="600" y1="0" x2="600" y2="560" stroke="#22d3ee" strokeDasharray="4 8" strokeWidth="1" />
            <line x1="900" y1="0" x2="900" y2="560" stroke="#22d3ee" strokeDasharray="4 8" strokeWidth="1" />
          </g>

          {/* Animated Connecting Vector Lines (Nodes -> Central Core at 600, 280) */}
          {SECURITY_NODES.map((node) => {
            const isSelected = activeNodeId === node.id;
            return (
              <g key={`connection-${node.id}`}>
                {/* Main line */}
                <line
                  x1={node.x}
                  y1={node.y}
                  x2={600}
                  y2={280}
                  stroke={isSelected ? '#22d3ee' : '#083344'}
                  strokeWidth={isSelected ? '2.5' : '2.5'}        
                  opacity={isSelected ? 1 : 0.9}
                  filter={isSelected ? 'url(#cyanGlowFilter)' : 'none'}
                />

                {/* Animated Data Packets along connecting lines */}
                {isLiveStream && (
                  <circle r={isSelected ? '4' : '2.5'} fill="#22d3ee" filter="url(#cyanGlowFilter)">
                    <animate
                      attributeName="cx"
                      values={`${node.x};600;${node.x}`}
                      dur={`${3.5 + (node.x > 600 ? 0.4 : 0)}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="cy"
                      values={`${node.y};280;${node.y}`}
                      dur={`${3.5 + (node.x > 600 ? 0.4 : 0)}s`}
                      repeatCount="indefinite"
                    />
                    <animate
                      attributeName="opacity"
                      values="0.2;1;0.2"
                      dur="3.5s"
                      repeatCount="indefinite"
                    />
                  </circle>
                )}
              </g>
            );
          })}

          {/* Outer Protective Perimeter Shield Rings */}
          <g className="origin-center" style={{ transformOrigin: '690px 290px' }}>
            {/* Outer rotating dashed ring */}
            <polygon
            points={hexPoints(599, 282, 175)}
            fill="none"
            stroke="#22d3ee"
            strokeOpacity="0.4"
            strokeWidth="1"
            strokeDasharray="4 7"
            className="animate-[spin_40s_linear_infinite]"
              style={{ transformOrigin: '600px 280px' }}
          />

          
          {/* Outer rotating dashed ring */}
            <polygon
            points={hexPoints(599, 282, 175)}
            fill="none"
            stroke="#22d3ee"
            strokeWidth="1"
            strokeOpacity="0.4"
            strokeDasharray="4 7"aa
            className="animate-[spin_20s_linear_infinite]"
              style={{ transformOrigin: '600px 280px' }}
          />
            
          </g>

          {/* CENTRAL CORE: ZERO-TRUST SECURITY KERNEL */}
          <g className="cursor-pointer" onClick={() => setActiveNodeId('encryption')}>
            {/* Glowing Core Hexagon Base */}
            <polygon
              points="600,149 715,215 714,351 600,415 483,350 483,215"
              fill="url(#centerCoreBg)"
              stroke="#22d3ee"
              strokeWidth="1.5"
              filter="url(#cyanGlowFilter)"
            />

            {/* Inner Shield Overlay Polygon */}
            <polygon
              points="600,170 694,229 693,337 600,392 504,339 504,229"
              fill="none"
              stroke="#ffffff"
              strokeWidth="1"
              strokeOpacity="0.5"
            />

            {/* Center Lock Badge */}
            <circle cx="600" cy="256" r="19" fill="#083344" stroke="#22d3ee" strokeWidth="1.5" />
            <rect x="592" y="254" width="16" height="12" rx="2.5" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M596 254V250.5C596 247.9 597.9 246 600.5 246C603.1 246 605 247.9 605 250.5V254" fill="none" stroke="#22d3ee" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="600" cy="260" r="2.2" fill="#22d3ee" />
            

            {/* Label in Core */}
            <text x="600" y="295" textAnchor="middle" fill="#ffffff" fontSize="15" fontWeight="600" letterSpacing="1.2">
              ZERO-TRUST KERNEL
            </text>
            <text x="600" y="311" textAnchor="middle" fill="#22d3ee" fontSize="10" fontWeight="600" letterSpacing="1">
              AES-256 & SOX GOVERNANCE
            </text>
            
          </g>

          {/* 4 CORNER PERIMETER SECURITY NODES */}
          {SECURITY_NODES.map((node) => {
            const isSelected = activeNodeId === node.id;
            return (
              <g
                key={node.id}
                className="cursor-pointer transition-transform duration-300"
                onClick={() => setActiveNodeId(node.id)}
              >
                {/* Selection Halo */}
                {isSelected && (
                  <rect
                    x={node.x - 145}
                    y={node.y - 48}
                    width="290"
                    height="96"
                    rx="12"
                    fill="none"
                    stroke="#22d3ee"
                    strokeWidth="2"
                    filter="url(#cyanGlowFilter)"
                  />
                )}

                {/* Node Box */}
                <rect
                  x={node.x - 140}
                  y={node.y - 43}
                  width="280"
                  height="86"
                  rx="10"
                  fill={isSelected ? '#083344' : '#030712'}
                  fillOpacity={isSelected ? '0.95' : '0.85'}
                  stroke={isSelected ? '#22d3ee' : '#22d3ee'}
                  strokeWidth={isSelected ? '1.8' : '1'}
                />

               

                {/* Node Status Dot */}
                <circle
                  cx={node.x - 118}
                  cy={node.y - 20}
                  r="4"
                  fill="#22d3ee"
                  filter={isSelected ? 'url(#cyanGlowFilter)' : 'none'}
                />

                {/* Category Header */}
                <text
                  x={node.x - 106}
                  y={node.y - 17}
                  fill="#22d3ee"
                  fontSize="9.5"
                  fontWeight="700"
                  letterSpacing="0.8"
                >
                  {node.category.toUpperCase()}
                </text>

                {/* Title */}
                <text
                  x={node.x - 118}
                  y={node.y + 7}
                  fill="#ffffff"
                  fontSize="12.5"
                  fontWeight="700"
                >
                  {node.title}
                </text>

                {/* Subtitle */}
                <text
                  x={node.x - 118}
                  y={node.y + 25}
                  fill={isSelected ? '#67e8f9' : '#94a3b8'}
                  fontSize="10"
                  fontWeight="500"
                >
                  {node.subtitle}
                </text>

                {/* Click / Select Tag */}
                <text
                  x={node.x + 122}
                  y={node.y + 25}
                  textAnchor="end"
                  fill={isSelected ? '#22d3ee' : '#475569'}
                  fontSize="9"
                  fontWeight="600"
                >
                  {isSelected ? 'ACTIVE' : 'SELECT'}
                </text>
              </g>
            );
          })}
        </svg>
      </div>

      {/* Interactive Detail Inspector Panel below SVG */}
      <div className="relative z-10 mt-6 p-6 rounded-2xl border border-cyan-500/30 bg-navy-900/90 text-white shadow-xl">
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 pb-4 border-b border-cyan-500/20">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-cyan-500/20 border border-cyan-400 text-cyan-300">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest">
                Selected Security Node: {activeNode.category}
              </span>
              <h4 className="font-display font-bold text-xl text-white">{activeNode.title}</h4>
            </div>
          </div>

          <div className="text-xs text-slate-300 max-w-lg leading-relaxed font-normal">
            {activeNode.details}
          </div>
        </div>

        {/* Metrics Grid */}
        <div className="mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
          {activeNode.metrics.map((m, idx) => (
            <div key={idx} className="p-3.5 rounded-xl border border-cyan-500/20 bg-navy-950/60 text-center">
              <span className="text-[11px] font-semibold text-brand-400 block mb-1">{m.label}</span>
              <span className="font-mono text-xs sm:text-sm font-bold text-white">{m.value}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
