import React, { useState, useEffect } from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import { motion } from "motion/react";
import "./App.css";
import "./App-mobile.css";
import { NavBar} from './components/navigation';
import { Home, AboutMe, Projects } from "./pages";
import { AnimatePresence } from "motion/react";
import GlobalStyle from "./components/globalStyles";
import usePageNavigation from "./hooks/usePageNavigation";
import PageIndicator from "./components/ui/PageIndicator";
import { ReactComponent as Logo } from "./images/NavBar/image2vector.svg";

// Import all assets that need preloading with correct paths
import homeIcon from "./images/NavBar/home.svg";
import folderIcon from "./images/NavBar/folder.svg";
import logoIcon from "./images/NavBar/image2vector.svg";
import moonIcon from "./images/ThemeToggle/moon.svg";
import sunIcon from "./images/ThemeToggle/sun.svg";

function App() {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(true);

  usePageNavigation(); // This will handle all the navigation logic

  useEffect(() => {
    const preloadAssets = async () => {
      // Preload all SVG icons and images with imported paths
      const assetPaths = [
        homeIcon,
        folderIcon,
        logoIcon,
        moonIcon,
        sunIcon,
        // Add any other critical assets from your navbar and pages
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
      await new Promise((resolve) => setTimeout(resolve, 800));
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
          <h1>Laster..</h1>
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
