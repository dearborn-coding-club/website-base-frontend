import React from "react"
import "../css/CarouselCardComplete.css"
import { GitFork, Star } from "lucide-react"
import { ProjectDetailsProp } from "./CarouselCard"

// GitHub's language colors for the languages the club actually uses.
const LANGUAGE_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  JavaScript: "#f1e05a",
  Python: "#3572a5",
  Go: "#00add8",
  HCL: "#844fba",
  HTML: "#e34c26",
  CSS: "#563d7c",
  Shell: "#89e051",
}

const CarouselCardComplete: React.FC<{ projectDetails: ProjectDetailsProp }> = (
  prop
) => {
  const {
    projectOwner,
    projectOwnerImageUrl,
    projectName,
    projectUrl,
    projectStar,
    projectFork,
    projectLanguage = "",
    projectAbout = "",
  } = prop.projectDetails

  return (
    <article className="CarouselCardComplete">
      <div className="project-owner-row">
        <img
          className="project-owner-image"
          src={projectOwnerImageUrl}
          alt=""
          loading="lazy"
        />
        <span className="project-owner">{projectOwner}</span>
      </div>

      <div className="project-main">
        <a
          className="project-name"
          href={projectUrl}
          target="_blank"
          rel="noreferrer"
        >
          {projectName}
        </a>
        {projectAbout !== "" && (
          <p className="project-about">{projectAbout}</p>
        )}
      </div>

      <div className="project-stats">
        {projectLanguage !== "" && (
          <span className="project-stat">
            <span
              className="repo-language-color"
              style={{
                backgroundColor: LANGUAGE_COLORS[projectLanguage] ?? "var(--ink-3)",
              }}
            />
            {projectLanguage}
          </span>
        )}
        <span className="project-stat" title="Stars">
          <Star size={15} aria-hidden="true" />
          {projectStar}
          <span className="sr-only"> stars</span>
        </span>
        <span className="project-stat" title="Forks">
          <GitFork size={15} aria-hidden="true" />
          {projectFork}
          <span className="sr-only"> forks</span>
        </span>
      </div>
    </article>
  )
}

export default CarouselCardComplete
