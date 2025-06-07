import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import useGetAllCompanies from '@/hooks/useGetAllCompanies'
import CompaniesTable from './CompaniesTable'
import { useDispatch } from 'react-redux'
import { setSearchCompanyByText } from '@/redux/companySlice'

const Companies = () => {
    useGetAllCompanies();
    const [input, setInput] = useState("");
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(setSearchCompanyByText(input));
    },[input]);
    return (
        <div className="max-w-7xl mx-auto py-4">
            <div className='flex items-center justify-between my-5'>
                <Input
                    className="w-fit"
                    placeholder="Filter by name"
                    onChange={(e) => setInput(e.target.value)}
                />
                <Button onClick={() => navigate("/admin/companies/create")}>New Company</Button>
            </div>
            <CompaniesTable/>
        </div>
    )
}

export default Companies