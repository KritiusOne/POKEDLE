import React, { useContext } from "react"
import { mapStatus } from "../../../utilities/mapStatus"
import "./box.css"
import { ThemeContext } from "../../../context/contextTheme/ThemeContext"

export function Box({ letra, status }) {
  const { darkMode } = useContext(ThemeContext)
  const boxStatus = mapStatus(status)
  return (
    <div className={`${boxStatus} ${darkMode ? "dark-box" : ""} Box`}>
      {letra}
    </div>
  )
}
