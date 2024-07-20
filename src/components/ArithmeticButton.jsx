import React from 'react'

const ArithmeticButton = ( {operation, onClick}) => {
  return (
    <button className='myButton' onClick={ () => onClick(operation)}>
        {operation}
    </button>
  )
}

export default ArithmeticButton;