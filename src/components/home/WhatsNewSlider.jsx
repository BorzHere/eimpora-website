import React, { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, ShieldCheck, Cpu, Network, Sparkles, Activity, Layers } from "lucide-react";

const WHATS_NEW_SLIDES = [
  {
    id: "ai-spend",
    category: "Governed AI",
    title: "AI Spend Console & Token Governor",
    description: "Get a clear view of AI compute costs and tie LLM token usage directly to business outcomes, all mapped to your workforce hierarchy.",
    linkText: "Learn more",
    linkUrl: "/ai",
    badge: "New Feature",
    graphic: (
      <div className="w-full h-full bg-gradient-to-br from-slate-100 via-white to-slate-100 p-5 flex flex-col justify-between select-none font-sans text-navy-950">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-xs font-bold tracking-tight text-navy-950">AI Spend Console</span>
          </div>
          <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
            Live Stream
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 my-2">
          <div className="p-3 rounded-xl bg-white border border-slate-200/60 shadow-xs">
            <span className="text-[10px] text-slate-500 font-medium block">Merged PRs (30d)</span>
            <span className="text-sm font-bold text-navy-950 mt-0.5 block">1,500</span>
            <span className="text-[10px] text-emerald-600 font-semibold">↑ 2.0% efficiency</span>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200/60 shadow-xs">
            <span className="text-[10px] text-slate-500 font-medium block">Total AI Cost (30d)</span>
            <span className="text-sm font-bold text-navy-950 mt-0.5 block">$98.4k</span>
            <span className="text-[10px] font-semibold text-orange-600">↓ 3.5% under cap</span>
          </div>
        </div>

        {/* Mini Chart Graphic */}
        <div className="bg-white p-3 rounded-xl border border-slate-200/60">
          <div className="flex items-center justify-between text-[10px] font-semibold text-slate-500 mb-2">
            <span>AI Token Usage vs PR Rate</span>
            <span className="text-cyan-600 font-bold">98.2% Accuracy</span>
          </div>
          <div className="h-10 w-full flex items-end gap-1.5 pt-1">
            {[35, 50, 40, 65, 80, 60, 90, 75, 95, 85].map((h, i) => (
              <div key={i} className="flex-1 bg-slate-100 rounded-xs overflow-hidden h-full flex items-end">
                <div
                  className="w-full bg-gradient-to-t from-cyan-500 to-orange-400 rounded-xs transition-all"
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "mobile-biometrics",
    category: "Mobile & Field",
    title: "Biometric Field Check-In 3.0",
    description: "Empower non-desk employees to clock in with anti-spoofing biometrics, offline buffer sync, and automated GPS geofencing.",
    linkText: "Learn more",
    linkUrl: "/solutions/distributed-workforce",
    badge: "Mobile App 3.0",
    graphic: (
      <div className="w-full h-full bg-gradient-to-br from-slate-100 via-white to-cyan-50/40 p-5 flex flex-col justify-between select-none font-sans text-navy-950">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
            <span className="text-xs font-bold text-navy-950">Biometric Mobile Sync</span>
          </div>
          <span className="text-[10px] font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded-full">
            GPS Locked
          </span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-medium text-slate-500">Terminal ID: #GEO-402</span>
            <div className="text-xs font-bold text-navy-950 flex items-center gap-1.5">
              <span>Facial Biometric Verified</span>
            </div>
          </div>
          <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
            ✓
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold">
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-center">
            Offline Buffer: 0
          </div>
          <div className="p-2 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-800 text-center">
            Anti-Spoof: Active
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "automated-compliance",
    category: "Security & Governance",
    title: "Eimpora Automated Compliance",
    description: "SOC 2 Type II evidence collection, policy violation remediation, and global workforce compliance readiness happening continuously.",
    linkText: "Learn more",
    linkUrl: "/security",
    badge: "SOC 2 Verified",
    graphic: (
      <div className="w-full h-full bg-gradient-to-br from-amber-50/70 via-white to-slate-100 p-5 flex flex-col justify-between select-none font-sans text-navy-950">
        <div className="flex items-center justify-between border-b border-amber-200/60 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-orange-600" />
            </div>
            <span className="text-xs font-bold text-navy-950">Automated Compliance</span>
          </div>
          <span className="text-[10px] font-bold text-orange-600 bg-orange-100/70 px-2 py-0.5 rounded-full">
            Active Guard
          </span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-[10px] font-semibold text-slate-500 block">SOC 2 Type II Framework</span>
            <span className="text-xs font-bold text-emerald-700 mt-0.5 flex items-center gap-1">
              ✓ 132 of 136 monitors passing
            </span>
          </div>
          <div className="w-9 h-9 rounded-full border-2 border-emerald-500 border-t-transparent flex items-center justify-center text-[10px] font-extrabold text-emerald-600">
            97%
          </div>
        </div>

        <div className="bg-amber-50/80 border border-amber-200/80 p-2.5 rounded-xl flex items-center justify-between text-[11px] font-semibold text-amber-900">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            Needs setup
          </span>
          <span className="text-[10px] text-amber-700 font-medium">3 policies ready for review</span>
        </div>
      </div>
    ),
  },
  {
    id: "data-cloud",
    category: "Integrations",
    title: "Unified Enterprise Data Cloud",
    description: "Turn on business intelligence, executive dashboards, and instant sync by connecting your 200+ daily tools to Eimpora.",
    linkText: "Learn more",
    linkUrl: "/platform",
    badge: "200+ Connectors",
    graphic: (
      <div className="w-full h-full bg-gradient-to-br from-navy-950 via-slate-900 to-navy-900 p-5 flex flex-col items-center justify-center relative overflow-hidden select-none">
        <div className="absolute inset-0 bg-radial-glow opacity-30" />

        {/* Central Glowing Node */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-orange-500 via-amber-400 to-cyan-400 p-0.5 shadow-lg shadow-orange-500/20">
            <div className="w-full h-full bg-navy-950 rounded-[14px] flex items-center justify-center">
              <Cpu className="w-7 h-7 text-cyan-400" />
            </div>
          </div>
          <span className="text-[11px] font-bold text-white tracking-widest uppercase mt-2.5 bg-navy-900/80 px-2.5 py-0.5 rounded-full border border-white/10">
            Core Substrate
          </span>
        </div>

        {/* Orbiting Connector Grid */}
        <div className="grid grid-cols-4 gap-2.5 mt-4 w-full relative z-10">
          {[
            { label: "Salesforce", bg: "bg-sky-500/20 border-sky-400/40 text-sky-300" },
            { label: "Slack", bg: "bg-emerald-500/20 border-emerald-400/40 text-emerald-300" },
            { label: "GitHub", bg: "bg-purple-500/20 border-purple-400/40 text-purple-300" },
            { label: "Workday", bg: "bg-amber-500/20 border-amber-400/40 text-amber-300" },
          ].map((item, idx) => (
            <div
              key={idx}
              className={`p-2 rounded-xl border ${item.bg} backdrop-blur-md text-center text-[10px] font-bold truncate shadow-xs`}
            >
              {item.label}
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "ai-spend",
    category: "Governed AI",
    title: "AI Spend Console & Token Governor",
    description: "Get a clear view of AI compute costs and tie LLM token usage directly to business outcomes, all mapped to your workforce hierarchy.",
    linkText: "Learn more",
    linkUrl: "/ai",
    badge: "New Feature",
    graphic: (
      <div className="w-full h-full bg-gradient-to-br from-slate-100 via-white to-slate-100 p-5 flex flex-col justify-between select-none font-sans text-navy-950">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-xs font-bold tracking-tight text-navy-950">AI Spend Console</span>
          </div>
          <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
            Live Stream
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 my-2">
          <div className="p-3 rounded-xl bg-white border border-slate-200/60 shadow-xs">
            <span className="text-[10px] text-slate-500 font-medium block">Merged PRs (30d)</span>
            <span className="text-sm font-bold text-navy-950 mt-0.5 block">1,500</span>
            <span className="text-[10px] text-emerald-600 font-semibold">↑ 2.0% efficiency</span>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200/60 shadow-xs">
            <span className="text-[10px] text-slate-500 font-medium block">Total AI Cost (30d)</span>
            <span className="text-sm font-bold text-navy-950 mt-0.5 block">$98.4k</span>
            <span className="text-[10px] font-semibold text-orange-600">↓ 3.5% under cap</span>
          </div>
        </div>

        {/* Mini Chart Graphic */}
        <div className="bg-white p-3 rounded-xl border border-slate-200/60">
          <div className="flex items-center justify-between text-[10px] font-semibold text-slate-500 mb-2">
            <span>AI Token Usage vs PR Rate</span>
            <span className="text-cyan-600 font-bold">98.2% Accuracy</span>
          </div>
          <div className="h-10 w-full flex items-end gap-1.5 pt-1">
            {[35, 50, 40, 65, 80, 60, 90, 75, 95, 85].map((h, i) => (
              <div key={i} className="flex-1 bg-slate-100 rounded-xs overflow-hidden h-full flex items-end">
                <div
                  className="w-full bg-gradient-to-t from-cyan-500 to-orange-400 rounded-xs transition-all"
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "mobile-biometrics",
    category: "Mobile & Field",
    title: "Biometric Field Check-In 3.0",
    description: "Empower non-desk employees to clock in with anti-spoofing biometrics, offline buffer sync, and automated GPS geofencing.",
    linkText: "Learn more",
    linkUrl: "/solutions/distributed-workforce",
    badge: "Mobile App 3.0",
    graphic: (
      <div className="w-full h-full bg-gradient-to-br from-slate-100 via-white to-cyan-50/40 p-5 flex flex-col justify-between select-none font-sans text-navy-950">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
            <span className="text-xs font-bold text-navy-950">Biometric Mobile Sync</span>
          </div>
          <span className="text-[10px] font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded-full">
            GPS Locked
          </span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-medium text-slate-500">Terminal ID: #GEO-402</span>
            <div className="text-xs font-bold text-navy-950 flex items-center gap-1.5">
              <span>Facial Biometric Verified</span>
            </div>
          </div>
          <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
            ✓
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold">
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-center">
            Offline Buffer: 0
          </div>
          <div className="p-2 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-800 text-center">
            Anti-Spoof: Active
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "automated-compliance",
    category: "Security & Governance",
    title: "Eimpora Automated Compliance",
    description: "SOC 2 Type II evidence collection, policy violation remediation, and global workforce compliance readiness happening continuously.",
    linkText: "Learn more",
    linkUrl: "/security",
    badge: "SOC 2 Verified",
    graphic: (
      <div className="w-full h-full bg-gradient-to-br from-amber-50/70 via-white to-slate-100 p-5 flex flex-col justify-between select-none font-sans text-navy-950">
        <div className="flex items-center justify-between border-b border-amber-200/60 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-orange-600" />
            </div>
            <span className="text-xs font-bold text-navy-950">Automated Compliance</span>
          </div>
          <span className="text-[10px] font-bold text-orange-600 bg-orange-100/70 px-2 py-0.5 rounded-full">
            Active Guard
          </span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-[10px] font-semibold text-slate-500 block">SOC 2 Type II Framework</span>
            <span className="text-xs font-bold text-emerald-700 mt-0.5 flex items-center gap-1">
              ✓ 132 of 136 monitors passing
            </span>
          </div>
          <div className="w-9 h-9 rounded-full border-2 border-emerald-500 border-t-transparent flex items-center justify-center text-[10px] font-extrabold text-emerald-600">
            97%
          </div>
        </div>

        <div className="bg-amber-50/80 border border-amber-200/80 p-2.5 rounded-xl flex items-center justify-between text-[11px] font-semibold text-amber-900">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            Needs setup
          </span>
          <span className="text-[10px] text-amber-700 font-medium">3 policies ready for review</span>
        </div>
      </div>
    ),
  },
  {
    id: "eimpora-plus",
    category: "Resource Hub",
    title: "Bingeworthy Business & HR Insights",
    description: "Top HR, IT, and Finance insights: video guides, multi-entity payroll playbooks, and global compliance frameworks to level up your team.",
    linkText: "Explore Eimpora+",
    linkUrl: "/resources",
    badge: "Eimpora+ Masterclass",
    graphic: (
      <div className="w-full h-full bg-gradient-to-br from-navy-950 via-slate-950 to-orange-950 p-6 flex flex-col justify-between relative overflow-hidden select-none text-white">
        <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl pointer-events-none" />

        <div className="flex items-center justify-between">
          <span className="text-xs font-extrabold tracking-widest text-orange-400 uppercase">
            EIMPORA+
          </span>
          <span className="text-[10px] font-bold text-white/90 bg-white/10 px-2 py-0.5 rounded-full border border-white/20">
            Exclusive Series
          </span>
        </div>

        <div className="my-auto">
          <h4 className="font-display text-xl font-bold tracking-tight text-white leading-tight">
            EIMPORA<span className="text-orange-400">+</span>
          </h4>
          <p className="text-xs text-slate-300 mt-1 font-light">
            Global Workforce Leadership Summit 2026
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-white/10 text-[10px] font-medium text-slate-300">
          <span>12 Video Playbooks</span>
          <span className="text-cyan-400 font-bold flex items-center gap-1">
            Watch Now <ArrowUpRight className="w-3 h-3" />
          </span>
        </div>
      </div>
    ),
  },
  {
    id: "ai-spend",
    category: "Governed AI",
    title: "AI Spend Console & Token Governor",
    description: "Get a clear view of AI compute costs and tie LLM token usage directly to business outcomes, all mapped to your workforce hierarchy.",
    linkText: "Learn more",
    linkUrl: "/ai",
    badge: "New Feature",
    graphic: (
      <div className="w-full h-full bg-gradient-to-br from-slate-100 via-white to-slate-100 p-5 flex flex-col justify-between select-none font-sans text-navy-950">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-3">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-500 animate-pulse" />
            <span className="text-xs font-bold tracking-tight text-navy-950">AI Spend Console</span>
          </div>
          <span className="text-[10px] font-semibold text-emerald-600 bg-emerald-50 border border-emerald-200/60 px-2 py-0.5 rounded-full">
            Live Stream
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 my-2">
          <div className="p-3 rounded-xl bg-white border border-slate-200/60 shadow-xs">
            <span className="text-[10px] text-slate-500 font-medium block">Merged PRs (30d)</span>
            <span className="text-sm font-bold text-navy-950 mt-0.5 block">1,500</span>
            <span className="text-[10px] text-emerald-600 font-semibold">↑ 2.0% efficiency</span>
          </div>
          <div className="p-3 rounded-xl bg-white border border-slate-200/60 shadow-xs">
            <span className="text-[10px] text-slate-500 font-medium block">Total AI Cost (30d)</span>
            <span className="text-sm font-bold text-navy-950 mt-0.5 block">$98.4k</span>
            <span className="text-[10px] font-semibold text-orange-600">↓ 3.5% under cap</span>
          </div>
        </div>

        {/* Mini Chart Graphic */}
        <div className="bg-white p-3 rounded-xl border border-slate-200/60">
          <div className="flex items-center justify-between text-[10px] font-semibold text-slate-500 mb-2">
            <span>AI Token Usage vs PR Rate</span>
            <span className="text-cyan-600 font-bold">98.2% Accuracy</span>
          </div>
          <div className="h-10 w-full flex items-end gap-1.5 pt-1">
            {[35, 50, 40, 65, 80, 60, 90, 75, 95, 85].map((h, i) => (
              <div key={i} className="flex-1 bg-slate-100 rounded-xs overflow-hidden h-full flex items-end">
                <div
                  className="w-full bg-gradient-to-t from-cyan-500 to-orange-400 rounded-xs transition-all"
                  style={{ height: `${h}%` }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "mobile-biometrics",
    category: "Mobile & Field",
    title: "Biometric Field Check-In 3.0",
    description: "Empower non-desk employees to clock in with anti-spoofing biometrics, offline buffer sync, and automated GPS geofencing.",
    linkText: "Learn more",
    linkUrl: "/solutions/distributed-workforce",
    badge: "Mobile App 3.0",
    graphic: (
      <div className="w-full h-full bg-gradient-to-br from-slate-100 via-white to-cyan-50/40 p-5 flex flex-col justify-between select-none font-sans text-navy-950">
        <div className="flex items-center justify-between border-b border-slate-200/80 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-2.5 h-2.5 rounded-full bg-orange-500 animate-ping" />
            <span className="text-xs font-bold text-navy-950">Biometric Mobile Sync</span>
          </div>
          <span className="text-[10px] font-bold text-cyan-700 bg-cyan-50 border border-cyan-200 px-2 py-0.5 rounded-full">
            GPS Locked
          </span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[10px] font-medium text-slate-500">Terminal ID: #GEO-402</span>
            <div className="text-xs font-bold text-navy-950 flex items-center gap-1.5">
              <span>Facial Biometric Verified</span>
            </div>
          </div>
          <div className="w-7 h-7 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-xs">
            ✓
          </div>
        </div>

        <div className="grid grid-cols-2 gap-2 text-[10px] font-semibold">
          <div className="p-2 rounded-lg bg-slate-50 border border-slate-200 text-slate-700 text-center">
            Offline Buffer: 0
          </div>
          <div className="p-2 rounded-lg bg-cyan-50 border border-cyan-200 text-cyan-800 text-center">
            Anti-Spoof: Active
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "automated-compliance",
    category: "Security & Governance",
    title: "Eimpora Automated Compliance",
    description: "SOC 2 Type II evidence collection, policy violation remediation, and global workforce compliance readiness happening continuously.",
    linkText: "Learn more",
    linkUrl: "/security",
    badge: "SOC 2 Verified",
    graphic: (
      <div className="w-full h-full bg-gradient-to-br from-amber-50/70 via-white to-slate-100 p-5 flex flex-col justify-between select-none font-sans text-navy-950">
        <div className="flex items-center justify-between border-b border-amber-200/60 pb-2.5">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 rounded-lg bg-orange-500/10 border border-orange-500/30 flex items-center justify-center">
              <ShieldCheck className="w-4 h-4 text-orange-600" />
            </div>
            <span className="text-xs font-bold text-navy-950">Automated Compliance</span>
          </div>
          <span className="text-[10px] font-bold text-orange-600 bg-orange-100/70 px-2 py-0.5 rounded-full">
            Active Guard
          </span>
        </div>

        <div className="bg-white p-3 rounded-xl border border-slate-200/80 shadow-xs flex items-center justify-between">
          <div>
            <span className="text-[10px] font-semibold text-slate-500 block">SOC 2 Type II Framework</span>
            <span className="text-xs font-bold text-emerald-700 mt-0.5 flex items-center gap-1">
              ✓ 132 of 136 monitors passing
            </span>
          </div>
          <div className="w-9 h-9 rounded-full border-2 border-emerald-500 border-t-transparent flex items-center justify-center text-[10px] font-extrabold text-emerald-600">
            97%
          </div>
        </div>

        <div className="bg-amber-50/80 border border-amber-200/80 p-2.5 rounded-xl flex items-center justify-between text-[11px] font-semibold text-amber-900">
          <span className="flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            Needs setup
          </span>
          <span className="text-[10px] text-amber-700 font-medium">3 policies ready for review</span>
        </div>
      </div>
    ),
  },
];

export default function WhatsNewSlider({
  title = "What’s new at Eimpora",
  subtitle = "Discover our latest platform innovations, governed AI tools, and enterprise capabilities.",
}) {
  const scrollContainerRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Update scroll progress bar & button disabled states
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
    const maxScroll = scrollWidth - clientWidth;
    if (maxScroll <= 0) {
      setScrollProgress(100);
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }

    const progress = (scrollLeft / maxScroll) * 100;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
    setCanScrollLeft(scrollLeft > 5);
    setCanScrollRight(scrollLeft < maxScroll - 5);
  };

  useEffect(() => {
    handleScroll();
    window.addEventListener("resize", handleScroll);
    return () => window.removeEventListener("resize", handleScroll);
  }, []);

  const scroll = (direction) => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollAmount = container.clientWidth * 0.75;
    container.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="py-20 bg-slate-50 text-navy-950 overflow-hidden border-t border-slate-200/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
          <div>

            <h2 className="font-display text-3xl sm:text-4xl font-bold tracking-tight text-navy-950">
              {title}
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-2xl font-light leading-relaxed">
              {subtitle}
            </p>
          </div>
        </div>

        {/* Swiper Slider Track */}
        <div
          ref={scrollContainerRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto scrollbar-none snap-x snap-mandatory scroll-smooth pb-4 pt-1 px-4 sm:px-6  lg:px-8"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {WHATS_NEW_SLIDES.map((slide) => (
            <div
              key={slide.id}
              className="flex-none w-[300px] lg:w-[320px] snap-start rounded-2xl border border-slate-200/90 bg-white shadow-sm hover:shadow-lg hover:border-slate-300 transition-all duration-300 flex flex-col justify-between overflow-hidden group"
            >
              {/* Card Upper Half: Visual Graphic Preview */}
              <div className="h-[200px] sm:h-[220px] w-full relative border-b border-slate-100 overflow-hidden">
                {slide.graphic}
                {/* Category Badge overlay */}

              </div>

              {/* Card Lower Half: Content Copy & Action Link */}
              <div className="p-6 flex-1 flex flex-col justify-between bg-gradient-to-b from-white to-slate-50/50">
                <div>
                  <h3 className="font-display font-bold text-lg sm:text-xl text-navy-950 leading-snug group-hover:text-orange-600 transition-colors">
                    {slide.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-2.5 leading-relaxed line-clamp-3 font-normal">
                    {slide.description}
                  </p>
                </div>

                {/* Bottom Action Link with Underline */}
                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Link
                    to={slide.linkUrl}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-navy-950 hover:text-orange-600 transition-colors group/link"
                  >
                    <span className="border-b-2 border-navy-950 group-hover/link:border-orange-600 transition-colors pb-0.5">
                      {slide.linkText}
                    </span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover/link:translate-x-1" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Navigation & Progress Bar Bar Controls (Matching Rippling Slider Layout) */}
        <div className="mt-8 flex items-center justify-between border-t border-slate-200/60 pt-6">
          {/* Left Side: Animated Progress Bar */}
          <div className=" sm:w-2/3 h-1.5  rounded-full overflow-hidden relative">
            <div
              className="h-full bg-gradient-to-r from-orange-500 to-amber-500 rounded-full transition-all duration-300"
              style={{
                width: `${Math.max(20, scrollProgress)}%`,
              }}
            />
          </div>

          {/* Right Side: Swiper Navigation Arrow Buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => scroll("prev")}
              disabled={!canScrollLeft}
              aria-label="Previous slide"
              className={`p-3 rounded-xl border transition-all ${canScrollLeft
                ? "bg-slate-200/80 hover:bg-slate-300 text-navy-950 border-slate-300 shadow-xs cursor-pointer active:scale-95"
                : "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-50"
                }`}
            >
              <ArrowLeft className="w-4 h-4" />
            </button>

            <button
              onClick={() => scroll("next")}
              disabled={!canScrollRight}
              aria-label="Next slide"
              className={`p-3 rounded-xl border transition-all ${canScrollRight
                ? "bg-navy-900 hover:bg-navy-950 text-white border-navy-950 shadow-sm cursor-pointer active:scale-95"
                : "bg-slate-100 text-slate-400 border-slate-200 cursor-not-allowed opacity-50"
                }`}
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
