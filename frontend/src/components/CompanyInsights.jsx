import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const companies = [
  {
    id: '1',
    name: 'DemoTech',
    reviews: [
      {
        reviewer: 'Anonymous',
        culture: 'Collaborative and supportive team environment.',
        pros: 'Flexible hours, good work-life balance, modern tech stack.',
        cons: 'Limited onsite opportunities, fast-paced deadlines.'
      },
      {
        reviewer: 'Anonymous',
        culture: 'Open communication and regular feedback from management.',
        pros: 'Great learning opportunities, friendly colleagues.',
        cons: 'Can be challenging for beginners.'
      }
    ]
  },
  {
    id: '2',
    name: 'CodeBase',
    reviews: [
      {
        reviewer: 'Anonymous',
        culture: 'Results-driven, high expectations, but rewarding.',
        pros: 'Competitive salary, career growth, strong leadership.',
        cons: 'Long working hours during product launches.'
      }
    ]
  },
  {
    id: '3',
    name: 'DataWiz',
    reviews: [
      {
        reviewer: 'Anonymous',
        culture: 'Innovative, encourages experimentation and learning.',
        pros: 'Cutting-edge projects, supportive mentors.',
        cons: 'Occasional ambiguity in project requirements.'
      }
    ]
  }
];

const CompanyInsights = () => {
  const [selected, setSelected] = useState(companies[0].id);
  const company = companies.find(c => c.id === selected);
  const navigate = useNavigate();

  return (
    <div className="max-w-4xl mx-auto py-16 px-4">
      <button
        onClick={() => navigate('/')}
        className="mb-8 bg-[#6A38C2] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#53309a] transition-colors self-start"
      >
        Back to Home
      </button>
      <h1 className="text-4xl font-bold mb-8 text-[#6A38C2] text-center">Employee Reviews & Company Insights</h1>
      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {companies.map(c => (
          <button
            key={c.id}
            onClick={() => setSelected(c.id)}
            className={`px-6 py-2 rounded-full font-semibold border transition-colors ${selected === c.id ? 'bg-[#F9A826] text-white border-[#F9A826]' : 'bg-white text-[#6A38C2] border-[#6A38C2] hover:bg-[#6A38C2] hover:text-white'}`}
          >
            {c.name}
          </button>
        ))}
      </div>
      <div className="bg-white rounded-xl shadow p-8">
        <h2 className="text-2xl font-bold mb-4 text-[#6A38C2]">{company.name} - Company Insights</h2>
        {company.reviews.map((review, idx) => (
          <div key={idx} className="mb-6 border-b pb-4 last:border-b-0">
            <p className="text-gray-700 mb-2"><span className="font-semibold">Culture:</span> {review.culture}</p>
            <p className="text-green-800 mb-1"><span className="font-semibold">Pros:</span> {review.pros}</p>
            <p className="text-red-800 mb-1"><span className="font-semibold">Cons:</span> {review.cons}</p>
            <p className="text-xs text-gray-400">- {review.reviewer}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CompanyInsights; 