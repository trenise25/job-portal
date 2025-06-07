import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-card border-t border-white/20 mt-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-accent hover-glow">Contact Us</h3>
            <p className="text-foreground/90">Name - Trenise Dsouza</p>
            <p className="text-foreground/90">Email - trenisedsouza255@gmail.com</p>
            <p className="text-foreground/90">Your message here</p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-accent hover-glow">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/browse" className="text-foreground/90 hover:text-foreground transition-all duration-300 relative group">
                  Browse Jobs
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-accent to-secondary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link to="/courses" className="text-foreground/90 hover:text-foreground transition-all duration-300 relative group">
                  Courses
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-accent to-secondary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link to="/resume-review" className="text-foreground/90 hover:text-foreground transition-all duration-300 relative group">
                  Resume Review
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-accent to-secondary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
              <li>
                <Link to="/career-roadmaps" className="text-foreground/90 hover:text-foreground transition-all duration-300 relative group">
                  Career Roadmaps
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-accent to-secondary transition-all duration-300 group-hover:w-full"></span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-primary-accent hover-glow">Connect With Us</h3>
            <div className="flex space-x-4">
              <a
                href="https://www.linkedin.com/in/trenise-dsouza-a23365270/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/90 hover:text-foreground transition-all duration-300 transform hover-scale"
              >
                <Linkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-white/20">
          <p className="text-center text-foreground/90">
            © {new Date().getFullYear()} JobPortal. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;