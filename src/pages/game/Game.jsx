import { useContext, useState, useEffect } from "react"
import { CreatePokeContext } from "../../context/CreatePokeContext"
import { Header } from "../../components/header/Header"
import { Modal } from "../../components/modal/Modal"
import { VoidRow } from "../../components/Rows/voidRow/VoidRow"
import { RowCompleted } from "../../components/Rows/rowCompleted/RowCompleted"
import "./game.css"

export function Game() {
  const {mostrarModalConfig, mostrarModalAyuda, mostrarModalRanking, AllPokemon} = useContext(CreatePokeContext)
  const [turn, setTurn] = useState(1)
  const [pokemon, setPokemon] = useState('');
  useEffect(() => {
    setPokemon('PIKACHU')
  }, [])
  
  
  return (
    <>
      <div className="game">
        <Header />
        <main>
         <VoidRow word={pokemon} />
         <RowCompleted word={'RATTATA'} solution={pokemon}/>
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
