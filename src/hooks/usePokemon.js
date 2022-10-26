import {useState, useEffect} from "react";
export const usePokemon = ()=>{
  const [pokemon, setPokemon] = useState('')
  const KEY = 'https://pokeapi.co/api/v2/pokedex/1';
  const indexPokemon = Math.floor(Math.random() * 898);
  useEffect(()=>{
    async function llamado(){
      try {
        await fetch(KEY)
        .then(response =>response.json())
        .then(res =>{
          const namePokemon = res.pokemon_entries[indexPokemon].pokemon_species.name;
          setPokemon(namePokemon)
        })
      } catch (error) {
        console.log(error)
      }
    }
    llamado();
  },[])
  return pokemon
}