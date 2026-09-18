import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  ArrowLeft, ArrowRight, Clock, BookOpen, CheckCircle2, FileText, 
  Share2, Download, UserCheck, ShieldCheck, Sparkles, Bookmark, Layers 
} from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import CTASection from '../../components/common/CTASection';
import { RESOURCES_DATA } from '../../data/resourcesData';
import Stars from '../../components/home/Stars';

export default function ResourceDetail() {
  const { slug } = useParams();
  const res = RESOURCES_DATA.find((r) => r.slug === slug) || RESOURCES_DATA[0];

  const [bookmarked, setBookmarked] = useState(false);

  // Other related resources (exclude current)
  const relatedResources = RESOURCES_DATA.filter((r) => r.slug !== res.slug).slice(0, 3);

  return (
    <div className=" space-y-16 ">
     
      {/* Container */}
      <div className="relative ">
        <Stars />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-12">
          {/* Back Navigation */}
          <Link
            to="/resources"
            className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-brand-400 transition-colors mb-6"
          >
            <ArrowLeft className="w-4 h-4" /> Back to Knowledge Center
          </Link>

          {/* Resource Header */}
          <div className="space-y-8">
            <div className="flex flex-wrap items-center gap-3 text-xs text-brand-400 font-semibold">
              <span className="px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/30 uppercase tracking-widest">
                {res.categoryName}
              </span>
              <span>•</span>
              <span className="flex items-center gap-1 text-slate-400">
                <Clock className="w-3.5 h-3.5 text-brand-400" /> {res.readTime}
              </span>
              {res.publishDate && (
                <>
                  <span>•</span>
                  <span className="text-slate-400">Published {res.publishDate}</span>
                </>
              )}
            </div>

            <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl max-w-3xl font-bold tracking-tight text-white leading-tight">
              {res.title}
            </h1>

            {/* Audience Pill */}
            {res.audience && (
              <div className="inline-flex items-center gap-2 text-xs text-slate-300 bg-white/5 border border-white/10 px-3.5 py-1.5 rounded-lg">
                <span className="text-slate-400">Target Audience:</span>
                <span className="font-semibold text-brand-300">{res.audience}</span>
              </div>
            )}

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-3xl border-l-2 border-brand-500/50 pl-4 py-1">
              {res.summary}
            </p>

            {/* Action Row */}
            <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-b border-white/10 py-4">
              <div className="flex items-center gap-3">
                <div className="h-9 w-9 rounded-full bg-brand-500/20 border border-brand-500/40 text-brand-400 flex items-center justify-center font-bold text-xs">
                  EI
                </div>
                <div className="text-xs">
                  <span className="font-bold text-white block">Eimpora Enterprise Research Institute</span>
                  <span className="text-slate-400">Peer-Reviewed Architecture Group</span>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setBookmarked(!bookmarked)}
                  className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                    bookmarked
                      ? 'bg-brand-500/20 border-brand-500/40 text-brand-300'
                      : 'bg-white/5 border-white/10 text-slate-300 hover:text-white'
                  }`}
                >
                  <Bookmark className="w-3.5 h-3.5" />
                  {bookmarked ? 'Bookmarked' : 'Save Report'}
                </button>

                <Link
                  to="/book-demo"
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-lg text-xs font-bold text-navy-950 bg-brand-400 hover:bg-brand-300 transition-all uppercase tracking-wider"
                >
                  <Download className="w-3.5 h-3.5" /> Request PDF Briefing
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Executive Summary Takeaways Box */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mt-10 p-6 sm:p-8 rounded-2xl border border-brand-500/30 bg-navy-900/90 shadow-cyan-glow space-y-4">
          <h3 className="font-display font-bold text-lg text-brand-300 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-brand-400" /> Key Executive Takeaways
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-200">
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>Unified enterprise architectures eliminate up to 3.2% annual payroll calculation leakage.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>Governed AI ensures human authorization for all workforce operational recommendations.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>Cryptographically hashed audit trails ensure immediate statutory compliance verification.</span>
            </div>
            <div className="flex items-start gap-2.5 p-3 rounded-xl bg-white/5 border border-white/5">
              <CheckCircle2 className="w-4 h-4 text-orange-400 shrink-0 mt-0.5" />
              <span>Zero-downtime cutover scripts enable migration of 20,000+ records in 48 hours.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content Sections */}
      <section className="mt-12 space-y-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {res.sections.map((sec, idx) => (
          <div
            key={idx}
            className="p-6 sm:p-8 rounded-2xl border border-white/10 bg-navy-900/60 space-y-3 hover:border-brand-500/30 transition-all shadow-lg"
          >
            <div className="flex items-center gap-2 text-xs font-bold text-brand-400 uppercase tracking-widest">
              <span>Section 0{idx + 1}</span>
            </div>
            <h2 className="font-display font-bold text-xl sm:text-2xl text-white">{sec.title}</h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">{sec.content}</p>
            
            <div className="pt-3 border-t border-white/5 flex items-center justify-between text-xs text-slate-400">
              <span>Eimpora Architectural Standard</span>
              <span className="text-orange-300 font-semibold">Verified Spec</span>
            </div>
          </div>
        ))}
      </section>

      {/* Related Resources Grid */}
      {relatedResources.length > 0 && (
        <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Related Knowledge"
            title="Explore Further Architectural Reports & Guides"
            description="Recommended whitepapers and implementation playbooks for enterprise leaders."
          />

          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedResources.map((r) => (
              <GlassCard key={r.slug} className="p-6 space-y-3 flex flex-col justify-between">
                <div className="space-y-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-brand-400">{r.categoryName}</span>
                  <h4 className="font-display font-bold text-lg text-white line-clamp-2">{r.title}</h4>
                  <p className="text-xs text-slate-300 line-clamp-3 leading-relaxed">{r.summary}</p>
                </div>
                <Link
                  to={`/resources/${r.slug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-brand-400 hover:text-white pt-2 border-t border-white/10 transition-colors"
                >
                  Read Whitepaper <ArrowRight className="w-3.5 h-3.5 text-orange-400" />
                </Link>
              </GlassCard>
            ))}
          </div>
        </section>
      )}

      {/* CTA Footer */}
      <CTASection />
    </div>
  );
}

