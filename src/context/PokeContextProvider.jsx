import { useState } from "react"
import { CreatePokeContext } from "./CreatePokeContext"
import Proptypes from "prop-types"

export function PokeContextProvider({ children }) {
  const [AllPokemon, setAllPokemon] = useState([])
  const [mostrarModalAyuda, setMostrarModalAyuda] = useState(false)
  const [mostrarModalRanking, setMostrarModalRanking] = useState(false)
  const [mostrarModalConfig, setMostrarModalConfig] = useState(false)
  const [pokemon, setPokemon] = useState("")
  const [turn, setTurn] = useState(1)
  const [currentPokemon, setCurrentPokemon] = useState("")
  const [CurrentCompletedPokemon, setCurrentCompletedPokemon] = useState([])
  const [GameStatus, setGameStatus] = useState("Playing") // estado general deljuego
  const [BoxNumbers, setBoxNumbers] = useState(0)
  return (
    <CreatePokeContext.Provider
      value={{
        mostrarModalConfig, setMostrarModalConfig,
        mostrarModalAyuda, setMostrarModalAyuda,
        mostrarModalRanking, setMostrarModalRanking,
        AllPokemon, setAllPokemon,
        pokemon, setPokemon,
        currentPokemon, setCurrentPokemon,
        turn, setTurn,
        CurrentCompletedPokemon, setCurrentCompletedPokemon,
        GameStatus, setGameStatus,
        BoxNumbers, setBoxNumbers
      }}
    >
      {children}
    </CreatePokeContext.Provider>
  )
}
PokeContextProvider.Proptypes = {
  children: Proptypes.node.isRequired,
}
