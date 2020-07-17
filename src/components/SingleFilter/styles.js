import styled from 'styled-components'
import eye from '../../assets/images/hoverEyeRating.png'
import hoverEye from '../../assets/images/emptyEye.png'

export const Container = styled.div`
  width: 100%
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background: ${({ selected, theme }) =>
    selected ? theme.colors.blue : theme.colors.darkBlue};
  transition: background 0.3s ease;
  &:hover {
    background: ${({ theme }) => theme.colors.blue};
    transition: background 0.3s ease;

  }
  transition: box-shadow 0.3s ease;
  box-shadow: inset -4px 0px 0px 0px ${({ theme }) => theme.colors.darkBlue};
`

export const Text = styled.p`
  width: 80%;
  font-size: 1.3em;
  padding: 12px;
  border: 0px;
  font-family: ${({ theme }) => theme.fonts.subheader};
`

export const SelectedEye = styled.div`
  width: 28px;
  height: 28px;
  transition: background 0.3s ease-out;
  background: url(${eye}) no-repeat content-box center;
  background-size: 28px 28px;
  margin-right: 10px;
`

export const Eye = styled.div`
  width: 28px;
  height: 28px;
  margin-right: 10px;
  ${Container}:hover & {
    background: url(${hoverEye}) no-repeat content-box center;
    background-size: 28px 28px;
  }
`
