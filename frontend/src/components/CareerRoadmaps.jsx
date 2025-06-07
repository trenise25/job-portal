import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const roadmaps = [
  {
    id: 'frontend',
    title: 'Frontend Developer',
    steps: [
      { skill: 'HTML, CSS, JavaScript', time: '1 month' },
      { skill: 'Responsive Design & CSS Frameworks', time: '2 weeks' },
      { skill: 'Version Control (Git)', time: '1 week' },
      { skill: 'React.js or Angular', time: '1 month' },
      { skill: 'APIs & AJAX', time: '2 weeks' },
      { skill: 'Build Projects & Portfolio', time: '1 month' },
    ]
  },
  {
    id: 'backend',
    title: 'Backend Developer',
    steps: [
      { skill: 'Programming Language (Node.js, Python, Java, etc.)', time: '1 month' },
      { skill: 'Databases (SQL/NoSQL)', time: '2 weeks' },
      { skill: 'REST APIs', time: '2 weeks' },
      { skill: 'Authentication & Security', time: '2 weeks' },
      { skill: 'Cloud & Deployment', time: '2 weeks' },
      { skill: 'Build Projects & Portfolio', time: '1 month' },
    ]
  },
  {
    id: 'data',
    title: 'Data Scientist',
    steps: [
      { skill: 'Python & Libraries (Pandas, Numpy)', time: '1 month' },
      { skill: 'Statistics & Math', time: '2 weeks' },
      { skill: 'Data Visualization', time: '2 weeks' },
      { skill: 'Machine Learning Basics', time: '1 month' },
      { skill: 'Projects & Kaggle Competitions', time: '1 month' },
    ]
  }
];

const CareerRoadmaps = () => {
  const [selected, setSelected] = useState(roadmaps[0].id);
  const roadmap = roadmaps.find(r => r.id === selected);
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <button
        onClick={() => navigate('/')}
        className="mb-8 bg-[#6A38C2] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#53309a] transition-colors self-start"
      >
        Back to Home
      </button>
      <h1 className="text-4xl font-bold mb-8 text-[#6A38C2] text-center">Interactive Career Roadmaps</h1>
      <div className="flex justify-center gap-4 mb-8">
        {roadmaps.map((r, index) => (
          <React.Fragment key={r.id}>
            <button
              onClick={() => setSelected(r.id)}
              className={`px-6 py-2 rounded-full font-semibold border transition-colors ${selected === r.id ? 'bg-[#F9A826] text-white border-[#F9A826]' : 'bg-white text-[#6A38C2] border-[#6A38C2] hover:bg-[#6A38C2] hover:text-white'}`}
            >
              {r.title}
            </button>
            {index < roadmaps.length - 1 && (
              <div className="border-r border-gray-300 h-6 self-center"></div>
            )}
          </React.Fragment>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow p-8">
        <h2 className="text-2xl font-bold mb-4 text-[#6A38C2]">{roadmap.title} Roadmap</h2>
        <ol className="list-decimal pl-6 space-y-4">
          {roadmap.steps.map((step, idx) => (
            <li key={idx} className="flex flex-col md:flex-row md:items-center md:gap-4">
              <span className="font-semibold text-lg">{step.skill}</span>
              <span className="text-gray-500 text-sm md:ml-2">Estimated: {step.time}</span>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default CareerRoadmaps; 