import { Button } from "../button/Button"
import { IoIosHelpCircle } from "react-icons/io"
import { BiDownArrow } from "react-icons/bi"
import { GiNetworkBars } from "react-icons/gi"
import { FiSettings } from "react-icons/fi"
import { useState, useContext } from "react"
import { CreatePokeContext } from "../../context/CreatePokeContext"
import "./header.css"
export function Header() {
  const {mostrarModalConfig, setMostrarModalConfig, mostrarModalAyuda, setMostrarModalAyuda, mostrarModalRanking, setMostrarModalRanking} = useContext(CreatePokeContext)
  const changeModalConfig = ()=>{
    setMostrarModalConfig(!mostrarModalConfig)
  }
  const changeModalAyuda = ()=>{
    setMostrarModalAyuda(!mostrarModalAyuda)
  }
  const changeModalRanking = ()=>{
    setMostrarModalRanking(!mostrarModalRanking)
  }
  return (
    <header className='Header'>
      <Button handleClick={changeModalAyuda} title=''>
        <IoIosHelpCircle className='header__Button__icon' />
      </Button>
      <Button
        handleClick={() => console.log("Boton de titulo")}
        title='POKEDLE'
      >
        <BiDownArrow className='header__Button__icon' />
      </Button>
      <div className='header__container'>
        <Button handleClick={changeModalRanking} title=''>
          <GiNetworkBars className='header__Button__icon' />
        </Button>
        <Button handleClick={changeModalConfig} title=''>
          <FiSettings className='header__Button__icon' s />
        </Button>
      </div>
    </header>
  )
}
