import { useContext, useState } from "react";
import { CreatePokeContext } from "../../context/CreatePokeContext";
import { usePokemon } from "../../hooks/usePokemon"
import { LetterInput } from "../../components/LetterInput/LetterInput";
import { Header } from "../../components/header/Header";
import './game.css';

export function Game(){
  usePokemon();
  const context = useContext(CreatePokeContext)
  const OPORTUNIDADES = ['primera','segunda','tercerda','cuarta','quinta']; 
  console.log('Context ->> ' + context.pokemon);
  window.addEventListener('keyup', (e)=>{
    const cells = document.querySelectorAll('.'+OPORTUNIDADES[0])
    const arr = [...cells]
    const celdaVacia = arr.find((cell, index)=> cell.value == '' || cell.value == undefined)
    celdaVacia.textContent = e.key
    celdaVacia.value = e.key

  })
  return(

    <div className='game'>
      {
        window.onblur = function(){
          document.title = 'POKEDLE'
        }
      }
      <Header />
      {OPORTUNIDADES && OPORTUNIDADES.map((oportunidad, index) => <LetterInput namePkm={context.pokemon} numberContainer={oportunidad} />)}
    </div>
  )
}