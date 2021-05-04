import React from 'react';
import './Button.css'

const Button = ({type,varient,children}) => {
    return (
        <>
            <button type={type}>
                {children}
            </button>
        </>
    )
}

export default Button
