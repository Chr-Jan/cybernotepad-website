import { Globe, Search, Shield, Eye, Database, Map } from 'lucide-react';
import { threatIntelligenceTools } from '../data/threatIntelligenceData';

const iconMap = {
  Shield,
  Eye,
  Globe,
  Search,
  Map,
  Database,
} as const;

export function ThreatIntelligencePage() {
  const tools = threatIntelligenceTools;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/10 to-transparent"></div>
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-background-surface-1 rounded-xl border border-purple-500/30 shadow-glow-md">
                <Globe className="w-12 h-12 text-purple-500" />
              </div>
            </div>
            <h1 className="font-display text-hero font-bold text-text-primary mb-6 leading-tight">
              Threat Intelligence
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500"> & OSINT</span>
            </h1>
            <p className="text-body-lg text-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto">
              Comprehensive threat intelligence platforms and OSINT tools for gathering, analyzing, and sharing cyber threat information. Stay ahead of emerging threats.
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
                    <IconComponent className="w-8 h-8 text-purple-500" />
                  </div>
                  <h2 className="font-display text-h2 font-semibold text-text-primary">
                    {category.category}
                  </h2>
                </div>
                
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.tools.map((tool, toolIndex) => (
                    <div key={toolIndex} className="bg-background-surface-1 rounded-xl border border-white/10 p-6 hover:border-purple-500/30 transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-4">
                        <h3 className="font-display text-xl font-semibold text-text-primary group-hover:text-purple-500 transition-colors duration-250">
                          {tool.name}
                        </h3>
                        <a 
                          href={tool.website} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-purple-500 hover:text-purple-400 transition-colors duration-250 text-sm font-medium"
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
                              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
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

      {/* OSINT Best Practices */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-background-surface-1 rounded-xl border border-purple-500/20 p-8">
            <div className="flex items-center gap-4 mb-6">
              <Eye className="w-8 h-8 text-purple-500" />
              <h2 className="font-display text-h2 font-semibold text-text-primary">OSINT Ethics & Legal Considerations</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">✅ Ethical Practices</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Respect privacy and legal boundaries</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Use publicly available information only</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Obtain proper authorization for testing</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Document and report findings responsibly</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-text-primary mb-4">⚠️ Legal Warnings</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Never access private or protected data</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Understand local laws and regulations</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Avoid dark web activities without proper clearance</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                    <span className="text-text-tertiary">Protect personal and organizational data</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Intelligence Lifecycle */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-background-surface-1 rounded-xl border border-cyan-500/20 p-8">
            <div className="flex items-center gap-4 mb-6">
              <Database className="w-8 h-8 text-cyan-500" />
              <h2 className="font-display text-h2 font-semibold text-text-primary">Intelligence Lifecycle Framework</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-text-inverse font-bold text-sm">1</div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">Direction</h3>
                    <p className="text-text-tertiary text-sm">Define intelligence requirements and research questions based on organizational needs.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-text-inverse font-bold text-sm">2</div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">Collection</h3>
                    <p className="text-text-tertiary text-sm">Gather relevant data from multiple sources including OSINT tools and threat feeds.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-text-inverse font-bold text-sm">3</div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">Processing</h3>
                    <p className="text-text-tertiary text-sm">Analyze, organize, and validate collected information to remove noise and duplicates.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-text-inverse font-bold text-sm">4</div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">Analysis</h3>
                    <p className="text-text-tertiary text-sm">Perform deep analysis to identify patterns, trends, and potential threats.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-text-inverse font-bold text-sm">5</div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">Production</h3>
                    <p className="text-text-tertiary text-sm">Create actionable intelligence products for decision makers and security teams.</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center text-text-inverse font-bold text-sm">6</div>
                  <div>
                    <h3 className="text-lg font-semibold text-text-primary">Dissemination</h3>
                    <p className="text-text-tertiary text-sm">Share intelligence with relevant stakeholders through appropriate channels and formats.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
