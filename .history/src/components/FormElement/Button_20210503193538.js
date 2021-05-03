import React from 'react'

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
