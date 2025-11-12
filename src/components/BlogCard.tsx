import { Link } from 'react-router-dom';
import { BlogPost } from '../data/blogData';
import { Calendar, Clock, Tag } from 'lucide-react';

interface BlogCardProps {
  post: BlogPost;
  featured?: boolean;
}

export function BlogCard({ post, featured = false }: BlogCardProps) {
  if (featured) {
    return (
      <Link 
        to={`/post/${post.slug}`}
        className="block group"
      >
        <div className="bg-background-surface-1 rounded-xl p-8 border border-white/10 hover:border-accent-primary/50 transition-all duration-250 shadow-card hover:shadow-card-hover hover:translate-y-[-4px]">
          <div className="flex items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-accent-primary/20 text-accent-primary rounded-md text-sm font-medium border border-accent-primary/30">
              Featured
            </span>
            <span className="px-3 py-1 bg-background-surface-2 text-accent-secondary rounded-md text-sm font-medium border border-white/10">
              {post.category}
            </span>
          </div>
          
          <h2 className="font-display text-h2 font-semibold text-text-primary mb-4 group-hover:text-accent-primary transition-colors duration-250">
            {post.title}
          </h2>
          
          <p className="text-text-secondary text-body-lg leading-relaxed mb-6">
            {post.excerpt}
          </p>
          
          <div className="flex items-center gap-6 text-text-tertiary text-sm">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4" />
              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>{post.readTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Tag className="w-4 h-4" />
              <span>{post.tags[0]}</span>
            </div>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link 
      to={`/post/${post.slug}`}
      className="block group"
    >
      <div className="bg-background-surface-1 rounded-lg p-6 border border-white/10 hover:border-accent-primary/50 transition-all duration-250 shadow-card hover:shadow-card-hover hover:translate-y-[-2px] h-full">
        <div className="mb-3">
          <span className="px-3 py-1 bg-background-surface-2 text-accent-secondary rounded-md text-sm font-medium border border-white/10">
            {post.category}
          </span>
        </div>
        
        <h3 className="font-display text-h3 font-semibold text-text-primary mb-3 group-hover:text-accent-primary transition-colors duration-250">
          {post.title}
        </h3>
        
        <p className="text-text-secondary text-body leading-relaxed mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex items-center gap-4 text-text-tertiary text-sm">
          <div className="flex items-center gap-1.5">
            <Calendar className="w-3.5 h-3.5" />
            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
          </div>
          <div className="flex items-center gap-1.5">
            <Clock className="w-3.5 h-3.5" />
            <span>{post.readTime}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}
