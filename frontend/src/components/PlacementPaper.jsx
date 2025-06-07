import React from 'react';
import { useNavigate } from 'react-router-dom';

const PlacementPaper = () => {
  const navigate = useNavigate();

  const handlePractice = () => {
    // Placeholder for future practice/quiz page
    alert('Practice feature coming soon!');
    // To navigate to a practice page in the future, use:
    // navigate('/practice');
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-[#6A38C2]">Placement Paper</h1>
      <p className="text-lg mb-6 text-gray-700">
        Practice with our curated placement papers to boost your confidence and improve your skills. Get access to a variety of questions from top companies and prepare for your next big opportunity!
      </p>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Sample Questions</h2>
        <ul className="list-decimal pl-6 text-gray-800">
          <li>What is the output of the following code snippet?</li>
          <li>Explain the difference between HTTP and HTTPS.</li>
          <li>Write a SQL query to find the second highest salary from a table.</li>
          <li>Describe the concept of Object-Oriented Programming.</li>
          <li>How do you handle conflicts in a team project?</li>
        </ul>
      </div>
      <button onClick={handlePractice} className="bg-[#F9A826] text-white font-bold px-8 py-3 rounded-lg shadow hover:bg-[#d48c1a] transition-colors">Start Practicing</button>
    </div>
  );
};

export default PlacementPaper; 