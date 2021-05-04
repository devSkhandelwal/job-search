import React, { useState } from 'react'
import Input from '../components/FormElement/Input'

const jobFormContainer = () => {


    const [language,setLanguage] = useState('')

    return (
        <div>
            <form>
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
