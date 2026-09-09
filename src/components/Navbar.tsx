import "../css/Navbar.css";
import DCCLogoDark from "../assets/dcc_dark.svg";
import DCCLogoLight from "../assets/dcc_light.svg";
import { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import { useTheme } from "../providers/ThemeProvider";
import { useAuthServiceProvider } from "../providers/AuthServiceProvider";
import { toastType, useToastProvider } from "../providers/ToastProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { token, logout } = useAuthServiceProvider();
  const { pushToast } = useToastProvider();
  const { theme } = useTheme();
  const location = useLocation();

  // Close the mobile menu whenever the route changes.
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  // Lock page scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleLogout = () => {
    logout();
    pushToast("You're logged out", toastType.INFO);
  };

  const links = (
    <>
      <NavLink to="/" end className="nav-link">
        Home
      </NavLink>
      <NavLink to="/community" className="nav-link">
        Community
      </NavLink>
      <NavLink to="/notes" className="nav-link">
        Meeting notes
      </NavLink>
    </>
  );

  const authLinks = token ? (
    <>
      <NavLink to="/profile" className="nav-link">
        Profile
      </NavLink>
      <NavLink to="/editprofile" className="nav-link">
        Edit profile
      </NavLink>
      <Link to="/" className="btn btn-ghost btn-sm" onClick={handleLogout}>
        Log out
      </Link>
    </>
  ) : (
    <>
      <NavLink to="/login" className="nav-link">
        Log in
      </NavLink>
      <Link to="/register" className="btn btn-primary btn-sm">
        Join the club
      </Link>
    </>
  );

  return (
    <>
      <header className="Navbar">
        <div className="navbar-inner">
          <Link
            to="/"
            className="navbar-brand"
            aria-label="Dearborn Coding Club home"
          >
            <img
              className="navbar-logo"
              src={theme === "light" ? DCCLogoLight : DCCLogoDark}
              alt=""
            />
            <span className="navbar-wordmark">Dearborn Coding Club</span>
          </Link>

          <nav className="navbar-links" aria-label="Primary">
            {links}
          </nav>

          <div className="navbar-actions">
            <div className="navbar-auth">{authLinks}</div>
            <ThemeToggle />
            <button
              type="button"
              className="icon-btn navbar-menu-btn"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((prev) => !prev)}
            >
              {open ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </header>

      <div id="mobile-menu" className={open ? "Menu" : "Menu menu-hidden"}>
        <nav className="menu-links" aria-label="Mobile">
          {links}
          <div className="menu-divider" />
          {authLinks}
        </nav>
      </div>
    </>
  );
}
