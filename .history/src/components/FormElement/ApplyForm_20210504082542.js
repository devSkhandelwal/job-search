import React from 'react'
import Input from './Input'

const ApplyForm = () => {
    return (
        <div>
            <form onSubmit={submitHandler}>
                <Input
                    element="input"
                    
                />
                <Input/>
            </form>
        </div>
    )
}

export default ApplyForm
