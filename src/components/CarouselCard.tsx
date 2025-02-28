import CarouselCardComplete from "./CarouselCardComplete"
import CarouselCardSkeleton from "./CarouselCardSkeleton"

export type ProjectDetailsProp = {
    projectOwner: string
    projectOwnerImageUrl: string
    projectName: string
    projectUrl: string
    projectAbout?: string
    projectLanguage?: string
    projectStar: number
    projectFork: number
}

const CarouselCard: React.FC<{projectDetails: ProjectDetailsProp | null}> = (prop) => {
    const projectDetails = prop?.projectDetails
    if(projectDetails === null) {
        return <CarouselCardSkeleton />
    }
    return <CarouselCardComplete projectDetails={projectDetails}/>
}

export default CarouselCard