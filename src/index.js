// index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import "./index.css";

import { ThemeProvider } from "@emotion/react";

const theme = {
  white: "#ffffff",
  black: "#010101",
  green: "#4caf50",
  red: "#f44336",
  blue: "#2196f3",
  primaryTtext: "#212121",
  secondaryText: "#757575",
};

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
