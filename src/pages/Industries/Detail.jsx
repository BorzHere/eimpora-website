import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, CheckCircle2, Building2, ShieldCheck, 
  Activity, Layers, FileText, HelpCircle, ChevronDown, ChevronUp, Sparkles, Workflow
} from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import MetricCard from '../../components/common/MetricCard';
import CTASection from '../../components/common/CTASection';
import { INDUSTRIES_DATA } from '../../data/industriesData';
import { MODULES_DATA } from '../../data/modulesData';
import Stars from '../../components/home/Stars';

export default function IndustryDetail() {
  const { slug } = useParams();
  const industry = INDUSTRIES_DATA.find((i) => i.slug === slug) || INDUSTRIES_DATA[0];

  const [openFaq, setOpenFaq] = useState(0);

  // Map modulesPackage slugs to MODULES_DATA objects
  const packageModuleObjs = (industry.modulesPackage || [])
    .map((mSlug) => MODULES_DATA.find((m) => m.slug === mSlug))
    .filter(Boolean);

  // Parse workflow string into steps
  const workflowSteps = (industry.workflow || '')
    .split('→')
    .map((s) => s.trim())
    .filter(Boolean);

  const faqs = [
    {
      q: `How does Eimpora customize its rules engine for ${industry.title}?`,
      a: `Eimpora comes pre-configured with industry-tailored rule templates covering union overtime multipliers, rotational shifts, statutory compliance reports, and location-based data residency restrictions.`
    },
    {
      q: `Can Eimpora integrate with specialized ${industry.title} hardware and field systems?`,
      a: `Yes. We provide native adapters for factory biometric gates, mobile GPS geo-fencing, hospital shift terminals, retail POS terminals, and fleet management telematics.`
    },
    {
      q: `What compliance guarantees are provided for regulated industries?`,
      a: `All transactions are cryptographically signed and stored in an immutable audit trail, fully compliant with regional labor codes, SOX, HIPAA, GDPR, and ISO 27001 mandates.`
    },
    {
      q: `How long does an industry-tailored implementation take?`,
      a: `Deployment takes between 3 to 6 weeks depending on enterprise headcount and legacy data sources, guided by dedicated Eimpora domain specialists.`
    }
  ];

  return (
    <div className="space-y-20 pt-32 pb-12">
      {/* Back Link */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/industries" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-brand-400 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Industry Solutions
        </Link>
      </div>

      {/* Hero Section */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden rounded-2xl">
        <Stars />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400">
              Industry Solution Profile
            </span>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">
              {industry.title}
            </h1>
            <p className="text-lg text-brand-300 font-medium">{industry.tagline}</p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed border-l-2 border-brand-500/40 pl-4 py-1">
              <span className="font-bold text-white block mb-0.5">Target Workforce Profile:</span>
              {industry.workforceProfile}
            </p>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link
                to="/book-demo"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-navy-950 bg-gradient-to-r from-brand-400 to-brand-300 hover:from-brand-300 hover:to-brand-glow transition-all shadow-cyan-glow uppercase tracking-wider"
              >
                Schedule Industry Consultation <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>

          {/* Industry Governance Snapshot Box */}
          <div className="lg:col-span-4 rounded-2xl border border-brand-500/30 bg-navy-900/90 p-6 space-y-4 shadow-cyan-glow">
            <h3 className="font-display font-bold text-base text-white border-b border-white/10 pb-3 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-brand-400" /> Domain Telemetry
            </h3>
            <div className="space-y-3 text-xs">
              <div>
                <span className="text-slate-400 block mb-1">Regulatory Standard:</span>
                <span className="font-semibold text-emerald-400">{industry.governance}</span>
              </div>
              <div className="pt-2 border-t border-white/10">
                <span className="text-slate-400 block mb-1">C-Suite Analytics Focus:</span>
                <span className="font-semibold text-brand-300">{industry.analyticsFocus}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Verified Metrics Row */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <MetricCard title="Compliance Rate" value="100.0%" change="Statutory Lock" changeType="positive" iconName="ShieldCheck" />
          <MetricCard title="Audit Readiness" value="Instant" change="Zero Lag" changeType="positive" iconName="CheckCircle2" />
          <MetricCard title="Processing Speedup" value="4.5x" change="Automated" changeType="positive" iconName="Activity" />
        </div>
      </section>

      {/* Specific Industry Challenges Solved */}
      <div className="bg-navy-800/30 py-20">
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Pain Points Solved"
            title={`Operational Challenges Addressed in ${industry.title}`}
            description="Eimpora addresses domain-specific hurdles that generic HR software cannot handle."
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
            {industry.challenges.map((c, idx) => (
              <div key={idx} className="p-5 rounded-2xl border border-white/10 bg-navy-900/60 flex items-start gap-3 text-sm text-slate-200 hover:border-brand-500/40 transition-all">
                <div className="h-7 w-7 rounded-full bg-brand-500/20 border border-brand-500/40 text-brand-400 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">
                  0{idx + 1}
                </div>
                <div className="space-y-1">
                  <span className="font-semibold text-white block">{c}</span>
                  <p className="text-xs text-slate-400">Solved via automated Eimpora rules engine with real-time audit trail.</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>

      {/* End-to-End Industry Operational Workflow Pipeline */}
      {workflowSteps.length > 0 && (
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Operational Pipeline"
            title="End-to-End Domain Workflow Sequence"
            description="The automated transaction path engineered specifically for this industry domain."
          />

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {workflowSteps.map((step, idx) => (
              <div key={idx} className="p-6 rounded-2xl border border-white/10 bg-navy-900/80 space-y-3 hover:border-brand-500/40 transition-all relative shadow-lg">
                <div className="flex items-center gap-2">
                  <span className="h-7 w-7 rounded-full bg-brand-500/20 border border-brand-500/40 text-brand-400 flex items-center justify-center font-bold text-xs">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Phase 0{idx + 1}</span>
                </div>
                <p className="text-sm text-white font-semibold leading-snug">{step}</p>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Governance & Analytics Focus Split Panel */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 rounded-2xl border border-brand-500/30 bg-navy-900/90 p-6 sm:p-8 space-y-4 shadow-cyan-glow">
            <h3 className="font-display font-bold text-xl text-brand-300 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-brand-400" /> Regulatory Governance & Labor Compliance
            </h3>
            <p className="text-sm text-slate-200 leading-relaxed sm:text-base">{industry.governance}</p>
            <div className="p-3.5 rounded-xl bg-brand-500/10 border border-brand-500/20 text-xs text-brand-300">
              All policy edits locked with immutable cryptographic signature for external regulatory audit.
            </div>
          </div>

          <div className="lg:col-span-6 rounded-2xl border border-white/10 bg-navy-900/80 p-6 sm:p-8 space-y-4 shadow-lg">
            <h3 className="font-display font-bold text-xl text-white flex items-center gap-2">
              <Activity className="w-5 h-5 text-emerald-400" /> Executive Analytics & KPI Focus
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed sm:text-base">{industry.analyticsFocus}</p>
            <div className="p-3.5 rounded-xl bg-white/5 border border-white/10 text-xs text-slate-300">
              Pre-built executive dashboard metrics updated in real-time with sub-second query speeds.
            </div>
          </div>
        </div>
      </section>

      {/* Recommended Module Ecosystem */}
      {packageModuleObjs.length > 0 && (
        <div className="bg-navy-800/30 py-20">
          <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              eyebrow="Recommended Stack"
              title={`Eimpora Modules Tailored for ${industry.title}`}
              description="Inspect the core functional modules deployed as part of this industry solution package."
            />

            <div className="mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {packageModuleObjs.map((mObj) => (
                <GlassCard key={mObj.slug} className="p-5 space-y-3 flex flex-col justify-between">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-bold uppercase tracking-widest text-brand-400">{mObj.domainName}</span>
                    <h4 className="font-display font-bold text-sm text-white">{mObj.name}</h4>
                    <p className="text-xs text-slate-300 line-clamp-2 leading-relaxed">{mObj.tagline}</p>
                  </div>
                  <Link
                    to={`/modules/${mObj.slug}`}
                    className="inline-flex items-center gap-1 text-[11px] font-bold text-brand-400 hover:text-white pt-2 border-t border-white/10 transition-colors"
                  >
                    View Module Specs <ArrowRight className="w-3 h-3" />
                  </Link>
                </GlassCard>
              ))}
            </div>
          </section>
        </div>
      )}

      {/* Industry FAQs */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Domain FAQs"
          title={`Frequently Asked Questions for ${industry.title}`}
          description="Addressing domain compliance, hardware compatibility, and deployment timeline."
        />

        <div className="mt-8 max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="rounded-2xl border border-white/10 bg-navy-900/70 overflow-hidden transition-all"
            >
              <button
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                className="w-full p-5 text-left flex items-center justify-between gap-4 font-display font-semibold text-sm text-white hover:text-brand-300 transition-colors"
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

              {openFaq === idx && (
                <div className="p-5 pt-0 text-xs sm:text-sm text-slate-300 border-t border-white/5 bg-navy-950/40 leading-relaxed space-y-2">
                  <p>{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Footer */}
      <CTASection />
    </div>
  );
}

