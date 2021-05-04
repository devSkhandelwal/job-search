import React, { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

import { userLoginAction } from '../actions/userActions';
import Card from '../components/Card/Card';

import Button from '../components/FormElement/Button'
import Input from '../components/FormElement/Input'

const LoginContainer = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [message,setMessage] = useState('')



    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state=>state.login);

    const {userInfo,loading,error} = user;
    console.log(user)


    useEffect(()=>{
        if(userInfo){
            history.push('/')
        }
    },[userInfo,history])

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
        <div className="container">
            <Card>
                    <div className="form-wrapper"></div>
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
               
            </Card>
        </div>
    )
}

export default LoginContainer
