import React, { useState } from 'react'
import {useHistory} from 'react-router-dom'

import Input from '../components/FormElement/Input'

const jobFormContainer = () => {


    const [language,setLanguage] = useState('');
    const history = useHistory();


    const submitHandler = (e) =>{
        e.prevnetDefault()
        history.push(``)
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
            </form>
        </div>
    )
}

export default jobFormContainer
