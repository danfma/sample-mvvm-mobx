import React, { StrictMode } from "react";
import ReactDOM from "react-dom";
import { createAppViewModel } from "./viewmodels";
import AppProvider from "./views/shared/AppProvider";
import App from "./views/App";
import "./styles/index.scss";

const app = createAppViewModel();

ReactDOM.render(
  <StrictMode>
    <AppProvider value={app}>
      <App />
    </AppProvider>
  </StrictMode>,
  document.getElementById("root")
);

if (module.hot) {
  module.hot.accept();
}
