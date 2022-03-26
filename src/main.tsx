import React from "react";
import ReactDOM from "react-dom";

import { BrowserRouter } from "react-router-dom";

import App from "./App";
import './i18n';

import { CustomThemeProvider } from "./contexts/customThemeContext";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
