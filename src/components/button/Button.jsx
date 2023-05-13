import propTypes from "prop-types"
import "./button.css"
import { useContext } from "react"
import { ThemeContext } from "../../context/contextTheme/ThemeContext"

export function Button({ title, handleClick, children, clase }) {
  const { darkMode } = useContext(ThemeContext)
  return (
    <button
      onClick={handleClick}
      className={`button ${clase} ${darkMode ? "button--dark-mode" : ""}`}
    >
      <span className="button__title"> {title} </span>
      {children}
    </button>
  )
}
Button.propTypes = {
  title: propTypes.string,
  handleClick: propTypes.func,
  clase: propTypes.string,
}
