export const MODULE_DOMAINS = [
  { id: 'all', name: 'All Modules', count: 25 },
  { id: 'people-ops', name: 'People Operations', count: 5 },
  { id: 'workforce-ops', name: 'Workforce Operations', count: 5 },
  { id: 'payroll-financials', name: 'Payroll & Financials', count: 5 },
  { id: 'talent-lifecycle', name: 'Talent Management', count: 5 },
  { id: 'strategy-intelligence', name: 'Strategy & Intelligence', count: 5 },
];

export const MODULES_DATA = [
  // People Operations
  {
    slug: 'core-hr',
    name: 'Core HR & Employee Registry',
    domain: 'people-ops',
    domainName: 'People Operations',
    tagline: 'Single source of truth for global multi-entity workforce records.',
    iconName: 'Users',
    summary: 'Centralize employee profiles, employment contracts, identity verification, and multi-tenant organizational hierarchies with strict versioning and audit trails.',
    capabilities: [
      'Multi-entity & multi-currency employment profiles',
      'Historical timeline tracking & contract versioning',
      'Custom fields with fine-grained field-level privacy controls',
      'Automated worker classification & tax residency assignment',
      'Global organizational chart rendering with role hierarchies'
    ],
    roles: ['HR Administrator', 'People Operations Lead', 'Global Mobility Specialist'],
    metrics: [
      { label: 'Record Accuracy', value: '99.98%' },
      { label: 'Onboarding Velocity', value: '3x Faster' },
      { label: 'Data Sync Latency', value: '< 100ms' }
    ],
    connectedModules: ['documents', 'org-structure', 'payroll', 'attendance'],
    workflow: ['Record Creation', 'Document Verification', 'Approval Chain', 'Entity Allocation', 'Active Profile'],
    aiFeature: 'Automated document extraction and contract anomaly detection during record setup.'
  },
  {
    slug: 'documents',
    name: 'Enterprise Document Management',
    domain: 'people-ops',
    domainName: 'People Operations',
    tagline: 'Governed digital document vault with e-signatures and expiry tracking.',
    iconName: 'FileText',
    summary: 'Securely manage employee contracts, visas, certifications, compliance forms, and policy acknowledgements with automated renewal alerts.',
    capabilities: [
      'Built-in compliant e-signature workflows',
      'Automated document expiry & visa renewal notifications',
      'Encrypted document vault with role-based access control',
      'Bulk document generation from dynamic templates',
      'Audit log for every view, download, and signature step'
    ],
    roles: ['HR Compliance Manager', 'Legal Counsel', 'Employee'],
    metrics: [
      { label: 'Compliance Rate', value: '100%' },
      { label: 'Paperless Ratio', value: '99.4%' },
      { label: 'Signature Turnaround', value: '4.2 hrs' }
    ],
    connectedModules: ['core-hr', 'recruitment', 'compliance'],
    workflow: ['Template Selection', 'Variable Mapping', 'Signature Dispatch', 'Verification', 'Archival'],
    aiFeature: 'AI verification of official IDs, passports, and credential certificates.'
  },
  {
    slug: 'org-structure',
    name: 'Organization Architecture & Matrix',
    domain: 'people-ops',
    domainName: 'People Operations',
    tagline: 'Dynamic organizational modeling across matrixed business units.',
    iconName: 'Network',
    summary: 'Model complex matrix reporting lines, cost centers, legal entities, regional branches, and project squads with real-time reporting hierarchy rendering.',
    capabilities: [
      'Real-time interactive organizational tree visualization',
      'Dual-reporting & project-matrix line modeling',
      'Cost center & budget allocation mapping',
      'Headcount limit enforcement per business unit',
      'Scenario simulation for re-organizations'
    ],
    roles: ['Chief Human Resources Officer', 'Org Designer', 'Business Unit Head'],
    metrics: [
      { label: 'Re-org Modeling Time', value: 'Minutes' },
      { label: 'Matrix Depth Supported', value: 'Unlimited' },
      { label: 'Cost Allocation Accuracy', value: '100%' }
    ],
    connectedModules: ['core-hr', 'workforce-planning', 'executive-dashboards'],
    workflow: ['Draft Design', 'Cost Impact Analysis', 'Executive Sign-off', 'Scheduled Execution'],
    aiFeature: 'Organizational span-of-control health analysis and bottleneck warnings.'
  },
  {
    slug: 'asset-management',
    name: 'Employee Asset Management',
    domain: 'people-ops',
    domainName: 'People Operations',
    tagline: 'Lifecycle tracking for corporate hardware, credentials, and access.',
    iconName: 'Laptop',
    summary: 'Track hardware allocation, software licenses, access cards, and company property from onboarding distribution through offboarding recovery.',
    capabilities: [
      'Hardware & license inventory cataloging',
      'Automated asset allocation triggers during onboarding',
      'Digital sign-off for asset handovers',
      'Offboarding recovery checklists and hold alerts',
      'Depreciation and maintenance cycle tracking'
    ],
    roles: ['IT Operations Manager', 'Office Manager', 'HR Operations'],
    metrics: [
      { label: 'Asset Recovery Rate', value: '99.1%' },
      { label: 'Provisioning Speed', value: '< 24 hrs' },
      { label: 'Unallocated Hardware Risk', value: '-82%' }
    ],
    connectedModules: ['core-hr', 'onboarding', 'security'],
    workflow: ['Request / Trigger', 'Asset Assignment', 'Custody Signature', 'Maintenance', 'Recovery'],
    aiFeature: 'Predictive device renewal alerts based on failure telemetry and warranty dates.'
  },
  {
    slug: 'employee-directory',
    name: 'Global Workforce Directory & Search',
    domain: 'people-ops',
    domainName: 'People Operations',
    tagline: 'Searchable organization directory with privacy-aware profiles.',
    iconName: 'Search',
    summary: 'Empower employees to find colleagues, discover skills, view team structures, and connect across global offices while maintaining strict field-level data privacy.',
    capabilities: [
      'Instant semantic search across skills, locations, and teams',
      'Configurable public profile privacy controls',
      'Timezone & local currency indicator per colleague',
      'Direct integration with messaging & video apps',
      'Skill matrix tagging and endorsement'
    ],
    roles: ['All Employees', 'Team Leads', 'Internal Mobility Managers'],
    metrics: [
      { label: 'Search Latency', value: '12ms' },
      { label: 'Daily Directory Searches', value: '45,000+' },
      { label: 'Skill Discovery Boost', value: '+64%' }
    ],
    connectedModules: ['core-hr', 'learning', 'self-service'],
    workflow: ['Profile Enrichment', 'Privacy Masking', 'Directory Indexing', 'Instant Query'],
    aiFeature: 'Smart skill matching and cross-department collaboration suggestions.'
  },

  // Workforce Operations
  {
    slug: 'attendance',
    name: 'Time & Attendance Engine',
    domain: 'workforce-ops',
    domainName: 'Workforce Operations',
    tagline: 'Multi-channel time tracking with real-time biometric and geo-fence sync.',
    iconName: 'Clock',
    summary: 'Capture work hours across biometric hardware devices, web portals, mobile GPS geo-fences, and shift terminals with real-time anomaly flagging.',
    capabilities: [
      'Biometric hardware terminal integration (ZK, Suprema, HID)',
      'Mobile check-in with GPS geo-fencing & facial verification',
      'Flexible shift rule configurations & break policies',
      'Overtime calculation based on regional labor laws',
      'Real-time attendance anomaly alerts for managers'
    ],
    roles: ['Shift Supervisor', 'Factory Operations Manager', 'Payroll Administrator'],
    metrics: [
      { label: 'Clock-in Sync Time', value: 'Real-time' },
      { label: 'Punch Error Reduction', value: '-94%' },
      { label: 'Hardware Compatibility', value: '50+ Devices' }
    ],
    connectedModules: ['payroll', 'leave', 'scheduling'],
    workflow: ['Clock Event', 'Biometric / Geo Validation', 'Shift Rule Engine', 'Anomaly Review', 'Payroll Approval'],
    aiFeature: 'Pattern recognition for unexplained tardiness and fatigue risk prediction.'
  },
  {
    slug: 'scheduling',
    name: 'Roster & Shift Scheduling',
    domain: 'workforce-ops',
    domainName: 'Workforce Operations',
    tagline: 'Optimized roster scheduling for complex 24/7 rotational operations.',
    iconName: 'Calendar',
    summary: 'Design rotational shifts, manage shift swaps, enforce rest period regulations, and balance labor budgets for manufacturing plants, hospitals, and retail networks.',
    capabilities: [
      'Drag-and-drop shift scheduling builder',
      'Automatic compliance check for mandatory rest hours',
      'Peer-to-peer shift swap workflow with manager approval',
      'Demand-based shift allocation forecasting',
      'Instant SMS/Push notifications for schedule updates'
    ],
    roles: ['Operations Planner', 'Department Manager', 'Floor Manager'],
    metrics: [
      { label: 'Roster Creation Time', value: '-75%' },
      { label: 'Uncovered Shift Rate', value: '< 0.2%' },
      { label: 'Shift Swap Approval Speed', value: '15 mins' }
    ],
    connectedModules: ['attendance', 'leave', 'workforce-planning'],
    workflow: ['Demand Forecast', 'Template Roster', 'Compliance Check', 'Publish Schedule', 'Swap Management'],
    aiFeature: 'AI-assisted schedule auto-generation based on employee skill ratings and historic availability.'
  },
  {
    slug: 'leave',
    name: 'Leave & Absence Management',
    domain: 'workforce-ops',
    domainName: 'Workforce Operations',
    tagline: 'Configurable multi-country leave policies and accrual engines.',
    iconName: 'CalendarDays',
    summary: 'Automate leave balances, complex accrual rules, statutory compliance leaves, carry-over limits, and multi-tier approval workflows across international entities.',
    capabilities: [
      'Custom leave policy builder per country & employment tier',
      'Real-time leave balance calculations & prorated accruals',
      'Multi-level approval chains based on duration & department',
      'Team availability calendar & overlap warning',
      'Encashment & year-end carryover management'
    ],
    roles: ['HR Business Partner', 'Department Head', 'Employee'],
    metrics: [
      { label: 'Approval Cycle Time', value: '2.5 hrs' },
      { label: 'Balance Discrepancies', value: '0%' },
      { label: 'Policy Coverage', value: 'Global Multi-Legal' }
    ],
    connectedModules: ['attendance', 'payroll', 'core-hr'],
    workflow: ['Leave Request', 'Balance & Overlap Check', 'Manager Approval', 'Attendance Adjustment', 'Payroll Sync'],
    aiFeature: 'Absence trend forecasting during peak business cycles.'
  },
  {
    slug: 'overtime',
    name: 'Overtime & Premium Rate Engine',
    domain: 'workforce-ops',
    domainName: 'Workforce Operations',
    tagline: 'Automated overtime calculation aligned with regional labor legislation.',
    iconName: 'Timer',
    summary: 'Calculate double-time, holiday rates, night differential, and call-out premiums automatically to eliminate payroll errors and statutory compliance fines.',
    capabilities: [
      'Configurable overtime rules per labor jurisdiction',
      'Pre-approval and post-calculated overtime workflows',
      'Night shift differential & hazardous duty multiplier rules',
      'Budget cap notifications per project & cost center',
      'Detailed audit breakdown for every overtime hour paid'
    ],
    roles: ['Payroll Officer', 'Site Supervisor', 'Financial Controller'],
    metrics: [
      { label: 'Overtime Error Rate', value: '0.00%' },
      { label: 'Audit Readiness', value: 'Instant' },
      { label: 'Unbudgeted OT Prevention', value: '-38%' }
    ],
    connectedModules: ['attendance', 'payroll', 'scheduling'],
    workflow: ['Punch Data Import', 'Jurisdiction Multiplier', 'Manager Verification', 'Payroll Batch Export'],
    aiFeature: 'Alerts for sudden spikes in team overtime before payroll locks.'
  },
  {
    slug: 'field-workforce',
    name: 'Distributed & Field Workforce Management',
    domain: 'workforce-ops',
    domainName: 'Workforce Operations',
    tagline: 'Live tracking and workflow execution for remote and field teams.',
    iconName: 'MapPin',
    summary: 'Manage remote technicians, field sales teams, logistics personnel, and distributed branch staff with offline mobile capabilities and location-based verification.',
    capabilities: [
      'Offline-first mobile app with delayed cloud synchronization',
      'Geofenced site check-ins and task verification',
      'Travel allowance and mileage tracking integration',
      'Field team task dispatch and status reporting',
      'Emergency SOS broadcast and lone-worker safety check'
    ],
    roles: ['Field Operations Lead', 'Logistics Coordinator', 'Regional Manager'],
    metrics: [
      { label: 'Offline Sync Reliability', value: '100%' },
      { label: 'Field Mileage Verification', value: 'Automated' },
      { label: 'Field Response Time', value: '-42%' }
    ],
    connectedModules: ['attendance', 'mobile-app', 'analytics'],
    workflow: ['Site Dispatch', 'Geo Clock-in', 'Task Completion', 'Data Sync', 'Manager Review'],
    aiFeature: 'Route optimization and task completion duration estimation.'
  },

  // Payroll & Financials
  {
    slug: 'payroll',
    name: 'Multi-Entity Payroll Engine',
    domain: 'payroll-financials',
    domainName: 'Payroll & Financials',
    tagline: 'Enterprise payroll processing with embedded multi-currency and statutory compliance.',
    iconName: 'Banknote',
    summary: 'Process complex enterprise payroll across multiple legal entities, currencies, tax jurisdictions, and payment channels with zero tolerance for calculation error.',
    capabilities: [
      'Multi-currency processing with automated FX lock rates',
      'Configurable salary structure builder (basic, allowances, deductions, bonuses)',
      'Automated statutory tax, pension, and insurance withholdings',
      'Retroactive pay adjustments and arrears computation',
      'Direct integration with banking gateways for bulk direct deposit payouts'
    ],
    roles: ['Global Payroll Director', 'Payroll Administrator', 'Chief Financial Officer'],
    metrics: [
      { label: 'Processing Speed', value: '10,000 Records / Min' },
      { label: 'Calculation Accuracy', value: '100.00%' },
      { label: 'Bank Payout File Format', value: '120+ Formats' }
    ],
    connectedModules: ['attendance', 'leave', 'overtime', 'core-hr', 'finance-integration'],
    workflow: ['Data Freeze', 'Gross-to-Net Calculation', 'Anomaly Audit', 'Manager Sign-off', 'Bank File Dispatched'],
    aiFeature: 'Payroll anomaly detection flagging unusual variance in net pay before bank lock.'
  },
  {
    slug: 'expenses',
    name: 'Claims & Expense Management',
    domain: 'payroll-financials',
    domainName: 'Payroll & Financials',
    tagline: 'Automated expense filing, OCR receipt scanning, and policy validation.',
    iconName: 'Receipt',
    summary: 'Streamline business travel, per diems, medical reimbursements, and operational expenses with receipt scanning and corporate credit card reconciliation.',
    capabilities: [
      'Mobile OCR receipt scanning and auto-itemization',
      'Multi-currency expense conversion at receipt transaction date',
      'Policy violation warnings (daily meal limits, class of travel)',
      'Direct reimbursement through monthly payroll or bank wire',
      'Corporate card feed auto-reconciliation'
    ],
    roles: ['Finance Specialist', 'Travel Manager', 'Employee'],
    metrics: [
      { label: 'Receipt Processing', value: '< 5 Seconds' },
      { label: 'Filing Time', value: '-80%' },
      { label: 'Policy Audit Automation', value: '92%' }
    ],
    connectedModules: ['payroll', 'mobile-app', 'finance-integration'],
    workflow: ['Receipt Capture', 'OCR Parsing', 'Policy Verification', 'Multi-tier Approval', 'Reimbursement'],
    aiFeature: 'Duplicate claim detection and suspicious receipt fraud flagging.'
  },
  {
    slug: 'benefits',
    name: 'Benefits & Compensation Administration',
    domain: 'payroll-financials',
    domainName: 'Payroll & Financials',
    tagline: 'Comprehensive management of healthcare, pensions, and incentive plans.',
    iconName: 'ShieldPlus',
    summary: 'Manage employee medical plans, life insurance, retirement pensions, stock options, performance bonuses, and custom corporate perks in one hub.',
    capabilities: [
      'Open enrollment portal for employees and dependents',
      'Tiered benefit eligibility rules by position, location, or tenure',
      'Automated payroll deduction synchronization',
      'Insurance broker data carrier feeds',
      'Total rewards statement generation for employees'
    ],
    roles: ['Compensation & Benefits Lead', 'HR Generalist', 'Insurance Partner'],
    metrics: [
      { label: 'Enrollment Participation', value: '98.5%' },
      { label: 'Deduction Sync Accuracy', value: '100%' },
      { label: 'Carrier Feed Latency', value: '< 2 hrs' }
    ],
    connectedModules: ['payroll', 'core-hr', 'self-service'],
    workflow: ['Plan Setup', 'Eligibility Engine', 'Employee Selection', 'Deduction Sync', 'Carrier File Export'],
    aiFeature: 'Benefit utilization analytics recommending optimal insurance tier packages.'
  },
  {
    slug: 'loans-advances',
    name: 'Salary Loans & Advance Management',
    domain: 'payroll-financials',
    domainName: 'Payroll & Financials',
    tagline: 'Governed salary advances, emergency loans, and amortization schedules.',
    iconName: 'Coins',
    summary: 'Provide employees with structured loan facilities, earned wage access (EWA), and salary advances with automated monthly payroll deductions and interest rules.',
    capabilities: [
      'Configurable loan policy limits based on tenure and base salary',
      'Automated amortization schedule generation',
      'Direct monthly payroll deduction integration',
      'Early settlement and partial repayment processing',
      'Earned Wage Access (EWA) gateway for daily accrued wage payout'
    ],
    roles: ['Finance Lead', 'HR Administrator', 'Employee'],
    metrics: [
      { label: 'Processing Speed', value: 'Instant' },
      { label: 'Default Rate', value: '0.00%' },
      { label: 'Deduction Accuracy', value: '100%' }
    ],
    connectedModules: ['payroll', 'core-hr', 'self-service'],
    workflow: ['Application', 'Policy Eligibility Check', 'Finance Approval', 'Disbursement', 'Payroll Amortization'],
    aiFeature: 'Financial stress risk score calculating safe loan threshold per employee.'
  },
  {
    slug: 'statutory-tax',
    name: 'Multi-Jurisdiction Tax & Statutory Compliance',
    domain: 'payroll-financials',
    domainName: 'Payroll & Financials',
    tagline: 'Automated tax returns, social security filings, and statutory reports.',
    iconName: 'Building',
    summary: 'Ensure compliance with tax authorities, social security administrations, labor funds, and municipal regulatory bodies across all operating jurisdictions.',
    capabilities: [
      'Automated generation of monthly statutory tax schedules',
      'Year-end tax certificate generation (W-2, Form 16, P60 equivalent)',
      'Government gateway API integration for electronic filing',
      'Social security and pension contribution reporting',
      'Audit-ready statutory compliance archive'
    ],
    roles: ['Tax Manager', 'Corporate Controller', 'Auditor'],
    metrics: [
      { label: 'Tax Filing Error Rate', value: '0.00%' },
      { label: 'Jurisdiction Coverage', value: '45+ Countries' },
      { label: 'Audit Preparation Time', value: '-90%' }
    ],
    connectedModules: ['payroll', 'core-hr', 'security'],
    workflow: ['Payroll Lock', 'Tax Rule Execution', 'Report Generation', 'Government E-Filing', 'Archive'],
    aiFeature: 'Regulatory tax rule change tracking and policy updates alert system.'
  },

  // Talent Management
  {
    slug: 'recruitment',
    name: 'Applicant Tracking & AI Recruiting',
    domain: 'talent-lifecycle',
    domainName: 'Talent Management',
    tagline: 'Full-funnel talent acquisition with intelligent candidate matching.',
    iconName: 'UserPlus',
    summary: 'Streamline job postings, candidate pipelines, resume parsing, automated interview scheduling, collaborative scorecards, and offer letter dispatches.',
    capabilities: [
      'Multi-channel job board distribution (LinkedIn, Indeed, Custom Career Site)',
      'AI resume parsing & semantic skill matching score',
      'Automated self-service interview scheduling via calendar sync',
      'Custom evaluation scorecards & structured interview kits',
      'Digital offer letter creation with e-signatures'
    ],
    roles: ['Head of Talent Acquisition', 'Recruiter', 'Hiring Manager'],
    metrics: [
      { label: 'Time to Hire', value: '-45%' },
      { label: 'Candidate Satisfaction', value: '4.8 / 5.0' },
      { label: 'Resume Screening Speed', value: 'Instant' }
    ],
    connectedModules: ['documents', 'onboarding', 'core-hr'],
    workflow: ['Requisition Approval', 'Multi-post Job', 'AI Screening', 'Interview Rounds', 'Offer Acceptance'],
    aiFeature: 'Automated candidate summary highlights and skill gap identification against job requisition.'
  },
  {
    slug: 'onboarding',
    name: 'Enterprise Employee Onboarding',
    domain: 'talent-lifecycle',
    domainName: 'Talent Management',
    tagline: 'Structured digital onboarding journeys for seamless day-one readiness.',
    iconName: 'UserCheck',
    summary: 'Guide new hires from offer acceptance through pre-boarding document submission, hardware setup, welcome orientation, and first 90-day milestone reviews.',
    capabilities: [
      'Interactive pre-boarding portal for document upload before day one',
      'Automated cross-department task routing (IT, HR, Security, Manager)',
      'Buddy assignment and welcome schedule builder',
      'Custom 30-60-90 day milestone tracking check-ins',
      'Onboarding satisfaction sentiment feedback surveys'
    ],
    roles: ['Onboarding Coordinator', 'Hiring Manager', 'IT Support Lead', 'New Hire'],
    metrics: [
      { label: 'Day-One Readiness', value: '99.8%' },
      { label: 'New Hire Turnover (90d)', value: '-52%' },
      { label: 'Admin Time per Hire', value: '-70%' }
    ],
    connectedModules: ['recruitment', 'core-hr', 'asset-management', 'learning'],
    workflow: ['Offer Sign', 'Pre-boarding Portal Access', 'IT Hardware Dispatch', 'Day-1 Orientation', '90-Day Review'],
    aiFeature: 'Personalized onboarding task recommendations based on candidate background.'
  },
  {
    slug: 'performance',
    name: 'Performance & OKR Management',
    domain: 'talent-lifecycle',
    domainName: 'Talent Management',
    tagline: 'Continuous feedback, goal management, 360 appraisals, and calibration.',
    iconName: 'Target',
    summary: 'Align organizational goals with continuous 1-on-1 check-ins, OKR tracking, 360-degree peer feedback reviews, 9-box talent matrix, and compensation calibration.',
    capabilities: [
      'Cascading OKR & KPI goal setting framework',
      'Continuous feedback tags and 1-on-1 meeting agenda templates',
      'Customizable 360-degree review cycles (Self, Peer, Manager, Direct Report)',
      'Interactive 9-Box Grid talent calibration matrix',
      'Direct link between performance scores and merit pay adjustments'
    ],
    roles: ['Head of Talent', 'Manager', 'Employee'],
    metrics: [
      { label: 'Review Cycle Completion', value: '96%' },
      { label: 'Goal Alignment Visibility', value: '100%' },
      { label: 'Calibration Speed', value: '3x Faster' }
    ],
    connectedModules: ['core-hr', 'compensation', 'succession'],
    workflow: ['Goal Setup', 'Quarterly Check-ins', '360 Review Launch', 'Calibration Session', 'Rating Lock'],
    aiFeature: 'AI sentiment analysis on peer review comments to detect hidden leadership potential.'
  },
  {
    slug: 'learning',
    name: 'LMS & Skill Development Hub',
    domain: 'talent-lifecycle',
    domainName: 'Talent Management',
    tagline: 'Enterprise learning management, certification compliance, and skill matrices.',
    iconName: 'GraduationCap',
    summary: 'Deliver mandatory compliance training, career development pathways, video courses, skill matrices, and automated recertification tracking for licensed roles.',
    capabilities: [
      'SCORM/xAPI compliant course catalog hosting',
      'Automated compliance training assignment for regulated roles',
      'Skill gap matrix per employee and team',
      'Interactive quiz engine & digital certificate generation',
      'External learning platform API connectors (Coursera, Udemy Enterprise)'
    ],
    roles: ['Learning & Development Director', 'Compliance Officer', 'Employee'],
    metrics: [
      { label: 'Mandatory Compliance Rate', value: '99.7%' },
      { label: 'Course Completion Speed', value: '+40%' },
      { label: 'Skill Growth Index', value: '+35%' }
    ],
    connectedModules: ['core-hr', 'performance', 'recruitment'],
    workflow: ['Skill Assessment', 'Course Assignment', 'Interactive Learning', 'Quiz Verification', 'Certificate Issuance'],
    aiFeature: 'Curated learning pathways tailored to employee performance review development areas.'
  },
  {
    slug: 'succession',
    name: 'Succession Planning & Talent Pipelines',
    domain: 'talent-lifecycle',
    domainName: 'Talent Management',
    tagline: 'Proactive leadership pipeline mapping and key-person risk mitigation.',
    iconName: 'TrendingUp',
    summary: 'Identify high-potential talent, construct readiness pipelines for mission-critical executive roles, track flight risk alerts, and prepare leadership continuity plans.',
    capabilities: [
      'Mission-critical role bench strength scoring',
      'Readiness horizon categorization (Ready Now, Ready in 1-2 Years, Ready 3+ Years)',
      'Flight risk assessment matrix based on tenure, pay, and sentiment',
      'Individual Development Plan (IDP) integration for successors',
      'Executive board presentation view for talent pipelines'
    ],
    roles: ['Chief Executive Officer', 'CHRO', 'Executive Board'],
    metrics: [
      { label: 'Key-Role Bench Coverage', value: '92%' },
      { label: 'Internal Executive Hiring', value: '78%' },
      { label: 'Unplanned Attrition Risk', value: '-40%' }
    ],
    connectedModules: ['performance', 'core-hr', 'learning'],
    workflow: ['Critical Role Mapping', 'High-Po Candidate Tagging', 'Readiness Evaluation', 'IDP Assignment', 'Pipeline Audit'],
    aiFeature: 'AI flight-risk predictor monitoring engagement drops, compensation benchmarks, and tenure milestones.'
  },

  // Strategy & Intelligence
  {
    slug: 'workforce-planning',
    name: 'Strategic Workforce Planning',
    domain: 'strategy-intelligence',
    domainName: 'Strategy & Intelligence',
    tagline: 'Headcount forecasting, labor cost modeling, and capacity analysis.',
    iconName: 'BarChart3',
    summary: 'Model future headcount requirements, simulate organizational growth scenarios, analyze labor cost impact, and align workforce capacity with multi-year business goals.',
    capabilities: [
      'Multi-scenario headcount & budget modeling sandbox',
      'Capacity vs demand gap analysis by business unit',
      'Turnover & retirement rate predictive projection models',
      'Hiring plan vs budget variance tracking',
      'Cost per hire & fully loaded employee cost calculations'
    ],
    roles: ['VP Workforce Planning', 'FP&A Director', 'Chief Financial Officer'],
    metrics: [
      { label: 'Budget Variance', value: '< 1.2%' },
      { label: 'Scenario Modeling Speed', value: 'Real-time' },
      { label: 'Planning Horizon', value: '1 to 5 Years' }
    ],
    connectedModules: ['core-hr', 'payroll', 'recruitment', 'executive-dashboards'],
    workflow: ['Historical Baseline Import', 'Growth Target Setup', 'Scenario Simulation', 'Budget Sign-off', 'Requisition Trigger'],
    aiFeature: 'Automated labor demand prediction driven by revenue growth forecasts.'
  },
  {
    slug: 'people-analytics',
    name: 'People Analytics & Custom Reports',
    domain: 'strategy-intelligence',
    domainName: 'Strategy & Intelligence',
    tagline: 'Self-service business intelligence across all workforce data dimensions.',
    iconName: 'PieChart',
    summary: 'Query, visualize, and distribute complex workforce metrics with drag-and-drop report builders, automated scheduled email reports, and SQL/BI exports.',
    capabilities: [
      'Drag-and-drop report builder across 150+ workforce data objects',
      'Pre-built template library for turnover, diversity, payroll, and attendance',
      'Field-level data anonymization for privacy compliance',
      'Automated scheduled distribution to board members & department leads',
      'Direct sync with PowerBI, Tableau, and Snowflake data warehouses'
    ],
    roles: ['Head of People Analytics', 'Data Analyst', 'HR Business Partner'],
    metrics: [
      { label: 'Query Execution Speed', value: '< 200ms' },
      { label: 'Pre-built Templates', value: '85+ Reports' },
      { label: 'Data Warehouse Latency', value: 'Near Instant' }
    ],
    connectedModules: ['core-hr', 'payroll', 'attendance', 'executive-dashboards'],
    workflow: ['Data Source Selection', 'Filter & Group Setup', 'Visualization Pick', 'Schedule / Export'],
    aiFeature: 'Natural language query parser allowing users to ask "Show sales team attrition by manager in Q3".'
  },
  {
    slug: 'executive-dashboards',
    name: 'Executive Command Center',
    domain: 'strategy-intelligence',
    domainName: 'Strategy & Intelligence',
    tagline: 'Real-time workforce command center for C-suite executive decision making.',
    iconName: 'LayoutDashboard',
    summary: 'Consolidate headcount metrics, payroll exposure, attendance status, open requisitions, compliance warnings, and AI insights into one unified executive view.',
    capabilities: [
      'Real-time key metric cards (Total Workforce, Payroll Run, Attrition Rate)',
      'Executive alert queue for urgent approvals and compliance warnings',
      'Multi-entity comparison tab views',
      'Interactive workforce distribution heatmaps by country and department',
      'Board-ready PDF report export generator'
    ],
    roles: ['Chief Executive Officer', 'Chief Operating Officer', 'Chief Financial Officer', 'CHRO'],
    metrics: [
      { label: 'Dashboard Refresh Rate', value: 'Sub-second' },
      { label: 'Decision Handoff Time', value: 'Immediate' },
      { label: 'Mobile Executive App', value: 'Supported' }
    ],
    connectedModules: ['core-hr', 'payroll', 'workforce-planning', 'ai-insights'],
    workflow: ['Metric Aggregation', 'Anomaly Filtering', 'Real-time Render', 'Executive Action Trigger'],
    aiFeature: 'Executive summary generator summarizing weekly workforce developments into 3 bullet points.'
  },
  {
    slug: 'ai-insights',
    name: 'Embedded AI Intelligence Engine',
    domain: 'strategy-intelligence',
    domainName: 'Strategy & Intelligence',
    tagline: 'Proactive decision intelligence embedded directly inside operational workflows.',
    iconName: 'Sparkles',
    summary: 'Surface predictive attrition alerts, payroll anomaly checks, candidate qualification scoring, and policy violation risks inside the daily operational flow.',
    capabilities: [
      'Payroll run anomaly verification before bank dispatch',
      'Early turnover warning alerts for key talent',
      'Policy compliance checker for leave and expense submissions',
      'AI decision rationale audit logging for complete transparency',
      'Human-in-the-loop authorization policy enforcement'
    ],
    roles: ['CHRO', 'Risk & Governance Lead', 'Department Managers'],
    metrics: [
      { label: 'Anomaly Catch Rate', value: '99.4%' },
      { label: 'False Positive Ratio', value: '< 1.5%' },
      { label: 'Decision Audit Log', value: '100% Traceable' }
    ],
    connectedModules: ['payroll', 'attendance', 'recruitment', 'succession'],
    workflow: ['Operational Data Signal', 'Rule & Policy Check', 'AI Risk Assessment', 'Human Review', 'Authorized Action'],
    aiFeature: 'Continuous learning feedback loop refining anomaly detection accuracy based on human approval inputs.'
  },
  {
    slug: 'compliance',
    name: 'Governance & Regulatory Audit Engine',
    domain: 'strategy-intelligence',
    domainName: 'Strategy & Intelligence',
    tagline: 'Audit trails, policy enforcement, and regulatory compliance oversight.',
    iconName: 'ShieldCheck',
    summary: 'Maintain complete immutability for every record edit, approval decision, document sign-off, and payroll transaction to satisfy global regulatory scrutiny.',
    capabilities: [
      'Cryptographically verified immutable audit trail log',
      'Role-based access matrix inspector & privilege escalation alerts',
      'GDPR & data sovereignty data residency isolation controls',
      'Automated compliance report generator for external auditors',
      'Policy acknowledgment tracking across global workforce'
    ],
    roles: ['Chief Compliance Officer', 'Internal Auditor', 'Data Protection Officer'],
    metrics: [
      { label: 'Audit Trail Retention', value: '7+ Years' },
      { label: 'Log Search Time', value: '< 100ms' },
      { label: 'Regulatory Compliance', value: 'Zero Breach' }
    ],
    connectedModules: ['core-hr', 'documents', 'payroll', 'security'],
    workflow: ['System Event Capture', 'Audit Log Staging', 'Encryption & Hash Lock', 'Compliance Search'],
    aiFeature: 'Privilege anomaly detection alerting on unexpected access to sensitive payroll or executive files.'
  }
];
