import React, { useState } from 'react'
import Button from '../components/FormElement/Button'
import Input from '../components/FormElement/Input'

const LoginContainer = () => {

    const [name,setName] = useState('')

    return (
        <>
            <form>
                <Input
                    id="name"
                    name="Name"
                    type="text"
                    value={}
                />
                <Button>
                    Sign Up
                </Button>
            </form> 
        </>
    )
}

export default LoginContainer
