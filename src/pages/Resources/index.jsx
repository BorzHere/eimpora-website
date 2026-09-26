import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Search, ArrowRight, ChevronRight, Clock, UserCheck } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import CTASection from '../../components/common/CTASection';
import { RESOURCES_DATA, RESOURCE_CATEGORIES } from '../../data/resourcesData';
import Stars from '../../components/home/Stars';

export default function Resources() {
  const [selectedCat, setSelectedCat] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredResources = RESOURCES_DATA.filter((r) => {
    const matchesCat = selectedCat === 'all' || r.category === selectedCat;
    const matchesSearch =
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.audience.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="space-y-0">
      {/* Hero (DARK SECTION) */}
      <section className="relative pt-32 lg:pt-44 pb-36 bg-navy-950 text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-radial-glow opacity-80" aria-hidden="true" />
        <Stars />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400 backdrop-blur-md mb-6">
            <BookOpen className="w-4 h-4" />
            Eimpora Knowledge Center
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Architecture Playbooks & <br />
            <span className="text-gradient-cyan">Workforce Operations Guides.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Deep technical whitepapers, migration cutover guides, governed AI frameworks, and procurement evaluation checklists for enterprise leaders.
          </p>

          {/* Search */}
          <div className="mt-8 max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-400" />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search guides & whitepapers..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-white/10 bg-navy-900/40 text-sm text-white placeholder-slate-400 focus:outline-none focus:border-brand-500 transition-all shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Resource Cards (LIGHT SECTION) */}
      <section className="relative py-24 bg-slate-50 text-navy-950 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-start gap-2 p-1.5 rounded-xl border border-slate-200 bg-white mb-12 shadow-sm">
            {RESOURCE_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCat(cat.id)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all ${
                  selectedCat === cat.id
                    ? 'bg-brand-500 text-white shadow-md'
                    : 'text-slate-600 hover:text-navy-950'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredResources.map((res) => (
              <div key={res.slug} className="p-8 rounded-2xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-xs text-brand-700 font-bold mb-3">
                    <span>{res.categoryName}</span>
                    <span className="flex items-center gap-1 text-slate-500">
                      <Clock className="w-3.5 h-3.5 text-orange-600" /> {res.readTime}
                    </span>
                  </div>
                  <h3 className="font-display font-bold text-2xl text-navy-950 mb-3">{res.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{res.summary}</p>

                  <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 mb-4 font-medium">
                    <span className="font-semibold text-orange-900 block mb-0.5">Target Audience:</span>
                    <p>{res.audience}</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-semibold">{res.publishDate}</span>
                  <Link
                    to={`/resources/${res.slug}`}
                    className="inline-flex items-center gap-1 text-xs font-bold text-brand-700 hover:text-navy-950 transition-colors uppercase tracking-wider"
                  >
                    Read Full Guide <ChevronRight className="w-4 h-4 " />
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
