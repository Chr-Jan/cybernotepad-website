import { GraduationCap, Trophy, Code, Play, BookOpen, Users } from 'lucide-react';
import {
  learningPlatforms,
  learningCertifications,
  learningPathPhases,
} from '../data/learningData';

const iconMap = {
  Play,
  BookOpen,
  Trophy,
  Code,
} as const;

const categoryToId = (category: string) =>
  `category-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;

export function LearningPage() {
  const platforms = learningPlatforms;
  const certifications = learningCertifications;
  const learningPath = learningPathPhases;

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

            <div className="mt-10">
              <p className="text-sm font-medium tracking-wide uppercase text-text-tertiary mb-4">Jump to category</p>
              <div className="flex flex-wrap justify-center gap-3">
                {platforms.map((category) => (
                  <a
                    key={category.category}
                    href={`#${categoryToId(category.category)}`}
                    className="px-3 py-1.5 rounded-md border border-white/10 bg-background-surface-1 text-text-secondary text-sm hover:text-emerald-400 hover:border-emerald-500/40 transition-all duration-250"
                  >
                    {category.category}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Learning Platforms */}
      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          {platforms.map((category, categoryIndex) => {
            const IconComponent = iconMap[category.icon];
            return (
              <div id={categoryToId(category.category)} key={categoryIndex} className="mb-16 scroll-mt-24">
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
