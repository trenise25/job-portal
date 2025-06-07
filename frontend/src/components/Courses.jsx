import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const courses = [
  {
    id: '1',
    name: 'Full Stack Web Development',
    about: 'Learn to build complete web applications using modern technologies like React, Node.js, and MongoDB.',
    duration: '6 months',
    learn: [
      'Frontend (React, HTML, CSS, JS)',
      'Backend (Node.js, Express)',
      'Database (MongoDB)',
      'Deployment & DevOps'
    ],
    fees: '₹15,000'
  },
  {
    id: '2',
    name: 'Data Science & Machine Learning',
    about: 'Master data analysis, visualization, and machine learning with Python.',
    duration: '4 months',
    learn: [
      'Python for Data Science',
      'Pandas, Numpy, Matplotlib',
      'Machine Learning Algorithms',
      'Project Work'
    ],
    fees: '₹18,000'
  },
  {
    id: '3',
    name: 'UI/UX Design Bootcamp',
    about: 'Design beautiful and user-friendly interfaces with Figma and Adobe XD.',
    duration: '2 months',
    learn: [
      'UI Principles',
      'UX Research',
      'Prototyping',
      'Design Tools'
    ],
    fees: '₹10,000'
  },
  {
    id: '4',
    name: 'Cloud Computing Essentials',
    about: 'Get started with AWS, Azure, and Google Cloud. Learn cloud fundamentals and deployment.',
    duration: '3 months',
    learn: [
      'Cloud Basics',
      'AWS, Azure, GCP Overview',
      'Deploying Applications',
      'Cloud Security'
    ],
    fees: '₹12,000'
  }
];

const Courses = () => {
  const [selected, setSelected] = useState(null);
  const navigate = useNavigate();

  return (
    <div className="max-w-5xl mx-auto py-16 px-4">
      <button
        onClick={() => navigate('/')}
        className="mb-8 bg-[#6A38C2] text-white px-6 py-2 rounded-lg font-bold hover:bg-[#53309a] transition-colors"
      >
        Back to Home
      </button>
      <h1 className="text-4xl font-bold mb-8 text-[#6A38C2]">Educational Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map(course => (
          <div key={course.id} className="bg-white border rounded-lg shadow p-6 flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-semibold mb-2">{course.name}</h2>
              <p className="text-gray-700 mb-4">{course.about}</p>
              <button
                onClick={() => setSelected(selected === course.id ? null : course.id)}
                className="bg-[#F9A826] text-white font-bold px-6 py-2 rounded-lg shadow hover:bg-[#d48c1a] transition-colors mb-4"
              >
                {selected === course.id ? 'Hide Details' : 'Know More'}
              </button>
              {selected === course.id && (
                <div className="mt-2">
                  <p className="mb-2"><span className="font-semibold">Duration:</span> {course.duration}</p>
                  <p className="mb-2 font-semibold">What you will learn:</p>
                  <ul className="list-disc pl-6 mb-2 text-gray-800">
                    {course.learn.map((item, idx) => <li key={idx}>{item}</li>)}
                  </ul>
                  <p className="mb-2"><span className="font-semibold">Fees:</span> {course.fees}</p>
                  <button
                    onClick={() => navigate(`/dummy-payment/${course.id}`)}
                    className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-2 rounded-lg shadow mt-2"
                  >
                    Buy Course
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses; 