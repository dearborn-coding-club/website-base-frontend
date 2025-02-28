import { useEffect, useRef, useState } from "react";
import { ProjectDetailsProp } from "../components/CarouselCard";
import { ProjectCarouselProp } from "../components/ProjectCarousel";

const useProjectCarousel = (prop: ProjectCarouselProp = {}) => {
    
    const {carouselCardWidth = 320, gap = 10} = prop

    const [projectList, setProjectList] = useState<ProjectDetailsProp[] | null[]>(Array(5).fill(null))
    const [isInfiniteScroll, setIsInfiniteScroll] = useState(false)
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);
    
    const carouselstyle = { "--carousel-card-width": `${carouselCardWidth}px`, "--gap": `${gap}px` } as React.CSSProperties
    const cardWrapperRef = useRef<HTMLDivElement>(null)
    const listRef = useRef<HTMLDivElement>(null)
    const intervaRef = useRef<NodeJS.Timeout>()
    const intervalDuration = 3

    const resetTimer = () => {
        clearInterval(intervaRef.current)
        intervaRef.current = setInterval(scrollRight, 1000*intervalDuration);
    }

    const scrollLeft = () => {
        if(!cardWrapperRef || !cardWrapperRef.current) {
            return 
        }
        cardWrapperRef.current.scrollLeft -= carouselCardWidth+gap
    }

    const scrollRight = () => {
        if(!cardWrapperRef || !cardWrapperRef.current) {
            return
        }
        cardWrapperRef.current.scrollLeft += carouselCardWidth+gap
    }

    const handleOnLeftArrowClick = () => {
        scrollLeft();
        if(isInfiniteScroll) {
            resetTimer()
        }
    }

    const handleOnRightArrowClick = () => {
        scrollRight();
        if(isInfiniteScroll) {
            resetTimer()
        }
    }

    const handleScrollEnd = () => {
        if(!cardWrapperRef || !cardWrapperRef.current) {
            return
        }
        if(!listRef || !listRef.current) {
            return
        }
        const center = (cardWrapperRef.current.clientWidth/2)
        const rightPosition = listRef.current.getBoundingClientRect().right
        const leftPosition = listRef.current.getBoundingClientRect().x
        if(rightPosition<center) {
            cardWrapperRef.current.scrollTo({
                left: cardWrapperRef.current.scrollLeft - listRef.current.clientWidth,
                behavior: "instant"
            })
        }
        if(leftPosition>center) {
            cardWrapperRef.current.scrollTo({
                left: cardWrapperRef.current.scrollLeft + listRef.current.clientWidth,
                behavior: "instant"
            })
        }
    }

    const handleMouseOver = () => {
        clearInterval(intervaRef.current)
    }

    const handleMouseOut = () => {
        intervaRef.current = setInterval(scrollRight, 1000*intervalDuration);
    }

    const handleWindowResize = () => {
       setWindowWidth(window.innerWidth)
    }

    const onUnmount = () => {
        clearInterval(intervaRef.current);
        if(!cardWrapperRef || !cardWrapperRef.current) {return}
        cardWrapperRef.current.removeEventListener("scrollend", handleScrollEnd)
        cardWrapperRef.current.removeEventListener("mouseover", handleMouseOver)
        cardWrapperRef.current.removeEventListener("mouseout", handleMouseOut)
    }

    useEffect(() => {
        setTimeout(() => {
            setProjectList(
                [
                    {
                        projectOwner: "Dearborn Coding Club",
                        projectOwnerImageUrl: "https://avatars.githubusercontent.com/u/165501335?s=200&v=4",
                        projectName: "website-base-frontend",
                        projectUrl: "https://github.com/dearborn-coding-club/website-base-frontend",
                        projectLanguage: "TypeScript",
                        projectStar: 1,
                        projectFork: 1
                    },
                    {
                        projectOwner: "Dearborn Coding Club",
                        projectOwnerImageUrl: "https://avatars.githubusercontent.com/u/165501335?s=200&v=4",
                        projectName: "website-base-backend",
                        projectUrl: "https://github.com/dearborn-coding-club/website-base-backend",
                        projectAbout: "A backend API project for the dearborn-coding-club Meetup group.",
                        projectLanguage: "Python",
                        projectStar: 1,
                        projectFork: 3
                    },
                    {
                        projectOwner: "Dearborn Coding Club",
                        projectOwnerImageUrl: "https://avatars.githubusercontent.com/u/165501335?s=200&v=4",
                        projectName: "website-base-auth",
                        projectUrl: "https://github.com/dearborn-coding-club/website-base-auth",
                        projectLanguage: "Go",
                        projectStar: 1,
                        projectFork: 0
                    },
                    {
                        projectOwner: "Dearborn Coding Club",
                        projectOwnerImageUrl: "https://avatars.githubusercontent.com/u/165501335?s=200&v=4",
                        projectName: ".github",
                        projectUrl: "https://github.com/dearborn-coding-club/.github",
                        projectStar: 0,
                        projectFork: 0
                    },
                    {
                        projectOwner: "Dearborn Coding Club",
                        projectOwnerImageUrl: "https://avatars.githubusercontent.com/u/165501335?s=200&v=4",
                        projectName: "Terraform-infra-website",
                        projectUrl: "https://github.com/dearborn-coding-club/Terraform-infra-website",
                        projectLanguage: "HCL",
                        projectStar: 0,
                        projectFork: 0
                    },
                    {
                        projectOwner: "Dearborn Coding Club",
                        projectOwnerImageUrl: "https://avatars.githubusercontent.com/u/165501335?s=200&v=4",
                        projectName: "demo-repository",
                        projectUrl: "https://github.com/dearborn-coding-club/demo-repository",
                        projectAbout: "A code repository designed to show the best GitHub has to offer.",
                        projectLanguage: "HTML",
                        projectStar: 0,
                        projectFork: 0
                    },
                    {
                        projectOwner: "Dearborn Coding Club",
                        projectOwnerImageUrl: "https://avatars.githubusercontent.com/u/165501335?s=200&v=4",
                        projectName: "Grokking-the-shell",
                        projectUrl: "https://github.com/dearborn-coding-club/Grokking-the-shell",
                        projectAbout: "Learn how to use the shell. This repo will try to be shell agnostic, at least across *NIX platforms. Powershell might be a consideration.",
                        projectStar: 1,
                        projectFork: 0
                    }
                ]
            )
        }, 5000)
    },[])

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    }, []);

    useEffect(()=>{
        if(!cardWrapperRef || !cardWrapperRef.current) {return}

        if(projectList.length <= 1) {
            setIsInfiniteScroll(false)
            return onUnmount
        }

        const center = cardWrapperRef.current.clientWidth / 2
        const cardListWidth = ((carouselCardWidth+gap) * projectList.length) - (carouselCardWidth/2)

        if(cardListWidth >= center) {
            setIsInfiniteScroll(true)

            cardWrapperRef.current.scrollTo({
                left: (cardWrapperRef.current.scrollWidth - cardWrapperRef.current.clientWidth) / 2,
                behavior: "instant"
            })
            
            intervaRef.current = setInterval(scrollRight, 1000*intervalDuration);
            cardWrapperRef.current.addEventListener("mouseover", handleMouseOver)
            cardWrapperRef.current.addEventListener("mouseout", handleMouseOut)
            cardWrapperRef.current.addEventListener("scrollend", handleScrollEnd)
            return onUnmount
        }

        setIsInfiniteScroll(false)
        return onUnmount
    },[windowWidth])

    return {
        projectList,
        cardWrapperRef,
        listRef,
        carouselstyle, 
        isInfiniteScroll,
        handleOnLeftArrowClick,
        handleOnRightArrowClick,
    }
}

export default useProjectCarousel