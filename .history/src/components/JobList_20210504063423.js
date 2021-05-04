import React from 'react'
import JobItem from './JobItem'

const JobList = ({jobs}) => {
    return (
        <ul>
            {
                jobs.map(job=>(
                    <JobItem/>
                ))
            }
        </ul>
    )
}

export default JobList
