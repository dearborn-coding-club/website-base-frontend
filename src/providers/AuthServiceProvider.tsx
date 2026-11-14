import React, { createContext, useState, useContext, useEffect, useRef } from 'react'
import { useLoadingProvider } from './LoadingProvider';

interface AuthServiceContextType {
    token: string | null;
    login:(username: string, password: string) => Promise<boolean>;
    logout: () => void;
}

const AuthServiceContext = createContext<AuthServiceContextType | null>(null)

export const AuthServiceProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const AUTH_SERVER_URL = import.meta.env.VITE_AUTH_SERVER_URL

    const { startLoading, stopLoading } = useLoadingProvider()

    const [token, setToken] = useState(() => localStorage.getItem("token"))
    const initialToken = useRef(token)

    const setUserToken = (token: string) => {
        localStorage.setItem('token', token)
        setToken(token)
    }

    const logout = () => {
        localStorage.removeItem("token")
        setToken(null)
    }

    const login = async (username: string, password: string) => {

        let loginSuccess = true

        try {

            startLoading()
            const res = await fetch(AUTH_SERVER_URL + "/login", {
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
        const savedToken = initialToken.current
        if (!savedToken) return

        const controller = new AbortController()
        startLoading()
        fetch(AUTH_SERVER_URL + "/validate-token", {
            method: "POST",
            headers: { Authorization: `Bearer ${savedToken}` },
            signal: controller.signal,
        })
            .then(response => {
                if (response.status !== 401 && response.status !== 403) return
                if (controller.signal.aborted || localStorage.getItem("token") !== savedToken) return
                localStorage.removeItem("token")
                setToken(null)
            })
            .catch(() => {
                // Keep the session when the auth service is temporarily unreachable.
            })
            .finally(stopLoading)

        return () => controller.abort()
    }, [AUTH_SERVER_URL, startLoading, stopLoading])

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