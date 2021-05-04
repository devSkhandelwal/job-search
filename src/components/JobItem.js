import React from 'react'
import { Link } from 'react-router-dom'

const JobItem = ({title,id}) => {
    return (
        <>
            <li>
                <Link to={`/job/details/${id}`}>
                    {title}
                </Link>
            </li>
        </>
    )
}

export default JobItem
