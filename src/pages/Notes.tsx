import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../css/theme.css"
import { CircleArrowLeft } from "lucide-react"

interface ServerResponse {
  message: string
}

const Notes: React.FC = () => {
  const navigate = useNavigate()
  const [message, setMessage] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)

  const handleGoBack = (): void => {
    navigate("/")
  }

  useEffect(() => {
    const fetchMessage = async (): Promise<void> => {
      try {
        const response = await fetch(
          "https://api.dearborncodingclub.com/notes/"
        )
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data: ServerResponse = await response.json()
        setMessage(data.message)
      } catch (e) {
        setError(e instanceof Error ? e.message : "An unknown error occurred")
        console.error("Error fetching message:", e)
      } finally {
        setIsLoading(false)
      }
    }

    fetchMessage()
  }, [])

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
            display: "flex",
            alignItems: "center",
          }}
        >
          <CircleArrowLeft size={45} />
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
          justifyContent: "center",
          flex: 1,
        }}
      >
        {isLoading ? (
          <p>Loading message...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <p
            style={{
              fontSize: "18px",
              color: "var(--text-color)",
              textAlign: "center",
              maxWidth: "600px",
            }}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  )
}

export default Notes
