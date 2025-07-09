import React, { useState, useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { motion } from "motion/react";
import "./App.css";
import "./App-mobile.css";
import NavBar from "./globalComponents/navBar/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import { AnimatePresence } from "motion/react";
import GlobalStyle from "./globalComponents/globalStyles";
import usePageNavigation from "./hooks/usePageNavigation";
import PageIndicator from "./globalComponents/PageIndicator";
import { ReactComponent as Logo } from "./images/NavBar/image2vector.svg";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  usePageNavigation(); // This will handle all the navigation logic

  useEffect(() => {
    const preloadAssets = async () => {
      // Preload all SVG icons and images
      const assetPaths = [
        "/images/NavBar/svg/home-icon.svg",
        "/images/NavBar/svg/folder.svg",
        "/images/NavBar/svg/image2vector.svg",
        // Add any other critical assets
      ];

      await Promise.all(
        assetPaths.map((path) => {
          return new Promise((resolve) => {
            const img = new Image();
            img.onload = resolve;
            img.onerror = resolve; // Continue even if some assets fail
            img.src = path;
          });
        })
      );

      // Minimum loading time for UX (optional)
      await new Promise((resolve) => setTimeout(resolve, 1200));
      setIsLoading(false);
    };

    preloadAssets();
  }, []);

  if (isLoading) {
    return (
      <motion.div
        className="loading-screen"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="loading-content">
          <div className="loading-logo">
            <Logo />
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="App">
      <GlobalStyle />
      <PageIndicator />
      <NavBar />
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/aboutme" element={<AboutMe />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
