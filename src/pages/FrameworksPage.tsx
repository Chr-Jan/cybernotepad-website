/**
 * Displays a curated overview of widely used cybersecurity frameworks.
 *
 * Purpose:
 * - Help readers quickly understand key framework categories and use cases.
 * - Provide practical references to official resources for deeper learning.
 *
 * Functionality:
 * - Groups frameworks by domain (intelligence, risk management, application security, and operations).
 * - Renders framework highlights, concise details, and external links.
 * - Uses visual icons and gradient accents to improve scanability.
 */
import { Book, Target, Shield, Zap, CheckCircle, Users } from 'lucide-react';
import {
  securityFrameworks,
  frameworkImplementationGuide,
} from '../data/frameworksData';

const iconMap = {
  Target,
  Shield,
  Book,
  Zap,
  CheckCircle,
} as const;

export function FrameworksPage() {
  const frameworks = securityFrameworks;
  const implementationGuide = frameworkImplementationGuide;

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
            const IconComponent = iconMap[category.icon];
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
