import React from "react";
import { useNavigate } from "react-router-dom";

const Notes: React.FC = () => {
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate("/");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          width: "100%",
          marginBottom: "20px",
        }}
      >
        <button
          onClick={handleGoBack}
          style={{
            backgroundColor: "#333",
            color: "#fff",
            border: "none",
            padding: "10px 20px",
            borderRadius: "5px",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Go Back
        </button>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "#333",
          }}
        >
          Notes
        </h1>
        <div style={{ width: "50px" }} />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
        }}
      >
        <p
          style={{
            fontSize: "18px",
            color: "#666",
            textAlign: "center",
            maxWidth: "600px",
          }}
        >
          Here you can find all your notes organized and easily accessible.
        </p>
      </div>
    </div>
  );
};

export default Notes;
