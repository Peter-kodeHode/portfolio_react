import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import "./App.css";
import "./App-mobile.css";
import NavBar from "./globalComponents/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalComponents/globalStyles";
import usePageNavigation from "./hooks/usePageNavigation";
import PageIndicator from "./globalComponents/PageIndicator";

function App() {
  const location = useLocation();
  usePageNavigation(); // This will handle all the navigation logic

  return (
    <div className="App">
      <GlobalStyle />
      <PageIndicator />
      <NavBar />
      
      <AnimatePresence exitBeforeEnter>
        <div key={location.pathname}>
          <Routes location={location}>
            <Route path="/" element={<Home />} />
            <Route path="aboutme" element={<AboutMe />} />
            <Route path="projects" element={<Projects />} />
          </Routes>
        </div>
      </AnimatePresence>
    </div>
  );
}

export default App;
