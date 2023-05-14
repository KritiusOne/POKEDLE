import React, { useContext } from 'react'
import "./table.css"
import { ThemeContext } from '../../context/contextTheme/ThemeContext'
export function Table({children, title}) {
  const {darkMode} = useContext(ThemeContext)
  return (
    <div className='table'>
      <h3 className={`table__title ${darkMode ? "dark-mode--titleTable" : ""}`}> {title} </h3>
      <div className='table__body'>
        {children}
      </div>
    </div>
  )
}
