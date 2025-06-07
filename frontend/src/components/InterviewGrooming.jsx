import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const InterviewGrooming = () => {
  const [showCourses, setShowCourses] = useState(false);
  const navigate = useNavigate();

  const courses = [
    {
      id: '1',
      name: 'Ace Your Interview: Complete Grooming Course',
      description: 'Comprehensive course covering all aspects of interview preparation, including mock interviews and feedback.',
      cost: '₹1,999'
    },
    {
      id: '2',
      name: 'Confidence & Communication Mastery',
      description: 'Focus on building confidence, body language, and effective communication for interviews.',
      cost: '₹1,299'
    },
    {
      id: '3',
      name: 'Technical Interview Bootcamp',
      description: 'Sharpen your technical interview skills with coding challenges and real-world scenarios.',
      cost: '₹2,499'
    },
    {
      id: '4',
      name: 'HR & Behavioral Interview Skills',
      description: 'Learn how to answer HR and behavioral questions with real examples and frameworks.',
      cost: '₹999'
    }
  ];

  return (
    <div className="max-w-3xl mx-auto py-16 px-4">
      <h1 className="text-4xl font-bold mb-6 text-[#6A38C2]">Interview Grooming</h1>
      <p className="text-lg mb-6 text-gray-700">
        Master the art of interviews with our expert grooming tips. Learn how to present yourself confidently, answer tricky questions, and leave a lasting impression on recruiters.
      </p>
      <div className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Top Interview Tips</h2>
        <ul className="list-disc pl-6 text-gray-800">
          <li>Research the company and role thoroughly</li>
          <li>Practice common interview questions</li>
          <li>Dress appropriately and maintain good posture</li>
          <li>Communicate clearly and confidently</li>
          <li>Follow up with a thank-you note</li>
        </ul>
      </div>
      <button
        onClick={() => setShowCourses((prev) => !prev)}
        className="bg-[#F9A826] text-white font-bold px-8 py-3 rounded-lg shadow hover:bg-[#d48c1a] transition-colors mb-6"
      >
        {showCourses ? 'Hide Courses' : 'Learn More'}
      </button>
      {showCourses && (
        <div className="bg-white border rounded-lg shadow p-6 mt-2">
          <h3 className="text-xl font-bold mb-4 text-[#6A38C2]">Interview Grooming Courses & Costs</h3>
          <ul className="space-y-4">
            {courses.map((course, idx) => (
              <li key={idx} className="border-b pb-4 last:border-b-0">
                <div className="flex justify-between items-center">
                  <div>
                    <span className="font-semibold text-lg">{course.name}</span>
                    <p className="text-gray-600 text-sm mt-1">{course.description}</p>
                  </div>
                  <button
                    onClick={() => navigate(`/interview-course/${course.id}`)}
                    className="bg-[#F9A826] text-white px-4 py-2 rounded-lg font-bold text-base hover:bg-[#d48c1a] transition-colors"
                  >
                    {course.cost}
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default InterviewGrooming; 