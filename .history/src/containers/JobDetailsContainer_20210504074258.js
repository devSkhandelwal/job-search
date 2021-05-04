import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { jobDetailsAction } from '../actions/jobAction'

const JobDetailsContainer = () => {
    
    const jobId = useParams().jobId

    const dispatch = useDispatch()
    const jobDetails = useSelector(state => state.jobDetails)

    const {loading,error,job} = jobDetails

    useEffect(()=>{
        dispatch(jobDetailsAction(jobId))
    },[])

    return (
        <div>
            
        </div>
    )
}

export default JobDetailsContainer
