import React,{useState}  from 'react'
import Button from './Button'
import FormContainer from './FormContainer'

import Input from './Input'

const ApplyForm = () => {

    const [name,setName] = useState('')
    const [email,setEmail] = useState('')

    const submitHandler = (e) => {
        e.preventDefault()
        console.log(name)
    }

    return (
        <FormContainer>
            <form onSubmit={submitHandler}>
                <Input
                    element="input"
                    type="text"
                    name="Name"
                    id="name"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <Input
                    element="input"
                    type="email"
                    name="Email"
                    id="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <Button type="submit" varient="full">Submit</Button>
            </form>
        </FormContainer>
    )
}

export default ApplyForm
