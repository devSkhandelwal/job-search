import React from 'react';
import './Button.css'

const Button = ({type,varient,onClick,children,disabled}) => {

    return (

        

        <>
            <button type={type} onClick={onClick}  className={`button ${varient}`} disabled>
                {children}
            </button>
        </>
    )
}

export default Button
