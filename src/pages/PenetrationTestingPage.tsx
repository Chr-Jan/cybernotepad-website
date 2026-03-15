import { Shield, Network, Search, Code, Zap, Key } from 'lucide-react';
import { penetrationTestingTools } from '../data/penetrationTestingData';

const iconMap = {
  Shield,
  Code,
  Network,
  Zap,
  Search,
  Key,
} as const;

export function PenetrationTestingPage() {
  const tools = penetrationTestingTools;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-red-500/10 to-transparent"></div>
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-background-surface-1 rounded-xl border border-red-500/30 shadow-glow-md">
                <Shield className="w-12 h-12 text-red-500" />
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
            const IconComponent = iconMap[category.icon];
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
