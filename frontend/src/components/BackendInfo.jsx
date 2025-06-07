import React from 'react';
import { useNavigate } from 'react-router-dom';

const BackendInfo = () => {
  const navigate = useNavigate();

  const backendJobs = [
    {
      id: 4,
      title: "Backend Developer",
      description: "Design and implement server-side logic and APIs using Node.js and Express",
      requirements: [
        "Strong knowledge of Node.js and Express.js",
        "Experience with MongoDB and Mongoose",
        "Understanding of RESTful API design",
        "Knowledge of authentication and authorization",
        "Experience with Git version control"
      ],
      salary: "$75,000 - $125,000",
      skills: ["Node.js", "Express", "MongoDB", "REST API", "JWT"]
    },
    {
      id: 5,
      title: "Full Stack Developer",
      description: "Develop both frontend and backend components of web applications",
      requirements: [
        "Proficiency in both frontend and backend technologies",
        "Experience with MERN stack",
        "Understanding of database design",
        "Knowledge of cloud services",
        "Experience with CI/CD pipelines"
      ],
      salary: "$85,000 - $140,000",
      skills: ["MERN Stack", "JavaScript", "MongoDB", "React", "Node.js"]
    },
    {
      id: 6,
      title: "API Developer",
      description: "Design and implement robust APIs and microservices architecture",
      requirements: [
        "Experience with API design and documentation",
        "Knowledge of microservices architecture",
        "Understanding of security best practices",
        "Experience with testing frameworks",
        "Knowledge of containerization (Docker)"
      ],
      salary: "$80,000 - $130,000",
      skills: ["API Design", "Microservices", "Docker", "Testing", "Security"]
    }
  ];

  const handleApply = (jobId) => {
    navigate(`/description/${jobId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Backend Development Jobs</h1>
      
      <div className="grid gap-6">
        {backendJobs.map((job, index) => (
          <section key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-green-600">{job.title}</h2>
                <p className="text-gray-600 mt-2">{job.description}</p>
              </div>
              <div className="bg-green-100 text-green-800 px-4 py-2 rounded-full">
                {job.salary}
              </div>
            </div>

            <div className="mb-4">
              <h3 className="text-lg font-semibold mb-2">Required Skills:</h3>
              <div className="flex flex-wrap gap-2">
                {job.skills.map((skill, i) => (
                  <span key={i} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-2">Requirements:</h3>
              <ul className="list-disc pl-6 space-y-2">
                {job.requirements.map((req, i) => (
                  <li key={i} className="text-gray-700">{req}</li>
                ))}
              </ul>
            </div>

            <div className="flex justify-end">
              <button
                onClick={() => handleApply(job.id)}
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
              >
                Apply Now
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default BackendInfo; 