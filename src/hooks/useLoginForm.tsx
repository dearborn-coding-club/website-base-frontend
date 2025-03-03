import { useState } from "react"
import { useAuthServiceProvider } from "../providers/AuthServiceProvider"
import { useNavigate } from "react-router-dom";
import { toastType, useToastProvider } from "../providers/ToastProvider";

const useLoginForm = () => {

    const navigate = useNavigate();

    const { login, logout } = useAuthServiceProvider()

    const { pushToast } = useToastProvider()

    const [errorMessage, setErrorMessage] = useState("")

    const loginOnSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const username = (e.currentTarget.elements.namedItem('username') as HTMLInputElement).value
        const password = (e.currentTarget.elements.namedItem('password') as HTMLInputElement).value
        
        const success = await login(username, password)
        
        if(success) {
            navigate("/")
            pushToast("Login Successful!", toastType.SUCCESS)
            return
        }
        
        logout()
        setErrorMessage("Wrong username or password!")
        setTimeout(() => {
            setErrorMessage('');
        }, 3000);
        
    }

    return { errorMessage, loginOnSubmit, logout }
}

export default useLoginForm