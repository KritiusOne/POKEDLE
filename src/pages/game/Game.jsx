import { useContext } from "react"
import { CreatePokeContext } from "../../context/CreatePokeContext"
import { usePokemon } from "../../hooks/usePokemon"
import { LetterInput } from "../../components/LetterInput/LetterInput"
import { DELETE_KEY, SPECIAL, LETTERS } from "../../utilities/keyTypes"
import { Header } from "../../components/header/Header"
import "./game.css"

export function Game() {
  usePokemon()
  const context = useContext(CreatePokeContext)
  console.log(context)
  const oportunidades = ["primera", "segunda", "tercerda", "cuarta", "quinta"]
  window.addEventListener("keyup", (e) => {
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
      console.log(celdaVacia)
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
    } else if (SPECIAL.includes(letra)) {
      if (letra === SPECIAL[4]) {
        // position 4 is = 'Enter'
        const namePokemonParcial = arr.map((cell) => cell.innerText)
        const namePokemonFinal = namePokemonParcial.slice().join("")
        const respuesta = context.pokemon
        // 1. Letras en su posición, 2. Letras fuera de posición, 3. Letrasque no van
        if (respuesta === namePokemonFinal)
          console.log("La respuesta es correcta")
        else console.log("intenta")
      }
    }
    console.log(letra)
  })
  return (
    <div className='game'>
      <Header />
      <LetterInput
        namePkm={context.pokemon}
        numberContainer={oportunidades[oportunidades.length - 1]}
      />
      <LetterInput
        namePkm={context.pokemon}
        numberContainer={oportunidades[oportunidades.length - 2]}
      />
      <LetterInput
        namePkm={context.pokemon}
        numberContainer={oportunidades[oportunidades.length - 3]}
      />
      <LetterInput
        namePkm={context.pokemon}
        numberContainer={oportunidades[oportunidades.length - 4]}
      />
      <LetterInput
        namePkm={context.pokemon}
        numberContainer={oportunidades[oportunidades.length - 5]}
      />
    </div>
  )
}
