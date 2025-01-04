import React, { createContext, useState, useContext, useEffect } from 'react'
import { useLoadingProvider } from './LoadingProvider';

interface AuthServiceContextType {
    token: string | null;
    login:(username: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const AuthServiceContext = createContext<AuthServiceContextType | null>(null)

export const AuthServiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const { startLoading, stopLoading } = useLoadingProvider()

    const [token, setToken] = useState(localStorage.getItem("token"))

    const setUserToken = (token: string) => {
        localStorage.setItem('token', token)
        setToken(token)
    }

    const logout = () => {
        localStorage.clear()
        setToken(null)
    }

    const login = async (username: string, password: string) => {

        let loginSuccess = true

        try {

            startLoading()
            const res = await fetch("https://auth.dearborncodingclub.com" + "/login", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({username: username, password: password})
            })

            if(res.status !== 200) {
                throw new Error()
            }
            const body = await res.json()

            if(body.token == null) {
                throw new Error()
            }
            setUserToken(body.token)

        } catch (e) {
            console.log(e)
            loginSuccess = false
        }

        stopLoading()
        return loginSuccess
        
    }

    useEffect(() => {
        startLoading()
        fetch("https://auth.dearborncodingclub.com"+"/validate-token", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `bearer ${token}`
        }
        })
        .then(res => {
            if(res.status !== 200) {
                throw new Error()
            }
            stopLoading()
        })
        .catch(() => {
            stopLoading()
            logout()
        })
    },[])

    return (
        <AuthServiceContext.Provider value={{token, login, logout}}>
            {children}
        </AuthServiceContext.Provider>
    )
}

export const useAuthServiceProvider = () => {
    const context = useContext(AuthServiceContext)
    if (context == null) {
        throw new Error("Error using AuthServiceContext")
    }
    return context
}