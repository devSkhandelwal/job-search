import React,{useState}  from 'react'

import Input from './Input'

const ApplyForm = () => {

    const [name,setName] = useState('')

    return (
        <div>
            <form onSubmit={submitHandler}>
                <Input
                    element="input"
                    type="text"
                    name="Name"
                    id="name"
                    value={name}
                />
                <Input/>
            </form>
        </div>
    )
}

export default ApplyForm
