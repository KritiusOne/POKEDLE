import React from "react"
import { mapStatus } from "../../../utilities/mapStatus"
import "./box.css"

export function Box({ letra, status }) {
  const boxStatus = mapStatus(status)
  return <div className={`Box  ${boxStatus}`}>{letra}</div>
}
