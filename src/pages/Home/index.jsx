import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  Sparkles, ArrowRight, ShieldCheck, CheckCircle2, Users, Banknote, Clock,
  Layers, Building2, Network, Cpu, ArrowUpRight, ChevronRight, Activity, Globe, Lock, Search, Target
} from 'lucide-react';

import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import MetricCard from '../../components/common/MetricCard';
import CTASection from '../../components/common/CTASection';

import DashboardShell from '../../components/product/DashboardShell';
import AIInsightPanel from '../../components/product/AIInsightPanel';
import MobileAppPreview from '../../components/product/MobileAppPreview';
import DesktopModuleSection from '../../components/product/DesktopModuleSection';

import { MODULES_DATA } from '../../data/modulesData';
import { INDUSTRIES_DATA } from '../../data/industriesData';
import { SOLUTIONS_DATA } from '../../data/solutionsData';

import EimporaHexagon from '../../components/home/EimporaHexagon';

export default function Home() {
  const [activeWorkspaceTab, setActiveWorkspaceTab] = useState('workforce');
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  return (
    <div className="space-y-0">
      {/* SECTION 1 — ENTERPRISE HERO (DARK SECTION WITH EIMPORA HEXAGON SVG) */}
      <section className="relative pt-32  pb-24 overflow-hidden bg-navy-950 text-white">
        <div className="absolute inset-0 bg-radial-glow opacity-80" aria-hidden="true" />
        <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 items-center justify-between">

            {/* Left Column: Hero Copy & CTA */}
            <div className="lg:col-span-6 text-left space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/25 bg-brand-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400 backdrop-blur-md">
                <Sparkles className="w-3.5 h-3.5" />
                AI-Embedded Enterprise Workforce Platform
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-[1.08]">
                One workforce. <br />
                One command center. <br />
                <span className="text-gradient-cyan">Governed by AI.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-light">
                Eimpora runs your entire workforce lifecycle in one connected platform: core HR, multi-entity payroll, biometrics, shift rosters, talent management, and governed decision intelligence.
              </p>

              <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
                <Link
                  to="/book-demo"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-bold text-navy-950 bg-gradient-to-r from-brand-400 via-brand-300 to-brand-glow hover:from-brand-300 hover:to-brand-400 transition-all shadow-cyan-glow hover:scale-105 uppercase tracking-wider"
                >
                  Book Private Demo <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to="/platform"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl text-sm font-medium text-orange-400 border border-white/20 bg-orange-500/5 hover:bg-white/10 hover:border-brand-500/40 transition-all"
                >
                  Explore Platform Architecture
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="pt-6 border-t border-white/10 flex flex-wrap items-center gap-6 text-xs text-slate-400">
                <Link to="/modules" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-brand-400" />
                  25 Canonical Modules
                </Link>
                <Link to="/solutions/time-payroll-operations" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-brand-400" />
                  Multi-Entity & Multi-Currency
                </Link>
                <Link to="/security" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-brand-400" />
                  AES-256 Hashed Audit
                </Link>
              </div>
            </div>
            <div></div>

            {/* Right Column: Interactive EimporaHexagon SVG */}
            <div className="lg:col-span-5 flex justify-end items-end">
              <EimporaHexagon />
            </div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — DESKTOP MODULE LAYOUT (LIGHT SECTION) */}
      <section className="relative py-24 bg-slate-50 text-navy-950 border-y border-slate-200">
        <DesktopModuleSection />
      </section>

      {/* SECTION 3 — ENTERPRISE COMPLEXITY / PROBLEM COMPARISON (LIGHT SECTION) */}
      <section className="relative py-24 bg-slate-50 text-navy-950 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Operational Reality"
            title="The workforce most HR tools quietly break on."
            description="Payroll in one spreadsheet. Attendance on a device nobody syncs. Leave in an inbox. Every handoff introduces calculation errors, unapproved overtime, and compliance risks."
            center
            dark={false}
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Fragmented State */}
            <div className="lg:col-span-5 rounded-2xl border border-rose-200 bg-white p-6 shadow-md space-y-4">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-rose-600">Fragmented Legacy State</span>
                <span className="text-[10px] font-semibold text-slate-500">5 Disconnected Tools</span>
              </div>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-700">Payroll.xlsx</div>
                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-700">Leave Tracker App</div>
                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-700">Recruiting Inbox</div>
                <div className="p-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-700">Biometric Terminal</div>
                <div className="col-span-2 p-3 rounded-lg border border-slate-200 bg-slate-50 text-slate-700 font-medium text-rose-600">Manual Re-keying & Handoff Drag</div>
              </div>
              <p className="text-xs text-rose-600 font-medium">High risk of payroll errors, unapproved overtime, and audit non-compliance.</p>
            </div>

            {/* Connected Eimpora State */}
            <div className="lg:col-span-7 rounded-2xl border border-brand-500/40 bg-navy-950 text-white p-6 space-y-4 shadow-xl">
              <div className="flex items-center justify-between border-b border-white/10 pb-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Eimpora Unified State</span>
                <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">1 Connected Operating Substrate</span>
              </div>
              <div className="grid grid-cols-3 gap-3 text-xs">
                <Link to="/modules/core-hr" className="p-3 rounded-lg border border-brand-500/30 bg-brand-500/10 text-white font-medium hover:border-brand-400 transition-colors">Core HR & Org</Link>
                <Link to="/modules/attendance" className="p-3 rounded-lg border border-brand-500/30 bg-brand-500/10 text-white font-medium hover:border-brand-400 transition-colors">Biometric Shift Sync</Link>
                <Link to="/modules/payroll" className="p-3 rounded-lg border border-brand-500/30 bg-brand-500/10 text-white font-medium hover:border-brand-400 transition-colors">Multi-Entity Payroll</Link>
                <Link to="/ai" className="p-3 rounded-lg border border-brand-500/30 bg-brand-500/10 text-white font-medium hover:border-brand-400 transition-colors">Governed AI Engine</Link>
                <Link to="/modules/recruitment" className="p-3 rounded-lg border border-brand-500/30 bg-brand-500/10 text-white font-medium hover:border-brand-400 transition-colors">ATS & Onboarding</Link>
                <Link to="/modules/executive-dashboards" className="p-3 rounded-lg border border-brand-500/30 bg-brand-500/10 text-white font-medium hover:border-brand-400 transition-colors">Executive Command</Link>
              </div>
              <p className="text-xs text-brand-300 font-semibold">Zero-penny payroll discrepancies, real-time biometric synchronization, and 100% auditable workflow execution.</p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4 — PLATFORM ARCHITECTURE PREVIEW (DARK SECTION) */}
      <section className="relative py-24 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Architectural Integrity"
            title="Engineered in 5 interconnected platform layers."
            description="Eimpora is built from the ground up as a unified enterprise system, not an acquired patchwork of disparate products."
            dark={true}
          />

          <div className="mt-12 space-y-4">
            {[
              { num: 'Layer 1', title: 'Experience & Access Layer', desc: 'Web command center, mobile biometric app, self-service portals, and Slack/Teams integrations.', link: '/platform#layers' },
              { num: 'Layer 2', title: 'Talent Lifecycle & Operations Domain', desc: 'Core HR, ATS recruitment, onboarding, leave, attendance biometrics, and LMS skills.', link: '/platform#lifecycle' },
              { num: 'Layer 3', title: 'Multi-Entity Payroll & Financial Engine', desc: 'Multi-currency payroll calculation, statutory compliance, expense scanning, and bank payout.', link: '/modules/payroll' },
              { num: 'Layer 4', title: 'Governed AI & Predictive Intelligence', desc: 'Payroll anomaly checks, turnover flight risk prediction, candidate match scoring, and policy rule validation.', link: '/ai' },
              { num: 'Layer 5', title: 'Shared Platform & Governance Substrate', desc: 'AES-256 column encryption, RBAC matrix, immutable audit log, and API webhook gateway.', link: '/security' },
            ].map((layer, idx) => (
              <div
                key={idx}
                className="group p-6 rounded-xl border border-white/10 bg-navy-900/60 hover:border-brand-500/40 hover:bg-navy-900 transition-all flex flex-col md:flex-row items-start md:items-center justify-between gap-4"
              >
                <div className="flex items-center gap-4">
                  <span className="text-xs font-bold text-brand-400 uppercase tracking-widest px-3 py-1 rounded-md bg-brand-500/10 border border-brand-500/20">
                    {layer.num}
                  </span>
                  <div>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-brand-300 transition-colors">{layer.title}</h3>
                    <p className="text-xs text-slate-300 mt-1">{layer.desc}</p>
                  </div>
                </div>
                <Link to={layer.link} className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-400 hover:text-white transition-colors">
                  View Layer Specs <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5 — INTERACTIVE OPERATIONS WORKSPACE (LIGHT SECTION) */}
      <section className="relative py-24 bg-white text-navy-950 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Interactive Workspace"
            title="See how Eimpora operates live in action."
            description="Switch operational perspectives to inspect live workforce metrics, attendance status, leave queues, and payroll lock verification."
            dark={false}
          />

          <div className="mt-8">
            <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-xl border border-slate-200 bg-slate-100 max-w-xl mx-auto mb-8">
              {[
                { id: 'workforce', label: 'Workforce Hub' },
                { id: 'attendance', label: 'Attendance & Shifts' },
                { id: 'leave', label: 'Leave & Absences' },
                { id: 'payroll', label: 'Payroll Run' },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveWorkspaceTab(tab.id)}
                  className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${activeWorkspaceTab === tab.id
                    ? 'bg-navy-950 text-white shadow-md'
                    : 'text-slate-600 hover:text-navy-950'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Dynamic Interactive Card Output (Light Theme Cards) */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {activeWorkspaceTab === 'workforce' && (
                <>
                  <MetricCard title="Total Headcount" value="24,812" change="+1.8%" iconName="Users" subtitle="Across 14 Global Legal Entities" dark={false} />
                  <MetricCard title="Workforce Utilization" value="94.2%" change="Optimal" changeType="positive" iconName="Activity" subtitle="Factory Floor & Office Staff" dark={false} />
                  <MetricCard title="Open Requisitions" value="186 Positions" change="Active ATS" iconName="Target" subtitle="Avg Time-to-Hire: 14 Days" dark={false} />
                </>
              )}

              {activeWorkspaceTab === 'attendance' && (
                <>
                  <MetricCard title="Present Today" value="22,940" change="92.4%" changeType="positive" iconName="Clock" subtitle="Real-time Biometric Terminal Sync" dark={false} />
                  <MetricCard title="Geofenced Mobile Punches" value="4,120" change="Field Teams" iconName="Globe" subtitle="0 Geo-spoof Violations" dark={false} />
                  <MetricCard title="Shift Anomaly Flags" value="7 Exceptions" change="Action Needed" changeType="negative" iconName="Activity" subtitle="Unapproved Overtime Requests" dark={false} />
                </>
              )}

              {activeWorkspaceTab === 'leave' && (
                <>
                  <MetricCard title="Employees on Leave" value="842 Staff" change="3.4% Total" iconName="Users" subtitle="Scheduled & Annual Leaves" dark={false} />
                  <MetricCard title="Pending Approvals" value="14 Requests" change="Avg 1.2 hrs" iconName="Clock" subtitle="Multi-tier Manager Approvals" dark={false} />
                  <MetricCard title="Team Overlap Health" value="100% Compliant" change="Safe" changeType="positive" iconName="ShieldCheck" subtitle="Minimum Staffing Caps Enforced" dark={false} />
                </>
              )}

              {activeWorkspaceTab === 'payroll' && (
                <>
                  <MetricCard title="Monthly Gross Payout" value="$4,620,400" change="Locked" changeType="positive" iconName="Banknote" subtitle="Multi-currency FX locked" dark={false} />
                  <MetricCard title="Statutory Tax Withholding" value="$1,124,500" change="Calculated" iconName="Lock" subtitle="Local Jurisdiction Compliant" dark={false} />
                  <MetricCard title="Anomaly Verification" value="Passed 99.9%" change="Verified" changeType="positive" iconName="Sparkles" subtitle="Governed AI Anomaly Lock" dark={false} />
                </>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6 — MODULE ECOSYSTEM (DARK SECTION) */}
      <section className="relative py-24 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-end justify-between mb-12">
            <SectionHeading
              eyebrow="Comprehensive Ecosystem"
              title="25 Canonical Modules. 150 Capabilities."
              description="Deep functional coverage tailored to complex enterprise workforce demands."
              dark={true}
            />
            <Link
              to="/modules"
              className="mt-4 md:mt-0 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-400 hover:text-white transition-colors"
            >
              Explore Complete Module Catalog <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MODULES_DATA.slice(0, 6).map((mod) => (
              <GlassCard key={mod.slug} className="p-6 flex flex-col justify-between" dark={true}>
                <div>
                  <div className="flex items-center justify-between text-xs text-brand-400 font-semibold mb-2">
                    <span>{mod.domainName}</span>
                    <span className="text-[10px] text-slate-400 border border-white/10 px-2 py-0.5 rounded">Module</span>
                  </div>
                  <h3 className="font-display font-bold text-lg text-white mb-2">{mod.name}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{mod.summary}</p>

                  <div className="mt-4 pt-4 border-t border-white/10 space-y-1.5">
                    {mod.capabilities.slice(0, 3).map((cap, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="text-[11px] text-slate-400">{mod.roles[0]}</span>
                  <Link to={`/modules/${mod.slug}`} className="text-xs font-bold text-brand-400 hover:text-white flex items-center gap-1">
                    Module Specs <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7 — AI INTELLIGENCE (DARK ACCENT SECTION) */}
      <section className="relative py-24 bg-navy-900 text-white border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Governed Intelligence"
            title="AI inside operational workflows, not in a side panel."
            description="Eimpora embeds decision support inside the payroll run, hiring pipeline, and shift approval queue."
            center
            dark={true}
          />

          <div className="mt-12">
            <AIInsightPanel />
          </div>
        </div>
      </section>

      {/* SECTION 8 — MOBILE APP & FIELD EXPERIENCE (LIGHT SECTION) */}
      <section className="relative py-24 bg-slate-50 text-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-600/30 bg-brand-50 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-700">
                Field & Remote Control
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-navy-950 leading-tight">
                Biometric mobile check-in for distributed & field workforce.
              </h2>
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Empower non-desk employees, field technicians, and remote workers to log time with GPS geo-fencing, submit OCR expense receipts, and manage leaves offline.
              </p>

              <div className="space-y-3 pt-2">
                {[
                  'Offline mobile punch buffering with auto cloud sync',
                  'GPS location verification & anti-spoofing controls',
                  'Mobile receipt scanning with automatic currency conversion',
                  'Emergency SOS broadcast and lone-worker safety check'
                ].map((feat, idx) => (
                  <div key={idx} className="flex items-center gap-3 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-brand-600 shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <Link
                  to="/solutions/distributed-workforce"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700 hover:text-navy-950 transition-colors"
                >
                  Explore Distributed Workforce Solution <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 flex justify-center">
              <MobileAppPreview />
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 9 — ENTERPRISE TRUST PILLARS (DARK SECTION) */}
      <section className="relative py-24 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Enterprise Trust"
            title="Security, governance, and deployment reliability."
            description="Built to satisfy global enterprise compliance and data protection mandates."
            dark={true}
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'RBAC Authorization', desc: 'Granular field-level privacy masking and role-based access scoping.', icon: Lock, link: '/security' },
              { title: 'Immutable Audit', desc: 'Cryptographically hashed audit log capturing every record edit and view.', icon: ShieldCheck, link: '/security' },
              { title: 'Multi-Entity Scoping', desc: 'Isolated legal entity and cost center data separation.', icon: Network, link: '/platform#multi-entity' },
              { title: '99.99% Availability', desc: 'Multi-region high availability with continuous data redundancy.', icon: Activity, link: '/security' }
            ].map((pillar, idx) => (
              <GlassCard key={idx} className="p-6 flex flex-col justify-between" dark={true}>
                <div>
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-500/10 text-brand-400 mb-4">
                    <pillar.icon className="w-5 h-5" />
                  </div>
                  <h3 className="font-display font-bold text-base text-white mb-2">{pillar.title}</h3>
                  <p className="text-xs text-slate-300 leading-relaxed">{pillar.desc}</p>
                </div>
                <div className="mt-4 pt-3 border-t border-white/10 flex justify-end">
                  <Link to={pillar.link} className="text-xs font-semibold text-brand-400 hover:text-white flex items-center gap-1">
                    Details <ChevronRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 10 — INDUSTRY SOLUTIONS MATRIX (LIGHT SECTION) */}
      <section className="relative py-24 bg-white text-navy-950 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Industry Adaptability"
            title="Tailored to your operational environment."
            description="Select your industry to see tailored workforce modules, compliance rules, and automated workflows."
            dark={false}
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Industry Selector List */}
            <div className="lg:col-span-5 space-y-2">
              {INDUSTRIES_DATA.slice(0, 6).map((ind, idx) => (
                <button
                  key={ind.slug}
                  onClick={() => setSelectedIndustry(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${selectedIndustry === idx
                    ? 'border-brand-500 bg-navy-950 text-white shadow-md'
                    : 'border-slate-200 bg-slate-50 text-slate-800 hover:bg-slate-100'
                    }`}
                >
                  <span className="font-display text-sm font-semibold">{ind.title}</span>
                  <ChevronRight className={`w-4 h-4 ${selectedIndustry === idx ? 'text-brand-400' : 'text-slate-400'}`} />
                </button>
              ))}
            </div>

            {/* Right Selected Industry Preview */}
            <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-slate-50 p-6 shadow-md text-navy-950">
              {(() => {
                const currentInd = INDUSTRIES_DATA[selectedIndustry];
                return (
                  <div className="space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-200 pb-3">
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-700">{currentInd.title}</span>
                      <Link to={`/industries/${currentInd.slug}`} className="text-xs font-semibold text-brand-700 hover:text-navy-950 flex items-center gap-1">
                        Full Industry Profile <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>
                    <p className="text-xs text-slate-700 leading-relaxed font-medium">{currentInd.workforceProfile}</p>

                    <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                      <span className="text-xs font-semibold text-navy-950 block">Key Operational Challenges Solved:</span>
                      {currentInd.challenges.slice(0, 3).map((ch, idx) => (
                        <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                          <span>{ch}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs text-slate-500">
                      <span>Governance Focus: <strong className="text-navy-950">{currentInd.governance.slice(0, 45)}...</strong></span>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 11 — UNIFIED VS FRAGMENTED POSITIONING (DARK SECTION) */}
      <section className="relative py-24 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Strategic Positioning"
            title="Why enterprise leaders choose unified software."
            center
            dark={true}
          />

          <div className="mt-12 overflow-x-auto rounded-2xl border border-white/10 bg-navy-900/90 shadow-2xl backdrop-blur-xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-navy-950/80">
                  <th className="p-4 font-bold text-white uppercase tracking-wider">Evaluation Dimension</th>
                  <th className="p-4 font-bold text-rose-400 uppercase tracking-wider">Fragmented Point Suites</th>
                  <th className="p-4 font-bold text-brand-400 uppercase tracking-wider">Eimpora Enterprise Unified</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                <tr>
                  <td className="p-4 font-semibold text-white">Data Consistency</td>
                  <td className="p-4 text-rose-300">Nightly batch syncs with frequent discrepancy gaps</td>
                  <td className="p-4 text-brand-300 font-semibold">1 Real-time authoritative global substrate</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Biometric Shift Sync</td>
                  <td className="p-4 text-rose-300">Manual timesheet imports into payroll software</td>
                  <td className="p-4 text-brand-300 font-semibold">Direct hardware terminal push into payroll engine</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Decision Intelligence</td>
                  <td className="p-4 text-rose-300">Isolated chatbot windows without policy rules</td>
                  <td className="p-4 text-brand-300 font-semibold">Embedded governed AI with human authorization</td>
                </tr>
                <tr>
                  <td className="p-4 font-semibold text-white">Audit Readiness</td>
                  <td className="p-4 text-rose-300">Scattered log files across 5 vendor platforms</td>
                  <td className="p-4 text-brand-300 font-semibold">Immutable cryptographically hashed central log</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 12 — FINAL DEMO CTA */}
      <CTASection />
    </div>
  );
}
