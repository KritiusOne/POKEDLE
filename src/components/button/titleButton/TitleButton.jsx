import React, { useContext } from "react"
import "../button.css"
import { ThemeContext } from "../../../context/contextTheme/ThemeContext"

export function TitleButton({ title, handleButton, children, clase }) {
  const { darkMode } = useContext(ThemeContext)
  return (
    <button className={`TitleButton button ${clase}`} onClick={handleButton}>
      <h1
        className={`TitleButton__title button__title ${
          darkMode ? "button--dark-mode" : ""
        }`}
      >
        {title}
      </h1>
      {children}
    </button>
  )
}
