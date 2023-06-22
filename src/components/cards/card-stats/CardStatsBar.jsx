import React from "react"
import { CardStats } from "./CardStats"
import "./cardBar.css"
export function CardStatsBar() {
  let partidasJugadas = localStorage.getItem("partidasJugadas")
  let partidasGanadas = localStorage.getItem("ganadas")
  let rachaActual = localStorage.getItem("rachaActual")
  let mejorRacha = localStorage.getItem("mejorRacha")
  return (
    <>
      <CardStats
        value={partidasJugadas ? partidasJugadas : 0}
        title={"Partidas Jugadas"}
      />
      <CardStats
        value={partidasGanadas ? partidasGanadas : 0}
        title={"Partidas ganadas"}
      />
      <CardStats value={rachaActual ? rachaActual : 0} title={"Racha actual"} />
      <CardStats value={mejorRacha ? mejorRacha : 0} title={"Mejor Racha"} />
    </>
  )
}
