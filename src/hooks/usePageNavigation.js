import { useEffect, useCallback, useMemo } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { SCROLL_CONFIG, ROUTES, NAVIGATION_KEYS, LAYOUT_CONFIG, SELECTORS } from '../utils/constants';

const usePageNavigation = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // Wrap pages array in useMemo to prevent recreation on every render
  const pages = useMemo(() => [ROUTES.ABOUT.path, ROUTES.HOME.path, ROUTES.PROJECTS.path], []);
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
    return document.querySelector(SELECTORS.SCROLLABLE_PAGES);
  }, []);

  // Custom scroll snap implementation - only for desktop
  const customScrollSnap = useCallback((container, direction) => {
    if (window.innerWidth <= LAYOUT_CONFIG.MOBILE_BREAKPOINT) return; // Don't interfere with mobile CSS scroll
    
    const sectionHeight = window.innerHeight * LAYOUT_CONFIG.SECTION_HEIGHT_RATIO;
    const currentScroll = container.scrollTop;
    const currentSection = Math.round(currentScroll / sectionHeight);
    
    let targetSection;
    if (direction > 0) {
      targetSection = currentSection + 1;
    } else {
      targetSection = currentSection - 1;
    }
    
    // Get all sections in the current page
    const sections = container.querySelectorAll(SELECTORS.PAGE_SECTIONS);
    const maxSection = sections.length - 1;
    
    // Clamp target section to valid range
    targetSection = Math.max(0, Math.min(maxSection, targetSection));
    
    const targetScroll = targetSection * sectionHeight;
    
    // Smooth scroll to target with requestAnimationFrame - slightly smoother
    const startScroll = container.scrollTop;
    const distance = targetScroll - startScroll;
    const duration = SCROLL_CONFIG.SCROLL_DURATION;
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
    let keyHoldDelay = SCROLL_CONFIG.KEY_HOLD_DELAY;
    let keyRepeatDelay = SCROLL_CONFIG.KEY_REPEAT_DELAY;
    let scrollDelay = SCROLL_CONFIG.SCROLL_DELAY;

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
      } else if (window.innerWidth > LAYOUT_CONFIG.MOBILE_BREAKPOINT) {
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
      const isHorizontalSwipe = Math.abs(deltaX) > Math.abs(deltaY) * SCROLL_CONFIG.SWIPE_RATIO_THRESHOLD;
      const isSignificantSwipe = Math.abs(deltaX) > SCROLL_CONFIG.SWIPE_THRESHOLD_SIGNIFICANT;
      
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
        if (window.innerWidth > LAYOUT_CONFIG.MOBILE_BREAKPOINT) {
          customScrollSnap(scrollableElement, direction);
        } else {
          scrollableElement.scrollBy({ top: direction * SCROLL_CONFIG.MOBILE_SCROLL_AMOUNT, behavior: 'smooth' });
        }
        setTimeout(() => {
          isScrolling = false;
        }, scrollDelay);
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
      if (NAVIGATION_KEYS.BLOCKED_ELEMENTS.includes(e.target.tagName)) {
        return;
      }

      const key = e.key.toLowerCase();

      // Horizontal navigation keys
      if (NAVIGATION_KEYS.PREVIOUS.includes(key)) {
        e.preventDefault();
        goToPrevPage();
      } else if (NAVIGATION_KEYS.NEXT.includes(key)) {
        e.preventDefault();
        goToNextPage();
      }
      // Vertical scroll keys - up
      else if (NAVIGATION_KEYS.VERTICAL_UP.includes(key)) {
        e.preventDefault();
        handleVerticalScroll(-1);
        startKeyRepeat(-1);
      }
      // Vertical scroll keys - down
      else if (NAVIGATION_KEYS.VERTICAL_DOWN.includes(key)) {
        e.preventDefault();
        handleVerticalScroll(1);
        startKeyRepeat(1);
      }
    };

    const handleKeyUp = (e) => {
      const key = e.key.toLowerCase();
      // Stop key repeat when key is released
      if ([...NAVIGATION_KEYS.VERTICAL_UP, ...NAVIGATION_KEYS.VERTICAL_DOWN].includes(key)) {
        if (keyHoldTimer) {
          clearTimeout(keyHoldTimer);
          keyHoldTimer = null;
        }
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