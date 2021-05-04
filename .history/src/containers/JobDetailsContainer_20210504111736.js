import React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'

import Button from "../components/FormElement/Button"
import { jobDetailsAction } from '../actions/jobAction'
import Input from '../components/FormElement/Input'
import ApplyForm from '../components/FormElement/ApplyForm'
import Card from '../components/Card/Card';
import './JobDetailsContainer.css'

const JobDetailsContainer = () => {
    
    const jobId = useParams().jobId

    const dispatch = useDispatch()
    const jobDetails = useSelector(state => state.jobDetails)
    const {loading,error,job} = jobDetails

    useEffect(()=>{
        dispatch(jobDetailsAction(jobId))
    },[])




    console.log(job)

    return (
        <div className="container">
        <Card varient="expand">
           {
               loading ? <h1>loading</h1> : error ? <h1>{error}</h1>:(
                   <div className="details">
                       <div className="intro">
                            <h2>{job.title}</h2>
                            <img src={job.company_logo} alt="logo" />
                       </div>
                       <div>
                           <p>{new Date(job.created_at).toLocaleDateString()}</p>
                           <p>{job.location}</p>
                       </div>
                   </div>
                   
               )
               
           }
           <Button type="button">Apply Form</Button>
          
   
        </Card>
        </div>
    )
}

export default JobDetailsContainer
