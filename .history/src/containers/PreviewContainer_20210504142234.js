import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';


const PreviewContainer = () => {


   


 
    const {userData} = useSelector(state=>state.data)

    const {name,email,file} = userData

    console.log(userData)

    console.log(file)

    return (
        <div>
           <object data={file} type="application/pdf" width="100%" height="100%">
  <p>Alternative text - include a link <a href={file}>to the PDF!</a></p>
</object>
        </div>
    
    )
}

export default PreviewContainer
