import React, { useState } from 'react';
import {
  Sparkles, Lock, TrendingUp, Users, ShieldCheck, CheckCircle2,
  ArrowRight, Calendar, Phone, Globe, Building2, User, Mail, Award, BarChart3, ChevronDown
} from 'lucide-react';
import ToastModal from '../../components/common/ToastModal';
import EimporaHexagon from '../../components/home/Stars';

const INTEREST_AREAS = [
  'Full Platform Suite',
  'Core HR & Global Directory',
  'Intelligent Payroll Readiness',
  'Time, Attendance & Roster Ops',
  'Talent & AI Recruiting'
];

export default function BookDemo() {
  const [activeInterest, setActiveInterest] = useState('Full Platform Suite');

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    company: '',
    jobTitle: '',
    workforceSize: '',
    region: '',
    phone: '',
    targetDate: '',
    challenges: ''
  });

  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    message: '',
    type: 'success'
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      setModalState({
        isOpen: true,
        title: 'Validation Error',
        message: 'Please provide your full name before scheduling.',
        type: 'error'
      });
      return;
    }

    if (!formData.email.trim() || !formData.email.includes('@')) {
      setModalState({
        isOpen: true,
        title: 'Validation Error',
        message: 'Please enter a valid work email address.',
        type: 'error'
      });
      return;
    }

    if (!formData.company.trim()) {
      setModalState({
        isOpen: true,
        title: 'Validation Error',
        message: 'Please enter your organization or company name.',
        type: 'error'
      });
      return;
    }

    // Success response
    setModalState({
      isOpen: true,
      title: 'Private Demo Requested',
      message: `Thank you, ${formData.fullName}. Your private Eimpora demonstration request for ${formData.company} (${activeInterest}) has been received. An enterprise solutions architect will reach out to ${formData.email} within 4 business hours.`,
      type: 'success'
    });

    setFormData({
      fullName: '',
      email: '',
      company: '',
      jobTitle: '',
      workforceSize: '',
      region: '',
      phone: '',
      targetDate: '',
      challenges: ''
    });
  };

  return (
    <>
      <section className="relative pt-44 pb-36 bg-navy-950 text-white overflow-hidden text-center">
        <div className="absolute inset-0 bg-radial-glow opacity-80" aria-hidden="true" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8  z-10">
          <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400 backdrop-blur-md mb-6">
            <Sparkles className="w-4 h-4 text-brand-400 animate-pulse" />
            Private Discovery Session
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight max-w-3xl mx-auto">
            Schedule a Private <br />
            <span className="text-gradient-cyan">Eimpora Platform Demo.</span>
          </h1>

          <p className="mt-4 text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a specialist-led walkthrough tailored specifically to your organization's legal entity structure, shift operations, multi-currency payroll, and compliance requirements.
          </p>
        </div>
        <EimporaHexagon />
      </section>
      <div className="min-h-screen bg-slate-50 text-navy-950 relative pt-16 lg:pt-20 pb-28 overflow-hidden">
        {/* Toast Modal Notification */}
        <ToastModal
          isOpen={modalState.isOpen}
          onClose={() => setModalState({ ...modalState, isOpen: false })}
          title={modalState.title}
          message={modalState.message}
          type={modalState.type}
        />

        {/* Light background grid pattern */}
        <div className="absolute inset-0 bg-grid-pattern-light opacity-60 pointer-events-none" aria-hidden="true" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

            {/* LEFT COLUMN: DARK GLASS FORM CARD (MATCHING USER SCREENSHOT) */}
            <div className="lg:col-span-7 rounded-3xl border border-slate-800 bg-[#090d16] text-white p-6 sm:p-9 shadow-2xl backdrop-blur-xl space-y-6 relative">
              <div className="absolute inset-0 bg-radial-glow opacity-60" aria-hidden="true" />
              <div className="absolute inset-0 bg-grid-pattern opacity-30" aria-hidden="true" />
              {/* Form Header with Divider */}
              <div className="border-b border-white/10 pb-5">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h1 className="font-display text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                      Request a Private Demo
                    </h1>
                    <p className="text-xs sm:text-sm text-slate-400 mt-1 font-medium">
                      Schedule a specialist-led walkthrough for your organization.
                    </p>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-cyan-500/40 bg-cyan-500/10 text-cyan-400 text-[11px] font-bold tracking-wide uppercase shrink-0">
                    Enterprise Priority
                  </div>
                </div>
              </div>

              {/* Primary Area of Interest Selector */}
              <div className="space-y-3">
                <label className="text-xs font-semibold text-slate-300 block">
                  Primary Area of Interest <span className="text-brand-400">*</span>
                </label>

                <div className="flex flex-wrap gap-2">
                  {INTEREST_AREAS.map((area) => {
                    const isActive = activeInterest === area;
                    return (
                      <button
                        key={area}
                        type="button"
                        onClick={() => setActiveInterest(area)}
                        className={`px-3.5 py-2 rounded-xl text-xs font-bold transition-all duration-200 cursor-pointer ${isActive
                          ? 'bg-gradient-to-r from-brand-400 to-brand-300 text-navy-950 shadow-cyan-glow scale-105'
                          : 'bg-navy-900/60 text-slate-300 border border-white/10 hover:border-white/30 hover:text-white'
                          }`}
                      >
                        {area}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Demo Form with ONLY BORDER-BOTTOM Inputs */}
              <form onSubmit={handleSubmit} className="space-y-6 pt-2 relative z-10">

                {/* Row 1: Full Name & Work Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Full Name <span className="text-brand-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Amara Okafor"
                      className="w-full bg-transparent border-b border-white/20 focus:border-b-brand-400 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors rounded-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Work Email <span className="text-brand-400">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="amara@company.com"
                      className="w-full bg-transparent border-b border-white/20 focus:border-b-brand-400 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors rounded-none"
                    />
                  </div>
                </div>

                {/* Row 2: Organization & Job Title */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Organization / Entity <span className="text-brand-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Eimpora Global Enterprises"
                      className="w-full bg-transparent border-b border-white/20 focus:border-b-brand-400 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors rounded-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Job Title <span className="text-brand-400">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.jobTitle}
                      onChange={(e) => setFormData({ ...formData, jobTitle: e.target.value })}
                      placeholder="CHRO / VP People"
                      className="w-full bg-transparent border-b border-white/20 focus:border-b-brand-400 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors rounded-none"
                    />
                  </div>
                </div>

                {/* Row 3: Workforce Size & Headquarters Region */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1 relative">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Workforce Size <span className="text-brand-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.workforceSize}
                        onChange={(e) => setFormData({ ...formData, workforceSize: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 focus:border-b-brand-400 py-2.5 text-xs text-white focus:outline-none transition-colors rounded-none appearance-none cursor-pointer pr-6"
                      >
                        <option value="" className="bg-navy-950 text-slate-300">Select employee range</option>
                        <option value="50 - 250" className="bg-navy-950 text-white">50 - 250 Employees</option>
                        <option value="250 - 1,000" className="bg-navy-950 text-white">250 - 1,000 Employees</option>
                        <option value="1,000 - 5,000" className="bg-navy-950 text-white">1,000 - 5,000 Employees</option>
                        <option value="5,000+ Enterprise" className="bg-navy-950 text-white">5,000+ Enterprise Scale</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-0 top-3 pointer-events-none" />
                    </div>
                  </div>

                  <div className="space-y-1 relative">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Headquarters Region <span className="text-brand-400">*</span>
                    </label>
                    <div className="relative">
                      <select
                        value={formData.region}
                        onChange={(e) => setFormData({ ...formData, region: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 focus:border-b-brand-400 py-2.5 text-xs text-white focus:outline-none transition-colors rounded-none appearance-none cursor-pointer pr-6"
                      >
                        <option value="" className="bg-navy-950 text-slate-300">Select region</option>
                        <option value="North America" className="bg-navy-950 text-white">North America</option>
                        <option value="Europe & UK" className="bg-navy-950 text-white">Europe & UK</option>
                        <option value="Middle East & Africa" className="bg-navy-950 text-white">Middle East & Africa</option>
                        <option value="Asia Pacific" className="bg-navy-950 text-white">Asia Pacific</option>
                        <option value="Latin America" className="bg-navy-950 text-white">Latin America</option>
                      </select>
                      <ChevronDown className="w-4 h-4 text-slate-400 absolute right-0 top-3 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Row 4: Direct Phone & Target Launch Date */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Direct Phone (Optional)
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+971 50 123 4567"
                      className="w-full bg-transparent border-b border-white/20 focus:border-b-brand-400 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors rounded-none"
                    />
                  </div>

                  <div className="space-y-1">
                    <label className="text-xs font-semibold text-slate-300 block">
                      Target Launch Date
                    </label>
                    <input
                      type="date"
                      value={formData.targetDate}
                      onChange={(e) => setFormData({ ...formData, targetDate: e.target.value })}
                      className="w-full bg-transparent border-b border-white/20 focus:border-b-brand-400 py-2.5 text-xs text-white focus:outline-none transition-colors rounded-none"
                    />
                  </div>
                </div>

                {/* Textarea: Workforce Challenges with Bottom Border Only */}
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-slate-300 block">
                    Current Workforce Challenges & Objectives
                  </label>
                  <textarea
                    rows="2"
                    value={formData.challenges}
                    onChange={(e) => setFormData({ ...formData, challenges: e.target.value })}
                    placeholder="Describe your current HR, payroll, attendance, or multi-entity operational requirements..."
                    className="w-full bg-transparent border-b border-white/20 focus:border-b-brand-400 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none transition-colors rounded-none resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full py-4 rounded-2xl text-xs sm:text-sm font-extrabold uppercase tracking-wider text-navy-950 bg-gradient-to-r from-brand-400 via-brand-300 to-brand-glow hover:from-brand-300 hover:to-brand-400 transition-all shadow-cyan-glow flex items-center justify-center gap-2 cursor-pointer transform hover:scale-[1.01]"
                  >
                    <span>Schedule Private Eimpora Demonstration</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Security Footer Guarantee */}
                <div className="flex items-center justify-center gap-2 text-xs text-slate-400 pt-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Processed under strict NDA. Zero spam guaranteed.</span>
                </div>

              </form>
            </div>

            {/* RIGHT COLUMN: VALUE PROPOSITION DECK (LIGHT SECTION CONTRAST) */}
            <div className="lg:col-span-5 space-y-6 lg:pt-2 relative">

              {/* Top Eyebrow */}
              <div className="flex items-center gap-2 text-xs font-extrabold text-brand-600 uppercase tracking-widest">
                <span className="h-0.5 w-6 bg-brand-600 inline-block" />
                EIMPORA PRIVATE DEMONSTRATION
              </div>

              {/* Heading */}
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-navy-950 leading-[1.12] tracking-tight">
                Ready to Transform Your Enterprise Workforce Operations?
              </h2>

              {/* Description */}
              <p className="text-sm sm:text-base text-slate-600 leading-relaxed">
                Experience how Eimpora unifies core HR, intelligent payroll readiness, biometric time tracking, and predictive AI intelligence into one seamless command deck.
              </p>

              {/* Divider */}
              <div className="border-t border-slate-200 my-6" />

              {/* 4 Feature Value Pillars Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Feature 1 */}
                <div className="space-y-2 p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-brand-500/40 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-600">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-navy-950">
                    Tailored 1-on-1 Walkthrough
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Customized preview aligned to your specific industry, shift rules, and compliance requirements.
                  </p>
                </div>

                {/* Feature 2 */}
                <div className="space-y-2 p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-brand-500/40 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-600">
                    <Lock className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-navy-950">
                    Strict NDA & Confidentiality
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    ISO 27001 & SOC 2 compliant. Your workforce data remains 100% encrypted and protected.
                  </p>
                </div>

                {/* Feature 3 */}
                <div className="space-y-2 p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-brand-500/40 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-600">
                    <BarChart3 className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-navy-950">
                    Custom ROI Projection
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Receive a tailored workforce efficiency breakdown and payroll cost savings report.
                  </p>
                </div>

                {/* Feature 4 */}
                <div className="space-y-2 p-5 rounded-2xl border border-slate-200 bg-white shadow-sm hover:border-brand-500/40 transition-colors">
                  <div className="w-9 h-9 rounded-xl bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-600">
                    <Users className="w-4 h-4" />
                  </div>
                  <h3 className="font-display text-sm font-bold text-navy-950">
                    Architect-Led Consultation
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Guided directly by senior HR tech architects—no generic sales pitches or scripted decks.
                  </p>
                </div>

              </div>

              {/* Secondary CTA Button */}
              <div className="pt-2">
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-extrabold uppercase tracking-wider text-white bg-navy-950 hover:bg-navy-900 transition-all shadow-md cursor-pointer"
                >
                  <span>Schedule Private Demo</span>
                  <ArrowRight className="w-4 h-4 text-brand-400" />
                </button>
              </div>

            </div>

          </div>
        </div>
      </div>
    </>
  );
}
