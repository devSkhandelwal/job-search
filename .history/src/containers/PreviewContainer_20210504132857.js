import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const PreviewContainer = () => {

    const [previewUrl,setPreviewUrl] = useState();

    const {userData} = useSelector(state=>state.data)

    

    console.log(userData)

    useEffect(()=>{
        if(!file){
           console.log('file not there')
        }

        const fileReader = new FileReader()
        fileReader.onload= () => {
            setPreviewUrl(fileReader.result)
        }
        fileReader.readAsDataURL(userData.file)

    },[file])

    return (
        <div>
            
        </div>
    )
}

export default PreviewContainer
