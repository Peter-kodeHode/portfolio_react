import React from "react";
import { useLocation, Routes, Route } from "react-router-dom";
import "./App.css";
import NavBar from "./globalComponents/NavBar";
import Footer from "./globalComponents/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import AboutMe from "./pages/AboutMe";
import { AnimatePresence } from "framer-motion";
import GlobalStyle from "./globalComponents/globalStyles";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <GlobalStyle />
      <NavBar />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="projects" element={<Projects />} />
        </Routes>
      </AnimatePresence>
      <Footer />
    </div>
  );
}

export default App;
