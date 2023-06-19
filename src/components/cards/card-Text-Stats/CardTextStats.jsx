import React from "react"

export function CardTextStats({ value, porcentaje, numList }) {
  return (
    <div className="cardTextStats">
      <span className="CTS__title">
        {" "}
        {numList}:<span className="CTS__value"> {value} </span>
        <span className="CTS__porcentaje"> {porcentaje} %</span>
      </span>
    </div>
  )
}
