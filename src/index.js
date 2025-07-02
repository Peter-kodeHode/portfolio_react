import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

// More explicit check - only use basename for production builds
const basename = (process.env.NODE_ENV === 'production' && window.location.hostname !== 'localhost') 
  ? '/portfolio_react' 
  : '';

root.render(
  <React.StrictMode>
    <BrowserRouter basename={basename}>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);



