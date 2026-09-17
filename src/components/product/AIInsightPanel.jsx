import React, { useState } from 'react';
import { Sparkles, ShieldCheck, AlertTriangle, ArrowRight, CheckCircle2, RefreshCw } from 'lucide-react';

export default function AIInsightPanel() {
  const [selectedSignal, setSelectedSignal] = useState(0);

  const signals = [
    {
      id: 1,
      title: 'Overtime Policy Anomaly',
      domain: 'Payroll & Operations',
      severity: 'High',
      confidence: '99.4%',
      summary: 'Branch 4 logged a 42% spike in weekend overtime punches compared to 12-week historical baseline.',
      recommendation: 'Verify supervisor pre-approval tags prior to locking monthly payroll batch.',
      status: 'Awaiting Authorization'
    },
    {
      id: 2,
      title: 'Talent Retention Risk',
      domain: 'Talent Management',
      severity: 'Medium',
      confidence: '96.2%',
      summary: '3 Senior DevOps engineers show a 65% drop in internal portal engagement following market salary revisions.',
      recommendation: 'Schedule stay-interview and initiate merit compensation review.',
      status: 'Action Recommended'
    },
    {
      id: 3,
      title: 'Certification Renewal Warning',
      domain: 'Compliance',
      severity: 'Medium',
      confidence: '100%',
      summary: '14 Healthcare Nurses have medical license renewals expiring within 30 days.',
      recommendation: 'Auto-dispatch LMS recertification reminder via SMS & Email portal.',
      status: 'Auto-Trigger Active'
    }
  ];

  const current = signals[selectedSignal];

  return (
    <div className="rounded-3xl border border-brand-500/30 bg-navy-900 p-6 backdrop-blur-xl shadow-cyan-glow-lg text-white">
      <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-6">
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500/20 text-brand-400">
            <Sparkles className="w-4 h-4 animate-pulse" />
          </div>
          <div>
            <h3 className="font-display font-bold text-base text-white">Eimpora Governed AI Intelligence</h3>
            <p className="text-xs text-slate-400">Real-time operational signal parsing & policy validation</p>
          </div>
        </div>
        <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded-full">
          Human Authorization Enforced
        </span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
        {/* Signal List */}
        <div className="md:col-span-5 space-y-2.5">
          {signals.map((sig, idx) => (
            <button
              key={sig.id}
              onClick={() => setSelectedSignal(idx)}
              className={`w-full text-left p-3 rounded-xl border transition-all ${
                selectedSignal === idx
                  ? 'border-brand-500/50 bg-brand-500/15 text-white shadow-md'
                  : 'border-white/5 bg-navy-950/40 text-slate-300 hover:bg-white/5'
              }`}
            >
              <div className="flex items-center justify-between text-xs font-semibold">
                <span className="text-brand-400">{sig.domain}</span>
                <span
                  className={`text-[10px] px-2 py-0.5 rounded-full ${
                    sig.severity === 'High' ? 'bg-rose-500/20 text-rose-300' : 'bg-amber-500/20 text-amber-300'
                  }`}
                >
                  {sig.severity} Risk
                </span>
              </div>
              <div className="mt-1 font-display text-xs font-bold">{sig.title}</div>
            </button>
          ))}
        </div>

        {/* Selected Signal Detail */}
        <div className="md:col-span-7 rounded-xl border border-white/10 bg-navy-950/70 p-4 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
              <span>AI Confidence Index: <strong className="text-orange-400">{current.confidence}</strong></span>
              <span className="text-slate-300 font-semibold">{current.status}</span>
            </div>
            <h4 className="font-display text-base font-bold text-white mb-2">{current.title}</h4>
            <p className="text-xs text-slate-300 leading-relaxed">{current.summary}</p>

            <div className="mt-4 p-3 rounded-lg border border-brand-500/20 bg-brand-500/10 text-xs">
              <span className="font-semibold text-brand-300 block mb-1">Recommended Policy Action:</span>
              <p className="text-slate-200">{current.recommendation}</p>
            </div>
          </div>

          <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between">
            <span className="text-[11px] text-slate-400">Action Rationale Logged to Immutable Audit</span>
            <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-brand-500 text-navy-950 hover:bg-brand-400 transition-colors shadow-cyan-glow">
              Authorize Action <CheckCircle2 className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
