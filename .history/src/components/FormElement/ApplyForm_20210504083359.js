import React,{useState}  from 'react'
import Button from './Button'

import Input from './Input'

const ApplyForm = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')

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
                <Input
                    element="input"
                    type="email"
                    name="Email"
                    id="email"
                    value={email}
                />
                <Button type="submit">Submit</Button>
            </form>
        </div>
    )
}

export default ApplyForm
