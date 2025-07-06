import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from './contexts/ThemeContext';


const container = document.getElementById("root");
const root = createRoot(container);

// More explicit check - only use basename for production builds
const basename = (process.env.NODE_ENV === 'production' && window.location.hostname !== 'localhost') 
  ? '/portfolio_react' 
  : '';

root.render(
  <React.StrictMode>
    <ThemeProvider>
      <BrowserRouter basename={basename}>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);



