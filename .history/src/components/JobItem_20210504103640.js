import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card/Card'

const JobItem = ({title,id,createdAt,location,company_url}) => {
    return (
        <Card>
            <li>
                <Link to={`/job/details/${id}`}>
                    <h2>{title}</h2>
                </Link>
                <p>{new Date(createdAt).toLocaleDateString()}</p>
                <p>{location}</p>
                <a href={company_url} target="blank">Vist Company Site</a>
            </li>
        </Card>
    )
}

export default JobItem
