import CommunityCard from "../components/CommunityCard"
import Pagination from "../components/Pagination"
import "../css/Community.css"
import useCommunityPage from "../hooks/useCommunityPage"

const Community: React.FC = () => {

    const {
        isLoading, 
        memberList, 
        currentPage, 
        entryPerPage,
        totalPage, 
        offset,
        setCurrentPage, 
        setEntryPerPage
    } = useCommunityPage()

    return (
        <div className="Community">
            <div className="card-wrapper">
                {
                    isLoading
                    ?
                    Array.from({length: 8}).map((_, i) => <CommunityCard communityCardProp={null} key={i}/>)
                    :
                    memberList?.map((e, i) => <CommunityCard communityCardProp={e} key={`complete_${i}`}/>)
                }
            </div>
            {
                !isLoading
                &&
                <Pagination paginationProp={{
                    currentPage: currentPage,
                    entryPerPage: entryPerPage,
                    totalPage: totalPage,
                    offset: offset,
                    setCurrentPage:setCurrentPage,
                    setEntryPerPage: setEntryPerPage,
                }}/>
            }
            
        </div>  
    )
}

export default Community