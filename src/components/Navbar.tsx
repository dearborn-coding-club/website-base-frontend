import "../css/Navbar.css"
import DCCLogoDark from "../assets/dcc_dark.svg"
import DCCLogoLight from "../assets/dcc_light.svg"
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom"
import ThemeToggle from "./ThemeToggle"
import { useTheme } from "../providers/ThemeProvider"
import { useAuthServiceProvider } from "../providers/AuthServiceProvider"
import { toastType, useToastProvider } from "../providers/ToastProvider"

export default function Navbar() {
  const [navRevealedState, setNavRevealedState] = useState(false)
  const { token, logout } = useAuthServiceProvider()
  const { pushToast } = useToastProvider()
  const { theme } = useTheme()
  const navigate = useNavigate()

  return (
    <>
      <div
        className="Navbar"
        style={{backgroundColor:theme === "light" ? "var(--bg-color)" : "var(--bg-color)"}}
      >
        <img
          className="navbar-logo"
          src={theme === "light" ? DCCLogoLight : DCCLogoDark}
          alt="DCC Logo"
          onClick={() => navigate("/")}
          style={{ cursor: "pointer" }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 15 }}>
          <ThemeToggle />
          <button
            title="Menu"
            className="navbar-btn"
            onClick={() => setNavRevealedState((prev) => !prev)}
          >
            <svg
              viewBox="0 0 40 40"
              className={navRevealedState ? "hamburger rotateViewBox" : "hamburger"}
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
        {
          token?
          <>
            <Link
              to="/"
              onClick={() => {
                logout()
                pushToast("User Logged Out!", toastType.WARNING)
                setNavRevealedState(false)
              }
            }>
              Log Out
            </Link>
            <Link to="/profile" onClick={() => setNavRevealedState(false)}>
              Profile
            </Link>
            <Link to="/editprofile" onClick={() => setNavRevealedState(false)}>
              Edit Profile
            </Link>
          </>
          :
          <>
            <span style={{padding: "10px"}}>
              <Link style={{borderRight: "1px solid var(--text-color)"}} to="/register" onClick={() => setNavRevealedState(false)}>
                Register
              </Link>
              <Link to="/login" onClick={() => setNavRevealedState(false)}>
                Login
              </Link>
            </span>
          </>
        }
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
