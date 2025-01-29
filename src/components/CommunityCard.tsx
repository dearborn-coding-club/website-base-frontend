import "../css/CommunityCard.css"
import CoverImage from "../assets/dccdesign1.svg"
import DummyProfile from "../assets/dummy-profile.png"

const CommunityCard: React.FC = () => {

    return (
        <div className="CommunityCard">
            <img className="cover-image" src={CoverImage}></img>
            <img className="profile-image" src={DummyProfile}></img>
            <div className="member-info">
                <div className="name">John Doe</div>
                <div className="role"><i>Junior Senior Engineer</i></div>
                <div className="view-profile-button">View Profile</div>
            </div>
        </div>
    )
}

export default CommunityCard