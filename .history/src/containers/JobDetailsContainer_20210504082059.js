import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import Button from "../components/FormElement/Button"
import { jobDetailsAction } from '../actions/jobAction'

const JobDetailsContainer = () => {
    
    const jobId = useParams().jobId

    const dispatch = useDispatch()
    const jobDetails = useSelector(state => state.jobDetails)

    const {loading,error,job} = jobDetails

    useEffect(()=>{
        dispatch(jobDetailsAction(jobId))
    },[])


    console.log(jobDetails)

    return (
        <div>
           {
               loading ? <h1>loading</h1> : error ? <h1>{error}</h1>:(
                   <div>
                       {job.title}
                   </div>
                   
               )
               
           }

           <form type="submit">

           </form>

           <Button type="button">Apply Form</Button>

        </div>
    )
}

export default JobDetailsContainer
