import React from 'react'
import { Box } from '../box/Box'
import { isPresent } from '../../../utilities/isPresent'

export function RowCompleted({word, solution}) {
  return (
    <div className='RowCompleted Rows'>
      {
        word && word.split('').map((element, index)=><Box letra={element} status={isPresent(element, index, solution)} key={index} />)
      }
    </div>
  )
}
