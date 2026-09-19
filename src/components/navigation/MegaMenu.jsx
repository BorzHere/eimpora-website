import React from 'react';
import { Link } from 'react-router-dom';
import {
  Cpu, Users, Banknote, ShieldCheck, Sparkles, Building2,
  Clock, Target, FileText, ArrowRight, Layers, LayoutDashboard, Globe,
  Database, KeyRound, Fingerprint, MessageSquare, Code2
} from 'lucide-react';

export default function MegaMenu({ activeTab, onClose }) {
  if (!activeTab) return null;

  return (
    <div
      className="absolute top-full left-0 w-full bg-navy-900/95 backdrop-blur-2xl border-b border-white/10 shadow-2xl transition-all duration-200 z-50 text-white"
      onMouseLeave={onClose}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {activeTab === 'platform' && (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-4 border-r border-white/10 pr-6">
              <div className="flex items-center gap-3 text-brand-400 font-display font-bold text-lg">
                <Layers className="w-5 h-5" />
                Eimpora Enterprise Platform
              </div>
              <p className="mt-3 text-sm text-slate-300 leading-relaxed">
                The unified operational substrate connecting core workforce data, biometrics, multi-currency payroll, and governed decision intelligence.
              </p>
              <Link
                to="/platform"
                onClick={onClose}
                className="mt-6 inline-flex items-center gap-2 text-xs font-semibold text-orange-400 hover:text-brand-300 transition-colors"
              >
                Explore Full Platform Architecture <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="col-span-8 grid grid-cols-2 gap-6">
              <Link
                to="/platform#layers"
                onClick={onClose}
                className="group p-3 rounded-xl border border-white/5 bg-navy-950/40 hover:border-brand-500/30 hover:bg-navy-800/50 transition-all"
              >
                <div className="font-semibold text-sm text-white group-hover:text-brand-400 flex items-center justify-between">
                  Architecture Layers
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
                </div>
                <p className="mt-1 text-xs text-slate-400">5-layer stack from employee experience down to shared governance.</p>
              </Link>

              <Link
                to="/platform#roles"
                onClick={onClose}
                className="group p-3 rounded-xl border border-white/5 bg-navy-950/40 hover:border-brand-500/30 hover:bg-navy-800/50 transition-all"
              >
                <div className="font-semibold text-sm text-white group-hover:text-brand-400 flex items-center justify-between">
                  Role-Based Surfaces
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
                </div>
                <p className="mt-1 text-xs text-slate-400">Tailored UI portals for Employees, Managers, HR, and Executives.</p>
              </Link>

              <Link
                to="/platform#lifecycle"
                onClick={onClose}
                className="group p-3 rounded-xl border border-white/5 bg-navy-950/40 hover:border-brand-500/30 hover:bg-navy-800/50 transition-all"
              >
                <div className="font-semibold text-sm text-white group-hover:text-brand-400 flex items-center justify-between">
                  Lifecycle Workflow Flow
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-orange-400 " />
                </div>
                <p className="mt-1 text-xs text-slate-400">Plan → Recruit → Hire → Onboard → Operate → Pay → Develop.</p>
              </Link>

              <Link
                to="/platform#multi-entity"
                onClick={onClose}
                className="group p-3 rounded-xl border border-white/5 bg-navy-950/40 hover:border-brand-500/30 hover:bg-navy-800/50 transition-all"
              >
                <div className="font-semibold text-sm text-white group-hover:text-brand-400 flex items-center justify-between">
                  Multi-Entity Engine
                  <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity text-orange-400" />
                </div>
                <p className="mt-1 text-xs text-slate-400">Global legal entity, regional branch, and cost-center hierarchy.</p>
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'modules' && (
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-400">Canonical Module Domains (25 Modules)</span>
              <Link to="/modules" onClick={onClose} className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1">
                View Full Catalog <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-5 gap-6">
              <div>
                <div className="flex items-center gap-2 font-display font-semibold text-sm text-white mb-3">
                  <Users className="w-4 h-4 text-orange-400" /> People Ops
                </div>
                <div className="space-y-2">
                  <Link to="/modules/core-hr" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Core HR & Profiles</Link>
                  <Link to="/modules/documents" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Document Vault</Link>
                  <Link to="/modules/org-structure" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Org Architecture</Link>
                  <Link to="/modules/asset-management" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Asset Tracking</Link>
                  <Link to="/modules/employee-directory" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Directory Search</Link>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 font-display font-semibold text-sm text-white mb-3">
                  <Clock className="w-4 h-4 text-orange-400" /> Workforce Ops
                </div>
                <div className="space-y-2">
                  <Link to="/modules/attendance" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Time & Attendance</Link>
                  <Link to="/modules/scheduling" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Shift Rostering</Link>
                  <Link to="/modules/leave" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Leave Management</Link>
                  <Link to="/modules/overtime" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Overtime Engine</Link>
                  <Link to="/modules/field-workforce" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Field Workforce</Link>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 font-display font-semibold text-sm text-white mb-3">
                  <Banknote className="w-4 h-4 text-orange-400" /> Payroll & Finance
                </div>
                <div className="space-y-2">
                  <Link to="/modules/payroll" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Multi-Entity Payroll</Link>
                  <Link to="/modules/expenses" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Expenses & Claims</Link>
                  <Link to="/modules/benefits" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Benefits Admin</Link>
                  <Link to="/modules/loans-advances" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Loans & Advances</Link>
                  <Link to="/modules/statutory-tax" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Statutory Tax Compliance</Link>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 font-display font-semibold text-sm text-white mb-3">
                  <Target className="w-4 h-4 text-orange-400" /> Talent Management
                </div>
                <div className="space-y-2">
                  <Link to="/modules/recruitment" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">ATS Recruiting</Link>
                  <Link to="/modules/onboarding" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Employee Onboarding</Link>
                  <Link to="/modules/performance" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Performance & OKRs</Link>
                  <Link to="/modules/learning" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">LMS & Skill Matrix</Link>
                  <Link to="/modules/succession" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Succession Pipelines</Link>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 font-display font-semibold text-sm text-white mb-3">
                  <Sparkles className="w-4 h-4 text-orange-400" /> Intelligence & Strategy
                </div>
                <div className="space-y-2">
                  <Link to="/modules/workforce-planning" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Workforce Planning</Link>
                  <Link to="/modules/people-analytics" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">People Analytics</Link>
                  <Link to="/modules/executive-dashboards" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Executive Command</Link>
                  <Link to="/modules/ai-insights" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">AI Decision Engine</Link>
                  <Link to="/modules/compliance" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Compliance Audit</Link>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'solutions' && (
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-400">Enterprise Solutions</span>
              <Link to="/solutions" onClick={onClose} className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1">
                View All Solutions <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-3 gap-6">
              <Link
                to="/solutions/unified-workforce-records"
                onClick={onClose}
                className="p-4 rounded-xl border border-white/5 bg-navy-950/40 hover:border-brand-500/30 transition-all"
              >
                <div className="font-semibold text-sm text-white mb-1">Unified Workforce Records</div>
                <p className="text-xs text-slate-400">Eliminate fragmented spreadsheets into one multi-entity global system.</p>
              </Link>

              <Link
                to="/solutions/time-payroll-operations"
                onClick={onClose}
                className="p-4 rounded-xl border border-white/5 bg-navy-950/40 hover:border-brand-500/30 transition-all"
              >
                <div className="font-semibold text-sm text-white mb-1">Time, Attendance & Payroll</div>
                <p className="text-xs text-slate-400">Direct biometric shift clocking to multi-currency payroll payout.</p>
              </Link>

              <Link
                to="/solutions/distributed-workforce"
                onClick={onClose}
                className="p-4 rounded-xl border border-white/5 bg-navy-950/40 hover:border-brand-500/30 transition-all"
              >
                <div className="font-semibold text-sm text-white mb-1">Distributed & Field Teams</div>
                <p className="text-xs text-slate-400">Geofenced mobile clock-in, task verification, and field expense scan.</p>
              </Link>

              <Link
                to="/solutions/talent-acquisition-onboarding"
                onClick={onClose}
                className="p-4 rounded-xl border border-white/5 bg-navy-950/40 hover:border-brand-500/30 transition-all"
              >
                <div className="font-semibold text-sm text-white mb-1">Hiring & Day-One Readiness</div>
                <p className="text-xs text-slate-400">AI candidate screening, e-signature offers, and automated IT hardware triggers.</p>
              </Link>

              <Link
                to="/solutions/employee-self-service"
                onClick={onClose}
                className="p-4 rounded-xl border border-white/5 bg-navy-950/40 hover:border-brand-500/30 transition-all"
              >
                <div className="font-semibold text-sm text-white mb-1">Employee & Manager Self-Service</div>
                <p className="text-xs text-slate-400">Reduce HR tickets with instant mobile payslips, leave filing, and AI policy search.</p>
              </Link>

              <Link
                to="/solutions/workforce-planning-analytics"
                onClick={onClose}
                className="p-4 rounded-xl border border-white/5 bg-navy-950/40 hover:border-brand-500/30 transition-all"
              >
                <div className="font-semibold text-sm text-white mb-1">Workforce Intelligence & Modeling</div>
                <p className="text-xs text-slate-400">Multi-scenario capacity modeling, AI flight risk alerts, and C-suite dashboards.</p>
              </Link>
            </div>
          </div>
        )}

        {activeTab === 'integrations' && (
          <div>
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-400">
                Enterprise Integration Gateway (5 Ecosystem Domains)
              </span>
              <Link to="/integrations" onClick={onClose} className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1">
                View Integration Gateway <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>

            <div className="grid grid-cols-5 gap-6">
              <div>
                <div className="flex items-center gap-2 font-display font-semibold text-sm text-white mb-3">
                  <Database className="w-4 h-4 text-orange-400" /> ERP & Finance
                </div>
                <div className="space-y-2">
                  <Link to="/integrations?cat=erp-finance" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">SAP S/4HANA ERP</Link>
                  <Link to="/integrations?cat=erp-finance" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Oracle Fusion Cloud</Link>
                  <Link to="/integrations?cat=erp-finance" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">GL Ledger Vouchers</Link>
                  <Link to="/integrations?cat=erp-finance" onClick={onClose} className="block text-[11px] text-brand-400 hover:underline pt-1 font-semibold">Explore ERP Connectors →</Link>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 font-display font-semibold text-sm text-white mb-3">
                  <KeyRound className="w-4 h-4 text-orange-400" /> Identity & SSO
                </div>
                <div className="space-y-2">
                  <Link to="/integrations?cat=identity-sso" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Microsoft Entra ID</Link>
                  <Link to="/integrations?cat=identity-sso" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Okta Universal Directory</Link>
                  <Link to="/integrations?cat=identity-sso" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">SAML 2.0 & SCIM 2.0</Link>
                  <Link to="/integrations?cat=identity-sso" onClick={onClose} className="block text-[11px] text-brand-400 hover:underline pt-1 font-semibold">Explore Identity Integrations →</Link>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 font-display font-semibold text-sm text-white mb-3">
                  <Fingerprint className="w-4 h-4 text-orange-400" /> Biometrics & Devices
                </div>
                <div className="space-y-2">
                  <Link to="/integrations?cat=biometrics-hardware" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">ZKTeco Hardware Clocks</Link>
                  <Link to="/integrations?cat=biometrics-hardware" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Suprema BioStar 2 Gates</Link>
                  <Link to="/integrations?cat=biometrics-hardware" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Real-time Push Gateway</Link>
                  <Link to="/integrations?cat=biometrics-hardware" onClick={onClose} className="block text-[11px] text-brand-400 hover:underline pt-1 font-semibold">Explore Hardware Sync →</Link>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 font-display font-semibold text-sm text-white mb-3">
                  <MessageSquare className="w-4 h-4 text-orange-400" /> Productivity & Comm
                </div>
                <div className="space-y-2">
                  <Link to="/integrations?cat=productivity-comm" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Slack Enterprise Grid</Link>
                  <Link to="/integrations?cat=productivity-comm" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Microsoft Teams App</Link>
                  <Link to="/integrations?cat=productivity-comm" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">In-App Leave Approvals</Link>
                  <Link to="/integrations?cat=productivity-comm" onClick={onClose} className="block text-[11px] text-brand-400 hover:underline pt-1 font-semibold">Explore Chat Bots →</Link>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-2 font-display font-semibold text-sm text-white mb-3">
                  <Code2 className="w-4 h-4 text-orange-400" /> Developer APIs
                </div>
                <div className="space-y-2">
                  <Link to="/integrations?cat=custom-api" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">OpenAPI 3.0 REST Suite</Link>
                  <Link to="/integrations?cat=custom-api" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">Event-Driven Webhooks</Link>
                  <Link to="/integrations?cat=custom-api" onClick={onClose} className="block text-xs text-slate-300 hover:text-brand-400">OAuth 2.0 Auth Stream</Link>
                  <Link to="/integrations?cat=custom-api" onClick={onClose} className="block text-[11px] text-brand-400 hover:underline pt-1 font-semibold">Explore Developer API →</Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

