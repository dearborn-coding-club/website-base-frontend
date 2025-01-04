import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./css/main.css";
import "./css/theme.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { TokenProvider } from "./providers/TokenProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <TokenProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </TokenProvider>
    </ThemeProvider>
  </React.StrictMode>
);