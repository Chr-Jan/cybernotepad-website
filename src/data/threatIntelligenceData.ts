export type ThreatIntelligenceIconKey =
  | 'Shield'
  | 'Eye'
  | 'Globe'
  | 'Search'
  | 'Map'
  | 'Database';

export interface ThreatIntelligenceTool {
  name: string;
  description: string;
  features: string[];
  website: string;
  color: string;
}

export interface ThreatIntelligenceCategory {
  category: string;
  icon: ThreatIntelligenceIconKey;
  tools: ThreatIntelligenceTool[];
}

export const threatIntelligenceTools: ThreatIntelligenceCategory[] = [
  {
    category: 'Commercial Threat Intelligence Platforms',
    icon: 'Shield',
    tools: [
      {
        name: 'MISP (Malware Information Sharing Platform)',
        description:
          'An open-source threat intelligence platform that enables sharing, storing, and correlating indicators of compromise and threat data.',
        features: [
          'Threat sharing and collaboration',
          'IOC (Indicator of Compromise) management',
          'Advanced taxonomy and sharing groups',
          'Automated threat intelligence ingestion',
        ],
        website: 'https://www.misp-project.org/',
        color: 'from-blue-500 to-purple-500',
      },
      {
        name: 'AlienVault OTX (Open Threat Exchange)',
        description:
          'A free threat intelligence platform that provides real-time indicators of compromise and threat intelligence.',
        features: [
          'Real-time threat indicators',
          'Community-driven threat sharing',
          'API access for automation',
          'Pulse management and sharing',
        ],
        website: 'https://otx.alienvault.com/',
        color: 'from-red-500 to-orange-500',
      },
      {
        name: 'VirusTotal',
        description:
          'A free online service that analyzes suspicious files, URLs, domains, and IP addresses for malware detection.',
        features: [
          'Multi-engine antivirus scanning',
          'File and URL analysis',
          'Community reputation and comments',
          'Enterprise API and threat feeds',
        ],
        website: 'https://www.virustotal.com/',
        color: 'from-green-500 to-emerald-500',
      },
      {
        name: 'Shodan',
        description:
          'A search engine for internet-connected devices and services that allows users to discover exposed assets and vulnerable systems.',
        features: [
          'Internet-wide device discovery',
          'Vulnerable system identification',
          'IoT device mapping',
          'API access for automated scanning',
        ],
        website: 'https://www.shodan.io/',
        color: 'from-yellow-500 to-orange-500',
      },
      {
        name: 'GreyNoise',
        description:
          'A threat intelligence service that classifies internet-wide scanners and background noise to distinguish them from targeted threats.',
        features: [
          'Noise filtering for security alerts',
          'Benign IP identification',
          'Threat actor tracking',
          'API integration capabilities',
        ],
        website: 'https://www.greynoise.io/',
        color: 'from-purple-500 to-pink-500',
      },
      {
        name: 'AbuseIPDB',
        description:
          'A public database where internet service providers and organizations can report abusive IPs and share this information.',
        features: [
          'IP abuse reporting',
          'Community-driven blacklist',
          'RESTful API access',
          'Historical abuse data',
        ],
        website: 'https://www.abuseipdb.com/',
        color: 'from-red-500 to-pink-500',
      },
    ],
  },
  {
    category: 'Dark Web OSINT Tools',
    icon: 'Eye',
    tools: [
      {
        name: 'TorBot',
        description:
          'An open source web crawler OSINT tool used for gathering dark web intelligence and analysis.',
        features: [
          'Dark web data collection',
          'Tor network crawling',
          'Malware intelligence gathering',
          'Data export and analysis',
        ],
        website: 'https://github.com/DedSecInside/TorBot',
        color: 'from-gray-600 to-gray-800',
      },
      {
        name: 'Ahmia',
        description:
          'A dark web search engine service that focuses on providing access to hidden services and content on the Tor network.',
        features: [
          'Tor hidden service search',
          'Tor network indexing',
          'Dark web content discovery',
          'No JavaScript requirement',
        ],
        website: 'https://ahmia.fi/',
        color: 'from-gray-700 to-gray-900',
      },
      {
        name: 'OnionSearch',
        description:
          'A Python library that allows you to query multiple search engines in search of tor hidden services.',
        features: [
          'Multi-search engine support',
          'Tor hidden service discovery',
          'Bulk search capabilities',
          'JSON output format',
        ],
        website: 'https://github.com/megadose/onionsearch',
        color: 'from-gray-500 to-gray-700',
      },
      {
        name: 'Katana',
        description:
          'A modern crawler with dark web support that automatically collects data from different sites and sources.',
        features: [
          'Automated data collection',
          'Dark web site crawling',
          'Multi-format data export',
          'Configurable crawling rules',
        ],
        website: 'https://github.com/adnane-X-tec/katana',
        color: 'from-gray-600 to-black',
      },
      {
        name: 'TorCrawl',
        description:
          'A Python script to search and crawl .onion links from the Tor network with the ability to save data in local files.',
        features: [
          'Tor network crawling',
          'Hidden service discovery',
          'Data collection and storage',
          'Configurable output formats',
        ],
        website: 'https://github.com/MegaManSec/TorCrawl',
        color: 'from-gray-700 to-black',
      },
    ],
  },
  {
    category: 'Social Media OSINT',
    icon: 'Globe',
    tools: [
      {
        name: 'Sherlock',
        description:
          'A command-line tool that uses Python to search for usernames across social media platforms and websites.',
        features: [
          'Cross-platform username search',
          'Over 200+ supported sites',
          'Rapid username verification',
          'CSV and JSON export',
        ],
        website: 'https://github.com/sherlock-project/sherlock',
        color: 'from-blue-500 to-teal-500',
      },
      {
        name: 'Social Analyzer',
        description:
          'A CLI and Web API tool that allows you to analyze and find social media accounts with over 1000+ site profiles.',
        features: [
          'Multi-platform analysis',
          'Profile verification',
          'Username and email analysis',
          'Web API interface',
        ],
        website: 'https://github.com/sowdust/socialanalyzer',
        color: 'from-purple-500 to-blue-500',
      },
    ],
  },
  {
    category: 'Email & Domain Intelligence',
    icon: 'Search',
    tools: [
      {
        name: 'Hunter.io',
        description:
          'A professional email finding and verification tool that helps businesses find professional email addresses and verify deliverability.',
        features: [
          'Email finding and verification',
          'Domain search capabilities',
          'Contact database access',
          'API integration',
        ],
        website: 'https://hunter.io/',
        color: 'from-green-500 to-emerald-500',
      },
      {
        name: 'Have I Been Pwned',
        description:
          'A website that checks if an email address or password has been compromised in a data breach.',
        features: [
          'Breach monitoring',
          'Password checking',
          'Email notification service',
          'API for developers',
        ],
        website: 'https://haveibeenpwned.com/',
        color: 'from-orange-500 to-red-500',
      },
      {
        name: 'DeHashed',
        description:
          'A search engine indexing compromised credentials, emails, domains, and other sensitive information from data breaches.',
        features: [
          'Breached data search',
          'API access',
          'Advanced filtering',
          'Custom breach alerts',
        ],
        website: 'https://www.dehashed.com/',
        color: 'from-red-500 to-pink-500',
      },
    ],
  },
  {
    category: 'Web Intelligence & Discovery',
    icon: 'Map',
    tools: [
      {
        name: 'Censys',
        description:
          'A platform that allows you to analyze and explore billions of internet-wide scan results and web resources.',
        features: [
          'Internet-wide scanning',
          'Website analysis',
          'SSL/TLS certificate data',
          'Historical data access',
        ],
        website: 'https://censys.io/',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'Netcraft',
        description:
          'A company providing internet research, analysis, and data for online threat intelligence and fraud detection.',
        features: [
          'SSL certificate analysis',
          'Website technology detection',
          'Malware site reports',
          'Phishing site database',
        ],
        website: 'https://www.netcraft.com/',
        color: 'from-yellow-500 to-orange-500',
      },
      {
        name: 'crt.sh',
        description:
          'A certificate transparency search tool that allows searching for certificates issued by publicly trusted CAs.',
        features: [
          'Certificate transparency search',
          'SSL/TLS certificate discovery',
          'Historical certificate data',
          'DNS discovery',
        ],
        website: 'https://crt.sh/',
        color: 'from-green-500 to-blue-500',
      },
      {
        name: 'GHDB (Google Hacking Database)',
        description:
          'A searchable database of Google dorks used for finding sensitive information on websites and web applications.',
        features: [
          'Google dork collection',
          'Exploit search capabilities',
          'Sensitive data discovery',
          'Vulnerability identification',
        ],
        website: 'https://www.exploit-db.com/google-hacking-database',
        color: 'from-purple-500 to-pink-500',
      },
    ],
  },
  {
    category: 'Threat Feeds & Intelligence',
    icon: 'Database',
    tools: [
      {
        name: 'OpenPhish',
        description:
          'A free feed of phishing URLs continuously updated with new phishing web sites discovered by proprietary algorithms.',
        features: [
          'Real-time phishing URLs',
          'Commercial and government data',
          'API access for integration',
          'Comprehensive threat analysis',
        ],
        website: 'https://openphish.com/',
        color: 'from-red-500 to-orange-500',
      },
      {
        name: 'Ransomware.live',
        description:
          'A comprehensive database of ransomware attacks, victim organizations, and leaked data from major ransomware groups.',
        features: [
          'Ransomware attack tracking',
          'Victim organization database',
          'Data leak monitoring',
          'Threat actor profiling',
        ],
        website: 'https://ransomware.live/',
        color: 'from-red-600 to-black',
      },
      {
        name: 'FortiGuard',
        description:
          'Comprehensive threat intelligence and security service by Fortinet providing real-time protection and global attack visibility.',
        features: [
          'Real-time threat intelligence',
          'Global threat map',
          'AI-driven analytics',
          'Automated threat response',
        ],
        website: 'https://www.fortinet.com/threat-intelligence',
        color: 'from-blue-600 to-purple-600',
      },
    ],
  },
];
