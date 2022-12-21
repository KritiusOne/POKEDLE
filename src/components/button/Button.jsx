import React from "react";
import propTypes from 'prop-types'
import './button.css'

export function Button({title, handleClick, children}){
  return(
    <button onClick={handleClick} className='button'>
      <span className='button__title'> {title} </span> 
      {children}
    </button>
  )
}
Button.propTypes = {
  title: propTypes.string,
  handleClick: propTypes.func
}