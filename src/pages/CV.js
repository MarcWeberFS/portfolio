import React from 'react';
import CV from '../assets/CV_Marc_Weber.pdf';

const CVPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <iframe
        src={CV}
        width="100%"
        height="100%"
        style={{ height: '100vh' }}
        title="CV"
      ></iframe>
    </div>
  );
};

export default CVPage;
