import propTypes from "prop-types"
import "./button.css"

export function Button({ title, handleClick, children, clase }) {
  return (
    <button onClick={handleClick} className={`button ${clase}`}>
      <span className="button__title"> {title} </span>
      {children}
    </button>
  )
}
Button.propTypes = {
  title: propTypes.string,
  handleClick: propTypes.func,
}
