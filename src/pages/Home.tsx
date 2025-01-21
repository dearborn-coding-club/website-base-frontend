import React from "react"
import "../css/Home.css"
import Card from "../components/Card"
import DCCGathering from "../assets/dcc_gathering.webp"
import MimiEye from "../assets/mimi_eye.gif"
import ProjectCarousel from "../components/ProjectCarousel"

const Home: React.FC = () => {
  const imageTextStyle = {
    fontSize: "36px",
    fontWeight: "bold",
    background:
      "repeating-linear-gradient(white, white 54px, #f5c24f 54px, #f5c24f 108px)",
    WebkitTextFillColor: "transparent",
    WebkitBackgroundClip: "text",
    cursor: "pointer",
  }

  const cardStyle = {
    backgroundColor: "var(--bg-color)",
    borderRadius: "15px",
    border: "2px solid #f5c24f",
    padding: "20px",
    flex: 1,
    margin: "0 10px",
    minWidth: "250px",
  }

  return (
    <div className="Home">
      <div className="row">
        <Card
          imageStyle={{
            backgroundImage: `url(${DCCGathering})`,
            backgroundColor: "rgba(0, 0, 0, 0.65)",
            backgroundBlendMode: "darken",
            height: "500px",
          }}
          imageTextStyle={imageTextStyle}
          imagetext={
            <>
              <p>Welcome to</p>
              <p>Dearborn</p>
              <p>Coding Club</p>
            </>
          }
          textStyle={{ textAlign: "center" }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "20px",
          margin: "20px 0",
        }}
      >
        <div style={cardStyle}>
          <h3 style={{ marginBottom: "10px", color: "var(--text-color)" }}>
            About Us
          </h3>
          <p style={{ color: "var(--text-color)" }}>
            Come work on whatever side project that you&apos;re looking into while
            getting to know some interesting folks and enjoying some Yemeni
            coffee at Haraz Coffee in Dearborn! We&apos;re an inclusive group of
            curious builders so bring questions, answers, projects, or just an
            interest in meeting new people!
          </p>
        </div>
        <div style={cardStyle}>
          <h3 style={{ marginBottom: "10px", color: "var(--text-color)" }}>
            Our Projects
          </h3>
          <p style={{ color: "var(--text-color)" }}>
            If you&apos;re interested in collaborating, we&apos;re currently working on
            this website for the group. We&apos;ve got a few repositories that manage
            the infrastructure and the code:
          </p>
          <ul style={{ listStyleType: "none", padding: 0, margin: "10px 0" }}>
            <li>
              <a
                href="https://github.com/dearborn-coding-club/website-base-backend"
                className="link-color"
                style={{ display: "inline-block", margin: "5px 0" }}
              >
                website-base-backend
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dearborn-coding-club/website-base-frontend"
                className="link-color"
                style={{ display: "inline-block", margin: "5px 0" }}
              >
                website-base-frontend
              </a>
            </li>
            <li>
              <a
                href="https://github.com/dearborn-coding-club/Terraform-infra-website"
                className="link-color"
                style={{ display: "inline-block", margin: "5px 0" }}
              >
                Terraform-infra-website
              </a>
            </li>
          </ul>
        </div>
        <div style={cardStyle}>
          <h3 style={{ marginBottom: "10px", color: "var(--text-color)" }}>
            Join Our Community
          </h3>
          <p style={{ color: "var(--text-color)" }}>
            We&apos;ve recently started a Slack organization. Join us at{" "}
            <a
              href="https://dearborncodingclub.slack.com"
              className="link-color"
            >
              dearborncodingclub.slack.com
            </a>
            . Space is limited, so we&apos;ll aim to secure the back table before it
            fills up with other patrons.
          </p>
        </div>
      </div>
      <div className="row">
        <Card
          imageStyle={{
            backgroundImage: `url(${MimiEye})`,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            backgroundBlendMode: "darken",
            height: "300px",
          }}
          imageTextStyle={imageTextStyle}
          imagetext={
            <>
              <p>Bring</p>
              <p>Questions</p>
              <p>And</p>
              <p>Projects</p>
            </>
          }
        />
        <Card
          imageStyle={{ height: "300px" }}
          imagetext={
            <div className="image-text-style">
              <p>Enjoy</p>
              <p className="heighlight">Yemeni Coffee</p>
            </div>
          }
        />
      </div>
      <div className="column" style={{backgroundColor: "#161e28"}}>
        <div className="image-text-style" style={{ color: "white", cursor: "auto" }}>
          <p>Know our <span className="heighlight">Projects</span></p>
        </div>
          <ProjectCarousel />
      </div>
    </div>
  )
}

export default Home
