import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card/Card'

const JobItem = ({title,id}) => {
    return (
        <Card>
            <li>
                <Link to={`/job/details/${id}`}>
                    {title}
                </Link>
            </li>
        </Card>
    )
}

export default JobItem
