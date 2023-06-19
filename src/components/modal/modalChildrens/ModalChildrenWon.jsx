import React, { useContext, useEffect } from "react"
import { CreatePokeContext } from "../../../context/CreatePokeContext"
import { ThemeContext } from "../../../context/contextTheme/ThemeContext"
import { Modal } from "../Modal"
import { Button } from "../../button/Button"
import { useGame } from "../../../hooks/useGame"
import { usePokemon } from "../../../hooks/usePokemon"

export function ModalChildrenWon() {
  const {
    setCurrentCompletedPokemon,
    setCurrentPokemon,
    setTurn,
    setGameStatus,
  } = useContext(CreatePokeContext)
  const { setMostrarModalWon } = useContext(ThemeContext)
  const { namePlayer } = useContext(ThemeContext)
  const setNewGame = () => {
    setCurrentCompletedPokemon([])
    setCurrentPokemon("")
    setTurn(1)
    setGameStatus("Playing")
    setMostrarModalWon(false)
  }
  // la idea sería mostrarle la opcion para jugar de nuevo y mirar sus records
  return (
    <Modal>
      <span>Felicidades {namePlayer}</span>
      <Button title={"Jugar nuevamente"} handleClick={setNewGame}></Button>
    </Modal>
  )
}
