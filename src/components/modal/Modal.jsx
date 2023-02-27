import React, {useContext} from 'react'
import { Button } from '../button/Button'
import {SlClose} from 'react-icons/sl'
import { CreatePokeContext } from '../../context/CreatePokeContext'
import styles from './modal.module.css'

export function Modal({children, title, visualizar}) {
  const {mostrarModalConfig, setMostrarModalConfig, mostrarModalAyuda, setMostrarModalAyuda, mostrarModalRanking, setMostrarModalRanking} = useContext(CreatePokeContext)
  const changeViewModal = ()=>{
    if(visualizar == 'ayuda') setMostrarModalAyuda(!mostrarModalAyuda)
    else if (visualizar == 'Ranking') setMostrarModalRanking(!mostrarModalRanking)
    else if(visualizar == 'config') setMostrarModalConfig(!mostrarModalConfig)
  }
  return (
    <>
    <div className={styles.Overlay} >
      <div className={styles.Modal}>
        <h2 className={styles.title} > {title} </h2>
        <Button clase={styles.escape} >
          <SlClose onClick={changeViewModal}/>
        </Button>
        <div>
          {children}
        </div>
      </div>
    </div>
      
    </>
   
  )
}