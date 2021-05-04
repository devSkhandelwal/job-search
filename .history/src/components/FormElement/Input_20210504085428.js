import React from 'react';

import './Input.css'

const Input = ({element,onChange,value,type,name,id}) => {

    const inputElement = element === 'input' ? (
        <input
            id={id}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
        />
    ):null

    return (
        <div className="input__element">
            {inputElement}
        </div>
    )
}

export default Input
