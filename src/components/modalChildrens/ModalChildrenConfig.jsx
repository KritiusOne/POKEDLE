import React, { useContext } from "react"
import { Button } from "../button/Button"
import { BsSunFill } from "react-icons/bs"
import { CgMoon } from "react-icons/cg"
import { ThemeContext } from "../../context/contextTheme/ThemeContext"
import "./modalChildrens.css"

export function ModalChildrenConfig() {
  const { darkMode, setDarkMode } = useContext(ThemeContext)
  const handleDarkMode = () => {
    setDarkMode(!darkMode)
  }
  return (
    <div className="ModalChildrenConfig Config--modal">
      <ul className="ModalChildrenConfig__list">
        <li className="ModalChildrenConfig__list--element">
          <span className="ModalChildrenConfig__list__title">
            Tema Oscuro:{" "}
          </span>
          <Button
            title=""
            handleClick={handleDarkMode}
            clase="button--Darkmode"
          >
            {darkMode ? (
              <BsSunFill className="button--darkmode-Icon" />
            ) : (
              <CgMoon className="button--darkmode-Icon" />
            )}
          </Button>
        </li>
        <li className="ModalChildrenConfig__list--element">Nivel</li>
        <li className="ModalChildrenConfig__list--element">
          modo alto contraste
        </li>
        <li className="ModalChildrenConfig__list--element">
          cambiar nombre de jugador
        </li>
      </ul>
    </div>
  )
}
