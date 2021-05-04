import React from 'react'
import { useSelector } from 'react-redux'

const PreviewContainer = () => {

    const {data} = useSelector(state=>state.data)

    console.log(userData)
    return (
        <div>
            
        </div>
    )
}

export default PreviewContainer
