import React, {useContext} from 'react'
import { Button } from '../button/Button'
import {SlClose} from 'react-icons/sl'
import { CreatePokeContext } from '../../context/CreatePokeContext'
import styles from './modal.module.css'

export function Modal({children, title, visualizar}) {
  const {mostrarModalConfig, setMostrarModalConfig} = useContext(CreatePokeContext)
  return (
    <>
    <div className={styles.Overlay} >
      <div className={styles.Modal}>
        <h2 className={styles.title} > {title} </h2>
        <Button clase={styles.escape} >
          <SlClose onClick={()=>setMostrarModalConfig(false)}/>
        </Button>
        <div>
          {children}
        </div>
      </div>
    </div>
      
    </>
   
  )
}