import React from 'react';
import HideArrowDown from '../HideArrowDown';
import "./PageHeader.css";

const PageHeader = ({ 
  title, 
  subtitle, 
  containerRef, 
  className = "",
  showArrow = true 
}) => {
  return (
    <div className={`page-header ${className}`}>
      <h1 className="page-title">{title}</h1>
      {subtitle && <p className="page-subtitle">{subtitle}</p>}
      {showArrow && containerRef && (
        <HideArrowDown containerRef={containerRef} />
      )}
    </div>
  );
};

export default PageHeader;