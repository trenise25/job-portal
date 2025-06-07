import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 px-4">
      <h1 className="text-6xl font-bold text-[#F9A826] mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">Page Not Found</h2>
      <p className="text-gray-600 mb-6 text-center">Sorry, the page you are looking for does not exist or has been moved.</p>
      <button
        onClick={() => navigate('/')}
        className="bg-[#6A38C2] text-white px-6 py-3 rounded-lg font-bold hover:bg-[#53309a] transition-colors"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound; 