import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card/Card'

const JobItem = ({title,id,createdAt}) => {
    return (
        <Card>
            <li>
                <Link to={`/job/details/${id}`}>
                    <h2>{title}</h2>
                </Link>
                <p>{new Date(job.created_at).toLocaleDateString()}</p>
                
            </li>
        </Card>
    )
}

export default JobItem
