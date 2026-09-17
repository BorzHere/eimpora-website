import React from 'react';
import { Link, useParams } from 'react-router-dom';
import {
  ArrowLeft, ArrowRight, CheckCircle2, Layers, Network, ShieldCheck, Users
} from 'lucide-react';
import CTASection from '../../components/common/CTASection';
import SectionHeading from '../../components/common/SectionHeading';
import Stars from '../../components/home/Stars';

const PLATFORM_DETAILS = {
  layers: {
    eyebrow: 'Platform Architecture',
    title: 'Architecture Layers',
    description: 'A connected five-layer operating model that moves workforce data from employee experience to governed enterprise decisions.',
    icon: Layers,
    metrics: [
      ['5', 'Integrated layers'],
      ['100%', 'Unified data model'],
      ['< 100ms', 'Global data latency']
    ],
    capabilities: [
      'Experience surfaces for employees, managers, HR, payroll, and executives',
      'Shared workforce records synchronized across every operational domain',
      'Multi-currency payroll and financial controls at the platform core',
      'Governed AI and decision intelligence with human approval workflows',
      'Immutable audit, encryption, RBAC, and open API governance underneath'
    ],
    related: [
      { label: 'Explore platform roles', to: '/platform/roles' },
      { label: 'Review governance controls', to: '/security' },
      { label: 'Connect existing systems', to: '/integrations' }
    ]
  },
  roles: {
    eyebrow: 'Platform Experience',
    title: 'Role-Based Surfaces',
    description: 'Give every stakeholder the right operational view, from mobile employee self-service to executive workforce command.',
    icon: Users,
    metrics: [
      ['5', 'Primary role surfaces'],
      ['25', 'Connected modules'],
      ['1', 'Shared source of truth']
    ],
    capabilities: [
      'Employee self-service for time, leave, documents, expenses, and payslips',
      'Manager command views for approvals, rosters, overtime, and team signals',
      'HR operations workspace for worker records, onboarding, and compliance',
      'Payroll director controls for gross-to-net processing and bank dispatch',
      'Executive dashboards for headcount, labor cost, risk, and succession planning'
    ],
    related: [
      { label: 'Browse canonical modules', to: '/modules' },
      { label: 'See workforce solutions', to: '/solutions' },
      { label: 'Book an experience walkthrough', to: '/book-demo' }
    ]
  },
  lifecycle: {
    eyebrow: 'Workforce Lifecycle',
    title: 'Lifecycle Workflow Flow',
    description: 'Coordinate the complete workforce journey in one governed flow: plan, recruit, hire, onboard, operate, pay, and develop.',
    icon: Network,
    metrics: [
      ['7', 'Connected lifecycle stages'],
      ['0', 'Fragmented handoffs'],
      ['24/7', 'Workflow visibility']
    ],
    capabilities: [
      'Workforce planning connected directly to recruiting demand and approved budgets',
      'Recruiting and onboarding records flow into the employee master profile',
      'Attendance, leave, scheduling, and field operations feed payroll automatically',
      'Payroll outcomes inform labor cost, performance, and executive planning views',
      'Every transition retains ownership, approvals, timestamps, and audit evidence'
    ],
    related: [
      { label: 'Explore workforce operations', to: '/solutions/time-payroll-operations' },
      { label: 'Open the module catalog', to: '/modules' },
      { label: 'See AI decision intelligence', to: '/ai' }
    ]
  },
  'multi-entity': {
    eyebrow: 'Global Platform Core',
    title: 'Multi-Entity Engine',
    description: 'Model parent companies, subsidiaries, branches, cost centers, and joint ventures without losing consolidated control.',
    icon: ShieldCheck,
    metrics: [
      ['45+', 'Supported jurisdictions'],
      ['AES-256', 'Field-level encryption'],
      ['99.99%', 'Uptime SLA']
    ],
    capabilities: [
      'Legal entity and regional branch hierarchy with unlimited organizational depth',
      'Localized tax, payroll, currency, and statutory routing by jurisdiction',
      'Consolidated reporting with entity-level access and cost-center controls',
      'Segregation of duties for sensitive payroll and financial approvals',
      'Regional data residency and immutable audit trails for every transaction'
    ],
    related: [
      { label: 'Review security and governance', to: '/security' },
      { label: 'Explore multi-entity payroll', to: '/modules/payroll' },
      { label: 'Estimate enterprise scope', to: '/pricing' }
    ]
  }
};

export default function PlatformDetail() {
  const { slug } = useParams();
  const detail = PLATFORM_DETAILS[slug] || PLATFORM_DETAILS.layers;
  const Icon = detail.icon;

  return (
    <div className="space-y-20 pt-32 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/platform" className="inline-flex items-center gap-2 text-xs font-semibold text-slate-400 hover:text-brand-400 transition-colors">
          <ArrowLeft className="w-4 h-4" /> Back to Platform Architecture
        </Link>
      </div>

      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 overflow-hidden rounded-2xl">
        <Stars />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-8 space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-brand-500/30 bg-brand-500/10 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-widest text-brand-400">
              <Icon className="w-4 h-4" /> {detail.eyebrow}
            </div>
            <h1 className="font-display text-4xl sm:text-5xl font-bold tracking-tight text-white leading-tight">{detail.title}</h1>
            <p className="text-lg text-slate-300 leading-relaxed max-w-3xl">{detail.description}</p>
            <Link to="/book-demo" className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-xs font-bold text-navy-950 bg-gradient-to-r from-brand-400 to-brand-300 shadow-cyan-glow uppercase tracking-wider">
              Discuss your architecture <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="lg:col-span-4 rounded-2xl border border-white/10 bg-navy-900/80 p-6 shadow-xl">
            <div className="flex items-center gap-3 border-b border-white/10 pb-4">
              <Icon className="w-5 h-5 text-brand-400" />
              <span className="font-display font-bold text-white">Platform Detail</span>
            </div>
            <p className="mt-4 text-sm text-slate-300">Designed for enterprise teams that need operational depth without fragmented ownership or duplicate workforce data.</p>
          </div>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {detail.metrics.map(([value, label]) => (
            <div key={label} className="rounded-2xl border border-white/10 bg-navy-900/70 p-6">
              <div className="font-display text-3xl font-bold text-brand-400">{value}</div>
              <div className="mt-1 text-xs text-slate-400">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What is included" title={`More about ${detail.title}`} description="Explore the controls and capabilities that make this part of Eimpora operationally ready for enterprise use." dark />
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-4">
          {detail.capabilities.map((capability) => (
            <div key={capability} className="flex items-start gap-3 rounded-xl border border-white/10 bg-white/5 p-5 text-sm text-slate-200">
              <CheckCircle2 className="w-5 h-5 text-brand-400 shrink-0" />
              <span>{capability}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-y border-white/10 py-10">
          <SectionHeading eyebrow="More platform detail" title="Continue exploring Eimpora" description="Move from this architecture area into the connected product, governance, and deployment surfaces." dark />
          <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
            {detail.related.map((item) => (
              <Link key={item.to} to={item.to} className="group flex items-center justify-between rounded-xl border border-white/10 bg-navy-900/70 px-5 py-4 text-sm font-semibold text-slate-200 hover:border-brand-500/40 hover:text-brand-300 transition-all">
                {item.label}
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <CTASection title={`Build a stronger ${detail.title.toLowerCase()} foundation.`} description="See how Eimpora connects workforce operations, financial control, and governed intelligence in one enterprise platform." />
    </div>
  );
}
