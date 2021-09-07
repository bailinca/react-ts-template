import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { SWRConfig } from "swr";

import swrConfig from "./config/swrConfig";
import App from "./App";
import "./index.css";

if (import.meta.env.API_MOCKING) {
  const { worker } = await import("./mocks/browser");
  await worker.start();
}

ReactDOM.render(
  <React.StrictMode>
    <SWRConfig value={swrConfig}>
      <Router>
        <App />
      </Router>
    </SWRConfig>
  </React.StrictMode>,
  document.querySelector("#root")
);

// Hot Module Replacement (HMR) (Learn more: https://snowpack.dev/concepts/hot-module-replacement)
if (import.meta.hot) {
  import.meta.hot.accept();
}
