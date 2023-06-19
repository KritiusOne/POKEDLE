import React from "react"
import "./cardStats.css"

export function CardStats({ value, title }) {
  return (
    <div className="cardStats">
      <p className="cardStats__value">{value}</p>
      <h3 className="cardStats__title">{title}</h3>
    </div>
  )
}
