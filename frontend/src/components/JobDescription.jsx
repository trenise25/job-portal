import React, { useEffect, useState } from 'react'
import { Badge } from './ui/badge'
import { Button } from './ui/button'
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { APPLICATION_API_END_POINT, JOB_API_END_POINT } from '@/utils/constant';
import { setSingleJob } from '@/redux/jobSlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import Footer from './shared/Footer';
import { useAuth } from '../context/AuthContext';

const JobDescription = () => {
    const {singleJob} = useSelector(store => store.job);
    const {user} = useSelector(store=>store.auth);
    const isIntiallyApplied = singleJob?.applications?.some(application => application.applicant === user?._id) || false;
    const [isApplied, setIsApplied] = useState(isIntiallyApplied);
    const [cvFile, setCvFile] = useState(null);
    const [applicationStatus, setApplicationStatus] = useState('');

    const params = useParams();
    const jobId = params.id;
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const applyJobHandler = async () => {
        try {
            const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, {withCredentials:true});
            
            if(res.data.success){
                setIsApplied(true); // Update the local state
                const updatedSingleJob = {...singleJob, applications:[...singleJob.applications,{applicant:user?._id}]}
                dispatch(setSingleJob(updatedSingleJob)); // helps us to real time UI update
                toast.success(res.data.message);

            }
        } catch (error) {
            console.log(error);
            toast.error(error.response.data.message);
        }
    }

    useEffect(()=>{
        const fetchSingleJob = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setSingleJob(res.data.job));
                    setIsApplied(res.data.job.applications.some(application=>application.applicant === user?._id)) // Ensure the state is in sync with fetched data
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchSingleJob(); 
    },[jobId,dispatch, user?._id]);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.type === 'application/pdf') {
            setCvFile(file);
        } else {
            alert('Please upload a PDF file');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!cvFile) {
            alert('Please upload your CV');
            return;
        }
        // Here you would typically send the application to your backend
        setApplicationStatus('pending');
        alert('Application submitted successfully!');
    };

    // Dummy data for demonstration
    const jobData = {
        id: jobId,
        title: singleJob?.title,
        company: {
            name: singleJob?.company?.name,
            logo: singleJob?.company?.logo,
            location: singleJob?.company?.location,
            website: singleJob?.company?.website,
            founded: singleJob?.company?.founded,
            size: singleJob?.company?.size,
            industry: singleJob?.company?.industry,
            description: singleJob?.company?.description,
            benefits: singleJob?.company?.benefits
        },
        details: {
            type: singleJob?.details?.type,
            experience: singleJob?.details?.experience,
            salary: singleJob?.details?.salary,
            posted: singleJob?.details?.posted,
            deadline: singleJob?.details?.deadline,
            location: singleJob?.details?.location,
            totalApplicants: singleJob?.details?.totalApplicants,
            views: singleJob?.details?.views
        },
        description: singleJob?.description,
        responsibilities: singleJob?.responsibilities,
        requirements: singleJob?.requirements,
        preferredSkills: singleJob?.preferredSkills,
        applicationProcess: singleJob?.applicationProcess,
        culture: singleJob?.culture
    };

    const relatedJobs = [
        {
            title: "Business Analyst",
            experience: "8-11 Yrs",
            location: "Hyderabad, Pune, Bengaluru",
            posted: "8 days ago"
        },
        {
            title: "Java Full Stack Developer",
            experience: "6-9 Yrs",
            location: "Hyderabad, Bengaluru",
            posted: "2 days ago"
        },
        {
            title: "Fullstack Developer",
            experience: "5-10 Yrs",
            location: "Mumbai, Pune, Chennai",
            posted: "1 day ago"
        }
    ];

    const companyMilestones = [
        {
            year: 2024,
            text: "Persistent named as the 'Most Promising Company' of the Year at the 19th edition of CNBC-TV18's India Business Leader Awards."
        },
        {
            year: 2024,
            text: 'Persistent recognized for "Significant achievement in HR Excellence" at the 14th CII National HR Excellence Award Confluence.'
        },
        {
            year: 2023,
            text: 'Persistent recognized as a Leader in ISG Provider Lens (TM) for Next-Gen ADM Services.'
        }
    ];

    const [showFullDesc, setShowFullDesc] = useState(false);

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="flex flex-col lg:flex-row gap-8">
                {/* Main Content */}
                <div className="flex-1 space-y-6">
                    {/* Job Card */}
                    <div className="bg-white rounded-xl shadow p-6 flex flex-col gap-4">
                        <div className="flex items-center gap-4">
                            <img src={jobData.company.logo} alt={jobData.company.name} className="w-16 h-16 rounded-lg object-contain border" />
                            <div>
                                <h1 className="text-2xl font-bold text-gray-900">{jobData.title}</h1>
                                <div className="flex items-center gap-2 text-gray-700 mt-1">
                                    <span>{jobData.company.name}</span>
                                    <span className="text-yellow-500">★</span>
                                    <span>{jobData.company.rating}</span>
                                    <span className="text-xs text-gray-500">({jobData.company.reviews} Reviews)</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-6 text-gray-600 text-sm mt-2">
                            <div className="flex items-center gap-2">
                                <span className="material-icons">work</span>
                                {jobData.details.experience}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-icons">payments</span>
                                {jobData.details.salary}
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="material-icons">location_on</span>
                                {jobData.details.location}
                            </div>
                        </div>
                        <div className="flex flex-wrap gap-6 text-gray-500 text-xs mt-2">
                            <span>Posted: {jobData.details.posted}</span>
                            <span>Total Applicants: {jobData.details.totalApplicants}</span>
                            <span>Views: {jobData.details.views}</span>
                        </div>
                        <div className="flex gap-4 mt-4">
                            <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-6 rounded-lg">Register to apply</button>
                            <button className="bg-white border border-blue-600 text-blue-600 font-semibold py-2 px-6 rounded-lg">Login to apply</button>
                        </div>
                    </div>

                    {/* Job Description */}
                    <div className="bg-white rounded-xl shadow p-6">
                        <h2 className="text-lg font-bold mb-2">Job description</h2>
                        <div className="mb-2 font-semibold">About Position:</div>
                        <div className="text-gray-700 mb-2">
                            {showFullDesc ? jobData.description + ' (Full job description would go here...)' : jobData.description}
                            {!showFullDesc && (
                                <span className="text-blue-600 cursor-pointer ml-2" onClick={() => setShowFullDesc(true)}>
                                    read more
                                </span>
                            )}
                        </div>
                        <div className="mt-4">
                            <div className="font-semibold mb-1">Key Skills</div>
                            <div className="flex flex-wrap gap-2">
                                {jobData.preferredSkills?.map((skill, i) => (
                                    <span key={i} className="border border-gray-300 rounded-full px-3 py-1 text-sm bg-gray-100">{skill}</span>
                                ))}
                            </div>
                        </div>
                        <div className="flex gap-2 mt-4">
                            {/* Social icons as SVGs */}
                            <a href="#" className="text-gray-500 hover:text-blue-600"><svg width="24" height="24" fill="currentColor"><path d="M22.675 0h-21.35C.595 0 0 .592 0 1.326v21.348C0 23.408.595 24 1.325 24h11.495v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.797.143v3.24l-1.918.001c-1.504 0-1.797.715-1.797 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116C23.406 24 24 23.408 24 22.674V1.326C24 .592 23.406 0 22.675 0"/></svg></a>
                            <a href="#" className="text-gray-500 hover:text-black"><svg width="24" height="24" fill="currentColor"><path d="M22.162 5.656c-.793.352-1.644.59-2.538.698a4.48 4.48 0 0 0 1.962-2.475 8.94 8.94 0 0 1-2.828 1.082A4.466 4.466 0 0 0 16.11 4c-2.466 0-4.466 2-4.466 4.466 0 .35.04.692.116 1.02C7.728 9.33 4.1 7.5 1.67 4.882c-.384.66-.604 1.426-.604 2.243 0 1.548.788 2.915 1.99 3.717a4.48 4.48 0 0 1-2.025-.56v.057c0 2.163 1.54 3.97 3.584 4.378-.375.102-.77.157-1.178.157-.288 0-.563-.028-.834-.08.564 1.76 2.2 3.04 4.137 3.073A8.96 8.96 0 0 1 0 19.54a12.66 12.66 0 0 0 6.86 2.01c8.233 0 12.747-6.823 12.747-12.747 0-.194-.004-.388-.013-.58A9.13 9.13 0 0 0 24 4.59a8.93 8.93 0 0 1-2.538.698z"/></svg></a>
                            <a href="#" className="text-gray-500 hover:text-blue-700"><svg width="24" height="24" fill="currentColor"><path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11.5 19h-3v-9h3v9zm-1.5-10.28c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.38v4.59h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.74z"/></svg></a>
                        </div>
                    </div>

                    {/* About the company */}
                    <div className="bg-white rounded-xl shadow p-6">
                        <h2 className="text-lg font-bold mb-2">About the company</h2>
                        <div className="flex items-center gap-4 mb-2">
                            <img src={jobData.company.logo} alt={jobData.company.name} className="w-12 h-12 rounded-lg object-contain border" />
                            <div>
                                <div className="font-semibold">{jobData.company.name}</div>
                                <div className="text-gray-600 text-sm">{jobData.company.location}</div>
                            </div>
                        </div>
                        <div className="text-gray-700 mb-2">{jobData.company.description}</div>
                        <a href={jobData.company.website} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 font-semibold text-sm">Visit Website →</a>
                    </div>
                </div>

                {/* Sidebar */}
                <div className="w-full lg:w-96 flex-shrink-0 flex flex-col gap-6">
                    {/* Related Jobs */}
                    <div className="bg-white rounded-xl shadow p-6">
                        <h3 className="font-bold mb-4">Persistent roles you might be interested in</h3>
                        <div className="space-y-4">
                            {relatedJobs.map((job, i) => (
                                <div key={i} className="flex items-center gap-3 border-b pb-3 last:border-b-0 last:pb-0">
                                    <img src={jobData.company.logo} alt="logo" className="w-10 h-10 rounded object-contain border" />
                                    <div className="flex-1">
                                        <div className="font-semibold text-sm">{job.title}</div>
                                        <div className="text-xs text-gray-500">{job.experience}</div>
                                        <div className="text-xs text-gray-500">{job.location}</div>
                                        <div className="text-xs text-gray-400">Posted {job.posted}</div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    {/* Awards & Recognitions */}
                    <div className="bg-white rounded-xl shadow p-6">
                        <h3 className="font-bold mb-4 flex items-center gap-2"><span>🏆</span>Awards & Recognitions</h3>
                        <div className="space-y-4">
                            {companyMilestones.map((milestone, i) => (
                                <div key={i} className="flex gap-3 items-start">
                                    <div className="font-bold text-lg text-yellow-600 min-w-[40px]">{milestone.year}</div>
                                    <div className="text-gray-700 text-sm">{milestone.text}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default JobDescription