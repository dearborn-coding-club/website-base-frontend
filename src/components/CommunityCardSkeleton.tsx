import "../css/CommunityCardSkeleton.css"

const CommunityCardSkeleton: React.FC = () => {
  return (
    <div className="CommunityCardSkeleton" aria-hidden="true">
      <div className="member-cover skeleton"></div>
      <div className="member-avatar skeleton"></div>
      <div className="member-info">
        <div className="skeleton skeleton-line" style={{ width: "60%", height: 18 }}></div>
        <div className="skeleton skeleton-line" style={{ width: "45%" }}></div>
        <div className="skeleton skeleton-pill"></div>
      </div>
    </div>
  )
}

export default CommunityCardSkeleton
