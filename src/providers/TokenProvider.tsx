import React, { createContext, useState, useContext, useEffect } from 'react'

interface TokenContextType {
    token: string | null;
    setUserToken:(token: string) => void;
    clearUserToken: () => void;
}

const TokenContext = createContext<TokenContextType | null>(null)

export const TokenProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [token, setToken] = useState(localStorage.getItem("token"))

    const setUserToken = (token: string) => {
        localStorage.setItem('token', token)
        setToken(token)
    }

    const clearUserToken = () => {
        localStorage.clear()
        setToken(null)
    }

    useEffect(() => {
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
        })
        .catch(() => {
            localStorage.clear()
            setToken(null)
        })
    },[])

    return (
        <TokenContext.Provider value={{token, setUserToken, clearUserToken}}>
            {children}
        </TokenContext.Provider>
    )
}

export const useTokenProvider = () => {
    const context = useContext(TokenContext)
    if (context == null) {
        throw new Error("Error using TokenContext")
    }
    return context
}