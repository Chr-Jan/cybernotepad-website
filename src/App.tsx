// ========================================
// APPLICATION IMPORTS SECTION
// ========================================

import { Suspense, lazy } from 'react';
// React Router - Core routing library for client-side navigation
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// UI Components - Shared navigation component across all pages
import { Navigation } from './components/Navigation';

// Page Components - Main application pages
const HomePage = lazy(() => import('./pages/HomePage').then((module) => ({ default: module.HomePage })));
const BlogPage = lazy(() => import('./pages/BlogPage').then((module) => ({ default: module.BlogPage })));
const BlogPostPage = lazy(() => import('./pages/BlogPostPage').then((module) => ({ default: module.BlogPostPage })));
const AboutPage = lazy(() => import('./pages/AboutPage').then((module) => ({ default: module.AboutPage })));
const PlaybooksPage = lazy(() => import('./pages/PlaybooksPage').then((module) => ({ default: module.PlaybooksPage })));
const PlaybookPage = lazy(() => import('./pages/PlaybookPage').then((module) => ({ default: module.PlaybookPage })));

// Cybersecurity Content Pages - Specialized security topic pages
const PenetrationTestingPage = lazy(() => import('./pages/PenetrationTestingPage').then((module) => ({ default: module.PenetrationTestingPage })));
const ThreatDetectionPage = lazy(() => import('./pages/ThreatDetectionPage').then((module) => ({ default: module.ThreatDetectionPage })));
const ThreatIntelligencePage = lazy(() => import('./pages/ThreatIntelligencePage').then((module) => ({ default: module.ThreatIntelligencePage })));
const FrameworksPage = lazy(() => import('./pages/FrameworksPage').then((module) => ({ default: module.FrameworksPage })));
const LearningPage = lazy(() => import('./pages/LearningPage').then((module) => ({ default: module.LearningPage })));

// ========================================
// MAIN APPLICATION COMPONENT
// ========================================

/**
 * App - Root application component
 * 
 * This component serves as the main entry point for the hacker blog application.
 * It establishes the routing structure, navigation framework, and overall layout
 * for all cybersecurity content and blog functionality.
 * 
 * Architecture Overview:
 * - Uses React Router v6 for client-side routing
 * - Implements BrowserRouter for HTML5 history API support
 * - Maintains consistent navigation across all pages via Navigation component
 * - Dark theme design with black background styling
 */
function App() {
  return (
    /**
     * BrowserRouter - HTML5 History API Router
     * 
     * Provides client-side routing with clean URLs without page refreshes.
     * Manages browser history stack and synchronizes UI with URL changes.
     */
    <BrowserRouter>
      {/* 
        Main Application Container
        - min-h-screen: Ensures full viewport height coverage
        - bg-background-pure-black: Applies consistent dark theme background
        - Houses navigation and all page content
      */}
      <div className="min-h-screen bg-background-pure-black">
        
        {/* 
          Global Navigation Component
          - Displays site-wide navigation menu
          - Remains consistent across all pages
          - Handles active state management for current route
        */}
        <Navigation />
        
        {/* 
          Route Configuration
          - Defines all application routes and their corresponding components
          - Uses React Router v6 Routes/Route pattern
          - Handles both static and dynamic routes
        */}
        <Suspense fallback={<div className="flex min-h-[50vh] items-center justify-center text-slate-300">Loading page...</div>}>
          <Routes>
            
            {/* 
              HOME ROUTE - Landing Page
              Path: /
              Component: HomePage
              Purpose: Main entry point with hero section and featured content
            */}
            <Route path="/" element={<HomePage />} />
            
            {/* 
              INDIVIDUAL BLOG POST - Dynamic Route
              Path: /post/:slug
              Component: BlogPostPage
              Purpose: Displays individual blog posts based on URL slug parameter
              Dynamic: :slug parameter allows any blog post identifier
            */}
            <Route path="/post/:slug" element={<BlogPostPage />} />
            
            {/* 
              BLOG LISTING PAGE
              Path: /blog
              Component: BlogPage
              Purpose: Displays all blog posts in a list or grid format
            */}
            <Route path="/blog" element={<BlogPage />} />
            
            {/* 
              ABOUT PAGE
              Path: /about
              Component: AboutPage
              Purpose: Information about the blog, author, and mission
            */}
            <Route path="/about" element={<AboutPage />} />

            {/* 
              PLAYBOOKS PAGE
              Path: /playbooks
              Component: PlaybooksPage
              Purpose: Operational SOC and incident response playbooks hub
            */}
            <Route path="/playbooks" element={<PlaybooksPage />} />

            {/* 
              PLAYBOOK DETAIL PAGE
              Path: /playbooks/:slug
              Component: PlaybookPage
              Purpose: Displays an individual operational playbook
            */}
            <Route path="/playbooks/:slug" element={<PlaybookPage />} />
            
            {/* 
              PENETRATION TESTING SECTION
              Path: /penetration-testing
              Component: PenetrationTestingPage
              Purpose: Dedicated content for ethical hacking and pen testing
            */}
            <Route path="/penetration-testing" element={<PenetrationTestingPage />} />
            
            {/* 
              THREAT DETECTION SECTION
              Path: /threat-detection
              Component: ThreatDetectionPage
              Purpose: Content on security monitoring and incident detection
            */}
            <Route path="/threat-detection" element={<ThreatDetectionPage />} />
            
            {/* 
              THREAT INTELLIGENCE SECTION
              Path: /threat-intelligence
              Component: ThreatIntelligencePage
              Purpose: Intelligence gathering and threat analysis content
            */}
            <Route path="/threat-intelligence" element={<ThreatIntelligencePage />} />
            
            {/* 
              SECURITY FRAMEWORKS SECTION
              Path: /frameworks
              Component: FrameworksPage
              Purpose: Industry standards and security framework documentation
            */}
            <Route path="/frameworks" element={<FrameworksPage />} />

            {/* 
              LEARNING RESOURCES SECTION
              Path: /learning
              Component: LearningPage
              Purpose: Educational materials and learning paths for cybersecurity
            */}
            <Route path="/learning" element={<LearningPage />} />
            
          </Routes>
        </Suspense>
        
      </div>
    </BrowserRouter>
  );
}

// ========================================
// EXPORT CONFIGURATION
// ========================================

// Default export for App component
// Enables import in main.tsx as: import App from './App'
export default App;
