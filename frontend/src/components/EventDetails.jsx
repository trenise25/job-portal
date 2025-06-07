import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const EventDetails = () => {
    const { id } = useParams(); // Get the event ID from the URL

    // Dummy data for upcoming events (replace with actual data fetching)
    const dummyEvents = [
        { 
            id: '1', 
            title: 'Web Development Workshop', 
            date: 'July 7, 2024', 
            platform: 'Online', 
            description: 'Join our intensive workshop to master the fundamentals of modern web development using React and Tailwind CSS. This hands-on session will cover component creation, state management, and building responsive user interfaces.', 
            imageUrl: 'https://picsum.photos/seed/webdev/800/400' 
        },
        { 
            id: '2', 
            title: 'Data Science Webinar', 
            date: 'July 15, 2024', 
            platform: 'Hybrid', 
            description: 'Explore the exciting world of data science and machine learning in this engaging webinar. Learn about data analysis techniques, model building, and how to apply AI to real-world problems. Suitable for beginners and intermediate learners.', 
            imageUrl: 'https://picsum.photos/seed/datascience/800/400' 
        },
        { 
            id: '3', 
            title: 'Mobile App Design Challenge', 
            date: 'August 1, 2024', 
            platform: 'Online', 
            description: 'Participate in a fun and challenging mobile app design competition. Showcase your UI/UX skills and create innovative designs for a chance to win exciting prizes. All skill levels are welcome.', 
            imageUrl: 'https://picsum.photos/seed/mobileapp/800/400' 
        },
        { 
            id: '4', 
            title: 'Backend Development Bootcamp', 
            date: 'August 10, 2024', 
            platform: 'Online', 
            description: 'Deep dive into backend development with our intensive bootcamp. Learn about server-side languages, databases, APIs, and deployment. This bootcamp is designed to give you practical skills to build robust backend systems.', 
            imageUrl: 'https://picsum.photos/seed/backend/800/400' 
        },
         { 
            id: '5', 
            title: 'Frontend Frameworks Comparison', 
            date: 'August 18, 2024', 
            platform: 'Online', 
            description: 'Confused about which frontend framework to learn? This session compares popular options like React, Angular, and Vue.js, highlighting their strengths and weaknesses to help you make an informed decision.', 
            imageUrl: 'https://picsum.photos/seed/frontend/800/400' 
        },
    ];

    // Find the event with the matching ID
    const event = dummyEvents.find(event => event.id === id);

    if (!event) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="font-bold text-2xl mb-4">Event Not Found</h1>
                    <p>The requested event could not be found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-4xl mx-auto my-10 px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-lg overflow-hidden">
                {/* Event Image */}
                <img src={event.imageUrl} alt={event.title} className="w-full h-64 object-cover" />

                <div className="p-6">
                    {/* Event Title */}
                    <h1 className="font-bold text-3xl mb-4 text-gray-800">{event.title}</h1>

                    {/* Event Details */}
                    <div className="text-gray-600 text-sm mb-4">
                        <p className="mb-1"><strong>Date:</strong> {event.date}</p>
                        <p><strong>Platform:</strong> {event.platform}</p>
                    </div>

                    {/* Event Description */}
                    <div className="text-gray-700 leading-relaxed">
                        <p>{event.description}</p>
                    </div>

                    {/* Action Button - Changed to Link */}
                    <div className="mt-6">
                        <Link to={`/register-event/${event.id}`} className="bg-blue-600 text-white px-6 py-3 rounded-md text-lg font-semibold hover:bg-blue-700 inline-block text-center">Register / Learn More</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EventDetails; 