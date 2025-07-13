import React from "react";
import { useTheme } from "../../../contexts/ThemeContext";
import sunIcon from "../../../images/ThemeToggle/sun.svg";
import moonIcon from "../../../images/ThemeToggle/moon.svg";
import "./ThemeToggle.css";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button
      className="theme-button"
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
    >
      <img
        src={isDarkMode ? sunIcon : moonIcon}
        alt={isDarkMode ? "Sun icon" : "Moon icon"}
      />
    </button>
  );
};

export default ThemeToggle;
