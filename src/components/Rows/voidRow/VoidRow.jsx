import React from 'react';
import { Box } from '../box/Box';
import './voidRow.css'

export function VoidRow({word}) {
  return (
    <div className='Rows voidRow' >
      {
        word && word.split('').map((letra, i)=>{
          return <Box key={i} status='none' ></Box>
        })
      }
    </div>
  )
}