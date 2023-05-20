import React from "react";
import ReactDOM from "react-dom/client";
"react-router-dom";
import App from './App'
import { ThemeContextProvider } from "./useThemeContext";

ReactDOM.createRoot(
  document.getElementById("root")).render(
    <ThemeContextProvider>
       <App />
    </ThemeContextProvider>
)