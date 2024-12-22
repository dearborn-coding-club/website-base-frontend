import "../css/Navbar.css"
import DCCLogoDark from "../assets/dcc_dark.svg"
import DCCLogoLight from "../assets/dcc_light.svg"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import { useTheme } from "../contexts/ThemeContext"

export default function Navbar() {
  const [navRevealedState, setNavRevealedState] = useState(false)
  const { theme } = useTheme()
  const navigate = useNavigate()
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault()
    console.log("Logging in...")
    fetch("https://auth.dearborncodingclub.com/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      referrerPolicy: 'no-referrer',
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token)
          localStorage.setItem("refresh_token", data.refresh_token)
          alert("Login successful")
          console.log("Login successful")
        } else {
          alert("Login failed")
          console.log("Login failed")
        }
      })
      .catch((error) => {
        console.error("Error:", error)
      })
  }
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  function handleUsernameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUsername(event.target.value)
  }
  function handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>) {
    setPassword(event.target.value)
  }

  return (
    <>
      <div
        className="Navbar"
        style={{
          backgroundColor:
            theme === "light" ? "var(--bg-color)" : "var(--bg-color)",
        }}
      >
        <img
          className="navbar-logo"
          src={theme === "light" ? DCCLogoLight : DCCLogoDark}
          alt="DCC Logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <form onSubmit={handleSubmit}>
            <div>
              <label htmlFor="username">Username:</label>
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <button type="submit">Login</button>
          </form>
          <ThemeToggle />
          <button
            title="Menu"
            className="navbar-btn"
            onClick={() => setNavRevealedState((prev) => !prev)}
          >
            <svg
              viewBox="0 0 40 40"
              className={
                navRevealedState ? "hamburger rotateViewBox" : "hamburger"
              }
            >
              <rect
                x="4"
                fill="currentColor"
                y="11"
                width="32"
                height="2"
                rx="2"
                ry="1"
                className={navRevealedState ? "rotateRect" : ""}
              ></rect>
              <rect
                x="4"
                fill="currentColor"
                y="19"
                width="32"
                height="2"
                rx="2"
                ry="1"
              ></rect>
              <rect
                x="4"
                fill="currentColor"
                y="27"
                width="32"
                height="2"
                rx="2"
                ry="1"
                className={navRevealedState ? "invisible" : ""}
              ></rect>
            </svg>
          </button>
        </div>
      </div>
      <div className={navRevealedState ? "Menu" : "Menu menu-hidden"}>
        <Link to="/" onClick={() => setNavRevealedState(false)}>
          Home
        </Link>
        <Link to="/notes" onClick={() => setNavRevealedState(false)}>
          Past Meeting Notes
        </Link>
      </div>
    </>
  )
}
