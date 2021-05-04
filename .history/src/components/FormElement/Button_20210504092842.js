import React from 'react';
import './Button.css'

const Button = ({type,varient,children}) => {
    return (
        <>
            <button type={type} className={`button ${varient}`}>
                {children}
            </button>
        </>
    )
}

export default Button
