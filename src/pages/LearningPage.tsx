import { GraduationCap, Trophy, Code, Play, BookOpen, Users } from 'lucide-react';

export function LearningPage() {
  const platforms = [
    {
      category: "Interactive Labs & Training",
      icon: Play,
      items: [
        {
          name: "TryHackMe",
          description: "Interactive cybersecurity training platform with hands-on labs and guided challenges for all skill levels.",
          features: [
            "Guided learning paths and challenges",
            "Real-world scenario simulations",
            "Progressive difficulty levels",
            "Community-driven content and discussions"
          ],
          website: "https://tryhackme.com/",
          difficulty: "Beginner to Advanced",
          color: "from-green-500 to-emerald-500"
        },
        {
          name: "Hack The Box",
          description: "A virtual lab platform for penetration testing, CTF-style hacking, and cybersecurity skill development.",
          features: [
            "Real-world penetration testing scenarios",
            "Pwn and Forensics challenges",
            "Advanced Persistent Threat (APT) simulations",
            "Professional certification tracks"
          ],
          website: "https://www.hackthebox.eu/",
          difficulty: "Intermediate to Expert",
          color: "from-blue-500 to-purple-500"
        },
        {
          name: "RangeForce",
          description: "Interactive cybersecurity training platform focusing on hands-on skills development and real-time feedback.",
          features: [
            "Adaptive learning technology",
            "Skills-based training modules",
            "Performance analytics and reporting",
            "Integration with existing security tools"
          ],
          website: "https://www.rangeforce.com/",
          difficulty: "All Levels",
          color: "from-orange-500 to-red-500"
        },
        {
          name: "DetectionLab",
          description: "Automated lab environment for learning detection engineering, incident response, and threat hunting.",
          features: [
            "Fully automated lab setup",
            "Windows event log generation",
            "Network traffic simulation",
            "Detection engineering practice"
          ],
          website: "https://github.com/clong/DetectionLab",
          difficulty: "Intermediate to Advanced",
          color: "from-purple-500 to-pink-500"
        }
      ]
    },
    {
      category: "Learning Blogs & Resources",
      icon: BookOpen,
      items: [
        {
          name: "SANS Internet Storm Center",
          description: "Daily blog posts from SANS ISC about ongoing threats, vulnerabilities, and unusual traffic patterns.",
          features: [
            "Real-time threat analysis and reporting",
            "Community-driven submissions and diaries",
            "Practical detection and mitigation guidance",
            "Free educational content and resources"
          ],
          website: "https://isc.sans.edu/",
          difficulty: "All Levels",
          color: "from-yellow-500 to-orange-500"
        },
        {
          name: "DFIR Report",
          description: "In-depth, narrative-style reports on digital forensics and incident response (DFIR) engagements.",
          features: [
            "Real-case breakdowns from access to impact",
            "Timeline-based analysis of attacker behavior",
            "MITRE ATT&CK technique mapping",
            "Comprehensive incident response insights"
          ],
          website: "https://thedfirreport.com/",
          difficulty: "Advanced",
          color: "from-red-500 to-pink-500"
        },
        {
          name: "Huntress Blog",
          description: "Blog from the Huntress team featuring real-world threat reports, malware breakdowns, and detection techniques.",
          features: [
            "Real-world threat analysis and reporting",
            "Malware analysis and behavior studies",
            "Initial access method documentation",
            "Security awareness and detection tips"
          ],
          website: "https://www.huntress.com/blog",
          difficulty: "Intermediate to Advanced",
          color: "from-blue-500 to-cyan-500"
        },
        {
          name: "Malware Traffic Analysis",
          description: "A hands-on blog focused on analyzing PCAP files and documenting infection chains observed in the wild.",
          features: [
            "Real-world malware traffic samples",
            "PCAP files with accompanying analysis",
            "Threat behavior and IOC learning",
            "Network forensics techniques"
          ],
          website: "https://www.malware-traffic-analysis.net/",
          difficulty: "Intermediate to Advanced",
          color: "from-indigo-500 to-purple-500"
        },
        {
          name: "Red Canary Blog",
          description: "Focused on detection engineering, threat research, and security operations insights and methodologies.",
          features: [
            "Threat detection and response strategies",
            "Behavioral analytics and TTPs",
            "MITRE ATT&CK framework alignment",
            "Security operations best practices"
          ],
          website: "https://redcanary.com/blog/",
          difficulty: "Advanced",
          color: "from-green-500 to-teal-500"
        }
      ]
    },
    {
      category: "Vulnerability & CVE Management",
      icon: Trophy,
      items: [
        {
          name: "CVE (Common Vulnerabilities and Exposures)",
          description: "A dictionary of publicly disclosed cybersecurity vulnerabilities and exposures with standardized identifiers.",
          features: [
            "Standardized vulnerability identifiers",
            "Detailed technical descriptions",
            "CVSS (Common Vulnerability Scoring System) ratings",
            "Reference links to patches and fixes"
          ],
          website: "https://www.cve.org/",
          difficulty: "All Levels",
          color: "from-red-500 to-orange-500"
        },
        {
          name: "NVD (National Vulnerability Database)",
          description: "The U.S. government repository of standards-based vulnerability management data for cybersecurity professionals.",
          features: [
            "Comprehensive vulnerability database",
            "CVSS scoring and analysis",
            "CWE (Common Weakness Enumeration) mapping",
            "Searchable API and bulk downloads"
          ],
          website: "https://nvd.nist.gov/",
          difficulty: "All Levels",
          color: "from-blue-500 to-indigo-500"
        },
        {
          name: "Exploit Database",
          description: "An archive of public exploits and corresponding vulnerable software developed for penetration testing purposes.",
          features: [
            "Comprehensive exploit collection",
            "Searchable vulnerability database",
            "Exploit code samples and PoCs",
            "Google Hacking Database (GHDB)"
          ],
          website: "https://www.exploit-db.com/",
          difficulty: "Intermediate to Advanced",
          color: "from-purple-500 to-pink-500"
        },
        {
          name: "VulnDB",
          description: "Risk Based Security's vulnerability database providing detailed information about security vulnerabilities.",
          features: [
            "Detailed vulnerability information",
            "Risk scoring and prioritization",
            "Threat intelligence integration",
            "Historical vulnerability data"
          ],
          website: "https://vulndb.cyberriskanalytics.com/",
          difficulty: "Advanced",
          color: "from-orange-500 to-red-500"
        }
      ]
    },
    {
      category: "Web Utilities & Analysis Tools",
      icon: Code,
      items: [
        {
          name: "Base64 Encode/Decode",
          description: "Tools for encoding and decoding Base64 strings for data transformation and analysis.",
          features: [
            "Online Base64 encoding and decoding",
            "File to Base64 conversion",
            "URL-safe Base64 variants",
            "Batch processing capabilities"
          ],
          website: "https://www.base64encode.org/",
          difficulty: "Beginner",
          color: "from-green-500 to-blue-500"
        },
        {
          name: "CrackStation",
          description: "A powerful password hash cracking utility for security testing and hash identification.",
          features: [
            "Hash type identification and cracking",
            "Dictionary attack capabilities",
            "Custom wordlist support",
            "Performance-optimized algorithms"
          ],
          website: "https://crackstation.net/",
          difficulty: "Intermediate to Advanced",
          color: "from-yellow-500 to-red-500"
        },
        {
          name: "SecurityHeaders",
          description: "An online tool to check HTTP response headers for security best practices and compliance.",
          features: [
            "HTTP security header analysis",
            "Compliance scoring and recommendations",
            "SSL/TLS configuration checking",
            "Detailed security guidance"
          ],
          website: "https://securityheaders.com/",
          difficulty: "Beginner to Intermediate",
          color: "from-blue-500 to-green-500"
        }
      ]
    }
  ];

  const certifications = [
    {
      level: "Entry Level",
      certs: [
        { name: "CompTIA Security+", focus: "Foundational security knowledge" },
        { name: "EC-Council CEH", focus: "Ethical hacking fundamentals" },
        { name: "(ISC)² SSCP", focus: "Systems security practitioner" }
      ]
    },
    {
      level: "Intermediate",
      certs: [
        { name: "EC-Council LPT", focus: "Licensed penetration tester" },
        { name: "GIAC GCIH", focus: "Incident handling and response" },
        { name: "SANS GSEC", focus: "Security essentials" },
        { name: "OSCP", focus: "Offensive security penetration testing" }
      ]
    },
    {
      level: "Advanced",
      certs: [
        { name: "SANS GCTI", focus: "Cyber threat intelligence" },
        { name: "GIAC GNFA", focus: "Network forensics analysis" },
        { name: "SANS GREM", focus: "Reverse engineering malware" },
        { name: "CISSP", focus: "Information systems security" }
      ]
    }
  ];

  const learningPath = [
    {
      phase: "Foundation Building",
      duration: "2-4 months",
      resources: ["CompTIA Security+", "TryHackMe Complete Beginner Path", "SANS SEC101"],
      skills: [
        "Basic networking concepts",
        "Operating system fundamentals",
        "Security principles and terminology",
        "Threat landscape understanding"
      ]
    },
    {
      phase: "Hands-on Practice",
      duration: "4-6 months",
      resources: ["Hack The Box Academy", "TryHackMe Advanced Paths", "RangeForce"],
      skills: [
        "Penetration testing methodologies",
        "Vulnerability assessment techniques",
        "Incident response procedures",
        "Log analysis and monitoring"
      ]
    },
    {
      phase: "Specialization",
      duration: "6-12 months",
      resources: ["DFIR Report analysis", "MITRE ATT&CK study", "DetectionLab setup"],
      skills: [
        "Advanced threat hunting",
        "Malware analysis",
        "Forensic investigation",
        "Threat intelligence gathering"
      ]
    },
    {
      phase: "Expertise & Leadership",
      duration: "12+ months",
      resources: ["Advanced certifications", "Open source contributions", "Conference speaking"],
      skills: [
        "Security architecture design",
        "Team leadership and mentoring",
        "Strategic security planning",
        "Industry thought leadership"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent"></div>
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-background-surface-1 rounded-xl border border-emerald-500/30 shadow-glow-md">
                <GraduationCap className="w-12 h-12 text-emerald-500" />
              </div>
            </div>
            <h1 className="font-display text-hero font-bold text-text-primary mb-6 leading-tight">
              Learning &
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-cyan-500"> Certifications</span>
            </h1>
            <p className="text-body-lg text-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto">
              Comprehensive learning resources, interactive labs, and certification paths to advance your cybersecurity career. Build practical skills through hands-on experience.
            </p>
          </div>
        </div>
      </section>

      {/* Learning Platforms */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          {platforms.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-background-surface-1 rounded-lg border border-white/10">
                    <IconComponent className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h2 className="font-display text-h2 font-semibold text-text-primary">
                    {category.category}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.items.map((platform, platformIndex) => (
                    <div key={platformIndex} className="bg-background-surface-1 rounded-xl border border-white/10 p-6 hover:border-emerald-500/30 transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-display text-xl font-semibold text-text-primary group-hover:text-emerald-500 transition-colors duration-250 mb-2">
                            {platform.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded">
                              {platform.difficulty}
                            </span>
                          </div>
                        </div>
                        <a 
                          href={platform.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-emerald-500 hover:text-emerald-400 transition-colors duration-250 text-sm font-medium"
                        >
                          Visit →
                        </a>
                      </div>
                      
                      <p className="text-text-secondary mb-6 leading-relaxed">
                        {platform.description}
                      </p>
                      
                      <div className="space-y-2">
                        <h4 className="text-sm font-semibold text-text-primary mb-3">Key Features:</h4>
                        <ul className="space-y-2">
                          {platform.features.map((feature, featureIndex) => (
                            <li key={featureIndex} className="flex items-start gap-3">
                              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span className="text-text-tertiary text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className={`mt-4 h-1 bg-gradient-to-r ${platform.color} rounded-full opacity-50 group-hover:opacity-100 transition-opacity duration-300`}></div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Certification Paths */}
      {/* <section className="px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-background-surface-1 rounded-xl border border-emerald-500/20 p-8">
            <div className="flex items-center gap-4 mb-8">
              <Trophy className="w-8 h-8 text-emerald-500" />
              <h2 className="font-display text-h2 font-semibold text-text-primary">Certification Roadmap</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {certifications.map((level, levelIndex) => (
                <div key={levelIndex} className="space-y-4">
                  <h3 className="text-lg font-semibold text-text-primary border-b border-white/10 pb-2">
                    {level.level}
                  </h3>
                  <div className="space-y-4">
                    {level.certs.map((cert, certIndex) => (
                      <div key={certIndex} className="p-4 bg-background-surface-1 rounded-lg border border-white/5">
                        <h4 className="font-medium text-text-primary mb-2">{cert.name}</h4>
                        <p className="text-text-tertiary text-sm">{cert.focus}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Learning Path */}
      {/* <section className="px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-background-surface-1 rounded-xl border border-cyan-500/20 p-8">
            <div className="flex items-center gap-4 mb-8">
              <Users className="w-8 h-8 text-cyan-500" />
              <h2 className="font-display text-h2 font-semibold text-text-primary">Progressive Learning Path</h2>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {learningPath.map((phase, phaseIndex) => (
                <div key={phaseIndex} className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 bg-cyan-500 rounded-full flex items-center justify-center text-text-inverse font-bold">
                      {phaseIndex + 1}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-text-primary">{phase.phase}</h3>
                      <p className="text-cyan-400 text-sm">{phase.duration}</p>
                    </div>
                  </div>
                  
                  <div className="pl-14 space-y-4">
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary mb-2 uppercase tracking-wide">Recommended Resources</h4>
                      <ul className="space-y-1">
                        {phase.resources.map((resource, resourceIndex) => (
                          <li key={resourceIndex} className="text-text-tertiary text-sm">• {resource}</li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-sm font-semibold text-text-primary mb-2 uppercase tracking-wide">Key Skills</h4>
                      <ul className="space-y-1">
                        {phase.skills.map((skill, skillIndex) => (
                          <li key={skillIndex} className="text-text-tertiary text-sm">• {skill}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                  
                  {phaseIndex < learningPath.length - 1 && (
                    <div className="lg:hidden w-0.5 h-8 bg-cyan-500/30 ml-5"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section> */}

      {/* Learning Tips */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-background-surface-1 rounded-xl border border-purple-500/20 p-8">
            <h2 className="font-display text-h2 font-semibold text-text-primary mb-8 text-center">Success Strategies</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">🎯 Learning Approach</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Practice regularly with hands-on labs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Join cybersecurity communities and forums</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Document and share your learning journey</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Contribute to open source projects</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">💡 Best Practices</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Set specific, measurable learning goals</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Balance theory with practical application</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Stay updated with latest threats and tools</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Build a portfolio of projects and certifications</span>
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
