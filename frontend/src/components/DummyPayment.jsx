import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const DummyPayment = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="max-w-xl mx-auto py-20 px-4 text-center">
      <h1 className="text-3xl font-bold mb-6 text-[#6A38C2]">Dummy Payment Gateway</h1>
      <p className="text-lg mb-8 text-gray-700">You are purchasing course ID: <span className="font-bold">{id}</span></p>
      <div className="bg-green-100 border border-green-400 text-green-700 px-6 py-8 rounded-lg mb-8">
        <span className="text-2xl font-bold block mb-2">Payment Successful!</span>
        <span className="block">Thank you for your purchase. You will receive course access details via email.</span>
      </div>
      <button
        onClick={() => navigate('/')}
        className="bg-[#F9A826] text-white font-bold px-8 py-3 rounded-lg shadow hover:bg-[#d48c1a] transition-colors"
      >
        Back to Home
      </button>
    </div>
  );
};

export default DummyPayment; 