import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const PaymentGateway = () => {
  const location = useLocation();
  const { courseTitle } = location.state || {};
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (courseTitle) {
      setMessage(`Enrolled in ${courseTitle}!`);
      // Save enrolled course to local storage
      const enrolledCourses = JSON.parse(localStorage.getItem('enrolledCourses') || '[]');
      if (!enrolledCourses.includes(courseTitle)) {
        localStorage.setItem('enrolledCourses', JSON.stringify([...enrolledCourses, courseTitle]));
      }
    } else {
      setMessage('Enrolled!');
    }
  }, [courseTitle]);

  return (
    <div className="container mx-auto px-4 py-8 flex items-center justify-center min-h-[calc(100vh-16rem)]">
      <div className="glass-card p-8 text-center space-y-6">
        <h1 className="text-4xl font-bold text-primary-accent">{message}</h1>
        <p className="text-lg text-foreground/80">Thank you for your enrollment.</p>
      </div>
    </div>
  );
};

export default PaymentGateway; 