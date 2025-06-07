import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Briefcase, BookOpen, Crown, ArrowRight, MapPin, TrendingUp, Compass, Rocket, Users, Target, Zap, Shield, Star } from 'lucide-react';
import resumeImage from '../assets/resume-builder.png'; // Assuming you have this image in assets folder

const Home = () => {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [keywords, setKeywords] = useState('');
  const [experience, setExperience] = useState('');
  const [location, setLocation] = useState('');

  const navigate = useNavigate();

  useEffect(() => {
    const storedCourses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
    setEnrolledCourses(storedCourses);
  }, []);

  const handleSearch = () => {
    navigate('/jobs', { state: { keywords, experience, location } });
  };

  const jobCategories = [
    { label: 'Remote', icon: <MapPin size={18} /> },
    { label: 'MNC', icon: <TrendingUp size={18} /> },
    { label: 'Analytics', icon: <Compass size={18} /> },
    { label: 'Marketing', icon: <Rocket size={18} /> },
    { label: 'Engineering', icon: <Users size={18} /> },
    { label: 'Software', icon: <Target size={18} /> },
    { label: 'Project M...', icon: <Briefcase size={18} /> },
    { label: 'Internship', icon: <BookOpen size={18} /> },
    { label: 'Startup', icon: <Zap size={18} /> },
    { label: 'HR', icon: <Users size={18} /> },
    { label: 'Fresher', icon: <Crown size={18} /> },
  ];

  const topCompanies = [
    { name: 'MNCs', hiring: '2.5k+', logo: 'https://via.placeholder.com/40' },
    { name: 'Fintech', hiring: '1.2k+', logo: 'https://via.placeholder.com/40' },
    { name: 'FMCG & Retail', hiring: '1.5k+', logo: 'https://via.placeholder.com/40' },
    { name: 'Startups', hiring: '863', logo: 'https://via.placeholder.com/40' },
    { name: 'Edtech', hiring: '1.5k+', logo: 'https://via.placeholder.com/40' },
  ];

  const featuredCompanies = [
    { name: 'Google', reviews: '4.5K+ reviews', description: 'A multinational technology company focusing on online advertising, search engine technology, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence, and consumer electronics.', logo: 'https://via.placeholder.com/60/FF0000/FFFFFF?text=G' },
    { name: 'Microsoft', reviews: '4.3K+ reviews', description: 'An American multinational technology corporation producing computer software, consumer electronics, personal computers, and related services.', logo: 'https://via.placeholder.com/60/0078D4/FFFFFF?text=M' },
    { name: 'Amazon', reviews: '4.2K+ reviews', description: 'An American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence.', logo: 'https://via.placeholder.com/60/FF9900/FFFFFF?text=A' },
    { name: 'Apple', reviews: '4.6K+ reviews', description: 'An American multinational technology company specializing in consumer electronics, software and online services.', logo: 'https://via.placeholder.com/60/A2AAAD/FFFFFF?text=A' },
    { name: 'Meta', reviews: '4.0K+ reviews', description: 'An American multinational technology conglomerate based in Menlo Park, California. It is the parent organization of Facebook, Instagram, and WhatsApp, among other products and services.', logo: 'https://via.placeholder.com/60/0066FF/FFFFFF?text=M' },
  ];

  return (
    <div className="space-y-12 py-8">
      {/* Hero Section */}
      <section className="text-center space-y-6">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground">
          Find your dream job now
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 max-w-2xl mx-auto">
          5 lakh+ jobs for you to explore
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center items-center">
          <div className="relative flex-grow max-w-4xl flex gap-2">
            <input
              type="text"
              placeholder="Enter skills / designations / companies"
              className="glass-card w-full pl-12 pr-4 py-3 border border-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary-accent text-foreground"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-foreground/60" />
            <select
              className="glass-card pl-4 pr-10 py-3 border border-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary-accent text-foreground/80"
              value={experience}
              onChange={(e) => setExperience(e.target.value)}
            >
              <option value="">Select experience</option>
              <option value="Fresher">Fresher</option>
              <option value="1-2 years">1-2 years</option>
              <option value="2-5 years">2-5 years</option>
              <option value="5+ years">5+ years</option>
            </select>
            <input
              type="text"
              placeholder="Enter location"
              className="glass-card pl-4 pr-4 py-3 border border-foreground/20 focus:outline-none focus:ring-2 focus:ring-primary-accent text-foreground"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <button
            onClick={handleSearch}
            className="glass-card px-8 py-3 bg-gradient-to-r from-primary to-primary-accent text-white font-semibold hover-scale hover-glow"
          >
            Search
          </button>
        </div>
      </section>

      {/* Resume Builder Banner */}
      <section className="glass-card p-6 flex flex-col md:flex-row items-center justify-between bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-xl shadow-lg">
        <div className="space-y-4 text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-bold">Analyze your resume to know more</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Link to="/ai-resume-analyzer">
              <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 hover-scale">Analyze Resume</button>
            </Link>
          </div>
        </div>
        <div className="mt-6 md:mt-0 md:ml-8">
          <img src={resumeImage} alt="Resume Analyzer" className="w-48 h-auto object-contain" />
        </div>
      </section>

      {/* Job Categories / Filters */}
      <section className="flex flex-wrap justify-center gap-4">
        {jobCategories.map((category, index) => (
          <div key={index} className="glass-card px-4 py-2 rounded-full flex items-center gap-2 text-foreground/80 hover-scale hover-glow cursor-pointer">
            {category.icon}
            <span>{category.label}</span>
          </div>
        ))}
      </section>

      {/* Top Companies Hiring Now */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground text-center">Top companies hiring now</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {topCompanies.map((company, index) => (
            <div key={index} className="glass-card p-4 space-y-2 flex flex-col items-center text-center hover-scale hover-glow">
              <img src={company.logo} alt={company.name} className="w-12 h-12 rounded-full object-contain" />
              <h3 className="text-lg font-semibold text-primary">{company.name}</h3>
              <p className="text-sm text-foreground/70">{company.hiring} are actively hiring</p>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Companies Actively Hiring */}
      <section className="space-y-6">
        <h2 className="text-2xl font-bold text-foreground text-center">Featured companies actively hiring</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {featuredCompanies.map((company, index) => (
            <div key={index} className="glass-card p-6 space-y-4 hover-scale hover-glow">
              <div className="flex items-center gap-4">
                <img src={company.logo} alt={company.name} className="w-16 h-16 rounded-full object-contain" />
                <div>
                  <h3 className="text-xl font-semibold text-primary">{company.name}</h3>
                  <p className="text-sm text-foreground/70 flex items-center gap-1">
                    <Star size={14} className="fill-current text-yellow-500" /> {company.reviews}
                  </p>
                </div>
              </div>
              <p className="text-foreground/80">{company.description}</p>
              <Link to="/jobs" className="inline-flex items-center text-primary-accent hover:text-primary hover-glow">
                View jobs <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Enrolled Courses Section */}
      {enrolledCourses.length > 0 && (
        <section className="space-y-6">
          <h2 className="text-2xl font-bold text-foreground text-center">Your Enrolled Courses</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enrolledCourses.map((course, index) => (
              <div key={index} className="glass-card p-6 space-y-4 hover-scale hover-glow">
                <h3 className="text-xl font-semibold text-primary-accent">{course}</h3>
                <p className="text-foreground/80">Continue your learning journey.</p>
                <Link to="/courses" className="inline-flex items-center text-primary-accent hover:text-primary hover-glow">
                  View Course <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default Home; 