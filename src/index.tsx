import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
import { store } from "src/services/store";
import "./index.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.querySelector("#root")
);

// Hot Module Replacement (HMR) (Learn more: https://snowpack.dev/concepts/hot-module-replacement)
if (import.meta.hot) {
  import.meta.hot.accept();
}
