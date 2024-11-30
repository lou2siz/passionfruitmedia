// src/index.js
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";

const theme = createTheme({
  palette: {
    primary: {
      main: "#FF6F61", // Passionfruit-like color
    },
    background: {
      default: "#F5F5DC", // Beige background
    },
    text: {
      primary: "#333",
    },
  },
  typography: {
    fontFamily: "'Roboto', sans-serif",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
