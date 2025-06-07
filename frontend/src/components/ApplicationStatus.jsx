import React from 'react';
import { useNavigate } from 'react-router-dom';

const ApplicationStatus = () => {
  const navigate = useNavigate();

  // Dummy data for demonstration
  const applications = [
    {
      id: 1,
      jobTitle: "Frontend Developer",
      company: "TechCorp Solutions",
      status: "Under Review",
      appliedDate: "2024-03-10",
      lastUpdated: "2024-03-12"
    },
    {
      id: 2,
      jobTitle: "UI/UX Developer",
      company: "DesignHub Inc",
      status: "Shortlisted",
      appliedDate: "2024-03-05",
      lastUpdated: "2024-03-08"
    },
    {
      id: 3,
      jobTitle: "Full Stack Developer",
      company: "WebTech Solutions",
      status: "Rejected",
      appliedDate: "2024-03-01",
      lastUpdated: "2024-03-03"
    }
  ];

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'under review':
        return 'bg-yellow-100 text-yellow-800';
      case 'shortlisted':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">Application Status</h2>
        <button
          onClick={() => navigate('/profile')}
          className="text-blue-600 hover:text-blue-800 font-semibold"
        >
          View All →
        </button>
      </div>

      <div className="space-y-4">
        {applications.map((application) => (
          <div
            key={application.id}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow"
          >
            <div className="flex justify-between items-start mb-2">
              <div>
                <h3 className="font-semibold text-lg">{application.jobTitle}</h3>
                <p className="text-gray-600">{application.company}</p>
              </div>
              <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(application.status)}`}>
                {application.status}
              </span>
            </div>
            <div className="flex justify-between text-sm text-gray-500 mt-2">
              <p>Applied: {application.appliedDate}</p>
              <p>Last Updated: {application.lastUpdated}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ApplicationStatus; 