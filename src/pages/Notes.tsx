import React from "react";
import { useNavigate } from "react-router-dom";
import '../css/theme.css'
import { CircleArrowLeft } from 'lucide-react';

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
        backgroundColor: "var(--bg-color)",
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
            backgroundColor: "transparent",
            color: "var(--text-color)",
            border: "none",
            padding: "0px 20px 10px 20px",
            borderRadius: "5px",
            fontSize: "24px",
            cursor: "pointer",
            display: 'flex',
            alignItems: "center",
          }}
        >
          <CircleArrowLeft size={45}/>
        </button>
        <h1
          style={{
            fontSize: "48px",
            fontWeight: "bold",
            color: "var(--text-color)",
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
            color: "var(--text-color)",
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
