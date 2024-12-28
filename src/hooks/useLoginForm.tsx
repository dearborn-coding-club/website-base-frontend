import { useState } from "react"
import { useTokenProvider } from "../providers/TokenProvider"
import { useNavigate } from "react-router-dom";

const useLoginForm = () => {

    const navigate = useNavigate();

    const { setUserToken, clearUserToken } = useTokenProvider()

    const [errorMessage, setErrorMessage] = useState("")

    const loginOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const username = (e.currentTarget.elements.namedItem('username') as HTMLInputElement).value
        const password = (e.currentTarget.elements.namedItem('password') as HTMLInputElement).value
        fetch("https://auth.dearborncodingclub.com" + "/login", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username: username, password: password})
        })
        .then(res => {
            if(res.status !== 200) {
                throw new Error();
            }
            return res.json()
        })
        .then(res => {
            setUserToken(res.token)
            navigate("/")
        })
        .catch(() => {
            setErrorMessage("Wrong username or password!")
            clearUserToken()
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        })
    }

    const logout = () => clearUserToken()

    return { errorMessage, loginOnSubmit, logout }
}

export default useLoginForm