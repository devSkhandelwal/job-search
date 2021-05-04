import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

import Input from '../components/FormElement/Input';
import Button from '../components/FormElement/Button'
import Card from '../components/Card/Card';
import './JobFilterContainer.css'

const JobFilterContainer = () => {


    const [language,setLanguage] = useState('');
    const history = useHistory();


    const submitHandler = (e) =>{
        e.preventDefault()
        history.push(`/jobs?language=${language}`);
        setLanguage('')
    }

    return (
        <div className="container filter__container"> 
            <Card>
                <form onSubmit={submitHandler} className="form">
                    <Input
                        element="input"
                        id="language"
                        name="Language"
                        type="text"
                        value={language}
                        onChange={(e)=>setLanguage(e.target.value)}
                    />
                    <Button type="submit" varient="half">Submit</Button>
                </form>
            </Card>
        </div>
    )
}

export default JobFilterContainer;
