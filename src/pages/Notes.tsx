import React from "react";

const Notes: React.FC = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "#f5f5f5",
        padding: "20px",
        boxSizing: "border-box",
      }}
    >
      <h1
        style={{
          fontSize: "48px",
          fontWeight: "bold",
          color: "#333",
          marginBottom: "20px",
        }}
      >
        Notes
      </h1>
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
  );
};

export default Notes;
