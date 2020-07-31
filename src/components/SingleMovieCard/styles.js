import styled from 'styled-components'

const outline = '6'

export const Container = styled.div`
  width: 355px;
  height: 355px;
  margin: 20px;
  background: ${({ theme }) => theme.colors.green};
  transition: background 0.1s ease-out;
  display: inline-block;
  position: relative;
  text-align: center;
  padding: 20px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.whitish};
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

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space between;
  padding: 20px;
  text-align: center;
  align-items: center;
`

export const Title = styled.div`
  font-size: 48px;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.header};
  padding: 4px;
  user-select: none;
`

export const Director = styled.p`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.subheader};
  padding: 4px;
  user-select: none;
`

export const Reviewer = styled.p`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.subheader};
  padding: 4px;
  user-select: none;
`
