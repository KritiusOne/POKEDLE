import React, { useContext, useEffect } from "react"
import { CreatePokeContext } from "../../../context/CreatePokeContext"
import { ThemeContext } from "../../../context/contextTheme/ThemeContext"
import { Modal } from "../Modal"
import { Button } from "../../button/Button"
import { usePokemon } from "../../../hooks/usePokemon"
import { CardStatsBar } from "../../cards/card-stats/CardStatsBar"
import styles from "./modalChildrenWon.module.css"
import "./modalChildrenStats.css"

export function ModalChildrenWon() {
  const {
    setCurrentCompletedPokemon,
    setCurrentPokemon,
    setTurn,
    setGameStatus,
    setMostrarModalWon,
    turn,
  } = useContext(CreatePokeContext)
  const { namePlayer } = useContext(ThemeContext)
  const setNewGame = () => {
    setCurrentCompletedPokemon([])
    setCurrentPokemon("")
    setTurn(1)
    setGameStatus("Playing")
    setMostrarModalWon(false)
  }
  usePokemon()
  let partidasJugadas = localStorage.getItem("partidasJugadas")
  let partidasGanadas = localStorage.getItem("ganadas")
  let rachaActual = localStorage.getItem("rachaActual")
  let mejorRacha = localStorage.getItem("mejorRacha")
  localStorage.setItem("partidasJugadas", parseInt(partidasJugadas) + 1)
  localStorage.setItem("ganadas", parseInt(partidasGanadas) + 1)
  localStorage.setItem(
    "rachaActual",
    rachaActual <= 0 ? 1 : parseInt(rachaActual) + 1
  )

  if (turn == 1) {
    let ganadasTurno = localStorage.getItem("primerIntento")
    localStorage.setItem("primerIntento", parseInt(ganadasTurno) + 1)
  } else if (turn == 2) {
    let ganadasTurno = localStorage.getItem("segundoIntento")
    localStorage.setItem("segundoIntento", parseInt(ganadasTurno) + 1)
  } else if (turn == 3) {
    let ganadasTurno = localStorage.getItem("tercerIntento")
    localStorage.setItem("tercerIntento", parseInt(ganadasTurno) + 1)
  } else if (turn == 4) {
    let ganadasTurno = localStorage.getItem("cuartoIntento")
    localStorage.setItem("cuartoIntento", parseInt(ganadasTurno) + 1)
  } else if (turn == 5) {
    let ganadasTurno = localStorage.getItem("quintoIntento")
    localStorage.setItem("quintoIntento", parseInt(ganadasTurno) + 1)
  } else {
    let ganadasTurno = localStorage.getItem("sextoIntento")
    localStorage.setItem("sextoIntento", parseInt(ganadasTurno) + 1)
  }
  // la idea sería mostrarle la opcion para jugar de nuevo y mirar sus records
  return (
    <Modal title={"Felicitaciones!"}>
      <div className={styles.container}>
        <div className='cardStatsBar'>

        <CardStatsBar />
        </div>
        <Button title={"Jugar nuevamente"} handleClick={setNewGame}></Button>
      </div>
    </Modal>
  )
}
