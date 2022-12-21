import { useContext } from "react";
import { CreatePokeContext } from "../../context/CreatePokeContext";
import { usePokemon } from "../../hooks/usePokemon"
import { LetterInput } from "../../components/LetterInput/LetterInput";
import { Header } from "../../components/header/Header";
import './game.css';

export function Game(){
  const context = useContext(CreatePokeContext)
  const OPORTUNIDADES = [0,1,2,3,4]; 
  usePokemon();
  console.log('Context ->> ' + context.pokemon);
  window.addEventListener('keyup', (e)=>{
    console.log(e.key)
    const cells = document.querySelector('.LetterInput')
    cells.textContent = e.key
  })
  return(
    <>
    <title>Game</title>
    <div className='game'>
      <Header />
      {OPORTUNIDADES && OPORTUNIDADES.map(oportunidad => <LetterInput namePkm={context.pokemon} />)}
    </div>
    </>
  )
}