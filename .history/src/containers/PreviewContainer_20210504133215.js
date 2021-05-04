import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const PreviewContainer = () => {

    const [previewUrl,setPreviewUrl] = useState();

    const {userData} = useSelector(state=>state.data)

    const {name,email,file} = userData

    console.log(userData)

    useEffect(() => {
        if (!file) {
          return;
        }
        const fileReader = new FileReader();
        fileReader.onload = () => {
          setPreviewUrl(fileReader.result);
        };
        fileReader.readAsDataURL(file);
      }, [file]);

    return (
        <div>
            {previewUrl && <img src={previewUrl} alt="Preview" />}
            {!previewUrl && <p>please pick image</p>}
        </div>
    )
}

export default PreviewContainer
