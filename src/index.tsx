import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <App />
    </Router>
  </React.StrictMode>,
  document.querySelector("#root")
);

// Hot Module Replacement (HMR) (Learn more: https://snowpack.dev/concepts/hot-module-replacement)
if (import.meta.hot) {
  import.meta.hot.accept();
}
