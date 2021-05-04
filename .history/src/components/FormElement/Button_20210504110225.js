import React from 'react';
import './Button.css'

const Button = ({type,varient,onClick,children}) => {
    return (
        <>
            <button type={type} onClick={onClick}  className={`button ${varient}`}>
                {children}
            </button>
        </>
    )
}

export default Button
