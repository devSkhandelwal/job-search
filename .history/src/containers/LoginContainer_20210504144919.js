import React, { useState,useEffect } from 'react';
import {useDispatch,useSelector} from 'react-redux'
import {useHistory} from 'react-router-dom'

import { userLoginAction } from '../actions/userActions';
import Card from '../components/Card/Card';
import './LoginContainer.css'
import Button from '../components/FormElement/Button'
import Input from '../components/FormElement/Input'
import FormContainer from '../components/FormElement/FormContainer';
import Message from '../components/Message';

const LoginContainer = () => {

    const [name,setName] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [confirmPassword,setConfirmPassword] = useState('');
    const [message,setMessage] = useState('')
    const [isValid,setIsValid] = useState(true)



    const history = useHistory();
    const dispatch = useDispatch();
    const user = useSelector(state=>state.login);

    const {userInfo} = user;

    

    useEffect(()=>{

        if(userInfo){
            history.push('/job/filter')
        }

        
    },[userInfo,history])

    const submitHandler = (e) => {
        e.preventDefault();
        if(name === '' || email ==='' || password === '' || confirmPassword === '' ){
            setMessage('Required all fields')
            return;
        }

        if(password === confirmPassword){
            setMessage('Password does not match')
            return;
        }

        dispatch(userLoginAction(name,email))


        
    }

    return (
        <div className="container login__container">
            <Card>
            <h2>User Login </h2>

            {message && <Message varient="danger">{message}</Message>}

                <FormContainer>
                    <form onSubmit={submitHandler} className="form">
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
                        <Button type="submit" varient="full">
                            Sign Up
                        </Button>
                    </form> 
                </FormContainer>
            </Card>
        </div>
    )
}

export default LoginContainer
