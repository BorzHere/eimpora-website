import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Layers, Users, ShieldCheck, Network, Cpu, ArrowRight, CheckCircle2, User, UserCheck, 
  Banknote, ShieldAlert, Globe, Coins, Server, Lock, HelpCircle, ChevronDown, ChevronUp, Sparkles, Activity
} from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import CTASection from '../../components/common/CTASection';
import Stars from '../../components/home/Stars';

export default function Platform() {
  const [activeRole, setActiveRole] = useState('Employee');
  const [activeEntityTab, setActiveEntityTab] = useState('hierarchy');
  const [openFaq, setOpenFaq] = useState(0);

  const roles = [
    {
      id: 'Employee',
      label: 'Employee Portal',
      desc: 'Mobile self-service clock-in, payslip vault, leave filing, and OCR expense scanner.',
      features: ['Digital Payslips & Tax Forms', 'Instant Leave Requests', 'Mobile Biometric Check-in', 'AI Policy Search'],
      link: '/modules/core-hr'
    },
    {
      id: 'Manager',
      label: 'Manager Command',
      desc: 'Shift roster manager, one-tap approvals, team overtime alerts, and 1-on-1 check-in templates.',
      features: ['Team Attendance Real-time View', 'Overtime Approval Queue', 'Shift Swap Sign-offs', '360 Review Scores'],
      link: '/modules/attendance'
    },
    {
      id: 'HR',
      label: 'HR Operations',
      desc: 'Global worker registry, document expiry alerts, onboarding task triggers, and compliance audit.',
      features: ['Multi-entity Contract Builder', 'Visa & Document Alerts', 'Onboarding Automation', 'Skill Matrix Audit'],
      link: '/modules/documents'
    },
    {
      id: 'Payroll',
      label: 'Payroll Director',
      desc: 'Gross-to-net payroll engine, statutory tax withholding, anomaly lock, and direct bank dispatch.',
      features: ['Multi-currency FX Lock Rates', 'Anomaly Detection Engine', 'Banking File Format Export', 'Retroactive Pay Engine'],
      link: '/modules/payroll'
    },
    {
      id: 'Executive',
      label: 'Executive Suite',
      desc: 'C-suite command dashboard, headcount forecasting, labor cost exposure, and succession bench.',
      features: ['Real-time Labor Cost Exposure', 'AI Flight Risk Signals', 'Multi-country Heatmaps', 'Board-Ready PDF Reports'],
      link: '/modules/executive-dashboards'
    }
  ];

  const platformFaqs = [
    {
      q: 'How does Eimpora manage data isolation across multiple legal entities?',
      a: 'Eimpora utilizes logical tenant separation with dedicated cryptographic encryption keys per legal entity. Data remains logically isolated while allowing authorized C-suite users to run consolidated global headcount and financial reports in real-time.'
    },
    {
      q: 'What integration options exist for legacy ERP and HRIS systems?',
      a: 'We provide bi-directional REST & GraphQL APIs, real-time event webhooks, and automated SFTP batch file parsers. Pre-built connectors exist for SAP, Workday, Netsuite, and Oracle ERPs.'
    },
    {
      q: 'How does the platform handle multi-currency payroll locked rates?',
      a: 'Eimpora captures spot exchange rates at payroll period lock date, preventing foreign currency volatility from affecting gross-to-net calculations while generating localized bank deposit files for each country.'
    },
    {
      q: 'What uptime and disaster recovery SLAs are guaranteed?',
      a: 'Eimpora provides a 99.99% operational uptime SLA with automated multi-region failover across AWS and Azure cloud nodes, backed by sub-minute database point-in-time recovery.'
    }
  ];

  return (
    <div className="space-y-0">
      {/* Platform Hero (DARK SECTION) */}
      <section className="relative pt-32 lg:pt-40 pb-24 bg-navy-950 text-white overflow-hidden">
        <div className="absolute inset-0 bg-radial-glow opacity-80" aria-hidden="true" />
        <Stars />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Platform Architecture"
            title="The unified substrate for modern enterprise workforces."
            description="Eimpora eliminates fragmented software boundaries by connecting people operations, time tracking, payroll calculation, and governed decision intelligence."
            center
            dark={true}
          />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
            <div className="p-6 rounded-2xl border border-white/10 bg-navy-900/60 shadow-lg hover:border-brand-500/40 transition-all">
              <div className="font-display text-3xl font-bold text-brand-400">100%</div>
              <div className="text-xs text-slate-300 mt-1">Unified Data Model</div>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-navy-900/60 shadow-lg hover:border-brand-500/40 transition-all">
              <div className="font-display text-3xl font-bold text-brand-400">&lt; 100ms</div>
              <div className="text-xs text-slate-300 mt-1">Global Data Latency</div>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-navy-900/60 shadow-lg hover:border-brand-500/40 transition-all">
              <div className="font-display text-3xl font-bold text-brand-400">AES-256</div>
              <div className="text-xs text-slate-300 mt-1">Field-Level Encryption</div>
            </div>
            <div className="p-6 rounded-2xl border border-white/10 bg-navy-900/60 shadow-lg hover:border-brand-500/40 transition-all">
              <div className="font-display text-3xl font-bold text-brand-400">99.99%</div>
              <div className="text-xs text-slate-300 mt-1">Uptime SLA Guaranteed</div>
            </div>
          </div>
        </div>
      </section>

      {/* 5-Layer Stack (LIGHT SECTION) */}
      <section id="layers" className="relative py-24 bg-slate-50 text-navy-950 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Architectural Breakdown"
            title="5 Integrated Platform Layers"
            description="Each layer performs specialized responsibilities while maintaining real-time data sync across the enterprise."
            dark={false}
          />

          <div className="mt-12 space-y-6">
            {[
              {
                layer: 'Layer 1',
                title: 'Experience & Access Layer',
                desc: 'Provides tailored user surfaces for Web Command, Mobile Biometrics, and Slack/Teams apps with SAML 2.0 / OIDC SSO.',
                link: '/integrations'
              },
              {
                layer: 'Layer 2',
                title: 'Talent Lifecycle & Operations Domain',
                desc: 'Core HR worker profiles, ATS recruiting, onboarding workflows, leave accruals, and biometric attendance recording.',
                link: '/modules/core-hr'
              },
              {
                layer: 'Layer 3',
                title: 'Multi-Entity Payroll & Financial Engine',
                desc: 'Multi-currency gross-to-net payroll processing, statutory tax withholding, expense OCR scanning, and direct bank wire file creation.',
                link: '/modules/payroll'
              },
              {
                layer: 'Layer 4',
                title: 'Governed AI & Decision Intelligence',
                desc: 'Real-time payroll anomaly checks, turnover flight risk prediction, candidate match scoring, and policy rule validation.',
                link: '/ai'
              },
              {
                layer: 'Layer 5',
                title: 'Shared Platform & Governance Substrate',
                desc: 'AES-256 encrypted database schema isolation, fine-grained RBAC matrix, immutable audit log, and open REST API gateway.',
                link: '/security'
              }
            ].map((item, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-md flex flex-col md:flex-row items-start md:items-center justify-between gap-4 hover:border-brand-500/50 hover:shadow-lg transition-all">
                <div>
                  <div className="flex items-center gap-3 text-xs font-bold text-brand-700 uppercase tracking-widest mb-2">
                    <span>{item.layer}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-navy-950 mb-2">{item.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
                <Link to={item.link} className="inline-flex items-center gap-1 text-xs font-bold uppercase tracking-wider text-brand-700 hover:text-navy-950 transition-colors whitespace-nowrap">
                  View Layer Detail <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Entity Engine (#multi-entity) (DARK SECTION) */}
      <section id="multi-entity" className="relative py-24 bg-navy-900 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Global Multi-Entity Engine"
            title="Complex Legal Entity & Multi-Currency Architecture"
            description="Manage parent holdings, subsidiaries, regional branches, and joint ventures across 45+ jurisdictions with localized tax compliance."
            dark={true}
          />

          {/* Sub-tab Navigation */}
          <div className="mt-8 flex flex-wrap gap-2 border-b border-white/10 pb-3">
            {[
              { id: 'hierarchy', label: 'Entity Hierarchy Tree', icon: Globe },
              { id: 'fx', label: 'Multi-Currency & FX Lock', icon: Coins },
              { id: 'tax', label: 'Jurisdiction Tax Routing', icon: Banknote },
              { id: 'sod', label: 'Segregation of Duties (SoD)', icon: Lock }
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveEntityTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold transition-all ${
                    activeEntityTab === tab.id
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

          {/* Sub-tab Content Panel */}
          <div className="mt-6 rounded-2xl border border-white/10 bg-navy-950/80 p-6 sm:p-8 backdrop-blur-xl shadow-2xl">
            {activeEntityTab === 'hierarchy' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Global Corporate Structure</span>
                    <h3 className="font-display font-bold text-xl text-white mt-1">Parent Holding & Subsidiary Allocation</h3>
                  </div>
                  <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-3 py-1 rounded-full border border-emerald-500/20">
                    Unlimited Matrix Depth
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Model complex ownership percentage splits, cost-center chargebacks, regional branch assignments, and matrixed project teams in real-time.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-2">
                    <span className="text-xs font-bold text-brand-400 uppercase">Holding Company</span>
                    <div className="text-sm font-semibold text-white">Global Consolidated Treasury</div>
                    <p className="text-xs text-slate-400">Consolidated financial reports, high-level headcount caps, and executive governance.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-2">
                    <span className="text-xs font-bold text-brand-400 uppercase">Regional Subsidiaries</span>
                    <div className="text-sm font-semibold text-white">US, EU, Middle East & APAC Entities</div>
                    <p className="text-xs text-slate-400">Localized labor contracts, statutory tax filings, and regional banking rails.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-2">
                    <span className="text-xs font-bold text-brand-400 uppercase">Branch & Cost Centers</span>
                    <div className="text-sm font-semibold text-white">Local Branches & Squads</div>
                    <p className="text-xs text-slate-400">Cost-center payroll allocation, shift attendance, and localized manager sign-offs.</p>
                  </div>
                </div>
              </div>
            )}

            {activeEntityTab === 'fx' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Currency & Treasury Locks</span>
                    <h3 className="font-display font-bold text-xl text-white mt-1">Multi-Currency Gross-to-Net Engine</h3>
                  </div>
                  <span className="text-xs font-semibold text-brand-300 bg-brand-500/10 px-3 py-1 rounded-full border border-brand-500/20">
                    120+ Currency Rails
                  </span>
                </div>
                <p className="text-sm text-slate-300 leading-relaxed">
                  Automatically lock foreign exchange rates on payroll freeze dates to protect your bottom line from currency fluctuations during global bank dispatches.
                </p>
                <div className="p-4 rounded-xl bg-navy-900 border border-brand-500/30 font-mono text-xs text-brand-300 space-y-1">
                  <div className="text-slate-500">// Automated FX Rate Lock Trigger</div>
                  <div>PAYROLL_LOCK_EVENT: entity_id="US-SUB-01", fx_rate="1.0842", lock_timestamp="2026-09-15T00:00:00Z"</div>
                  <div className="text-slate-400">Status: FX Lock Engaged. Bank payout files dispatched with zero currency variance.</div>
                </div>
              </div>
            )}

            {activeEntityTab === 'tax' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Statutory Tax Routing</span>
                    <h3 className="font-display font-bold text-xl text-white mt-1">Multi-Jurisdiction Tax & Pension Rules</h3>
                  </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs text-slate-300">
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-2">
                    <span className="font-bold text-white text-sm block">Automated Tax Withholding</span>
                    <p>Calculates income tax, social security, health insurance, and pension contributions per worker residency automatically.</p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5 space-y-2">
                    <span className="font-bold text-white text-sm block">Government E-Filing Formats</span>
                    <p>Generates tax return files (W-2, Form 16, P60 equivalent) pre-validated for electronic regulatory submission.</p>
                  </div>
                </div>
              </div>
            )}

            {activeEntityTab === 'sod' && (
              <div className="space-y-6">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-white/10 pb-4">
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-brand-400">Security Governance</span>
                    <h3 className="font-display font-bold text-xl text-white mt-1">Segregation of Duties (SoD) Enforcement</h3>
                  </div>
                </div>
                <p className="text-sm text-slate-300">
                  Prevent financial fraud by enforcing mandatory approval separation: no single user can create a worker profile, adjust compensation, and authorize payroll bank dispatch.
                </p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Role-Based Surfaces (DARK SECTION) */}
      <section id="roles" className="relative py-24 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Role-Based Surfaces"
            title="Tailored experiences for every organizational role."
            description="Click a role to view how Eimpora adapts its user interface and access scope."
            dark={true}
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Role Tabs */}
            <div className="lg:col-span-4 space-y-2">
              {roles.map((r) => (
                <button
                  key={r.id}
                  onClick={() => setActiveRole(r.id)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    activeRole === r.id
                      ? 'border-brand-500/50 bg-brand-500/15 text-white shadow-cyan-glow'
                      : 'border-white/5 bg-navy-900/60 text-slate-300 hover:bg-white/5'
                  }`}
                >
                  <span className="font-display text-sm font-semibold">{r.label}</span>
                  <ArrowRight className={`w-4 h-4 ${activeRole === r.id ? 'text-brand-400' : 'text-slate-500'}`} />
                </button>
              ))}
            </div>

            {/* Right Role Surface Box */}
            <div className="lg:col-span-8 rounded-2xl border border-white/10 bg-navy-900/90 p-8 shadow-2xl backdrop-blur-xl">
              {(() => {
                const currentRole = roles.find((r) => r.id === activeRole);
                return (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div>
                        <span className="text-xs font-bold uppercase tracking-wider text-brand-400">{currentRole.label}</span>
                        <h3 className="font-display font-bold text-2xl text-white mt-1">{currentRole.id} Workspace Surface</h3>
                      </div>
                      <Link to={currentRole.link} className="text-xs font-bold text-brand-400 hover:text-white flex items-center gap-1">
                        View Role Module <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </div>

                    <p className="text-sm text-slate-300 leading-relaxed">{currentRole.desc}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4">
                      {currentRole.features.map((feat, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-xs text-slate-200 p-2.5 rounded-lg bg-white/5 border border-white/5">
                          <CheckCircle2 className="w-4 h-4 text-brand-400 shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Employee Lifecycle Map (LIGHT SECTION) */}
      <section id="lifecycle" className="relative py-24 bg-white text-navy-950 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Lifecycle Continuity"
            title="End-to-End Employee Lifecycle Flow"
            description="A continuous data thread connecting recruitment candidates to active employees and retired alumni."
            center
            dark={false}
          />

          <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 text-center">
            {[
              { stage: 'Plan', link: '/modules/workforce-planning' },
              { stage: 'Recruit', link: '/modules/recruitment' },
              { stage: 'Hire', link: '/modules/core-hr' },
              { stage: 'Onboard', link: '/modules/onboarding' },
              { stage: 'Operate', link: '/modules/attendance' },
              { stage: 'Pay', link: '/modules/payroll' },
              { stage: 'Develop', link: '/modules/performance' },
              { stage: 'Analyze', link: '/modules/people-analytics' }
            ].map((s, idx) => (
              <Link
                key={idx}
                to={s.link}
                className="p-4 rounded-xl border border-slate-200 bg-slate-50 hover:bg-navy-950 hover:text-white transition-all group shadow-sm"
              >
                <div className="text-[10px] font-bold text-brand-700 group-hover:text-brand-400 uppercase tracking-widest mb-1">Stage 0{idx + 1}</div>
                <div className="font-display font-bold text-sm">{s.stage}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Security & Cryptographic Substrate Section */}
      <section id="security-substrate" className="relative py-24 bg-navy-950 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Security & Audit Substrate"
            title="Cryptographic Protection & Regulatory Badges"
            description="Zero-trust security architecture built directly into every data layer."
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 rounded-2xl border border-white/10 bg-navy-900/60 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center">
                <Lock className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">AES-256 Field Encryption</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Sensitive attributes (salary, SSN/tax IDs, bank numbers) are encrypted individually at rest using AWS KMS keys.</p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-navy-900/60 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Immutable Audit Ledger</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Every record change, manager override, and document signature generates a cryptographically hashed audit entry.</p>
            </div>

            <div className="p-6 rounded-2xl border border-white/10 bg-navy-900/60 space-y-3">
              <div className="h-10 w-10 rounded-xl bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center">
                <Server className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">SOC 2 & ISO Compliance</h3>
              <p className="text-xs text-slate-300 leading-relaxed">Certified compliant with SOC 2 Type II, ISO 27001, GDPR, and HIPAA data residency requirements.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Platform FAQs Section */}
      <section className="relative py-24 bg-navy-900 text-white border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Platform FAQs"
            title="Frequently Asked Questions on Architecture"
            description="Clear answers on system design, data isolation, and enterprise migration."
          />

          <div className="mt-8 max-w-4xl mx-auto space-y-4">
            {platformFaqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-navy-950/70 overflow-hidden transition-all"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  aria-expanded={openFaq === idx}
                  aria-controls={`platform-faq-answer-${idx}`}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-display font-semibold  text-white hover:text-brand-300 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-brand-400 shrink-0" />
                    {faq.q}
                  </span>
                  {openFaq === idx ? (
                    <ChevronUp className="w-4 h-4 text-brand-400 shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-slate-400 shrink-0" />
                  )}
                </button>

                <div
                  id={`platform-faq-answer-${idx}`}
                  className={`grid transition-[grid-template-rows,opacity] duration-300 ease-out ${
                    openFaq === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 pt-0 text-xs sm:text-sm text-slate-300  bg-navy-900/40 leading-relaxed space-y-2">
                      <p>{faq.a}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}

