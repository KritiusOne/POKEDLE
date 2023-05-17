import { useEffect, useContext } from "react"
import { CreatePokeContext } from "../context/CreatePokeContext"
import { ThemeContext } from "../context/contextTheme/ThemeContext"
import { keys } from "../../keys-Featching"

export const usePokemon = () => {
  const { setAllPokemon, setPokemon, setBoxNumbers } =
    useContext(CreatePokeContext)
  const { region, level } = useContext(ThemeContext)

  const KEY = keys(region)

  useEffect(() => {
    async function llamado() {
      try {
        await fetch(KEY)
          .then((response) => response.json())
          .then((res) => {
            const filterLevel =
              level == 0
                ? res.pokemon_entries
                : res.pokemon_entries.filter(
                    (pkm, i) => pkm.pokemon_species.name.length == level
                  )
            const mappedResponse = {
              pokemon_entries: filterLevel,
            }

            if (region == 1) {
              const responseSlice = mappedResponse.pokemon_entries.filter(
                (pkm, i) => i <= 648
              )
              const indexPokemon = Math.floor(
                Math.random() * responseSlice.length
              )
              const namePokemon =
                responseSlice[indexPokemon].pokemon_species.name
              const AllPokemonFilter = responseSlice.map((pokemonObject) => {
                const pokemonFiltrado =
                  pokemonObject.pokemon_species.name.toUpperCase()
                return pokemonFiltrado
              })
              setAllPokemon(AllPokemonFilter)
              setPokemon(namePokemon.toUpperCase())
              setBoxNumbers(namePokemon.length)
            } else {
              const indexPokemon = Math.floor(
                Math.random() * mappedResponse.pokemon_entries.length
              )
              const namePokemon =
                mappedResponse.pokemon_entries[indexPokemon].pokemon_species
                  .name
              const AllPokemonFilter = mappedResponse.pokemon_entries.map(
                (pokemonObject) => {
                  const pokemonFiltrado =
                    pokemonObject.pokemon_species.name.toUpperCase()
                  return pokemonFiltrado
                }
              )
              setAllPokemon(AllPokemonFilter)
              setPokemon(namePokemon.toUpperCase())
              setBoxNumbers(namePokemon.length)
            }
          })
      } catch (error) {
        console.log(error)
      }
    }
    llamado()
  }, [])
}
