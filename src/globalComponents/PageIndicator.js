import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const IndicatorContainer = styled.div`
  position: fixed;
  top: 12dvh;
  left: 50dvw;
  transform: translateX(-50%);
  display: flex;
  gap: 0.5rem;
  z-index: 100;
  pointer-events: none; /* This prevents the container from intercepting scroll events */
  
  @media (max-width: 500px) {
    top: 11.5dvh;
  }
`;

const Dot = styled.div`
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => props.active ? 'var(--secondary)' : 'rgba(0, 0, 0, 0.3)'};
  transition: all 300ms ease;
  border: 2px solid var(--primary);
  cursor: pointer;
  pointer-events: auto; /* Re-enable pointer events for the dots themselves */
  
  &:hover {
    transform: scale(1.2);
  }
`;

const PageIndicator = () => {
  const location = useLocation();
  // Same order as in usePageNavigation - home is in the middle
  const pages = ['/aboutme', '/', '/projects'];
  const currentIndex = pages.indexOf(location.pathname);

  return (
    <IndicatorContainer>
      {pages.map((_, index) => (
        <Dot key={index} active={index === currentIndex} />
      ))}
    </IndicatorContainer>
  );
};

export default PageIndicator;