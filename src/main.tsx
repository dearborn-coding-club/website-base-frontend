import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./css/main.css";
import "./css/theme.css";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./providers/ThemeProvider.tsx";
import { AuthServiceProvider } from "./providers/AuthServiceProvider.tsx";
import { LoadingProvider } from "./providers/LoadingProvider.tsx";
import { ToastProvider } from "./providers/ToastProvider.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider>
      <LoadingProvider>
        <ToastProvider>
          <AuthServiceProvider>
            <BrowserRouter>
              <App />
            </BrowserRouter>
          </AuthServiceProvider>
        </ToastProvider>
      </LoadingProvider>
    </ThemeProvider>
  </React.StrictMode>
);