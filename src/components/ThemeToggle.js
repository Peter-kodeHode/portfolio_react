import React from 'react';
import { useTheme } from '../contexts/ThemeContext';
import sunIcon from '../images/ThemeToggle/sun.svg';
import moonIcon from '../images/ThemeToggle/moon.svg';


const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      style={{
        position: 'absolute',
        top: 0,
        right: 0,
        height: '15dvh',
        background: 'none',
        borderLeft: 'none',
        borderTop: 'none',
        borderRight: 'none',
        borderBottom: '6px solid var(--secondary)',
        borderRadius: '4px',
        padding: '24px 24px',
        cursor: 'pointer',
        transition: 'all 0.5 ease',
        zIndex: 100,
        outline: 'none',
      }}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      <img
        src={isDarkMode ? sunIcon : moonIcon}
        alt={isDarkMode ? 'Sun icon' : 'Moon icon'}
        style={{
          width: '5dvw',
          height: '5dvh',
          display: 'block',
          filter: 'var(--icon-filter)',
        }}
      />
    </button>
  );
};

export default ThemeToggle;