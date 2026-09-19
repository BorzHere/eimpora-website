import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ShieldCheck, Lock, KeyRound, FileCheck, Server, CheckCircle2, ArrowRight,
  ShieldAlert, Award, FileText, ChevronDown, ChevronUp, Sparkles, Cpu,
  Database, Globe, Users, Layers, BadgeCheck, Eye, RefreshCw
} from 'lucide-react';
import SectionHeading from '../../components/common/SectionHeading';
import GlassCard from '../../components/common/GlassCard';
import CTASection from '../../components/common/CTASection';
import { SECURITY_LAYERS, RBAC_MATRIX } from '../../data/securityData';
import Stars from '../../components/home/Stars';
import SecuritySvgModule from '../../components/security/SecuritySvgModule';

const CERTIFICATIONS = [
  {
    title: 'SOC 2 Type II Certified',
    code: 'SOC 2 TYPE II',
    desc: 'Independently audited annually for Security, Availability, and Confidentiality controls with zero exceptions.',
    icon: Award,
    tag: 'Annual Audit'
  },
  {
    title: 'ISO / IEC 27001:2022',
    code: 'ISO 27001',
    desc: 'Globally recognized Information Security Management System (ISMS) framework certification.',
    icon: BadgeCheck,
    tag: 'ISMS Certified'
  },
  {
    title: 'GDPR & CCPA Compliant',
    code: 'DATA PRIVACY',
    desc: 'Comprehensive data subject rights management, consent controls, and automated right-to-erasure pipelines.',
    icon: ShieldCheck,
    tag: 'Global Privacy'
  },
  {
    title: 'HIPAA & HITECH Ready',
    code: 'HEALTHCARE COMPLIANCE',
    desc: 'Business Associate Agreement (BAA) support and PHI safeguards for healthcare entity workforce ops.',
    icon: Lock,
    tag: 'PHI Safeguards'
  },
  {
    title: 'SOX Section 404 Audit Log',
    code: 'FINANCIAL CONTROLS',
    desc: 'Immutable, cryptographically hashed audit trails for gross-to-net payroll and financial sign-offs.',
    icon: FileCheck,
    tag: 'Internal Controls'
  },
  {
    title: 'Regional Data Sovereignty',
    code: 'DATA RESIDENCY',
    desc: 'In-region data hosting across North America, EU (Frankfurt), UK (London), Middle East (UAE), and APAC.',
    icon: Globe,
    tag: 'Multi-Region'
  }
];

const SECURITY_FAQS = [
  {
    q: 'How does Eimpora ensure customer data isolation in multi-tenant environments?',
    a: 'Eimpora employs logical database schema isolation combined with customer-specific encryption keys. Every query is filtered through automated row and column-level security policies at the database engine layer, preventing cross-tenant data access.'
  },
  {
    q: 'Can enterprise clients use their own KMS encryption keys (BYOK)?',
    a: 'Yes. Enterprise Dedicated and Cloud-Managed tiers support Customer-Managed Encryption Keys (CMEK) integrated directly with AWS KMS or Azure Key Vault, allowing clients to revoke key access independently at any time.'
  },
  {
    q: 'What single sign-on (SSO) and identity providers are supported?',
    a: 'Eimpora natively supports SAML 2.0 and OpenID Connect (OIDC) protocols. We provide turnkey integration templates for Microsoft Entra ID (Azure AD), Okta, Ping Identity, Google Workspace, and JumpCloud.'
  },
  {
    q: 'How frequently are penetration tests and security assessments conducted?',
    a: 'We undergo bi-annual third-party penetration testing by CREST-accredited cybersecurity firms. Automated SAST, DAST, and container vulnerability scans run continuously on every deployment pipeline.'
  },
  {
    q: 'What is Eimpora’s disaster recovery (DR) and backup SLA?',
    a: 'All production database clusters feature automated real-time replication with 1-minute RPO (Recovery Point Objective) and under 15-minute RTO (Recovery Time Objective), backed by 99.99% operational availability SLA guarantees.'
  }
];

export default function Security() {
  const [selectedRoleIndex, setSelectedRoleIndex] = useState(3); // Default Payroll Director
  const [openFaq, setOpenFaq] = useState(0);

  const selectedRbacRow = RBAC_MATRIX[selectedRoleIndex] || RBAC_MATRIX[0];

  const getPermissionBadge = (val) => {
    if (!val || val === 'None') {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-orange-500/15 text-orange-500 text-[11px] font-medium border border-orange-700/50">
          <Lock className="w-3 h-3 text-orange-500/80" /> Blocked
        </span>
      );
    }
    if (val.includes('Full') || val.includes('Lock') || val.includes('Configure')) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-[11px] font-semibold border border-emerald-500/30">
          <BadgeCheck className="w-3 h-3 text-emerald-400" /> {val}
        </span>
      );
    }
    if (val.includes('View') || val.includes('Own')) {
      return (
        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-[11px] font-medium border border-cyan-500/30">
          <Eye className="w-3 h-3 text-cyan-400" /> {val}
        </span>
      );
    }
    return (
      <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-300 text-[11px] font-medium border border-cyan-500/30">
        <CheckCircle2 className="w-3 h-3 text-cyan-400" /> {val}
      </span>
    );
  };

  return (
    <div className="space-y-0">
      {/* HERO SECTION (DARK FULL BLEED) */}
      <section className="relative pt-36 lg:pt-44 pb-24 bg-navy-950 text-white overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 bg-radial-glow opacity-80" aria-hidden="true" />
        <Stars />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-cyan-400 backdrop-blur-md">
            <ShieldCheck className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
            Zero-Trust Enterprise Trust & Governance
          </div>

          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight max-w-4xl mx-auto">
            Security & Governance <br />
            <span className="text-gradient-cyan">Built for Mission-Critical Operations.</span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed font-normal">
            Field-level AES-256 column encryption, fine-grained Role-Based Access Control (RBAC), SAML 2.0 / OIDC SSO federation, and cryptographically hashed immutable audit logging.
          </p>

          {/* Trust Stat Pills - Cyan & White Only */}
          <div className="pt-6 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="p-4 rounded-xl border border-cyan-500/20 bg-white/5 backdrop-blur-sm text-center">
              <div className="text-2xl font-bold font-display text-cyan-400">SOC 2 Type II</div>
              <div className="text-xs text-slate-300 mt-1 font-medium">Audited & Certified</div>
            </div>
            <div className="p-4 rounded-xl border border-cyan-500/20 bg-white/5 backdrop-blur-sm text-center">
              <div className="text-2xl font-bold font-display text-cyan-400">AES-256 GCM</div>
              <div className="text-xs text-slate-300 mt-1 font-medium">Column-Level Encryption</div>
            </div>
            <div className="p-4 rounded-xl border border-cyan-500/20 bg-white/5 backdrop-blur-sm text-center">
              <div className="text-2xl font-bold font-display text-cyan-400">ISO 27001</div>
              <div className="text-xs text-slate-300 mt-1 font-medium">ISMS Framework Compliance</div>
            </div>
            <div className="p-4 rounded-xl border border-cyan-500/20 bg-white/5 backdrop-blur-sm text-center">
              <div className="text-2xl font-bold font-display text-cyan-400">99.99%</div>
              <div className="text-xs text-slate-300 mt-1 font-medium">Uptime SLA Guarantee</div>
            </div>
          </div>
        </div>
      </section>

      {/* SVG MODULE SECTION: DEDICATED ZERO-TRUST ARCHITECTURE TOPOLOGY */}
      <section className="relative py-24 bg-white  border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="">
            <SecuritySvgModule />
          </div>
        </div>
      </section>

      {/* SECTION 2: 6 PILLARS OF ENTERPRISE DEFENSE */}
      <section className="relative py-24 bg-navy-900/60 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Layered Architecture"
            title="6 Pillars of Enterprise Data Defense"
            description="Eimpora enforces multi-layer security controls from identity federation down to isolated database schema hosting."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SECURITY_LAYERS.map((sec, idx) => (
              <GlassCard key={idx} className="p-7 flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold text-cyan-400 uppercase tracking-widest px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20">
                      {sec.layer}
                    </span>
                    <Lock className="w-4 h-4 text-orange-400" />
                  </div>
                  <h3 className="font-display font-bold text-xl text-white mb-2">{sec.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">{sec.description}</p>
                </div>

                <div className="space-y-2.5 pt-4 border-t border-white/10">
                  {sec.capabilities.map((cap, cIdx) => (
                    <div key={cIdx} className="flex items-start gap-2 text-xs text-slate-400">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                      <span className="leading-snug">{cap}</span>
                    </div>
                  ))}
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 3: COMPLIANCE & CERTIFICATIONS GRID */}
      <section className="relative py-24 bg-navy-950 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            eyebrow="Compliance & Governance"
            title="Certified Enterprise Compliance Standards"
            description="Rigorous independent audits and global statutory frameworks governing every Eimpora operational tier."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert, idx) => {
              const IconComp = cert.icon;
              return (
                <div
                  key={idx}
                  className="p-6 rounded-2xl border border-cyan-500/20 bg-white/[0.03] hover:bg-white/[0.06] transition-all duration-300 space-y-4 relative group"
                >
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-bold uppercase tracking-wider text-cyan-400 px-2.5 py-0.5 rounded-md bg-cyan-500/10 border border-cyan-500/20">
                      {cert.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-display font-bold text-lg text-white group-hover:text-cyan-300 transition-colors">
                      {cert.title}
                    </h3>
                    <span className="text-[11px] font-mono font-semibold text-orange-400 block mt-0.5">
                      Standard: {cert.code}
                    </span>
                  </div>

                  <p className="text-xs text-slate-400 leading-relaxed font-light">
                    {cert.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: INTERACTIVE RBAC MATRIX & ROLE SCOPER */}
      <section className="relative py-24 bg-navy-900/60 text-white border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <SectionHeading
            eyebrow="Role-Based Security"
            title="Segregation of Duties (SoD) & Permission Scoping"
            description="Inspect how Eimpora restricts data access by role, preventing unapproved record views, financial edits, or administrative overrides."
          />

          {/* Interactive Role Selector Pills */}
          <div className="flex flex-wrap items-center justify-start gap-3">
            {RBAC_MATRIX.map((row, idx) => (
              <button
                key={idx}
                onClick={() => setSelectedRoleIndex(idx)}
                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 border ${selectedRoleIndex === idx
                  ? 'bg-cyan-500 text-navy-950 border-cyan-300 shadow-cyan-glow scale-105'
                  : 'bg-white/5 text-slate-300 border-white/10 hover:bg-white/10 hover:text-white'
                  }`}
              >
                {row.role}
              </button>
            ))}
          </div>

          {/* Role Active Highlight Card */}
          <div className="p-6 rounded-2xl border border-cyan-500/30 bg-cyan-500/10 text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-xl bg-cyan-500/20 text-cyan-300">
                <Users className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs text-cyan-400 uppercase font-bold tracking-wider">Active Role Preview</span>
                <h4 className="font-display font-bold text-xl text-white">{selectedRbacRow.role}</h4>
              </div>
            </div>
            <div className="text-xs text-slate-300 max-w-xl leading-relaxed">
              Enforces strict least-privilege scoping across Core HR, Payroll Dispatch, Shift Attendance, ATS Recruiting, and Executive Reports.
            </div>
          </div>

          {/* Full Interactive Table */}
          <div className="overflow-x-auto rounded-2xl border border-white/10 bg-navy-950 shadow-2xl backdrop-blur-xl">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="border-b border-white/10 bg-navy-900/90 text-slate-300">
                  <th className="p-4 font-bold uppercase tracking-wider text-white">User Role</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-cyan-400">Core HR</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-cyan-400">Payroll Engine</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-cyan-400">Attendance</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-cyan-400">ATS Recruitment</th>
                  <th className="p-4 font-bold uppercase tracking-wider text-cyan-400">Executive Dashboards</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-white/5 text-slate-300">
                {RBAC_MATRIX.map((row, idx) => {
                  const isSelected = idx === selectedRoleIndex;
                  return (
                    <tr
                      key={idx}
                      onClick={() => setSelectedRoleIndex(idx)}
                      className={`cursor-pointer transition-colors ${isSelected ? 'bg-cyan-500/10 border-l-4 border-l-cyan-400' : 'hover:bg-white/5'
                        }`}
                    >
                      <td className="p-4 font-bold text-white flex items-center gap-2">
                        {isSelected && <BadgeCheck className="w-4 h-4 text-cyan-400 shrink-0" />}
                        {row.role}
                      </td>
                      <td className="p-4">{getPermissionBadge(row.coreHR)}</td>
                      <td className="p-4">{getPermissionBadge(row.payroll)}</td>
                      <td className="p-4">{getPermissionBadge(row.attendance)}</td>
                      <td className="p-4">{getPermissionBadge(row.recruitment)}</td>
                      <td className="p-4">{getPermissionBadge(row.executiveDashboards)}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* SECTION 5: SECURITY FAQs ACCORDION */}
      <section className="relative py-24 bg-navy-950 text-white border-b border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <SectionHeading
            eyebrow="Security FAQs"
            title="Frequently Asked Security & Compliance Questions"
            description="Clear technical specifications for CISOs, IT Security Directors, and Compliance Officers."
          />

          <div className="space-y-4">
            {SECURITY_FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className={`rounded-xl border transition-all duration-300 overflow-hidden ${isOpen
                    ? 'border-cyan-500/40 bg-navy-900/90 shadow-lg shadow-cyan-500/5'
                    : 'border-white/10 bg-navy-900/50 hover:border-white/20'
                    }`}
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-4 text-left flex items-center justify-between gap-4 font-display font-semibold text-base text-white hover:text-cyan-300 transition-colors"
                  >
                    <span className={isOpen ? 'text-cyan-300' : 'text-white'}>{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 shrink-0 transition-transform duration-300 ease-in-out ${isOpen ? 'rotate-180 text-orange-400' : 'text-orange-400'
                        }`}
                    />
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows,opacity] duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 text-sm text-slate-300 leading-relaxed border-t border-white/5 pt-4 font-light">
                        {faq.a}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 6: CTA SECTION */}
      <CTASection
        title="Ready to Review Eimpora’s Security Packet?"
        subtitle="Schedule a technical security review with our Chief Information Security Officer (CISO) team or request our latest SOC 2 Type II audit report."
        primaryBtnText="Schedule Security Review"
        primaryBtnLink="/book-demo"
        secondaryBtnText="Explore System Architecture"
        secondaryBtnLink="/platform"
      />
    </div>
  );
}
