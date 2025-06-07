import React from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const PremiumMembership = () => {
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();

  const handleUpgrade = () => {
    if (!user) {
      navigate('/signup');
    } else {
      // Placeholder for payment integration
      alert('Payment/Upgrade functionality coming soon!');
    }
  };

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-[#6A38C2]">Premium Membership</h1>
      <p className="text-lg mb-6 text-gray-700">
        Unlock exclusive features and increase your chances of getting shortlisted for your dream job! Our Premium Membership offers personalized job recommendations, priority application status, and access to premium resources.
      </p>
      <ul className="list-disc pl-6 mb-8 text-gray-800">
        <li>Priority listing in recruiter searches</li>
        <li>Access to exclusive job postings</li>
        <li>Personalized career guidance</li>
        <li>Resume review and feedback</li>
        <li>Interview preparation resources</li>
      </ul>
      <button onClick={handleUpgrade} className="bg-[#F9A826] text-white font-bold px-8 py-3 rounded-lg shadow hover:bg-[#d48c1a] transition-colors">Upgrade Now</button>
    </div>
  );
};

export default PremiumMembership; 