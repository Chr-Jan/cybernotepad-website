import { Shield, Network, Search, Target, Code, Zap } from 'lucide-react';

export function PenetrationTestingPage() {
  const tools = [
    {
      category: "Offensive Security Distributions",
      icon: Shield,
      tools: [
        {
          name: "Kali Linux",
          description: "The premier offensive security distribution used for penetration testing, vulnerability assessment, and ethical hacking.",
          features: [
            "Red team operations",
            "Exploit development and testing", 
            "Wireless and web application testing",
            "Over 600 security tools pre-installed"
          ],
          website: "https://www.kali.org/",
          color: "from-red-500 to-blue-500"
        },
        {
          name: "Kali Purple",
          description: "A defensive security distribution focused on Blue Team operations such as threat hunting, incident response, and SOC workflows.",
          features: [
            "Incident response tooling",
            "SOC-friendly interface and configuration",
            "Blue team analytics and visibility stack",
            "Integrated defensive security tools"
          ],
          website: "https://www.kali.org/tools/kali-purple/",
          color: "from-blue-500 to-purple-500"
        }
      ]
    },
    {
      category: "Web Application Security",
      icon: Code,
      tools: [
        {
          name: "Metasploit Framework",
          description: "A comprehensive penetration testing platform that enables security professionals to discover, exploit, and validate vulnerabilities.",
          features: [
            "600+ exploits and payloads",
            "Post-exploitation modules",
            "Automated exploitation workflows",
            "Custom payload generation"
          ],
          website: "https://www.metasploit.com/",
          color: "from-red-500 to-orange-500"
        },
        {
          name: "Burp Suite Community Edition",
          description: "A popular integrated platform for web application security testing with essential tools for manual web security testing.",
          features: [
            "Intercepting proxy for HTTP/S traffic",
            "Manual request repeater and inspector",
            "Basic spidering and analysis",
            "Extensible via BApps"
          ],
          website: "https://portswigger.net/burp/community",
          color: "from-blue-500 to-cyan-500"
        },
        {
          name: "OWASP ZAP (Zed Attack Proxy)",
          description: "A free, open-source web application security scanner maintained by the OWASP Foundation.",
          features: [
            "Automated and manual web vulnerability scanning",
            "Intercepting proxy for traffic inspection",
            "Active and passive scan modes",
            "CI/CD integration and API support"
          ],
          website: "https://www.zaproxy.org/",
          color: "from-yellow-500 to-orange-500"
        },
        {
          name: "sqlmap",
          description: "An open-source penetration testing tool that automates the process of detecting and exploiting SQL injection flaws.",
          features: [
            "Automated SQL injection detection",
            "Multiple database support",
            "Dumping database contents",
            "Backdoor identification"
          ],
          website: "https://sqlmap.org/",
          color: "from-green-500 to-blue-500"
        }
      ]
    },
    {
      category: "Network Discovery & Scanning",
      icon: Network,
      tools: [
        {
          name: "Nmap",
          description: "The industry standard for network discovery and security auditing, used for network inventory and security scanning.",
          features: [
            "Host discovery and port scanning",
            "Service and version detection",
            "OS fingerprinting",
            "Scriptable interaction"
          ],
          website: "https://nmap.org/",
          color: "from-green-500 to-emerald-500"
        },
        {
          name: "Bettercap",
          description: "A powerful, easily extensible and portable framework written in Go that aims to offer to security researchers.",
          features: [
            "Man-in-the-middle attacks",
            "SSL/TLS stripping",
            "Network reconnaissance",
            "Real-time traffic manipulation"
          ],
          website: "https://www.bettercap.org/",
          color: "from-purple-500 to-pink-500"
        },
        {
          name: "Ettercap",
          description: "A comprehensive suite for man in the middle attacks with features for network and host analysis.",
          features: [
            "Live host discovery",
            "Protocol analysis",
            "Content filtering",
            "SSH and SSL attacks"
          ],
          website: "https://www.ettercap-project.org/",
          color: "from-red-500 to-purple-500"
        }
      ]
    },
    {
      category: "Wireless Security",
      icon: Zap,
      tools: [
        {
          name: "Aircrack-ng",
          description: "A complete suite of tools to assess WiFi network security focusing on monitoring, attacking, testing, and cracking.",
          features: [
            "WEP and WPA/WPA2-PSK key cracking",
            "Packet capture and injection",
            "Real-time monitoring",
            "Network discovery"
          ],
          website: "https://www.aircrack-ng.org/",
          color: "from-blue-500 to-cyan-500"
        },
        {
          name: "Kismet",
          description: "A wireless network and device detector, sniffer,wardriving tool, and WIDS (wireless intrusion detection) framework.",
          features: [
            "Passive wireless network discovery",
            "Device fingerprinting",
            "Traffic analysis",
            "WIDS capabilities"
          ],
          website: "https://www.kismetwireless.net/",
          color: "from-orange-500 to-red-500"
        },
        {
          name: "Reaver",
          description: "A tool designed for offline WiFi password cracking using WPS (WiFi Protected Setup) PIN authentication.",
          features: [
            "WPS PIN brute forcing",
            "WPA/WPA2 cracking",
            "WPA/WPA2 handshake capture",
            "Offline dictionary attacks"
          ],
          website: "https://github.com/t6x/reaver-wps-fork-t6x",
          color: "from-yellow-500 to-red-500"
        }
      ]
    },
    {
      category: "Reconnaissance & Intelligence",
      icon: Search,
      tools: [
        {
          name: "Recon-ng",
          description: "A full-featured Web Reconnaissance framework written in Python that provides a powerful environment in which.",
          features: [
            "Automated reconnaissance",
            "Multiple data sources integration",
            "Custom module development",
            "Reporting capabilities"
          ],
          website: "https://github.com/lanmaster53/recon-ng",
          color: "from-blue-500 to-purple-500"
        },
        {
          name: "theHarvester",
          description: "A tool designed to be used in the early stages of a penetration test or red team assessment.",
          features: [
            "Email enumeration",
            "Subdomain discovery",
            "People names gathering",
            "Social media footprinting"
          ],
          website: "https://github.com/laramies/theHarvester",
          color: "from-green-500 to-teal-500"
        },
        {
          name: "WebSploit",
          description: "An open-source framework designed to help the security researcher to identify and exploit vulnerabilities.",
          features: [
            "Network exploitation",
            "Web application testing",
            "Social engineering attacks",
            "Vulnerability scanning"
          ],
          website: "https://websploit.org/",
          color: "from-purple-500 to-pink-500"
        },
        {
          name: "WAFW00F",
          description: "A tool written in Python which is used to identify and fingerprint Web Application Firewall (WAF) products.",
          features: [
            "WAF detection and fingerprinting",
            "Bypass technique testing",
            "Response analysis",
            "Security testing enhancement"
          ],
          website: "https://github.com/EnableSecurity/wafw00f",
          color: "from-red-500 to-orange-500"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent"></div>
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-background-surface-1 rounded-xl border border-red-500/30 shadow-glow-md">
                <Target className="w-12 h-12 text-red-500" />
              </div>
            </div>
            <h1 className="font-display text-hero font-bold text-text-primary mb-6 leading-tight">
              Penetration Testing
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500"> Tools</span>
            </h1>
            <p className="text-body-lg text-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto">
              Comprehensive collection of offensive security tools and frameworks for ethical hacking, penetration testing, and vulnerability assessment. Master the tools used by security professionals worldwide.
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
                    <IconComponent className="w-8 h-8 text-red-500" />
                  </div>
                  <h2 className="font-display text-h2 font-semibold text-text-primary">
                    {category.category}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="bg-background-surface-1 rounded-xl border border-white/10 p-6 hover:border-red-500/30 transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="font-display text-xl font-semibold text-text-primary group-hover:text-red-500 transition-colors duration-250">
                          {tool.name}
                        </h3>
                        <a 
                          href={tool.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-red-500 hover:text-red-400 transition-colors duration-250 text-sm font-medium"
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
                              <div className="w-2 h-2 bg-red-500 rounded-full mt-2 flex-shrink-0"></div>
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

      {/* Usage Guidelines */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-background-surface-1 rounded-xl border border-orange-500/20 p-8">
            <h2 className="font-display text-h2 font-semibold text-text-primary mb-6">Ethical Usage Guidelines</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">✅ Always Allowed</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Testing your own systems with written authorization</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Authorized penetration testing engagements</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Educational purposes in controlled lab environments</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Security research on your own infrastructure</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">❌ Never Allowed</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Unauthorized access to third-party systems</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Disrupting production systems or services</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Malicious activities or cybercrime</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Testing without proper authorization</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
