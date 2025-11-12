// ========================================
// APPLICATION IMPORTS SECTION
// ========================================

// React Router - Core routing library for client-side navigation
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// UI Components - Shared navigation component across all pages
import { Navigation } from './components/Navigation';

// Page Components - Main application pages
import { HomePage } from './pages/HomePage';                  // Landing page with hero section
import { BlogPage } from './pages/BlogPage';                  // Blog listing page
import { BlogPostPage } from './pages/BlogPostPage';          // Individual blog post display
import { AboutPage } from './pages/AboutPage';                // About page

// Cybersecurity Content Pages - Specialized security topic pages
import { PenetrationTestingPage } from './pages/PenetrationTestingPage';  // Pen testing techniques
import { ThreatDetectionPage } from './pages/ThreatDetectionPage';        // Security monitoring & detection
import { ThreatIntelligencePage } from './pages/ThreatIntelligencePage';  // Intel gathering & analysis
import { FrameworksPage } from './pages/FrameworksPage';                  // Security frameworks & standards
import { LearningPage } from './pages/LearningPage';                      // Educational resources & guides

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
