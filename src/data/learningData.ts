export type LearningIconKey = 'Play' | 'BookOpen' | 'Trophy' | 'Code';

export interface LearningItem {
  name: string;
  description: string;
  features: string[];
  website: string;
  difficulty: string;
  color: string;
}

export interface LearningCategory {
  category: string;
  icon: LearningIconKey;
  items: LearningItem[];
}

export interface Certification {
  name: string;
  focus: string;
}

export interface CertificationLevel {
  level: string;
  certs: Certification[];
}

export interface LearningPhase {
  phase: string;
  duration: string;
  resources: string[];
  skills: string[];
}

export const learningPlatforms: LearningCategory[] = [
  {
    category: 'Interactive Labs & Training',
    icon: 'Play',
    items: [
      {
        name: 'TryHackMe',
        description:
          'Interactive cybersecurity training platform with hands-on labs and guided challenges for all skill levels.',
        features: [
          'Guided learning paths and challenges',
          'Real-world scenario simulations',
          'Progressive difficulty levels',
          'Community-driven content and discussions',
        ],
        website: 'https://tryhackme.com/',
        difficulty: 'Beginner to Advanced',
        color: 'from-green-500 to-emerald-500',
      },
      {
        name: 'Hack The Box',
        description:
          'A virtual lab platform for penetration testing, CTF-style hacking, and cybersecurity skill development.',
        features: [
          'Real-world penetration testing scenarios',
          'Pwn and Forensics challenges',
          'Advanced Persistent Threat (APT) simulations',
          'Professional certification tracks',
        ],
        website: 'https://www.hackthebox.eu/',
        difficulty: 'Intermediate to Expert',
        color: 'from-blue-500 to-purple-500',
      },
      {
        name: 'RangeForce',
        description:
          'Interactive cybersecurity training platform focusing on hands-on skills development and real-time feedback.',
        features: [
          'Adaptive learning technology',
          'Skills-based training modules',
          'Performance analytics and reporting',
          'Integration with existing security tools',
        ],
        website: 'https://www.rangeforce.com/',
        difficulty: 'All Levels',
        color: 'from-orange-500 to-red-500',
      },
      {
        name: 'DetectionLab',
        description:
          'Automated lab environment for learning detection engineering, incident response, and threat hunting.',
        features: [
          'Fully automated lab setup',
          'Windows event log generation',
          'Network traffic simulation',
          'Detection engineering practice',
        ],
        website: 'https://github.com/clong/DetectionLab',
        difficulty: 'Intermediate to Advanced',
        color: 'from-purple-500 to-pink-500',
      },
      {
        name: 'OverTheWire',
        description:
          'Wargame-style cybersecurity challenges designed to teach Linux, networking, and security fundamentals through hands-on problem solving.',
        features: [
          'Classic wargame challenges like Bandit, Natas, and Leviathan',
          'Focus on Linux command line and privilege escalation',
          'Progressive difficulty levels',
          'Great for beginners learning offensive security',
        ],
        website: 'https://overthewire.org/',
        difficulty: 'Beginner to Intermediate',
        color: 'from-teal-500 to-green-500',
      },
      {
        name: 'VulnHub',
        description:
          'A platform providing intentionally vulnerable virtual machines for practicing penetration testing and vulnerability exploitation.',
        features: [
          'Downloadable vulnerable VM images',
          'Realistic penetration testing scenarios',
          'Practice privilege escalation and exploitation',
          'Widely used by OSCP learners',
        ],
        website: 'https://www.vulnhub.com/',
        difficulty: 'Intermediate to Advanced',
        color: 'from-red-500 to-orange-500',
      },
      {
        name: 'CyberDefenders',
        description:
          'Blue-team focused training platform offering realistic cyber defense scenarios and DFIR challenges.',
        features: [
          'Digital forensics and incident response challenges',
          'Threat hunting scenarios',
          'Real-world attack investigation labs',
          'Blue-team skill development',
        ],
        website: 'https://cyberdefenders.org/',
        difficulty: 'Beginner to Advanced',
        color: 'from-cyan-500 to-blue-500',
      },
      {
        name: 'PortSwigger Web Security Academy',
        description:
          'A free web security training platform from the creators of Burp Suite, featuring hundreds of hands-on labs covering real-world web vulnerabilities.',
        features: [
          '200+ interactive web security labs',
          'Learn SQL injection, XSS, CSRF, and other vulnerabilities',
          'Browser-based hacking environments',
          'Official Burp Suite training platform',
        ],
        website: 'https://portswigger.net/web-security',
        difficulty: 'Beginner to Advanced',
        color: 'from-orange-500 to-red-500',
      },
      {
        name: 'picoCTF',
        description:
          'Beginner-friendly cybersecurity Capture The Flag platform created by Carnegie Mellon University to teach security concepts through gamified challenges.',
        features: [
          'Beginner-friendly CTF challenges',
          'Covers cryptography, web security, and binary exploitation',
          'Educational challenge explanations',
          'Large archive of past competitions',
        ],
        website: 'https://picoctf.org/',
        difficulty: 'Beginner to Intermediate',
        color: 'from-purple-500 to-indigo-500',
      },
      {
        name: 'Root-Me',
        description:
          'A challenge-based cybersecurity training platform with hundreds of exercises covering penetration testing, reverse engineering, and cryptography.',
        features: [
          '400+ hacking challenges',
          'Wide range of categories including web, crypto, and forensics',
          'Scoreboards and rankings',
          'Active security community',
        ],
        website: 'https://www.root-me.org/',
        difficulty: 'Beginner to Advanced',
        color: 'from-green-500 to-emerald-500',
      },
      {
        name: 'Blue Team Labs Online',
        description:
          'A platform focused on blue-team cybersecurity skills, offering realistic incident response and log analysis challenges.',
        features: [
          'SOC and incident response scenarios',
          'Log analysis and threat detection exercises',
          'Blue-team focused learning paths',
          'Realistic attack investigation challenges',
        ],
        website: 'https://blueteamlabs.online/',
        difficulty: 'Beginner to Advanced',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'PentesterLab',
        description:
          'A web application penetration testing platform focused on learning real-world vulnerabilities through guided exercises.',
        features: [
          'Hands-on web exploitation exercises',
          'Real vulnerability scenarios',
          'Bug bounty focused training',
          'Detailed explanations and walkthroughs',
        ],
        website: 'https://pentesterlab.com/',
        difficulty: 'Intermediate to Advanced',
        color: 'from-yellow-500 to-orange-500',
      },
    ],
  },
  {
    category: 'Learning Blogs & Resources',
    icon: 'BookOpen',
    items: [
      {
        name: 'SANS Internet Storm Center',
        description:
          'Daily blog posts from SANS ISC about ongoing threats, vulnerabilities, and unusual traffic patterns.',
        features: [
          'Real-time threat analysis and reporting',
          'Community-driven submissions and diaries',
          'Practical detection and mitigation guidance',
          'Free educational content and resources',
        ],
        website: 'https://isc.sans.edu/',
        difficulty: 'All Levels',
        color: 'from-yellow-500 to-orange-500',
      },
      {
        name: 'DFIR Report',
        description:
          'In-depth, narrative-style reports on digital forensics and incident response (DFIR) engagements.',
        features: [
          'Real-case breakdowns from access to impact',
          'Timeline-based analysis of attacker behavior',
          'MITRE ATT&CK technique mapping',
          'Comprehensive incident response insights',
        ],
        website: 'https://thedfirreport.com/',
        difficulty: 'Advanced',
        color: 'from-red-500 to-pink-500',
      },
      {
        name: 'Huntress Blog',
        description:
          'Blog from the Huntress team featuring real-world threat reports, malware breakdowns, and detection techniques.',
        features: [
          'Real-world threat analysis and reporting',
          'Malware analysis and behavior studies',
          'Initial access method documentation',
          'Security awareness and detection tips',
        ],
        website: 'https://www.huntress.com/blog',
        difficulty: 'Intermediate to Advanced',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'Malware Traffic Analysis',
        description:
          'A hands-on blog focused on analyzing PCAP files and documenting infection chains observed in the wild.',
        features: [
          'Real-world malware traffic samples',
          'PCAP files with accompanying analysis',
          'Threat behavior and IOC learning',
          'Network forensics techniques',
        ],
        website: 'https://www.malware-traffic-analysis.net/',
        difficulty: 'Intermediate to Advanced',
        color: 'from-indigo-500 to-purple-500',
      },
      {
        name: 'Red Canary Blog',
        description:
          'Focused on detection engineering, threat research, and security operations insights and methodologies.',
        features: [
          'Threat detection and response strategies',
          'Behavioral analytics and TTPs',
          'MITRE ATT&CK framework alignment',
          'Security operations best practices',
        ],
        website: 'https://redcanary.com/blog/',
        difficulty: 'Advanced',
        color: 'from-green-500 to-teal-500',
      },
    ],
  },
  {
    category: 'Vulnerability & CVE Management',
    icon: 'Trophy',
    items: [
      {
        name: 'CVE (Common Vulnerabilities and Exposures)',
        description:
          'A dictionary of publicly disclosed cybersecurity vulnerabilities and exposures with standardized identifiers.',
        features: [
          'Standardized vulnerability identifiers',
          'Detailed technical descriptions',
          'CVSS (Common Vulnerability Scoring System) ratings',
          'Reference links to patches and fixes',
        ],
        website: 'https://www.cve.org/',
        difficulty: 'All Levels',
        color: 'from-red-500 to-orange-500',
      },
      {
        name: 'NVD (National Vulnerability Database)',
        description:
          'The U.S. government repository of standards-based vulnerability management data for cybersecurity professionals.',
        features: [
          'Comprehensive vulnerability database',
          'CVSS scoring and analysis',
          'CWE (Common Weakness Enumeration) mapping',
          'Searchable API and bulk downloads',
        ],
        website: 'https://nvd.nist.gov/',
        difficulty: 'All Levels',
        color: 'from-blue-500 to-indigo-500',
      },
      {
        name: 'Exploit Database',
        description:
          'An archive of public exploits and corresponding vulnerable software developed for penetration testing purposes.',
        features: [
          'Comprehensive exploit collection',
          'Searchable vulnerability database',
          'Exploit code samples and PoCs',
          'Google Hacking Database (GHDB)',
        ],
        website: 'https://www.exploit-db.com/',
        difficulty: 'Intermediate to Advanced',
        color: 'from-purple-500 to-pink-500',
      },
      {
        name: 'VulnDB',
        description:
          "Risk Based Security's vulnerability database providing detailed information about security vulnerabilities.",
        features: [
          'Detailed vulnerability information',
          'Risk scoring and prioritization',
          'Threat intelligence integration',
          'Historical vulnerability data',
        ],
        website: 'https://vulndb.cyberriskanalytics.com/',
        difficulty: 'Advanced',
        color: 'from-orange-500 to-red-500',
      },
    ],
  },
  {
    category: 'Web Utilities & Analysis Tools',
    icon: 'Code',
    items: [
      {
        name: 'Base64 Encode/Decode',
        description: 'Tools for encoding and decoding Base64 strings for data transformation and analysis.',
        features: [
          'Online Base64 encoding and decoding',
          'File to Base64 conversion',
          'URL-safe Base64 variants',
          'Batch processing capabilities',
        ],
        website: 'https://www.base64encode.org/',
        difficulty: 'Beginner',
        color: 'from-green-500 to-blue-500',
      },
      {
        name: 'CrackStation',
        description: 'A powerful password hash cracking utility for security testing and hash identification.',
        features: [
          'Hash type identification and cracking',
          'Dictionary attack capabilities',
          'Custom wordlist support',
          'Performance-optimized algorithms',
        ],
        website: 'https://crackstation.net/',
        difficulty: 'Intermediate to Advanced',
        color: 'from-yellow-500 to-red-500',
      },
      {
        name: 'SecurityHeaders',
        description:
          'An online tool to check HTTP response headers for security best practices and compliance.',
        features: [
          'HTTP security header analysis',
          'Compliance scoring and recommendations',
          'SSL/TLS configuration checking',
          'Detailed security guidance',
        ],
        website: 'https://securityheaders.com/',
        difficulty: 'Beginner to Intermediate',
        color: 'from-blue-500 to-green-500',
      },
    ],
  },
];

export const learningCertifications: CertificationLevel[] = [
  {
    level: 'Entry Level',
    certs: [
      { name: 'CompTIA Security+', focus: 'Foundational security knowledge' },
      { name: 'EC-Council CEH', focus: 'Ethical hacking fundamentals' },
      { name: '(ISC)2 SSCP', focus: 'Systems security practitioner' },
    ],
  },
  {
    level: 'Intermediate',
    certs: [
      { name: 'EC-Council LPT', focus: 'Licensed penetration tester' },
      { name: 'GIAC GCIH', focus: 'Incident handling and response' },
      { name: 'SANS GSEC', focus: 'Security essentials' },
      { name: 'OSCP', focus: 'Offensive security penetration testing' },
    ],
  },
  {
    level: 'Advanced',
    certs: [
      { name: 'SANS GCTI', focus: 'Cyber threat intelligence' },
      { name: 'GIAC GNFA', focus: 'Network forensics analysis' },
      { name: 'SANS GREM', focus: 'Reverse engineering malware' },
      { name: 'CISSP', focus: 'Information systems security' },
    ],
  },
];

export const learningPathPhases: LearningPhase[] = [
  {
    phase: 'Foundation Building',
    duration: '2-4 months',
    resources: ['CompTIA Security+', 'TryHackMe Complete Beginner Path', 'SANS SEC101'],
    skills: [
      'Basic networking concepts',
      'Operating system fundamentals',
      'Security principles and terminology',
      'Threat landscape understanding',
    ],
  },
  {
    phase: 'Hands-on Practice',
    duration: '4-6 months',
    resources: ['Hack The Box Academy', 'TryHackMe Advanced Paths', 'RangeForce'],
    skills: [
      'Penetration testing methodologies',
      'Vulnerability assessment techniques',
      'Incident response procedures',
      'Log analysis and monitoring',
    ],
  },
  {
    phase: 'Specialization',
    duration: '6-12 months',
    resources: ['DFIR Report analysis', 'MITRE ATT&CK study', 'DetectionLab setup'],
    skills: [
      'Advanced threat hunting',
      'Malware analysis',
      'Forensic investigation',
      'Threat intelligence gathering',
    ],
  },
  {
    phase: 'Expertise & Leadership',
    duration: '12+ months',
    resources: ['Advanced certifications', 'Open source contributions', 'Conference speaking'],
    skills: [
      'Security architecture design',
      'Team leadership and mentoring',
      'Strategic security planning',
      'Industry thought leadership',
    ],
  },
];
