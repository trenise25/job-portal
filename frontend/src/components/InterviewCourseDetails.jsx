import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const courses = [
  {
    id: '1',
    name: 'Ace Your Interview: Complete Grooming Course',
    description: 'Comprehensive course covering all aspects of interview preparation, including mock interviews and feedback.',
    cost: '₹1,999',
    details: 'This course includes live sessions, recorded lectures, and personalized feedback from industry experts. Duration: 4 weeks.'
  },
  {
    id: '2',
    name: 'Confidence & Communication Mastery',
    description: 'Focus on building confidence, body language, and effective communication for interviews.',
    cost: '₹1,299',
    details: 'Interactive workshops and real-world scenarios to boost your confidence and communication skills. Duration: 2 weeks.'
  },
  {
    id: '3',
    name: 'Technical Interview Bootcamp',
    description: 'Sharpen your technical interview skills with coding challenges and real-world scenarios.',
    cost: '₹2,499',
    details: 'Hands-on coding practice, mock technical interviews, and problem-solving strategies. Duration: 3 weeks.'
  },
  {
    id: '4',
    name: 'HR & Behavioral Interview Skills',
    description: 'Learn how to answer HR and behavioral questions with real examples and frameworks.',
    cost: '₹999',
    details: 'Role-play exercises and expert tips for handling HR and behavioral interviews. Duration: 1 week.'
  }
];

const InterviewCourseDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const course = courses.find(c => c.id === id);

  if (!course) {
    return <div className="max-w-2xl mx-auto py-16 px-4 text-center text-red-600 font-bold">Course not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto py-16 px-4">
      <h1 className="text-3xl font-bold mb-4 text-[#6A38C2]">{course.name}</h1>
      <p className="text-lg text-gray-700 mb-2">{course.description}</p>
      <p className="text-gray-600 mb-6">{course.details}</p>
      <div className="flex items-center gap-4 mb-8">
        <span className="bg-[#F9A826] text-white px-6 py-2 rounded-lg font-bold text-xl">{course.cost}</span>
        <button
          onClick={() => navigate(`/dummy-payment/${course.id}`)}
          className="bg-green-600 hover:bg-green-700 text-white font-bold px-8 py-3 rounded-lg shadow transition-colors text-lg"
        >
          Buy Now!!
        </button>
      </div>
    </div>
  );
};

export default InterviewCourseDetails; 