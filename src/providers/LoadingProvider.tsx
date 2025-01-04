import React, { createContext, useState, useContext } from 'react'

interface LoadingContextType {
    isLoading: boolean;
    startLoading: () => void;
    stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | null>(null)

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false)

    const startLoading = () => setIsLoading(true)

    const stopLoading = () => setIsLoading(false)

    return (
        <LoadingContext.Provider value={{isLoading, startLoading, stopLoading}}>
            {children}
        </LoadingContext.Provider>
    )
}

export const useLoadingProvider = () => {
    const context = useContext(LoadingContext)
    if (context == null) {
        throw new Error("Error using LoadingContext")
    }
    return context
}