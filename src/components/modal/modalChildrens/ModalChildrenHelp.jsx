import React from "react"
import "./modalChildrenHelp.css"
import { Box } from "../../Rows/box/Box"

export function ModalChildrenHelp() {
  return (
    <div className="MCH">
      <p className="MCH__p">
        El objetivo del juego es simple, adivinar el nombre del pokemon oculto.
        Tendrás para esta misión 6 intentos para adivinarla. Puedes jugar las
        veces que desees, pero cada vez que juegues el nombre cambiará. Cada
        intento debe ser una palabra válida, según la región que escogiste,
        deben ser pokemon que esten en la pokedex de esa region con las
        dimensiones maximas que escogiste. En cada ronda el juego pinta cada
        letra de un color indicando si esa letra se encuentra o no en la palabra
        y si se encuentra en la posición correcta.
      </p>
      <section className="MCH__BOX--Types">
        <div className="MCH__BOX--types-container">
          <Box letra={"P"} status={"correct"} />
          <span className="MCH__BOX--types__title">
            <strong className="MCH__BOX--types__resaltado">VERDE </strong>
            significa que la letra está en la palabra y en la posición CORRECTA.
          </span>
        </div>
        <div className="MCH__BOX--types-container">
          <Box letra={"P"} status={"present"} />
          <span className="MCH__BOX--types__title">
            <strong className="MCH__BOX--types__resaltado">AMARILLO </strong>
            significa que la letra letra está presente en la palabra pero en la
            posición INCORRECTA.
          </span>
        </div>
        <div className="MCH__BOX--types-container">
          <Box letra={"P"} status={"none"} />
          <span className="MCH__BOX--types__title">
            <strong className="MCH__BOX--types__resaltado">GRIS </strong>
            significa que la letra letra NO está presente en la palabra.
          </span>
        </div>
      </section>
    </div>
  )
}
