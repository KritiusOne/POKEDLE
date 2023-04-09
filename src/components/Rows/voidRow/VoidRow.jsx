import React from 'react';
import { Box } from '../box/Box';
import './voidRow.css'

export function VoidRow({word}) {
  const arrWord = [...word]
  return (
    <div >
      {
        arrWord && arrWord.map((letra, i)=>{
          return <Box key={i} status='none' ></Box>
        })
      }
    </div>
  )
}