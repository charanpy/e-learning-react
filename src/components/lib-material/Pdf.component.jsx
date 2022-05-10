import { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import Loader from '../../components/shared/loader/Loader.component';
import { errorToaster } from '../../lib/toast';
import { pdfjs } from 'react-pdf';
pdfjs.GlobalWorkerOptions.workerSrc = '/pdf.worker.js';

const Pdf = ({ file }) => {
  console.log(file, 45);
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <>
      <Document
        file={file}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={() => errorToaster('Unable to load.Please try again')}
        className='materialPDF w-full flex-col align'
        loading={() => <Loader />}
      >
        {Array.from(new Array(numPages), (_, index) => (
          <Page key={`page_${index + 1}`} pageNumber={index + 1}>
            <p className='pageNo'>
              {index + 1} of {numPages}
            </p>
          </Page>
        ))}
      </Document>
    </>
  );
};

export default Pdf;
