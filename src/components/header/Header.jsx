import { Button } from "../button/Button"
import { BiDownArrow } from "react-icons/bi"
import { GiNetworkBars } from "react-icons/gi"
import { FiSettings } from "react-icons/fi"
import { useState, useContext } from "react"
import { CreatePokeContext } from "../../context/CreatePokeContext"
import { BiHelpCircle } from "react-icons/bi"
import "./header.css"
export function Header() {
  const {
    mostrarModalConfig,
    setMostrarModalConfig,
    mostrarModalAyuda,
    setMostrarModalAyuda,
    mostrarModalRanking,
    setMostrarModalRanking,
  } = useContext(CreatePokeContext)
  const changeModalConfig = () => {
    setMostrarModalConfig(!mostrarModalConfig)
  }
  const changeModalAyuda = () => {
    setMostrarModalAyuda(!mostrarModalAyuda)
  }
  const changeModalRanking = () => {
    setMostrarModalRanking(!mostrarModalRanking)
  }
  return (
    <header className="Header">
      <Button
        handleClick={changeModalAyuda}
        title=""
        clase={"Header__button-help"}
      >
        <BiHelpCircle className="header__Button__icon" />
      </Button>
      <Button
        handleClick={() => console.log("Boton de titulo")}
        title="POKEDLE"
        clase={"Header__button-title"}
      >
        <BiDownArrow className="header__Button__icon" />
      </Button>
      <div className="header__container">
        <Button
          handleClick={changeModalRanking}
          title=""
          clase={"Header__button-ranking"}
        >
          <GiNetworkBars className="header__Button__icon" />
        </Button>
        <Button
          handleClick={changeModalConfig}
          title=""
          clase={"Header__button-config"}
        >
          <FiSettings className="header__Button__icon" />
        </Button>
      </div>
    </header>
  )
}
