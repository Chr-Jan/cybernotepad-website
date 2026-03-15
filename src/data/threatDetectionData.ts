export type ThreatDetectionIconKey = 'Shield' | 'Eye' | 'Activity' | 'BarChart3';

export interface ThreatDetectionTool {
  name: string;
  description: string;
  features: string[];
  website: string;
  color: string;
}

export interface ThreatDetectionCategory {
  category: string;
  icon: ThreatDetectionIconKey;
  tools: ThreatDetectionTool[];
}

export const threatDetectionTools: ThreatDetectionCategory[] = [
  {
    category: 'SIEM & Security Monitoring',
    icon: 'Shield',
    tools: [
      {
        name: 'Wazuh',
        description:
          'An open-source security platform for threat detection, integrity monitoring, incident response, and compliance.',
        features: [
          'Host-based intrusion detection (HIDS)',
          'Log analysis and file integrity monitoring',
          'SIEM and compliance reporting integration',
          'Real-time correlation and alerting',
        ],
        website: 'https://wazuh.com/',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'ELK Stack (Elasticsearch, Logstash, Kibana)',
        description:
          'A powerful open-source solution for search, analytics, and visualization of security events and logs.',
        features: [
          'Distributed search and analytics engine',
          'Data processing and transformation pipelines',
          'Interactive dashboards and visualizations',
          'Real-time monitoring and alerting',
        ],
        website: 'https://www.elastic.co/elastic-stack/',
        color: 'from-yellow-500 to-orange-500',
      },
      {
        name: 'Graylog',
        description:
          'A powerful log management platform for collecting, storing, and analyzing machine data from any source.',
        features: [
          'Centralized log management',
          'Real-time search and analysis',
          'Alerting and notification systems',
          'Dashboard creation and sharing',
        ],
        website: 'https://www.graylog.org/',
        color: 'from-purple-500 to-pink-500',
      },
      {
        name: 'OpenSearch',
        description:
          'A distributed search and analytics suite derived from Elasticsearch 7.10.2 and Kibana 7.10.2.',
        features: [
          'Search and analytics engine',
          'Data visualization with OpenSearch Dashboards',
          'Real-time data ingestion',
          'Security and performance monitoring',
        ],
        website: 'https://opensearch.org/',
        color: 'from-green-500 to-emerald-500',
      },
      {
        name: 'SIEMonster',
        description:
          'An open-source SIEM solution that brings together the best of open source security tools under one umbrella.',
        features: [
          'Complete SIEM platform',
          'Integration with multiple security tools',
          'Threat intelligence feeds',
          'Automated incident response',
        ],
        website: 'https://siemonster.com/',
        color: 'from-red-500 to-orange-500',
      },
      {
        name: 'SELKS',
        description:
          'A free and open source IDS/IPS/NSM platform with Suricata at its core. Built with a focus on easy installation and maintenance.',
        features: [
          'IDS/IPS/NSM capabilities',
          'Scirius threat intelligence management',
          'Evebox web interface',
          'Suricata rule management',
        ],
        website: 'https://www.stamus-networks.com/open-source/selks/',
        color: 'from-blue-500 to-purple-500',
      },
    ],
  },
  {
    category: 'Threat Hunting & Analysis',
    icon: 'Eye',
    tools: [
      {
        name: 'Security Onion',
        description:
          'A free and open platform for threat hunting, enterprise security monitoring, and log management.',
        features: [
          'Zeek, Suricata, Wazuh integration',
          'Full-packet capture and traffic inspection',
          'SOC dashboard and alerting system',
          'Hunting and investigation capabilities',
        ],
        website: 'https://securityonion.net/',
        color: 'from-orange-500 to-red-500',
      },
      {
        name: 'HELK (Hunting ELK)',
        description: "A multi-purpose hunting platform heavily inspired by Chris Bisett's Lab Builder project.",
        features: [
          'Elasticsearch, Logstash, Kibana integration',
          'Apache Spark integration',
          'Jupyter notebooks for hunting',
          'Pre-configured hunting concepts',
        ],
        website: 'https://github.com/Cyb3rWard0g/HELK',
        color: 'from-purple-500 to-blue-500',
      },
      {
        name: 'YARA',
        description:
          'A pattern-matching tool used for malware classification and identification based on string, binary, or regex rules.',
        features: [
          'Custom rule creation for threat hunting',
          'Malware signature and IOC detection',
          'Integrated into security tools',
          'High-performance pattern matching',
        ],
        website: 'https://virustotal.github.io/yara/',
        color: 'from-green-500 to-blue-500',
      },
      {
        name: 'Velociraptor',
        description:
          'A unique digital forensics and incident response tool (DFIR) that focuses on hunting, detection and forensics.',
        features: [
          'Volatile forensics collection',
          'File and registry monitoring',
          'Event timeline analysis',
          'Scalable endpoint monitoring',
        ],
        website: 'https://docs.velociraptor.app/',
        color: 'from-red-500 to-purple-500',
      },
    ],
  },
  {
    category: 'Network Detection & Monitoring',
    icon: 'Activity',
    tools: [
      {
        name: 'Suricata',
        description:
          'An advanced open-source engine that provides intrusion detection (IDS), intrusion prevention (IPS), and network security monitoring.',
        features: [
          'Deep packet inspection (DPI)',
          'High-performance multi-threading',
          'Snort rule compatibility',
          'Real-time threat detection',
        ],
        website: 'https://suricata.io/',
        color: 'from-blue-500 to-cyan-500',
      },
      {
        name: 'Snort',
        description:
          "The world's most widely deployed network intrusion detection and prevention technology.",
        features: [
          'Rule-based network intrusion detection',
          'Real-time traffic analysis',
          'Protocol analysis',
          'Content pattern matching',
        ],
        website: 'https://www.snort.org/',
        color: 'from-yellow-500 to-orange-500',
      },
      {
        name: 'Zeek (formerly Bro)',
        description:
          'A powerful network security monitoring tool that analyzes network traffic and generates logs for security monitoring.',
        features: [
          'Network traffic analysis',
          'Protocol detection and parsing',
          'Security monitoring and logging',
          'Custom script development',
        ],
        website: 'https://www.zeek.org/',
        color: 'from-purple-500 to-pink-500',
      },
      {
        name: 'Arkime (formerly Moloch)',
        description:
          'A full packet capturing, indexing, and searching system to store and retrieve network traffic.',
        features: [
          'Full packet capture and storage',
          'Real-time search and analytics',
          'Web-based interface',
          'Extensible with plugins',
        ],
        website: 'https://arkime.com/',
        color: 'from-green-500 to-teal-500',
      },
      {
        name: 'Zedlan',
        description:
          'A Windows firewall log analysis tool designed to parse and analyze Windows Firewall logs.',
        features: [
          'Windows Firewall log parsing',
          'Network traffic analysis',
          'Event correlation',
          'Security monitoring dashboard',
        ],
        website: 'https://sourceforge.net/projects/zedlan/',
        color: 'from-red-500 to-orange-500',
      },
    ],
  },
  {
    category: 'Traffic Analysis & Network Forensics',
    icon: 'BarChart3',
    tools: [
      {
        name: 'Wireshark',
        description:
          "The world's most popular and widely used network protocol analyzer for troubleshooting, analysis, and development.",
        features: [
          'Deep inspection of hundreds of protocols',
          'Live capture and offline analysis',
          'Multi-platform support',
          'Rich filtering and display options',
        ],
        website: 'https://www.wireshark.org/',
        color: 'from-blue-500 to-purple-500',
      },
      {
        name: 'Malcolm',
        description:
          'A powerful, easily deployable network traffic analysis tool suite for full packet capture artifacts.',
        features: [
          'Network traffic analysis',
          'Full packet capture',
          'Zeek and Suricata integration',
          'Web-based analysis interface',
        ],
        website: 'https://github.com/idaholab/Malcolm',
        color: 'from-orange-500 to-red-500',
      },
    ],
  },
];
