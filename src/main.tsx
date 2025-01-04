import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./css/main.css";
import "./css/theme.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contexts/ThemeContext";
import { AuthServiceProvider } from "./providers/AuthServiceProvider.tsx";
import { LoadingProvider } from "./providers/LoadingProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <LoadingProvider>
        <AuthServiceProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </AuthServiceProvider>
      </LoadingProvider>
    </ThemeProvider>
  </React.StrictMode>
);