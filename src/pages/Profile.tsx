import "../css/Profile.css"
import DummyProfilePicture from "../assets/dummy-profile.png"
import CircularProgressBar from "../components/CircularProgressBar"
import React, { useEffect } from "react"
import { Link } from "react-router-dom"
import { Mail, MapPin, Phone } from "lucide-react"

const LEETCODE_STATS = [
  { label: "All", solved: 94, total: 1321, progress: 2.6, color: "var(--info)" },
  { label: "Easy", solved: 94, total: 1321, progress: 20, color: "#00b8a3" },
  { label: "Medium", solved: 94, total: 1321, progress: 20, color: "#f5c24f" },
  { label: "Hard", solved: 94, total: 1321, progress: 20, color: "#ff375f" },
]

const SKILLS = ["C++", "Java", "HTML", "CSS", "React"]

const Profile: React.FC = () => {
  useEffect(() => {
    const fetchProfileData = async () => {
      const response = await fetch("https://api.dearborncodingclub.com/profile")
      const data = await response.json()
      console.log(data)
    }
    fetchProfileData()
  }, [])

  return (
    <div className="Profile page">
      <section className="profile-header">
        <img
          className="profile-picture"
          alt="John Doe"
          src={DummyProfilePicture}
        />
        <div className="profile-identity">
          <h1 className="profile-name">John Doe</h1>
          <p className="profile-role">Junior Senior Engineer</p>
          <ul className="profile-contact">
            <li>
              <Phone size={16} aria-hidden="true" />
              <span>(000) 000 0000</span>
            </li>
            <li>
              <Mail size={16} aria-hidden="true" />
              <span>exampleexampleexample@exampleexample.com</span>
            </li>
            <li>
              <MapPin size={16} aria-hidden="true" />
              <span>12345 Example Example Example Street, City, State 12345</span>
            </li>
          </ul>
        </div>
        <Link to="/editprofile" className="btn btn-ghost btn-sm profile-edit">
          Edit profile
        </Link>
      </section>

      <div className="profile-grid">
        <section className="profile-block profile-about">
          <h2>About</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
            quas nihil enim cum quam placeat perspiciatis aut adipisci
            consequatur temporibus, libero, nulla ullam fuga numquam voluptate
            error, debitis provident esse? Lorem ipsum, dolor sit amet
            consectetur adipisicing elit. Labore debitis quis voluptates, ab
            nostrum nam saepe velit? Molestiae, quas, in minima soluta
            consequuntur nihil deserunt, exercitationem ipsam quibusdam aliquid
            similique.
          </p>
        </section>

        <section className="profile-block profile-skills">
          <h2>Skills</h2>
          <ul className="skill-list">
            {SKILLS.map((skill) => (
              <li key={skill}>{skill}</li>
            ))}
          </ul>
        </section>

        <section className="profile-block profile-leetcode">
          <div className="profile-block-head">
            <h2>LeetCode</h2>
            <span className="muted">
              as <span className="mono">LeetcodeUser</span>
            </span>
          </div>
          <div className="stat-grid">
            {LEETCODE_STATS.map((stat) => (
              <div className="stat-card" key={stat.label}>
                <CircularProgressBar
                  size={64}
                  stroke={5}
                  progress={stat.progress}
                  strokeColor={stat.color}
                />
                <div className="stat">
                  <span className="stat-label" style={{ color: stat.color }}>
                    {stat.label}
                  </span>
                  <span className="stat-solved">{stat.solved}</span>
                  <span className="stat-total">of {stat.total}</span>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Profile
