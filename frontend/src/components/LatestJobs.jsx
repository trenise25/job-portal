import React from 'react'
import LatestJobCards from './LatestJobCards';
import { useSelector } from 'react-redux'; 
import { Link } from 'react-router-dom';

// const randomJobs = [1, 2, 3, 4, 5, 6, 7, 8];

const LatestJobs = () => {
    const {allJobs} = useSelector(store=>store.job);
   
    return (
        <div className='max-w-7xl mx-auto my-20'>
            <h1 className='text-4xl font-bold'><span className='text-[#6A38C2]'>Latest & Top </span> Job Openings</h1>
            <div className='grid grid-cols-3 gap-4 my-5'>
                {
                    allJobs.length <= 0 ? (
                        <div className="col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                          {/* Premium Membership Card */}
                          <div className="bg-[#eef0fe] rounded-xl p-8 flex flex-col justify-between shadow-md">
                            <div className="flex flex-col items-start gap-4">
                              <img src="https://img.icons8.com/fluency/96/000000/crown.png" alt="Premium Membership" className="w-24 h-24 mb-4" />
                              <h2 className="text-2xl font-bold text-gray-900 mb-2">Premium Membership</h2>
                              <p className="text-gray-700 mb-4">Increase Your Chances of Getting Shortlisted</p>
                            </div>
                            <Link to="/premium-membership" className="text-[#F9A826] font-bold flex items-center gap-2 mt-4">Know More <span className="text-xl">→</span></Link>
                          </div>
                          {/* Placement Paper Card */}
                          <div className="bg-[#fef3f7] rounded-xl p-8 flex flex-col justify-between shadow-md">
                            <div className="flex flex-col items-start gap-4">
                              <img src="https://img.icons8.com/color/96/000000/task.png" alt="Placement Paper" className="w-24 h-24 mb-4" />
                              <h2 className="text-2xl font-bold text-gray-900 mb-2">Placement Paper</h2>
                              <p className="text-gray-700 mb-4">Here is the chance you can learn, Practice & Improve your skills</p>
                            </div>
                            <Link to="/placement-paper" className="text-[#F9A826] font-bold flex items-center gap-2 mt-4">Know More <span className="text-xl">→</span></Link>
                          </div>
                          {/* Interview Grooming Card */}
                          <div className="bg-[#fef3f7] rounded-xl p-8 flex flex-col justify-between shadow-md">
                            <div className="flex flex-col items-start gap-4">
                              <img src="https://img.icons8.com/color/96/000000/conference-call.png" alt="Interview Grooming" className="w-24 h-24 mb-4" />
                              <h2 className="text-2xl font-bold text-gray-900 mb-2">Interview Grooming</h2>
                              <p className="text-gray-700 mb-4">How to attend an interview confidently? Is there a secret?</p>
                            </div>
                            <Link to="/interview-grooming" className="text-[#F9A826] font-bold flex items-center gap-2 mt-4">Know More <span className="text-xl">→</span></Link>
                          </div>
                        </div>
                    ) : allJobs?.slice(0,6).map((job) => <LatestJobCards key={job._id} job={job}/>)
                }
            </div>
        </div>
    )
}

export default LatestJobs