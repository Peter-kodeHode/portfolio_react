import { useEffect, useCallback, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

const usePageNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Wrap pages array in useMemo to prevent recreation on every render
  const pages = useMemo(() => ['/aboutme', '/', '/projects'], []);
  const currentPageIndex = pages.indexOf(location.pathname);

  const goToNextPage = useCallback(() => {
    // Wrap around to first page if at the end
    const nextIndex = currentPageIndex === pages.length - 1 ? 0 : currentPageIndex + 1;
    navigate(pages[nextIndex]);
  }, [currentPageIndex, navigate, pages]);

  const goToPrevPage = useCallback(() => {
    // Wrap around to last page if at the beginning
    const prevIndex = currentPageIndex === 0 ? pages.length - 1 : currentPageIndex - 1;
    navigate(pages[prevIndex]);
  }, [currentPageIndex, navigate, pages]);

  // Handle horizontal scroll
  useEffect(() => {
    let scrollTimeout;
    let isScrolling = false;

    const handleWheel = (e) => {
      // Add check to ensure we're still mounted
      if (!document.body) return;
      
      // Check if it's a horizontal scroll (deltaX) or shift+scroll
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
        e.preventDefault();
        
        if (!isScrolling) {
          isScrolling = true;
          
          // For horizontal scroll or shift+scroll, deltaX or deltaY determines direction
          const scrollDirection = e.shiftKey ? e.deltaY : e.deltaX;
          
          if (scrollDirection > 0) {
            goToNextPage();
          } else {
            goToPrevPage();
          }
          
          clearTimeout(scrollTimeout);
          scrollTimeout = setTimeout(() => {
            isScrolling = false;
          }, 200);
        }
      } else {
        // For vertical scrolling - manually forward the scroll to the page content
        const currentPage = document.querySelector('.home-page, .aboutme-page, .projects-page');
        if (currentPage && !isScrolling) {
          // Prevent default to stop the document from scrolling
          e.preventDefault();
          
          // Manually scroll the page container
          const scrollAmount = e.deltaY;
          currentPage.scrollBy({ 
            top: scrollAmount, 
            behavior: 'auto' // Use 'auto' instead of 'smooth' for immediate response
          });
        }
      }
    };

    // Handle touch events for mobile swipe - SIMPLIFIED VERSION
    let touchStartX = 0;
    let touchStartY = 0;
    let isTouchScrolling = false;
    let touchMoved = false;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
      touchMoved = false;
    };

    const handleTouchMove = (e) => {
      touchMoved = true;
      // Don't interfere with vertical scrolling at all
      // Let the browser handle it naturally
    };

    const handleTouchEnd = (e) => {
      if (isTouchScrolling || !touchMoved) return;
      
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      
      // Only trigger page navigation if horizontal swipe is CLEARLY dominant
      const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY) * 1.5; // More strict ratio
      const isSignificantSwipe = Math.abs(deltaX) > 80; // Increased threshold
      
      if (isHorizontalSwipe && isSignificantSwipe) {
        isTouchScrolling = true;
        
        if (deltaX > 0) {
          goToPrevPage(); // Swipe right = previous page
        } else {
          goToNextPage(); // Swipe left = next page
        }
        
        // Reset touch scrolling flag
        setTimeout(() => {
          isTouchScrolling = false;
        }, 500); // Longer timeout
      }
    };

    // Handle keyboard navigation
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      // Horizontal navigation keys
      if (e.key === 'ArrowLeft' || e.key === 'a') {
        e.preventDefault();
        goToPrevPage();
      } 
      else if (e.key === 'ArrowRight' || e.key === 'd') {
        e.preventDefault();
        goToNextPage();
      }
      // Vertical scroll keys - intercept arrow keys and give them smooth behavior
      else if (e.key === 'ArrowUp' || e.key === 'PageUp' || e.key === 'w' || e.key === 'W') {
        e.preventDefault(); // Prevent default for arrow keys too
        // Scroll up - find the current scrollable container and scroll it
        const scrollableElement = document.querySelector('.home-page, .aboutme-page, .projects-page');
        if (scrollableElement) {
          scrollableElement.scrollBy({ top: -100, behavior: 'smooth' });
        }
      }
      else if (e.key === 'ArrowDown' || e.key === 'PageDown' || e.key === 's' || e.key === 'S') {
        e.preventDefault(); // Prevent default for arrow keys too
        // Scroll down - find the current scrollable container and scroll it
        const scrollableElement = document.querySelector('.home-page, .aboutme-page, .projects-page');
        if (scrollableElement) {
          scrollableElement.scrollBy({ top: 100, behavior: 'smooth' });
        }
      }
      // Let other keys (PageUp, PageDown, Space, Home, End) pass through normally
    };

    // Attach keyboard without capture
    document.addEventListener('keydown', handleKeyDown, false);
    
    // Use capture for wheel (desktop only)
    document.addEventListener('wheel', handleWheel, { passive: false, capture: true });
    
    // DON'T use capture for touch events - let them bubble naturally
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    // More defensive cleanup
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
  }, [goToNextPage, goToPrevPage]);

  return { currentPageIndex, totalPages: pages.length, goToNextPage, goToPrevPage };
};

export default usePageNavigation;