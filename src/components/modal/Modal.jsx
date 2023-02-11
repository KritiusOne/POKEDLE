import React from 'react'
import { Button } from '../button/Button'
import {SlClose} from 'react-icons/sl'
import styles from './modal.module.css'

export function Modal({children, title, visualizar}) {
  return (
    <>
    <div className={styles.Overlay} >
      <div className={styles.Modal}>
        <h2 className={styles.title} > {title} </h2>
        <Button clase={styles.escape} >
          <SlClose/>
        </Button>
        <div>
          {children}
        </div>
      </div>
    </div>
      
    </>
   
  )
}