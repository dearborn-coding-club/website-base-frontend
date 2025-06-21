import "../css/Profile.css"
import DummyProfilePicture from "../assets/dummy-profile.png"
import CircularProgressBar from "../components/CircularProgressBar"
import React, { useEffect } from "react"

const Profile: React.FC = () => {

    useEffect(() => {
        const fetchProfileData = async () => {
            const response = await fetch("https://api.dearborncodingclub.com/profile")
            const data = await response.json()
            console.log(data)
        };
        fetchProfileData();
    }, []);

    return (
        <div className="Profile">

            <div className="basic-info-wrapper">
                <img
                    className="profile-picture" 
                    alt="profile-picture"
                    src={DummyProfilePicture}
                />
                <div className="info-skills-wrapper">
                    <div className="info">
                        <div className="name">John Doe</div>
                        <div className="user-title">Junior Senior Engineer</div>
                        <div className="contact-info">
                            <div className="phone">(000) 000 0000</div>
                            <div className="email">exampleexampleexample@exampleexample.com</div>
                            <div className="address">12345 Example Example Example Street, City, State - 12345.</div>
                        </div>
                        <div className="about-me">
                            <div className="title">About Me &nbsp;</div>
                            <div>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quas nihil enim cum quam placeat perspiciatis aut adipisci consequatur temporibus, libero, nulla ullam fuga numquam voluptate error, debitis provident esse? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore debitis quis voluptates, ab nostrum nam saepe velit? Molestiae, quas, in minima soluta consequuntur nihil deserunt, exercitationem ipsam quibusdam aliquid similique.
                            </div>
                        </div>
                    </div>
                    <div className="skills">
                        <div className="title">Skills</div>
                        <ul>
                            <li>C++</li>
                            <li>Java</li>
                            <li>Html</li>
                            <li>Css</li>
                            <li>React</li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className="leetcode-wrapper">
                <div className="title">Leetcode username: <span className="leetcode-username">LeetcodeUser</span></div>
                <div className="stats-card-wrapper">

                    <div className="stat-set">
                        <div className="stat-card">
                            <CircularProgressBar size={70} stroke={5} progress={2.6}/>
                            <div className="stat">
                                <div>All</div>
                                <div>94</div>
                                <div>1321</div>
                            </div>
                        </div>
                        <div className="stat-card">
                            <CircularProgressBar size={70} stroke={5} progress={20} strokeColor="#00b8a3"/>
                            <div className="stat">
                                <div style={{"color": "#00b8a3"}}>Easy</div>
                                <div>94</div>
                                <div>1321</div>
                            </div>
                        </div>
                    </div>

                    <div className="stat-set">
                        <div className="stat-card">
                            <CircularProgressBar size={70} stroke={5} progress={20} strokeColor="#f5c24f"/>
                            <div className="stat">
                                <div style={{"color": "#f5c24f"}}>Medium</div>
                                <div>94</div>
                                <div>1321</div>
                            </div>
                        </div>
                        <div className="stat-card">
                            <CircularProgressBar size={70} stroke={5} progress={20} strokeColor="#ff375f"/>
                            <div className="stat">
                                <div style={{"color": "#ff375f"}}>Hard</div>
                                <div>94</div>
                                <div>1321</div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>

        </div>
    )
}

export default Profile