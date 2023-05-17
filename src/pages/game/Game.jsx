import { useContext, useState } from "react"
import { CreatePokeContext } from "../../context/CreatePokeContext"
import { Header } from "../../components/header/Header"
import { Helmet } from "react-helmet"
import { VoidRow } from "../../components/Rows/voidRow/VoidRow"
import { Keyboard } from "../../components/keyboard/Keyboard"
import ModalsList from "../../components/modal/ModalsList"
import { RowCompleted } from "../../components/Rows/rowCompleted/RowCompleted"
import { CurrentRow } from "../../components/Rows/currentRow/currentRow"
import { usePokemon } from "../../hooks/usePokemon"
import { useWindow } from "../../hooks/useWindow"
import { ThemeContext } from "../../context/contextTheme/ThemeContext"
import { DELETE_KEY, LETTERS, SPECIAL } from "../../utilities/keyTypes"
import "../../App.css"
import "./game.css"
import "../../components/Rows/rows.css"

export function Game() {
  const {
    AllPokemon,
    pokemon,
    turn,
    setTurn,
    GameStatus,
    setGameStatus,
    CurrentCompletedPokemon,
    setCurrentCompletedPokemon,
    currentPokemon,
    setCurrentPokemon,
    setMostrarModalWon,
  } = useContext(CreatePokeContext)
  const { darkMode, namePlayer } = useContext(ThemeContext)
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
      setMostrarModalWon(true)
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
      <Helmet>
        <title>Pokedle!</title>
      </Helmet>
      <Header />
      <div className={`game ${darkMode ? "dark-mode-bg" : ""}`}>
        <main className="game__grid-Rows">
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
        <div className="game__keyboard--container">
          <Keyboard />
        </div>
      </div>
      <ModalsList />
    </>
  )
}
