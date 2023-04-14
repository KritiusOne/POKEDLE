import React from "react"
import { Key } from "./Key.jsx"
import board from './keyboard.module.css'
import { SPECIAL } from "../../utilities/keyTypes.js"
import { DELETE_KEY } from "../../utilities/keyTypes.js"

export function Keyboard() {
  const keys = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "A",
    "S",
    "D",
    "F",
    "G",
    "H",
    "J",
    "K",
    "L",
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "-",
    `${SPECIAL[4]}`,
    `${DELETE_KEY[1]}`
  ]
  return (
    <div className={board.keyBoard} >
      {keys.map((key, i) => (
        <Key key={i} value={key} type={`${key == 'DELETE' ? "key " + key: "key"}`}  />
      ))}
    </div>
  )
}
