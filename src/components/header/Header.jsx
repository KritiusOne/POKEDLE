import React from "react";
import { Button } from "../button/Button";
import {IoIosHelpCircle} from 'react-icons/io';
import {BiDownArrow} from 'react-icons/bi';
import { GiNetworkBars } from "react-icons/gi";
import {FiSettings} from 'react-icons/fi';
import './header.css'
export function Header(){
  return (
    <header className='Header'>
      <Button handleClick={() =>console.log('Boton de ayuda')} title=''>
        <IoIosHelpCircle className='header__Button__icon' />
      </Button>
      <Button handleClick={() =>console.log('Boton de titulo')} title='POKEDLE'>
        <BiDownArrow className='header__Button__icon' />
      </Button>
      <div className='header__container'>
        <Button handleClick={() =>console.log('Boton de puntuacion')} title=''>
          <GiNetworkBars className='header__Button__icon'/>
        </Button>
        <Button handleClick={() =>console.log('Boton de config')} title=''>
          <FiSettings className='header__Button__icon's />
        </Button>
      </div>
    </header>
  )
}