import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex: 1;
  flex-direction: column;
  background-color: ${({ theme }) => theme.colors.blue};
  align-items: center;
  color: white;
  box-shadow: inset -4px -4px 0px 0px ${({ theme }) => theme.colors.darkBlue};
  transition: box-shadow 0.2s ease-out;
  &:hover {
    box-shadow: inset -6px -6px 0px 0px ${({ theme }) => theme.colors.darkBlue};
    transition: box-shadow 0.3s ease-out;
  }
  justify-content: space-between;
`

export const HeaderBox = styled.div`
  width: 75%;
  height: 20%;
  margin-top: 30px;
  margin-bottom: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
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
  font-size: 1.2rem;
  font-family: ${({ theme }) => theme.fonts.terminal};
  user-select: none;
`

export const FilterContainer = styled.div`
  width: 100%;
  height: 50%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  transition: box-shadow 0.2s ease-out;
  box-shadow: inset -4px 0px 0px 0px ${({ theme }) => theme.colors.darkBlue};
  ${Container}:hover & {
    box-shadow: inset -6px 0px 0px 0px ${({ theme }) => theme.colors.darkBlue};
    transition: box-shadow 0.3s ease-out;
  }
`

export const Search = styled.div`
  width: 100%
  display: flex;
  flex-direction: row;
`

export const Bar = styled.input`
  width: 80%;
  font-size: 1.2em;
  padding: 8px;
  border: 0px;
  font-family: ${({ theme }) => theme.fonts.subheader};
  outline: none;
`

export const Button = styled.button`
  width: 20%;
  font-size: 1em;
  padding: 8px;
  transition: box-shadow 0.2s ease-out;
  box-shadow: inset -4px 0px 0px 0px ${({ theme }) => theme.colors.darkBlue};
  ${Container}:hover & {
    box-shadow: inset -6px 0px 0px 0px ${({ theme }) => theme.colors.darkBlue};
    transition: box-shadow 0.3s ease-out;
  }
  border: 0px;
  outline: none;
`
