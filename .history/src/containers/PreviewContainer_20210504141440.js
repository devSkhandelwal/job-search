import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Viewer } from '@react-pdf-viewer/core';

// Plugins
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// Import styles
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';

const PreviewContainer = () => {


   

// Create new plugin instance
const defaultLayoutPluginInstance = defaultLayoutPlugin();

 
    const {userData} = useSelector(state=>state.data)

    const {name,email,file} = userData

    console.log(userData)

    console.log(file)

    return (
        
<Viewer
    fileUrl='/assets/pdf-open-parameters.pdf'
    plugins={[
        // Register plugins
        defaultLayoutPluginInstance,
        ...
    ]}
/>
    )
}

export default PreviewContainer
