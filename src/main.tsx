import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./css/main.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage.tsx";
import Notes from "./pages/Notes.tsx";

const AppRouter = () => {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: "/",
          element: <App />,
          errorElement: <ErrorPage />,
        },
        {
          path: "/notes/",
          element: <Notes />,
        },
      ])}
    />
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
);
