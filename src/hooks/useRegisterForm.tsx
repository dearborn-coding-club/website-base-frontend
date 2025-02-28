import { useState } from "react"
import { toastType, useToastProvider } from "../providers/ToastProvider"


const useRegisterForm = () => {

    const AUTH_SERVER_URL = import.meta.env.VITE_AUTH_SERVER_URL

    const { pushToast } = useToastProvider()
    
    const [errorMessage, setErrorMessage] = useState("")
    
    const registerOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const username = (e.currentTarget.elements.namedItem('username') as HTMLInputElement).value
        const password = (e.currentTarget.elements.namedItem('password') as HTMLInputElement).value
        const confirmPassword = (e.currentTarget.elements.namedItem('confirm-password') as HTMLInputElement).value

        if(password !== confirmPassword) {
            setErrorMessage("Passwords do not match!")
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
            return;
        }
        fetch(AUTH_SERVER_URL + "/register", {
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
        .then(() => {
            pushToast("Registration Successful!", toastType.SUCCESS)
        })
        .catch(() => {
            setErrorMessage("Failed to create an account!")
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
        })
    }
    
    return {errorMessage, registerOnSubmit}
    
}


export default useRegisterForm;