import React from "react"
import "../css/Toast.css"
import { useToastProvider } from "../providers/ToastProvider"

const Toast : React.FC = () => {

    const { toastMessageList, closeToastMessage } = useToastProvider()

    return (
        <div className="Toast">

            {
                toastMessageList
                .map((e, i) => {
                    if(!e.visible) return
                    return (
                        <div key={i} className={`toast-tile ${e.toastType}`}>
                            <div className="icon"></div>
                            <div className="message">{e.message}</div>
                            <div className="close" onClick={() => closeToastMessage(i)}></div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default Toast