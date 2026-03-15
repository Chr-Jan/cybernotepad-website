import { Shield, Activity, Eye, Database, BarChart3, AlertTriangle, Target } from 'lucide-react';
import { threatDetectionTools } from '../data/threatDetectionData';

const iconMap = {
  Shield,
  Eye,
  Activity,
  BarChart3,
} as const;

export function ThreatDetectionPage() {
  const tools = threatDetectionTools;

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
            const IconComponent = iconMap[category.icon];
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
