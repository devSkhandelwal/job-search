import React from 'react'
import { useSelector } from 'react-redux'

const PreviewContainer = () => {

    const data = useSelector(state=>state.data)

    console.log(data)
    return (
        <div>
            
        </div>
    )
}

export default PreviewContainer
