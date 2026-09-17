import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Banknote, Calculator, CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Building2, Server } from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import CTASection from '../../components/common/CTASection';
import { PRICING_DOMAINS, DEPLOYMENT_MODELS } from '../../data/pricingData';
import Stars from '../../components/home/Stars';

export default function Pricing() {
  const [workforceSize, setWorkforceSize] = useState(2500);
  const [selectedDomains, setSelectedDomains] = useState(['people-ops', 'workforce-ops', 'payroll-financials']);
  const [entityCount, setEntityCount] = useState(3);
  const [deploymentModel, setDeploymentModel] = useState('managed-cloud');

  const toggleDomain = (id) => {
    if (selectedDomains.includes(id)) {
      if (selectedDomains.length > 1) {
        setSelectedDomains(selectedDomains.filter((d) => d !== id));
      }
    } else {
      setSelectedDomains([...selectedDomains, id]);
    }
  };

  // Indicative calculation logic for demo estimation
  const baseRatePerEmployee = 4.5;
  const domainMultiplier = selectedDomains.length * 0.8;
  const entityMultiplier = 1 + (entityCount - 1) * 0.05;
  const modelMultiplier = deploymentModel === 'managed-cloud' ? 1 : deploymentModel === 'dedicated-instance' ? 1.25 : 1.5;
  
  const estimatedMonthly = Math.round(workforceSize * baseRatePerEmployee * domainMultiplier * entityMultiplier * modelMultiplier);

  return (
    <div className="space-y-0">
      {/* Hero (DARK SECTION) */}
      <section className="relative pt-32 lg:pt-48 pb-40 bg-navy-950 text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-radial-glow opacity-80" aria-hidden="true" />
        <Stars />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400 backdrop-blur-md mb-6">
            <Calculator className="w-4 h-4" />
            Enterprise Commercial Framework
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
            Commercial Scope Estimator. <br />
            <span className="text-gradient-cyan">Tailored to Your Enterprise Scale.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Configure your active employee volume, selected module domains, legal entity count, and deployment model to calculate an indicative commercial scope.
          </p>
        </div>
      </section>

      {/* Interactive Estimator Tool (LIGHT SECTION) */}
      <section className="relative py-24 bg-slate-50 text-navy-950 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Controls Panel */}
            <div className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-8 space-y-6 shadow-md text-navy-950">
              {/* 1. Workforce Size Slider */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="font-display font-bold text-sm text-navy-950">Active Workforce Size:</label>
                  <span className="font-display font-bold text-lg text-brand-700">{workforceSize.toLocaleString()} Employees</span>
                </div>
                <input
                  type="range"
                  min="250"
                  max="50000"
                  step="250"
                  value={workforceSize}
                  onChange={(e) => setWorkforceSize(parseInt(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                />
                <div className="flex justify-between text-[10px] text-slate-500 mt-1 font-semibold">
                  <span>250 Employees</span>
                  <span>10,000</span>
                  <span>50,000+ Enterprise Scale</span>
                </div>
              </div>

              {/* 2. Selected Module Domains */}
              <div>
                <label className="font-display font-bold text-sm text-navy-950 block mb-3">Selected Product Domains:</label>
                <div className="space-y-2">
                  {PRICING_DOMAINS.map((dom) => {
                    const isChecked = selectedDomains.includes(dom.id);
                    return (
                      <button
                        key={dom.id}
                        onClick={() => toggleDomain(dom.id)}
                        className={`w-full text-left p-3 rounded-xl border text-xs font-semibold transition-all flex items-center justify-between ${
                          isChecked
                            ? 'border-brand-500 bg-navy-950 text-white shadow-sm'
                            : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span>{dom.name}</span>
                        <CheckCircle2 className={`w-4 h-4 ${isChecked ? 'text-brand-400' : 'text-slate-400'}`} />
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* 3. Multi-Entity Count */}
              <div>
                <label className="font-display font-bold text-sm text-navy-950 block mb-2">Number of Legal Entities:</label>
                <div className="flex items-center gap-3">
                  {[1, 3, 5, 10, 25].map((cnt) => (
                    <button
                      key={cnt}
                      onClick={() => setEntityCount(cnt)}
                      className={`flex-1 py-2 rounded-lg text-xs font-bold transition-all border ${
                        entityCount === cnt
                          ? 'border-brand-500 bg-navy-950 text-white shadow-sm'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {cnt} {cnt === 1 ? 'Entity' : 'Entities'}
                    </button>
                  ))}
                </div>
              </div>

              {/* 4. Deployment Model */}
              <div>
                <label className="font-display font-bold text-sm text-navy-950 block mb-2">Deployment Model:</label>
                <div className="space-y-2">
                  {DEPLOYMENT_MODELS.map((m) => (
                    <button
                      key={m.id}
                      onClick={() => setDeploymentModel(m.id)}
                      className={`w-full text-left p-3 rounded-xl border text-xs font-semibold transition-all flex items-center justify-between ${
                        deploymentModel === m.id
                          ? 'border-brand-500 bg-navy-950 text-white shadow-sm'
                          : 'border-slate-200 bg-slate-50 text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      <span>{m.name}</span>
                      <Server className={`w-4 h-4 ${deploymentModel === m.id ? 'text-brand-400' : 'text-slate-400'}`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Result Output Surface (DARK ACCENT SURFACE) */}
            <div className="lg:col-span-5 rounded-2xl border border-brand-500/40 bg-navy-950 text-white p-8 shadow-2xl backdrop-blur-xl flex flex-col justify-between space-y-6 transition-all duration-500 hover:border-brand-400/70 hover:shadow-cyan-glow">
              <div>
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <span className="text-xs font-bold uppercase tracking-widest text-brand-400">Indicative Commercial Estimate</span>
                  <span className="text-[10px] font-semibold text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded">Annual Billing Basis</span>
                </div>

                <div className="mt-6 text-center">
                  <div className="text-xs text-slate-400">Estimated Scope Baseline</div>
                  <div
                    key={estimatedMonthly}
                    className="font-display text-4xl sm:text-5xl font-bold text-white mt-1 animate-[estimate-value_300ms_ease-out]"
                  >
                    ${estimatedMonthly.toLocaleString()}
                    <span className="text-sm font-medium text-slate-400"> / month</span>
                  </div>
                  <p key={`${estimatedMonthly}-per-employee`} className="text-[11px] text-slate-400 mt-2 animate-[estimate-value_300ms_ease-out]">
                    Approximately ${ (estimatedMonthly / workforceSize).toFixed(2) } per employee / month
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-white/10 space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center justify-between">
                    <span>Workforce Scale:</span>
                    <strong className="text-white">{workforceSize.toLocaleString()} Employees</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Product Domains:</span>
                    <strong className="text-brand-400">{selectedDomains.length} Domains Selected</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Entities Covered:</span>
                    <strong className="text-white">{entityCount} Legal Entities</strong>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Hosting Model:</span>
                    <strong className="text-white">
                      {DEPLOYMENT_MODELS.find(m => m.id === deploymentModel)?.name.slice(0, 22)}...
                    </strong>
                  </div>
                </div>

                <div className="mt-6 p-3 rounded-lg bg-white/5 border border-white/10 text-[11px] text-slate-300 leading-relaxed">
                  Indicative estimation only. Final enterprise proposal is scoped based on custom SLAs, data migration complexity, and biometric gateway hardware integrations.
                </div>
              </div>

              <div className="pt-6 border-t border-white/10">
                <Link
                  to="/book-demo"
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl text-sm font-bold text-navy-950 bg-gradient-to-r from-brand-400 via-brand-300 to-brand-glow hover:from-brand-300 hover:to-brand-400 transition-all shadow-cyan-glow uppercase tracking-wider"
                >
                  Request Commercial Proposal <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
