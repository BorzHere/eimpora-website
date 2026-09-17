export const INDUSTRIES_DATA = [
  {
    slug: 'manufacturing',
    title: 'Manufacturing & Industrial Production',
    iconName: 'Factory',
    tagline: 'High-volume shift scheduling, union rule enforcement, and plant floor biometrics.',
    workforceProfile: '24/7 rotational shift workers, unionized plant operators, site supervisors, logistics coordinators, and safety engineers.',
    challenges: [
      'Complex rotational 3-shift & 4-shift plant operations',
      'Union overtime multiplier rules & mandatory break legislation',
      'High punch volume across physical biometric factory gates',
      'Hazardous duty allowance and safety certification tracking'
    ],
    modulesPackage: ['attendance', 'scheduling', 'overtime', 'payroll', 'asset-management'],
    workflow: 'Factory Gate Biometric Clock-in → Shift Differential Engine → Union Compliance Audit → Batch Payroll Payout',
    governance: 'Strict adherence to regional industrial labor laws, union collective bargaining agreements (CBA), and OSHA safety compliance.',
    analyticsFocus: 'Plant floor labor efficiency ratio, overtime cost variance, and shift tardiness rates.'
  },
  {
    slug: 'healthcare',
    title: 'Healthcare & Medical Systems',
    iconName: 'Activity',
    tagline: 'On-call rotational rosters, medical license compliance, and shift fatigue monitoring.',
    workforceProfile: 'Physicians, registered nurses, medical technicians, administrative staff, and emergency dispatch personnel.',
    challenges: [
      'Strict clinical rest-period mandates between emergency shifts',
      'Licensing & medical certification expiry tracking',
      'Complex shift handovers and emergency on-call call-out premiums',
      'Multi-facility staffing shifts across hospital networks'
    ],
    modulesPackage: ['scheduling', 'attendance', 'learning', 'documents', 'overtime'],
    workflow: 'Shift Roster Generation → License Expiry Verification → On-call Allowance Calc → Healthcare Payroll Sync',
    governance: 'HIPAA & GDPR health data isolation, mandatory medical board license verification, and fatigue risk management.',
    analyticsFocus: 'Nurse-to-patient staffing ratio compliance, burnout risk score, and certification audit readiness.'
  },
  {
    slug: 'banking-finance',
    title: 'Banking & Financial Services',
    iconName: 'Landmark',
    tagline: 'Multi-entity corporate governance, audit trail immutability, and executive compensation.',
    workforceProfile: 'Investment bankers, risk managers, branch tellers, wealth advisors, compliance officers, and IT security personnel.',
    challenges: [
      'Multi-entity cross-border legal structure governance',
      'Rigorous segregation of duties (SoD) between HR and Payroll',
      'Complex deferred bonus vesting schedules and stock options',
      'Regulatory scrutiny requiring instant audit trail logs'
    ],
    modulesPackage: ['core-hr', 'payroll', 'compliance', 'security', 'executive-dashboards'],
    workflow: 'Role-Based Approval → Immutable Log Staging → Deferred Bonus Calculation → Regulated Financial Audit',
    governance: 'SOX, Basel III compliance, dual-key approval chains, and zero-trust record encryption.',
    analyticsFocus: 'Total cost of workforce, compensation-to-revenue ratio, and key-person succession risk.'
  },
  {
    slug: 'retail',
    title: 'Retail & Multi-Location Chains',
    iconName: 'ShoppingBag',
    tagline: 'High-turnover seasonal hiring, store roster optimization, and mobile POS check-ins.',
    workforceProfile: 'Store managers, cashiers, visual merchandisers, inventory specialists, and seasonal holiday staff.',
    challenges: [
      'High seasonal hiring volumes and rapid onboarding demands',
      'Dynamic store schedule changes based on foot traffic',
      'Multi-store employee transfers and split shift allocations',
      'High employee turnover requiring fast final pay settlement'
    ],
    modulesPackage: ['recruitment', 'onboarding', 'scheduling', 'attendance', 'field-workforce'],
    workflow: 'Seasonal Requisition → Mobile Pre-boarding → Store POS Clock-in → Rapid Offboarding Settlement',
    governance: 'Part-time worker rights regulations, minimum wage tier updates, and store-level manager authorization caps.',
    analyticsFocus: 'Store labor cost vs sales revenue, turnover by branch location, and time-to-onboard.'
  },
  {
    slug: 'logistics',
    title: 'Logistics & Supply Chain',
    iconName: 'Truck',
    tagline: 'Distributed warehouse rosters, driver mileage tracking, and mobile GPS verification.',
    workforceProfile: 'Fleet drivers, warehouse operators, fulfillment leads, dispatch coordinators, and customs specialists.',
    challenges: [
      'Tracking time and location for long-haul fleet drivers',
      'Peak season warehouse shift scaling and temp agency integration',
      'Trip allowance, per diem, and distance expense verification',
      'Commercial driver license (CDL) & safety compliance monitoring'
    ],
    modulesPackage: ['field-workforce', 'attendance', 'expenses', 'payroll', 'documents'],
    workflow: 'Mobile Dispatch Clock-in → Trip Mileage GPS Sync → Per Diem Auto Calc → Consolidated Fleet Payroll',
    governance: 'Transport authority driving hour limits, hazardous goods transport certifications, and per diem tax rules.',
    analyticsFocus: 'Delivery labor efficiency, driver overtime utilization, and license renewal compliance.'
  },
  {
    slug: 'technology',
    title: 'Technology & Enterprise SaaS',
    iconName: 'Cpu',
    tagline: 'Global remote workforce, equity management, continuous OKR feedback, and skill matrices.',
    workforceProfile: 'Software engineers, product managers, DevOps architects, global sales executives, and customer success teams.',
    challenges: [
      'Cross-border remote hiring across 30+ tax jurisdictions',
      'Complex tech equity options, commission structures, and bonuses',
      'Fast-paced OKR goal alignment and peer feedback reviews',
      'Intellectual property agreement and IP assignment tracking'
    ],
    modulesPackage: ['core-hr', 'performance', 'recruitment', 'benefits', 'workforce-planning'],
    workflow: 'Global Remote Hire → Cascading OKR Setup → Continuous 360 Appraisal → Merit & Equity Adjustment',
    governance: 'Global IP protection, cross-border tax compliance for EOR/GEO remote teams, and SOC2 access controls.',
    analyticsFocus: 'Engineering turnover rate, revenue per full-time employee, and skill matrix gap score.'
  },
  {
    slug: 'education',
    title: 'Higher Education & Academic Institutions',
    iconName: 'GraduationCap',
    tagline: 'Tenure tracking, academic contract schedules, research grant payroll, and faculty matrices.',
    workforceProfile: 'Tenured professors, adjunct lecturers, research fellows, administrative staff, and student workers.',
    challenges: [
      'Managing distinct pay structures for tenured vs adjunct faculty',
      'Research grant payroll cost allocation across multiple funds',
      'Semester-based academic calendar contracts and sabbaticals',
      'Student worker hourly caps and work-study tax exemptions'
    ],
    modulesPackage: ['core-hr', 'payroll', 'documents', 'scheduling', 'budgeting'],
    workflow: 'Academic Requisition → Grant Fund Mapping → Semester Contract Lock → Academic Payroll Run',
    governance: 'Academic tenure board guidelines, public research fund auditability, and work-study labor limits.',
    analyticsFocus: 'Grant labor utilization rate, adjunct-to-tenured faculty ratio, and semester onboarding speed.'
  },
  {
    slug: 'professional-services',
    title: 'Professional Services & Consulting',
    iconName: 'Briefcase',
    tagline: 'Project billable utilization, client expense reimbursement, and matrix partner governance.',
    workforceProfile: 'Management consultants, legal partners, audit associates, project directors, and solution architects.',
    challenges: [
      'Tracking billable vs non-billable hours per client project',
      'Client-reimbursable travel expenses and receipt audits',
      'Matrix project assignment and resource capacity allocations',
      'Partner profit share and milestone bonus distributions'
    ],
    modulesPackage: ['attendance', 'expenses', 'org-structure', 'workforce-planning', 'people-analytics'],
    workflow: 'Project Resource Assignment → Client Billable Hours Lock → Mobile Expense Scan → Client Invoicing Sync',
    governance: 'Client confidentiality non-disclosure mandates, conflict-of-interest disclosures, and billable hour integrity.',
    analyticsFocus: 'Consultant billable utilization %, project margin yield, and bench capacity forecasting.'
  },
  {
    slug: 'public-sector',
    title: 'Public Sector & Civil Service',
    iconName: 'Building2',
    tagline: 'Civil service grade scales, strict statutory transparency, and multi-tier approval chains.',
    workforceProfile: 'Civil servants, public safety officers, municipal administrators, policy analysts, and agency directors.',
    challenges: [
      'Rigid civil service pay grade matrices and step increases',
      'Strict public transparency and freedom-of-information audit demands',
      'Multi-tier bureaucratic approval hierarchies for every position change',
      'Pension and public retirement fund statutory compliance'
    ],
    modulesPackage: ['core-hr', 'payroll', 'statutory-tax', 'compliance', 'security'],
    workflow: 'Grade Scale Requisition → Public Civil Service Sign-off → Step Increase Engine → Immutable Public Audit Log',
    governance: 'Public sector labor acts, civil service commission rules, and zero-tolerance data tampering protocols.',
    analyticsFocus: 'Grade step progression rate, public payroll budget execution %, and FOIA audit readiness.'
  }
];
