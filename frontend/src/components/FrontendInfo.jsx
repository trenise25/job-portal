import React from 'react';
import { useNavigate } from 'react-router-dom';

const FrontendInfo = () => {
  const navigate = useNavigate();
  
  const frontendJobs = [
    {
      id: 1,
      title: "Frontend Developer",
      description: "Build and maintain user interfaces using React.js and modern web technologies",
      requirements: [
        "Strong knowledge of HTML, CSS, and JavaScript",
        "Experience with React.js and its ecosystem",
        "Understanding of responsive design principles",
        "Familiarity with state management (Redux)",
        "Experience with version control (Git)"
      ],
      salary: "$70,000 - $120,000",
      skills: ["React", "JavaScript", "HTML/CSS", "Redux", "Tailwind CSS"]
    },
    {
      id: 2,
      title: "UI/UX Developer",
      description: "Create beautiful and intuitive user interfaces while ensuring great user experience",
      requirements: [
        "Experience with UI/UX design principles",
        "Proficiency in frontend frameworks",
        "Knowledge of accessibility standards",
        "Experience with design tools (Figma, Adobe XD)",
        "Understanding of responsive design"
      ],
      salary: "$65,000 - $110,000",
      skills: ["UI/UX", "React", "CSS", "Figma", "Accessibility"]
    },
    {
      id: 3,
      title: "Frontend Engineer",
      description: "Develop and optimize frontend applications with focus on performance and scalability",
      requirements: [
        "Deep understanding of JavaScript and TypeScript",
        "Experience with modern frontend frameworks",
        "Knowledge of web performance optimization",
        "Understanding of browser rendering",
        "Experience with testing frameworks"
      ],
      salary: "$80,000 - $130,000",
      skills: ["JavaScript", "TypeScript", "React", "Testing", "Performance"]
    }
  ];

  const handleApply = (jobId) => {
    navigate(`/description/${jobId}`);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Frontend Development Jobs</h1>
      
      <div className="grid gap-6">
        {frontendJobs.map((job, index) => (
          <section key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex justify-between items-start mb-4">
              <div>
                <h2 className="text-2xl font-semibold text-blue-600">{job.title}</h2>
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
                  <span key={i} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
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
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200 flex items-center gap-2"
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

export default FrontendInfo; 