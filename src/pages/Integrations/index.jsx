import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Network, Search, ArrowRight, CheckCircle2, Server, Database, KeyRound, Fingerprint, Code2 } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import CTASection from '../../components/common/CTASection';
import { INTEGRATIONS_DATA, INTEGRATION_CATEGORIES } from '../../data/integrationsData';
import Stars from '../../components/home/Stars';

export default function Integrations() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const cat = params.get('cat');
    if (cat) {
      setSelectedCategory(cat);
    }
  }, [location.search]);

  const filteredIntegrations = INTEGRATIONS_DATA.filter((item) => {
    const matchesCat = selectedCategory === 'all' || item.category === selectedCategory;
    const matchesSearch =
      item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.type.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-0">
      {/* Hero (DARK SECTION) */}
      <section className="relative pt-32 lg:pt-44 pb-28 bg-navy-950 text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-radial-glow opacity-80" aria-hidden="true" />
        <Stars />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400 backdrop-blur-md mb-6">
            <Network className="w-4 h-4" />
            Enterprise Data Ecosystem
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Enterprise Integration Gateway. <br />
            <span className="text-gradient-cyan">Bi-Directional Sync across your Tech Stack.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Connect Eimpora with SAP, Oracle, Azure AD, Okta, ZKTeco biometrics, Slack, Microsoft Teams, and custom REST API webhooks.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search integrations (e.g. SAP, Azure AD, Biometrics)..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-white/10 bg-navy-900/90 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-brand-500 transition-all shadow-lg"
            />
          </div>

          {/* Mega Menu Category Quick Links in Section Header */}
          <div className="mt-6 flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto">
            <span className="text-xs text-slate-400 font-medium mr-1">Ecosystem Domains:</span>
            {INTEGRATION_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1 rounded-full text-xs font-semibold transition-all border ${
                  selectedCategory === cat.id
                    ? 'border-brand-400 bg-brand-500/20 text-brand-300 shadow-sm'
                    : 'border-white/10 bg-navy-900/60 text-slate-300 hover:border-brand-500/30 hover:text-white'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-16 p-4 max-w-6xl mx-auto  rounded-3xl backdrop-blur-xl">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3 items-center text-center text-xs font-semibold">
              <div className="p-4 rounded-xl border border-white/10 bg-navy-900/80 text-slate-200">
                <span className="text-brand-400 block mb-1">01. Source Systems</span>
                <span>ERP, Directory, Biometric Hardware</span>
              </div>

              <div className="hidden md:flex justify-center text-brand-400 font-bold">→</div>

              <div className="p-4 rounded-xl border border-brand-500/40 bg-brand-500/10 text-brand-300 shadow-cyan-glow">
                <span className="block mb-1">02. Eimpora Gateway</span>
                <span>Mapping, Validation & Webhooks</span>
              </div>

              <div className="hidden md:flex justify-center text-brand-400 font-bold">→</div>

              <div className="p-4 rounded-xl border border-white/10 bg-navy-900/80 text-slate-200">
                <span className="text-brand-400 block mb-1">03. Outbound Ledger</span>
                <span>Banking Files, GL Vouchers, SSO Logs</span>
              </div>
            </div>
          </div>
      </section>

      {/* Connectors Catalog (LIGHT SECTION) */}
      <section className="relative py-24 bg-slate-50 text-navy-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category Bar */}
          <div className="flex flex-wrap items-center justify-start gap-2 p-1.5 rounded-xl border border-slate-200 bg-white mb-12 shadow-sm">
            {INTEGRATION_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-brand-600 text-white shadow-md'
                    : 'text-slate-600 hover:text-navy-950'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Integration Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredIntegrations.map((item) => (
              <div key={item.slug} className="p-6 rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-brand-700 font-bold mb-2">
                    <span>{item.categoryName}</span>
                    <span className="text-[10px] text-slate-600 bg-slate-100 border border-slate-200 px-2 py-0.5 rounded font-semibold">
                      {item.type}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-xl text-navy-950 mb-1">{item.name}</h3>
                  <p className="text-xs text-orange-800 font-medium mb-3">{item.tagline}</p>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">{item.description}</p>

                  <div className="space-y-1.5 pt-3 border-t border-slate-100">
                    <span className="text-[11px] font-semibold text-navy-950 block mb-1">Key Technical Features:</span>
                    {item.features.slice(0, 3).map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                        <span className="truncate">{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Sync Direction: <strong className="text-navy-950">{item.syncDirection}</strong></span>
                  <Link to="/book-demo" className="text-orange-700 font-bold hover:underline">
                    Integration Ready →
                  </Link>
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
