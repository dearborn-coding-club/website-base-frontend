import coverImage from "../assets/dccdesign1.svg"
import profileImage from "../assets/dummy-profile.png"


const useFakeApi = () => {

    const allData = Array.from({length: 44}).map((_, i) => {
        return {
            coverImageURL: coverImage,
            profileImageURL: profileImage,
            name: `Jhon Doe ${i}`,
            role: "Junior Senior Engineer"
        }
    })

    const getData = async (currentPage: number, entryPerPage = 10) => {

        await new Promise(r => setTimeout(r, 4000))
        
        const totalPage = Math.ceil(allData.length / entryPerPage)
        if(currentPage<1 || currentPage>totalPage) {
            return
        }

        const start = entryPerPage*(currentPage-1)
        const end = Math.min(entryPerPage*currentPage, allData.length)

        const list = []
        for(let i=start; i<end; i++) {
            list.push(allData[i])
        }

        return {totalPage, list}
    }

    return {getData}
}

export default useFakeApi