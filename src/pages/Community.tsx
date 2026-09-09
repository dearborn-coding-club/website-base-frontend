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
    setEntryPerPage,
  } = useCommunityPage()

  return (
    <div className="Community page">
      <header className="page-head">
        <h1>Community</h1>
        <p>
          The people who show up. Find a familiar face or someone new to pair
          with at the next meetup.
        </p>
      </header>

      <div className="member-grid" aria-busy={isLoading}>
        {isLoading
          ? Array.from({ length: 8 }).map((_, i) => (
              <CommunityCard communityCardProp={null} key={i} />
            ))
          : memberList?.map((e, i) => (
              <CommunityCard communityCardProp={e} key={`complete_${i}`} />
            ))}
      </div>

      {!isLoading && memberList && memberList.length === 0 && (
        <p className="community-empty">
          No members to show yet. Be the first to create a profile.
        </p>
      )}

      {!isLoading && (
        <Pagination
          paginationProp={{
            currentPage,
            entryPerPage,
            totalPage,
            offset,
            setCurrentPage,
            setEntryPerPage,
          }}
        />
      )}
    </div>
  )
}

export default Community
