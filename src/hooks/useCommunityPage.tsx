import { useEffect, useState } from "react"
import { CommunityCardProp } from "../components/CommunityCard"
import useFakeApi from "./useFakeApi"


const useCommunityPage = () => {

    const {getData} = useFakeApi()
    const [isLoading, setIsLoading] = useState(true)
    const [memberList, setMemberList] = useState<CommunityCardProp[]>()
    const [currentPage, setCurrentPage] = useState(1)
    const [entryPerPage, setEntryPerPage] =useState(12)
    const [totalPage, setTotalPage] = useState(1)
    const offset = 3;
    
    useEffect(() => {
        setIsLoading(true)
        getData(currentPage, entryPerPage)
        .then(data => {
            if(data == null) {
                throw new Error()
            }
            setTotalPage(data.totalPage)
            setMemberList(data.list)
            setIsLoading(false)
        })
        .catch(() => setIsLoading(false))
    }, [currentPage, entryPerPage])

    return {isLoading, memberList, currentPage, entryPerPage, totalPage, offset, setCurrentPage, setEntryPerPage}

}

export default useCommunityPage