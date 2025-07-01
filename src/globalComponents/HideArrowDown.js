import React, { useState, useEffect } from 'react';
import arrowdown from "../images/Home/arrow-down.svg";

const HideArrowDown = ({ containerRef, scrollThreshold = 50 }) => {
  const [showArrow, setShowArrow] = useState(true);

  useEffect(() => {
    // Capture the current ref value to avoid stale closure
    const currentContainer = containerRef.current;
    
    const handleScroll = () => {
      if (currentContainer) {
        const scrollTop = currentContainer.scrollTop;
        setShowArrow(scrollTop < scrollThreshold);
      }
    };

    if (currentContainer) {
      currentContainer.addEventListener('scroll', handleScroll, { passive: true });
    }

    return () => {
      // Use the captured value in cleanup
      if (currentContainer) {
        currentContainer.removeEventListener('scroll', handleScroll);
      }
    };
  }, [containerRef, scrollThreshold]);

  return (
    <img 
      className={`arrow-down ${!showArrow ? 'hidden' : ''}`} 
      src={arrowdown} 
      alt="arrow down" 
    />
  );
};

export default HideArrowDown;