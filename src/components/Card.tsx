import { CSSProperties, ReactNode } from "react"
import "../css/Card.css"

interface propType {
  imageStyle?: CSSProperties
  imageTextStyle?: CSSProperties
  textStyle?: CSSProperties
  imagetext?: ReactNode
  text?: ReactNode
};

const Card: React.FC<propType> = ({imageStyle, imagetext, imageTextStyle, text, textStyle}: propType) => {
  return (
    <div className="Card" role="base-card">
      <div className="card-image" style={imageStyle ?? {}}>
        <span style={imageTextStyle ?? {}}>{imagetext}</span>
      </div>
      <div style={textStyle ?? {}}>{text}</div>
    </div>
  )
}

export default Card