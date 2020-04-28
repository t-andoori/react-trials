import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "jquery/dist/jquery.min.js";
import "popper.js/dist/popper.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
