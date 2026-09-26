import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, CheckCircle2, ShieldCheck, Sparkles, Users, ArrowRight, 
  Layers, Clock, Banknote, Network, Calculator, ChevronDown, ChevronUp,
  Cpu, Database, Lock, Server, FileCheck, HelpCircle, Activity, ExternalLink
} from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import MetricCard from '../../components/common/MetricCard';
import CTASection from '../../components/common/CTASection';
import { MODULES_DATA } from '../../data/modulesData';
import Stars from '../../components/home/Stars';

export default function ModuleDetail() {
  const { slug } = useParams();
  const moduleData = MODULES_DATA.find((m) => m.slug === slug) || MODULES_DATA[0];

  // Interactive ROI Calculator State
  const [headcount, setHeadcount] = useState(500);

  // Tabbed Explorer State
  const [activeTab, setActiveTab] = useState('specs');

  // FAQ Accordion State
  const [openFaq, setOpenFaq] = useState(0);

  // Connected Module Data Objects
  const connectedModuleObjs = moduleData.connectedModules
    .map((cSlug) => MODULES_DATA.find((m) => m.slug === cSlug))
    .filter(Boolean);

  const hoursSavedPerMonth = Math.round(headcount * 1.8);
  const costSavingsEst = (headcount * 45).toLocaleString();

  const faqs = [
    {
      q: `How does ${moduleData.name} integrate with our existing ERP and HR systems?`,
      a: `${moduleData.name} provides bi-directional REST & GraphQL API endpoints, pre-built webhook triggers, and automated SFTP batch processors. It seamlessly synchronizes data with legacy platforms like SAP, Workday, Netsuite, and Oracle without breaking existing employee ID records.`
    },
    {
      q: `What fine-grained role-based security controls are available?`,
      a: `Eimpora uses zero-trust role-based access control (RBAC) with field-level encryption. Admins can restrict access by legal entity, cost center, department, or geographic jurisdiction down to individual dataset attributes.`
    },
    {
      q: `How long does an enterprise rollout of ${moduleData.name} typically take?`,
      a: `Most enterprise customers deploy within 3 to 5 weeks using our pre-configured compliance templates and automated data migration pipelines, with zero downtime during cutover.`
    },
    {
      q: `Is ${moduleData.aiFeature ? 'the embedded AI model' : 'governance oversight'} compliant with global data privacy laws?`,
      a: `Yes. All decisions and predictions execute with strict human-in-the-loop governance. Rationale logs are encrypted and hashed directly into an immutable audit trail compliant with GDPR, HIPAA, SOC 2 Type II, and ISO 27001 standards.`
    }
  ];

  return (
    <div className="space-y-0">
      {/* SECTION 1: Module Hero (DARK SECTION) */}
      <section className="relative pt-40 pb-20 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-80" aria-hidden="true" />
        <Stars />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Back Link */}
          <div>
            <Link
              to="/modules"
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-brand-400 transition-colors"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Canonical Module Catalog
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400">
                {moduleData.domainName}
              </div>
              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                {moduleData.name}
              </h1>
              <p className="text-lg text-brand-300 font-medium">{moduleData.tagline}</p>
              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{moduleData.summary}</p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/book-demo"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-navy-950 bg-gradient-to-r from-brand-400 to-brand-300 hover:from-brand-300 hover:to-brand-glow transition-all shadow-cyan-glow uppercase tracking-wider"
                >
                  Request Module Demo <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-navy-900/40 p-6 space-y-4 shadow-xl backdrop-blur-xl">
              <h3 className="font-display font-bold text-base text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <Activity className="w-4 h-4 text-brand-400" /> Module Telemetry
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-400 block mb-1">Primary Role Owners:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {moduleData.roles.map((r, i) => (
                      <span key={i} className="px-2 py-0.5 rounded bg-white/10 text-white font-medium text-[11px]">
                        {r}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <span className="text-slate-400 block mb-1">Inter-Module Sync:</span>
                  <span className="font-semibold text-orange-400">{moduleData.connectedModules.join(', ')}</span>
                </div>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-slate-300">
                  <span>Security Standard:</span>
                  <span className="text-emerald-400 font-bold">AES-256 / SOC2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SECTION 2: Verified Metrics Row (LIGHT SECTION) */}
        <section className="relative py-20 bg-gradient-to-b from-transparent to-brand-800/15  text-white ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {moduleData.metrics.map((m, idx) => (
                <MetricCard 
                  key={idx} 
                  title={m.label} 
                  value={m.value} 
                  change="Verified SLA" 
                  changeType="positive" 
                  iconName="CheckCircle2"
                  dark={true} 
                />
              ))}
            </div>
          </div>
        </section>
      </section>


      {/* SECTION 3: Capabilities & Technical Explorer (DARK SECTION) */}
      <section className="relative py-24 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Architectural Deep Dive"
            title={`Capabilities & System Specification for ${moduleData.name}`}
            description="Explore functional requirements, RBAC controls, security isolation, and data pipelines built into this module."
            dark={true}
          />

          {/* Explorer Navigation Tabs */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-white/10 pb-3">
            {[
              { id: 'specs', label: 'Core Capabilities', icon: Layers },
              { id: 'rbac', label: 'Security & Access Matrix', icon: Lock },
              { id: 'api', label: 'API & Data Webhooks', icon: Server },
              { id: 'compliance', label: 'Compliance & Audit', icon: ShieldCheck }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === tab.id
                      ? 'bg-brand-500/20 text-brand-300 border border-brand-500/40 shadow-cyan-glow'
                      : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content Display */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-navy-900/80 p-6 sm:p-8 backdrop-blur-md">
            {activeTab === 'specs' && (
              <div className="space-y-6">
                <h3 className="font-display font-bold text-lg text-white">Functional Specifications</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {moduleData.capabilities.map((cap, idx) => (
                    <div key={idx} className="p-4 rounded-xl border border-white/10 bg-white/5 flex items-start gap-3 text-sm text-slate-200 hover:border-brand-500/30 transition-all">
                      <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'rbac' && (
              <div className="space-y-6">
                <h3 className="font-display font-bold text-lg text-white">Role-Based Access Control & Scope</h3>
                <p className="text-sm text-slate-300">
                  {moduleData.name} enforces strict attribute-level access control. User privileges automatically adapt depending on whether the user acts as an employee, line supervisor, department lead, or global administrator.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-2">
                    <div className="text-xs font-bold uppercase text-brand-400">Employee Tier</div>
                    <div className="text-xs text-slate-300">Read-only personal records, document uploads, and self-service approval tracking.</div>
                  </div>
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-2">
                    <div className="text-xs font-bold uppercase text-brand-400">Manager Tier</div>
                    <div className="text-xs text-slate-300">Direct report record access, one-tap approvals, overtime validation, and team roster views.</div>
                  </div>
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-2">
                    <div className="text-xs font-bold uppercase text-brand-400">Global Admin Tier</div>
                    <div className="text-xs text-slate-300">Full domain configuration, policy overrides, audit search, and legal entity mappings.</div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'api' && (
              <div className="space-y-6">
                <h3 className="font-display font-bold text-lg text-white">Webhooks & Integration Architecture</h3>
                <p className="text-sm text-slate-300">
                  Connect {moduleData.name} into your enterprise software ecosystem via real-time webhooks, event buses, and GraphQL subscriptions.
                </p>
                <div className="p-4 rounded-xl bg-navy-950 border border-brand-500/30 font-mono text-xs text-brand-300 space-y-1">
                  <div className="text-slate-500">// Real-time event payload emitted on record update</div>
                  <div>POST /api/v2/events/{moduleData.slug}/sync</div>
                  <div className="text-slate-400">{`{ "event": "${moduleData.slug}.updated", "timestamp": "2026-09-15T11:34:00Z", "status": "governed" }`}</div>
                </div>
              </div>
            )}

            {activeTab === 'compliance' && (
              <div className="space-y-6">
                <h3 className="font-display font-bold text-lg text-white">Compliance & Cryptographic Verification</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-2">
                    <span className="font-bold text-white block text-sm">Immutable Audit Trail</span>
                    <p>Every transaction, field change, and manager override is timestamped and cryptographically hashed for audit retention.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-2">
                    <span className="font-bold text-white block text-sm">Data Residency Isolation</span>
                    <p>Support for localized tenant data hosting across EU, US, Middle East, and APAC data centers to meet regional sovereignty mandates.</p>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* SECTION 4: Interactive Value & ROI Calculator (LIGHT SECTION) */}
      <section className="relative py-24 bg-white text-navy-950 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 sm:p-10 shadow-lg">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-brand-700 bg-brand-50 border border-brand-200 px-3 py-1 rounded-full">
                  <Calculator className="w-4 h-4 text-brand-600" /> Live ROI & Efficiency Estimator
                </div>
                <h3 className="font-display font-bold text-2xl sm:text-3xl text-navy-950">
                  Impact Calculator for {moduleData.name}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Adjust your workforce size below to see the estimated operational hours saved and annual risk reduction delivered by Eimpora automation.
                </p>

                {/* Slider Controls */}
                <div className="pt-4 space-y-3">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-700 font-semibold">Workforce Headcount:</span>
                    <span className="font-display font-bold text-brand-700 text-lg">{headcount.toLocaleString()} Employees</span>
                  </div>
                  <input
                    type="range"
                    min="50"
                    max="10000"
                    step="50"
                    value={headcount}
                    onChange={(e) => setHeadcount(Number(e.target.value))}
                    className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600 border border-slate-300"
                  />
                  <div className="flex justify-between text-[11px] text-orange-500 font-medium">
                    <span>50 Team Members</span>
                    <span>5,000</span>
                    <span>10,000+ Enterprise</span>
                  </div>
                </div>
              </div>

              {/* Calculated Output Display */}
              <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl border border-slate-200 bg-white text-center space-y-1 shadow-sm">
                  <div className="text-xs text-slat-500 uppercase font-bold">Monthly Hours Saved</div>
                  <div className="font-display text-3xl font-bold text-brand-700">{hoursSavedPerMonth.toLocaleString()} hrs</div>
                  <div className="text-[11px] text-slate-500">Eliminated manual processing</div>
                </div>

                <div className="p-6 rounded-2xl border border-slate-200 bg-white text-center space-y-1 shadow-sm">
                  <div className="text-xs text-slate-500 uppercase font-bold">Est. Risk Reduction</div>
                  <div className="font-display text-3xl font-bold text-emerald-700">${costSavingsEst}</div>
                  <div className="text-[11px] text-slate-500">Compliance & error leakage</div>
                </div>

                <div className="sm:col-span-2 p-4 rounded-xl bg-brand-50 border border-brand-200 text-center text-xs text-brand-800 font-semibold">
                  ⚡ Based on enterprise benchmarking data from live Eimpora workforce deployments.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: Operational Workflow Handoff & Governed AI (DARK SECTION) */}
      <section className="relative py-24 bg-navy-900 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Workflow Stages */}
            <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-navy-950/90 p-6 sm:p-8 space-y-4 shadow-xl">
              <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
                <Clock className="w-5 h-5 text-brand-400" /> Operational Workflow Handoff
              </h3>
              <div className="space-y-3">
                {moduleData.workflow.map((wf, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3.5 rounded-xl bg-white/5 border border-white/5 hover:border-brand-500/30 transition-all text-xs text-slate-200">
                    <span className="h-7 w-7 rounded-full bg-brand-500/20 border border-brand-500/40 text-brand-400 flex items-center justify-center font-bold text-xs shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="font-medium text-slate-200">{wf}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* AI Feature Panel */}
            <div className="lg:col-span-5 rounded-2xl border border-brand-500/40 bg-navy-950/90 p-6 sm:p-8 space-y-4 shadow-cyan-glow flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-brand-400 font-display font-bold text-lg">
                  <Sparkles className="w-5 h-5 animate-pulse text-brand-300" /> Embedded AI Capability
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">{moduleData.aiFeature}</p>
              </div>
              <div className="p-3.5 rounded-xl bg-brand-500/10 border border-brand-500/20 text-xs text-brand-300 space-y-1">
                <span className="font-bold text-white block">Governed AI Audit Policy:</span>
                <p>Decision rationale logged to central immutable audit trail with mandatory human-in-the-loop authorization.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 6: Implementation Roadmap Timeline (LIGHT SECTION) */}
      <section className="relative py-24 bg-slate-50 text-navy-950 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Implementation Roadmap"
            title={`4-Step Enterprise Rollout Strategy`}
            description="How Eimpora team guides your organization from initial audit to automated live execution."
            dark={false}
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { step: 'Phase 01', title: 'Data Audit & Schema Mapping', time: 'Week 1', desc: 'Consolidate legacy files, map entity roles, and structure field privacy rules.' },
              { step: 'Phase 02', title: 'Sandbox & Rule Validation', time: 'Week 2-3', desc: 'Configure approval chains, biometric endpoints, and automated tax calculation rules.' },
              { step: 'Phase 03', title: 'Parallel Run Verification', time: 'Week 4', desc: 'Run parallel payroll & attendance operations with zero downtime risk.' },
              { step: 'Phase 04', title: 'Full Go-Live & AI Governance', time: 'Month 2+', desc: 'Lock production pipelines with real-time audit logging and predictive alerts.' }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-white relative space-y-2 hover:border-brand-500/50 hover:shadow-lg transition-all">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-brand-700 uppercase tracking-widest">{item.step}</span>
                  <span className="px-2 py-0.5 rounded bg-orange-50 text-orange-800 text-[11px] font-semibold border border-orange-100">{item.time}</span>
                </div>
                <h4 className="font-display font-bold text-base text-navy-950">{item.title}</h4>
                <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 7: Connected Modules Explorer Grid (DARK SECTION) */}
      {connectedModuleObjs.length > 0 && (
        <section className="relative py-24 bg-navy-950 text-white border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Inter-Module Ecosystem"
              title={`Modules Connected to ${moduleData.name}`}
              description="Eimpora operates as an interconnected engine. Click any connected module to inspect its specification."
              dark={true}
            />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
              {connectedModuleObjs.map((cMod) => (
                <GlassCard key={cMod.slug} className="p-6 space-y-3 flex flex-col justify-between" dark={true}>
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-orange-400">{cMod.domainName}</span>
                    <h4 className="font-display font-bold text-lg text-white">{cMod.name}</h4>
                    <p className="text-xs text-slate-400 line-clamp-2 leading-relaxed">{cMod.tagline}</p>
                  </div>
                  <Link
                    to={`/modules/${cMod.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-500 hover:text-white pt-2 border-t border-white/10 transition-colors"
                  >
                    Explore Connected Module <ArrowRight className="w-3.5 h-3.5 " />
                  </Link>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 8: Enterprise FAQ Accordion Section (LIGHT SECTION) */}
      <section className="relative py-24 bg-white text-navy-950 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Frequently Asked Questions"
            title={`Module Guidance & Deployment FAQs`}
            description="Clear answers for enterprise IT leads, CHROs, and security compliance officers."
            dark={false}
          />

          <div className="mt-8 max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-xl border border-slate-200 bg-slate-50 overflow-hidden transition-all shadow-sm"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  aria-expanded={openFaq === idx}
                  aria-controls={`module-faq-answer-${idx}`}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-display font-semibold text-sm text-navy-950 hover:text-brand-700 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-brand-600 shrink-0" />
                    {faq.q}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-orange-600 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-orange-500 shrink-0" />
                  )}
                </button>

                <div
                  id={`module-faq-answer-${idx}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    openFaq === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-4 pt-1 text-xs sm:text-sm text-slate-600 bg-white leading-relaxed space-y-2">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Footer */}
      <CTASection />
    </div>
  );
}

