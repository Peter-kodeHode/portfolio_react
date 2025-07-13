import React from 'react';
import { useLocation } from 'react-router-dom';
import "./PageIndicator.css";

const PageIndicator = () => {
  const location = useLocation();
  const pages = ['/aboutme', '/', '/projects'];
  const pageNames = ['Om meg', 'Hjem', 'Prosjekter'];
  const currentIndex = pages.indexOf(location.pathname);

  return (
    <div 
      className="indicator-container"
      role="navigation"
      aria-label="Sideindikator"
    >
      {pages.map((_, index) => (
        <div 
          key={index} 
          className={`indicator-dot ${index === currentIndex ? 'active' : ''}`}
          role="status"
          aria-label={`${pageNames[index]} side`}
          aria-current={index === currentIndex ? 'page' : undefined}
        />
      ))}
    </div>
  );
};

export default PageIndicator;