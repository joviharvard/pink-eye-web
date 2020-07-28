import React from 'react'
import LoadingEye from '../../components/LoadingEye'
import theme from '../../theme'

const Home = () => {
  return (
    <div
      style={{
        backgroundColor: theme.colors.darkBlue,
        width: '100%',
        height: '100%',
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
    >
      <LoadingEye
        isLoop
        isStopped={false}
        width='100%'
        height='100%'
      />

    </div>
  )
}

export default Home
