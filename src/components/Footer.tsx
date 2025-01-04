import "../css/Footer.css"
import fb from "../assets/fb.png"
import x from "../assets/x.png"
import ig from "../assets/ig.png"
import linkedIn from "../assets/in.png"

export default function Footer() {
  return (
    <div className="Footer">
      <div className="footer-col">
        <small>&#127968; Address: 13810 Michigan Ave, Dearborn, MI 48126</small>
        <small>&#128235; Email: example@email.com</small>
        <small>More</small>
      </div>

      <div className="footer-col">
        <small>Site Map</small>
        <small>About Us</small>
        <small>More</small>
      </div>

      <div className="footer-col">
        <span>Join Us On</span>
        <div className="social-wrapper">
          <img src={ig} />
          <img src={fb} />
          <img src={x} />
          <img src={linkedIn} />
        </div>
        Copyright &copy; 2024
      </div>
    </div>
  )
}
