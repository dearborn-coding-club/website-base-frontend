import "../css/Footer.css"
import ig from "../assets/ig.png"

export default function Footer() {
  return (
    <div className="Footer">
      <div className="footer-col">
        <small>
          &#127968; Meetup address: <a href="https://maps.app.goo.gl/ZvxnMHjYoDRCD7V27">13810 Michigan Ave, Dearborn, MI 48126</a>
        </small>
      </div>

      <div className="footer-col">
        <span>Join us on</span>
        <div className="social-wrapper">
          <a href="https://www.instagram.com/dearborncodingclub/"><img src={ig} alt="ig" /></a>
        </div>
        Copyright &copy; 2025
      </div>
    </div>
  )
}