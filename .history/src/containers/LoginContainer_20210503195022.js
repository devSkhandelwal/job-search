import React, { useState } from 'react'
import Button from '../components/FormElement/Button'
import Input from '../components/FormElement/Input'

const LoginContainer = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');


    const submitHandler = (e) => {
        e.preventDefault();
        console.log(
            name,
            email,
            password,
            setConfirmPassword
        )
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <Input
                    id="name"
                    name="Name"
                    type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <Input
                    id="email"
                    name="Email"
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <Input
                    id="password"
                    name="Password"
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <Input
                    id="confirmPassword"
                    name="Confirm Password"
                    type="password"
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                />
                <Button>
                    Sign Up
                </Button>
            </form> 
        </>
    )
}

export default LoginContainer
