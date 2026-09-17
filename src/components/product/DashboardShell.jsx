import React, { useState } from 'react';
import { 
  Users, Banknote, Clock, TrendingUp, Sparkles, AlertTriangle, 
  CheckCircle2, ChevronRight, Filter, ShieldCheck
} from 'lucide-react';
import WorkforceChart from './WorkforceChart';

export default function DashboardShell() {
  const [activeTab, setActiveTab] = useState('overview');
  const [timeframe, setTimeframe] = useState('Monthly');

  return (
    <div className="relative rounded-2xl border border-white/10 bg-navy-900/90 shadow-2xl backdrop-blur-xl overflow-hidden text-white">
      {/* Top Header bar */}
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 bg-navy-950/70">
        <div className="flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-rose-500/80" />
          <span className="h-3 w-3 rounded-full bg-amber-500/80" />
          <span className="h-3 w-3 rounded-full bg-emerald-500/80" />
          <div className="ml-3 flex items-center gap-2 rounded-md bg-white/5 px-3 py-1 text-xs text-slate-300 border border-white/5">
            <span className="h-2 w-2 rounded-full bg-brand-400 animate-pulse" />
            eimpora.app/executive-command-center
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 rounded-lg bg-white/5 p-1 border border-white/5 text-xs">
            {['Monthly', 'Quarterly', 'YTD'].map((t) => (
              <button
                key={t}
                onClick={() => setTimeframe(t)}
                className={`px-2.5 py-1 rounded-md transition-all font-medium ${
                  timeframe === t ? 'bg-brand-500 text-navy-950 font-bold' : 'text-slate-400 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
          <span className="rounded bg-brand-500/20 border border-brand-500/30 px-2 py-0.5 text-[10px] font-bold text-brand-400">
            LIVE DEMO
          </span>
        </div>
      </div>

      {/* Main Container */}
      <div className="grid grid-cols-12 gap-4 p-4 sm:p-6">
        {/* Sidebar Nav */}
        <div className="col-span-12 sm:col-span-3 lg:col-span-2 flex flex-row sm:flex-col gap-1.5 rounded-xl border border-white/5 bg-navy-950/60 p-2 overflow-x-auto sm:overflow-x-visible">
          {[
            { id: 'overview', label: 'Overview', icon: Users },
            { id: 'payroll', label: 'Payroll', icon: Banknote },
            { id: 'attendance', label: 'Attendance', icon: Clock },
            { id: 'talent', label: 'Talent', icon: TrendingUp },
            { id: 'ai', label: 'AI Insights', icon: Sparkles, badge: '3' },
          ].map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className={`flex items-center justify-between rounded-lg px-3 py-2.5 text-xs font-semibold transition-all whitespace-nowrap ${
                  isActive
                    ? 'bg-brand-500/20 text-brand-300 border border-brand-500/40 shadow-cyan-glow'
                    : 'text-slate-400 hover:bg-white/5 hover:text-white'
                }`}
              >
                <div className="flex items-center gap-2.5">
                  <Icon className={`w-4 h-4 ${isActive ? 'text-brand-400' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </div>
                {item.badge && (
                  <span className="hidden sm:inline-block px-1.5 py-0.5 rounded-full text-[10px] bg-brand-500 text-navy-950 font-bold">
                    {item.badge}
                  </span>
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Workspace */}
        <div className="col-span-12 sm:col-span-9 lg:col-span-10 space-y-4">
          {/* Top Metrics Row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div className="rounded-xl border border-white/5 bg-navy-950/40 p-4 transition-all hover:border-brand-500/30">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Active Workforce</span>
                <span className="font-semibold text-emerald-400">+2.4%</span>
              </div>
              <div className="mt-2 font-display text-2xl font-bold text-white">
                {timeframe === 'Monthly' ? '24,812' : timeframe === 'Quarterly' ? '25,430' : '26,100'}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Across 14 Legal Entities</div>
            </div>

            <div className="rounded-xl border border-white/5 bg-navy-950/40 p-4 transition-all hover:border-brand-500/30">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Payroll Exposure</span>
                <span className="font-semibold text-brand-400">Locked</span>
              </div>
              <div className="mt-2 font-display text-2xl font-bold text-white">
                {timeframe === 'Monthly' ? '$4.62M' : timeframe === 'Quarterly' ? '$13.8M' : '$55.4M'}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">0 Calculation Discrepancy</div>
            </div>

            <div className="rounded-xl border border-white/5 bg-navy-950/40 p-4 transition-all hover:border-brand-500/30">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Shift Readiness</span>
                <span className="font-semibold text-emerald-400">99.8%</span>
              </div>
              <div className="mt-2 font-display text-2xl font-bold text-white">
                {timeframe === 'Monthly' ? '1,420 Shifts' : timeframe === 'Quarterly' ? '4,260 Shifts' : '17,040 Shifts'}
              </div>
              <div className="text-[11px] text-slate-400 mt-1">Real-time Biometric Sync</div>
            </div>
          </div>

          {/* Middle Chart & AI Signals */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
            <div className="lg:col-span-7 rounded-xl border border-white/5 bg-navy-950/40 p-4">
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-semibold text-slate-300">Headcount & Attrition Trajectory</span>
                <span className="text-[10px] text-slate-400">Target vs Actual</span>
              </div>
              <WorkforceChart timeframe={timeframe} />
            </div>

            <div className="lg:col-span-5 flex flex-col gap-3">
              <div className="flex items-start gap-3 rounded-xl border border-amber-500/20 bg-amber-500/10 p-3 text-amber-300">
                <AlertTriangle className="w-5 h-5 shrink-0 mt-0.5 text-amber-400" />
                <div className="text-xs">
                  <p className="font-semibold text-white">3 Payroll Anomalies Flagged</p>
                  <p className="mt-1 text-slate-300">Unusual overtime spike in Logistics Branch 4 requiring sign-off before payout.</p>
                </div>
              </div>

              <div className="flex items-start gap-3 rounded-xl border border-brand-500/20 bg-brand-500/10 p-3 text-brand-300">
                <Sparkles className="w-5 h-5 shrink-0 mt-0.5 text-brand-400 animate-pulse" />
                <div className="text-xs">
                  <p className="font-semibold text-white">AI Retention Signal</p>
                  <p className="mt-1 text-slate-300">Flight risk alert for 2 Senior Engineers based on market salary drift.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Approvals Table Preview */}
          <div className="rounded-xl border border-white/5 bg-navy-950/40 p-4">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-300">Pending Executive Approvals</span>
              <span className="text-[11px] font-medium text-brand-400">4 Action Required</span>
            </div>
            <div className="space-y-2">
              {[
                { title: 'Leave Request · A. Rahman (Finance Lead)', dept: 'Finance', status: 'Pending Manager', icon: Clock },
                { title: 'Expense Claim $2,450 · S. Okafor (Ops)', dept: 'Operations', status: 'Policy Verified', icon: CheckCircle2 },
                { title: 'Offer Package Approval · Senior Architect', dept: 'Engineering', status: 'Executive Sign-off', icon: ShieldCheck }
              ].map((row, idx) => (
                <div key={idx} className="flex items-center justify-between rounded-lg bg-white/5 px-3 py-2 text-xs transition-colors hover:bg-white/10">
                  <div className="flex items-center gap-2.5">
                    <row.icon className="w-4 h-4 text-brand-400" />
                    <span className="text-slate-200 font-medium">{row.title}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] text-slate-400 bg-white/5 px-2 py-0.5 rounded">{row.dept}</span>
                    <span className="text-[11px] font-semibold text-brand-400">{row.status}</span>
                    <ChevronRight className="w-3.5 h-3.5 text-slate-500" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
