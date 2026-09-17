export const SECURITY_LAYERS = [
  {
    layer: 'Layer 1',
    title: 'Identity & Authentication',
    iconName: 'KeyRound',
    description: 'Enforce multi-factor authentication (MFA), SAML 2.0 / OpenID Connect SSO federation, and context-aware session security.',
    capabilities: [
      'SAML 2.0 & OIDC Single Sign-On federation',
      'Hardware security key (FIDO2/WebAuthn) support',
      'IP-whitelisting & geo-location anomaly challenge',
      'Configurable password rotation & complexity rules'
    ]
  },
  {
    layer: 'Layer 2',
    title: 'Access & Role-Based Authorization',
    iconName: 'ShieldAlert',
    description: 'Fine-grained Role-Based Access Control (RBAC) with field-level data privacy and organizational hierarchy scoping.',
    capabilities: [
      'Granular role permission matrices per module',
      'Field-level masking for compensation & personal data',
      'Legal entity & cost-center data isolation',
      'Temporary elevated privilege approval workflows'
    ]
  },
  {
    layer: 'Layer 3',
    title: 'Application & Workflow Governance',
    iconName: 'GitMerge',
    description: 'Enforce business rules, dual-authorization sign-offs, and human validation policies for critical transactions.',
    capabilities: [
      'Configurable multi-tier approval chains',
      'Dual-key authorization required for payroll lock & dispatch',
      'Automated segregation of duties (SoD) enforcement',
      'Policy violation blocking rules'
    ]
  },
  {
    layer: 'Layer 4',
    title: 'Data Protection & Encryption',
    iconName: 'Lock',
    description: 'AES-256 encryption at rest and TLS 1.3 in transit with isolated database tenant partitions.',
    capabilities: [
      'AES-256 field-level column encryption',
      'TLS 1.3 encrypted data transit pipelines',
      'Isolated database schema partitioning per enterprise tenant',
      'Cryptographic key management with customer-managed keys (CMK)'
    ]
  },
  {
    layer: 'Layer 5',
    title: 'Auditability & Traceability',
    iconName: 'FileCheck',
    description: 'Cryptographically hashed immutable audit trails capturing every record view, export, update, and policy override.',
    capabilities: [
      'Immutable tamper-evident audit trail log',
      'Before-and-after record state change capture',
      'User IP, device fingerprint, and timestamp logging',
      'Exportable audit reports for internal & external auditors'
    ]
  },
  {
    layer: 'Layer 6',
    title: 'Infrastructure & Data Residency',
    iconName: 'Server',
    description: 'Flexible hosting options adhering to regional data sovereignty laws and enterprise isolation requirements.',
    capabilities: [
      'Dedicated compute & isolated database instance deployment',
      'Regional data residency options (US, EU, UK, Middle East, Asia)',
      'High availability 99.99% SLA with multi-region failover',
      'Continuous vulnerability scanning & third-party penetration audits'
    ]
  }
];

export const RBAC_MATRIX = [
  { role: 'Employee', coreHR: 'View Own', payroll: 'View Own Payslip', attendance: 'Clock In / View Own', recruitment: 'None', executiveDashboards: 'None' },
  { role: 'Shift Manager', coreHR: 'View Team', payroll: 'None', attendance: 'Approve Team Timesheets', recruitment: 'Scorecard Review', executiveDashboards: 'Team Metrics' },
  { role: 'HR Generalist', coreHR: 'Create / Edit', payroll: 'View Non-Financial', attendance: 'Full View & Adjust', recruitment: 'Manage Pipeline', executiveDashboards: 'HR Metrics' },
  { role: 'Payroll Director', coreHR: 'View Only', payroll: 'Full Run & Dispatch Lock', attendance: 'Verify Overtime Locks', recruitment: 'None', executiveDashboards: 'Payroll & Cost' },
  { role: 'Chief Financial Officer', coreHR: 'View Aggregated', payroll: 'Executive Sign-off', attendance: 'View Overtime Costs', recruitment: 'Approve Requisitions', executiveDashboards: 'Full Financial View' },
  { role: 'System Administrator', coreHR: 'Configure Rules', payroll: 'Configure Integration', attendance: 'Configure Shift Rules', recruitment: 'System Setup', executiveDashboards: 'System Health' },
];
