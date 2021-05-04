import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router'
import { jobDetailsAction } from '../actions/jobAction'

const JobDetailsContainer = () => {
    
    const jobId = useParams().jobId

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(jobDetailsAction(jobId))
    },[])

    return (
        <div>
            
        </div>
    )
}

export default JobDetailsContainer
