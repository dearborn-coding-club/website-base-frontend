import "../css/CommunityCardComplete.css"
import { CommunityCardProp } from "./CommunityCard"

const CommunityCardComplete: React.FC<{communityCardProp: CommunityCardProp}> = (prop) => {

    const {coverImageURL, profileImageURL, name, role} = prop.communityCardProp

    return (
        <div className="CommunityCardComplete">
            <img className="cover-image" src={coverImageURL}></img>
            <img className="profile-image" src={profileImageURL}></img>
            <div className="member-info">
                <div className="name">{name}</div>
                <div className="role"><i>{role}</i></div>
                <div className="view-profile-button">View Profile</div>
            </div>
        </div>
    )
}

export default CommunityCardComplete