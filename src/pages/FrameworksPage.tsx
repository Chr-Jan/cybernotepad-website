import { Book, Target, Shield, Zap, CheckCircle, Users } from 'lucide-react';

export function FrameworksPage() {
  const frameworks = [
    {
      category: "Threat Intelligence & Attack Frameworks",
      icon: Target,
      items: [
        {
          name: "MITRE ATT&CK Framework",
          description: "A globally-accessible knowledge base of adversary tactics and techniques based on real-world observations.",
          details: [
            "Enterprise, Mobile, and Industrial Control Systems matrices",
            "Tactics, Techniques, and Procedures (TTPs) mapping",
            "Adversary emulation and red team planning",
            "Detection engineering and threat hunting guidance"
          ],
          website: "https://attack.mitre.org/",
          color: "from-red-500 to-orange-500"
        },
        {
          name: "Cyber Kill Chain",
          description: "A model that defines the phases of a cyber attack from reconnaissance to data exfiltration.",
          details: [
            "Reconnaissance: Intelligence gathering",
            "Weaponization and Delivery: Attack preparation",
            "Exploitation and Installation: Gaining access",
            "Command & Control: Maintaining access",
            "Actions on Objectives: Achieving goals"
          ],
          website: "https://www.lockheedmartin.com/en-us/capabilities/cyber/cyber-kill-chain.html",
          color: "from-blue-500 to-purple-500"
        }
      ]
    },
    {
      category: "Cybersecurity Risk Management",
      icon: Shield,
      items: [
        {
          name: "NIST Cybersecurity Framework (CSF)",
          description: "A voluntary framework consisting of standards, guidelines, and best practices to manage cybersecurity-related risk.",
          details: [
            "Identify: Asset and risk assessment",
            "Protect: Security control implementation",
            "Detect: Monitoring and detection capabilities",
            "Respond: Incident response planning",
            "Recover: Business continuity and recovery"
          ],
          website: "https://www.nist.gov/cyberframework",
          color: "from-blue-500 to-cyan-500"
        },
        {
          name: "CIS Controls",
          description: "A prioritized set of actions to protect organizations and data from known cyber attack vectors.",
          details: [
            "Basic controls (1-6): Foundational security hygiene",
            "Foundational controls (7-16): Technical safeguards",
            "Organizational controls (17-20): Operational procedures",
            "Implementation groups (IG1, IG2, IG3) for scaling"
          ],
          website: "https://www.cisecurity.org/controls/",
          color: "from-green-500 to-emerald-500"
        }
      ]
    },
    {
      category: "Application Security Frameworks",
      icon: Book,
      items: [
        {
          name: "OWASP (Open Web Application Security Project)",
          description: "A non-profit organization that works to improve the security of software through open standards and community collaboration.",
          details: [
            "OWASP Top 10 Web Application Security Risks",
            "OWASP ASVS (Application Security Verification Standard)",
            "OWASP Testing Guide and Code Review Guide",
            "Software Assurance Maturity Model (SAMM)"
          ],
          website: "https://owasp.org/",
          color: "from-yellow-500 to-orange-500"
        },
        {
          name: "SABSA Framework",
          description: "A framework for the development and implementation of information security architectures.",
          details: [
            "Sherwood Applied Business Security Architecture",
            "Security strategy alignment with business",
            "Enterprise-wide security architecture",
            "Policy, process, and control development"
          ],
          website: "https://sabsa-institute.org/",
          color: "from-purple-500 to-pink-500"
        }
      ]
    },
    {
      category: "Advanced Security Models",
      icon: Zap,
      items: [
        {
          name: "Zero Trust Security",
          description: "A security concept centered on the belief that organizations should not automatically trust anything inside or outside its perimeters.",
          details: [
            "Never trust, always verify principle",
            "Least privilege access controls",
            "Continuous authentication and authorization",
            "Microsegmentation of network resources"
          ],
          website: "https://www.nist.gov/publications/zero-trust-architecture",
          color: "from-red-500 to-pink-500"
        },
        {
          name: "DORA Metrics",
          description: "DevOps Research and Assessment metrics that measure software delivery performance and operational excellence.",
          details: [
            "Deployment Frequency: How often changes are deployed",
            "Lead Time for Changes: Time from commit to production",
            "Mean Time to Recovery (MTTR): Recovery time from incidents",
            "Change Failure Rate: Percentage of changes that cause failures"
          ],
          website: "https://dora.dev/",
          color: "from-blue-500 to-teal-500"
        },
        {
          name: "Karkarian Hexad Framework",
          description: "A user motivation framework for gamification design, applicable to security awareness and training.",
          details: [
            "Philanthropists: Motivated by helping others",
            "Socializers: Motivated by interacting with people",
            "Achievers: Motivated by mastering skills",
            "Explorers: Motivated by discovering new things",
            "Collectors: Motivated by collecting and hoarding",
            "Competitionists: Motivated by being the best"
          ],
          website: "https://yukaichou.com/gamification-examples/karkarian-hexad-framework/",
          color: "from-green-500 to-yellow-500"
        }
      ]
    },
    {
      category: "Governance & Compliance",
      icon: CheckCircle,
      items: [
        {
          name: "Cloud Security Alliance (CSA)",
          description: "An organization focused on promoting best practices for providing security assurance within cloud computing environments.",
          details: [
            "Cloud Controls Matrix (CCM) for cloud security",
            "Security Guidance for Critical Areas of Focus",
            "Cloud Security Alliance STAR program",
            "Best practices for cloud implementation"
          ],
          website: "https://cloudsecurityalliance.org/",
          color: "from-indigo-500 to-purple-500"
        }
      ]
    }
  ];

  const implementationGuide = [
    {
      phase: "Assessment",
      description: "Evaluate current security posture and identify gaps",
      steps: [
        "Conduct comprehensive risk assessment",
        "Map current controls to framework requirements",
        "Identify priority areas for improvement",
        "Establish baseline security metrics"
      ]
    },
    {
      phase: "Planning",
      description: "Develop implementation roadmap and resource allocation",
      steps: [
        "Create detailed implementation plan",
        "Define roles and responsibilities",
        "Allocate budget and resources",
        "Set timeline and milestones"
      ]
    },
    {
      phase: "Implementation",
      description: "Execute security controls and process improvements",
      steps: [
        "Deploy technical security controls",
        "Update policies and procedures",
        "Train staff on new processes",
        "Implement monitoring and measurement"
      ]
    },
    {
      phase: "Monitoring",
      description: "Continuously assess effectiveness and adapt to changes",
      steps: [
        "Regular security assessments",
        "Key performance indicator tracking",
        "Incident response testing",
        "Framework updates and improvements"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-indigo-500/10 to-transparent"></div>
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-background-surface-1 rounded-xl border border-indigo-500/30 shadow-glow-md">
                <Book className="w-12 h-12 text-indigo-500" />
              </div>
            </div>
            <h1 className="font-display text-hero font-bold text-text-primary mb-6 leading-tight">
              Security Frameworks
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500"> & Standards</span>
            </h1>
            <p className="text-body-lg text-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto">
              Comprehensive guide to cybersecurity frameworks, industry standards, and best practices. Master the methodologies that drive modern security programs.
            </p>
          </div>
        </div>
      </section>

      {/* Framework Sections */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          {frameworks.map((category, categoryIndex) => {
            const IconComponent = category.icon;
            return (
              <div key={categoryIndex} className="mb-16">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-background-surface-1 rounded-lg border border-white/10">
                    <IconComponent className="w-8 h-8 text-indigo-500" />
                  </div>
                  <h2 className="font-display text-h2 font-semibold text-text-primary">
                    {category.category}
                  </h2>
                </div>
                
                <div className="space-y-8">
                  {category.items.map((framework, frameworkIndex) => (
                    <div key={frameworkIndex} className="bg-background-surface-1 rounded-xl border border-white/10 p-8 hover:border-indigo-500/30 transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-6">
                        <div className="flex-1">
                          <h3 className="font-display text-2xl font-semibold text-text-primary group-hover:text-indigo-500 transition-colors duration-250 mb-3">
                            {framework.name}
                          </h3>
                          <p className="text-text-secondary text-lg leading-relaxed mb-4">
                            {framework.description}
                          </p>
                        </div>
                        <a 
                          href={framework.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="ml-6 text-indigo-500 hover:text-indigo-400 transition-colors duration-250 text-sm font-medium whitespace-nowrap"
                        >
                          Official Documentation →
                        </a>
                      </div>
                      
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="text-sm font-semibold text-text-primary mb-4 uppercase tracking-wide">Key Components</h4>
                          <ul className="space-y-3">
                            {framework.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-text-tertiary">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div className="flex items-end">
                          <div className={`w-full h-2 bg-gradient-to-r ${framework.color} rounded-full opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Implementation Guide */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-background-surface-1 rounded-xl border border-indigo-500/20 p-8">
            <div className="flex items-center gap-4 mb-8">
              <Users className="w-8 h-8 text-indigo-500" />
              <h2 className="font-display text-h2 font-semibold text-text-primary">Framework Implementation Guide</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {implementationGuide.map((phase, phaseIndex) => (
                <div key={phaseIndex} className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-indigo-500 rounded-full flex items-center justify-center text-text-inverse font-bold">
                      {phaseIndex + 1}
                    </div>
                    <h3 className="text-xl font-semibold text-text-primary">{phase.phase}</h3>
                  </div>
                  <p className="text-text-secondary mb-4">{phase.description}</p>
                  <ul className="space-y-2">
                    {phase.steps.map((step, stepIndex) => (
                      <li key={stepIndex} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-text-tertiary text-sm">{step}</span>
                      </li>
                    ))}
                  </ul>
                  {phaseIndex < implementationGuide.length - 1 && (
                    <div className="hidden md:block absolute -right-4 top-5 w-8 h-0.5 bg-indigo-500/30"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Framework Comparison */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-background-surface-1 rounded-xl border border-purple-500/20 p-8">
            <h2 className="font-display text-h2 font-semibold text-text-primary mb-8 text-center">Framework Selection Matrix</h2>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="pb-4 text-text-primary font-semibold">Framework</th>
                    <th className="pb-4 text-text-primary font-semibold">Best For</th>
                    <th className="pb-4 text-text-primary font-semibold">Complexity</th>
                    <th className="pb-4 text-text-primary font-semibold">Industry Focus</th>
                  </tr>
                </thead>
                <tbody className="space-y-4">
                  <tr className="border-b border-white/5">
                    <td className="py-4 text-text-primary font-medium">NIST CSF</td>
                    <td className="py-4 text-text-tertiary">Comprehensive risk management</td>
                    <td className="py-4"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">Medium</span></td>
                    <td className="py-4 text-text-tertiary">Government, Enterprise</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 text-text-primary font-medium">MITRE ATT&CK</td>
                    <td className="py-4 text-text-tertiary">Threat intelligence & detection</td>
                    <td className="py-4"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Low</span></td>
                    <td className="py-4 text-text-tertiary">Blue Team, Threat Hunting</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 text-text-primary font-medium">CIS Controls</td>
                    <td className="py-4 text-text-tertiary">Technical security controls</td>
                    <td className="py-4"><span className="px-2 py-1 bg-green-500/20 text-green-400 rounded text-xs">Low</span></td>
                    <td className="py-4 text-text-tertiary">All Industries</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="py-4 text-text-primary font-medium">OWASP</td>
                    <td className="py-4 text-text-tertiary">Application security</td>
                    <td className="py-4"><span className="px-2 py-1 bg-yellow-500/20 text-yellow-400 rounded text-xs">Medium</span></td>
                    <td className="py-4 text-text-tertiary">Software Development</td>
                  </tr>
                  <tr>
                    <td className="py-4 text-text-primary font-medium">Zero Trust</td>
                    <td className="py-4 text-text-tertiary">Modern access control</td>
                    <td className="py-4"><span className="px-2 py-1 bg-red-500/20 text-red-400 rounded text-xs">High</span></td>
                    <td className="py-4 text-text-tertiary">Cloud, Enterprise</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-background-surface-1 rounded-xl border border-cyan-500/20 p-8">
            <div className="flex items-center gap-4 mb-6">
              <CheckCircle className="w-8 h-8 text-cyan-500" />
              <h2 className="font-display text-h2 font-semibold text-text-primary">Framework Implementation Best Practices</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">✅ Success Factors</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Start with executive leadership buy-in</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Implement in phases based on risk priority</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Train staff and establish competency</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Measure and track progress continuously</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">⚠️ Common Pitfalls</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Trying to implement everything at once</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Focusing on compliance over security</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Neglecting cultural and organizational change</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Not aligning with business objectives</span>
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
