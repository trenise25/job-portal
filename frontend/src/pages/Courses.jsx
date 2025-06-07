import React from 'react';
import { Search, BookOpen, Clock, Users, Star, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: 'Web Development Bootcamp',
      instructor: 'John Doe',
      duration: '12 weeks',
      students: '1.2k',
      rating: 4.8,
      description: 'Learn full-stack web development from scratch with modern technologies.',
      topics: ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js'],
    },
    {
      id: 2,
      title: 'Data Science Fundamentals',
      instructor: 'Jane Smith',
      duration: '8 weeks',
      students: '850',
      rating: 4.7,
      description: 'Master the basics of data science and machine learning.',
      topics: ['Python', 'Statistics', 'Machine Learning', 'Data Analysis'],
    },
    {
      id: 3,
      title: 'Mobile App Development (React Native)',
      instructor: 'David Lee',
      duration: '10 weeks',
      students: '1.1k',
      rating: 4.9,
      description: 'Build cross-platform mobile applications for iOS and Android.',
      topics: ['React Native', 'JavaScript', 'Firebase', 'UI/UX'],
    },
    {
      id: 4,
      title: 'Cloud Computing with AWS',
      instructor: 'Sarah Connor',
      duration: '6 weeks',
      students: '700',
      rating: 4.6,
      description: 'Learn to deploy and manage applications on Amazon Web Services.',
      topics: ['AWS EC2', 'S3', 'Lambda', 'CloudFormation'],
    },
    {
      id: 5,
      title: 'Cybersecurity Basics',
      instructor: 'Michael Chen',
      duration: '9 weeks',
      students: '920',
      rating: 4.5,
      description: 'Understand the fundamentals of cybersecurity and network security.',
      topics: ['Network Security', 'Cryptography', 'Ethical Hacking', 'Malware Analysis'],
    },
    {
      id: 6,
      title: 'UI/UX Design Principles',
      instructor: 'Emily White',
      duration: '7 weeks',
      students: '600',
      rating: 4.8,
      description: 'Design user-friendly interfaces and compelling user experiences.',
      topics: ['Figma', 'Sketch', 'Wireframing', 'Prototyping'],
    },
    {
      id: 7,
      title: 'Digital Marketing Strategy',
      instructor: 'Chris Green',
      duration: '5 weeks',
      students: '750',
      rating: 4.4,
      description: 'Develop effective digital marketing campaigns and strategies.',
      topics: ['SEO', 'SEM', 'Social Media Marketing', 'Content Marketing'],
    },
  ];

  return (
    <div className="space-y-8">
      {/* Search Section */}
      <div className="glass-card p-6">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search courses..."
              className="neu-input w-full pl-12"
            />
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>

      {/* Course Listings */}
      <div className="grid md:grid-cols-2 gap-6">
        {courses.map((course) => (
          <div key={course.id} className="glass-card p-6 hover-effect">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-xl font-semibold text-[#003366]">{course.title}</h3>
                  <p className="text-[#0088cc]">{course.instructor}</p>
                </div>
                <div className="flex items-center gap-1 text-[#ffaa33]">
                  <Star className="w-5 h-5 fill-current" />
                  <span>{course.rating}</span>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300">{course.description}</p>

              <div className="flex flex-wrap gap-4 text-sm text-gray-600 dark:text-gray-300">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {course.duration}
                </span>
                <span className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {course.students} students
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                {course.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-3 py-1 rounded-full text-sm bg-[#003366]/10 text-[#003366]"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              <Link to="/payment-gateway" state={{ courseTitle: course.title }} className="neu-button w-full px-6 py-3 bg-gradient-to-r from-[#003366] to-[#0088cc] text-white flex items-center justify-center gap-2">
                <BookOpen className="w-5 h-5" />
                Enroll Now
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses; 