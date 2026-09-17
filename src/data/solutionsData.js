export const SOLUTIONS_DATA = [
  {
    slug: 'unified-workforce-records',
    title: 'Unified Global Workforce Records',
    category: 'Data Consolidation',
    tagline: 'Replace fragmented spreadsheets and regional databases with one authoritative record.',
    challenge: 'Enterprise organizations operating across multiple countries often suffer from fragmented employee profiles, conflicting job titles, disconnected legal entities, and out-of-sync local databases.',
    outcome: 'A single, immutable source of truth for global headcount, organizational hierarchies, contract histories, and workforce data governance.',
    capabilitiesStack: [
      'Multi-Entity Architecture',
      'Versioned Employment Contracts',
      'Global Org Chart Renderer',
      'Field-Level Data Privacy'
    ],
    relevantModules: ['core-hr', 'documents', 'org-structure', 'compliance'],
    workflowStages: [
      'Data Consolidation from Legacy Systems',
      'Global Taxonomy Standardizing',
      'Role & Entity Access Mapping',
      'Real-time Directory & Org Sync'
    ],
    responsibleRoles: ['CHRO', 'Global HRIS Director', 'People Operations Lead'],
    valueMetrics: [
      { label: 'Data Discrepancy', value: '0%' },
      { label: 'Global Audit Time', value: '-85%' },
      { label: 'System Handoff Speed', value: 'Instant' }
    ]
  },
  {
    slug: 'time-payroll-operations',
    title: 'Time, Attendance & Payroll Alignment',
    category: 'Operations & Finance',
    tagline: 'Bridge the operational gap between floor time tracking and monthly payroll payout.',
    challenge: 'Manual copy-pasting of timesheet summaries into payroll systems introduces gross calculation errors, unapproved overtime payouts, missed break compliance penalties, and delayed bank dispatches.',
    outcome: 'Direct automated pipeline from biometric and GPS clock-ins into multi-entity payroll processing with embedded anomaly verification.',
    capabilitiesStack: [
      'Biometric Terminal Gateway',
      'Overtime Rule Multiplier Engine',
      'Gross-to-Net Payroll Processing',
      'Direct Banking Payout Format'
    ],
    relevantModules: ['attendance', 'scheduling', 'overtime', 'payroll'],
    workflowStages: [
      'Biometric Punch Capture',
      'Automated Shift & OT Rule Check',
      'Manager Anomaly Sign-off',
      'Direct Payroll Lock & Payout'
    ],
    responsibleRoles: ['Payroll Director', 'Shift Operations Lead', 'Financial Controller'],
    valueMetrics: [
      { label: 'Payroll Error Payouts', value: '$0.00' },
      { label: 'Processing Time', value: 'Hours vs Weeks' },
      { label: 'Overtime Savings', value: '18% Leakage Prevented' }
    ]
  },
  {
    slug: 'distributed-workforce',
    title: 'Distributed & Remote Workforce Control',
    category: 'Workforce Operations',
    tagline: 'Maintain operational governance across field engineers, retail staff, and remote workers.',
    challenge: 'Managing non-desk workers, distributed branch networks, and field technicians presents severe visibility gaps in attendance proof, task compliance, and mobile safety.',
    outcome: 'Real-time mobile execution app featuring offline punch capability, GPS geo-fencing, task verification, and automated field expense tracking.',
    capabilitiesStack: [
      'Offline Mobile Check-in',
      'GPS & Geo-fence Verification',
      'OCR Mobile Expense Capture',
      'Emergency SOS & Safety Alerts'
    ],
    relevantModules: ['field-workforce', 'attendance', 'expenses', 'mobile-app'],
    workflowStages: [
      'Geofenced Mobile Clock-in',
      'Offline Task Data Capture',
      'Auto Cloud Synchronization',
      'Real-time Map Dashboard Update'
    ],
    responsibleRoles: ['Field Operations VP', 'Retail Branch Director', 'Site Supervisor'],
    valueMetrics: [
      { label: 'Field Punch Accuracy', value: '99.9%' },
      { label: 'Expense Submission Delay', value: '-75%' },
      { label: 'Unverified Shifts', value: '0%' }
    ]
  },
  {
    slug: 'talent-acquisition-onboarding',
    title: 'Integrated Hiring & Day-One Readiness',
    tagline: 'Unify candidate screening, offer management, and 90-day onboarding execution.',
    category: 'Talent Acquisition',
    challenge: 'A disconnect between recruitment ATS software and core HR onboarding causes accepted candidates to wait days for contracts, hardware, and access credentials.',
    outcome: 'Seamless transition from accepted candidate offer directly into pre-boarding document submission, IT hardware provisioning, and Day-One welcome schedules.',
    capabilitiesStack: [
      'AI Resume Match Scoring',
      'Digital E-Signature Contracts',
      'IT Asset Provisioning Workflow',
      'Pre-boarding Digital Portal'
    ],
    relevantModules: ['recruitment', 'onboarding', 'documents', 'asset-management'],
    workflowStages: [
      'AI Resume Screening & Interview Scorecard',
      'E-Signature Offer Dispatch',
      'Automated IT Hardware Trigger',
      'Day-1 Orientation & 90d Check-in'
    ],
    responsibleRoles: ['Head of Talent Acquisition', 'IT Service Lead', 'Hiring Manager'],
    valueMetrics: [
      { label: 'Time-to-Productivity', value: '3 Days vs 3 Weeks' },
      { label: 'First-Year Retention', value: '+34%' },
      { label: 'Contract Sign Speed', value: '< 6 hrs' }
    ]
  },
  {
    slug: 'employee-self-service',
    title: 'Modern Employee & Manager Self-Service',
    category: 'Employee Experience',
    tagline: 'Reduce HR administrative tickets by empowering employees with intuitive self-service.',
    challenge: 'HR teams spend up to 40% of their working hours manually answering routine inquiries regarding payslips, leave balances, letter requests, and profile updates.',
    outcome: 'Self-service mobile and web portal providing instant access to digital payslips, leave requests, expense filing, and policy AI search.',
    capabilitiesStack: [
      'Digital Payslip Vault',
      'Instant Leave Request & Balance View',
      'Mobile OCR Expense Filing',
      'AI Policy Knowledge Assistant'
    ],
    relevantModules: ['self-service', 'payroll', 'leave', 'expenses'],
    workflowStages: [
      'Employee Mobile/Web Login',
      'Instant Request Submission',
      'Automated Policy Check',
      'One-tap Manager Approval'
    ],
    responsibleRoles: ['Employee', 'Team Manager', 'HR Operations Lead'],
    valueMetrics: [
      { label: 'HR Ticket Deflection', value: '68%' },
      { label: 'Manager Approval Speed', value: 'Minutes' },
      { label: 'Employee Portal Adoption', value: '96%' }
    ]
  },
  {
    slug: 'workforce-planning-analytics',
    title: 'Strategic Workforce Intelligence & Modeling',
    category: 'Executive Intelligence',
    tagline: 'Turn workforce data into predictive financial and headcount insights.',
    challenge: 'Executive leadership lacks forward-looking visibility into workforce capacity gaps, sudden turnover risks, unbudgeted labor cost inflation, and succession readiness.',
    outcome: 'C-suite command center combining multi-scenario headcount forecasting, real-time payroll exposure charts, and AI predictive attrition warnings.',
    capabilitiesStack: [
      'Multi-Scenario Capacity Sandbox',
      'AI Attrition Flight Risk Alerts',
      'Executive KPI Command Center',
      '9-Box Succession Matrix'
    ],
    relevantModules: ['workforce-planning', 'people-analytics', 'executive-dashboards', 'ai-insights'],
    workflowStages: [
      'Real-time Data Aggregation',
      'AI Anomaly & Trend Parsing',
      'Scenario Capacity Simulation',
      'Executive Strategy Handoff'
    ],
    responsibleRoles: ['Chief Executive Officer', 'Chief Financial Officer', 'CHRO'],
    valueMetrics: [
      { label: 'Forecast Accuracy', value: '98.8%' },
      { label: 'Executive Reporting Time', value: 'Real-time' },
      { label: 'Attrite Prevention Rate', value: '42%' }
    ]
  }
];
