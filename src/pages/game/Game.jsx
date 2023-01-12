import { useContext, useState } from "react";
import { CreatePokeContext } from "../../context/CreatePokeContext";
import { usePokemon } from "../../hooks/usePokemon"
import { LetterInput } from "../../components/LetterInput/LetterInput";
import { DELETE_KEY, SPECIAL, LETTERS } from "../../utilities/keyTypes";
import { Header } from "../../components/header/Header";
import './game.css';

export function Game(){
  usePokemon();
  const context = useContext(CreatePokeContext)
  const OPORTUNIDADES = ['primera','segunda','tercerda','cuarta','quinta']; 
  console.log('Context ->> ' + context.pokemon);
  
  window.addEventListener('keyup', (e)=>{
    const letra = e.key
    const cells = document.querySelectorAll('.'+OPORTUNIDADES[0])
    const arr = [...cells]

    if(LETTERS.test(letra) && !e.repeat && letra.length <= 1){
      const celdaVacia = arr.find((cell)=> {
        if(cell.innerText == '' || cell.innerText  == undefined) return cell
        else return //componente de notificacion de celdas llenas
      })
      celdaVacia.innerText = letra.toUpperCase()
    }else if(DELETE_KEY.includes(letra)){
      const celdaLlena = arr.find((cell, index, arrayCell)=> arrayCell[parseInt(index) + 1].innerText == '')
      celdaLlena.innerText = ''
    }
    console.log(letra)
      
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