import React from "react"
import { CardStatsBar } from "../../cards/card-stats/CardStatsBar"
import { CardTextStats } from "../../cards/card-Text-Stats/CardTextStats"
import "./modalChildrenStats.css"

export function ModalChildrenStats() {
  let partidasJugadas = localStorage.getItem("partidasJugadas")
  let primerIntento = localStorage.getItem("primerIntento")
  let segundoIntento = localStorage.getItem("segundoIntento")
  let tercerIntento = localStorage.getItem("tercerIntento")
  let cuartoIntento = localStorage.getItem("cuartoIntento")
  let quintoIntento = localStorage.getItem("quintoIntento")
  let sextoIntento = localStorage.getItem("sextoIntento")
  return (
    <div className="modalChildrenStats">
      <div className="modalChildrenStats--container">
        <CardStatsBar />
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
