import "../css/ProjectCarousel.css"
import useProjectCarousel from "../hooks/useProjectCarousel"
import CarouselCard from "./CarouselCard"

export interface ProjectCarouselProp {
    carouselCardWidth?: number 
    gap?: number
}

const ProjectCarousel: React.FC<ProjectCarouselProp> = (prop: ProjectCarouselProp = {}) => {

    const {carouselCardWidth = 320, gap = 10} = prop

    const {
        carouselstyle,
        isInfiniteScroll,
        handleOnLeftArrowClick,
        projectList,
        cardWrapperRef,
        listRef,
        handleOnRightArrowClick
    } = useProjectCarousel({carouselCardWidth, gap})

    return (
        <div className="ProjectCarousel" style={carouselstyle}>
            {isInfiniteScroll && <button type="button" className="left-arrow" onClick={handleOnLeftArrowClick}> ← </button>}
            <div className="card-wrapper" style={{justifyContent: isInfiniteScroll?"start":"center"}} ref={cardWrapperRef} >
                {isInfiniteScroll && projectList.map((e, i) => <CarouselCard key={i} projectDetails={e}/>)}
                <div ref={listRef} className="card-list">
                    {projectList.map((e, i) => <CarouselCard key={i+projectList.length} projectDetails={e}/>)}
                </div>
                {isInfiniteScroll && projectList.map((e, i) => <CarouselCard key={i+projectList.length*2} projectDetails={e}/>)}
            </div>
            {isInfiniteScroll && <button type="button" className="right-arrow" onClick={handleOnRightArrowClick}> → </button>}
        </div>
    )
}

export default ProjectCarousel