/**
 * BlogPage Component
 * 
 * A comprehensive blog page that displays cybersecurity-related content including
 * conference experiences, meetup stories, and personal journeys. Features category-based
 * filtering and a responsive card-based layout.
 */
import { useState } from 'react';
import { Calendar, MapPin, Users, Star, MessageSquare } from 'lucide-react';

export function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const posts = [
    {
      id: 1,
      title: 'My First Black Hat Conference Experience',
      excerpt: 'Attending Black Hat 2024 was a game-changer for my cybersecurity career. Here\'s what I learned and the connections I made.',
      category: 'conferences',
      date: '2024-08-15',
      location: 'Las Vegas, NV',
      attendees: 250,
      rating: 5,
      type: 'conference'
    },
    {
      id: 2,
      title: 'Local Security Meetup: Building a Strong Community',
      excerpt: 'How we started our local cybersecurity meetup group and grew it to over 100 active members in just 6 months.',
      category: 'meetups',
      date: '2024-09-20',
      location: 'San Francisco, CA',
      attendees: 45,
      rating: 4,
      type: 'meetup'
    },
    {
      id: 3,
      title: 'Learning from Failure: My First Bug Bounty Experience',
      excerpt: 'A candid look at my early bug bounty hunting attempts, the mistakes I made, and the valuable lessons learned.',
      category: 'personal',
      date: '2024-10-05',
      location: 'Remote',
      attendees: 1,
      rating: 4,
      type: 'personal'
    },
    {
      id: 4,
      title: 'Women in Cybersecurity Networking Event',
      excerpt: 'Attending the WiCyS networking event and the importance of diversity in our security community.',
      category: 'conferences',
      date: '2024-10-22',
      location: 'Austin, TX',
      attendees: 180,
      rating: 5,
      type: 'conference'
    },
    {
      id: 5,
      title: 'Pen Testing 101: Learning from the Pros',
      excerpt: 'Mentorship session with senior penetration testers revealed the real-world application of theoretical knowledge.',
      category: 'meetups',
      date: '2024-09-10',
      location: 'Remote',
      attendees: 28,
      rating: 5,
      type: 'meetup'
    },
    {
      id: 6,
      title: 'Transitioning from Developer to Security Engineer',
      excerpt: 'My journey from software development to cybersecurity - the skills that transferred and the new ones I needed to learn.',
      category: 'personal',
      date: '2024-08-30',
      location: 'Remote',
      attendees: 1,
      rating: 5,
      type: 'personal'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Posts', count: posts.length },
    { id: 'conferences', label: 'Conferences', count: posts.filter(p => p.category === 'conferences').length },
    { id: 'meetups', label: 'Meetups', count: posts.filter(p => p.category === 'meetups').length },
    { id: 'personal', label: 'Personal', count: posts.filter(p => p.category === 'personal').length }
  ];

  const filteredPosts = selectedCategory === 'all' 
    ? posts 
    : posts.filter(post => post.category === selectedCategory);

  const getTypeIcon = (type) => {
    const icons = {
      conference: MessageSquare,
      meetup: Users,
      personal: Calendar
    };
    return icons[type] || MessageSquare;
  };

  const getTypeColor = (type) => {
    const colors = {
      conference: 'bg-blue-500/20 border-blue-500/30 text-blue-400',
      meetup: 'bg-green-500/20 border-green-500/30 text-green-400',
      personal: 'bg-purple-500/20 border-purple-500/30 text-purple-400'
    };
    return colors[type] || 'bg-gray-500/20 border-gray-500/30 text-gray-400';
  };

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/10 to-transparent"></div>
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="p-4 bg-background-surface-1 rounded-xl border border-accent-primary/30 shadow-glow-md">
                <Users className="w-12 h-12 text-accent-primary" />
              </div>
            </div>
            <h1 className="font-display text-hero font-bold text-text-primary mb-6 leading-tight">
              Security Community
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary"> Blog</span>
            </h1>
            <p className="text-body-lg text-text-secondary leading-relaxed mb-8 max-w-2xl mx-auto">
              Real experiences from cybersecurity meetups, conferences, and personal journeys. Connect with the community and learn from others' security adventures.
            </p>
          </div>
        </div>
      </section>

      <section className="px-6 mb-12">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-wrap gap-3 justify-center">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-lg border transition-all duration-250 font-medium text-sm ${
                  selectedCategory === category.id
                    ? 'bg-accent-primary/20 text-accent-primary border-accent-primary/50 shadow-glow-sm'
                    : 'bg-background-surface-1 text-text-secondary border-white/10 hover:border-accent-primary/30 hover:text-accent-primary'
                }`}
              >
                {category.label} ({category.count})
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 pb-24">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-display text-h2 font-semibold text-text-primary mb-8">
            {selectedCategory === 'all' ? 'Latest Posts' : categories.find(c => c.id === selectedCategory)?.label}
          </h2>
          
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredPosts.map((post) => {
                const IconComponent = getTypeIcon(post.type);
                return (
                  <div
                    key={post.id}
                    className="bg-background-surface-1 rounded-lg p-6 border border-white/10 hover:border-accent-primary/50 transition-all duration-250 shadow-card hover:shadow-card-hover hover:translate-y-[-2px]"
                  >
                    <div className="flex items-center gap-2 mb-4">
                      <div className={`p-2 rounded-lg border ${getTypeColor(post.type)}`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className={`px-3 py-1 rounded-md text-sm font-medium border ${getTypeColor(post.type)}`}>
                        {post.type.charAt(0).toUpperCase() + post.type.slice(1)}
                      </span>
                    </div>

                    <h3 className="font-display text-h3 font-semibold text-text-primary mb-3 group-hover:text-accent-primary transition-colors duration-250">
                      {post.title}
                    </h3>
                    
                    <p className="text-text-secondary text-body leading-relaxed mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>

                    <div className="space-y-2 text-text-tertiary text-sm">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                      </div>
                      
                      {post.location && (
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{post.location}</span>
                        </div>
                      )}
                      
                      {post.attendees > 1 && (
                        <div className="flex items-center gap-2">
                          <Users className="w-4 h-4" />
                          <span>{post.attendees} attendees</span>
                        </div>
                      )}
                      
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 text-yellow-400" />
                        <span>{post.rating}/5 rating</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="text-center py-12">
              <Users className="w-16 h-16 text-text-tertiary mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-text-primary mb-2">No posts found</h3>
              <p className="text-text-secondary">Try selecting a different category</p>
            </div>
          )}
        </div>
      </section>

      <section className="py-16 px-6 bg-background-near-black border-t border-white/10">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-display text-h2 font-semibold text-text-primary mb-6">Share Your Experience</h2>
          <p className="text-text-secondary text-body-lg leading-relaxed mb-8">
            Have you attended a security conference, participated in a meetup, or want to share your cybersecurity journey? 
            We'd love to hear your story and help others learn from your experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-accent-primary text-accent-primary-foreground rounded-lg font-medium hover:bg-accent-primary-hover transition-colors duration-250">
              Submit Your Story
            </button>
            <button className="px-6 py-3 bg-background-surface-1 text-text-primary border border-white/10 rounded-lg font-medium hover:border-accent-primary/50 transition-all duration-250">
              Join Our Meetup
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}