import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EventRegistration = () => {
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
            description: 'Intensive bootcamp covering backend technologies.', 
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

    const [formData, setFormData] = useState({
        name: '',
        email: '',
    });
    const [isRegistered, setIsRegistered] = useState(false); // New state for registration status

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => { // Made async to simulate backend call
        e.preventDefault();

        // --- Placeholder for backend API call ---
        console.log('Attempting to register:', formData);
        // In a real application, you would send formData and event.id to your backend
        // Example: 
        // try {
        //   const response = await axios.post('/api/register-event', { ...formData, eventId: event.id });
        //   if (response.data.success) {
        //     setIsRegistered(true); // Update state on success
        //   } else {
        //     // Handle backend errors (e.g., display error message)
        //     alert('Registration failed: ' + response.data.message);
        //   }
        // } catch (error) {
        //   console.error('Registration error:', error);
        //   alert('An error occurred during registration.');
        // }
        // ----------------------------------------

        // --- Dummy success simulation ---
        // Simulate a network request delay
        await new Promise(resolve => setTimeout(resolve, 1000)); 
        console.log('Dummy registration successful!');
        setIsRegistered(true); // Set registered state to true
        // You could also clear the form here if you don't hide it
        // setFormData({ name: '', email: '' });
        // -------------------------------
    };

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
            <div className="max-w-md mx-auto my-10 px-4 sm:px-6 lg:px-8 bg-white shadow-md rounded-lg overflow-hidden">
                <div className="p-6">
                    {/* Event Details Summary */}
                    <div className="text-center mb-6">
                         <img src={event.imageUrl} alt={event.title} className="w-full h-40 object-cover rounded-md mb-4" />
                        <h1 className="font-bold text-2xl mb-2 text-gray-800">Register for {event.title}</h1>
                        <p className="text-sm text-gray-600">Date: {event.date} | Platform: {event.platform}</p>
                         <p className="text-sm text-gray-700 mt-2">{event.description.substring(0, 150)}...</p>
                    </div>

                    {/* Conditional rendering based on registration status */}
                    {isRegistered ? (
                        <div className="text-center text-green-600 font-semibold text-lg">
                            Registration Successful!
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleInputChange}
                                    className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2 focus:ring-blue-500 focus:border-blue-500"
                                    required
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white px-4 py-2 rounded-md font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                >
                                    Register
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default EventRegistration; 