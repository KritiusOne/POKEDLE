import { useContext, useState } from "react"
import { CreatePokeContext } from "../../context/CreatePokeContext"
import { Header } from "../../components/header/Header"
import { Modal } from "../../components/modal/Modal"
import { VoidRow } from "../../components/Rows/voidRow/VoidRow"
import { RowCompleted } from "../../components/Rows/rowCompleted/RowCompleted"
import { CurrentRow } from "../../components/Rows/currentRow/currentRow"
import { usePokemon } from "../../hooks/usePokemon"
import { useWindow } from "../../hooks/useWindow"
import { DELETE_KEY, LETTERS, SPECIAL } from "../../utilities/keyTypes"
import { Keyboard } from "../../components/keyboard/Keyboard"
import "./game.css"
import "../../components/Rows/rows.css"

export function Game() {
  const {
    mostrarModalConfig,
    mostrarModalAyuda,
    mostrarModalRanking,
    AllPokemon,
    pokemon,
    setAllPokemon,
    turn,
    setTurn,
    GameStatus,
    setGameStatus,
    CurrentCompletedPokemon,
    setCurrentCompletedPokemon,
    currentPokemon,
    setCurrentPokemon,
  } = useContext(CreatePokeContext)
  const handleKeyDown = (event) => {
    let key = event.key.toUpperCase()
    if (GameStatus !== "Playing") {
      //implementacion para felicitar o informar al usuario
      return
    }
    if (LETTERS.test(key) && !event.repeat && key.length == 1) {
      if (currentPokemon.length < pokemon.length) {
        setCurrentPokemon(currentPokemon + key)
      } else {
        //modal para decir que debe corregir o aceptar
      }
    } else if (DELETE_KEY.includes(key)) {
      setCurrentPokemon(currentPokemon.slice(0, currentPokemon.length - 1))
    } else if (key == "-") setCurrentPokemon(currentPokemon + key)
    if (
      event.key === SPECIAL[4] &&
      currentPokemon.length == pokemon.length &&
      AllPokemon.includes(currentPokemon)
    ) {
      onEnter()
    }
  }
  function onEnter() {
    console.log("entré")
    setCurrentCompletedPokemon([...CurrentCompletedPokemon, currentPokemon])
    if (currentPokemon == pokemon) {
      setGameStatus("Won")
      return
    } else if (turn == 6) {
      setGameStatus("Lost")
    } else {
      setTurn(turn + 1)
      setCurrentPokemon("")
    }
  }
  usePokemon()

  useWindow("keydown", handleKeyDown)
  return (
    <>
      <div className="game">
        <Header />
        <div className="game__group--Container">
          <main className="game__grid-Row">
            {CurrentCompletedPokemon.map((pkm, i) => (
              <RowCompleted key={i} word={pkm} solution={pokemon} />
            ))}
            {GameStatus == "Playing" ? (
              <CurrentRow word={currentPokemon} />
            ) : null}
            {Array.from(Array(6 - turn)).map((_, i) => (
              <VoidRow key={i} word={pokemon} />
            ))}
          </main>
          <Keyboard />
        </div>
      </div>
      {mostrarModalConfig && (
        <Modal title={"configuracion"} visualizar="config">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </Modal>
      )}
      {mostrarModalAyuda && (
        <Modal title={"Ayuda"} visualizar="ayuda">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </Modal>
      )}
      {mostrarModalRanking && (
        <Modal title={"Ranking"} visualizar="Ranking">
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </Modal>
      )}
    </>
  )
}
