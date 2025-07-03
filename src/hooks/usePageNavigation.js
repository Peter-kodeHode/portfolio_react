import { useEffect, useCallback, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const usePageNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Wrap pages array in useMemo to prevent recreation on every render
  const pages = useMemo(() => ['/aboutme', '/', '/projects'], []);
  const currentPageIndex = pages.indexOf(location.pathname);

  // Navigation functions
  const goToNextPage = useCallback(() => {
    const nextIndex = currentPageIndex === pages.length - 1 ? 0 : currentPageIndex + 1;
    navigate(pages[nextIndex], { state: { direction: 'right' } });
  }, [currentPageIndex, navigate, pages]);

  const goToPrevPage = useCallback(() => {
    const prevIndex = currentPageIndex === 0 ? pages.length - 1 : currentPageIndex - 1;
    navigate(pages[prevIndex], { state: { direction: 'left' } });
  }, [currentPageIndex, navigate, pages]);

  // Helper function to get current scrollable page
  const getCurrentScrollableElement = useCallback(() => {
    return document.querySelector('.home-page, .aboutme-page, .projects-page');
  }, []);

  // Handle all navigation events
  useEffect(() => {
    let scrollTimeout;
    let isScrolling = false;

    const handleWheel = (e) => {
      if (!document.body) return;
      
      // Check if it's horizontal scroll (deltaX) or shift+scroll for page navigation
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
        e.preventDefault();
        
        if (!isScrolling) {
          isScrolling = true;
          const scrollDirection = e.shiftKey ? e.deltaY : e.deltaX;
          
          if (scrollDirection > 0) {
            goToNextPage();
          } else {
            goToPrevPage();
          }
          
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            isScrolling = false;
          }, 50);
        }
      } else {
        // Vertical scrolling - forward to current page container
        const currentPage = getCurrentScrollableElement();
        if (currentPage && !isScrolling) {
          e.preventDefault();
          currentPage.scrollBy({ 
            top: e.deltaY, 
            behavior: 'smooth'
          });
        }
      }
    };

    // Touch events for mobile swipe navigation
    let touchStartX = 0;
    let touchStartY = 0;
    let isTouchScrolling = false;
    let touchMoved = false;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
      touchMoved = false;
    };

    const handleTouchMove = () => {
      touchMoved = true;
      // Let browser handle vertical scrolling naturally
    };

    const handleTouchEnd = (e) => {
      if (isTouchScrolling || !touchMoved) return;
      
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      
      // Only trigger page navigation if horizontal swipe is clearly dominant
      const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY) * 1.5;
      const isSignificantSwipe = Math.abs(deltaX) > 80;
      
      if (isHorizontalSwipe && isSignificantSwipe) {
        isTouchScrolling = true;
        
        if (deltaX > 0) {
          goToPrevPage(); // Swipe right = previous page
        } else {
          goToNextPage(); // Swipe left = next page
        }
        
        setTimeout(() => {
          isTouchScrolling = false;
        }, 500);
      }
    };

    // Keyboard navigation
    const handleKeyDown = (e) => {
      // Don't interfere with form inputs
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      const scrollableElement = getCurrentScrollableElement();

      switch (e.key) {
        // Horizontal navigation keys
        case 'ArrowLeft':
        case 'a':
          e.preventDefault();
          goToPrevPage();
          break;
        case 'ArrowRight':
        case 'd':
          e.preventDefault();
          goToNextPage();
          break;
        
        // Vertical scroll keys - up
        case 'ArrowUp':
        case 'PageUp':
        case 'w':
        case 'W':
          e.preventDefault();
          if (scrollableElement) {
            scrollableElement.scrollBy({ top: -100, behavior: 'smooth' });
          }
          break;
        
        // Vertical scroll keys - down
        case 'ArrowDown':
        case 'PageDown':
        case 's':
        case 'S':
          e.preventDefault();
          if (scrollableElement) {
            scrollableElement.scrollBy({ top: 100, behavior: 'smooth' });
          }
          break;
        
        default:
          // Let other keys pass through normally
          break;
      }
    };

    // Event listeners
    document.addEventListener('keydown', handleKeyDown, false);
    document.addEventListener('wheel', handleWheel, { passive: false, capture: true });
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    // Cleanup
    return () => {
      if (document) {
        document.removeEventListener('wheel', handleWheel, true);
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
        document.removeEventListener('keydown', handleKeyDown, false);
      }
      if (scrollTimeout) {
        clearTimeout(scrollTimeout);
      }
    };
  }, [goToNextPage, goToPrevPage, getCurrentScrollableElement]);

  return { currentPageIndex, totalPages: pages.length, goToNextPage, goToPrevPage };
};

export default usePageNavigation;