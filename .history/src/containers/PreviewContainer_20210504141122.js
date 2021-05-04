import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import PDFViewer from 'pdf-viewer-reactjs'

const PreviewContainer = () => {

 
    const {userData} = useSelector(state=>state.data)

    const {name,email,file} = userData

    console.log(userData)

    console.log(file)

    return (
        <PDFViewer
            document={{
                url: ""
            }}
        />
    )
}

export default PreviewContainer
