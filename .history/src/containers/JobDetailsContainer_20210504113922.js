import React from 'react'
import { useEffect,useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import ReactMarkdown  from 'react-markdown'

import Button from "../components/FormElement/Button"
import { jobDetailsAction } from '../actions/jobAction';
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

    const [collapse,setCollapse] = useState(false)


    const clickHandler = (e) => {
        setCollapse(prevState => !prevState)
    }

    return (
        <div className="container">
        
           {
               loading ? <h1>loading</h1> : error ? <h1>{error}</h1>:(
                   <div className="details">
                       <div className="intro">
                            <h2>{job.title}</h2>
                            <img src={job.company_logo} alt="logo" />
                       </div>
                       <div className="locate">
                           <p>{new Date(job.created_at).toLocaleDateString()}</p>
                           <p>{job.location}</p>
                       </div>

                       <ReactMarkdown source={job.description} />
                       
                       <Button type="button" onClick={clickHandler} varient="outlined">Apply Form</Button>    

                        {collapse ? <ApplyForm/> :null}

                   </div>
                   
               )
               
           }
           
          
   
       
        </div>
    )
}

export default JobDetailsContainer
