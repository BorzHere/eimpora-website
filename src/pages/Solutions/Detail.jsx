import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, Target, ShieldCheck, Banknote, 
  Layers, Users, HelpCircle, ChevronDown, ChevronUp, Sparkles, Workflow, Activity,
  Clock, FileCheck, ArrowUpRight
} from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import MetricCard from '../../components/common/MetricCard';
import CTASection from '../../components/common/CTASection';
import { SOLUTIONS_DATA } from '../../data/solutionsData';
import { MODULES_DATA } from '../../data/modulesData';
import Stars from '../../components/home/Stars';

export default function SolutionDetail() {
  const { slug } = useParams();
  const solution = SOLUTIONS_DATA.find((s) => s.slug === slug) || SOLUTIONS_DATA[0];

  const [openFaq, setOpenFaq] = useState(0);

  // Find module data objects for relevantModules
  const relevantModuleObjs = (solution.relevantModules || [])
    .map((mSlug) => MODULES_DATA.find((m) => m.slug === mSlug))
    .filter(Boolean);

  const faqs = [
    {
      q: `How quickly can our organization implement the ${solution.title} solution?`,
      a: `Most enterprise customers roll out ${solution.title} within 3 to 5 weeks. Our phased implementation approach enables zero operational downtime while migrating legacy data into governed Eimpora workflows.`
    },
    {
      q: `Can this solution operate alongside our existing ERP infrastructure?`,
      a: `Yes. Eimpora is designed to work either as a full replacement or as an intelligent orchestration layer on top of legacy ERP systems (SAP, Workday, Oracle) using bi-directional API synchronization.`
    },
    {
      q: `How are cross-border compliance and data privacy handled?`,
      a: `Eimpora automatically applies jurisdiction-specific labor laws, tax rules, and data residency restrictions based on worker location, ensuring complete statutory compliance.`
    },
    {
      q: `What ROI can executive sponsors expect?`,
      a: `Organizations implementing this solution typically achieve a 100% reduction in data discrepancy, 60-80% reduction in manual processing overhead, and complete elimination of statutory compliance penalties.`
    }
  ];

  return (
    <div className="space-y-0">
      {/* SECTION 1: Solution Hero (DARK SECTION) */}
      <section className="relative pt-40 pb-28 bg-navy-950 text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-radial-glow opacity-80" aria-hidden="true" />
        <Stars />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {/* Back Link */}
          <div>
            <Link 
              to="/solutions" 
              className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-brand-400 transition-colors duration-200"
            >
              <ArrowLeft className="w-4 h-4" /> Back to Enterprise Solutions
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-8 space-y-4 max-w-lg">
              <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400">
                {solution.category}
              </span>
              <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
                {solution.title}
              </h1>
              <p className="text-lg sm:text-xl text-brand-300 font-medium">{solution.tagline}</p>

              <div className="pt-4 flex flex-wrap gap-4">
                <Link
                  to="/book-demo"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-navy-950 bg-gradient-to-r from-brand-400 to-brand-300 hover:from-brand-300 hover:to-brand-glow transition-all duration-300 shadow-cyan-glow uppercase tracking-wider hover:scale-[1.02]"
                >
                  Schedule Solution Briefing <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Key Stakeholder Ownership Card */}
            <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-navy-900/80 p-6 space-y-4 shadow-xl backdrop-blur-xl transition-all duration-300 hover:border-brand-500/30">
              <h3 className="font-display font-bold text-base text-white border-b border-white/10 pb-3 flex items-center gap-2">
                <Users className="w-4 h-4 text-brand-400" /> Key Stakeholder Ownership
              </h3>
              <div className="space-y-3 text-xs">
                <div>
                  <span className="text-slate-300 block mb-1">Executive Sponsors:</span>
                  <div className="flex flex-wrap gap-1.5">
                    {(solution.responsibleRoles || ['CHRO', 'CFO', 'HRIS Lead']).map((role, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-md bg-orange-300/10 text-orange-300 font-semibold text-[11px] border border-orange-300/10">
                        {role}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="pt-2 border-t border-white/10 flex items-center justify-between text-slate-300">
                  <span>Deployment SLA:</span>
                  <span className="text-emerald-400 font-bold">3 - 5 Weeks</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <section className="relative pt-24  ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {solution.valueMetrics.map((m, idx) => (
              <MetricCard 
                key={idx} 
                title={m.label} 
                value={m.value} 
                changeType="positive" 
                iconName="CheckCircle2"
                dark={true} 
              />
            ))}
          </div>
        </div>
      </section>
      </section>

      {/* SECTION 2: Proven Value Metrics Row (LIGHT SECTION) */}
      

      {/* SECTION 3: Problem vs Outcome Split View (DARK SECTION) */}
      <section className="relative py-24 bg-navy-950 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Transformation Context"
            title="Operational Challenge & Strategic Outcome"
            description="How Eimpora turns complex fragmented operational pain points into governed business performance."
            dark={true}
          />

          <div className="mt-10 grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-6 rounded-2xl border border-rose-500/30 bg-navy-900/80 p-6 sm:p-8 space-y-4 shadow-lg transition-all duration-300 hover:border-rose-500/50">
              <div className="flex items-center gap-2 text-rose-400 font-display font-bold text-lg">
                <span className="h-3 w-3 rounded-full bg-rose-500 animate-ping" />
                The Legacy Problem & Complexity
              </div>
              <p className="text-sm text-slate-300 leading-relaxed sm:text-base">{solution.challenge}</p>
              <div className="p-3.5 rounded-xl bg-rose-500/10 border border-rose-500/20 text-xs text-rose-300 font-medium">
                ⚠️ High risk of human data entry errors, compliance fines, and uncoordinated reporting silos.
              </div>
            </div>

            <div className="lg:col-span-6 rounded-2xl border border-emerald-500/30 bg-navy-900/90 p-6 sm:p-8 space-y-4 shadow-cyan-glow transition-all duration-300 hover:border-emerald-500/50">
              <div className="flex items-center gap-2 text-emerald-400 font-display font-bold text-lg">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                Target Business Outcome
              </div>
              <p className="text-sm text-slate-200 leading-relaxed sm:text-base">{solution.outcome}</p>
              <div className="p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-xs text-emerald-300 font-medium">
                ✓ Automated multi-entity data pipelines with real-time audit logging and executive visibility.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: Solution Execution Workflow Stages (LIGHT SECTION) */}
      {solution.workflowStages && solution.workflowStages.length > 0 && (
        <section className="relative py-24 bg-white text-navy-950 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Execution Roadmap"
              title="Step-by-Step Solution Workflow Pipeline"
              description="The automated operational handoff sequence executed by Eimpora for this solution."
              dark={false}
            />

            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {solution.workflowStages.map((stage, idx) => (
                <div 
                  key={idx} 
                  className="p-6 rounded-2xl border border-slate-200 bg-slate-50 space-y-3 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/50 hover:shadow-lg relative"
                >
                  <div className="flex items-center gap-2">
                    <span className="h-7 w-7 rounded-full bg-brand-600/10 border border-brand-600/30 text-brand-700 flex items-center justify-center font-bold text-xs shrink-0">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-bold uppercase tracking-widest text-orange-500">Step 0{idx + 1}</span>
                  </div>
                  <p className="text-sm text-navy-950 font-semibold leading-snug">{stage}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 5: Core Capabilities Stack (DARK SECTION) */}
      {solution.capabilitiesStack && solution.capabilitiesStack.length > 0 && (
        <section className="relative py-24 bg-navy-900 text-white border-b border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Capabilities Stack"
              title="Core Functional Building Blocks"
              description="Enterprise capabilities leveraged to deliver this solution."
              dark={true}
            />

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {solution.capabilitiesStack.map((cap, idx) => (
                <div 
                  key={idx} 
                  className="p-5 rounded-2xl border border-white/10 bg-navy-950/80 space-y-2 transition-all duration-300 hover:border-brand-500/40 hover:-translate-y-1"
                >
                  <div className="h-8 w-8 rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-400 flex items-center justify-center mb-2">
                    <Layers className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-sm text-white">{cap}</h4>
                  <p className="text-xs text-slate-400">Fully governed with role-based security & real-time telemetry.</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 6: Powering Modules Ecosystem Grid (LIGHT SECTION) */}
      {relevantModuleObjs.length > 0 && (
        <section className="relative py-24 bg-slate-50 text-navy-950 border-b border-slate-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Powering Modules"
              title="Eimpora Modules Executing This Solution"
              description="Click any module below to view detailed functional specifications."
              dark={false}
            />

            <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relevantModuleObjs.map((mObj) => (
                <GlassCard key={mObj.slug} className="p-6 space-y-3 flex flex-col justify-between" dark={false}>
                  <div className="space-y-2">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-orange-700">{mObj.domainName}</span>
                    <h4 className="font-display font-bold text-base text-navy-950">{mObj.name}</h4>
                    <p className="text-xs text-slate-600 line-clamp-2 leading-relaxed">{mObj.tagline}</p>
                  </div>
                  <Link
                    to={`/modules/${mObj.slug}`}
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-navy-950 pt-2 border-t border-slate-200 transition-colors duration-200"
                  >
                    Inspect Module Specs <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </GlassCard>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* SECTION 7: Solution FAQs Accordion (DARK SECTION) */}
      <section className="relative py-24 bg-navy-950 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Solution FAQs"
            title="Frequently Asked Questions"
            description="Addressing key considerations for solution deployment and ROI."
            dark={true}
          />

          <div className="mt-10 max-w-4xl mx-auto space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="rounded-2xl border border-white/10 bg-navy-900/70 overflow-hidden transition-all duration-300 hover:border-brand-500/30"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-display font-semibold  text-white hover:text-brand-300 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-brand-400 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-orange-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>

                {openFaq === idx && (
                  <div className="p-5 pt-0 text-xs sm:text-sm text-slate-300  bg-navy-950/40 leading-relaxed space-y-2">
                    <p>{faq.a}</p>
                  </div>
                )}
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

