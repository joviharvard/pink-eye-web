import React from 'react'
import LeftBox from '../../components/LeftBox'
import theme from '../../theme'

function MainContainer({ rightComponent, leftComponent, ...rest }) {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.whitish,
        height: '100vh',
        width: '100vw',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          height: '90vh',
          width: '95vw',
          background: theme.colors.darkBlue,
          boxShadow: `6px 6px 0px 0px ${theme.colors.lightGreen} `,
        }}
      >
        <LeftBox leftComponent={leftComponent} {...rest} />
        {rightComponent()}
      </div>
    </div>
  )
}

export default MainContainer
