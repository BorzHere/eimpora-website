import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, CheckCircle2, ArrowRight, ChevronRight, Layers, Sparkles } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import CTASection from '../../components/common/CTASection';
import { MODULES_DATA, MODULE_DOMAINS } from '../../data/modulesData';
import Stars from '../../components/home/Stars';
import ModuleFlowDiagram from '../../components/product/ModuleFlowDiagram';

export default function Modules() {
  const [selectedDomain, setSelectedDomain] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredModules = MODULES_DATA.filter((mod) => {
    const matchesDomain = selectedDomain === 'all' || mod.domain === selectedDomain;
    const matchesSearch =
      mod.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      mod.capabilities.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesDomain && matchesSearch;
  });

  return (
    <div className="space-y-0">
      {/* Modules Catalog Hero (DARK SECTION) */}
      <section className="relative pt-32 lg:pt-40 pb-24 bg-navy-950 text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-radial-glow opacity-80" aria-hidden="true" />
        <Stars />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400 backdrop-blur-md mb-6">
            <Layers className="w-4 h-4" />
            Canonical Module Catalog
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            25 Canonical Enterprise Modules. <br />
            <span className="text-gradient-cyan">150+ Built-in Capabilities.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore Eimpora's product ecosystem across People Operations, Workforce Operations, Payroll & Financials, Talent Management, and Strategy & Intelligence.
          </p>

          {/* Search Bar */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search capabilities (e.g. payroll, attendance, ATS, OKRs)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-white/10 bg-navy-900/90 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 transition-all shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Domain Switcher & Grid (LIGHT SECTION) */}
      <section className="relative py-24 bg-slate-50 text-navy-950 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 rounded-xl border border-slate-200 bg-white mb-12 shadow-sm">
            {MODULE_DOMAINS.map((dom) => (
              <button
                key={dom.id}
                onClick={() => setSelectedDomain(dom.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  selectedDomain === dom.id
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-navy-950'
                }`}
              >
                {dom.name}
              </button>
            ))}
          </div>

          {/* Results Counter */}
          <div className="flex items-center justify-between mb-6 text-xs text-slate-600">
            <span>Showing <strong>{filteredModules.length}</strong> of {MODULES_DATA.length} Modules</span>
            {searchQuery && (
              <button onClick={() => setSearchQuery('')} className="text-brand-700 font-semibold hover:underline">
                Clear Search
              </button>
            )}
          </div>

          {/* Module Cards Grid (Crisp Light Cards with Dark Text) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredModules.map((mod) => (
              <div key={mod.slug} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-brand-700 font-bold mb-2">
                    <span>{mod.domainName}</span>
                    <span className="text-[10px] text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-semibold">Canonical</span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-navy-950 mb-2">{mod.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{mod.summary}</p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    {mod.capabilities.slice(0, 3).map((cap, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-brand-600 shrink-0" />
                        <span className="truncate">{cap}</span>
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 p-3 rounded-lg border border-orange-200 bg-orange-50 text-[11px] text-slate-800">
                    <span className="font-semibold text-orange-800 block mb-0.5">Embedded AI Capability:</span>
                    <p>{mod.aiFeature}</p>
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] text-slate-500 font-medium">{mod.roles[0]}</span>
                  <Link
                    to={`/modules/${mod.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-orange-700 hover:text-navy-950 transition-colors"
                  >
                    Full Module Specs <ChevronRight className="w-4 h-4 " />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Cyan & Orange Module Flow SVG Section (White Background) */}
      <ModuleFlowDiagram />

      <CTASection />
    </div>
  );
}
