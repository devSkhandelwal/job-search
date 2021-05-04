import React from 'react'

import './JobList.css'
import JobItem from './JobItem'

const JobList = ({jobs}) => {
    return (
        <ul className="job-list">
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
