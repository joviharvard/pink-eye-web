import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.blue};
  align-items: center;
  color: ${({ theme }) => theme.colors.whitish};
  box-shadow: inset -4px -4px 0px 0px ${({ theme }) => theme.colors.darkBlue};
  transition: box-shadow 0.2s ease-out;
  &:hover {
    box-shadow: inset -6px -6px 0px 0px ${({ theme }) => theme.colors.darkBlue};
    transition: box-shadow 0.3s ease-out;
  }
  overflow-y: scroll;
`

export const HeaderBox = styled.div`
  width: 75%;
  height: 20%;
  margin-top: 30px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px 0px 4px 4px;
  box-shadow: inset -4px -4px 0px 0px ${({ theme }) => theme.colors.darkBlue};
  transition: box-shadow 0.2s ease-out;
  ${Container}:hover & {
    box-shadow: inset -6px -6px 0px 0px ${({ theme }) => theme.colors.darkBlue};
    transition: box-shadow 0.3s ease-out;
  }
`

export const Header = styled.p`
  padding: 10px;
  font-size: 1.8rem;
  font-family: ${({ theme }) => theme.fonts.terminal};
  user-select: none;
  line-height: 1.5;
`

export const InfoContainer = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
`

export const Body = styled.p`
  text-align: left;
  font-size: 1em;
  font-family: ${({ theme }) => theme.fonts.terminal};
  user-select: none;
  padding: 4px;
  line-height: 1.5;
`

export const Rating = styled.div`
  color: ${({ theme }) => theme.colors.whitish};
  width: 120px;
  height: 120px;
  display: flex;
  font-size: 1.5em;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  height: 120px;
  font-family: ${({ theme }) => theme.fonts.terminal};
  background: ${({ theme }) => theme.colors.blue};
  border: 7px ${({ theme }) => theme.colors.whitish};
  border-style: double;
  align-self: flex-end;
  margin: 20px;
  &:hover {
    border: 10px ${({ theme }) => theme.colors.whitish};
    border-style: double;
    transition: border 0.5s;
  }
`
