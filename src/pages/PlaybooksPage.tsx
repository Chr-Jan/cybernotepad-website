import { Link } from 'react-router-dom';
import { ShieldAlert, ClipboardList, CheckCircle2, ExternalLink, Calendar, Clock3, Sparkles, ArrowRight, Layers3 } from 'lucide-react';
import { playbooks } from '../data/playbooksData';

const sortedPlaybooks = [...playbooks].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });

export function PlaybooksPage() {
  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent"></div>
        <div className="absolute -top-24 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full bg-emerald-400/10 blur-3xl"></div>
        <div className="absolute top-24 right-16 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"></div>
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-background-surface-1/90 backdrop-blur rounded-2xl border border-emerald-500/30 shadow-glow-md shadow-emerald-500/10">
                <ClipboardList className="w-12 h-12 text-emerald-400" />
              </div>
            </div>
            <h1 className="font-display text-hero font-bold text-text-primary mb-6 leading-tight">
              SOC
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-cyan-400"> Playbooks</span>
            </h1>
            <p className="text-body-lg text-text-secondary leading-relaxed mb-8 max-w-3xl mx-auto">
              A focused hub for operational runbooks and step-by-step procedures. Use these as working checklists during investigations and incident response.
            </p>

            <div className="flex flex-wrap justify-center gap-3 mb-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-background-surface-1 text-text-tertiary text-sm">
                <ShieldAlert className="w-4 h-4 text-emerald-400" />
                Built for SOC analysts, IR teams, and blue-team operations
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-background-surface-1 text-text-tertiary text-sm">
                <Sparkles className="w-4 h-4 text-cyan-400" />
                Operational checklists, not long-form blog posts
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
              <div className="rounded-2xl border border-white/10 bg-background-surface-1/80 backdrop-blur p-4 text-left shadow-md shadow-black/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                    <Layers3 className="w-5 h-5 text-emerald-400" />
                  </div>
                  <span className="text-sm font-semibold text-text-primary">Focused scope</span>
                </div>
                <p className="text-sm text-text-tertiary leading-relaxed">Short, repeatable playbooks for incident handling and response tasks.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-background-surface-1/80 backdrop-blur p-4 text-left shadow-md shadow-black/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-cyan-500/10 border border-cyan-500/20">
                    <Clock3 className="w-5 h-5 text-cyan-400" />
                  </div>
                  <span className="text-sm font-semibold text-text-primary">Fast to use</span>
                </div>
                <p className="text-sm text-text-tertiary leading-relaxed">Designed for quick triage during live investigations and escalations.</p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-background-surface-1/80 backdrop-blur p-4 text-left shadow-md shadow-black/10">
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-lg bg-amber-500/10 border border-amber-500/20">
                    <CheckCircle2 className="w-5 h-5 text-amber-400" />
                  </div>
                  <span className="text-sm font-semibold text-text-primary">Free tooling</span>
                </div>
                <p className="text-sm text-text-tertiary leading-relaxed">Only public, free sources are used for analysis and reference.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <div className="mb-8 flex items-center gap-3">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <h2 className="font-display text-h2 font-semibold text-text-primary">Available Playbooks</h2>
          </div>

          <div className="grid grid-cols-1 gap-6">
            {sortedPlaybooks.map((playbook) => (
              <article
                key={playbook.id}
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-background-surface-1/90 backdrop-blur p-8 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-1 hover:border-emerald-500/30"
              >
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-cyan-500/5 opacity-0 transition-opacity duration-300 group-hover:opacity-100"></div>
                <div className="relative z-10 flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                  <div className="max-w-3xl">
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                        {playbook.status}
                      </span>
                      <span className="text-text-tertiary text-sm">Operational Guide</span>
                      <span className="inline-flex items-center gap-1 text-text-tertiary text-sm">
                        <Calendar className="w-4 h-4" />
                        {formatDate(playbook.date)}
                      </span>
                      <span className="inline-flex items-center gap-1 text-text-tertiary text-sm">
                        <Clock3 className="w-4 h-4" />
                        {playbook.readTime}
                      </span>
                    </div>

                    <h3 className="font-display text-2xl md:text-3xl font-semibold text-text-primary mb-3 group-hover:text-emerald-400 transition-colors duration-250">
                      {playbook.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed mb-6 max-w-2xl">
                      {playbook.excerpt}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {playbook.tags.map((item) => (
                        <span
                          key={item}
                          className="px-3 py-1 rounded-full text-xs bg-background-surface-2 text-text-secondary border border-white/5 hover:border-emerald-500/30 transition-colors duration-250"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col gap-4 lg:w-72">
                    <div className="rounded-xl border border-white/10 bg-background-surface-2/70 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-text-tertiary mb-3">What this covers</p>
                      <div className="space-y-2 text-sm text-text-secondary">
                        <p>Phishing triage</p>
                        <p>Header analysis and IOC collection</p>
                        <p>Containment and recovery steps</p>
                      </div>
                    </div>

                    <Link
                      to={`/playbooks/${playbook.slug}`}
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-gradient-to-r from-emerald-500 to-cyan-500 text-text-inverse font-semibold shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/30 hover:from-emerald-400 hover:to-cyan-400 transition-all duration-250 whitespace-nowrap"
                    >
                      Open Playbook
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}