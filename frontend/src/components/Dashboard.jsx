import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Button } from './ui/button';
import { useNavigate } from 'react-router-dom';
import { Briefcase, Bookmark, FileText, Settings, LogOut } from 'lucide-react';

const Dashboard = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Sidebar */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-6 space-y-6">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-[#003366] flex items-center justify-center text-white text-2xl font-bold">
                {user?.fullname?.charAt(0) || 'U'}
              </div>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{user?.fullname || 'User'}</h2>
                <p className="text-gray-600">{user?.email || 'user@example.com'}</p>
              </div>
            </div>

            <nav className="space-y-2">
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-[#f4f4f4] rounded-lg transition-colors">
                <Briefcase size={20} />
                <span>My Applications</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-[#f4f4f4] rounded-lg transition-colors">
                <Bookmark size={20} />
                <span>Saved Jobs</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-[#f4f4f4] rounded-lg transition-colors">
                <FileText size={20} />
                <span>Resume</span>
              </button>
              <button className="w-full flex items-center space-x-3 px-4 py-2 text-gray-700 hover:bg-[#f4f4f4] rounded-lg transition-colors">
                <Settings size={20} />
                <span>Settings</span>
              </button>
              <button
                onClick={handleLogout}
                className="w-full flex items-center space-x-3 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
              >
                <LogOut size={20} />
                <span>Logout</span>
              </button>
            </nav>
          </div>
        </div>

        {/* Main Content */}
        <div className="md:col-span-3 space-y-8">
          {/* Applications Overview */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Applications Overview</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-[#f4f4f4] rounded-lg p-4">
                <p className="text-sm text-gray-600">Total Applications</p>
                <p className="text-2xl font-bold text-[#003366]">12</p>
              </div>
              <div className="bg-[#f4f4f4] rounded-lg p-4">
                <p className="text-sm text-gray-600">Under Review</p>
                <p className="text-2xl font-bold text-[#0088cc]">5</p>
              </div>
              <div className="bg-[#f4f4f4] rounded-lg p-4">
                <p className="text-sm text-gray-600">Interviews</p>
                <p className="text-2xl font-bold text-[#ffaa33]">2</p>
              </div>
            </div>
          </div>

          {/* Recent Applications */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recent Applications</h3>
            <div className="space-y-4">
              {[1, 2, 3].map((app) => (
                <div key={app} className="border border-gray-200 rounded-lg p-4 hover:border-[#0088cc] transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">Senior Frontend Developer</h4>
                      <p className="text-sm text-gray-600">TechCorp Inc.</p>
                    </div>
                    <span className="px-3 py-1 text-sm rounded-full bg-[#f4f4f4] text-[#003366]">
                      Under Review
                    </span>
                  </div>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-600">
                    <span>Applied 2 days ago</span>
                    <span>•</span>
                    <span>Full-time</span>
                    <span>•</span>
                    <span>Remote</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recommended Jobs */}
          <div className="bg-white rounded-xl shadow-sm p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Recommended Jobs</h3>
            <div className="space-y-4">
              {[1, 2].map((job) => (
                <div key={job} className="border border-gray-200 rounded-lg p-4 hover:border-[#0088cc] transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="font-medium text-gray-900">Full Stack Developer</h4>
                      <p className="text-sm text-gray-600">InnovateTech Solutions</p>
                    </div>
                    <Button variant="outline" size="sm">
                      Apply Now
                    </Button>
                  </div>
                  <div className="mt-2 flex items-center space-x-4 text-sm text-gray-600">
                    <span>$80k - $120k</span>
                    <span>•</span>
                    <span>Full-time</span>
                    <span>•</span>
                    <span>Hybrid</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 