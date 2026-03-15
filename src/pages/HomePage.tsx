// ============================================================================
// HOMEPAGE COMPONENT
// ============================================================================
// Main landing page component for the hacker blog that displays:
// - Hero section with search functionality
// - Featured post showcase (when not searching)
// - Grid of filtered/searchable blog articles
// ============================================================================

import { useMemo, useState } from 'react';
import { homePosts } from '../data/homeData';
import { BlogCard } from '../components/BlogCard';
import { Search, Terminal } from 'lucide-react';

export function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const normalizedQuery = searchQuery.trim().toLowerCase();

  // Keep newest posts first.
  const sortedPosts = useMemo(
    () => [...homePosts].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()),
    []
  );

  const filteredPosts = useMemo(() => {
    if (!normalizedQuery) return sortedPosts;

    return sortedPosts.filter(post => {
      return (
        post.title.toLowerCase().includes(normalizedQuery) ||
        post.excerpt.toLowerCase().includes(normalizedQuery) ||
        post.content.toLowerCase().includes(normalizedQuery) ||
        post.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))
      );
    });
  }, [sortedPosts, normalizedQuery]);

  const hasSearch = normalizedQuery.length > 0;
  const featuredPost = !hasSearch ? filteredPosts[0] : null;
  const recentPosts = !hasSearch ? filteredPosts.slice(1) : filteredPosts;

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/10 to-transparent"></div>
        
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-background-surface-1 rounded-xl border border-accent-primary/30 shadow-glow-md">
                <Terminal className="w-12 h-12 text-accent-primary" />
              </div>
            </div>
            
            <h1 className="font-display text-hero font-bold text-text-primary mb-6 leading-tight">
              Security Through
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary"> Knowledge</span>
            </h1>
            
            <p className="text-body-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Explore in-depth articles on web security, cryptography, network protocols, and modern hacking techniques. Learn to build secure, resilient systems.
            </p>
            
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-tertiary" />

                <input
                  type="text"
                  placeholder="Search articles..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-background-surface-1 border border-white/10 rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:border-accent-primary focus:shadow-glow-sm transition-all duration-250"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {!hasSearch && featuredPost && (
        <section className="px-6 mb-16">
          <div className="container mx-auto max-w-5xl">
            <BlogCard post={featuredPost} featured />
          </div>
        </section>
      )}

      <section className="px-6 pb-24">
        <div className="container mx-auto">
          <h2 className="font-display text-h2 font-semibold text-text-primary mb-8">
            {hasSearch ? `Search Results for "${searchQuery}"` : 'More Articles'}
          </h2>

          {recentPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : hasSearch ? (
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-text-tertiary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-2">No articles found</h3>
              <p className="text-text-secondary">Try searching for terms like "kali", "nmap", "metasploit", "ssh", "security"</p>
            </div>
          ) : null}
        </div>
      </section>
    </div>
  );
}
