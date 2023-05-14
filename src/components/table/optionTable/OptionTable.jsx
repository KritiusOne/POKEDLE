import React, { useContext } from 'react'
import {BsPencilSquare} from "react-icons/bs"
import { ThemeContext } from '../../../context/contextTheme/ThemeContext'
import './optionTable.css'

export function OptionTable({title, children}) {
  const {darkMode} = useContext(ThemeContext)
  return (
    <div className={`OptionTable ${darkMode? "dark-mode--optionTable": ""}`}>
      <BsPencilSquare className='OptionTable__icon'/>
      <div className='OptionTable__title--container'>
        <h4 className={`OptionTable__title ${darkMode ? "dark-mode--text" : ""} `}>{title}</h4>
      </div>
      <div className='OptionTable__body'>
        {children}
      </div>
    </div>
  )
}
