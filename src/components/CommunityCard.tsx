import "../css/CommunityCard.css"
import CommunityCardSkeleton from "./CommunityCardSkeleton"
import CommunityCardComplete from "./CommunityCardComplete"

export interface CommunityCardProp {
    coverImageURL: string,
    profileImageURL: string,
    name: string,
    role: string,
}

const CommunityCard: React.FC<{communityCardProp: CommunityCardProp | null}> = (prop) => {
    const memberDetails = prop?.communityCardProp
    if(memberDetails == null) {
        return <CommunityCardSkeleton />
    }
    return <CommunityCardComplete  communityCardProp={memberDetails} />
}

export default CommunityCard