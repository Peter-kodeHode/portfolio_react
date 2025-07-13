import React from 'react';
import { useLocation } from 'react-router-dom';
import "./PageIndicator.css";

const PageIndicator = () => {
  const location = useLocation();
  const pages = ['/aboutme', '/', '/projects'];
  const currentIndex = pages.indexOf(location.pathname);

  return (
    <div className="indicator-container">
      {pages.map((_, index) => (
        <div 
          key={index} 
          className={`indicator-dot ${index === currentIndex ? 'active' : ''}`} 
        />
      ))}
    </div>
  );
};

export default PageIndicator;