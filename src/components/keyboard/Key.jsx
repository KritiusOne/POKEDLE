import React, { useContext } from "react"
import { CreatePokeContext } from "../../context/CreatePokeContext"
import { LETTERS, SPECIAL, DELETE_KEY } from "../../utilities/keyTypes"
import { AiOutlineEnter } from "react-icons/ai"
import "./key.css"

export function Key({ value, type }) {
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
  } = useContext(CreatePokeContext)
  const onHandleClick = (event) => {
    const keyValue = event.target.innerText
    if (GameStatus !== "Playing") {
      //implementacion para felicitar o informar al usuario
      return
    }
    if (LETTERS.test(keyValue) && !event.repeat && keyValue.length == 1) {
      if (currentPokemon.length < pokemon.length) {
        setCurrentPokemon(currentPokemon + keyValue)
      } else {
        //modal para decir que debe corregir o aceptar
      }
    } else if (DELETE_KEY.includes(keyValue)) {
      setCurrentPokemon(currentPokemon.slice(0, currentPokemon.length - 1))
    } else if (keyValue == "-") setCurrentPokemon(currentPokemon + keyValue)
    if (
      keyValue === SPECIAL[4] &&
      currentPokemon.length == pokemon.length &&
      AllPokemon.includes(currentPokemon)
    )
      onEnter()
    console.log(keyValue)
  }
  function onEnter() {
    setCurrentCompletedPokemon([...CurrentCompletedPokemon, currentPokemon])
    if (currentPokemon == pokemon) {
      setGameStatus("Won")
      return
    } else if (turn == 6) {
      setGameStatus("Lost")
    } else {
      if (AllPokemon.includes(currentPokemon)) {
        setTurn(turn + 1)
        setCurrentPokemon("")
      }
    }
  }
  return (
    <div onClick={onHandleClick} className={`${type.trim()}`}>
      {value == "Enter" ? <AiOutlineEnter /> : value}
    </div>
  )
}
