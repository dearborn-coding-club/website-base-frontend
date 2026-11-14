import { useRef, useState } from "react"
import type { FormEvent } from "react"
import { useNavigate } from "react-router-dom"

export const passwordRequirements = [
    { label: "At least 8 characters", matches: (value: string) => Array.from(value).length >= 8 },
    { label: "An uppercase letter", matches: (value: string) => /[A-Z]/.test(value) },
    { label: "A lowercase letter", matches: (value: string) => /[a-z]/.test(value) },
    { label: "A number", matches: (value: string) => /\d/.test(value) },
    { label: "A special character", matches: (value: string) => /[!@#$%^&*(),.?":{}|<>]/.test(value) },
]

const useRegisterForm = () => {
    const navigate = useNavigate()
    const submitting = useRef(false)
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errorMessage, setErrorMessage] = useState("")
    const [password, setPassword] = useState("")

    const registerOnSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        if (submitting.current) return

        const form = new FormData(event.currentTarget)
        const username = String(form.get("username") ?? "").trim()
        const email = String(form.get("email") ?? "").trim()
        const submittedPassword = String(form.get("password") ?? "")
        const confirmation = String(form.get("confirm-password") ?? "")

        if (!username || !email) {
            setErrorMessage("Enter your username and email address.")
            return
        }
        if (!/^[\p{L}\p{N}_@.+-]{1,150}$/u.test(username)) {
            setErrorMessage("Use letters, numbers, or any of these symbols in your username: _ @ . + -")
            return
        }
        if (new TextEncoder().encode(submittedPassword).length > 72) {
            setErrorMessage("That password is too long. Use a shorter password.")
            return
        }
        if (!passwordRequirements.every(({ matches }) => matches(submittedPassword))) {
            setErrorMessage("Please meet all the password requirements.")
            return
        }
        if (submittedPassword !== confirmation) {
            setErrorMessage("The passwords don’t match.")
            return
        }

        submitting.current = true
        setIsSubmitting(true)
        setErrorMessage("")
        try {
            const response = await fetch(import.meta.env.VITE_AUTH_SERVER_URL + "/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ username, email, password: submittedPassword }),
            })
            if (response.status === 409) {
                setErrorMessage("That username is already taken. Choose another or sign in.")
                return
            }
            if (response.status === 400) {
                setErrorMessage("Check your username, email address, and password and try again.")
                return
            }
            if (!response.ok) {
                setErrorMessage("We couldn’t create your account. Please try again.")
                return
            }
            navigate("/login", { replace: true, state: { registeredUsername: username } })
        } catch {
            setErrorMessage("We couldn’t reach the signup service. Check your connection and try again.")
        } finally {
            submitting.current = false
            setIsSubmitting(false)
        }
    }

    return { errorMessage, isSubmitting, registerOnSubmit, password, setPassword }
}

export default useRegisterForm
