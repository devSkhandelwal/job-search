import React from 'react'

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
        <div>
            {inputElement}
        </div>
    )
}

export default Input
