import React from 'react'
import { Box } from '../box/Box'
import './currentRow.css'

export function CurrentRow({word, pokemon}) { // palabra incompleta Ej: Ratt (Rattata)
  return (
    <div className='currentRow'>
      {
        word.split('').map((letra, index)=> <Box key={index} letra={letra} status='edit' />)
      }
      {
        Array.from(Array(7)).map((letra, i)=><Box key={i} letra={''} status={'edit'} />)
      }
    </div>
  )
}
