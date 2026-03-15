export type PenetrationTestingIconKey = 'Shield' | 'Code' | 'Network' | 'Zap' | 'Search' | 'Key';

export interface PenetrationTestingTool {
  name: string;
  description: string;
  features: string[];
  website: string;
  color: string;
}

export interface PenetrationTestingCategory {
  category: string;
  icon: PenetrationTestingIconKey;
  tools: PenetrationTestingTool[];
}

export const penetrationTestingTools: PenetrationTestingCategory[] = [
  {
    category: 'Offensive Security Distributions',
    icon: 'Shield',
    tools: [
      {
        name: 'Kali Linux',
        description:
          'The premier offensive security distribution used for penetration testing, vulnerability assessment, and ethical hacking.',
        features: [
          'Red team operations',
          'Exploit development and testing',
          'Wireless and web application testing',
          'Over 600 security tools pre-installed',
        ],
        website: 'https://www.kali.org/',
        color: 'from-red-500 to-blue-500',
      },
      {
        name: 'Kali Purple',
        description:
          'A defensive security distribution focused on Blue Team operations such as threat hunting, incident response, and SOC workflows.',
        features: [
          'Incident response tooling',
          'SOC-friendly interface and configuration',
          'Blue team analytics and visibility stack',
          'Integrated defensive security tools',
        ],
        website: 'https://www.kali.org/tools/kali-purple/',
        color: 'from-blue-500 to-purple-500',
      },
    ],
  },
  {
    category: 'Web Application Security',
    icon: 'Code',
    tools: [
      {
        name: 'Metasploit Framework',
        description:
          'A comprehensive penetration testing platform that enables security professionals to discover, exploit, and validate vulnerabilities.',
        features: [
          '600+ exploits and payloads',
          'Post-exploitation modules',
          'Automated exploitation workflows',
          'Custom payload generation',
        ],
        website: 'https://www.metasploit.com/',
        color: 'from-red-500 to-orange-500',
      },
      {
        name: 'Burp Suite Community Edition',
        description:
          'A popular integrated platform for web application security testing with essential tools for manual web security testing.',
        features: [
          'Intercepting proxy for HTTP/S traffic',
          'Manual request repeater and inspector',
          'Basic spidering and analysis',
          'Extensible via BApps',
        ],
        website: 'https://portswigger.net/burp/community',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'OWASP ZAP (Zed Attack Proxy)',
        description:
          'A free, open-source web application security scanner maintained by the OWASP Foundation.',
        features: [
          'Automated and manual web vulnerability scanning',
          'Intercepting proxy for traffic inspection',
          'Active and passive scan modes',
          'CI/CD integration and API support',
        ],
        website: 'https://www.zaproxy.org/',
        color: 'from-yellow-500 to-orange-500',
      },
      {
        name: 'sqlmap',
        description:
          'An open-source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws.',
        features: [
          'Automated SQL injection detection',
          'Multiple database support',
          'Dumping database contents',
          'Backdoor identification',
        ],
        website: 'https://sqlmap.org/',
        color: 'from-green-500 to-blue-500',
      },
    ],
  },
  {
    category: 'Password Security References',
    icon: 'Key',
    tools: [
      {
        name: 'SecLists',
        description:
          'A widely used collection of security testing lists, including credential and password dictionaries for authorized assessments.',
        features: [
          'Password dictionaries and curated lists',
          'Useful for internal policy and control validation',
          'Common source in security testing workflows',
          'Best used only with explicit authorization',
        ],
        website: 'https://github.com/danielmiessler/SecLists',
        color: 'from-indigo-500 to-blue-500',
      },
      {
        name: 'Have I Been Pwned - Pwned Passwords',
        description:
          'A password exposure reference service for checking if credentials appear in known breach corpora.',
        features: [
          'Breach password exposure checks',
          'API support for secure validation flows',
          'Useful for account hygiene and awareness',
          'Supports defensive credential risk reduction',
        ],
        website: 'https://haveibeenpwned.com/Passwords',
        color: 'from-cyan-500 to-blue-500',
      },
      {
        name: 'OWASP Authentication Cheat Sheet',
        description:
          'Practical implementation guidance for secure authentication, password handling, and account protection controls.',
        features: [
          'Authentication design best practices',
          'Password policy and storage guidance',
          'MFA and session management recommendations',
          'Security checklist for development teams',
        ],
        website: 'https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html',
        color: 'from-orange-500 to-red-500',
      },
      {
        name: 'NIST SP 800-63B',
        description:
          'Authoritative digital identity guidance covering authentication, memorized secrets, and verifier requirements.',
        features: [
          'Modern password guidance',
          'Identity assurance recommendations',
          'Verifier and authenticator requirements',
          'Reference baseline for security programs',
        ],
        website: 'https://pages.nist.gov/800-63-3/sp800-63b.html',
        color: 'from-emerald-500 to-teal-500',
      },
      {
        name: 'UK NCSC Password Guidance',
        description:
          'Public guidance and practical recommendations for stronger password policies and user-focused security practices.',
        features: [
          'Policy recommendations for organizations',
          'User education and practical advice',
          'Risk reduction for common credential issues',
          'Government-backed security guidance',
        ],
        website: 'https://www.ncsc.gov.uk/collection/passwords',
        color: 'from-violet-500 to-indigo-500',
      },
    ],
  },
  {
    category: 'Phishing Simulation & Social Engineering',
    icon: 'Search',
    tools: [
      {
        name: 'GoPhish',
        description:
          'An open-source phishing simulation framework for running authorized security awareness campaigns and training exercises.',
        features: [
          'Campaign and landing page management',
          'Email template and tracking support',
          'Role-based reporting for awareness metrics',
          'Integration-friendly API for internal workflows',
        ],
        website: 'https://getgophish.com/',
        color: 'from-cyan-500 to-blue-500',
      },
      {
        name: 'Evilginx2',
        description:
          'A red team framework for advanced adversary simulation in controlled environments with explicit authorization.',
        features: [
          'Realistic account takeover simulation',
          'Operator-controlled phishing flow testing',
          'Infrastructure and domain testing support',
          'Useful for validating MFA-resistant controls',
        ],
        website: 'https://github.com/kgretzky/evilginx2',
        color: 'from-red-500 to-orange-500',
      },
      {
        name: 'Zphisher',
        description:
          'A social engineering toolkit often referenced in labs for understanding phishing mechanics and defensive detection patterns.',
        features: [
          'Prebuilt simulation templates for testing',
          'Awareness training scenario support',
          'Defensive telemetry validation in lab setups',
          'Useful for incident response tabletop exercises',
        ],
        website: 'https://github.com/htr-tech/zphisher',
        color: 'from-purple-500 to-pink-500',
      },
      {
        name: 'King Phisher',
        description:
          'A phishing campaign toolkit used to evaluate user awareness and security controls in sanctioned assessments.',
        features: [
          'Campaign lifecycle management',
          'Credential handling simulation workflows',
          'Rich operator dashboard and campaign metrics',
          'Supports repeatable security awareness programs',
        ],
        website: 'https://github.com/rsmusllp/king-phisher',
        color: 'from-yellow-500 to-orange-500',
      },
      {
        name: 'Social-Engineer Toolkit (SET)',
        description:
          'A long-standing framework for social engineering testing in approved penetration tests and internal awareness exercises.',
        features: [
          'Multiple social engineering test vectors',
          'Campaign automation for controlled testing',
          'Payload and delivery workflow simulation',
          'Training-focused red team scenario support',
        ],
        website: 'https://github.com/trustedsec/social-engineer-toolkit',
        color: 'from-green-500 to-teal-500',
      },
    ],
  },
  {
    category: 'Network Discovery & Scanning',
    icon: 'Network',
    tools: [
      {
        name: 'Nmap',
        description:
          'The industry standard for network discovery and security auditing, used for network inventory and security scanning.',
        features: [
          'Host discovery and port scanning',
          'Service and version detection',
          'OS fingerprinting',
          'Scriptable interaction',
        ],
        website: 'https://nmap.org/',
        color: 'from-green-500 to-emerald-500',
      },
      {
        name: 'Bettercap',
        description:
          'A powerful, easily extensible and portable framework written in Go that aims to offer to security researchers.',
        features: [
          'Man-in-the-middle attacks',
          'SSL/TLS stripping',
          'Network reconnaissance',
          'Real-time traffic manipulation',
        ],
        website: 'https://www.bettercap.org/',
        color: 'from-purple-500 to-pink-500',
      },
      {
        name: 'Ettercap',
        description:
          'A comprehensive suite for man in the middle attacks with features for network and host analysis.',
        features: [
          'Live host discovery',
          'Protocol analysis',
          'Content filtering',
          'SSH and SSL attacks',
        ],
        website: 'https://www.ettercap-project.org/',
        color: 'from-red-500 to-purple-500',
      },
    ],
  },
  {
    category: 'Wireless Security',
    icon: 'Zap',
    tools: [
      {
        name: 'Aircrack-ng',
        description:
          'A complete suite of tools to assess WiFi network security focusing on monitoring, attacking, testing, and cracking.',
        features: [
          'WEP and WPA/WPA2-PSK key cracking',
          'Packet capture and injection',
          'Real-time monitoring',
          'Network discovery',
        ],
        website: 'https://www.aircrack-ng.org/',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'Kismet',
        description:
          'A wireless network and device detector, sniffer,wardriving tool, and WIDS (wireless intrusion detection) framework.',
        features: [
          'Passive wireless network discovery',
          'Device fingerprinting',
          'Traffic analysis',
          'WIDS capabilities',
        ],
        website: 'https://www.kismetwireless.net/',
        color: 'from-orange-500 to-red-500',
      },
      {
        name: 'Reaver',
        description:
          'A tool designed for offline WiFi password cracking using WPS (WiFi Protected Setup) PIN authentication.',
        features: [
          'WPS PIN brute forcing',
          'WPA/WPA2 cracking',
          'WPA/WPA2 handshake capture',
          'Offline dictionary attacks',
        ],
        website: 'https://github.com/t6x/reaver-wps-fork-t6x',
        color: 'from-yellow-500 to-red-500',
      },
    ],
  },
  {
    category: 'Reconnaissance & Intelligence',
    icon: 'Search',
    tools: [
      {
        name: 'Recon-ng',
        description:
          'A full-featured Web Reconnaissance framework written in Python that provides a powerful environment in which.',
        features: [
          'Automated reconnaissance',
          'Multiple data sources integration',
          'Custom module development',
          'Reporting capabilities',
        ],
        website: 'https://github.com/lanmaster53/recon-ng',
        color: 'from-blue-500 to-purple-500',
      },
      {
        name: 'theHarvester',
        description:
          'A tool designed to be used in the early stages of a penetration test or red team assessment.',
        features: [
          'Email enumeration',
          'Subdomain discovery',
          'People names gathering',
          'Social media footprinting',
        ],
        website: 'https://github.com/laramies/theHarvester',
        color: 'from-green-500 to-teal-500',
      },
      {
        name: 'WebSploit',
        description:
          'An open-source framework designed to help the security researcher to identify and exploit vulnerabilities.',
        features: [
          'Network exploitation',
          'Web application testing',
          'Social engineering attacks',
          'Vulnerability scanning',
        ],
        website: 'https://websploit.org/',
        color: 'from-purple-500 to-pink-500',
      },
      {
        name: 'WAFW00F',
        description:
          'A tool written in Python which is used to identify and fingerprint Web Application Firewall (WAF) products.',
        features: [
          'WAF detection and fingerprinting',
          'Bypass technique testing',
          'Response analysis',
          'Security testing enhancement',
        ],
        website: 'https://github.com/EnableSecurity/wafw00f',
        color: 'from-red-500 to-orange-500',
      },
    ],
  },
];
