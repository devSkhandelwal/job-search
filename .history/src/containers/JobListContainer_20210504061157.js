import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useLocation} from 'react-router-dom';

import {jobListAction} from '../actions/jobAction'

const JobListContainer = () => {

    const dispatch = useDispatch();
    const jobs = useSelector(state => state.jobList)

    useEffect(()=>{
        dispatch(jobListAction()))
    },[])

    return (
        <div>
            
        </div>
    )
}

export default JobListContainer
