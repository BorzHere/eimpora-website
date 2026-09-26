export const WORKFORCE_OS_DATA = {
  section: {
    eyebrow: 'Intelligent Workforce OS',
    title: 'The workforce OS with intelligence built in',
    description:
      'Unlike “all-in-one” platforms that simply bundle tools, Eimpora’s products share a deep foundation of data, which empowers people—and AI—to work smarter.',
  },
  rows: [
    {
      id: 'people-center',
      title: 'Your business data with people at the center',
      description:
        'Eimpora has your workforce’s full context—roles, locations, reporting lines, and more—even as things change. This rich data layer unlocks smarter automation, cleaner reporting, and',
      highlight: 'AI capabilities',
      caseStudy: {
        brand: 'BARRY’S',
        metric: '5×',
        outcome: 'faster to manage employee changes with Eimpora’s HCM',
        cta: 'Read case study',
        href: '#case-studies',
      },
      profile: {
        name: 'Zoe Adebayo',
        role: 'Senior Account Executive',
        image:
          'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80',
        fields: [
          { label: 'Employee ID', value: '#828', icon: 'Users' },
          { label: 'Base salary', value: '$120,000', icon: 'Banknote' },
          { label: 'Home address', value: 'New York, NY', icon: 'Globe' },
          { label: 'Device', value: '2025 MacBook Pro', icon: 'Laptop' },
          { label: 'Apps', value: '32', icon: 'Layers', badge: true },
          { label: 'Corp card spend', value: '$1,750', icon: 'Banknote' },
          { label: 'CRM quota', value: '115% attainment', icon: 'Target' },
          { label: 'Active tickets', value: '14', icon: 'Activity', badge: true },
        ],
      },
      peekCard: {
        employeeId: '#1921',
        baseSalary: '$140,000',
        homeAddress: 'San Francisco, CA',
        device: '2025 MacBook Air',
        apps: '17',
        corpCardSpend: '$900',
      },
    },
    {
      id: 'permissions',
      title: 'Shared permissions and access controls',
      description:
        'Permissions and approvals are dynamic and role-based, automatically governing what each employee can do across every app. Define rules once and have them enforced everywhere.',
      prompt: {
        prefix: 'Show me the',
        target: 'Product team’s',
        suffix: 'salaries',
      },
      aiMessage:
        'I’m not able to show the entire team’s salary because it’s not accessible with your permissions. Here is the salary information for your direct reports:',
      table: [
        { employee: 'Nathan M.', title: 'Web Developer', amount: '$109,000', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80' },
        { employee: 'Yui T.', title: 'UI/UX Designer', amount: '$112,000', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80' },
        { employee: 'Aisha M.', title: 'QA Lead', amount: '$97,000', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80' },
      ],
      caseStudy: {
        name: 'clay',
        metric: '80%',
        outcome: 'reduction in IT access ticket overhead with automated role policies',
        cta: 'Read case study',
        href: '#case-studies',
      },
    },
    {
      id: 'decision-intelligence',
      title: 'Operational decisions guided by real workforce context',
      description:
        'Eimpora connects payroll, attendance, hiring, and approvals in one operating model so AI recommendations are grounded in the reality of your people, policies, and performance.',
      highlight: 'decision intelligence',
      caseStudy: {
        brand: 'NOVA',
        metric: '3.4×',
        outcome: 'faster workforce decisions with automated policy guidance and live operational insight',
        cta: 'See workflow example',
        href: '#workflow',
      },
      profile: {
        name: 'Hannah Clarke',
        role: 'Operations Director',
        image:
          'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&auto=format&fit=crop&q=80',
        fields: [
          { label: 'Headcount change', value: '+18%', icon: 'Users' },
          { label: 'Payroll risk', value: 'Low', icon: 'Banknote' },
          { label: 'Attendance drift', value: '1.2%', icon: 'Activity' },
          { label: 'Approval queue', value: '7 items', icon: 'Target' },
          { label: 'AI suggestion', value: 'Proceed', icon: 'Sparkles', badge: true },
        ],
      },
      peekCard: {
        employeeId: 'Ops-18',
        baseSalary: 'Forecast +$240K',
        homeAddress: 'Regional HQ',
        device: 'Live analytics',
        apps: '9',
        corpCardSpend: 'Pending',
      },
    },
  ],
};
