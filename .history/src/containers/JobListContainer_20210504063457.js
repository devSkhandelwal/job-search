import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useLocation} from 'react-router-dom';

import {jobListAction} from '../actions/jobAction'
import JobList from '../components/JobList';

const JobListContainer = () => {

    const dispatch = useDispatch();
    const jobList = useSelector(state => state.jobList)

    const location = useLocation();

    const language = location.search ? location.search.split('=')[1] : null

    const {loading,Jobs,error} = jobList;

    useEffect(()=>{
        dispatch(jobListAction(language))
    },[]);

    return (
        <div>
            <JobList jobs = {jobs}/>
        </div>
    )
}

export default JobListContainer
