import { useState, useContext, useEffect } from "react"
import { CreatePokeContext } from "../../context/CreatePokeContext"
import { usePokemon } from "../../hooks/usePokemon"
import { LetterInput } from "../../components/LetterInput/LetterInput"
import { DELETE_KEY, SPECIAL, LETTERS } from "../../utilities/keyTypes"
import { Header } from "../../components/header/Header"
import { Modal } from "../../components/modal/Modal"
import { isPresent } from "../../utilities/isPresent"
import "./game.css"

export function Game() {
  const [actualPokemon, setActualPokemon] = useState("")
  const {mostrarModalConfig, mostrarModalAyuda, mostrarModalRanking, AllPokemon} = useContext(CreatePokeContext)
  const Pokemon = usePokemon()
  console.log(AllPokemon)
  console.log("Respuesta-> " + Pokemon)
  const oportunidades = ["primera", "segunda", "tercerda", "cuarta", "quinta"]
  useEffect(() => {
    setActualPokemon(Pokemon)
    const handleKeyUp = (e) => {
      const letra = e.key
      const cells = document.querySelectorAll(
        "." + oportunidades[oportunidades.length - 1]
      )
      const arr = [...cells]
      let lleno = false
      if (arr[arr.length - 1].innerText !== "") lleno = true

      if (LETTERS.test(letra) && !e.repeat && letra.length <= 1) {
        const celdaVacia = arr.find(
          (cell) => cell.innerText === "" || cell.innerText === undefined
        )
        celdaVacia !== undefined
          ? (celdaVacia.innerText = letra.toUpperCase())
          : console.log("Todas las celdas llenas")
      } else if (DELETE_KEY.includes(letra)) {
        if (lleno === true) {
          const ultimaCelda = arr[arr.length - 1]
          ultimaCelda.innerText = ""
          lleno = false
        } else {
          const celdaLlena = arr.find(
            (cell, index, arrayCell) =>
              arrayCell[parseInt(index) + 1].innerText === "" &&
              arrayCell[parseInt(index) + 1] != null
          )
          celdaLlena.innerText = ""
        }
      } 
      console.log(letra)
    }
    window.addEventListener("keyup", handleKeyUp)
    return () => {
      window.removeEventListener("keyup", handleKeyUp)
    }
  }, [])
  useEffect(()=>{
    const handleSolution = (e)=>{
      const letra = e.key
      const cells = document.querySelectorAll(
        "." + oportunidades[oportunidades.length - 1]
      )
      const arr = [...cells]
      let lleno = false
      if (arr[arr.length - 1].innerText !== "") lleno = true
      if (letra === SPECIAL[4] && !e.repeat && lleno == true) {
        // position 4 is = 'Enter'
        const namePokemonParcial = arr.map((cell) => cell.innerText)
        const intento = namePokemonParcial.slice().join("")
        console.log(`el intento del participante a sido: ${intento}`)
        const respuestaCorrecta = Pokemon.toUpperCase()
        console.log(`La respuesta correcta a sido: ${respuestaCorrecta}`)
        isPresent(respuestaCorrecta, intento, AllPokemon)
      }
    }
    window.addEventListener('keyup', handleSolution)
    return ()=>{
      window.removeEventListener('keyup', handleSolution)
    }
  })
  return (
    <>
      <div className="game">
        <Header />
        <main>
          <LetterInput
            namePkm={Pokemon}
            numberContainer={oportunidades[oportunidades.length - 1]}
          />
          <LetterInput
            namePkm={Pokemon}
            numberContainer={oportunidades[oportunidades.length - 2]}
          />
          <LetterInput
            namePkm={Pokemon}
            numberContainer={oportunidades[oportunidades.length - 3]}
          />
          <LetterInput
            namePkm={Pokemon}
            numberContainer={oportunidades[oportunidades.length - 4]}
          />
          <LetterInput
            namePkm={Pokemon}
            numberContainer={oportunidades[oportunidades.length - 5]}
          />  
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
