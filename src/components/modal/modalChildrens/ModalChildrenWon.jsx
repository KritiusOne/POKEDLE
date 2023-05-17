import React, { useContext } from "react"
import { CreatePokeContext } from "../../../context/CreatePokeContext"
import { ThemeContext } from "../../../context/contextTheme/ThemeContext"
import { Modal } from "../Modal"

export function ModalChildrenWon() {
  const { gameStatus } = useContext(CreatePokeContext)
  const { namePlayer } = useContext(ThemeContext)
  // la idea sería mostrarle la opcion para jugar de nuevo y mirar sus records
  return <Modal>{gameStatus && <span>Felicidades {namePlayer}</span>}</Modal>
}
