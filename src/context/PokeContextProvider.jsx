import { useState } from "react"
import { CreatePokeContext } from "./CreatePokeContext"
import Proptypes from "prop-types"

export function PokeContextProvider({ children }) {
  const [pokemon, setPokemon] = useState("")
  const [AllPokemon, setAllPokemon] = useState([])
  const [mostrarModalConfig, setMostrarModalConfig] = useState(false)
  return (
    <CreatePokeContext.Provider
      value={{
        pokemon,
        setPokemon,
        AllPokemon,
        setAllPokemon,
        mostrarModalConfig,
        setMostrarModalConfig
      }}
    >
      {children}
    </CreatePokeContext.Provider>
  )
}
PokeContextProvider.Proptypes = {
  children: Proptypes.node.isRequired,
}
