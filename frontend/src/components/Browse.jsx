import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchedQuery } from '@/redux/jobSlice';
import useGetAllJobs from '@/hooks/useGetAllJobs';
import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import FilterCard from './FilterCard';
import JobDescription from './JobDescription';

const experienceOptions = [
  '',
  'Fresher',
  '0-1 years',
  '1-3 years',
  '3-5 years',
  '5+ years',
];

const Browse = () => {
    useGetAllJobs();
    const { allJobs } = useSelector(store => store.job);
    const dispatch = useDispatch();

    // Filter states
    const [search, setSearch] = useState('');
    const [experience, setExperience] = useState('');
    const [location, setLocation] = useState('');
    const [filteredJobs, setFilteredJobs] = useState([]);

    useEffect(() => {
        setFilteredJobs(allJobs);
    }, [allJobs]);

    useEffect(() => {
        return () => {
            dispatch(setSearchedQuery(""));
        };
    }, [dispatch]);

    // Dummy jobs for demonstration
    const dummyJobs = [
        {
            _id: 'dummy1',
            title: 'Frontend Developer',
            description: 'Work on modern web applications using React.',
            company: { name: 'DemoTech', logo: '', location: 'Remote' },
            experienceLevel: 1,
            location: 'Remote',
            jobType: 'Full Time',
            position: 2,
            salary: 8
        },
        {
            _id: 'dummy2',
            title: 'Backend Developer',
            description: 'Build scalable backend services with Node.js.',
            company: { name: 'CodeBase', logo: '', location: 'Bangalore' },
            experienceLevel: 2,
            location: 'Bangalore',
            jobType: 'Full Time',
            position: 1,
            salary: 10
        },
        {
            _id: 'dummy3',
            title: 'Data Scientist',
            description: 'Analyze data and build ML models.',
            company: { name: 'DataWiz', logo: '', location: 'Pune' },
            experienceLevel: 3,
            location: 'Pune',
            jobType: 'Part Time',
            position: 1,
            salary: 12
        }
    ];

    // Filtering logic
    const handleFilter = () => {
        let jobs = allJobs;
        if (search.trim()) {
            jobs = jobs.filter(job =>
                job.title.toLowerCase().includes(search.toLowerCase()) ||
                job.description.toLowerCase().includes(search.toLowerCase()) ||
                (job.company?.name && job.company.name.toLowerCase().includes(search.toLowerCase()))
            );
        }
        if (experience) {
            jobs = jobs.filter(job => {
                if (experience === 'Fresher') {
                    return job.experienceLevel === 0 || job.experienceLevel === 'Fresher';
                }
                if (experience === '0-1 years') {
                    return job.experienceLevel === 1 || job.experienceLevel === '0-1 years';
                }
                if (experience === '1-3 years') {
                    return job.experienceLevel === 2 || job.experienceLevel === '1-3 years';
                }
                if (experience === '3-5 years') {
                    return job.experienceLevel === 3 || job.experienceLevel === '3-5 years';
                }
                if (experience === '5+ years') {
                    return job.experienceLevel >= 5 || job.experienceLevel === '5+ years';
                }
                return true;
            });
        }
        if (location.trim()) {
            jobs = jobs.filter(job =>
                job.location && job.location.toLowerCase().includes(location.toLowerCase())
            );
        }
        // If no jobs found, generate dummy data based on search
        if (jobs.length === 0 && search.trim()) {
            const generated = dummyJobs.filter(job =>
                job.title.toLowerCase().includes(search.toLowerCase()) ||
                job.description.toLowerCase().includes(search.toLowerCase()) ||
                (job.company?.name && job.company.name.toLowerCase().includes(search.toLowerCase()))
            );
            setFilteredJobs(generated);
        } else {
            setFilteredJobs(jobs);
        }
    };

    // Dummy data for top companies (replace with actual data fetching)
    const dummyCompanies = [
        { id: 1, name: 'Company A', logoUrl: 'https://picsum.photos/80/80?random=1' },
        { id: 2, name: 'Company B', logoUrl: 'https://picsum.photos/80/80?random=2' },
        { id: 3, name: 'Company C', logoUrl: 'https://picsum.photos/80/80?random=3' },
        { id: 4, name: 'Company D', logoUrl: 'https://picsum.photos/80/80?random=4' },
        { id: 5, name: 'Company E', logoUrl: 'https://picsum.photos/80/80?random=5' },
        { id: 6, name: 'Company F', logoUrl: 'https://picsum.photos/80/80?random=6' },
        { id: 7, name: 'Company G', logoUrl: 'https://picsum.photos/80/80?random=7' },
    ];

    // Dummy data for upcoming events (replace with actual data fetching)
    const dummyEvents = [
        { id: 1, title: 'Web Development Workshop', date: 'July 7, 2024', platform: 'Online', description: 'Learn the basics of modern web development frameworks.' },
        { id: 2, title: 'Data Science Webinar', date: 'July 15, 2024', platform: 'Hybrid', description: 'Explore the latest trends in data science and machine learning.' },
        { id: 3, title: 'Mobile App Design Challenge', date: 'August 1, 2024', platform: 'Online', description: 'Participate in a design challenge for mobile applications.' },
        { id: 4, title: 'Backend Development Bootcamp', date: 'August 10, 2024', platform: 'Online', description: 'Intensive bootcamp covering backend technologies.' },
         { id: 5, title: 'Frontend Frameworks Comparison', date: 'August 18, 2024', platform: 'Online', description: 'Compare popular frontend frameworks and choose the right one.' },
    ];

    return (
        <div className="container mx-auto px-4 py-8">
            {/* Hero section with search bar */}
            <div className="bg-gray-100 py-16">
                <div className="max-w-7xl mx-auto text-center px-4 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-bold mb-4">Find your dream job now</h1>
                    <p className="text-lg text-gray-600 mb-8">5 lakh+ jobs for you to explore</p>
                    <div className="bg-white p-6 rounded-md shadow-md flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full max-w-3xl mx-auto">
                        {/* Search Input */}
                        <div className="flex items-center flex-grow space-x-2 px-3 py-2 border rounded-md w-full md:w-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                            <input
                                type="text"
                                placeholder="Enter skills / designations / companies"
                                className="outline-none flex-grow w-full"
                                value={search}
                                onChange={e => setSearch(e.target.value)}
                            />
                        </div>
                        {/* Experience Dropdown */}
                        <div className="flex items-center space-x-2 px-3 py-2 border rounded-md md:border-l md:pl-4 w-full md:w-auto">
                             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                            <select className="outline-none bg-transparent w-full" value={experience} onChange={e => setExperience(e.target.value)}>
                                {experienceOptions.map(opt => (
                                  <option key={opt} value={opt}>{opt || 'Select experience'}</option>
                                ))}
                            </select>
                        </div>
                         {/* Location Input */}
                         <div className="flex items-center space-x-2 px-3 py-2 border rounded-md md:border-l md:pl-4 w-full md:w-auto">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
                            <input
                                type="text"
                                placeholder="Enter location"
                                className="outline-none flex-grow w-full"
                                value={location}
                                onChange={e => setLocation(e.target.value)}
                            />
                        </div>
                        {/* Search Button */}
                        <button type="button" onClick={handleFilter} className="bg-blue-600 text-white px-8 py-2 rounded-md w-full md:w-auto hover:bg-blue-700">Search</button>
                    </div>
                </div>
            </div>

            <div className='max-w-7xl mx-auto my-10 px-4 sm:px-6 lg:px-8'> {/* Adjusted padding for responsiveness */}
                {/* Job Categories */}
                <div className="mb-12">
                    <h2 className="font-bold text-2xl mb-4">Browse Jobs by Category</h2>
                    <div className="flex flex-wrap gap-4">
                        {/* More Category Buttons with Icons */}
                        <button className="px-4 py-2 border rounded-full text-sm flex items-center gap-1 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m0 0l7 7M19 10v10a1 1 0 01-1 1h-3m-2 1v-5a1 1 0 00-1-1H9a1 1 0 00-1 1v5m-3-.75h.01" /></svg>Remote</button>
                        <button className="px-4 py-2 border rounded-full text-sm flex items-center gap-1 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m3 0h5M9 7h1m0 4h1m-1 4h1m8-10h1m0 4h1m0 4h1m-8 10v-2a1 1 0 011-1h3m-3 0a1 1 0 001 1v2m0 0l3 3m-3-3l-3 3" /></svg>MNC</button>
                        <button className="px-4 py-2 border rounded-full text-sm flex items-center gap-1 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" /></svg>Data Science</button>
                        <button className="px-4 py-2 border rounded-full text-sm flex items-center gap-1 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 7h6m0 10v5m-3-5v5m0 0h6m-6 0H9m9-12V3m0 0h-3m3 0h3M9 21H6a2 2 0 01-2-2V7a2 2 0 012-2h3v4c0 1.105.895 2 2 2h2a2 2 0 002-2V5h3a2 2 0 012 2v12a2 2 0 01-2 2h-3m-6 0H9" /></svg>Banking & Finance</button>
                        <button className="px-4 py-2 border rounded-full text-sm flex items-center gap-1 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l0-4h-2l0 4m8 6l-2 2l-2-2m-10 0l2 2l2-2" /></svg>Marketing</button>
                        <button className="px-4 py-2 border rounded-full text-sm flex items-center gap-1 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2m9 10V7m0 10a2 2 0 01-2 2h-2a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2" /></svg>Project Management</button>
                        <button className="px-4 py-2 border rounded-full text-sm flex items-center gap-1 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" /></svg>Sales</button>
                        <button className="px-4 py-2 border rounded-full text-sm flex items-center gap-1 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" /></svg>Startup</button>
                        <button className="px-4 py-2 border rounded-full text-sm flex items-center gap-1 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5s3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18s-3.332.477-4.5 1.253" /></svg>Fresher</button>
                        <button className="px-4 py-2 border rounded-full text-sm flex items-center gap-1 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zm-4 4a2 2 0 10-4 0 2 2 0 004 0zm-2 8a2 2 0 10-4 0 2 2 0 004 0zm2-8a2 2 0 11-4 0 2 2 0 014 0zm0 0a3 3 0 10-6 0 3 3 0 006 0z" /></svg>HR</button>
                        <button className="px-4 py-2 border rounded-full text-sm flex items-center gap-1 hover:bg-gray-100"><svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6m2 0h4m-4 0H3m0 0l-1-3m1 3v2m0-2h4m-4 0H3m0 0l-1-3m1 3v2m3-2h4m0 0l3 3m-3-3v2m0-2h4m-4 0l3 3m-3-3v2m3-2h4m-4 0l3 3m-3-3v2m-4-7V7m0 6a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" /></svg>Analytics</button>
                    </div>
                </div>

                {/* Top Companies Hiring Now */}
                <div className="my-16">
                     <h2 className="font-bold text-2xl mb-4">Top companies hiring now</h2>
                     <div className="flex flex-wrap gap-6 overflow-x-auto pb-4">
                         {/* Example Placeholder Images/Logos - replace with actual data and components */}
                         {dummyCompanies.map(company => (
                             <div key={company.id} className="flex-shrink-0 w-28 h-28 bg-white border rounded-md flex flex-col items-center justify-center text-gray-500 text-sm p-2">
                                 <img src={company.logoUrl} alt={`${company.name} Logo`} className="w-16 h-16 object-contain mb-1" />
                                 <p className="text-center">{company.name}</p>
                             </div>
                         ))}
                     </div>
                </div>

                 {/* Upcoming Events and Challenges */}
                <div className="my-16">
                     <h2 className="font-bold text-2xl mb-4">Upcoming events and challenges</h2>
                     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                         {/* Example Event Card Placeholder - replace with actual data and components*/}
                         {dummyEvents.map(event => (
                             <div key={event.id} className="border rounded-md p-4 shadow-sm">
                                 <h3 className="font-semibold text-lg mb-2">{event.title}</h3>
                                 <p className="text-sm text-gray-600">Date and Time: <span className="font-medium">{event.date}</span></p>
                                 <p className="text-sm text-gray-600">Platform: <span className="font-medium">{event.platform}</span></p>
                                 <p className="text-sm text-gray-600 mt-2">{event.description}</p>
                                 <Link to={`/events/${event.id}`} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md text-sm hover:bg-blue-600 w-full text-center">Learn More</Link>
                             </div>
                         ))}
                     </div>
                </div>

                {/* Job Search Results */}
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'> {/* Increased gap */}
                    {
                        filteredJobs.map((job) => {
                            return (
                                <JobDescription key={job._id} job={job}/>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    );
};

export default Browse;