import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


 
    const {userData} = useSelector(state=>state.data)

    const {name,email,file} = userData

    console.log(userData)

    console.log(file)

    return (
        <div>
           
        </div>
    
    )
}

export default PreviewContainer
