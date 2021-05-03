import React, { useState,useEffect } from 'react';
import {  } from 'react';
import {useDispatch,useSelector} from 'react-redux'

import { userLoginAction } from '../actions/userActions';

import Button from '../components/FormElement/Button'
import Input from '../components/FormElement/Input'

const LoginContainer = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [message,setMessage] = useState('')




    const dispatch = useDispatch();
    const user = useSelector(state=>state.login)


    useEffect(()=>{
        if()
    },[])

    const submitHandler = (e) => {
        e.preventDefault();
        if(name === '' || email ==='' || password === '' || confirmPassword === '' ){
            setMessage('Required all fields')
        }

        if(password === confirmPassword){
            setMessage('Password does not match')
        }

        dispatch(userLoginAction(name,email))
        
    }

    return (
        <>
            <form onSubmit={submitHandler}>
                <Input
                    element="input"
                    id="name"
                    name="Name"
                    type="text"
                    value={name}
                    onChange={(e)=>setName(e.target.value)}
                />
                <Input
                    element="input"
                    id="email"
                    name="Email"
                    type="email"
                    value={email}
                    onChange={(e)=>setEmail(e.target.value)}
                />
                <Input
                    element="input"
                    id="password"
                    name="Password"
                    type="password"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                />
                <Input
                    element="input"
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
