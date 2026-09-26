import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, ArrowRight } from 'lucide-react';
import Logo from '../common/Logo';

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10 text-slate-400 text-sm relative z-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Column 1: Brand Info */}
          <div className="lg:col-span-2 space-y-5">
            <Link to="/" className="inline-block hover:scale-[1.02] transition-transform">
              <Logo variant="light" size="lg" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-300 max-w-sm">
              Eimpora is the next-generation AI-embedded workforce operating platform designed for multi-entity enterprise operations, multi-currency payroll, shift scheduling, and governed decision intelligence.
            </p>
            <div className="flex items-center gap-2 pt-2 text-xs font-semibold text-emerald-400">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Eimpora Global Platform Operational — 99.99% Uptime SLA
            </div>
          </div>

          {/* Column 2: Platform & AI */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">Platform & AI</h4>
            <ul className="space-y-3 text-[13px] text-white/80">
              <li><Link to="/platform" className="hover:text-brand-400 transition-colors">Platform Architecture</Link></li>
              <li><Link to="/platform#layers" className="hover:text-brand-400 transition-colors">5-Layer Architecture</Link></li>
              <li><Link to="/platform#roles" className="hover:text-brand-400 transition-colors">Role-Based Experiences</Link></li>
              <li><Link to="/ai" className="hover:text-brand-400 transition-colors">Governed AI Engine</Link></li>
              <li><Link to="/ai#command-center" className="hover:text-brand-400 transition-colors">AI Command Center</Link></li>
              <li><Link to="/security" className="hover:text-brand-400 transition-colors">Security Architecture</Link></li>
            </ul>
          </div>

          {/* Column 3: Canonical Modules */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">Product Modules</h4>
            <ul className="space-y-3 text-[13px] text-white/80">
              <li><Link to="/modules/core-hr" className="hover:text-brand-400 transition-colors">Core HR & Registry</Link></li>
              <li><Link to="/modules/attendance" className="hover:text-brand-400 transition-colors">Time & Attendance Engine</Link></li>
              <li><Link to="/modules/payroll" className="hover:text-brand-400 transition-colors">Multi-Entity Payroll</Link></li>
              <li><Link to="/modules/recruitment" className="hover:text-brand-400 transition-colors">ATS & AI Recruiting</Link></li>
              <li><Link to="/modules/performance" className="hover:text-brand-400 transition-colors">Performance & OKRs</Link></li>
              <li><Link to="/modules/workforce-planning" className="hover:text-brand-400 transition-colors">Workforce Planning</Link></li>
              <li><Link to="/modules" className="hover:text-orange-300 transition-colors text-brand-400 font-medium">Explore All 25 Modules →</Link></li>
            </ul>
          </div>

          {/* Column 4: Industries & Legal */}
          <div className="space-y-3">
            <h4 className="font-display font-semibold text-white text-sm uppercase tracking-wider">Industries & Trust</h4>
            <ul className="space-y-3 text-[13px] text-white/80">
              <li><Link to="/industries/manufacturing" className="hover:text-brand-400 transition-colors">Manufacturing</Link></li>
              <li><Link to="/industries/healthcare" className="hover:text-brand-400 transition-colors">Healthcare Systems</Link></li>
              <li><Link to="/industries/banking-finance" className="hover:text-brand-400 transition-colors">Banking & Finance</Link></li>
              <li><Link to="/integrations" className="hover:text-brand-400 transition-colors">Enterprise Integrations</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-400 transition-colors">Scope Estimator</Link></li>
              <li><Link to="/careers" className="hover:text-brand-400 transition-colors">Careers at Eimpora</Link></li>
              <li><Link to="/resources" className="hover:text-brand-400 transition-colors">Knowledge Center</Link></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} Eimpora Software Technologies Inc. All rights reserved. Enterprise Workforce Operating Platform.</p>
          <div className="flex items-center gap-6 text-white/85">
            <Link to="/privacy" className="hover:text-brand-400 transition-colors">Privacy</Link>
            <Link to="/terms" className="hover:text-brand-400 transition-colors">Terms</Link>
            {/* <Link to="/security" className="hover:text-brand-400 transition-colors">Security</Link> */}
            <Link to="/cookies" className="hover:text-brand-400 transition-colors">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
