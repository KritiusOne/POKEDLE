import React from "react"
import { Key } from "./Key.jsx"
import board from "./keyboard.module.css"
import { SPECIAL, DELETE_KEY, LETTERS } from "../../utilities/keyTypes.js"

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
    `${SPECIAL[4]}`,
    "Z",
    "X",
    "C",
    "V",
    "B",
    "N",
    "M",
    "-",
    `${DELETE_KEY[1]}`,
  ]
  return (
    <div className={board.keyBoard}>
      {keys.map((key, i) => (
        <Key
          key={i}
          value={key}
          type={`key ${!LETTERS.test(key) ? "line" : ""} ${
            key.length > 1 ? key : ""
          }`}
        />
      ))}
    </div>
  )
}
