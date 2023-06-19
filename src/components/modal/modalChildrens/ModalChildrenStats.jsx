import React from "react"
import { CardStats } from "../../cards/card-stats/CardStats"
import { CardTextStats } from "../../cards/card-Text-Stats/CardTextStats"
import "./modalChildrenStats.css"

export function ModalChildrenStats() {
  let partidasJugadas = localStorage.getItem("partidasJugadas")
  let partidasGanadas = localStorage.getItem("ganadas")
  let rachaActual = localStorage.getItem("rachaActual")
  let mejorRacha = localStorage.getItem("mejorRacha")

  let primerIntento = localStorage.getItem("primerIntento")
  let segundoIntento = localStorage.getItem("segundoIntento")
  let tercerIntento = localStorage.getItem("tercerIntento")
  let cuartoIntento = localStorage.getItem("cuartoIntento")
  let quintoIntento = localStorage.getItem("quintoIntento")
  let sextoIntento = localStorage.getItem("sextoIntento")
  return (
    <div className="modalChildrenStats">
      <div className="modalChildrenStats--container">
        <CardStats
          value={partidasJugadas ? partidasJugadas : 0}
          title={"Partidas Jugadas"}
        />
        <CardStats
          value={partidasGanadas ? partidasGanadas : 0}
          title={"Partidas ganadas"}
        />
        <CardStats
          value={rachaActual ? rachaActual : 0}
          title={"Racha actual"}
        />
        <CardStats value={mejorRacha ? mejorRacha : 0} title={"Mejor Racha"} />
      </div>
      <div className="modalChildrenStats__container--porcentajes">
        <CardTextStats
          numList={1}
          value={primerIntento}
          porcentaje={(primerIntento / partidasJugadas) * 100}
        />
        <CardTextStats
          numList={2}
          value={segundoIntento}
          porcentaje={(segundoIntento / partidasJugadas) * 100}
        />
        <CardTextStats
          numList={3}
          value={tercerIntento}
          porcentaje={(tercerIntento / partidasJugadas) * 100}
        />
        <CardTextStats
          numList={4}
          value={cuartoIntento}
          porcentaje={(cuartoIntento / partidasJugadas) * 100}
        />
        <CardTextStats
          numList={5}
          value={quintoIntento}
          porcentaje={(quintoIntento / partidasJugadas) * 100}
        />
        <CardTextStats
          numList={6}
          value={sextoIntento}
          porcentaje={(sextoIntento / partidasJugadas) * 100}
        />
      </div>
    </div>
  )
}
