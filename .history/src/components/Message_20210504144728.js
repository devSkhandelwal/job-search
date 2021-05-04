import React from 'react'

import './Message.css'


const Message = ({children,varient}) => {
    return (
        <div className={`message ${varient}`}>
            {children}
        </div>
    )
}

export default Message
