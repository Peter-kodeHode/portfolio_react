import React from "react";
import {
  BrowserRouter as Router,
} from "react-router-dom";
import './App.css';
import Header from "./components/Header.js"
import Footer from "./components/Footer.js"
import Home from "./components/Home.js"


function App() {
  return (
    <Router>
    <div className="App">
      <Header/>
      <Home/>
      <Footer/>
    </div>
    </Router>
  );
}

export default App;
