import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

import Input from '../components/FormElement/Input';
import Button from '../components/FormElement/Button'

const JobFilterContainer = () => {


    const [language,setLanguage] = useState('');
    const history = useHistory();


    const submitHandler = (e) =>{
        e.preventDefault()
        history.push(`/jobs?language=${language}`);
        setLanguage('')
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <Input
                    element="input"
                    id="language"
                    name="Language"
                    type="text"
                    value={language}
                    onChange={(e)=>setLanguage(e.target.value)}
                />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default JobFilterContainer;
