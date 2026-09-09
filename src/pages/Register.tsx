import React from "react"
import "../css/Login.css"
import "../css/Register.css"
import { Link } from "react-router-dom"
import { Check, Circle } from "lucide-react"
import useRegisterForm from "../hooks/useRegisterForm"

const Register: React.FC = () => {
  const {
    errorMessage,
    registerOnSubmit,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
  } = useRegisterForm()

  const requirements = [
    { label: "At least 8 characters", met: password.length >= 8 },
    { label: "One uppercase letter", met: /[A-Z]/.test(password) },
    { label: "One lowercase letter", met: /[a-z]/.test(password) },
    { label: "One number", met: /\d/.test(password) },
    {
      label: "One special character",
      met: /[!@#$%^&*(),.?":{}|<>]/.test(password),
    },
  ]

  return (
    <div className="Register auth-page">
      <div className="auth-card">
        <header className="auth-head">
          <h1>Join the club</h1>
          <p>
            An account lets you appear on the community page and keep a profile
            other members can find.
          </p>
        </header>

        <form className="auth-form" onSubmit={registerOnSubmit}>
          <div className="field">
            <label htmlFor="register-username">Username</label>
            <input
              id="register-username"
              className="input"
              type="text"
              name="username"
              autoComplete="username"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="register-email">Email</label>
            <input
              id="register-email"
              className="input"
              type="email"
              name="email"
              autoComplete="email"
              required
            />
          </div>
          <div className="field">
            <label htmlFor="register-password">Password</label>
            <input
              id="register-password"
              className="input"
              type="password"
              name="password"
              autoComplete="new-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <ul className="password-requirements" aria-label="Password requirements">
            {requirements.map((req) => (
              <li key={req.label} className={req.met ? "valid" : "invalid"}>
                {req.met ? (
                  <Check size={14} strokeWidth={3} aria-hidden="true" />
                ) : (
                  <Circle size={14} aria-hidden="true" />
                )}
                {req.label}
              </li>
            ))}
          </ul>

          <div className="field">
            <label htmlFor="register-confirm">Confirm password</label>
            <input
              id="register-confirm"
              className="input"
              type="password"
              name="confirm-password"
              autoComplete="new-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>

          <p className="field-error auth-error" role="alert">
            {errorMessage}
          </p>

          <button type="submit" className="btn btn-primary btn-block">
            Create account
          </button>
        </form>

        <footer className="auth-foot">
          <span>
            Already a member? <Link to="/login">Log in</Link>
          </span>
        </footer>
      </div>
    </div>
  )
}

export default Register
