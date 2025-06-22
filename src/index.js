import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { HashRouter } from "react-router-dom";
import FontStyles from "../src/fonts/fontStyles";

ReactDOM.render(
  <React.StrictMode>
    <FontStyles />
    <HashRouter>
      <App />
    </HashRouter>
  </React.StrictMode>,
  document.getElementById("root")
);


