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

    const getProfileData = async () => {
        await new Promise(r => setTimeout(r, 4000))
        const username = "John Doe"
        const password = "tomato"
        const role = "Junior Senior Engineer"
        const phone = "0000000000"
        const email = "exampleexampleexample@exampleexample.com"
        const leetcode = "LeetcodeUser"
        const street = "12345 Example Example Example Street"
        const city = "City"
        const state = "State"
        const zipcode = "12345"
        const aboutMe = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam quas nihil enim cum quam placeat perspiciatis aut adipisci consequatur temporibus, libero, nulla ullam fuga numquam voluptate error, debitis provident esse? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Labore debitis quis voluptates, ab nostrum nam saepe velit? Molestiae, quas, in minima soluta consequuntur nihil deserunt, exercitationem ipsam quibusdam aliquid similique."
        return {
            username,
            password,
            role,
            phone,
            email,
            leetcode,
            street,
            city,
            state,
            zipcode,
            aboutMe
        }
    }

    const usernameAvailable = async (username: string) => {
        await new Promise(r => setTimeout(r, 4000))
        return username != "potato"
    }

    const emailAvailable = async (email: string) => {
        await new Promise(r => setTimeout(r, 4000))
        return email != "potato@tomato.com"
    }

    const phoneAvailable = async (phone: string) => {
        await new Promise(r => setTimeout(r, 4000))
        return phone != "0000000000"
    }

    const leetcodeAvailable = async (leetcode: string) => {
        await new Promise(r => setTimeout(r, 4000))
        return leetcode != "potatoLeetcode"
    }

    return {getData, getProfileData, usernameAvailable, emailAvailable, phoneAvailable, leetcodeAvailable}
}

export default useFakeApi