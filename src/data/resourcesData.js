export const RESOURCE_CATEGORIES = [
  { id: 'all', name: 'All Resources' },
  { id: 'whitepapers', name: 'Architecture & Whitepapers' },
  { id: 'guides', name: 'Implementation Guides' },
  { id: 'workforce-ops', name: 'Workforce Operations' },
  { id: 'ai-governance', name: 'AI & Governance' },
  { id: 'evaluation', name: 'Product Evaluation' },
];

export const RESOURCES_DATA = [
  {
    slug: 'enterprise-payroll-architecture-whitepaper',
    title: 'The Multi-Entity Enterprise Payroll Architecture Benchmark',
    category: 'whitepapers',
    categoryName: 'Architecture & Whitepapers',
    readTime: '12 min read',
    audience: 'CIOs, Global Payroll Directors, CFOs',
    publishDate: 'September 2026',
    summary: 'A deep technical exploration into zero-error payroll calculation pipelines, multi-currency locks, and immutable financial ledger sync across complex international subsidiaries.',
    sections: [
      { title: 'The Fragmented Ledger Dilemma', content: 'Why enterprise global organizations lose up to 3.2% of annual payroll spend in currency conversion drag, manual adjustments, and statutory compliance fines.' },
      { title: 'The Sub-Second Calculation Pipeline', content: 'How Eimpora processes 10,000 employee gross-to-net calculations per minute while running real-time anomaly verification.' },
      { title: 'Immutable Audit Trail Engineering', content: 'How cryptographically hashed audit trails ensure SOX compliance and immediate auditor verification.' }
    ]
  },
  {
    slug: 'governed-ai-in-workforce-operations',
    title: 'Governed AI in Enterprise HR: Moving Beyond Chatbots',
    category: 'ai-governance',
    categoryName: 'AI & Governance',
    readTime: '10 min read',
    audience: 'CHROs, Chief Risk Officers, Tech Leads',
    publishDate: 'August 2026',
    summary: 'How embedding artificial intelligence into operational approval queues, payroll verification, and retention analytics creates real business value while guaranteeing human authorization.',
    sections: [
      { title: 'The Problem with Generative Chatbots', content: 'Why standalone conversational chatbots fail in critical enterprise workflows where policy precision and legal compliance are mandatory.' },
      { title: 'The 4-Layer Governed AI Architecture', content: 'Detailed analysis of Signal Ingestion → Rule Engine Verification → AI Recommendation → Human Approval.' },
      { title: 'Bias Prevention & Audit Transparency', content: 'Ensuring AI candidate scoring and performance appraisals are fully auditable and bias-free.' }
    ]
  },
  {
    slug: 'enterprise-hrms-migration-guide',
    title: 'Enterprise HRMS Data Migration & Cutover Playbook',
    category: 'guides',
    categoryName: 'Implementation Guides',
    readTime: '15 min read',
    audience: 'HRIS Project Managers, Data Architects, IT Directors',
    publishDate: 'July 2026',
    summary: 'A step-by-step technical guide for migrating 20,000+ employee records, historical payroll ledgers, and attendance logs from legacy ERPs to Eimpora with zero downtime.',
    sections: [
      { title: 'Phase 1: Legacy Data Cleansing & Normalization', content: 'Mapping historical employee profile schemas and resolving duplicate identifier records.' },
      { title: 'Phase 2: Parallel Payroll Verification Runs', content: 'Running dual payroll cycles between legacy systems and Eimpora to verify zero-penny discrepancy.' },
      { title: 'Phase 3: Zero-Downtime Weekend Cutover', content: 'Executing automated database staging and immediate identity provisioning for day-one readiness.' }
    ]
  },
  {
    slug: 'optimizing-factory-shift-rosters',
    title: 'Optimizing Rotational Shift Rosters in 24/7 Manufacturing',
    category: 'workforce-ops',
    categoryName: 'Workforce Operations',
    readTime: '8 min read',
    audience: 'Plant Managers, Shift Supervisors, Operations VPs',
    publishDate: 'August 2026',
    summary: 'Strategies for balancing 3-shift and 4-shift manufacturing operations, eliminating fatigue risk, and managing union overtime compliance.',
    sections: [
      { title: 'The Mathematics of Rotational Shift Balance', content: 'Structuring 12-hour vs 8-hour shift cycles while keeping uncovered shift rates below 0.2%.' },
      { title: 'Biometric Gate Synchronization', content: 'Connecting Suprema and ZKTeco factory gate terminals with real-time shift clocking.' },
      { title: 'Union Collective Bargaining Alignment', content: 'Automating complex OT premium rates to prevent union labor disputes.' }
    ]
  },
  {
    slug: 'evaluating-enterprise-workforce-platform',
    title: 'The Enterprise Workforce Operating Platform RFI/RFP Framework',
    category: 'evaluation',
    categoryName: 'Product Evaluation',
    readTime: '14 min read',
    audience: 'Procurement Directors, HR Tech Evaluation Committees',
    publishDate: 'June 2026',
    summary: 'A comprehensive evaluation template containing 150 critical architectural requirements across security, multi-entity payroll, integration gateways, and scalability.',
    sections: [
      { title: 'Core Architectural Criteria', content: 'Assessing multi-tenant database security, API webhooks, and custom reporting capabilities.' },
      { title: 'Total Cost of Ownership (TCO) Calculator', content: 'Comparing hidden costs of point-solution suites versus unified enterprise operating systems.' },
      { title: 'Vendor Evaluation Scoring Matrix', content: 'Weighted scoring rubric for vendor compliance, deployment SLAs, and support coverage.' }
    ]
  }
];
