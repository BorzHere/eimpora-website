import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function CTASection({ 
  title = "Ready to unify your global workforce operations?", 
  description = "Book a private enterprise demonstration to see how Eimpora streamlines multi-entity payroll, attendance biometrics, and governed AI workflows.",
  primaryCtaText = "Book Enterprise Demo",
  secondaryCtaText = "Explore Scope Estimator"
}) {
  return (
    <section className="relative overflow-hidden bg-navy-950 py-20 lg:py-28 border-t border-white/10">
      <div className="absolute inset-0 bg-radial-glow opacity-60" aria-hidden="true" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/10 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400 backdrop-blur-md mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          Enterprise Deployment Discovery
        </div>

        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-white leading-tight">
          {title}
        </h2>

        <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
          {description}
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to="/book-demo"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-navy-950 bg-gradient-to-r from-brand-400 via-brand-300 to-brand-glow hover:from-brand-300 hover:to-brand-400 transition-all shadow-cyan-glow hover:scale-105 text-sm uppercase tracking-wider"
          >
            {primaryCtaText} <ArrowRight className="w-4 h-4" />
          </Link>

          <Link
            to="/pricing"
            className=" w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-medium text-orange-400 hover:text-orange-500 border border-white/20 bg-orange-500/5 hover:border-orange-500/40 transition-all text-sm"
          >
            {secondaryCtaText}
          </Link>
        </div>

        <div className="mt-10 pt-8 border-t border-white/10 flex flex-wrap items-center justify-center gap-8 text-xs font-medium text-slate-400">
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-400" />
            Dedicated Tenant Architecture
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-400" />
            25 Canonical Modules Included
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle2 className="w-4 h-4 text-orange-400" />
            Custom SLA & Support Commitments
          </div>
        </div>
      </div>
    </section>
  );
}
