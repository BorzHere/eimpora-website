import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Target, ArrowRight, CheckCircle2, ChevronRight, Sparkles, HelpCircle, ChevronDown } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import CTASection from '../../components/common/CTASection';
import { SOLUTIONS_DATA } from '../../data/solutionsData';
import Stars from '../../components/home/Stars';

export default function Solutions() {
  const [selectedSolution, setSelectedSolution] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  const currentSolution = SOLUTIONS_DATA[selectedSolution] || SOLUTIONS_DATA[0];

  const faqs = [
    {
      q: `How quickly can our organization implement the ${currentSolution.title} solution?`,
      a: `Most enterprise customers roll out ${currentSolution.title} within 3 to 5 weeks. Our phased implementation approach enables zero operational downtime while migrating legacy data into governed Eimpora workflows.`
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
      {/* Hero (DARK SECTION) */}
      <section className="relative pt-32 lg:pt-48 pb-36 bg-navy-950 text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-radial-glow opacity-80" aria-hidden="true" />
        <Stars />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400 backdrop-blur-md mb-6">
            <Target className="w-4 h-4" />
            Enterprise Solutions
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Solve Real Operational Challenges. <br />
            <span className="text-gradient-cyan">Powered by Eimpora Platform Stacks.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Align Eimpora modules around key enterprise operational objectives: unified global records, time & payroll alignment, distributed workforce control, and workforce planning.
          </p>
        </div>
      </section>

      {/* Interactive Solution Finder (LIGHT SECTION) */}
      <section className="relative py-24 bg-slate-50 text-navy-950 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Solution Finder"
            title="Interactive Enterprise Solution Matrix"
            description="Click a solution to inspect the operational challenge, target business outcome, module stack, and measurable value metrics."
            dark={false}
          />

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Solution Selector Buttons */}
            <div className="lg:col-span-5 space-y-3">
              {SOLUTIONS_DATA.map((sol, idx) => (
                <button
                  key={sol.slug}
                  onClick={() => setSelectedSolution(idx)}
                  className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                    selectedSolution === idx
                      ? 'border-navy-900 bg-navy-800 text-white shadow-md'
                      : 'border-slate-200 bg-white text-slate-800 hover:bg-slate-100'
                  }`}
                >
                  <div>
                    <span className={`text-[10px] font-bold uppercase tracking-wider block ${selectedSolution === idx ? 'text-brand-400' : 'text-brand-700'}`}>{sol.category}</span>
                    <span className="font-display font-bold text-sm">{sol.title}</span>
                  </div>
                  <ChevronRight className={`w-4 h-4 ${selectedSolution === idx ? 'text-brand-400' : 'text-orange-400'}`} />
                </button>
              ))}
            </div>

            {/* Solution Detail Surface */}
            <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-8 shadow-md text-navy-950">
              {(() => {
                const currentSol = SOLUTIONS_DATA[selectedSolution];
                return (
                  <div className="space-y-6">
                    <div className="border-b border-slate-200 pb-4">
                      <span className="text-xs font-bold uppercase tracking-widest text-brand-700">{currentSol.category}</span>
                      <h2 className="font-display font-bold text-2xl text-navy-950 mt-1">{currentSol.title}</h2>
                      <p className="text-sm text-orange-800 font-medium mt-1">{currentSol.tagline}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="p-4 rounded-xl border border-rose-200 bg-rose-50 text-xs text-rose-800">
                        <span className="font-bold text-rose-900 block mb-1">Operational Challenge:</span>
                        <p>{currentSol.challenge}</p>
                      </div>

                      <div className="p-4 rounded-xl border border-emerald-200 bg-emerald-50 text-xs text-emerald-800">
                        <span className="font-bold text-emerald-900 block mb-1">Target Business Outcome:</span>
                        <p>{currentSol.outcome}</p>
                      </div>
                    </div>

                    <div>
                      <h4 className="text-xs font-semibold text-navy-950 mb-2">Eimpora Capability Stack:</h4>
                      <div className="flex flex-wrap gap-2">
                        {currentSol.capabilitiesStack.map((cap, idx) => (
                          <span key={idx} className="px-3 py-1 rounded-full text-xs bg-brand-50 border border-brand-200 text-brand-800 font-medium">
                            {cap}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200">
                      {currentSol.valueMetrics.map((m, idx) => (
                        <div key={idx} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center">
                          <div className="font-display font-bold text-lg text-navy-950">{m.value}</div>
                          <div className="text-[10px] text-slate-500 mt-0.5">{m.label}</div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-2 flex justify-end">
                      <Link
                        to={`/solutions/${currentSol.slug}`}
                        className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-700 hover:text-navy-950 transition-colors uppercase tracking-wider"
                      >
                        Read Deep Solution Architecture <ArrowRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                );
              })()}
            </div>
          </div>
        </div>
      </section>

      {/* Solution FAQs Accordion (DARK SECTION) */}
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
                className="rounded-2xl border border-white/10 bg-navy-900/70 overflow-hidden transition-all duration-300 ease-out hover:border-brand-500/30"
              >
                <button
                  type="button"
                  aria-expanded={openFaq === idx}
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full p-4 text-left flex items-center justify-between gap-4 font-display font-semibold text-white hover:text-brand-300 transition-colors duration-200"
                >
                  <span className="flex items-center gap-3">
                    <HelpCircle className="w-4 h-4 text-brand-400 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-4 h-4 text-orange-400 shrink-0 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>

                <div
                  className={`grid transition-all duration-300 ease-out ${
                    openFaq === idx ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="p-5 pt-0 text-xs sm:text-sm text-slate-300 bg-navy-950/40 leading-relaxed space-y-2">
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
