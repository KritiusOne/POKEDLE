import { useContext, useState } from "react"
import { CreatePokeContext } from "../../context/CreatePokeContext"
import { Header } from "../../components/header/Header"
import { Modal } from "../../components/modal/Modal"
import { VoidRow } from "../../components/Rows/voidRow/VoidRow"
import { RowCompleted } from "../../components/Rows/rowCompleted/RowCompleted"
import { CurrentRow } from "../../components/Rows/currentRow/currentRow"
import {usePokemon } from '../../hooks/usePokemon'
import { useWindow } from "../../hooks/useWindow"
import "./game.css"
import '../../components/Rows/rows.css'
import { DELETE_KEY, LETTERS, SPECIAL } from "../../utilities/keyTypes"

export function Game() {
  const {mostrarModalConfig, mostrarModalAyuda, mostrarModalRanking, AllPokemon, pokemon, setPokemon} = useContext(CreatePokeContext)
  const [turn, setTurn] = useState(1)
  const [currentPokemon, setCurrentPokemon] = useState('')
  const [GameStatus, setGameStatus] = useState('Playing') // estado general deljuego 
  usePokemon()
  const handleKeyDown = (event)=>{
    let key = event.key.toUpperCase();
    console.log(event)
    console.log(key)
    if(LETTERS.test(key) && !event.repeat && key.length == 1){
      if(currentPokemon.length < pokemon.length){
        setCurrentPokemon(currentPokemon + key)
      }else{
        //modal para decir que debe corregir o aceptar
      }
    }else if(DELETE_KEY.includes(key)) {
      setCurrentPokemon(currentPokemon.slice(0, currentPokemon.length - 1))
    }
    if(event.key === SPECIAL[4]) onEnter()
  }
  function onEnter(){
    if(currentPokemon.length < pokemon.length) return;
  }
  useWindow('keydown', handleKeyDown)
  return (
    <>
      <div className="game">
        <Header />
        <main>
         <VoidRow word={pokemon} />
         <RowCompleted word={pokemon} solution={pokemon}/>
         <CurrentRow word={currentPokemon}/>
        </main>      
      </div>
      {mostrarModalConfig && <Modal title={'configuracion'} visualizar='config'>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </Modal>}
    {mostrarModalAyuda && <Modal title={'Ayuda'} visualizar='ayuda' >
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </Modal>}
    {mostrarModalRanking && <Modal title={'Ranking'} visualizar='Ranking'>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
      </ul>
    </Modal>}
  </>
  )
}
