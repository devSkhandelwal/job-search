import React from 'react'

import './Message'


const Message = ({children,varient}) => {
    return (
        <div className={`${varient}`}>
            {children}
        </div>
    )
}

export default Message
