import { useParams, Link } from 'react-router-dom';
import { blogPosts } from '../data/blogData';
import { Calendar, Clock, Tag, ArrowLeft } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <div className="min-h-screen pt-16 flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-display text-h1 font-bold text-text-primary mb-4">Post Not Found</h1>
          <Link to="/" className="text-accent-primary hover:text-accent-primary-hover">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <article className="py-12 px-6">
        <div className="container mx-auto max-w-4xl">
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors duration-250 mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:translate-x-[-4px] transition-transform duration-250" />
            <span>Back to articles</span>
          </Link>

          <div className="mb-6">
            <span className="px-4 py-2 bg-accent-primary/20 text-accent-primary rounded-lg text-sm font-medium border border-accent-primary/30">
              {post.category}
            </span>
          </div>

          <h1 className="font-display text-hero font-bold text-text-primary mb-6 leading-tight">
            {post.title}
          </h1>

          <div className="flex flex-wrap items-center gap-6 text-text-tertiary mb-8 pb-8 border-b border-white/10">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>By {post.author}</span>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-12">
            {post.tags.map(tag => (
              <span 
                key={tag}
                className="px-3 py-1.5 bg-background-surface-1 text-text-secondary rounded-md text-sm border border-white/10"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Content */}
          <div className="prose prose-invert prose-lg max-w-none">
            <ReactMarkdown
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
                h2: ({ children }) => (
                  <h2 className="font-display text-h2 font-semibold text-text-primary mt-10 mb-4">{children}</h2>
                ),
                h3: ({ children }) => (
                  <h3 className="font-display text-h3 font-semibold text-text-primary mt-8 mb-3">{children}</h3>
                ),
                p: ({ children }) => (
                  <p className="text-text-secondary text-body-lg leading-relaxed mb-6">{children}</p>
                ),
                ul: ({ children }) => (
                  <ul className="list-disc list-inside text-text-secondary text-body-lg leading-relaxed mb-6 space-y-2">{children}</ul>
                ),
                ol: ({ children }) => (
                  <ol className="list-decimal list-inside text-text-secondary text-body-lg leading-relaxed mb-6 space-y-2">{children}</ol>
                ),
                strong: ({ children }) => (
                  <strong className="text-accent-primary font-semibold">{children}</strong>
                ),
                a: ({ href, children }) => (
                  <a href={href} className="text-accent-primary hover:text-accent-primary-hover underline">{children}</a>
                ),
              }}
            >
              {post.content}
            </ReactMarkdown>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      <section className="py-16 px-6 bg-background-near-black border-t border-white/10">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-display text-h2 font-semibold text-text-primary mb-8">
            More from {post.category}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts
              .filter(p => p.category === post.category && p.id !== post.id)
              .slice(0, 2)
              .map(relatedPost => (
                <Link 
                  key={relatedPost.id}
                  to={`/post/${relatedPost.slug}`}
                  className="block group"
                >
                  <div className="bg-background-surface-1 rounded-lg p-6 border border-white/10 hover:border-accent-primary/50 transition-all duration-250">
                    <h3 className="font-display text-h3 font-semibold text-text-primary mb-3 group-hover:text-accent-primary transition-colors">
                      {relatedPost.title}
                    </h3>
                    <p className="text-text-secondary text-body line-clamp-2">
                      {relatedPost.excerpt}
                    </p>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
