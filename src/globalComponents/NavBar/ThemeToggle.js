import React from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { ThemeButton } from "./NavBar.styles";
import sunIcon from "../../images/ThemeToggle/sun.svg";
import moonIcon from "../../images/ThemeToggle/moon.svg";

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <ThemeButton
      onClick={toggleTheme}
      aria-label={`Switch to ${isDarkMode ? "light" : "dark"} mode`}
    >
      <img
        src={isDarkMode ? sunIcon : moonIcon}
        alt={isDarkMode ? "Sun icon" : "Moon icon"}
      />
    </ThemeButton>
  );
};

export default ThemeToggle;
