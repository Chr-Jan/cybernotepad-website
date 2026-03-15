export type FrameworkIconKey = 'Target' | 'Shield' | 'Book' | 'Zap' | 'CheckCircle';

export interface FrameworkItem {
  name: string;
  description: string;
  details: string[];
  website: string;
  color: string;
}

export interface FrameworkCategory {
  category: string;
  icon: FrameworkIconKey;
  items: FrameworkItem[];
}

export interface FrameworkImplementationPhase {
  phase: string;
  description: string;
  steps: string[];
}

export const securityFrameworks: FrameworkCategory[] = [
  {
    category: 'Threat Intelligence & Attack Frameworks',
    icon: 'Target',
    items: [
      {
        name: 'MITRE ATT&CK Framework',
        description:
          'A globally-accessible knowledge base of adversary tactics and techniques based on real-world observations.',
        details: [
          'Enterprise, Mobile, and Industrial Control Systems matrices',
          'Tactics, Techniques, and Procedures (TTPs) mapping',
          'Adversary emulation and red team planning',
          'Detection engineering and threat hunting guidance',
        ],
        website: 'https://attack.mitre.org/',
        color: 'from-red-500 to-orange-500',
      },
      {
        name: 'Cyber Kill Chain',
        description: 'A model that defines the phases of a cyber attack from reconnaissance to data exfiltration.',
        details: [
          'Reconnaissance: Intelligence gathering',
          'Weaponization and Delivery: Attack preparation',
          'Exploitation and Installation: Gaining access',
          'Command & Control: Maintaining access',
          'Actions on Objectives: Achieving goals',
        ],
        website: 'https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html',
        color: 'from-blue-500 to-purple-500',
      },
    ],
  },
  {
    category: 'Cybersecurity Risk Management',
    icon: 'Shield',
    items: [
      {
        name: 'NIST Cybersecurity Framework (CSF)',
        description:
          'A voluntary framework consisting of standards, guidelines, and best practices to manage cybersecurity-related risk.',
        details: [
          'Identify: Asset and risk assessment',
          'Protect: Security control implementation',
          'Detect: Monitoring and detection capabilities',
          'Respond: Incident response planning',
          'Recover: Business continuity and recovery',
        ],
        website: 'https://www.nist.gov/cyberframework',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'CIS Controls',
        description:
          'A prioritized set of actions to protect organizations and data from known cyber attack vectors.',
        details: [
          'Basic controls (1-6): Foundational security hygiene',
          'Foundational controls (7-16): Technical safeguards',
          'Organizational controls (17-20): Operational procedures',
          'Implementation groups (IG1, IG2, IG3) for scaling',
        ],
        website: 'https://www.cisecurity.org/controls/',
        color: 'from-green-500 to-emerald-500',
      },
    ],
  },
  {
    category: 'Application Security Frameworks',
    icon: 'Book',
    items: [
      {
        name: 'OWASP (Open Web Application Security Project)',
        description:
          'A non-profit organization that works to improve the security of software through open standards and community collaboration.',
        details: [
          'OWASP Top 10 Web Application Security Risks',
          'OWASP ASVS (Application Security Verification Standard)',
          'OWASP Testing Guide and Code Review Guide',
          'Software Assurance Maturity Model (SAMM)',
        ],
        website: 'https://owasp.org/',
        color: 'from-yellow-500 to-orange-500',
      },
      {
        name: 'SABSA Framework',
        description: 'A framework for the development and implementation of information security architectures.',
        details: [
          'Sherwood Applied Business Security Architecture',
          'Security strategy alignment with business',
          'Enterprise-wide security architecture',
          'Policy, process, and control development',
        ],
        website: 'https://sabsa-institute.org/',
        color: 'from-purple-500 to-pink-500',
      },
    ],
  },
  {
    category: 'Advanced Security Models',
    icon: 'Zap',
    items: [
      {
        name: 'Zero Trust Security',
        description:
          'A security concept centered on the belief that organizations should not automatically trust anything inside or outside its perimeters.',
        details: [
          'Never trust, always verify principle',
          'Least privilege access controls',
          'Continuous authentication and authorization',
          'Microsegmentation of network resources',
        ],
        website: 'https://www.nist.gov/publications/zero-trust-architecture',
        color: 'from-red-500 to-pink-500',
      },
      {
        name: 'DORA Metrics',
        description:
          'DevOps Research and Assessment metrics that measure software delivery performance and operational excellence.',
        details: [
          'Deployment Frequency: How often changes are deployed',
          'Lead Time for Changes: Time from commit to production',
          'Mean Time to Recovery (MTTR): Recovery time from incidents',
          'Change Failure Rate: Percentage of changes that cause failures',
        ],
        website: 'https://dora.dev/',
        color: 'from-blue-500 to-teal-500',
      },
      {
        name: 'Karkarian Hexad Framework',
        description:
          'A user motivation framework for gamification design, applicable to security awareness and training.',
        details: [
          'Philanthropists: Motivated by helping others',
          'Socializers: Motivated by interacting with people',
          'Achievers: Motivated by mastering skills',
          'Explorers: Motivated by discovering new things',
          'Collectors: Motivated by collecting and hoarding',
          'Competitionists: Motivated by being the best',
        ],
        website: 'https://yukaichou.com/gamification-examples/karkarian-hexad-framework/',
        color: 'from-green-500 to-yellow-500',
      },
    ],
  },
  {
    category: 'Governance & Compliance',
    icon: 'CheckCircle',
    items: [
      {
        name: 'Cloud Security Alliance (CSA)',
        description:
          'An organization focused on promoting best practices for providing security assurance within cloud computing environments.',
        details: [
          'Cloud Controls Matrix (CCM) for cloud security',
          'Security Guidance for Critical Areas of Focus',
          'Cloud Security Alliance STAR program',
          'Best practices for cloud implementation',
        ],
        website: 'https://cloudsecurityalliance.org/',
        color: 'from-indigo-500 to-purple-500',
      },
    ],
  },
];

export const frameworkImplementationGuide: FrameworkImplementationPhase[] = [
  {
    phase: 'Assessment',
    description: 'Evaluate current security posture and identify gaps',
    steps: [
      'Conduct comprehensive risk assessment',
      'Map current controls to framework requirements',
      'Identify priority areas for improvement',
      'Establish baseline security metrics',
    ],
  },
  {
    phase: 'Planning',
    description: 'Develop implementation roadmap and resource allocation',
    steps: [
      'Create detailed implementation plan',
      'Define roles and responsibilities',
      'Allocate budget and resources',
      'Set timeline and milestones',
    ],
  },
  {
    phase: 'Implementation',
    description: 'Execute security controls and process improvements',
    steps: [
      'Deploy technical security controls',
      'Update policies and procedures',
      'Train staff on new processes',
      'Implement monitoring and measurement',
    ],
  },
  {
    phase: 'Monitoring',
    description: 'Continuously assess effectiveness and adapt to changes',
    steps: [
      'Regular security assessments',
      'Key performance indicator tracking',
      'Incident response testing',
      'Framework updates and improvements',
    ],
  },
];
