import React from 'react';
import {
  Activity,
  Banknote,
  CheckCircle2,
  Clock,
  Globe,
  Lock,
  ShieldCheck,
  Sparkles,
  Target,
  Users
} from 'lucide-react';

const ICONS = {
  Activity,
  Banknote,
  CheckCircle2,
  Clock,
  Globe,
  Lock,
  ShieldCheck,
  Sparkles,
  Target,
  Users
};

export default function MetricCard({ title, value, change, changeType = 'positive', iconName, subtitle, dark = true }) {
  const IconComponent = ICONS[iconName] || Activity;

  return (
    <div
      className={`rounded-xl border px-5 py-6 backdrop-blur-md transition-all ${
        dark
          ? 'border-white/10 bg-navy-900/60 text-white hover:border-brand-500/40'
          : 'border-slate-200 bg-white text-navy-950 hover:border-brand-500/50 hover:shadow-lg'
      }`}
    >
      <div className="flex items-center justify-between">
        <span className={`text-xs font-medium ${dark ? 'text-slate-400' : 'text-slate-600'}`}>{title}</span>
        <div
          className={`flex h-8 w-8 items-center justify-center rounded-lg ${
            dark ? 'bg-brand-500/10 text-brand-400' : 'bg-brand-50 text-brand-600'
          }`}
        >
          <IconComponent className="h-4 w-4" />
        </div>
      </div>

      <div className="mt-5 flex items-baseline justify-between">
        <span className={`font-display text-2xl font-bold tracking-tight ${dark ? 'text-white' : 'text-navy-950'}`}>
          {value}
        </span>
        {change && (
          <span
            className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${
              changeType === 'positive'
                ? dark
                  ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/20'
                  : 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                : changeType === 'negative'
                ? dark
                  ? 'bg-rose-500/15 text-rose-400 border border-rose-500/20'
                  : 'bg-rose-50 text-rose-700 border border-rose-200'
                : dark
                ? 'bg-brand-500/15 text-brand-400 border border-brand-500/20'
                : 'bg-brand-50 text-brand-700 border border-brand-200'
            }`}
          >
            {change}
          </span>
        )}
      </div>
      {subtitle && (
        <p className={`mt-2 text-[11px] ${dark ? 'text-slate-400' : 'text-slate-500'}`}>{subtitle}</p>
      )}
    </div>
  );
}
