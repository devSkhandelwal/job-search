import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {useLocation} from 'react-router-dom';

import {jobListAction} from '../actions/jobAction'

const JobListContainer = () => {

    const dispatch = useDispatch();
    const jobs = useSelector(state => state.jobList)

    const location = useLocation();

    const language = location.search ? location.search.split('=')[1] : null

    useEffect(()=>{
        dispatch(jobListAction())
    },[]);
    
    return (
        <div>
            
        </div>
    )
}

export default JobListContainer
