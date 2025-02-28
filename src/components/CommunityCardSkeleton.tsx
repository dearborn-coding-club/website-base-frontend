import "../css/CommunityCardSkeleton.css"

const CommunityCardSkeleton: React.FC = () => {

    return (
        <div className="CommunityCardSkeleton">
            <div className="cover-image skeleton"></div>
            <div className="profile-image skeleton"></div>
            <div className="member-info">
                <div className="name skeleton"></div>
                <div className="role skeleton"></div>
                <div className="view-profile-button skeleton">
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </div>
            </div>
        </div>
    )
}

export default CommunityCardSkeleton