import React from 'react'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { jobDetailsAction } from '../actions/jobAction'

const JobDetailsContainer = () => {
    

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(jobDetailsAction())
    },[])

    return (
        <div>
            
        </div>
    )
}

export default JobDetailsContainer
