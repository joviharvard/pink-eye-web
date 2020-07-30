import React from 'react'
import LoadingEye from '../../components/LoadingEye'
import { Container, Header, Subheader } from './styles'

const Home = () => {
  return (
    <Container>
      <Header>PINK EYE MOVIE GOERS</Header>
      <LoadingEye isLoop isStopped={false} width="100%" height="100%" />
      <Subheader>A PLACE TO READ/WRITE ABOUT</Subheader>
      <Subheader>ALL THE MOVIES</Subheader>
      <Subheader>THAT MADE US TEAR UP</Subheader>
      <div style={{ height: '20px' }} />
    </Container>
  )
}

export default Home
