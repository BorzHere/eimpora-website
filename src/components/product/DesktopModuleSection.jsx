import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Users, Banknote, Clock, Sparkles, Target, ShieldCheck, CheckCircle2,
  ArrowRight, RotateCcw, Terminal, Cpu, Play, Check, Search, Activity,
  Globe, Building2, Layers, RefreshCw, Zap, Lock, ChevronRight, LayoutGrid, Award
} from 'lucide-react';
import SectionHeading from '../common/SectionHeading';

const DESKTOP_MODULES = [
  {
    id: 'core-hr',
    name: 'Core HR & Global Registry',
    badge: 'Canonical Hub',
    icon: Users,
    color: 'from-cyan-500 to-blue-600',
    tagline: 'Single source of truth for global multi-entity employee records and hierarchies.',
    metrics: [
      { label: 'Active Profiles', value: '24,812' },
      { label: 'Record Accuracy', value: '99.98%' },
      { label: 'Sync Latency', value: '< 100ms' },
    ],
    features: [
      'Multi-entity & multi-currency employment contracts',
      'Automated worker classification & residency tags',
      'Real-time matrix org chart rendering',
      'Field-level audit & AES-256 encrypted personal data'
    ],
    liveData: {
      title: 'Global Employee Distribution',
      status: 'Synced with 14 Entities',
      items: [
        { label: 'North America Enterprise', val: '11,420 Active', status: 'Optimal' },
        { label: 'EMEA Regional Hub', val: '7,890 Active', status: 'Optimal' },
        { label: 'APAC Technology Center', val: '5,502 Active', status: 'Optimal' },
      ]
    },
    actionText: 'Manage Global Records',
    link: '/modules/core-hr'
  },
  {
    id: 'payroll',
    name: 'Multi-Entity Payroll Engine',
    badge: 'Zero Discrepancy',
    icon: Banknote,
    color: 'from-orange-500 to-amber-600',
    tagline: 'Automated multi-currency payroll processing with instant statutory lock.',
    metrics: [
      { label: 'Monthly Cycle', value: '$4.62M' },
      { label: 'Discrepancy Rate', value: '0.00%' },
      { label: 'Tax Rules Applied', value: '142 Local Rules' },
    ],
    features: [
      'Gross-to-net automated calculation engine',
      'Multi-currency statutory deduction compliance',
      'Direct bank payout API integration',
      'Cryptographically hashed audit lock prior to transfer'
    ],
    liveData: {
      title: 'Current Payroll Batch #2026-09',
      status: 'Ready for Sign-off',
      items: [
        { label: 'Base Salaries & Adjustments', val: '$3,890,200', status: 'Calculated' },
        { label: 'Statutory Taxes & Pensions', val: '$682,400', status: 'Locked' },
        { label: 'Approved Shift Allowances', val: '$47,400', status: 'Verified' },
      ]
    },
    actionText: 'Execute Payroll Run',
    link: '/modules/payroll'
  },
  {
    id: 'attendance',
    name: 'Biometric Attendance & Shift Sync',
    badge: 'Real-Time Sync',
    icon: Clock,
    color: 'from-cyan-500 to-teal-600',
    tagline: 'Hardware biometric terminal ingestion and geofenced mobile attendance.',
    metrics: [
      { label: 'Punch Reliability', value: '99.9%' },
      { label: 'Active Shifts', value: '1,420' },
      { label: 'Overtime Leakage', value: '-84%' },
    ],
    features: [
      'Direct hardware terminal integration (ZKTeco/Hikvision)',
      'Geofenced mobile check-in with liveness verification',
      'Automated shift rotation and overtime calculation',
      'Instant exception alerts for missing punches'
    ],
    liveData: {
      title: 'Shift Terminals Live Feed',
      status: '12 Terminals Connected',
      items: [
        { label: 'HQ Gate Terminal Alpha', val: '98.4% Present', status: 'Live' },
        { label: 'Logistics Facility Gate 2', val: '99.1% Present', status: 'Live' },
        { label: 'Remote Mobile Check-ins', val: '412 Verified', status: 'Active' },
      ]
    },
    actionText: 'View Terminal Logs',
    link: '/modules/attendance'
  },
  {
    id: 'ai-engine',
    name: 'Governed AI & Flight Intelligence',
    badge: 'AI Engine',
    icon: Sparkles,
    color: 'from-orange-500 to-rose-600',
    tagline: 'Predictive turn-over alerts and intelligent policy-guided automation.',
    metrics: [
      { label: 'Turnover Risk Precision', value: '94.2%' },
      { label: 'Active Signals', value: '3 Flagged' },
      { label: 'Audit Trail', value: '100% Logged' },
    ],
    features: [
      'Market compensation drift flight risk alerts',
      'Automated payroll anomaly detection before payout',
      'Policy compliance checks on high-value expense claims',
      'Human-in-the-loop authorization gates'
    ],
    liveData: {
      title: 'Governed AI Radar Signals',
      status: 'Continuous Monitoring',
      items: [
        { label: 'Engineering Flight Risk Alert', val: '2 Engineers Flagged', status: 'High Priority' },
        { label: 'Overtime Spike Anomaly', val: 'Branch 4 Cleared', status: 'Resolved' },
        { label: 'Policy Guardrail', val: '100% Compliant', status: 'Active' },
      ]
    },
    actionText: 'Explore AI Engine',
    link: '/ai'
  },
  {
    id: 'talent',
    name: 'ATS Recruitment & Candidate Pipeline',
    badge: 'Smart Sourcing',
    icon: Target,
    color: 'from-amber-500 to-orange-600',
    tagline: 'End-to-end recruitment with AI resume matching and paperless onboarding.',
    metrics: [
      { label: 'Open Requisitions', value: '14 Roles' },
      { label: 'Avg Time to Hire', value: '18 Days' },
      { label: 'Match Precision', value: '89%' },
    ],
    features: [
      'AI candidate skill vector scoring',
      'Collaborative scorecard interviewing for panels',
      'One-click e-signature offer letter generation',
      'Instant conversion from candidate to employee record'
    ],
    liveData: {
      title: 'Active Recruitment Pipelines',
      status: '42 Candidates in Pipeline',
      items: [
        { label: 'Senior Lead Architect', val: '4 Final Round', status: 'Offer Stage' },
        { label: 'Global Payroll Specialist', val: '8 Screened', status: 'Interview' },
        { label: 'DevOps Operations Manager', val: '12 Applicants', status: 'Screening' },
      ]
    },
    actionText: 'Inspect Talent Pipeline',
    link: '/modules/recruitment'
  }
];

export default function DesktopModuleSection() {
  // Stages: 'loading' -> 'reveal-name' -> 'ready'
  const [bootStage, setBootStage] = useState('loading');
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [activeLogIndex, setActiveLogIndex] = useState(0);
  const [selectedModuleId, setSelectedModuleId] = useState('core-hr');

  const bootLogs = [
    'Initializing Eimpora Secure Kernel...',
    'Establishing AES-256 Hashed Substrate...',
    'Loading Canonical Desktop Modules...',
    'Mounting Interactive Workstation Layout...',
    'Eimpora Desktop Environment Ready.'
  ];

  // Function to run the boot sequence
  const startBootSequence = () => {
    setBootStage('loading');
    setLoadingProgress(0);
    setActiveLogIndex(0);
  };

  useEffect(() => {
    if (bootStage !== 'loading') return;

    let progressVal = 0;
    const interval = setInterval(() => {
      progressVal += Math.floor(Math.random() * 12) + 8;
      if (progressVal >= 100) {
        progressVal = 100;
        setLoadingProgress(100);
        clearInterval(interval);

        // Step 2: Transition to reveal name after 300ms
        setTimeout(() => {
          setBootStage('reveal-name');

          // Step 3: Transition to ready module layout after 1.4s
          setTimeout(() => {
            setBootStage('ready');
          }, 1400);
        }, 300);
      } else {
        setLoadingProgress(progressVal);
        const logStep = Math.min(
          Math.floor((progressVal / 100) * bootLogs.length),
          bootLogs.length - 1
        );
        setActiveLogIndex(logStep);
      }
    }, 120);

    return () => clearInterval(interval);
  }, [bootStage]);

  const activeModule = DESKTOP_MODULES.find(m => m.id === selectedModuleId) || DESKTOP_MODULES[0];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Heading */}
      <SectionHeading
        eyebrow="Interactive Desktop Workstation"
        title="Command your workforce from a single desktop environment."
        description="Experience Eimpora's high-speed desktop interface built for executive control, instant module switching, and real-time operational governance."
        center
        dark={false}
      />

      {/* Desktop Window Frame Container */}
      <div className="mt-12 relative rounded-2xl border border-slate-300 bg-navy-950 text-white shadow-2xl overflow-hidden transition-all duration-500">

        {/* Top Desktop Window Bar */}
        <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-navy-900/90 backdrop-blur-md select-none">
          {/* Traffic Light Controls & Title */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <span className="h-3 w-3 rounded-full bg-rose-500 hover:opacity-80 transition-opacity cursor-pointer inline-block" title="Close Window" />
              <span className="h-3 w-3 rounded-full bg-amber-500 hover:opacity-80 transition-opacity cursor-pointer inline-block" title="Minimize Window" />
              <span className="h-3 w-3 rounded-full bg-emerald-500 hover:opacity-80 transition-opacity cursor-pointer inline-block" title="Expand Window" />
            </div>

            <div className="hidden sm:flex items-center gap-2 rounded-lg bg-white/5 border border-white/10 px-3 py-1 text-xs text-slate-300">
              <Lock className="w-3.5 h-3.5 text-brand-400" />
              <span className="font-mono text-[11px] text-slate-300">eimpora.desktop://workstation.local/v4.2</span>
            </div>
          </div>

          {/* Desktop Status & Replay Control */}
          <div className="flex items-center gap-3">
            {bootStage === 'ready' && (
              <div className="hidden md:flex items-center gap-2 text-xs text-emerald-400 font-semibold bg-emerald-500/10 px-2.5 py-1 rounded-md border border-emerald-500/20">
                <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                System Online · AES-256 Hashed
              </div>
            )}

            <button
              onClick={startBootSequence}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-orange-500/10 border border-orange-500/30 text-orange-300 hover:bg-orange-500/20 transition-all text-xs font-semibold"
              title="Replay System Boot Animation"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Replay Boot Animation</span>
            </button>
          </div>
        </div>

        {/* WINDOW BODY AREA */}
        <div className="min-h-[600px] flex flex-col justify-center relative bg-gradient-to-b from-navy-950 via-navy-900 to-navy-950 p-4 sm:p-6 lg:p-8">

          {/* STAGE 1: BOOT INITIALIZATION ANIMATION */}
          {bootStage === 'loading' && (
            <div className="flex flex-col items-center justify-center py-16 space-y-6 animate-fade-in text-center max-w-lg mx-auto">
              <div className="relative">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-brand-500 via-orange-400 to-brand-300 p-0.5 shadow-cyan-glow-lg animate-pulse">
                  <div className="w-full h-full bg-navy-950 rounded-2xl flex items-center justify-center">
                    <Cpu className="w-10 h-10 text-brand-400 animate-bounce" />
                  </div>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 rounded-full bg-brand-500 text-navy-950 flex items-center justify-center font-bold text-[11px] shadow-md">
                  4.2
                </div>
              </div>

              <div className="space-y-2 w-full">
                <div className="flex items-center justify-between text-xs font-semibold text-slate-300">
                  <span className="flex items-center gap-1.5 text-brand-300">
                    <Terminal className="w-3.5 h-3.5" />
                    Initializing Desktop Kernel
                  </span>
                  <span className="font-mono text-orange-400">{loadingProgress}%</span>
                </div>

                {/* Progress Bar */}
                <div className="w-full bg-navy-900 rounded-full h-2.5 overflow-hidden border border-white/10 p-0.5">
                  <div
                    className="bg-gradient-to-r from-brand-500 via-cyan-400 to-brand-glow h-full rounded-full transition-all duration-150 ease-out shadow-cyan-glow"
                    style={{ width: `${loadingProgress}%` }}
                  />
                </div>
              </div>

              {/* Console log status text */}
              <div className="p-3 rounded-lg border border-white/5 bg-black/40 w-full text-left font-mono text-xs text-slate-400 flex items-center justify-between">
                <span className="text-emerald-400 truncate">
                  &gt; {bootLogs[activeLogIndex]}
                </span>
                <span className="h-2 w-2 rounded-full bg-brand-400 animate-ping shrink-0" />
              </div>
            </div>
          )}

          {/* STAGE 2: NAME APPEARS ON DESKTOP */}
          {bootStage === 'reveal-name' && (
            <div className="flex flex-col items-center justify-center py-16 space-y-6 text-center animate-fade-in">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-400/40 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold text-brand-300 shadow-cyan-glow uppercase tracking-widest animate-pulse">
                <Sparkles className="w-4 h-4 text-orange-400" />
                Boot Authorization Passed
              </div>

              {/* Main Desktop App Name Reveal */}
              <div className="space-y-3">
                <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white transition-all transform duration-700 scale-105">
                  EIMPORA <span className="text-gradient-cyan">WORKFORCE OS</span>
                </h2>
                <p className="text-slate-300 text-sm sm:text-base max-w-md mx-auto font-medium">
                  Welcome, Executive Administrator. Launching module workstation layout...
                </p>
              </div>

              <div className="flex items-center gap-2 text-xs text-slate-400 font-mono">
                <RefreshCw className="w-3.5 h-3.5 animate-spin text-orange-400" />
                Rendering Desktop Module Interface...
              </div>
            </div>
          )}

          {/* STAGE 3: FULL DESKTOP MODULE LAYOUT */}
          {bootStage === 'ready' && (
            <div className="space-y-6 animate-fade-in">
              {/* Desktop Header Banner */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 p-4 rounded-xl border border-white/10 bg-navy-900/60 backdrop-blur-sm">
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-display text-xl font-bold text-white">
                      Eimpora Desktop Workstation
                    </h3>
                    <span className="px-2 py-0.5 rounded text-[10px] font-extrabold bg-orange-500/20 text-orange-300 border border-orange-500/30 uppercase tracking-wider">
                      v4.2 Enterprise
                    </span>
                  </div>
                  <p className="text-xs text-slate-300 mt-1">
                    Select a canonical module below to inspect real-time metrics, active capabilities, and governing workflows.
                  </p>
                </div>

                <div className="flex items-center gap-2 shrink-0">
                  <span className="text-xs text-slate-400">Active Context:</span>
                  <span className="text-xs font-semibold text-brand-300 bg-brand-500/10 px-2.5 py-1 rounded border border-brand-500/20">
                    Global HQ (14 Entities)
                  </span>
                </div>
              </div>

              {/* MODULE SELECTOR TABS DOCK */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
                {DESKTOP_MODULES.map((mod) => {
                  const Icon = mod.icon;
                  const isActive = mod.id === selectedModuleId;
                  const isOrangeModule = mod.color.includes('orange') || mod.color.includes('amber');
                  return (
                    <button
                      key={mod.id}
                      onClick={() => setSelectedModuleId(mod.id)}
                      className={`group relative p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between ${isActive
                        ? isOrangeModule
                          ? 'bg-gradient-to-b from-navy-850 to-navy-900 border-orange-500/80 shadow-lg shadow-orange-500/10'
                          : 'bg-gradient-to-b from-navy-850 to-navy-900 border-cyan-400/80 shadow-cyan-glow'
                        : 'bg-navy-900/40 border-white/5 hover:border-white/20 hover:bg-navy-900/70'
                        }`}
                    >
                      {isActive && (
                        <span className="absolute -top-1 -right-1 flex h-3 w-3">
                          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${isOrangeModule ? 'bg-orange-400' : 'bg-cyan-400'}`} />
                          <span className={`relative inline-flex rounded-full h-3 w-3 ${isOrangeModule ? 'bg-orange-400' : 'bg-cyan-400'}`} />
                        </span>
                      )}

                      <div className="flex items-center justify-between mb-2">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${mod.color} text-white shadow-md group-hover:scale-105 transition-transform`}>
                          <Icon className="w-4 h-4" />
                        </div>
                        <span className="text-[10px] font-bold text-slate-400 bg-white/5 px-1.5 py-0.5 rounded">
                          {mod.badge}
                        </span>
                      </div>

                      <div>
                        <div className={`text-xs font-bold transition-colors ${isActive ? (isOrangeModule ? 'text-orange-300' : 'text-cyan-300') : 'text-slate-200 group-hover:text-white'}`}>
                          {mod.name}
                        </div>
                      </div>
                    </button>
                  );
                })}
              </div>

              {/* ACTIVE MODULE DETAIL PANEL */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 rounded-xl border border-white/10 bg-navy-900/80 p-5 sm:p-6 backdrop-blur-md">

                {/* Left Overview Column */}
                <div className="lg:col-span-7 space-y-5">
                  <div className="space-y-2">
                    <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded bg-orange-500/10 border border-orange-500/20 text-xs font-bold text-orange-300">
                      <Zap className="w-3.5 h-3.5 text-orange-400" />
                      Active Desktop Module View
                    </div>
                    <h4 className="font-display text-2xl font-bold text-white flex items-center gap-2">
                      {activeModule.name}
                    </h4>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {activeModule.tagline}
                    </p>
                  </div>

                  {/* Metrics Cards */}
                  <div className="grid grid-cols-3 gap-3">
                    {activeModule.metrics.map((m, idx) => {
                      const isOrangeVal = idx % 2 === 1;
                      return (
                        <div key={idx} className="p-3 rounded-lg border border-white/10 bg-navy-950/60">
                          <div className="text-[11px] text-slate-400 font-medium">{m.label}</div>
                          <div className={`text-base sm:text-lg font-bold font-display mt-0.5 ${isOrangeVal ? 'text-orange-400' : 'text-cyan-300'}`}>
                            {m.value}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Core Capabilities */}
                  <div className="space-y-2">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                      Engine Capabilities & Rules
                    </span>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {activeModule.features.map((feat, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-slate-300 p-2 rounded bg-white/5 border border-white/5">
                          <CheckCircle2 className={`w-4 h-4 ${idx % 2 === 0 ? 'text-orange-400' : 'text-emerald-400'} shrink-0 mt-0.5`} />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <Link
                      to={activeModule.link}
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-bold text-navy-950 bg-gradient-to-r from-brand-400 to-brand-300 hover:from-brand-300 hover:to-brand-400 transition-all shadow-cyan-glow uppercase tracking-wider"
                    >
                      Open Full {activeModule.name} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>

                {/* Right Interactive Workspace Monitor Widget */}
                <div className="lg:col-span-5 rounded-xl border border-white/10 bg-navy-950 p-4 space-y-4 flex flex-col justify-between">
                  <div className="space-y-3">
                    <div className="flex items-center justify-between border-b border-white/10 pb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-400 flex items-center gap-2">
                        <Activity className="w-4 h-4 text-brand-400 animate-pulse" />
                        {activeModule.liveData.title}
                      </span>
                      <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
                        {activeModule.liveData.status}
                      </span>
                    </div>

                    <div className="space-y-2">
                      {activeModule.liveData.items.map((item, idx) => (
                        <div key={idx} className="p-3 rounded-lg border border-white/5 bg-navy-900/60 flex items-center justify-between text-xs">
                          <div>
                            <div className="font-semibold text-white">{item.label}</div>
                            <div className="text-[11px] text-orange-300 font-mono mt-0.5">{item.val}</div>
                          </div>
                          <span className="text-[10px] font-bold text-slate-300 bg-white/10 px-2 py-0.5 rounded">
                            {item.status}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Operational Security Footnote */}
                  <div className="p-3 rounded-lg border border-orange-500/20 bg-orange-500/5 text-xs text-slate-300 flex items-center gap-2.5">
                    <ShieldCheck className="w-5 h-5 text-orange-400 shrink-0" />
                    <p className="text-[11px] leading-tight">
                      All desktop module mutations are verified against RBAC security matrices and hashed into the immutable central log.
                    </p>
                  </div>
                </div>

              </div>
            </div>
          )}

        </div>

        {/* Footer Status Bar inside Desktop */}
        <div className="px-4 py-2 bg-navy-900 border-t border-white/10 flex flex-wrap items-center justify-between text-[11px] text-slate-400">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
              Eimpora Core Kernel v4.2.0
            </span>
            <span className="hidden sm:inline-block text-slate-600">|</span>
            <span className="hidden sm:inline-block">25 Canonical Modules Available</span>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-slate-400">Mode: Enterprise Desktop</span>
          </div>
        </div>

      </div>
    </div>
  );
}
