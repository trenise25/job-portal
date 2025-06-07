import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Briefcase, DollarSign, Clock } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import allJobs from '../data/jobsData'; // Renamed to avoid conflict with local 'jobs'

const Jobs = () => {
  const location = useLocation();
  const { keywords: initialKeywords, experience: initialExperience, location: initialLocation } = location.state || {};

  const [filters, setFilters] = useState({
    keywords: initialKeywords || '',
    location: initialLocation || '',
    type: '',
    salary: '',
    experience: initialExperience || '',
  });

  const [filteredJobs, setFilteredJobs] = useState(allJobs);

  useEffect(() => {
    // Apply initial filters when component mounts or initial search parameters change
    filterJobs(initialKeywords, initialExperience, initialLocation);
  }, [initialKeywords, initialExperience, initialLocation]);

  useEffect(() => {
    filterJobs(filters.keywords, filters.experience, filters.location, filters.type, filters.salary);
  }, [filters]);

  const filterJobs = (keywords, experience, location, type, salary) => {
    let tempJobs = allJobs;

    if (keywords) {
      tempJobs = tempJobs.filter(job =>
        job.title.toLowerCase().includes(keywords.toLowerCase()) ||
        job.company.toLowerCase().includes(keywords.toLowerCase()) ||
        job.description.toLowerCase().includes(keywords.toLowerCase()) ||
        job.skills.some(skill => skill.toLowerCase().includes(keywords.toLowerCase()))
      );
    }

    if (experience && experience !== 'Select experience') {
      tempJobs = tempJobs.filter(job => job.experience === experience);
    }

    if (location) {
      tempJobs = tempJobs.filter(job => job.location.toLowerCase().includes(location.toLowerCase()));
    }

    if (type) {
      tempJobs = tempJobs.filter(job => job.type.toLowerCase().includes(type.toLowerCase()));
    }

    if (salary) {
      // Basic salary filtering, could be improved with range parsing
      tempJobs = tempJobs.filter(job => job.salary && job.salary.toLowerCase().includes(salary.toLowerCase()));
    }

    setFilteredJobs(tempJobs);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <div className="space-y-8">
      {/* Search and Filters */}
      <div className="glass-card p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search jobs..."
              className="neu-input w-full pl-12"
              name="keywords"
              value={filters.keywords}
              onChange={handleFilterChange}
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          {/* Removed Filters button, will integrate directly */}
        </div>

        <div className="grid md:grid-cols-4 gap-4 mt-4">
          <div className="relative">
            <input
              type="text"
              placeholder="Location"
              className="neu-input w-full pl-10"
              name="location"
              value={filters.location}
              onChange={handleFilterChange}
            />
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <select
              name="experience"
              className="neu-input w-full pl-10 pr-4"
              value={filters.experience}
              onChange={handleFilterChange}
            >
              <option value="">Select experience</option>
              <option value="Fresher">Fresher</option>
              <option value="1-2 years">1-2 years</option>
              <option value="2-5 years">2-5 years</option>
              <option value="5+ years">5+ years</option>
            </select>
            <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Job Type"
              className="neu-input w-full pl-10"
              name="type"
              value={filters.type}
              onChange={handleFilterChange}
            />
            <Briefcase className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
          <div className="relative">
            <input
              type="text"
              placeholder="Salary Range"
              className="neu-input w-full pl-10"
              name="salary"
              value={filters.salary}
              onChange={handleFilterChange}
            />
            <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Job Listings */}
      <div className="space-y-4">
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} className="glass-card p-6 hover-effect">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#003366]">{job.title}</h3>
                  <p className="text-[#0088cc]">{job.company}</p>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Briefcase className="w-4 h-4" />
                      {job.type}
                    </span>
                    <span className="flex items-center gap-1">
                      <DollarSign className="w-4 h-4" />
                      {job.salary}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {job.posted}
                    </span>
                  </div>
                </div>
                <button className="neu-button px-6 py-2 bg-gradient-to-r from-[#003366] to-[#0088cc] text-white">
                  Apply Now
                </button>
              </div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">{job.description}</p>
            </div>
          ))
        ) : (
          <p className="text-center text-foreground/70">No jobs found matching your criteria.</p>
        )}
      </div>
    </div>
  );
};

export default Jobs; 