import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Building2, ArrowRight, CheckCircle2, ChevronRight, Factory, Activity, Landmark, ShoppingBag, Truck, Cpu, GraduationCap, Briefcase } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import CTASection from '../../components/common/CTASection';
import { INDUSTRIES_DATA } from '../../data/industriesData';
import Stars from '../../components/home/Stars';

export default function Industries() {
  const [selectedInd, setSelectedInd] = useState(0);
  const [selectedIndustry, setSelectedIndustry] = useState(0);

  return (
    <div className="space-y-0">
      {/* Hero (DARK SECTION) */}
      <section className="relative pt-32 lg:pt-44 pb-40 bg-navy-950 text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-radial-glow opacity-80" aria-hidden="true" />
        <Stars />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400 backdrop-blur-md mb-6">
            <Building2 className="w-4 h-4" />
            Industry Ecosystems
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Enterprise Solutions Tailored <br />
            <span className="text-gradient-cyan">To Your Industry Workforce.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            From 24/7 manufacturing shift plants and healthcare nursing rosters to multi-country financial banking entities.
          </p>
        </div>
      </section>

      {/* Industry Matrix Grid (LIGHT SECTION) */}
      <section className="relative py-24 bg-slate-50 text-navy-950 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {INDUSTRIES_DATA.map((ind) => (
              <div key={ind.slug} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold uppercase tracking-wider text-brand-700 block mb-1">Industry</span>
                  <h3 className="font-display font-bold text-2xl text-navy-950 mb-2">{ind.title}</h3>
                  <p className="text-xs text-brand-800 font-medium mb-3">{ind.tagline}</p>
                  <p className="text-xs text-slate-600 leading-relaxed ">{ind.workforceProfile}</p>

                  {/* <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-navy-950 block mb-1">Key Challenges Solved:</span>
                    {ind.challenges.slice(0, 2).map((ch, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span className="truncate">{ch}</span>
                      </div>
                    ))}
                  </div> */}
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[10px] text-slate-500 uppercase tracking-widest font-semibold">{ind.modulesPackage.length} Core Modules</span>
                  <Link to={`/industries/${ind.slug}`} className="text-xs font-bold text-orange-600 hover:text-orange-700 flex items-center gap-1">
                    Industry Profile <ChevronRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 12 — INDUSTRY SOLUTIONS MATRIX (LIGHT SECTION) */}
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
                          ? 'border-navy-900 bg-navy-800 text-white shadow-md'
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
                            <span className="text-xs font-bold uppercase tracking-wider text-brand-600">{currentInd.title}</span>
                            <Link to={`/industries/${currentInd.slug}`} className="text-xs font-semibold text-navy-800 hover:text-brand-500 flex items-center gap-1">
                              Full Industry Profile <ArrowRight className="w-3.5 h-3.5" />
                            </Link>
                          </div>
                          <p className="text-xs text-slate-700 leading-relaxed font-medium">{currentInd.workforceProfile}</p>
      
                          <div className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
                            <span className="text-xs font-semibold text-navy-950 block">Key Operational Challenges Solved:</span>
                            {currentInd.challenges.slice(0, 3).map((ch, idx) => (
                              <div key={idx} className="flex items-center gap-1.5 text-xs text-slate-700">
                                <CheckCircle2 className="w-3 h-3 text-emerald-600 shrink-0" />
                                <span>{ch}</span>
                              </div>
                            ))}
                          </div>
      
                          <div className="pt-2 flex items-center justify-between text-xs text-navy-900">
                            <span>Governance Focus: <strong className="text-orange-0">{currentInd.governance.slice(0, 45)}...</strong></span>
                          </div>
                        </div>
                      );
                    })()}
                  </div>
                </div>
              </div>
            </section>

      <CTASection />
    </div>
  );
}
