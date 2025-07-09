import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      // User has a saved preference, use it
      setIsDarkMode(savedTheme === 'dark');
    } else {
      // No saved preference, detect system preference
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDark);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    const root = document.documentElement;
    
    if (isDarkMode) {
      root.style.setProperty('--primary', '#000000ff');
      root.style.setProperty('--secondary', '#ffffffff');
      root.style.setProperty('--icon-filter', 'invert(100%)');
      root.style.setProperty('--shadow-color', 'rgba(255, 255, 255, 0.25)');
    } else {
      root.style.setProperty('--primary', '#ffffffff');
      root.style.setProperty('--secondary', '#000000ff');
      root.style.setProperty('--icon-filter', 'invert(0%)');
      root.style.setProperty('--shadow-color', 'rgba(0, 0, 0, 0.25)');
    }
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