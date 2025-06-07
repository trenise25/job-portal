import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { Button } from '../ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isRoadmapsOpen, setIsRoadmapsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  const roadmaps = [
    { to: '/roadmaps/data-scientist', label: 'Data Scientist' },
    { to: '/roadmaps/ui-ux-designer', label: 'UI/UX Designer' },
    { to: '/roadmaps/cybersecurity-analyst', label: 'Cybersecurity Analyst' },
    { to: '/roadmaps/project-manager', label: 'Project Manager' },
  ];

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/jobs', label: 'Jobs' },
    { to: '/courses', label: 'Courses' },
    { to: '/ai-resume-analyzer', label: 'AI Resume Analyzer' },
    { to: '/job-insights', label: 'Job Insights' },
    { to: '/premium', label: 'Premium' },
    { to: '/profile', label: 'Profile' },
  ];

  return (
    <nav className="sticky top-0 z-50 glass-card border-b border-white/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-2xl font-bold text-primary-accent hover-glow">
                JobPortal
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-foreground/90 hover:text-foreground transition-all duration-300 font-medium relative group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-accent to-secondary transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
            
            {/* Roadmaps Dropdown */}
            <div className="relative">
              <button
                onClick={() => setIsRoadmapsOpen(!isRoadmapsOpen)}
                className="flex items-center text-foreground/90 hover:text-foreground transition-all duration-300 font-medium group"
              >
                Career Roadmaps
                <ChevronDown size={16} className="ml-1" />
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-accent to-secondary transition-all duration-300 group-hover:w-full"></span>
              </button>
              
              {isRoadmapsOpen && (
                <div className="absolute top-full left-0 mt-2 w-48 glass-card rounded-lg shadow-lg py-2 z-50">
                  {roadmaps.map((roadmap) => (
                    <Link
                      key={roadmap.to}
                      to={roadmap.to}
                      className="block px-4 py-2 text-foreground/90 hover:text-foreground hover:bg-foreground/10 transition-all duration-300"
                      onClick={() => setIsRoadmapsOpen(false)}
                    >
                      {roadmap.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {user ? (
              <div className="flex items-center space-x-4">
                <Button
                  onClick={handleLogout}
                  className="glass-card bg-gradient-to-r from-primary to-primary-accent text-white px-4 py-2 hover-scale hover-glow"
                >
                  Logout
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/login">
                  <Button variant="outline" className="glass-card border-foreground/20 text-foreground hover:bg-foreground/10 transition-all duration-300 hover-scale">
                    Login
                  </Button>
                </Link>
                <Link to="/register">
                  <Button className="glass-card bg-gradient-to-r from-primary-accent to-secondary text-white px-4 py-2 hover-scale hover-glow">
                    Sign Up
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-foreground hover:text-secondary transition-all duration-300"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden glass-card border-t border-white/20">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="block px-3 py-2 text-foreground/90 hover:text-foreground transition-all duration-300 font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            
            {/* Mobile Roadmaps */}
            <div className="px-3 py-2">
              <div className="text-foreground/90 font-medium mb-2">Career Roadmaps</div>
              <div className="pl-4 space-y-1">
                {roadmaps.map((roadmap) => (
                  <Link
                    key={roadmap.to}
                    to={roadmap.to}
                    className="block py-2 text-foreground/90 hover:text-foreground transition-all duration-300"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {roadmap.label}
                  </Link>
                ))}
              </div>
            </div>

            {user ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsMenuOpen(false);
                }}
                className="w-full text-left px-3 py-2 text-foreground/90 hover:text-foreground transition-all duration-300 font-medium"
              >
                Logout
              </button>
            ) : (
              <>
                <Link
                  to="/login"
                  className="block px-3 py-2 text-foreground/90 hover:text-foreground transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  className="block px-3 py-2 text-foreground/90 hover:text-foreground transition-all duration-300 font-medium"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Sign Up
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;