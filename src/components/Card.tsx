import { CSSProperties, ReactNode } from "react"
import "../css/Card.css"

type propType = {
  imageStyle?: CSSProperties
  imageTextStyle?: CSSProperties
  textStyle?: CSSProperties
  imagetext?: ReactNode
  text?: ReactNode
};

export default function Card(prop: propType) {
  return (
    <div className="Card">
      <div className="card-image" style={prop.imageStyle ?? {}}>
        <span style={prop.imageTextStyle ?? {}}>{prop.imagetext}</span>
      </div>
      <div style={prop.textStyle ?? {}}>{prop.text}</div>
    </div>
  )
}
