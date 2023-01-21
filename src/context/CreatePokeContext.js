import { createContext } from "react"

export const CreatePokeContext = createContext({
  name: "",
  setName: null,
  AllPokemon: [],
  setAllPokemon: null,
})
