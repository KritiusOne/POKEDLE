import React from 'react'
import { Box } from '../box/Box'
import { isPresent } from '../../../utilities/isPresent'

export function RowCompleted({word, solution}) {
  const arrWord = [...word]
  return (
    <div className='RowCompleted'>
      {
        arrWord.map((element, index)=><Box letra={element} status={isPresent(element, index, solution)} key={index} />)
      }
    </div>
  )
}
