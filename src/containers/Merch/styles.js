import styled from 'styled-components'
import cassetteClose from '../../assets/images/cassetteClose.png'

const outline = '6'

export const InnerBox = styled.div`
  width: 75%;
  height: 85%;
  margin: 20px;
  background: ${({ theme }) => theme.colors.green};
  transition: background 0.1s ease-out;
  display: flex;
  position: relative;
  text-align: center;
  padding: 8px;
  text-decoration: none;
  color: white;
  box-shadow: inset -${outline}px -${outline * 0.6}px 0px 0px
    ${({ theme }) => theme.colors.lightGreen};
  transition: box-shadow 0.2s ease-out;
  &:before,
  &:after {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    box-sizing: content-box;
  }
  &:before {
    top: 0;
    left: 0;
    border-bottom: 6px ${({ theme }) => theme.colors.darkGreen} solid;
    transition: border-bottom 0.5s ease-out;
  }
  &:after {
    left: 0;
    top: 0;
    border-right: 6px ${({ theme }) => theme.colors.darkGreen} solid;
    transition: border-right 0.4s ease-out;
  }
  &:hover {
    box-shadow: inset -${outline * 1.8}px -${outline * 1.2}px 0px 0px
      ${({ theme }) => theme.colors.darkPink};
    transition: box-shadow 1s ease-in;
    background: ${({ theme }) => theme.colors.pink};
    transition: background 0.2s ease-out;
  }
  &:hover:before {
    border-bottom: 0px;
    transition: border-bottom 1s ease-out;
  }
  &:hover:after {
    border-right: 0px;
    transition: border-right 1s ease-out;
  }
  &:active {
    background: ${({ theme }) => theme.colors.orange};
    color: ${({ theme }) => theme.colors.lightGreen};
    box-shadow: inset ${outline}px ${outline}px 0px 0px
      ${({ theme }) => theme.colors.red};
    transition: box-shadow 0.1s ease-out;
  }
`

export const UnderConstruction = styled.div`
  width: 100%;
  height: 100%;
  padding-left: 45px;
  background: url(${cassetteClose}) no-repeat content-box center;
  background-size: 96% auto;
  ${InnerBox}:hover & {
    background-size: 100% auto;
    transition: background-size 0.4s;
  }
`
