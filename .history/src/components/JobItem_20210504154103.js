import React from 'react'
import { Link, useHistory } from 'react-router-dom'

import './JobItem.css'

import Card from './Card/Card'
import Button from './FormElement/Button'

const JobItem = ({title,id,createdAt,location,company_url,company_logo}) => {
   
    const history = useHistory();
    
    const clickHandler = () =>{
        history.push(`/job/details/${id}`)
    }

    return (
        <Card>
            <li className="job-item">
                <div className="data">
                    <Link to={`/job/details/${id}`}>
                        <h2>{title}</h2>
                    </Link>
                    <img src={company_logo} alt="logo"/>
                </div>
                <div className="data">
                    <p>{new Date(createdAt).toLocaleDateString()}</p>
                    <p>{location}</p>
                </div>
                <div className="links">
                    <a href={company_url} target="blank">Vist Company Site</a>
                    <Button type="button" onClick={clickHandler} varient="outlined">
                        View Details
                    </Button>
                </div>
            </li>
        </Card>
    )
}

export default JobItem
