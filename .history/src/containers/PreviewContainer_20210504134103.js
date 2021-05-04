import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const PreviewContainer = () => {

    

    const {userData} = useSelector(state=>state.data)

    const {name,email,file} = userData

    console.log(userData)

    

    return (
        <div>
            {previewUrl && <img src={previewUrl} alt="Preview" />}
            {!previewUrl && <p>please pick image</p>}
        </div>
    )
}

export default PreviewContainer
