import React from 'react'

import './Joblist.css'
import JobItem from './JobItem'

const JobList = ({jobs}) => {
    return (
        <ul>
            {
                jobs.map(job=>(
                    <JobItem
                        key={job.id}
                        id={job.id}
                        title={job.title}
                    />
                ))
            }
        </ul>
    )
}

export default JobList
