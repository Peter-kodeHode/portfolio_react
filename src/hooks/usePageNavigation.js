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

  // Custom scroll snap implementation - only for desktop
  const customScrollSnap = useCallback((container, direction) => {
    if (window.innerWidth <= 500) return; // Don't interfere with mobile CSS scroll
    
    const sectionHeight = window.innerHeight * 0.85;
    const currentScroll = container.scrollTop;
    const currentSection = Math.round(currentScroll / sectionHeight);
    
    let targetSection;
    if (direction > 0) {
      targetSection = currentSection + 1;
    } else {
      targetSection = currentSection - 1;
    }
    
    // Get all sections in the current page
    const sections = container.querySelectorAll('.introduction, .box-container, .footer, .projects, .aboutme');
    const maxSection = sections.length - 1;
    
    // Clamp target section to valid range
    targetSection = Math.max(0, Math.min(maxSection, targetSection));
    
    const targetScroll = targetSection * sectionHeight;
    
    // Smooth scroll to target with requestAnimationFrame - slightly smoother
    const startScroll = container.scrollTop;
    const distance = targetScroll - startScroll;
    const duration = 400; // Increased from 300ms for smoother feel
    const startTime = performance.now();

    const animateScroll = (currentTime) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Smoother easing function
      const easeInOutQuad = progress < 0.5 
        ? 2 * progress * progress 
        : 1 - Math.pow(-2 * progress + 2, 2) / 2;
      
      container.scrollTop = startScroll + (distance * easeInOutQuad);
      
      if (progress < 1) {
        requestAnimationFrame(animateScroll);
      }
    };
    
    requestAnimationFrame(animateScroll);
  }, []);

  // Handle all navigation events
  useEffect(() => {
    let isScrolling = false;
    let keyHoldTimer = null;
    let keyHoldDelay = 600; // Initial delay before repeat starts
    let keyRepeatDelay = 300; // Reduced to match faster tapping
    let scrollDelay = 300; // Match the repeat delay

    const handleWheel = (e) => {
      if (!document.body) return;
      
      // Check if it's horizontal scroll (deltaX) or shift+scroll for page navigation
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY) || e.shiftKey) {
        e.preventDefault();
        const scrollDirection = e.shiftKey ? e.deltaY : e.deltaX;
        
        if (scrollDirection > 0) {
          goToNextPage();
        } else {
          goToPrevPage();
        }
      } else if (window.innerWidth > 500) {
        // Desktop: Use custom scroll snap
        e.preventDefault();
        
        if (!isScrolling) {
          isScrolling = true;
          const currentPage = getCurrentScrollableElement();
          if (currentPage) {
            customScrollSnap(currentPage, e.deltaY);
          }
          
          // Reset scrolling flag after a short delay
          setTimeout(() => {
            isScrolling = false;
          }, scrollDelay);
        }
      }
      // Mobile: Let CSS handle scrolling naturally (don't preventDefault)
    };

    // Touch events for mobile swipe navigation
    let touchStartX = 0;
    let touchStartY = 0;
    let touchMoved = false;

    const handleTouchStart = (e) => {
      touchStartX = e.changedTouches[0].screenX;
      touchStartY = e.changedTouches[0].screenY;
      touchMoved = false;
    };

    const handleTouchMove = () => {
      touchMoved = true;
      // Let browser handle vertical scrolling naturally on mobile
    };

    const handleTouchEnd = (e) => {
      if (!touchMoved) return;
      
      const touchEndX = e.changedTouches[0].screenX;
      const touchEndY = e.changedTouches[0].screenY;
      
      const deltaX = touchEndX - touchStartX;
      const deltaY = touchEndY - touchStartY;
      
      // Only trigger page navigation if horizontal swipe is clearly dominant
      const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY) * 1.5;
      const isSignificantSwipe = Math.abs(deltaX) > 80;
      
      if (isHorizontalSwipe && isSignificantSwipe) {
        if (deltaX > 0) {
          goToPrevPage(); // Swipe right = previous page
        } else {
          goToNextPage(); // Swipe left = next page
        }
      }
    };

    // Function to handle vertical scroll with custom timing
    const handleVerticalScroll = (direction) => {
      if (isScrolling) return;
      
      const scrollableElement = getCurrentScrollableElement();
      if (scrollableElement) {
        isScrolling = true;
        if (window.innerWidth > 500) {
          customScrollSnap(scrollableElement, direction);
        } else {
          scrollableElement.scrollBy({ top: direction * 100, behavior: 'smooth' });
        }
        setTimeout(() => {
          isScrolling = false;
        }, scrollDelay); // Use the same delay as repeat
      }
    };

    // Function to start key repeat with custom timing
    const startKeyRepeat = (direction) => {
      // Clear any existing timer
      if (keyHoldTimer) {
        clearTimeout(keyHoldTimer);
      }
      
      // Set up repeat timer
      keyHoldTimer = setTimeout(() => {
        const repeatScroll = () => {
          if (keyHoldTimer) { // Only continue if key is still held
            handleVerticalScroll(direction);
            keyHoldTimer = setTimeout(repeatScroll, keyRepeatDelay);
          }
        };
        repeatScroll();
      }, keyHoldDelay);
    };

    // Keyboard navigation with custom scroll snap and timing
    const handleKeyDown = (e) => {
      // Don't interfere with form inputs
      if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
        return;
      }

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
          // Handle initial scroll immediately
          handleVerticalScroll(-1);
          // Set up repeat scrolling if key is held
          startKeyRepeat(-1);
          break;
        
        // Vertical scroll keys - down
        case 'ArrowDown':
        case 'PageDown':
        case 's':
        case 'S':
          e.preventDefault();
          // Handle initial scroll immediately
          handleVerticalScroll(1);
          // Set up repeat scrolling if key is held
          startKeyRepeat(1);
          break;
        
        default:
          // Let other keys pass through normally
          break;
      }
    };

    const handleKeyUp = (e) => {
      // Stop key repeat when key is released
      switch (e.key) {
        case 'ArrowUp':
        case 'PageUp':
        case 'w':
        case 'W':
        case 'ArrowDown':
        case 'PageDown':
        case 's':
        case 'S':
          if (keyHoldTimer) {
            clearTimeout(keyHoldTimer);
            keyHoldTimer = null;
          }
          break;
        default:
          break;
      }
    };

    // Event listeners
    document.addEventListener('keydown', handleKeyDown, false);
    document.addEventListener('keyup', handleKeyUp, false);
    document.addEventListener('wheel', handleWheel, { passive: false, capture: true });
    document.addEventListener('touchstart', handleTouchStart, { passive: true });
    document.addEventListener('touchmove', handleTouchMove, { passive: true });
    document.addEventListener('touchend', handleTouchEnd, { passive: true });
    
    // Cleanup
    return () => {
      if (keyHoldTimer) {
        clearTimeout(keyHoldTimer);
      }
      if (document) {
        document.removeEventListener('wheel', handleWheel, true);
        document.removeEventListener('touchstart', handleTouchStart);
        document.removeEventListener('touchmove', handleTouchMove);
        document.removeEventListener('touchend', handleTouchEnd);
        document.removeEventListener('keydown', handleKeyDown, false);
        document.removeEventListener('keyup', handleKeyUp, false);
      }
    };
  }, [goToNextPage, goToPrevPage, getCurrentScrollableElement, customScrollSnap]);

  return { currentPageIndex, totalPages: pages.length, goToNextPage, goToPrevPage };
};

export default usePageNavigation;