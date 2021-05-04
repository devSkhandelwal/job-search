import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

import Input from '../components/FormElement/Input';
import Button from '../components/FormElement/Button'

const jobFilterContainer = () => {


    const [language,setLanguage] = useState('');
    const history = useHistory();


    const submitHandler = (e) =>{
        e.prevnetDefault()
        history.push(`/jobs?language=${language}`);
        setLanguage('')
    }

    return (
        <div>
            <form onSubmit={submitHandler}>
                <Input
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

export default jobFilterContainer
