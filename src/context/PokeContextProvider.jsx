import React, {useState} from "react";
import { CreatePokeContext } from "./CreatePokeContext";

export function PokeContextProvider({children}){
  const [pokemon, setPokemon] = useState('');
  return(
    <CreatePokeContext.Provider value={{
      pokemon, setPokemon
    }}>
      {children}
    </CreatePokeContext.Provider>
  )
}