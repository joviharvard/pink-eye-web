import styled from 'styled-components'

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBlue};
  width: 100%;
  height: 100%;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  line-height: 1.5;
`

export const Header = styled.p`
  width: 100%;
  text-align: center;
  padding: 30px;
  font-size: 3.5em;
  font-family: ${({ theme }) => theme.fonts.terminal};
  user-select: none;
  color: ${({ theme }) => theme.colors.pink};
`

export const Subheader = styled(Header)`
  padding: 8px;
  font-size: 2em;
`
