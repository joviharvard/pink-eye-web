import styled from 'styled-components'
import ratingEye from '../../assets/images/ratingEye.png'
import halfEye from '../../assets/images/halfEye.png'
import emptyEye from '../../assets/images/emptyEye.png'
import hoverEyeRating from '../../assets/images/hoverEyeRating.png'
import hoverHalfEye from '../../assets/images/hoverHalfEye.png'
import { Container } from '../SingleMovieCard/styles'

const getRatingEye = (r, index) => {
  if (r - index >= 0.75) {
    return { rating: ratingEye, hover: hoverEyeRating }
  }
  if (r - index >= 0.25) {
    return { rating: halfEye, hover: hoverHalfEye }
  }
  return { rating: emptyEye, hover: emptyEye }
}

export const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  width: 250px;
  height: 50px;
  margin-top: 20px;
  margin-bottom: 10px;
`

export const EyeBox = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
`

export const Eye = styled.div`
  width: 50px;
  height: 50px;
  background: url(${({ rating, id, invert }) =>
      invert
        ? getRatingEye(rating, id).hover
        : getRatingEye(rating, id).rating})
    no-repeat content-box center;
  background-size: 50px 50px;
  ${Container}:hover & {
    background: url(${({ rating, id }) => getRatingEye(rating, id).hover})
      no-repeat content-box center;
    background-size: 50px 50px;
  }
  overflow: hidden;
`
