import React from "react";
import './letterinput.css'

export function LetterInput({namePkm}){
  const arrName = [...namePkm];
  return (
    <div className='game__letter-container' >
      {arrName && arrName.map((letter, index)=> <div className='LetterInput' key={index + letter}></div> )}
    </div>
  )
}
