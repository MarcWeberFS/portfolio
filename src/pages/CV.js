import React from 'react';
import CV from '../assets/CV_Marc_Weber.pdf';
import { Worker, Viewer } from '@react-pdf-viewer/core';

import '@react-pdf-viewer/core/lib/styles/index.css';

// Documentation: https://react-pdf-viewer.dev/docs/basic-usage/

const CVPage = () => {
  return (
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={CV} />
    </Worker>
    );
   };

export default CVPage;
