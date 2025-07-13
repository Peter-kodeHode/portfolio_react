export const SCROLL_CONFIG = {
  PAGE_TRANSITION_DELAY: 300,
  SWIPE_THRESHOLD: 50,
  KEY_HOLD_DELAY: 600,
  KEY_REPEAT_DELAY: 300,
  SCROLL_DELAY: 300,
  SCROLL_DURATION: 400,
  SWIPE_THRESHOLD_SIGNIFICANT: 80,
  SWIPE_RATIO_THRESHOLD: 1.5,
  MOBILE_SCROLL_AMOUNT: 100
};

export const LAYOUT_CONFIG = {
  MOBILE_BREAKPOINT: 500,
  NAVBAR_HEIGHT: '15vh',
  CONTENT_HEIGHT: '85vh',
  SECTION_HEIGHT_RATIO: 0.85
};

export const ROUTES = {
  HOME: { path: '/', name: 'Home', order: 0 },
  ABOUT: { path: '/aboutme', name: 'AboutMe', order: 1 },
  PROJECTS: { path: '/projects', name: 'Projects', order: 2 }
};

export const NAVIGATION_KEYS = {
  NEXT: ['arrowright', 'd'],
  PREVIOUS: ['arrowleft', 'a'],
  VERTICAL_UP: ['arrowup', 'pageup', 'w'],
  VERTICAL_DOWN: ['arrowdown', 'pagedown', 's'],
  BLOCKED_ELEMENTS: ['INPUT', 'TEXTAREA']
};

export const THEME_CONFIG = {
  LIGHT: {
    PRIMARY: '#ffffffff',
    SECONDARY: '#000000ff',
    ICON_FILTER: 'invert(0%)',
    SHADOW_COLOR: 'rgba(0, 0, 0, 0.25)'
  },
  DARK: {
    PRIMARY: '#000000ff',
    SECONDARY: '#ffffffff', 
    ICON_FILTER: 'invert(100%)',
    SHADOW_COLOR: 'rgba(255, 255, 255, 0.25)'
  }
};

export const SELECTORS = {
  SCROLLABLE_PAGES: '.home-page, .aboutme-page, .projects-page',
  PAGE_SECTIONS: '.introduction, .box-container, .footer, .projects, .aboutme'
};