import React from "react"
import "../css/Login.css"
import { Link } from "react-router-dom"
import useLoginForm from "../hooks/useLoginForm"

const Login: React.FC = () => {
  const { errorMessage, loginOnSubmit } = useLoginForm()

  return (
    <div className="Login auth-page">
      <div className="auth-card">
        <header className="auth-head">
          <h1>Welcome back</h1>
          <p>Log in to update your profile and post meeting notes.</p>
        </header>

        <form className="auth-form" onSubmit={loginOnSubmit}>
          <div className="field">
            <label htmlFor="login-username">Username</label>
            <input
              id="login-username"
              className="input"
              type="text"
              name="username"
              autoComplete="username"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="login-password">Password</label>
            <input
              id="login-password"
              className="input"
              type="password"
              name="password"
              autoComplete="current-password"
              required
            />
          </div>

          <p className="field-error auth-error" role="alert">
            {errorMessage}
          </p>

          <button type="submit" className="btn btn-primary btn-block">
            Log in
          </button>
        </form>

        <footer className="auth-foot">
          <span>
            New here? <Link to="/register">Create an account</Link>
          </span>
          <Link to="/">Forgot your password?</Link>
        </footer>
      </div>
    </div>
  )
}

export default Login
