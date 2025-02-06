import React, { createContext, useState, useContext, useEffect } from 'react'

interface LoadingContextType {
    isLoading: boolean;
    startLoading: () => void;
    stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | null>(null)

export const LoadingProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [isLoading, setIsLoading] = useState(false)
    const [callStack, setCallStack] = useState<boolean[]>([])

    const startLoading = () => {
        setCallStack(prev => {
            prev = structuredClone(prev)
            prev.push(true)
            return prev
        })
    }

    const stopLoading = () => {
        setCallStack(prev => {
            if(prev.length < 1) {
                return prev;
            }
            prev = structuredClone(prev)
            prev.pop()
            return prev
        })
    }

    useEffect(() => {
        setIsLoading(callStack.length > 0)
    },[callStack])

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