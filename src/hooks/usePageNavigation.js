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
      }
    };

    // Handle touch events for mobile swipe
    let touchStartX = 0;
    let touchStartY = 0;
    let touchEndX = 0;
    let touchEndY = 0;
    let isTouchScrolling = false;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
    };

    const handleTouchEnd = (e) => {
      if (isTouchScrolling) return; // Prevent if already processing a touch
      
      touchEndX = e.changedTouches[0].screenX;
      touchEndY = e.changedTouches[0].screenY;
      
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      
      // Only trigger if horizontal swipe is dominant and sufficient distance
      if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
        isTouchScrolling = true;
        
        if (deltaX > 0) {
          goToPrevPage(); // Swipe right = previous page
        } else {
          goToNextPage(); // Swipe left = next page
        }
        
        // Reset touch scrolling flag
        setTimeout(() => {
          isTouchScrolling = false;
        }, 300);
      }
    };

    // Handle keyboard navigation - ONLY horizontal arrows and ONLY when not focused on scrollable content
    const handleKeyDown = (e) => {
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

      // Only handle our specific horizontal navigation keys
      if (e.key === 'ArrowLeft' || e.key === 'a') {
        e.preventDefault();
        goToPrevPage();
      } 
      else if (e.key === 'ArrowRight' || e.key === 'd') {
        e.preventDefault();
        goToNextPage();
      }
      // Let ALL other keys (including ArrowUp, ArrowDown, PageUp, PageDown, Space) pass through normally
    };

    // Attach to document but DON'T use capture phase so the scroll container gets the events first
    document.addEventListener('keydown', handleKeyDown, false);

    document.addEventListener('wheel', handleWheel, { passive: false });
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    // More defensive cleanup
    return () => {
      if (document) {
        document.removeEventListener('wheel', handleWheel);
        document.removeEventListener('touchstart', handleTouchStart);
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