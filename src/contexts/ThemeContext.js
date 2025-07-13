import React, { createContext, useContext, useState, useEffect } from 'react';
import { THEME_CONFIG } from '../utils/constants';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('theme');
    return savedTheme === 'dark';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    if (isDarkMode) {
      // Apply dark theme values from constants
      root.style.setProperty('--primary', THEME_CONFIG.DARK.PRIMARY);
      root.style.setProperty('--secondary', THEME_CONFIG.DARK.SECONDARY);
      root.style.setProperty('--icon-filter', THEME_CONFIG.DARK.ICON_FILTER);
      root.style.setProperty('--shadow-color', THEME_CONFIG.DARK.SHADOW_COLOR);
    } else {
      // Apply light theme values from constants
      root.style.setProperty('--primary', THEME_CONFIG.LIGHT.PRIMARY);
      root.style.setProperty('--secondary', THEME_CONFIG.LIGHT.SECONDARY);
      root.style.setProperty('--icon-filter', THEME_CONFIG.LIGHT.ICON_FILTER);
      root.style.setProperty('--shadow-color', THEME_CONFIG.LIGHT.SHADOW_COLOR);
    }

    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const toggleTheme = () => {
    setIsDarkMode(prev => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkMode, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};