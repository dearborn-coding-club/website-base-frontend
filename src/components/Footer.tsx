import "../css/Footer.css"
import ig from "../assets/ig.png"

export default function Footer() {
  return (
    <div className="Footer">
      <div className="custom-footer-col">
        <div className="section-1">Reach out to us</div>
          <div className="section-2"><small>&#127968; Meetup address: </small></div>
          <div className="section-3"><a href="https://maps.app.goo.gl/ZvxnMHjYoDRCD7V27">13810 Michigan Ave, Dearborn, MI 48126</a></div>
        <div className="section-4"><small>Meetup event: </small></div>
        <div className="section-5"><a href="https://www.meetup.com/dearborn-coding-club/">https://www.meetup.com/dearborn-coding-club/</a></div>
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