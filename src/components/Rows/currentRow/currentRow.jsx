import React from 'react'
import { Box } from '../box/Box'

export function currentRow({word}) { // palabra incompleta Ej: Ratt (Rattata)
  return (
    <div className='currentRow'>
      {
        word.split('').map((letra, index)=> <Box key={index} letra={letra} status='edit' />)
      }
    </div>
  )
}
