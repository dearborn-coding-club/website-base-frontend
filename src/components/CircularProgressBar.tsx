import React from "react"
import "../css/CircularProgressBar.css"

interface CircularProgressBarProps {
    size: number
    stroke: number
    progress: number
    strokeColor?: string
}
const CircularProgressBar: React.FC<CircularProgressBarProps> = ({ size, stroke, progress, strokeColor="#5394fd" }) => {
    return (
        <svg style={{"--size": `${size}px`, "--stroke-width": `${stroke}px`, "--progress": progress, "--stroke-color": strokeColor} as React.CSSProperties} width={size} height={size} viewBox={`0 0 ${size} ${size}`} className="circular-progress">
            <circle className="bg"></circle>
            <circle className="fg"></circle>
        </svg>
    )
}

export default CircularProgressBar