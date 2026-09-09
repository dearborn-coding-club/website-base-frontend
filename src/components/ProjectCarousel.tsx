import "../css/ProjectCarousel.css"
import { ChevronLeft, ChevronRight } from "lucide-react"
import useProjectCarousel from "../hooks/useProjectCarousel"
import CarouselCard from "./CarouselCard"

export interface ProjectCarouselProp {
  carouselCardWidth?: number
  gap?: number
}

const ProjectCarousel: React.FC<ProjectCarouselProp> = (
  prop: ProjectCarouselProp = {}
) => {
  const { carouselCardWidth = 320, gap = 16 } = prop

  const {
    carouselstyle,
    isInfiniteScroll,
    handleOnLeftArrowClick,
    projectList,
    cardWrapperRef,
    listRef,
    handleOnRightArrowClick,
  } = useProjectCarousel({ carouselCardWidth, gap })

  return (
    <div className="ProjectCarousel" style={carouselstyle}>
      {isInfiniteScroll && (
        <button
          type="button"
          className="carousel-arrow carousel-arrow-left"
          aria-label="Previous projects"
          onClick={handleOnLeftArrowClick}
        >
          <ChevronLeft size={22} />
        </button>
      )}
      <div
        className="carousel-track"
        style={{ justifyContent: isInfiniteScroll ? "start" : "center" }}
        ref={cardWrapperRef}
      >
        {isInfiniteScroll &&
          projectList.map((e, i) => <CarouselCard key={i} projectDetails={e} />)}
        <div ref={listRef} className="carousel-list">
          {projectList.map((e, i) => (
            <CarouselCard key={i + projectList.length} projectDetails={e} />
          ))}
        </div>
        {isInfiniteScroll &&
          projectList.map((e, i) => (
            <CarouselCard key={i + projectList.length * 2} projectDetails={e} />
          ))}
      </div>
      {isInfiniteScroll && (
        <button
          type="button"
          className="carousel-arrow carousel-arrow-right"
          aria-label="Next projects"
          onClick={handleOnRightArrowClick}
        >
          <ChevronRight size={22} />
        </button>
      )}
    </div>
  )
}

export default ProjectCarousel
