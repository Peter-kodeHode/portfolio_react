import React, { useState, useEffect, useCallback, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import "./PageIndicator.css";

const PageIndicator = () => {
  const location = useLocation();
  const pages = ['/aboutme', '/', '/projects'];
  const pageNames = ['Om meg', 'Hjem', 'Prosjekter'];
  const currentIndex = pages.indexOf(location.pathname);
  
  const [iconPositions, setIconPositions] = useState([]);
  const observerRef = useRef(null);

  const updateIconPositions = useCallback(() => {
    // Get all navbar icons in order: logo (about), home, projects
    const logoIcon = document.querySelector('.logo-icon');
    const homeIcon = document.querySelector('.home-icon');
    const projectsIcon = document.querySelector('.projects-icon');
    
    const icons = [logoIcon, homeIcon, projectsIcon];
    const positions = [];
    
    icons.forEach(icon => {
      if (icon) {
        const rect = icon.getBoundingClientRect();
        const centerX = rect.left + (rect.width / 2);
        positions.push(centerX);
      }
    });
    
    setIconPositions(positions);
  }, []);

  useEffect(() => {
    // Update positions on mount
    updateIconPositions();
    
    // Use ResizeObserver on document.body to catch all resize events
    if (observerRef.current) {
      observerRef.current.disconnect();
    }
    
    observerRef.current = new ResizeObserver(() => {
      // More aggressive timing for maximize/windowed transitions
      updateIconPositions();
      requestAnimationFrame(() => {
        updateIconPositions();
        requestAnimationFrame(updateIconPositions);
      });
      
      // Extended timing to catch slower browser adjustments
      setTimeout(updateIconPositions, 50);
      setTimeout(updateIconPositions, 150);
      setTimeout(updateIconPositions, 300);
      setTimeout(updateIconPositions, 500); // Extra delay for stubborn transitions
    });
    
    // Observe the body element for size changes
    observerRef.current.observe(document.body);
    
    // Also observe the navbar itself in case it changes
    const navbar = document.querySelector('.navbar');
    if (navbar) {
      observerRef.current.observe(navbar);
    }
    
    // Fallback resize listener with extended timing
    const handleResize = () => {
      updateIconPositions();
      setTimeout(updateIconPositions, 50);
      setTimeout(updateIconPositions, 200);
      setTimeout(updateIconPositions, 400);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Small delay to ensure navbar is fully rendered on mount
    const timer = setTimeout(updateIconPositions, 100);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
      window.removeEventListener('resize', handleResize);
      clearTimeout(timer);
    };
  }, [updateIconPositions]);

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
          style={{
            position: 'absolute',
            left: iconPositions[index] ? `${iconPositions[index]}px` : 'auto',
            transform: iconPositions[index] ? 'translateX(-50%)' : 'none'
          }}
          role="status"
          aria-label={`${pageNames[index]} side`}
          aria-current={index === currentIndex ? 'page' : undefined}
        />
      ))}
    </div>
  );
};

export default PageIndicator;