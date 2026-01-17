import React, { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import "../css/theme.css"
import { CircleArrowLeft } from "lucide-react"
import { useAuthServiceProvider } from "../providers/AuthServiceProvider"
import { API_BASE_URL } from "../config/api"

interface ServerResponse {
  message: string
}

const Notes: React.FC = () => {
  const navigate = useNavigate()
  const [title, setTitle] = useState<string>("")
  const [notes, setNotes] = useState<string>("")
  const [message, setMessage] = useState<string>("")
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [error, setError] = useState<string | null>(null)
  const { token } = useAuthServiceProvider()

  const handleGoBack = (): void => {
    navigate("/")
  }

  const onTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
  }
  const onNotesChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNotes(e.target.value)
  }

  const onClick = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const response = await fetch(`${API_BASE_URL}/v2/notes/`, {
        method: "POST",
        body: JSON.stringify({title: title, content: notes}),
        headers: {
          "Content-type": "application/json; charset=UTF-8",
          "Authorization": `Bearer ${token || ""}`,
        }
      }
    )

    if (!response.ok) {
      console.log("failure!")
      throw new Error(`HTTP error! status: ${response.status}`)
    } else {
      console.log("success!")
    }

    const data: ServerResponse = await response.json()
    console.log(data);
    
  }

  useEffect(() => {
    const fetchMessage = async (): Promise<void> => {
      try {
        const response = await fetch(
          `${API_BASE_URL}/v2/notes/`, {
            method: "GET",
            headers: {
              "Content-type": "application/json; charset=UTF-8",
              "Authorization": `Bearer ${token || ""}`,
            },
          }
        )
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = JSON.stringify(await response.json())
        setMessage(data)
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
        }}
      >
        {isLoading ? (
          <p>Loading message...</p>
        ) : error ? (
          <p>Error: {error}</p>
        ) : (
          <>
            <div
              style={{
                fontSize: "18px",
                color: "var(--text-color)",
                display: "block"
              }}
            >
              <p>{message}</p>
            </div>
            <div style={{ display: "block"}}>
              <p>Please enter a new note:</p>
              <div>
                <label htmlFor="title" style={{paddingRight: "5px"}}>Title</label>
                <input type="text" name="title" onChange={onTitleChange} />
              </div>
              <br/>
              <div>
                <label htmlFor="content" style={{paddingRight: "5px"}}>Content</label>
                <textarea name="content" onChange={onNotesChange}>
                </textarea>
              </div>
            </div>
            <button type="submit" value={notes} onClick={onClick} style={{ width: "100px", height: "30px"}}>Submit</button>
          </>
        )}
      </div>
    </div>
  )
}

export default Notes
