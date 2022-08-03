import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { TwitterThemeDark } from "./theme/twitterThemeDark";
import { TwitterThemeLight } from "./theme/twitterThemeLight";

const root = ReactDOM.createRoot(document.getElementById("root"));

const theme =
  window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches
    ? TwitterThemeDark
    : TwitterThemeDark; //TwitterThemeLight;

root.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <App />
  </ThemeProvider>
);

reportWebVitals();
