import { ReactNode } from "react"
import { Link } from "react-router-dom"
import "../css/Card.css"

interface CardProps {
  image?: string
  alt?: string
  title?: ReactNode
  children?: ReactNode
  to?: string
  linkText?: string
  className?: string
}

/**
 * A media-plus-copy card. Every prop is optional so it can also act as a
 * plain surface for arbitrary children.
 */
const Card: React.FC<CardProps> = ({
  image,
  alt = "",
  title,
  children,
  to,
  linkText = "Learn more",
  className = "",
}: CardProps) => {
  return (
    <article className={`Card ${className}`.trim()} role="base-card">
      {image && (
        <div className="card-media">
          <img src={image} alt={alt} loading="lazy" />
        </div>
      )}
      <div className="card-body">
        {title && <h3 className="card-title">{title}</h3>}
        {children && <div className="card-text">{children}</div>}
        {to && (
          <Link to={to} className="btn btn-dark btn-sm card-link">
            {linkText}
          </Link>
        )}
      </div>
    </article>
  )
}

export default Card
