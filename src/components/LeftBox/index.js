import React from 'react'
import NavBox from '../NavBox'

const LeftBox = ({ leftComponent, ...rest }) => {
  return (
    <div
      style={{
        height: '100%',
        width: '320px',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <NavBox {...rest} />
      {leftComponent({...rest})}
    </div>
  )
}

export default LeftBox
