import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useLocation} from 'react-router-dom';

import {jobListAction} from '../actions/jobAction'
import JobList from '../components/JobList';
import Loader from '../components/Loader';
import Message from '../components/Message';

const JobListContainer = () => {

    const dispatch = useDispatch();
    const jobList = useSelector(state => state.jobList)

    const location = useLocation();
    const language = location.search ? location.search.split('=')[1] : null

    
    const {loading,jobs,error} = jobList;



    useEffect(()=>{
        dispatch(jobListAction(language))
    },[]);

    console.log(jobs)
    return (
        <div>
            {
                loading ? <Loader/> : error ? <Message>{error}</Message>:jobs.length === 0 ?<div className=""><Message varient="success">No jobs yet please enter job filter first</Message></div>:(
                    <JobList jobs = {jobs}/>
                )
            }      
        </div>
    )
}

export default JobListContainer
