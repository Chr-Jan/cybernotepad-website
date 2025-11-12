/**
 * AboutPage Component
 * 
 * This component renders the About page for the CyberNotepad cybersecurity blog.
 * It provides visitors with information about the blog's mission, purpose, and includes
 * an important legal disclaimer section for educational content.
 * 
 * Structure:
 * - Hero section: Main title and blog description
 * - Mission section: Detailed explanation of the blog's educational purpose
 * - Legal disclaimer: Comprehensive legal warnings and educational use policy
 * 
 * @returns JSX.Element - The complete About page layout
 */
import { Shield } from 'lucide-react';

export function AboutPage() {

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-accent-primary/10 to-transparent"></div>
        
        <div className="container mx-auto max-w-4xl relative">
          <div className="text-center mb-12">
            <h1 className="font-display text-hero font-bold text-text-primary mb-6 leading-tight">
              About <span className="text-accent-primary">CyberNotepad</span>
            </h1>
            
            <p className="text-body-lg text-text-secondary leading-relaxed max-w-2xl mx-auto">
              Empowering developers and security enthusiasts with practical knowledge about cybersecurity, ethical hacking, and secure development practices.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-background-surface-1 rounded-xl p-8 border border-white/10">
            <h2 className="font-display text-h2 font-semibold text-text-primary mb-6">My Mission</h2>
            
            <p className="text-text-secondary text-body-lg leading-relaxed mb-4">
              CyberNotepad was created to bridge the gap between theoretical security concepts and practical implementation. We believe that security knowledge should be accessible to all developers, not just specialized security professionals.
            </p>
            <p className="text-text-secondary text-body-lg leading-relaxed mb-4">
              The articles focus on real-world vulnerabilities, attack vectors, and defense strategies. Each post is written with hands-on examples, code snippets, and actionable advice you can implement immediately.
            </p>
            <p className="text-text-secondary text-body-lg leading-relaxed">
              Whether you're learning about SQL injection, building secure APIs, or hardening container deployments, we provide the technical depth you need without unnecessary complexity.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-background-surface-1 rounded-xl p-8 border border-yellow-500/30 bg-yellow-500/5">
            <h2 className="font-display text-h2 font-semibold text-yellow-400 mb-6">⚠️ Legal Disclaimer & Educational Purpose</h2>
            
            <div className="space-y-4 text-text-secondary text-body-lg leading-relaxed">
              <p className="text-yellow-300 font-medium">
                <strong>IMPORTANT: This site is for educational purposes only.</strong>
              </p>
              <p>
                All content published on CyberNotepad is intended strictly for <strong>educational and learning purposes</strong>. The information provided here is designed to help security professionals, developers, and students understand cybersecurity concepts in a safe, controlled environment.
              </p>
              <p>
                <strong>Legal Use Only:</strong> All techniques, tools, and methodologies discussed on this site should only be used on systems and networks that you own or have explicit written permission to test. Unauthorized access to computer systems is illegal and strictly prohibited.
              </p>
              <p>
                <strong>Responsibility:</strong> The author and operators of this site are not responsible for any misuse of the information provided. Users are solely responsible for ensuring they comply with all applicable laws and regulations in their jurisdiction.
              </p>
              <p>
                <strong>Ethical Hacking:</strong> We promote ethical hacking practices and responsible disclosure. If you discover a vulnerability, report it through proper channels and allow reasonable time for remediation before public disclosure.
              </p>
              <p className="text-yellow-300 font-medium">
                By using this site, you acknowledge that you understand and agree to use all information responsibly and legally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-6">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-background-surface-1 rounded-xl p-8 border border-blue-500/30 bg-blue-500/5">
            <h2 className="font-display text-h2 font-semibold text-blue-400 mb-6">📧 Contact & Support</h2>
            
            <div className="space-y-4 text-text-secondary text-body-lg leading-relaxed">
              <p>
                Have questions about our content, need clarification on a security topic, or want to suggest a new article? We'd love to hear from you!
              </p>
              <div className="mt-6">
                <p className="text-blue-300 font-medium mb-2">
                  <strong>Email:</strong>
                </p>
                <a 
                  href="mailto:support@cybernotepad.org" 
                  className="text-accent-primary hover:text-blue-400 transition-colors duration-250 text-xl font-mono break-all"
                >
                  support@cybernotepad.org
                </a>
              </div>
              <p className="mt-4 text-sm text-blue-300">
                  For feedback, suggestions, or reporting changes, please send me an email — this inbox is for receiving messages only.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}