import {useEffect, useContext} from "react";
import { CreatePokeContext } from "../context/CreatePokeContext";

export const usePokemon = ()=>{
  const {pokemon, setPokemon} = useContext(CreatePokeContext)

  const KEY = 'https://pokeapi.co/api/v2/pokedex/2';
  useEffect(()=>{
    async function llamado(){
      try {
        await fetch(KEY)
        .then(response =>response.json())
        .then(res =>{
          console.log(res)
          const indexPokemon = Math.floor(Math.random() * res.pokemon_entries.length);
          const namePokemon = res.pokemon_entries[indexPokemon].pokemon_species.name;
          setPokemon(namePokemon)
        })
      } catch (error) {
        console.log(error)
      }
    }
    llamado();
  },[])
}