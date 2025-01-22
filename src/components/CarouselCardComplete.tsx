import React from "react"
import "../css/CarouselCardComplete.css"
import githubLightIcon from "../assets/github-light.png"
import { ProjectDetailsProp } from "./CarouselCard";

const CarouselCardComplete: React.FC<{projectDetails: ProjectDetailsProp}> = (prop) => {

    const {
        projectOwner,
        projectOwnerImageUrl,
        projectName,
        projectUrl,
        projectStar,
        projectFork,
        projectLanguage = "",
        projectAbout = ""
    } = prop.projectDetails;

    return (
        <div className="CarouselCardComplete">
            <div className="card-top">
                <img className="git-icon" src={githubLightIcon} alt="github-icon"/>
                <p className="project-owner">{projectOwner}</p>
            </div>
            <img className="project-owner-image" src={projectOwnerImageUrl} alt="project-owner-image"/>
            <div className="card-bottom">
                <div>
                    <div className="project-name">
                        <svg height="16" width="16" viewBox="0 0 16 16">
                            <path d="M2 2.5A2.5 2.5 0 0 1 4.5 0h8.75a.75.75 0 0 1 .75.75v12.5a.75.75 0 0 1-.75.75h-2.5a.75.75 0 0 1 0-1.5h1.75v-2h-8a1 1 0 0 0-.714 1.7.75.75 0 1 1-1.072 1.05A2.495 2.495 0 0 1 2 11.5Zm10.5-1h-8a1 1 0 0 0-1 1v6.708A2.486 2.486 0 0 1 4.5 9h8ZM5 12.25a.25.25 0 0 1 .25-.25h3.5a.25.25 0 0 1 .25.25v3.25a.25.25 0 0 1-.4.2l-1.45-1.087a.249.249 0 0 0-.3 0L5.4 15.7a.25.25 0 0 1-.4-.2Z"></path>
                        </svg>
                        <a href={projectUrl}>{projectName}</a>
                    </div>
                    {
                        projectAbout==""
                        ?
                        null
                        :
                        <div className="about-project">
                            <div>About</div>
                            <p>{projectAbout}</p>
                        </div>
                    }
                </div>

                <div className="project-stats">
                    {
                        projectLanguage == ""
                        ?
                        null
                        :
                        <div className="project-stat">
                            <div className="repo-language-color"></div>
                            <div>{projectLanguage}</div>
                        </div>
                    }
                    
                    <div className="project-stat">
                        <svg height="16" width="16" viewBox="0 0 16 16">
                            <path d="M8 .25a.75.75 0 0 1 .673.418l1.882 3.815 4.21.612a.75.75 0 0 1 .416 1.279l-3.046 2.97.719 4.192a.751.751 0 0 1-1.088.791L8 12.347l-3.766 1.98a.75.75 0 0 1-1.088-.79l.72-4.194L.818 6.374a.75.75 0 0 1 .416-1.28l4.21-.611L7.327.668A.75.75 0 0 1 8 .25Zm0 2.445L6.615 5.5a.75.75 0 0 1-.564.41l-3.097.45 2.24 2.184a.75.75 0 0 1 .216.664l-.528 3.084 2.769-1.456a.75.75 0 0 1 .698 0l2.77 1.456-.53-3.084a.75.75 0 0 1 .216-.664l2.24-2.183-3.096-.45a.75.75 0 0 1-.564-.41L8 2.694Z"></path>
                        </svg>
                        <div>{projectStar}</div>
                    </div>

                    <div className="project-stat">
                        <svg height="16" width="16" viewBox="0 0 16 16">
                            <path d="M5 5.372v.878c0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75v-.878a2.25 2.25 0 1 1 1.5 0v.878a2.25 2.25 0 0 1-2.25 2.25h-1.5v2.128a2.251 2.251 0 1 1-1.5 0V8.5h-1.5A2.25 2.25 0 0 1 3.5 6.25v-.878a2.25 2.25 0 1 1 1.5 0ZM5 3.25a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Zm6.75.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-3 8.75a.75.75 0 1 0-1.5 0 .75.75 0 0 0 1.5 0Z"></path>
                        </svg>
                        <div>{projectFork}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CarouselCardComplete