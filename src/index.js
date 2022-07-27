import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { twitterTheme } from "./theme/twitterTheme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={twitterTheme}>
        <CssBaseline />
        <App />
    </ThemeProvider>
);

reportWebVitals();
