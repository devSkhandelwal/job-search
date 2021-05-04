import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { Document, Page } from 'react-pdf';

const PreviewContainer = () => {

    
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    const {userData} = useSelector(state=>state.data)

    const {name,email,file} = userData

    console.log(userData)

    console.log(file)

    return (
        <PDFViewer
            document={{
                url: {file}
            }}
        />
    )
}

export default PreviewContainer
