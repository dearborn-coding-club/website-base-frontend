import React from "react"
import { Link } from "react-router-dom"
import "../css/NotFound.css"

const NotFound: React.FC = () => {
  return (
    <div className="NotFound">
      <p className="notfound-code" aria-hidden="true">
        404
      </p>
      <h1>There&apos;s nothing at this table.</h1>
      <p className="lede">
        The page you were looking for doesn&apos;t exist or has moved.
      </p>
      <div className="notfound-actions">
        <Link to="/" className="btn btn-primary">
          Back to home
        </Link>
        <Link to="/community" className="btn btn-ghost">
          Meet the community
        </Link>
      </div>
    </div>
  )
}

export default NotFound
