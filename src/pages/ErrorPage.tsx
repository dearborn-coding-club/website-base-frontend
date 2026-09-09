import React from "react"
import { useNavigate, useRouteError } from "react-router-dom"
import "../css/NotFound.css"

interface RouterError {
  statusText?: string
  message?: string
}

const ErrorPage: React.FC = () => {
  const error = useRouteError() as RouterError
  const navigate = useNavigate()

  return (
    <div className="NotFound">
      <h1>Something went wrong.</h1>
      <p className="lede">
        {error?.statusText || error?.message || "An unexpected error occurred."}
      </p>
      <div className="notfound-actions">
        <button
          type="button"
          className="btn btn-primary"
          onClick={() => navigate("/")}
        >
          Back to home
        </button>
      </div>
    </div>
  )
}

export default ErrorPage
