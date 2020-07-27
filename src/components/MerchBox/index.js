import React from 'react'
import { Container, HeaderBox, Header, Subheader, Body } from './styles'

const MerchBox = ({ ...rest }) => {
  return (
    <Container {...rest}>
      <HeaderBox>
        <Header>MERCH</Header>
        <Subheader>SHOW YOUR LOVE FOR FILM</Subheader>
      </HeaderBox>
      <Body>
        At some point, we hope to be able to create some merchandise so people
        can wear their love of film on their sleeves! Right now though, we're
        just focused on writing informed reviews of the movies that we love.
        This page is current under construction until further notice.
      </Body>
    </Container>
  )
}

export default MerchBox
