import { useState } from "react"
import { CreatePokeContext } from "./CreatePokeContext"
import Proptypes from "prop-types"

export function PokeContextProvider({ children }) {
  const [AllPokemon, setAllPokemon] = useState([])
  const [mostrarModalAyuda, setMostrarModalAyuda] = useState(false)
  const [mostrarModalRanking, setMostrarModalRanking] = useState(false)
  const [mostrarModalConfig, setMostrarModalConfig] = useState(false)
  const [pokemon, setPokemon] = useState('')
  return (
    <CreatePokeContext.Provider
      value={{
        mostrarModalConfig,
        setMostrarModalConfig,
        mostrarModalAyuda,
        setMostrarModalAyuda,
        mostrarModalRanking,
        setMostrarModalRanking,
        AllPokemon,
        setAllPokemon,
        pokemon,
        setPokemon
      }}
    >
      {children}
    </CreatePokeContext.Provider>
  )
}
PokeContextProvider.Proptypes = {
  children: Proptypes.node.isRequired,
}
