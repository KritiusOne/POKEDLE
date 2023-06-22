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
  let partidasGanadas = localStorage.getItem("ganadas")
  let rachaActual = localStorage.getItem("rachaActual")
  let mejorRacha = localStorage.getItem("mejorRacha")
  if (partidasGanadas) {
    localStorage.setItem("ganadas", 1)
  } else {
    localStorage.setItem("ganadas", parseInt(partidasGanadas) + 1)
  }

  localStorage.setItem(
    "rachaActual",
    rachaActual <= 0 ? 1 : parseInt(rachaActual) + 1
  )

  if (turn == 1) {
    let ganadasTurno = localStorage.getItem("primerIntento")
    ganadasTurno
      ? localStorage.setItem("primerIntento", 1)
      : localStorage.setItem("primerIntento", parseInt(ganadasTurno) + 1)
  } else if (turn == 2) {
    let ganadasTurno = localStorage.getItem("segundoIntento")
    ganadasTurno
      ? localStorage.setItem("segundoIntento", 1)
      : localStorage.setItem("segundoIntento", parseInt(ganadasTurno) + 1)
  } else if (turn == 3) {
    let ganadasTurno = localStorage.getItem("tercerIntento")
    ganadasTurno
      ? localStorage.setItem("tercerIntento", 1)
      : localStorage.setItem("tercerIntento", parseInt(ganadasTurno) + 1)
  } else if (turn == 4) {
    let ganadasTurno = localStorage.getItem("cuartoIntento")
    ganadasTurno
      ? localStorage.setItem("cuartoIntento", 1)
      : localStorage.setItem("cuartoIntento", parseInt(ganadasTurno) + 1)
  } else if (turn == 5) {
    let ganadasTurno = localStorage.getItem("quintoIntento")
    ganadasTurno
      ? localStorage.setItem("quintoIntento", 1)
      : localStorage.setItem("quintoIntento", parseInt(ganadasTurno) + 1)
  } else {
    let ganadasTurno = localStorage.getItem("sextoIntento")
    ganadasTurno
      ? localStorage.setItem("sextoIntento", 1)
      : localStorage.setItem("sextoIntento", parseInt(ganadasTurno) + 1)
  }
  return (
    <Modal title={"Felicitaciones!"}>
      <div className={styles.container}>
        <div className="cardStatsBar">
          <CardStatsBar />
        </div>
        <Button title={"Jugar nuevamente"} handleClick={setNewGame}></Button>
      </div>
    </Modal>
  )
}
