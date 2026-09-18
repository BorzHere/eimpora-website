import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, Filter, Cpu, Lock } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import CTASection from '../../components/common/CTASection';
import AIInsightPanel from '../../components/product/AIInsightPanel';
import EimporaHexagon from '../../components/home/EimporaHexagon1';

export default function AI() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedCaseId, setSelectedCaseId] = useState(1);

  const cases = [
    {
      id: 1,
      category: 'Payroll',
      title: 'Unusual Shift Overtime Multiplier',
      department: 'Logistics - Branch 4',
      impact: 'High ($14,200 exposure)',
      confidence: '99.4%',
      summary: 'Branch 4 submitted a 42% spike in weekend double-time punches without pre-approval supervisor tag.',
      ruleCheck: 'Policy #OT-402: Overtime exceeding 15% requires Regional VP sign-off.',
      recommendation: 'Hold payout batch for Branch 4 pending Regional VP digital authorization.',
      status: 'Awaiting Authorization',
      moduleLink: '/modules/payroll'
    },
    {
      id: 2,
      category: 'Retention',
      title: 'High-Potential Flight Risk Signal',
      department: 'Engineering & DevOps',
      impact: 'Medium (Key Talent Loss Risk)',
      confidence: '96.2%',
      summary: '3 Senior Systems Architects show a 65% drop in internal portal activity following market salary benchmark updates.',
      ruleCheck: 'Policy #RET-109: Key talent retention alert triggered on salary compression > 12%.',
      recommendation: 'Dispatch retention merit review ticket to CHRO and Line Manager.',
      status: 'Action Recommended',
      moduleLink: '/modules/succession'
    },
    {
      id: 3,
      category: 'Attendance',
      title: 'Repeated Geo-fence Boundary Challenge',
      department: 'Field Services - Site B',
      impact: 'Low (4 Employees)',
      confidence: '98.8%',
      summary: '4 field technician mobile clock-ins were registered 450 meters outside approved GPS geo-fence perimeter.',
      ruleCheck: 'Policy #GEO-88: Geo-fence tolerance capped at 100 meters.',
      recommendation: 'Reject remote punch and request manual site supervisor verification.',
      status: 'Pending Verification',
      moduleLink: '/modules/attendance'
    },
    {
      id: 4,
      category: 'Talent',
      title: 'AI Candidate Match Recommendation',
      department: 'Data Science Requisition',
      impact: 'Positive (Accelerated Hiring)',
      confidence: '95.1%',
      summary: 'Candidate #8842 matches 94% of required skill matrix tags for Senior ML Engineer.',
      ruleCheck: 'Policy #ATS-20: AI resume match score > 90% auto-queues candidate for recruiter call.',
      recommendation: 'Auto-invite candidate for 15-minute screening call.',
      status: 'Auto-Queued',
      moduleLink: '/modules/recruitment'
    }
  ];

  const filteredCases = activeFilter === 'All' ? cases : cases.filter(c => c.category === activeFilter);
  const currentCase = cases.find(c => c.id === selectedCaseId) || cases[0];

  return (
    <div className="space-y-0">
      {/* AI Hero (DARK SECTION) */}
      <section className="relative pt-32 lg:pt-40 pb-20 bg-navy-950 text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-radial-glow opacity-80" aria-hidden="true" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 animate-pulse" />
            Governed Decision Intelligence
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold max-w-4xl mx-auto tracking-tight text-white leading-tight">
            Eimpora Intelligence: <br />
            <span className="text-gradient-cyan">Decision Support for Enterprise Workforce.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed">
            AI inside the daily operational flow. Eimpora analyzes signals across payroll runs, biometrics, recruitment pipelines, and turnover trends while enforcing strict human authorization.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400 mb-12">
            <Link to="/security" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
              <ShieldCheck className="w-4 h-4 text-brand-400" />
              Human Authorization Mandatory
            </Link>
            <Link to="/security" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
              <Lock className="w-4 h-4 text-brand-400" />
              Zero Data Leakage / Isolated Models
            </Link>
            <Link to="/security" className="flex items-center gap-2 hover:text-brand-400 transition-colors">
              <CheckCircle2 className="w-4 h-4 text-brand-400" />
              100% Immutable Audit Trail
            </Link>
          </div>
          <div>
            <EimporaHexagon />
          </div>

        </div>
      </section>


      {/* Governed AI Architecture (LIGHT SECTION) */}
      <section className="relative py-24 bg-slate-50 text-navy-950 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Architectural Rigor"
            title="The 4-Layer Governed AI Stack"
            description="How Eimpora safely converts operational signals into authorized corporate actions."
            dark={false}
          />

          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: '01', title: 'Operational Signals', desc: 'Ingests real-time biometric punches, payroll ledger entries, ATS resumes, and leave balance events.' },
              { step: '02', title: 'Policy & Rule Engine', desc: 'Validates signals against strict labor law rules, company policies, budget limits, and approval chains.' },
              { step: '03', title: 'AI Decision Model', desc: 'Parses anomalies, calculates predictive attrition scores, and generates actionable recommendations.' },
              { step: '04', title: 'Human Authorization', desc: 'Requires authorized manager or executive digital sign-off before executing financial or personnel actions.' },
            ].map((s, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-md">
                <span className="text-xs font-bold text-brand-700 uppercase tracking-widest block mb-2">Layer {s.step}</span>
                <h3 className="font-display font-bold text-lg text-navy-950 mb-2">{s.title}</h3>
                <p className="text-xs text-slate-600 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Interactive AI Command Center (DARK SECTION) */}
      <section id="command-center" className="relative py-24 bg-navy-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Interactive Command Center"
            title="Filter and inspect live AI decision signals."
            description="Click a case to inspect full policy validation rules, risk scores, and human authorization controls."
            dark={true}
          />

          <div className="mt-8">
            {/* Category Filter Bar */}
            <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-xl border border-white/10 bg-navy-900/80 max-w-md mb-8">
              {['All', 'Payroll', 'Retention', 'Attendance', 'Talent'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${activeFilter === cat
                    ? 'bg-brand-500 text-navy-950 shadow-cyan-glow'
                    : 'text-slate-400 hover:text-white'
                    }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Cases Grid & Inspector */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Left Case List */}
              <div className="lg:col-span-5 space-y-3">
                {filteredCases.map((c) => (
                  <button
                    key={c.id}
                    onClick={() => setSelectedCaseId(c.id)}
                    className={`w-full text-left p-4 rounded-xl border transition-all ${selectedCaseId === c.id
                      ? 'border-brand-500/50 bg-brand-500/15 text-white shadow-cyan-glow'
                      : 'border-white/5 bg-navy-900/60 text-slate-300 hover:bg-white/5'
                      }`}
                  >
                    <div className="flex items-center justify-between text-xs mb-1">
                      <span className="font-semibold text-brand-400">{c.category}</span>
                      <span className="text-[10px] text-orange-300">{c.confidence} Confidence</span>
                    </div>
                    <h4 className="font-display font-bold text-sm text-white">{c.title}</h4>
                    <p className="text-xs text-slate-400 mt-1 truncate">{c.department}</p>
                  </button>
                ))}
              </div>

              {/* Right Case Inspector Drawer */}
              <div className="lg:col-span-7 rounded-2xl border border-white/10 bg-navy-900/90 p-6 shadow-2xl backdrop-blur-xl flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-3">
                    <div>
                      <span className="text-xs font-bold uppercase tracking-wider text-brand-400">{currentCase.category} Case #{currentCase.id}</span>
                      <h3 className="font-display font-bold text-xl text-white mt-0.5">{currentCase.title}</h3>
                    </div>
                    <span className="text-xs font-semibold text-emerald-400 bg-emerald-500/10 px-2.5 py-1 rounded-full">
                      {currentCase.status}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 gap-4 text-xs text-slate-300 bg-white/5 p-3 rounded-lg">
                    <div>Department: <strong className="text-white block mt-0.5">{currentCase.department}</strong></div>
                    <div>Impact Exposure: <strong className="text-brand-400 block mt-0.5">{currentCase.impact}</strong></div>
                  </div>

                  <div>
                    <h4 className="text-xs font-semibold text-white mb-1">Signal Summary:</h4>
                    <p className="text-xs text-slate-300 leading-relaxed">{currentCase.summary}</p>
                  </div>

                  <div className="p-3 rounded-lg border border-amber-500/20 bg-amber-500/10 text-xs">
                    <span className="font-semibold text-amber-300 block mb-1">Policy & Rule Validation Check:</span>
                    <p className="text-slate-200">{currentCase.ruleCheck}</p>
                  </div>

                  <div className="p-3 rounded-lg border border-brand-500/20 bg-brand-500/10 text-xs">
                    <span className="font-semibold text-brand-300 block mb-1">AI Action Recommendation:</span>
                    <p className="text-slate-200">{currentCase.recommendation}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between">
                  <Link to={currentCase.moduleLink} className="text-xs font-bold text-brand-400 hover:text-white flex items-center gap-1">
                    Inspect Associated Module <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                  <Link to="/book-demo" className="px-5 py-2 rounded-lg text-xs font-bold bg-brand-500 text-navy-950 hover:bg-brand-400 transition-all shadow-cyan-glow">
                    Authorize & Lock Record
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Product Demonstration Panel (ACCENT SECTION) */}
      <section className="relative py-24 bg-slate-50 text-navy-950 border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <AIInsightPanel />
        </div>
      </section>

      <CTASection />
    </div>
  );
}
