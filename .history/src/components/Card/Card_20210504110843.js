import React from 'react';

import './Card.css'

const Card = ({children,varient}) => {
    return (
        <div className={`card ${expand}`}>
            {children}
        </div>
    )
}

export default Card
