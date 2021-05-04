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
                        createdAt={job.created_at}
                        location={job.location}
                        description={job.description}
                        company_logo={job.company_logo}
                        company_url={job.company_url}
                    />
                ))
            }
        </ul>
    )
}

export default JobList
