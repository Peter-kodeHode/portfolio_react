import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      onClick={toggleTheme}
      style={{
        position:'absolute',
        top: '150px',
        right: '10px',
        background: 'var(--primary)',
        border: `2px solid var(--secondary)`,
        borderRadius: '4px',
        color: 'var(--secondary)',
        padding: '8px 12px',
        cursor: 'pointer',
        fontSize: '14px',
        transition: 'all 0.3s ease',
        zIndex: 1000,
      }}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
};

export default ThemeToggle;