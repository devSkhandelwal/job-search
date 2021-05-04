import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card/Card'

const JobItem = ({title,id}) => {
    return (
        <Card>
            <li>
                <Link to={`/job/details/${id}`}>
                    <h2>{title}</h2>
                </Link>
                
            </li>
        </Card>
    )
}

export default JobItem
