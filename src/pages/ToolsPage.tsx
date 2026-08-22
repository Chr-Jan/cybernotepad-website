import { Wrench } from 'lucide-react';
import { rfTools } from '../data/toolsData';

const iconMap = {
  Wrench,
} as const;

const categoryToId = (category: string) =>
  `category-${category.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`;

export function ToolsPage() {
  const toolsCategories = rfTools;

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-cyan-500/10 via-transparent to-transparent"></div>
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-cyan-400/10 blur-3xl"></div>
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-background-surface-1 rounded-xl border border-cyan-500/30 shadow-glow-md">
                <Wrench className="w-12 h-12 text-cyan-400" />
              </div>
            </div>
            <h1 className="font-display text-hero font-bold text-text-primary mb-6 leading-tight">
              RF
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400"> Tools</span>
            </h1>
            <p className="text-body-lg text-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto">
              A focused collection of radio-frequency software and SDR utilities for analysis, experimentation, and wireless protocol research.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-background-surface-1 text-text-tertiary text-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                Tools first, references elsewhere
              </div>
            </div>

            <div className="mt-10">
              <p className="text-sm font-medium tracking-wide uppercase text-text-tertiary mb-4">Jump to category</p>
              <div className="flex flex-wrap justify-center gap-3">
                {toolsCategories.map((category) => (
                  <a
                    key={category.category}
                    href={`#${categoryToId(category.category)}`}
                    className="px-3 py-1.5 rounded-md border border-white/10 bg-background-surface-1 text-text-secondary text-sm hover:text-cyan-400 hover:border-cyan-500/40 transition-all duration-250"
                  >
                    {category.category}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          {toolsCategories.map((category, categoryIndex) => {
            const IconComponent = iconMap[category.icon];
            return (
              <div id={categoryToId(category.category)} key={categoryIndex} className="mb-16 scroll-mt-24">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-background-surface-1 rounded-lg border border-white/10">
                    <IconComponent className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h2 className="font-display text-h2 font-semibold text-text-primary">
                    {category.category}
                  </h2>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                  {category.items.map((tool, toolIndex) => (
                    <div key={toolIndex} className="bg-background-surface-1 rounded-xl border border-white/10 p-6 hover:border-cyan-500/30 transition-all duration-300 group">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <h3 className="font-display text-xl font-semibold text-text-primary group-hover:text-cyan-400 transition-colors duration-250 mb-2">
                            {tool.name}
                          </h3>
                          <div className="flex items-center gap-2 mb-3">
                            <span className="text-xs px-2 py-1 bg-cyan-500/20 text-cyan-400 rounded">
                              {tool.difficulty}
                            </span>
                          </div>
                        </div>
                        <a
                          href={tool.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-cyan-400 hover:text-cyan-300 transition-colors duration-250 text-sm font-medium"
                        >
                          Visit →
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
                              <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0"></div>
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
    </div>
  );
}