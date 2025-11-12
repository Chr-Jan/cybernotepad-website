/**
 * Navigation Component
 * 
 * Main navigation bar component for the CyberNotepad application.
 * Features responsive design with desktop and mobile layouts,
 * brand branding, and routing to different sections of the app.
 */

import { Link } from 'react-router-dom';
import { Terminal, Shield, Target, Eye, BookOpen, GraduationCap } from 'lucide-react';
import { useState } from 'react';

export function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { to: '/', label: 'Home', icon: null },
    { to: '/blog', label: 'Blog', icon: null },
    { to: '/penetration-testing', label: 'Penetration Testing', icon: Shield },
    { to: '/threat-detection', label: 'Threat Detection', icon: Target },
    { to: '/threat-intelligence', label: 'Threat Intelligence', icon: Eye },
    { to: '/frameworks', label: 'Frameworks', icon: BookOpen },
    { to: '/learning', label: 'Learning', icon: GraduationCap },
    { to: '/about', label: 'About', icon: null }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background-near-black/80 backdrop-blur-lg border-b border-white/10">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="p-2 bg-background-surface-1 rounded-lg border border-white/10 group-hover:border-accent-primary/50 transition-all duration-250">
              <Terminal className="w-6 h-6 text-accent-primary" />
            </div>
            <span className="font-display text-xl font-semibold text-text-primary group-hover:text-accent-primary transition-colors duration-250">
              CyberNotepad
            </span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => {
              const IconComponent = item.icon;
              return (
                <Link 
                  key={item.to}
                  to={item.to} 
                  className="flex items-center gap-2 text-text-secondary hover:text-accent-primary transition-colors duration-250 font-medium text-sm"
                >
                  {IconComponent && <IconComponent className="w-4 h-4" />}
                  {item.label}
                </Link>
              );
            })}
          </div>

          <button 
            className="lg:hidden p-2 text-text-secondary hover:text-accent-primary transition-colors duration-250"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-white/10">
              {navItems.map((item) => {
                const IconComponent = item.icon;
                return (
                  <Link
                    key={item.to}
                    to={item.to}
                    className="flex items-center gap-2 px-3 py-2 text-text-secondary hover:text-accent-primary hover:bg-background-surface-1 rounded-lg transition-all duration-250"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {IconComponent && <IconComponent className="w-4 h-4" />}
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}