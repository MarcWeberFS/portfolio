import React from 'react';
import CV from '../assets/CV_Marc_Weber.pdf';
import '../App.css'; // Ensure you have the CSS included

const CVPage = () => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <iframe
        src={CV}
        className="cv-iframe"
        title="CV"
      ></iframe>
    </div>
  );
};

export default CVPage;
