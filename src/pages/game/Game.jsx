import { useContext, useState, useEffect } from "react"
import { CreatePokeContext } from "../../context/CreatePokeContext"
import { Header } from "../../components/header/Header"
import { Modal } from "../../components/modal/Modal"
import { VoidRow } from "../../components/Rows/voidRow/VoidRow"
import { RowCompleted } from "../../components/Rows/rowCompleted/RowCompleted"
import { CurrentRow } from "../../components/Rows/currentRow/currentRow"
import {usePokemon } from '../../hooks/usePokemon'
import "./game.css"

export function Game() {
  const {mostrarModalConfig, mostrarModalAyuda, mostrarModalRanking, AllPokemon, pokemon, setPokemon} = useContext(CreatePokeContext)
  const [turn, setTurn] = useState(1)
  const [numeroCasillas, setNumeroCasillas] = useState(0)
  usePokemon()
  return (
    <>
      <div className="game">
        <Header />
        <main>
         <VoidRow word={pokemon} />
         <RowCompleted word='RATTATA' solution={pokemon}/>
         <CurrentRow word='RA' pokemon={numeroCasillas} />
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
