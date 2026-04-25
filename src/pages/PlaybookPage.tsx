import { useParams, Link } from 'react-router-dom';
import { playbooks } from '../data/playbooksData';
import { Calendar, Clock, Tag, ArrowLeft, ChevronDown } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { useState } from 'react';

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });

const extractHeadings = (markdown: string) => {
  const lines = markdown.split('\n');
  const headings: { text: string; id: string }[] = [];
  const seen = new Set<string>();

  lines.forEach(line => {
    if (line.startsWith('## ')) {
      const text = line.replace(/^## /, '').trim();
      let id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
      
      // Handle duplicates
      if (seen.has(id)) {
        let counter = 1;
        while (seen.has(`${id}-${counter}`)) counter++;
        id = `${id}-${counter}`;
      }
      seen.add(id);
      headings.push({ text, id });
    }
  });

  return headings;
};

export function PlaybookPage() {
  const { slug } = useParams();
  const playbook = playbooks.find(item => item.slug === slug);
  const bodyContent = playbook
    ? playbook.content.replace(/^# .*?(\r?\n)+/, '')
    : '';
  const headings = playbook ? extractHeadings(bodyContent) : [];
  const [navOpen, setNavOpen] = useState(false);

  if (!playbook) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-h1 font-bold text-text-primary mb-4">Playbook Not Found</h1>
          <Link to="/playbooks" className="text-accent-primary hover:text-accent-primary-hover">
            Return to Playbooks
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16 relative">
      <div className="absolute top-0 left-0 right-0 h-[32rem] bg-gradient-to-b from-emerald-500/10 via-transparent to-transparent pointer-events-none"></div>
      <div className="absolute -top-20 left-1/3 h-64 w-64 rounded-full bg-emerald-400/10 blur-3xl pointer-events-none"></div>
      <div className="absolute top-40 right-16 h-56 w-56 rounded-full bg-cyan-400/10 blur-3xl pointer-events-none"></div>

      <article className="py-12 px-6 relative z-10">
        <div className="container mx-auto max-w-8xl">
          <Link
            to="/playbooks"
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors duration-250 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:translate-x-[-4px] transition-transform duration-250" />
            <span>Back to playbooks</span>
          </Link>

          <div className="mb-10 max-w-4xl">
            <div className="flex flex-wrap items-center gap-3 mb-5">
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                {playbook.status}
              </span>
              <span className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wide bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                {playbook.category}
              </span>
            </div>

            <h1 className="font-display text-hero font-bold text-text-primary mb-6 leading-tight">
              {playbook.title}
            </h1>

            <p className="text-body-lg text-text-secondary leading-relaxed max-w-3xl mb-8">
              {playbook.excerpt}
            </p>

            <div className="flex flex-wrap items-center gap-5 text-text-tertiary mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                <span>{formatDate(playbook.date)}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>{playbook.readTime}</span>
              </div>
              <div className="flex items-center gap-2">
                <Tag className="w-4 h-4" />
                <span>By {playbook.author}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {playbook.tags.map(tag => (
                <span
                  key={tag}
                  className="px-3 py-1.5 bg-background-surface-2 text-text-secondary rounded-md text-sm border border-white/10 hover:border-emerald-500/30 transition-colors duration-250"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {headings.length > 0 && (
            <div className="mb-8 max-w-4xl">
              <button
                onClick={() => setNavOpen(!navOpen)}
                className="w-full bg-background-surface-2/50 border border-white/10 rounded-2xl p-4 backdrop-blur-sm hover:bg-background-surface-2/70 transition-colors duration-250 flex items-center justify-between group"
              >
                <h2 className="text-sm font-semibold uppercase tracking-wide text-emerald-400">Quick Navigation</h2>
                <ChevronDown className={`w-4 h-4 text-emerald-400 transition-transform duration-300 ${navOpen ? 'rotate-180' : ''}`} />
              </button>
              {navOpen && (
                <div className="mt-2 bg-background-surface-2/50 border border-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <ul className="space-y-2">
                    {headings.map(heading => (
                      <li key={heading.id}>
                        <a 
                          href={`#${heading.id}`}
                          className="inline-flex items-center gap-2 text-accent-primary hover:text-accent-primary-hover underline decoration-emerald-400/50 hover:decoration-emerald-400 underline-offset-2 transition-all duration-250 text-sm"
                        >
                          {heading.text}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}

          <div className="prose prose-invert prose-lg max-w-4xl overflow-hidden rounded-3xl border border-white/10 bg-background-surface-1/85 backdrop-blur-xl p-8 md:p-10 shadow-xl shadow-black/10">
            <ReactMarkdown
              remarkPlugins={[remarkGfm]}
              components={{
                code({ inline, className, children, ...props }: any) {
                  const match = /language-(\w+)/.exec(className || '');
                  return !inline && match ? (
                    <div className="my-6 rounded-lg overflow-hidden border border-white/10">
                      <SyntaxHighlighter
                        style={vscDarkPlus}
                        language={match[1]}
                        PreTag="div"
                        customStyle={{
                          margin: 0,
                          padding: '1.5rem',
                          background: '#0a0a0a',
                          fontSize: '14px',
                        }}
                        {...props}
                      >
                        {String(children).replace(/\n$/, '')}
                      </SyntaxHighlighter>
                    </div>
                  ) : (
                    <code className="px-2 py-1 bg-background-surface-1 text-accent-secondary rounded font-mono text-sm border border-white/10" {...props}>
                      {children}
                    </code>
                  );
                },
                h1: ({ children }) => (
                  <h1 className="font-display text-h1 font-bold text-text-primary mt-12 mb-6">{children}</h1>
                ),
                h2: ({ children }) => {
                  const text = String(children).trim();
                  const id = text.toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                  return (
                    <h2 
                      id={id}
                      className="font-display text-h2 font-semibold text-text-primary mt-12 mb-5 scroll-mt-24 pb-3 relative"
                    >
                      {children}
                      <span className="absolute left-0 bottom-0 h-px w-20 bg-gradient-to-r from-emerald-400 to-cyan-400"></span>
                    </h2>
                  );
                },
                h3: ({ children }) => (
                  <h3 className="font-display text-h3 font-semibold mt-8 mb-3 text-text-primary">
                    {children}
                  </h3>
                ),
                p: ({ children }) => (
                  <p className="text-text-secondary text-body-lg leading-relaxed mb-5">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="my-6 list-disc list-outside pl-6 space-y-2 text-text-secondary text-body-lg leading-relaxed marker:text-emerald-400">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="my-6 list-decimal list-outside pl-6 space-y-2 text-text-secondary text-body-lg leading-relaxed marker:text-emerald-400">{children}</ol>
                ),
                li: ({ children }) => (
                  <li className="[&>p]:mb-0 [&>p]:inline [&>ul]:mt-2 [&>ol]:mt-2">
                    {children}
                  </li>
                ),
                a: ({ href, children }) => (
                  <a href={href} className="text-accent-primary hover:text-accent-primary-hover underline">{children}</a>
                ),
                blockquote: ({ children }) => (
                  <blockquote className="border-l-4 border-emerald-400/60 pl-5 py-2 my-6 text-text-secondary italic bg-transparent">
                    {children}
                  </blockquote>
                ),
                hr: () => <hr className="my-10 border-white/10" />,
              }}
            >
              {bodyContent}
            </ReactMarkdown>
          </div>
        </div>
      </article>
    </div>
  );
}