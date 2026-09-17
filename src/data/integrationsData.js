export const INTEGRATION_CATEGORIES = [
  { id: 'all', name: 'All Integrations' },
  { id: 'erp-finance', name: 'ERP & Finance' },
  { id: 'identity-sso', name: 'Identity & SSO' },
  { id: 'biometrics-hardware', name: 'Biometrics & Devices' },
  { id: 'productivity-comm', name: 'Productivity & Collaboration' },
  { id: 'custom-api', name: 'Developer APIs & Webhooks' },
];

export const INTEGRATIONS_DATA = [
  {
    slug: 'sap-s4hana',
    name: 'SAP S/4HANA Finance & ERP',
    category: 'erp-finance',
    categoryName: 'ERP & Finance',
    tagline: 'Configurable financial ledger & GL posting integration.',
    type: 'Configurable Connector',
    syncDirection: 'Bi-Directional',
    iconName: 'Database',
    description: 'Sync monthly payroll journal entries, cost center allocations, expense disbursements, and vendor payments directly into SAP General Ledger.',
    connectedModules: ['payroll', 'expenses', 'org-structure'],
    features: [
      'Automated payroll GL voucher posting',
      'Cost center & profit center field mapping',
      'FX rate table synchronization',
      'Audit log for every financial payload'
    ]
  },
  {
    slug: 'oracle-fusion',
    name: 'Oracle Fusion Cloud ERP',
    category: 'erp-finance',
    categoryName: 'ERP & Finance',
    tagline: 'Enterprise general ledger and accounts payable synchronization.',
    type: 'Configurable Connector',
    syncDirection: 'Bi-Directional',
    iconName: 'Server',
    description: 'Post aggregated payroll cost summaries, tax liabilities, and employee expense claims to Oracle AP and GL modules seamlessly.',
    connectedModules: ['payroll', 'expenses', 'statutory-tax'],
    features: [
      'Oracle Financials REST API gateway integration',
      'Automated payroll settlement verification',
      'Multi-book financial ledger support',
      'Error holding queue for invalid GL accounts'
    ]
  },
  {
    slug: 'microsoft-azure-ad',
    name: 'Microsoft Entra ID / Azure AD',
    category: 'identity-sso',
    categoryName: 'Identity & SSO',
    tagline: 'Enterprise Single Sign-On (SSO) and SCIM user provisioning.',
    type: 'Native Protocol (SAML 2.0 / OIDC)',
    syncDirection: 'Inbound / Outbound',
    iconName: 'KeyRound',
    description: 'Automate employee identity lifecycle: provision access when hired in Eimpora, enforce SAML 2.0 MFA SSO, and de-provision on offboarding.',
    connectedModules: ['core-hr', 'security', 'onboarding'],
    features: [
      'SAML 2.0 & OpenID Connect Single Sign-On',
      'SCIM 2.0 automated user provisioning & group sync',
      'Multi-factor authentication (MFA) enforcement',
      'Real-time access revocation upon employee termination'
    ]
  },
  {
    slug: 'okta-identity',
    name: 'Okta Universal Directory',
    category: 'identity-sso',
    categoryName: 'Identity & SSO',
    tagline: 'Centralized identity governance and lifecycle management.',
    type: 'Native Protocol (SAML 2.0 / SCIM)',
    syncDirection: 'Bi-Directional',
    iconName: 'Shield',
    description: 'Establish Eimpora as the authoritative source of truth (HR-Driven IT Provisioning) to automatically trigger Okta app assignments.',
    connectedModules: ['core-hr', 'security'],
    features: [
      'HR-driven IT identity lifecycle provisioning',
      'Attribute-level directory synchronization',
      'Automated role-based app licensing assignments',
      'Security event logging via Okta System Log'
    ]
  },
  {
    slug: 'zkteco-hardware',
    name: 'ZKTeco Biometric Hardware Terminal',
    category: 'biometrics-hardware',
    categoryName: 'Biometrics & Devices',
    tagline: 'Direct hardware IP gateway sync for factory & office gate clocks.',
    type: 'Hardware Gateway API',
    syncDirection: 'Inbound Stream',
    iconName: 'Fingerprint',
    description: 'Receive real-time biometric fingerprint, palm, and facial recognition clock-in events directly from physical ZKTeco hardware devices.',
    connectedModules: ['attendance', 'scheduling', 'overtime'],
    features: [
      'Real-time push protocol (ADMS / WDMS) hardware sync',
      'Offline punch buffering with auto cloud sync upon reconnect',
      'Multi-location IP device health monitoring dashboard',
      'Biometric template encryption compliance'
    ]
  },
  {
    slug: 'suprema-biostar',
    name: 'Suprema BioStar 2 Hardware',
    category: 'biometrics-hardware',
    categoryName: 'Biometrics & Devices',
    tagline: 'High-security biometric & RFID access control gate integration.',
    type: 'Hardware Gateway API',
    syncDirection: 'Inbound Stream',
    iconName: 'ScanFace',
    description: 'Connect Suprema access control turnstiles and time recorders to feed attendance punches directly into Eimpora shift engine.',
    connectedModules: ['attendance', 'security'],
    features: [
      'BioStar 2 API webhooks integration',
      'RFID card ID & facial matching validation',
      'Turnstile access permission sync based on employment status',
      'Device status ping monitoring'
    ]
  },
  {
    slug: 'slack-enterprise',
    name: 'Slack Enterprise Grid',
    category: 'productivity-comm',
    categoryName: 'Productivity & Collaboration',
    tagline: 'In-app leave approvals, notifications, and AI policy bot.',
    type: 'Integration-Ready App',
    syncDirection: 'Bi-Directional',
    iconName: 'MessageSquare',
    description: 'Allow managers to approve leave and expense requests directly inside Slack, receive birthday/work anniversary alerts, and query policy bot.',
    connectedModules: ['self-service', 'leave', 'expenses', 'ai-insights'],
    features: [
      'Interactive Slack message approval buttons for managers',
      'Instant shift update & schedule push alerts',
      'Eimpora AI Assistant command integration (/eimpora-ask)',
      'Daily team attendance digest channel broadcast'
    ]
  },
  {
    slug: 'microsoft-teams',
    name: 'Microsoft Teams Enterprise',
    category: 'productivity-comm',
    categoryName: 'Productivity & Collaboration',
    tagline: 'Collaborative HR workflows embedded inside Microsoft 365.',
    type: 'Integration-Ready App',
    syncDirection: 'Bi-Directional',
    iconName: 'MessagesSquare',
    description: 'Access Eimpora employee portal directly as a Microsoft Teams tab, conduct candidate interview feedback, and receive approval notifications.',
    connectedModules: ['self-service', 'recruitment', 'performance'],
    features: [
      'Embedded Teams tab application',
      'Interview scorecard notifications for hiring managers',
      'Continuous 1-on-1 performance meeting agenda sync',
      'Outlook calendar interview auto-scheduling'
    ]
  },
  {
    slug: 'rest-webhooks-api',
    name: 'Eimpora Enterprise REST APIs & Event Webhooks',
    category: 'custom-api',
    categoryName: 'Developer APIs & Webhooks',
    tagline: 'Open API platform with event-driven webhooks for custom extensions.',
    type: 'API-Capable Gateway',
    syncDirection: 'Full Bi-Directional',
    iconName: 'Code2',
    description: 'Build custom integrations using well-documented OpenAPI 3.0 REST endpoints, GraphQL queries, and realtime event-driven Webhooks.',
    connectedModules: ['core-hr', 'payroll', 'attendance', 'people-analytics'],
    features: [
      'OAuth 2.0 & Bearer Token secure authentication',
      'Rate-limited high throughput REST API endpoints',
      'Event-driven Webhook triggers for 40+ workforce events',
      'Interactive Swagger / Postman API documentation'
    ]
  }
];
