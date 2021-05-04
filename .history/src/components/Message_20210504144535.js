import React from 'react'


const Message = ({children,varient}) => {
    return (
        <div className={`${varient}`}>
            {children}
        </div>
    )
}

export default Message
