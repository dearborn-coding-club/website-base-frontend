import "../css/CarouselCardSkeleton.css"

const CarouselCardSkeleton: React.FC = () => {
  return (
    <div className="CarouselCardSkeleton" aria-hidden="true">
      <div className="project-owner-row">
        <div className="skeleton skeleton-avatar"></div>
        <div className="skeleton skeleton-line" style={{ width: "55%" }}></div>
      </div>
      <div className="project-main">
        <div className="skeleton skeleton-line skeleton-title"></div>
        <div className="skeleton skeleton-line"></div>
        <div className="skeleton skeleton-line" style={{ width: "80%" }}></div>
        <div className="skeleton skeleton-line" style={{ width: "60%" }}></div>
      </div>
      <div className="project-stats">
        <div className="skeleton skeleton-line" style={{ width: "22%" }}></div>
        <div className="skeleton skeleton-line" style={{ width: "14%" }}></div>
        <div className="skeleton skeleton-line" style={{ width: "14%" }}></div>
      </div>
    </div>
  )
}

export default CarouselCardSkeleton
