import React from "react";
import './letterinput.css'

export function LetterInput({namePkm, numberContainer}){
  const arrName = [...namePkm];
  return (
    <div className= {`game__letter-container`} >
      {arrName && arrName.map((letter, index)=> <div className={`LetterInput ${numberContainer}`} key={index + letter}></div> )}
    </div>
  )
}
