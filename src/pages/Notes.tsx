import React, { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import "../css/Notes.css"
import { ArrowLeft } from "lucide-react"
import { useAuthServiceProvider } from "../providers/AuthServiceProvider"
import { toastType, useToastProvider } from "../providers/ToastProvider"

const NOTES_URL = "https://api.dearborncodingclub.com/v2/notes/"

interface Note {
  title?: string
  content?: string
  [key: string]: unknown
}

const isNoteList = (data: unknown): data is Note[] =>
  Array.isArray(data) &&
  data.every(
    (n) =>
      typeof n === "object" &&
      n !== null &&
      ("title" in n || "content" in n)
  )

const Notes: React.FC = () => {
  const [title, setTitle] = useState<string>("")
  const [notes, setNotes] = useState<string>("")
  const [data, setData] = useState<unknown>(null)
  const [isLoading, setIsLoading] = useState<boolean>(true)
  const [isSaving, setIsSaving] = useState<boolean>(false)
  const [error, setError] = useState<string | null>(null)
  const { token } = useAuthServiceProvider()
  const { pushToast } = useToastProvider()

  const authHeaders = {
    "Content-type": "application/json; charset=UTF-8",
    Authorization: `Bearer ${token || ""}`,
  }

  const fetchNotes = async (): Promise<void> => {
    try {
      const response = await fetch(NOTES_URL, {
        method: "GET",
        headers: authHeaders,
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      setData(await response.json())
      setError(null)
    } catch (e) {
      setError(e instanceof Error ? e.message : "An unknown error occurred")
      console.error("Error fetching notes:", e)
    } finally {
      setIsLoading(false)
    }
  }

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSaving(true)
    try {
      const response = await fetch(NOTES_URL, {
        method: "POST",
        body: JSON.stringify({ title: title, content: notes }),
        headers: authHeaders,
      })
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }
      pushToast("Note posted", toastType.SUCCESS)
      setTitle("")
      setNotes("")
      await fetchNotes()
    } catch (err) {
      console.error("Error posting note:", err)
      pushToast("Couldn't post the note. Are you logged in?", toastType.ERROR)
    } finally {
      setIsSaving(false)
    }
  }

  useEffect(() => {
    fetchNotes()
  }, [])

  const renderNotes = () => {
    if (isLoading) {
      return <p className="muted">Loading notes…</p>
    }
    if (error) {
      return (
        <div className="notes-empty">
          <p>Couldn&apos;t load notes right now.</p>
          <p className="small muted">{error}</p>
        </div>
      )
    }
    if (isNoteList(data)) {
      if (data.length === 0) {
        return (
          <div className="notes-empty">
            <p>No notes yet. Post the first one from the form.</p>
          </div>
        )
      }
      return (
        <ul className="notes-list">
          {data.map((note, i) => (
            <li key={i} className="note">
              {note.title && <h3>{String(note.title)}</h3>}
              {note.content && <p>{String(note.content)}</p>}
            </li>
          ))}
        </ul>
      )
    }
    return <pre className="notes-raw">{JSON.stringify(data, null, 2)}</pre>
  }

  return (
    <div className="Notes page">
      <Link to="/" className="back-link">
        <ArrowLeft size={18} aria-hidden="true" />
        Home
      </Link>

      <header className="page-head">
        <h1>Meeting notes</h1>
        <p>
          What was discussed, what got built, and what to bring next time.
          Anyone with an account can post.
        </p>
      </header>

      <div className="notes-layout">
        <section className="notes-feed" aria-label="Past notes">
          {renderNotes()}
        </section>

        <aside className="notes-compose">
          <form onSubmit={onSubmit} className="notes-form">
            <h2>Post a note</h2>
            <div className="field">
              <label htmlFor="note-title">Title</label>
              <input
                id="note-title"
                className="input"
                type="text"
                name="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Meetup, Sept 9"
                required
              />
            </div>
            <div className="field">
              <label htmlFor="note-content">Notes</label>
              <textarea
                id="note-content"
                className="input"
                name="content"
                rows={7}
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Who came, what people worked on, links worth sharing."
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              disabled={isSaving}
            >
              {isSaving ? "Posting…" : "Post note"}
            </button>
            {!token && (
              <p className="field-hint">
                You need to <Link to="/login">log in</Link> to post.
              </p>
            )}
          </form>
        </aside>
      </div>
    </div>
  )
}

export default Notes
