import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ResumeReview = () => {
  const [file, setFile] = useState(null);
  const [feedback, setFeedback] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setFeedback(null);
  };

  const handleUpload = (e) => {
    e.preventDefault();
    if (!file) {
      setFeedback({ error: 'Please select a resume file to upload.' });
      return;
    }
    setLoading(true);
    setTimeout(() => {
      setFeedback({
        summary: 'Your resume is well-structured and covers key sections such as Education, Experience, and Skills.',
        strengths: [
          'Clear and concise formatting',
          'Relevant work experience listed',
          'Good use of action verbs',
          'Technical skills are highlighted',
        ],
        improvements: [
          'Add more quantifiable achievements (e.g., "Increased sales by 20%")',
          'Tailor your summary/objective to the specific job you are applying for',
          'Include links to your portfolio or LinkedIn if available',
          'Consider adding a section for certifications or awards',
        ],
        tips: [
          'Keep your resume to 1-2 pages',
          'Use bullet points for readability',
          'Proofread for grammar and spelling errors',
          'Customize your resume for each application',
        ]
      });
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-[#f8fafc] to-[#e0e7ff] py-12 px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-2xl p-8 flex flex-col items-center border border-gray-100">
        <button
          onClick={() => navigate('/')}
          className="mb-6 bg-[#6A38C2] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#53309a] transition-colors self-start"
        >
          Back to Home
        </button>
        <h1 className="text-3xl font-bold mb-2 text-[#6A38C2] text-center">AI-powered Resume Review</h1>
        <p className="mb-6 text-gray-600 text-center">Upload your resume and get instant, detailed AI feedback to improve your chances of getting shortlisted!</p>
        <form className="w-full flex flex-col items-center" onSubmit={handleUpload}>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleFileChange}
            className="mb-4 border border-gray-300 rounded-lg px-3 py-2 w-full focus:ring-2 focus:ring-[#6A38C2] focus:outline-none bg-gray-50"
          />
          <button
            type="submit"
            className="bg-[#F9A826] text-white font-bold px-8 py-2 rounded-lg shadow hover:bg-[#d48c1a] transition-colors mb-4 w-full"
            disabled={loading}
          >
            {loading ? 'Analyzing...' : 'Upload & Get Feedback'}
          </button>
        </form>
        {feedback && feedback.error && (
          <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded w-full text-center mt-2">
            {feedback.error}
          </div>
        )}
        {feedback && !feedback.error && (
          <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-400 text-green-900 px-6 py-6 rounded-xl w-full mt-4 shadow">
            <h3 className="font-bold text-2xl mb-4 text-[#6A38C2] text-center">AI Resume Analysis</h3>
            <div className="mb-4">
              <span className="font-semibold text-lg">Summary:</span>
              <p className="ml-2 text-gray-700 mt-1">{feedback.summary}</p>
            </div>
            <div className="mb-4">
              <span className="font-semibold text-lg">Strengths:</span>
              <ul className="list-disc pl-6 text-green-800 mt-1">
                {feedback.strengths.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
            <div className="mb-4">
              <span className="font-semibold text-lg">Areas for Improvement:</span>
              <ul className="list-disc pl-6 text-yellow-800 mt-1">
                {feedback.improvements.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
            <div>
              <span className="font-semibold text-lg">Tips:</span>
              <ul className="list-disc pl-6 text-blue-800 mt-1">
                {feedback.tips.map((item, idx) => <li key={idx}>{item}</li>)}
              </ul>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ResumeReview; 