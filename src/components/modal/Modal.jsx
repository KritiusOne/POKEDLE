import React, { useContext } from "react"
import { SlClose } from "react-icons/sl"
import { CreatePokeContext } from "../../context/CreatePokeContext"
import { ThemeContext } from "../../context/contextTheme/ThemeContext"
import styles from "./modal.module.css"

export function Modal({ children, title, visualizar }) {
  const { darkMode } = useContext(ThemeContext)
  const {
    mostrarModalConfig,
    setMostrarModalConfig,
    mostrarModalAyuda,
    setMostrarModalAyuda,
    mostrarModalRanking,
    setMostrarModalRanking,
  } = useContext(CreatePokeContext)
  const changeViewModal = () => {
    if (visualizar == "ayuda") setMostrarModalAyuda(!mostrarModalAyuda)
    else if (visualizar == "Ranking")
      setMostrarModalRanking(!mostrarModalRanking)
    else if (visualizar == "config") setMostrarModalConfig(!mostrarModalConfig)
  }

  return (
    <>
      <div className={styles.Overlay}>
        <div className={darkMode ? styles.darkMode : styles.Modal}>
          <h2 className={styles.title}> {title} </h2>
          <button className={styles.escape}>
            <SlClose className={styles.escapeIcon} onClick={changeViewModal} />
          </button>
          <div>{children}</div>
        </div>
      </div>
    </>
  )
}
