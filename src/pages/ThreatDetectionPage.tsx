import { Shield, Activity, Eye, Database, BarChart3, AlertTriangle, Target } from 'lucide-react';

export function ThreatDetectionPage() {
  const tools = [
    {
      category: "SIEM & Security Monitoring",
      icon: Shield,
      tools: [
        {
          name: "Wazuh",
          description: "An open-source security platform for threat detection, integrity monitoring, incident response, and compliance.",
          features: [
            "Host-based intrusion detection (HIDS)",
            "Log analysis and file integrity monitoring",
            "SIEM and compliance reporting integration",
            "Real-time correlation and alerting"
          ],
          website: "https://wazuh.com/",
          color: "from-blue-500 to-cyan-500"
        },
        {
          name: "ELK Stack (Elasticsearch, Logstash, Kibana)",
          description: "A powerful open-source solution for search, analytics, and visualization of security events and logs.",
          features: [
            "Distributed search and analytics engine",
            "Data processing and transformation pipelines",
            "Interactive dashboards and visualizations",
            "Real-time monitoring and alerting"
          ],
          website: "https://www.elastic.co/elastic-stack/",
          color: "from-yellow-500 to-orange-500"
        },
        {
          name: "Graylog",
          description: "A powerful log management platform for collecting, storing, and analyzing machine data from any source.",
          features: [
            "Centralized log management",
            "Real-time search and analysis",
            "Alerting and notification systems",
            "Dashboard creation and sharing"
          ],
          website: "https://www.graylog.org/",
          color: "from-purple-500 to-pink-500"
        },
        {
          name: "OpenSearch",
          description: "A distributed search and analytics suite derived from Elasticsearch 7.10.2 and Kibana 7.10.2.",
          features: [
            "Search and analytics engine",
            "Data visualization with OpenSearch Dashboards",
            "Real-time data ingestion",
            "Security and performance monitoring"
          ],
          website: "https://opensearch.org/",
          color: "from-green-500 to-emerald-500"
        },
        {
          name: "SIEMonster",
          description: "An open-source SIEM solution that brings together the best of open source security tools under one umbrella.",
          features: [
            "Complete SIEM platform",
            "Integration with multiple security tools",
            "Threat intelligence feeds",
            "Automated incident response"
          ],
          website: "https://siemonster.com/",
          color: "from-red-500 to-orange-500"
        },
        {
          name: "SELKS",
          description: "A free and open source IDS/IPS/NSM platform with Suricata at its core. Built with a focus on easy installation and maintenance.",
          features: [
            "IDS/IPS/NSM capabilities",
            "Scirius threat intelligence management",
            "Evebox web interface",
            "Suricata rule management"
          ],
          website: "https://www.stamus-networks.com/open-source/selks/",
          color: "from-blue-500 to-purple-500"
        }
      ]
    },
    {
      category: "Threat Hunting & Analysis",
      icon: Eye,
      tools: [
        {
          name: "Security Onion",
          description: "A free and open platform for threat hunting, enterprise security monitoring, and log management.",
          features: [
            "Zeek, Suricata, Wazuh integration",
            "Full-packet capture and traffic inspection",
            "SOC dashboard and alerting system",
            "Hunting and investigation capabilities"
          ],
          website: "https://securityonion.net/",
          color: "from-orange-500 to-red-500"
        },
        {
          name: "HELK (Hunting ELK)",
          description: "A multi-purpose hunting platform heavily inspired by Chris Bisett's Lab Builder project.",
          features: [
            "Elasticsearch, Logstash, Kibana integration",
            "Apache Spark integration",
            "Jupyter notebooks for hunting",
            "Pre-configured hunting concepts"
          ],
          website: "https://github.com/Cyb3rWard0g/HELK",
          color: "from-purple-500 to-blue-500"
        },
        {
          name: "YARA",
          description: "A pattern-matching tool used for malware classification and identification based on string, binary, or regex rules.",
          features: [
            "Custom rule creation for threat hunting",
            "Malware signature and IOC detection",
            "Integrated into security tools",
            "High-performance pattern matching"
          ],
          website: "https://virustotal.github.io/yara/",
          color: "from-green-500 to-blue-500"
        },
        {
          name: "Velociraptor",
          description: "A unique digital forensics and incident response tool (DFIR) that focuses on hunting, detection and forensics.",
          features: [
            "Volatile forensics collection",
            "File and registry monitoring",
            "Event timeline analysis",
            "Scalable endpoint monitoring"
          ],
          website: "https://docs.velociraptor.app/",
          color: "from-red-500 to-purple-500"
        }
      ]
    },
    {
      category: "Network Detection & Monitoring",
      icon: Activity,
      tools: [
        {
          name: "Suricata",
          description: "An advanced open-source engine that provides intrusion detection (IDS), intrusion prevention (IPS), and network security monitoring.",
          features: [
            "Deep packet inspection (DPI)",
            "High-performance multi-threading",
            "Snort rule compatibility",
            "Real-time threat detection"
          ],
          website: "https://suricata.io/",
          color: "from-blue-500 to-cyan-500"
        },
        {
          name: "Snort",
          description: "The world's most widely deployed network intrusion detection and prevention technology.",
          features: [
            "Rule-based network intrusion detection",
            "Real-time traffic analysis",
            "Protocol analysis",
            "Content pattern matching"
          ],
          website: "https://www.snort.org/",
          color: "from-yellow-500 to-orange-500"
        },
        {
          name: "Zeek (formerly Bro)",
          description: "A powerful network security monitoring tool that analyzes network traffic and generates logs for security monitoring.",
          features: [
            "Network traffic analysis",
            "Protocol detection and parsing",
            "Security monitoring and logging",
            "Custom script development"
          ],
          website: "https://www.zeek.org/",
          color: "from-purple-500 to-pink-500"
        },
        {
          name: "Arkime (formerly Moloch)",
          description: "A full packet capturing, indexing, and searching system to store and retrieve network traffic.",
          features: [
            "Full packet capture and storage",
            "Real-time search and analytics",
            "Web-based interface",
            "Extensible with plugins"
          ],
          website: "https://arkime.com/",
          color: "from-green-500 to-teal-500"
        },
        {
          name: "Zedlan",
          description: "A Windows firewall log analysis tool designed to parse and analyze Windows Firewall logs.",
          features: [
            "Windows Firewall log parsing",
            "Network traffic analysis",
            "Event correlation",
            "Security monitoring dashboard"
          ],
          website: "https://sourceforge.net/projects/zedlan/",
          color: "from-red-500 to-orange-500"
        }
      ]
    },
    {
      category: "Traffic Analysis & Network Forensics",
      icon: BarChart3,
      tools: [
        {
          name: "Wireshark",
          description: "The world's most popular and widely used network protocol analyzer for troubleshooting, analysis, and development.",
          features: [
            "Deep inspection of hundreds of protocols",
            "Live capture and offline analysis",
            "Multi-platform support",
            "Rich filtering and display options"
          ],
          website: "https://www.wireshark.org/",
          color: "from-blue-500 to-purple-500"
        },
        {
          name: "Malcolm",
          description: "A powerful, easily deployable network traffic analysis tool suite for full packet capture artifacts.",
          features: [
            "Network traffic analysis",
            "Full packet capture",
            "Zeek and Suricata integration",
            "Web-based analysis interface"
          ],
          website: "https://github.com/idaholab/Malcolm",
          color: "from-orange-500 to-red-500"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent"></div>
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-background-surface-1 rounded-xl border border-blue-500/30 shadow-glow-md">
                <Target className="w-12 h-12 text-blue-500" />
              </div>
            </div>
            <h1 className="font-display text-hero font-bold text-text-primary mb-6 leading-tight">
              Threat Detection &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-500"> Analysis</span>
            </h1>
            <p className="text-body-lg text-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto">
              Comprehensive suite of defensive security tools for threat detection, incident response, and security monitoring. Master the art of defending against cyber threats.
            </p>
          </div>
        </div>
      </section>

      {/* Tools Sections */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          {tools.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-background-surface-1 rounded-lg border border-white/10">
                    <IconComponent className="w-8 h-8 text-blue-500" />
                  </div>
                  <h2 className="font-display text-h2 font-semibold text-text-primary">
                    {category.category}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="bg-background-surface-1 rounded-xl border border-white/10 p-6 hover:border-blue-500/30 transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="font-display text-xl font-semibold text-text-primary group-hover:text-blue-500 transition-colors duration-250">
                          {tool.name}
                        </h3>
                        <a 
                          href={tool.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:text-blue-400 transition-colors duration-250 text-sm font-medium"
                        >
                          Official Site →
                        </a>
                      </div>
                      
                      <p className="text-text-secondary mb-6 leading-relaxed">
                        {tool.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-text-primary mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {tool.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-text-tertiary text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className={`mt-4 h-1 bg-gradient-to-r ${tool.color} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Detection Best Practices */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-background-surface-1 rounded-xl border border-blue-500/20 p-8">
            <div className="flex items-center gap-4 mb-6">
              <AlertTriangle className="w-8 h-8 text-yellow-500" />
              <h2 className="font-display text-h2 font-semibold text-text-primary">Detection Best Practices</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">🛡️ Network Security</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Deploy IDS/IPS at network boundaries and critical segments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Implement network segmentation for better visibility</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Use full packet capture for forensic analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Monitor east-west traffic for lateral movement</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">🏢 Enterprise Security</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Implement SIEM for centralized log analysis</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Deploy EDR solutions on all endpoints</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Use threat intelligence to enhance detection</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Conduct regular threat hunting exercises</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-background-surface-1 rounded-xl border border-cyan-500/20 p-8">
            <div className="flex items-center gap-4 mb-6">
              <Database className="w-8 h-8 text-cyan-500" />
              <h2 className="font-display text-h2 font-semibold text-text-primary">Implementation Roadmap</h2>
            </div>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-text-inverse font-bold text-sm">1</div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Foundation Setup</h3>
                  <p className="text-text-tertiary">Begin with basic log collection, network monitoring, and endpoint visibility using open-source tools like Wazuh or ELK Stack.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-text-inverse font-bold text-sm">2</div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Advanced Detection</h3>
                  <p className="text-text-tertiary">Deploy specialized tools like Suricata, Zeek, and YARA for deeper network analysis and threat hunting capabilities.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-text-inverse font-bold text-sm">3</div>
                <div>
                  <h3 className="text-lg font-semibold text-text-primary mb-2">Integration & Automation</h3>
                  <p className="text-text-tertiary">Integrate threat intelligence feeds, automate incident response workflows, and establish continuous monitoring practices.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
