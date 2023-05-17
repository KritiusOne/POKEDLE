import { Link } from "react-router-dom"
import { Helmet } from "react-helmet"
import { Header } from "../../components/header/Header"
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
  const { darkMode, setRegion, setLevel, setNamePlayer } =
    useContext(ThemeContext)
  const handleChangeOptionLetters = (e) => {
    setLevel(e.target.value)
  }
  const handleChangeOptionRegion = (e) => {
    setRegion(e.target.value)
  }
  const handleInputName = (e) => {
    setNamePlayer(e.target.value)
  }
  return (
    <>
      <Helmet>
        <title>Pokedle!</title>
      </Helmet>
      <div className={`lobby ${darkMode ? "dark-mode-bg" : ""}`}>
        <Header />
        <main className={`lobby__main`}>
          <Table title={"Opciones de juego"}>
            <OptionTable title={`Escoge una region para jugar:`}>
              <select
                name=""
                id=""
                className="lobby__main__option"
                onChange={handleChangeOptionRegion}
              >
                <option value="1">Todas</option>
                <option value="2">Kanto</option>
                <option value="3">Johto</option>
                <option value="4">Hoenn</option>
                <option value="5">sinnoh</option>
                <option value="6">Unova/teselia</option>
              </select>
            </OptionTable>
            <OptionTable title={"Ingrese el nombre de usuario:"}>
              <input
                type="text"
                onChange={handleInputName}
                className="lobby__main__option--input"
                placeholder="Ash, Red, Blue..."
              />
            </OptionTable>
            <OptionTable title={"Nivel de dificultad"}>
              <select
                name=""
                id=""
                className="lobby__main__option"
                onChange={handleChangeOptionLetters}
              >
                <option value="0"> Abierto</option>
                <option value="6"> 6 letras Max</option>
                <option value="7"> 7 letras Max</option>
                <option value="8"> 8 letras Max</option>
              </select>
            </OptionTable>
          </Table>
          <Link
            to="/game"
            className={`lobby__button ${
              darkMode ? "dark-mode--buttonLink" : ""
            }`}
          >
            JUGAR!
          </Link>
        </main>
      </div>
      <ModalsList />
    </>
  )
}
