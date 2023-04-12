import React, {useState, useEffect, useContext} from 'react'
import { Box } from '../box/Box'
import { CreatePokeContext } from '../../../context/CreatePokeContext'
import './currentRow.css'

export function CurrentRow({word}) { // palabra incompleta Ej: Ratt (Rattata)
  const { BoxNumbers } = useContext(CreatePokeContext)
  const [boxCount, setBoxCount] = useState(0)

  useEffect(() => {
    if (BoxNumbers) {
      setBoxCount(BoxNumbers)
    }
  }, [BoxNumbers])

  return (
    <div className='currentRow Rows'>
      {word.split('').map((letra, index) => (
        <Box key={index} letra={letra} status='edit' />
      ))}
      {Array.from({ length: Math.max(boxCount - word.length, 0) }).map((letra, i) => (
        <Box key={i} letra={''} status={'edit'} />
      ))}
    </div>
  )
}
