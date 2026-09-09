import "../css/CommunityCardComplete.css"
import { Link } from "react-router-dom"
import { CommunityCardProp } from "./CommunityCard"

const CommunityCardComplete: React.FC<{ communityCardProp: CommunityCardProp }> = (
  prop
) => {
  const { coverImageURL, profileImageURL, name, role } = prop.communityCardProp

  return (
    <article className="CommunityCardComplete">
      <div className="member-cover">
        <img src={coverImageURL} alt="" loading="lazy" />
      </div>
      <img
        className="member-avatar"
        src={profileImageURL}
        alt=""
        loading="lazy"
      />
      <div className="member-info">
        <h3 className="member-name">{name}</h3>
        <p className="member-role">{role}</p>
        <Link to="/profile" className="btn btn-ghost btn-sm member-link">
          View profile
        </Link>
      </div>
    </article>
  )
}

export default CommunityCardComplete
