import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import CV from '../assets/CV_Marc_Weber.pdf';

const CVPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <Worker workerUrl={`https://unpkg.com/pdfjs-dist@${version}/build/pdf.worker.min.js`}>
        <div style={{ height: '100vh', width: '100%', overflow: 'hidden' }}>
          <Viewer fileUrl={CV} />
        </div>
      </Worker>
    </div>
  );
};

export default CVPage;
