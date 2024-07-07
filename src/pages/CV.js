import React from 'react';
import CV from '../assets/CV_Marc_Weber.pdf';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import '../App.css';

// Documentation: https://react-pdf-viewer.dev/docs/basic-usage/

const CVPage = () => {
  const defaultLayoutPluginInstance = defaultLayoutPlugin();

  return (
    <div className="pdf-container bg-white">
      <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
        <Viewer fileUrl={CV} plugins={[defaultLayoutPluginInstance]} />
      </Worker>
    </div>
  );
};

export default CVPage;
