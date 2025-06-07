import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom' 
import { useDispatch, useSelector } from 'react-redux' 
import AdminJobsTable from './AdminJobsTable'
import useGetAllAdminJobs from '@/hooks/useGetAllAdminJobs'
import { setSearchJobByText } from '@/redux/jobSlice'

const AdminJobs = () => {
  useGetAllAdminJobs();
  const [input, setInput] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setSearchJobByText(input));
  }, [input]);
  return (
    <div className="max-w-7xl mx-auto py-4">
      <div className='flex items-center justify-between my-5'>
        <Input
          className="w-fit"
          placeholder="Filter by name, role"
          onChange={(e) => setInput(e.target.value)}
        />
        <Button onClick={() => navigate("/admin/jobs/create")}>New Jobs</Button>
      </div>
      <AdminJobsTable />
    </div>
  )
}

export default AdminJobs