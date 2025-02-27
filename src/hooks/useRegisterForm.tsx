import { useState } from "react"
import { toastType, useToastProvider } from "../providers/ToastProvider"

const useRegisterForm = () => {
    const AUTH_SERVER_URL = import.meta.env.VITE_AUTH_SERVER_URL;
    const { pushToast } = useToastProvider();

    const [errorMessage, setErrorMessage] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const validatePassword = (password: string) => {
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        return (
            password.length >= minLength &&
            hasUppercase &&
            hasLowercase &&
            hasNumber &&
            hasSpecialChar
        );
    };

    const registerOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const username = (e.currentTarget.elements.namedItem('username') as HTMLInputElement).value;
        const email = (e.currentTarget.elements.namedItem('email') as HTMLInputElement).value;

        if (!validatePassword(password)) {
            setErrorMessage("Password does not meet requirements!");
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage("Passwords do not match!");
            setTimeout(() => {
                setErrorMessage('');
            }, 3000);
            return;
        }

        fetch(AUTH_SERVER_URL + "/register", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({username, email, password}),
        })
            .then(res => {
                if(res.status !== 200) {
                    throw new Error();
                }
                return res.json();
            })
            .then(() => {
                pushToast("Registration Successful!", toastType.SUCCESS);
            })
            .catch(() => {
                setErrorMessage("Failed to create an account!");
                setTimeout(() => {
                    setErrorMessage('');
                }, 3000);
            });
    };

    return {
        errorMessage,
        registerOnSubmit,
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        validatePassword
    };
};

export default useRegisterForm;