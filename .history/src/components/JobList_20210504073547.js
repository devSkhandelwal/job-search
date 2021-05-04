import React from 'react'
import JobItem from './JobItem'

const JobList = ({jobs}) => {
    return (
        <ul>
            {
                jobs.map(job=>(
                    <JobItem
                        title={job.title}
                    />
                ))
            }
        </ul>
    )
}

export default JobList
