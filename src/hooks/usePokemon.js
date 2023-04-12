import { useState, useEffect, useContext } from "react"
import { CreatePokeContext } from "../context/CreatePokeContext"

export const usePokemon = () => {
  const {setAllPokemon, setPokemon, setBoxNumbers} = useContext(CreatePokeContext)
  const KEY = "https://pokeapi.co/api/v2/pokedex/2"
  useEffect(() => {
    async function llamado() {
      try {
        await fetch(KEY)
          .then((response) => response.json())
          .then((res) => {
            console.log(res)
            const indexPokemon = Math.floor(
              Math.random() * res.pokemon_entries.length
            )
            const namePokemon =
              res.pokemon_entries[indexPokemon].pokemon_species.name
              const AllPokemonFilter = res.pokemon_entries.map((pokemonObject)=>{
                const pokemonFiltrado = pokemonObject.pokemon_species.name.toUpperCase()
                return pokemonFiltrado
              })
              setAllPokemon(AllPokemonFilter)
              setPokemon(namePokemon.toUpperCase())
              setBoxNumbers(namePokemon.length)
          })
      } catch (error) {
        console.log(error)
      }
    }
    llamado()
  }, [])
}
