import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';

import './PreviewContainer.css'


const PreviewContainer = () => {

    const {userData} = useSelector(state=>state.data)

    const {name,email,file} = userData

    console.log(userData)

    console.log(file)

    return (
        <div className="preview">
            
            <object data={file} type="application/pdf" className="file">
                <p>Alternative text - include a link <a href={file}>to the PDF!</a></p>
            </object>
            <div className="info">
                <p>Name:{name}</p>
                <p>Email:{email}</p>
            </div>
          
        </div>
    
    )
}

export default PreviewContainer
