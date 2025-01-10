import React, { createContext, useState, useContext } from 'react'

export enum toastType {
    SUCCESS = 'success',
    INFO = 'info',
    ERROR = 'error',
    WARNING = 'warning'
}

interface ToastContextType {
    toastMessageList: Item[];
    pushToast: (message: string, toastType: toastType) => void;
    closeToastMessage: (index: number) => void;
}

interface Item {
    message: string;
    toastType: toastType;
    visible: boolean;
}

const ToastContext = createContext<ToastContextType | null>(null)

export const ToastProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

    const [toastMessageList, setToastMessageList] = useState<Item[]>([])

    const pushToast = (message: string, toastType: toastType) => {
        const index = toastMessageList.length
        setToastMessageList(prev => {
            const next = structuredClone(prev)
            next.push({message: message, toastType: toastType, visible: true}) 
            return next
        })

        setTimeout(()=>{
            setToastMessageList(prev => {
                if(index<0 || index>prev.length-1) {
                    return prev
                }
                const next = structuredClone(prev)
                next[index].visible = false
                return next
            })
        }, 3000)
        
    }

    const closeToastMessage = (index: number) => {
        setToastMessageList(prev => {
            if(index<0 || index>prev.length-1) {
                return prev
            }
            const next = structuredClone(prev)
            next[index].visible = false
            return next
        })
    }

    return (
        <ToastContext.Provider value={{toastMessageList, pushToast, closeToastMessage}}>
            {children}
        </ToastContext.Provider>
    )
}

export const useToastProvider = () => {
    const context = useContext(ToastContext)
    if (context == null) {
        throw new Error("Error using ToastContext")
    }
    return context
}