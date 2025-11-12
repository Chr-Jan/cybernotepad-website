// ============================================================================
// HOMEPAGE COMPONENT
// ============================================================================
// Main landing page component for the hacker blog that displays:
// - Hero section with search functionality
// - Featured post showcase (when not searching)
// - Grid of filtered/searchable blog articles
// ============================================================================

import { useState } from 'react';
import { blogPosts } from '../data/blogData';
import { BlogCard } from '../components/BlogCard';
import { Search, Terminal } from 'lucide-react';

export function HomePage() {
  // ============================================================================
  // STATE MANAGEMENT
  // ============================================================================
  // Manages the search query state that drives the filtering and search functionality
  // This state is used to filter blog posts and update the UI accordingly
  const [searchQuery, setSearchQuery] = useState('');

  // ============================================================================
  // SEARCH LOGIC & DATA PROCESSING
  // ============================================================================
  // Filters blog posts based on the current search query
  // Search functionality checks across multiple fields:
  // - Post title
  // - Post excerpt
  // - Post content
  // - Post tags
  // The search is case-insensitive and matches partial terms
  const filteredPosts = blogPosts.filter(post => {
    const query = searchQuery.toLowerCase();
    const matchesSearch = post.title.toLowerCase().includes(query) ||
                         post.excerpt.toLowerCase().includes(query) ||
                         post.content.toLowerCase().includes(query) ||
                         post.tags.some(tag => tag.toLowerCase().includes(query));
    return matchesSearch;
  });

  // ============================================================================
  // DATA FLOW & SECTION MANAGEMENT
  // ============================================================================
  // featuredPost: The first post (index 0) is designated as the featured post
  // recentPosts: All filtered posts except the first one (used in the grid)
  // This ensures the featured post appears separately at the top
  const featuredPost = blogPosts[0];
  const recentPosts = filteredPosts.slice(1);

  return (
    <div className="min-h-screen pt-16">
      {/* ============================================================================
           HERO SECTION - Introduction & Search Functionality
           ============================================================================
           Main landing section that serves as the entry point for visitors
           Contains:
           - Brand identity (Terminal icon, title, description)
           - Search functionality for filtering articles
           - Responsive design with centered content layout
      */}
      <section className="relative py-24 px-6 overflow-hidden">
        {/* Background gradient effect for visual appeal */}
        <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/10 to-transparent"></div>
        
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            {/* Brand Identity Section */}
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-background-surface-1 rounded-xl border border-accent-primary/30 shadow-glow-md">
                <Terminal className="w-12 h-12 text-accent-primary" />
              </div>
            </div>
            
            {/* Main Heading with Gradient Text Effect */}
            <h1 className="font-display text-hero font-bold text-text-primary mb-6 leading-tight">
              Security Through
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary"> Knowledge</span>
            </h1>
            
            {/* Descriptive Subtitle */}
            <p className="text-body-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Explore in-depth articles on web security, cryptography, network protocols, and modern hacking techniques. Learn to build secure, resilient systems.
            </p>
            
            {/* Search Bar - Primary User Interaction */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                {/* Search icon positioned inside input */}
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-text-tertiary" />
                
                {/* Search input field with state management
                    Controlled component that updates searchQuery state
                    Triggers real-time filtering of blog posts */}
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

      {/* ============================================================================
           FEATURED POST SECTION
           ============================================================================
           Special showcase section for the most important/highlighted article
           Only displayed when NOT actively searching (searchQuery is empty)
           Provides a larger, more prominent display for the featured content
      */}
      {!searchQuery && (
        <section className="px-6 mb-16">
          <div className="container mx-auto max-w-5xl">
            <BlogCard post={featuredPost} featured />
          </div>
        </section>
      )}

      {/* ============================================================================
           POSTS GRID SECTION - Article Listing & Search Results
           ============================================================================
           Dynamic section that adapts based on search state:
           - When searching: Shows filtered results with search query in title
           - When not searching: Shows recent articles
           - Handles empty states when no matches found
           - Responsive grid layout (1/2/3 columns based on screen size)
      */}
      <section className="px-6 pb-24">
        <div className="container mx-auto">
          {/* Section Title - Dynamic based on search state */}
          <h2 className="font-display text-h2 font-semibold text-text-primary mb-8">
            {searchQuery ? `Search Results for "${searchQuery}"` : 'Latest Articles'}
          </h2>
          
          {/* Conditional rendering based on results availability */}
          {recentPosts.length > 0 ? (
            /* Grid Layout for Blog Cards
               Responsive design:
               - 1 column on mobile
               - 2 columns on medium screens (md)
               - 3 columns on large screens (lg)
               - 6px gap between cards */
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {recentPosts.map(post => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : searchQuery ? (
            /* No Results State
               Displayed when search yields no matches
               Provides helpful search suggestions to guide users */
            <div className="text-center py-12">
              <Search className="w-16 h-16 text-text-tertiary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-2">No articles found</h3>
              <p className="text-text-secondary">Try searching for terms like "kali", "nmap", "metasploit", "ssh", "security"</p>
            </div>
          ) : null /* Render nothing when no search query and no posts */ }
        </div>
      </section>
    </div>
  );
}
