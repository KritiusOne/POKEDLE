import { useState } from "react"
import { CreatePokeContext } from "./CreatePokeContext"
import Proptypes from "prop-types"

export function PokeContextProvider({ children }) {
  const [mostrarModalAyuda, setMostrarModalAyuda] = useState(false)
  const [mostrarModalRanking, setMostrarModalRanking] = useState(false)
  const [mostrarModalConfig, setMostrarModalConfig] = useState(false)
  return (
    <CreatePokeContext.Provider
      value={{
        mostrarModalConfig,
        setMostrarModalConfig,
        mostrarModalAyuda,
        setMostrarModalAyuda,
        mostrarModalRanking,
        setMostrarModalRanking
      }}
    >
      {children}
    </CreatePokeContext.Provider>
  )
}
PokeContextProvider.Proptypes = {
  children: Proptypes.node.isRequired,
}
