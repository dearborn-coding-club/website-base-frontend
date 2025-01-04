import React from "react"
import "../css/Loading.css"
import { useLoadingProvider } from "../providers/LoadingProvider"

const Loading : React.FC = () => {

    const { isLoading } = useLoadingProvider()

    return (
        <div className="Loading" style={{display: isLoading?'':'none'}}>
            <div className="spinner"></div>
        </div>
    )
}

export default Loading