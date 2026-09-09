import "../css/Footer.css"
import { Link } from "react-router-dom"
import { Github, Instagram, MapPin, Slack } from "lucide-react"
import { useTheme } from "../providers/ThemeProvider"
import DCCLogoDark from "../assets/dcc_dark.svg"
import DCCLogoLight from "../assets/dcc_light.svg"

export default function Footer() {
  const { theme } = useTheme()
  const year = new Date().getFullYear()

  return (
    <footer className="Footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <img
            src={theme === "light" ? DCCLogoLight : DCCLogoDark}
            alt=""
            className="footer-logo"
          />
          <p className="footer-tagline">
            A table of curious builders in Dearborn, Michigan. Bring a project,
            a question, or just yourself.
          </p>
        </div>

        <div className="footer-col">
          <h4>Find us</h4>
          <a
            className="footer-address"
            href="https://maps.app.goo.gl/ZvxnMHjYoDRCD7V27"
            target="_blank"
            rel="noreferrer"
          >
            <MapPin size={18} aria-hidden="true" />
            <span>
              Haraz Coffee
              <br />
              13810 Michigan Ave
              <br />
              Dearborn, MI 48126
            </span>
          </a>
        </div>

        <div className="footer-col">
          <h4>Explore</h4>
          <Link to="/community">Community</Link>
          <Link to="/notes">Meeting notes</Link>
          <a
            href="https://www.meetup.com/dearborn-coding-club/"
            target="_blank"
            rel="noreferrer"
          >
            Meetup group
          </a>
        </div>

        <div className="footer-col">
          <h4>Connect</h4>
          <a
            href="https://dearborncodingclub.slack.com"
            target="_blank"
            rel="noreferrer"
          >
            <Slack size={18} aria-hidden="true" />
            Slack
          </a>
          <a
            href="https://github.com/dearborn-coding-club"
            target="_blank"
            rel="noreferrer"
          >
            <Github size={18} aria-hidden="true" />
            GitHub
          </a>
          <a
            href="https://www.instagram.com/dearborncodingclub/"
            target="_blank"
            rel="noreferrer"
          >
            <Instagram size={18} aria-hidden="true" />
            Instagram
          </a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>&copy; {year} Dearborn Coding Club</span>
          <a
            href="https://github.com/dearborn-coding-club/website-base-frontend"
            target="_blank"
            rel="noreferrer"
          >
            This site is open source
          </a>
        </div>
      </div>
    </footer>
  )
}
