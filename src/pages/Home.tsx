import React from "react"
import "../css/Home.css"
import Card from "../components/Card"
import DCCGathering from "../assets/dcc_gathering.webp"
import CommunityImage from "../assets/community.jpg"
import ProjectCarousel from "../components/ProjectCarousel"
import { Coffee, Laptop, MapPin, MessageCircleQuestion } from "lucide-react"

const MEETUP_URL = "https://www.meetup.com/dearborn-coding-club/"
const SLACK_URL = "https://dearborncodingclub.slack.com"
const MAPS_URL = "https://maps.app.goo.gl/ZvxnMHjYoDRCD7V27"

const Home: React.FC = () => {
  return (
    <div className="Home">
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1 className="hero-title" aria-label="Bring a project. Bring a question. Bring yourself.">
              <span className="hero-line">Bring a project.</span>
              <span className="hero-line">Bring a question.</span>
              <span className="hero-line">Bring yourself.</span>
            </h1>
            <p className="lede hero-lede">
              Dearborn Coding Club is a table of curious builders who meet over
              Yemeni coffee to work on side projects, swap answers, and get to
              know each other. Every level, every language, no agenda.
            </p>
            <div className="hero-actions">
              <a
                className="btn btn-primary"
                href={MEETUP_URL}
                target="_blank"
                rel="noreferrer"
              >
                See upcoming meetups
              </a>
              <a
                className="btn btn-ghost"
                href={SLACK_URL}
                target="_blank"
                rel="noreferrer"
              >
                Join the Slack
              </a>
            </div>
          </div>

          <figure className="hero-photo">
            <img
              src={DCCGathering}
              alt="Six club members working on laptops around a long wooden table at Haraz Coffee"
              width={1024}
              height={536}
            />
            <figcaption>The back table at Haraz Coffee, most weeks.</figcaption>
          </figure>
        </div>
      </section>

      <section className="where" aria-label="Where we meet">
        <div className="where-inner">
          <div className="where-place">
            <MapPin size={22} aria-hidden="true" />
            <div>
              <strong>Haraz Coffee</strong>
              <span>13810 Michigan Ave, Dearborn, MI 48126</span>
            </div>
          </div>
          <p className="where-note">
            We aim for the back table. Seats go fast, so arrive early and look
            for the open laptops.
          </p>
          <a
            className="btn btn-dark btn-sm"
            href={MAPS_URL}
            target="_blank"
            rel="noreferrer"
          >
            Open in Maps
          </a>
        </div>
      </section>

      <section className="section what">
        <div className="container">
          <div className="section-head">
            <h2>What happens at the table</h2>
            <p>
              There is no curriculum and nobody presents. People show up with
              whatever they are building and the rest follows.
            </p>
          </div>
          <div className="what-grid">
            <div className="what-item">
              <Laptop size={26} aria-hidden="true" />
              <h3>Work on your thing</h3>
              <p>
                A half-finished app, a homework problem, a Raspberry Pi that
                will not boot. Bring it and make some progress alongside
                people doing the same.
              </p>
            </div>
            <div className="what-item">
              <MessageCircleQuestion size={26} aria-hidden="true" />
              <h3>Ask, and get asked</h3>
              <p>
                Stuck on something? Someone at the table has probably seen it.
                Know something? Someone at the table probably needs it.
              </p>
            </div>
            <div className="what-item">
              <Coffee size={26} aria-hidden="true" />
              <h3>Meet your neighbors</h3>
              <p>
                Students, career changers, and working engineers from around
                metro Detroit. The coffee is a good excuse, the people are the
                reason.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section projects">
        <div className="container">
          <div className="section-head">
            <h2>Build the club&apos;s website with us</h2>
            <p>
              This site, its API, and the infrastructure behind it are all open
              source and built by members. Pick a repository, open an issue, or
              send a pull request. First contributions are welcome.
            </p>
          </div>
        </div>
        <ProjectCarousel />
      </section>

      <section className="section community-band">
        <div className="container">
          <Card
            image={CommunityImage}
            alt="A crowd of club members gathered together at a meetup"
            title="Meet the community"
            to="/community"
            linkText="See who's here"
          >
            <p>
              Browse the people who make up the club, see what they are working
              on, and find someone to pair with at the next meetup.
            </p>
          </Card>
        </div>
      </section>
    </div>
  )
}

export default Home
