import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const PreviewContainer = () => {

    
    const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }
    const {userData} = useSelector(state=>state.data)

    const {name,email,file} = userData

    console.log(userData)

    

    return (
        <div>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
      >
        <Page pageNumber={pageNumber} />
      </Document>
      <p>Page {pageNumber} of {numPages}</p>
    </div>
    )
}

export default PreviewContainer
