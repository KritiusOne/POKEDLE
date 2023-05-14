import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import {Header} from "../../components/header/Header"
import ModalsList from "../../components/modal/ModalsList"
import { useContext } from "react"
import { ThemeContext } from "../../context/contextTheme/ThemeContext"
import { Table } from "../../components/table/Table"
import { OptionTable } from "../../components/table/optionTable/OptionTable"
import "./lobby.css"
/*
1. Poner nombre al jugador
2. Elegir el nivel, pueden ser 5, 6, 7 letras, incluso puede haber un nivel libre
3. Escoger la region
*/
export function Lobby() {
  const {darkMode} = useContext(ThemeContext)
  return (
    <>
    <Helmet>
      <title>Pokedle!</title>
    </Helmet>
    <div className={`lobby ${darkMode ? "dark-mode-bg" : ""}`}>
      <Header />
      <main className={`lobby__main`} >
        <Table title={"Opciones de juego"}>
          <OptionTable title={`Escoge una region para jugar:`}>
            <select name="" id="" className="lobby__main__option">
              <option value="0">Todas</option>
              <option value="1">
                Kanto
              </option>
              <option value="2">Johto</option>
              <option value="3">Hoenn</option>
              <option value="4">sinnoh</option>
              <option value="5">Unova/teselia</option>
            </select>
          </OptionTable>
          <OptionTable title={"Ingrese el nombre de usuario:"}>
            <input type="text" name="" className="lobby__main__option--input" placeholder="Ash, Red, Blue..." />
          </OptionTable>
          <OptionTable title={"Nivel de dificultad"}>
            <select name="" id="" className="lobby__main__option">
              <option value="1"> 6 letras Max</option>
              <option value="2"> 7 letras Max</option>
              <option value="3"> 8 letras Max</option>
              <option value="4"> Abierto</option>
            </select>
          </OptionTable>
        </Table>
        <Link to="/game" className={`lobby__button ${darkMode ? "dark-mode--buttonLink": ""}`}>
          JUGAR!
        </Link>
      </main>
    </div>
    <ModalsList />
    </>
  )
}
