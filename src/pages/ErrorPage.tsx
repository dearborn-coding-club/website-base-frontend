import React from "react";
import { useNavigate, useRouteError } from "react-router-dom";

interface RouterError {
  statusText?: string;
  message?: string;
}

const ErrorPage: React.FC = () => {
  const error = useRouteError() as RouterError;
  const navigate = useNavigate();

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f7fafc",
      }}
    >
      <div
        style={{
          maxWidth: "28rem",
          width: "100%",
          padding: "2.5rem",
          backgroundColor: "white",
          boxShadow: "0 10px 15px rgba(0, 0, 0, 0.1)",
          borderRadius: "0.75rem",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <h2
            style={{
              marginTop: "1.5rem",
              fontSize: "1.875rem",
              fontWeight: "800",
              color: "#1a202c",
            }}
          >
            Oops!
          </h2>
          <p
            style={{
              marginTop: "0.5rem",
              fontSize: "0.875rem",
              color: "#718096",
            }}
          >
            {error.statusText ||
              error.message ||
              "An unexpected error occurred"}
          </p>
        </div>
        <div style={{ marginTop: "2rem" }}>
          <button
            onClick={() => navigate("/")}
            style={{
              width: "100%",
              display: "flex",
              justifyContent: "center",
              padding: "0.5rem 1rem",
              border: "none",
              borderRadius: "0.375rem",
              boxShadow: "0 1px 2px rgba(0, 0, 0, 0.05)",
              fontSize: "0.875rem",
              fontWeight: "500",
              color: "white",
              backgroundColor: "#4f46e5",
              cursor: "pointer",
              outline: "none",
            }}
            onMouseOver={(e) =>
              (e.currentTarget.style.backgroundColor = "#4338ca")
            }
            onMouseOut={(e) =>
              (e.currentTarget.style.backgroundColor = "#4f46e5")
            }
          >
            Go back to homepage
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
