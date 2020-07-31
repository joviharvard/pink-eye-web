import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  padding: 20px;
  align-items: center;
`

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`

export const ScreenCapContainer = styled.div`
  border: 6px ${({ theme }) => theme.colors.darkGreen};
  border-style: double;
  width: 80%;
  padding: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  &:hover{
    border: 7px ${({ theme }) => theme.colors.pink};
    border-style: double;
    transition: border 0.2s ease-out;
  }
`

export const ScreenCap = styled.img`
  width: 100%;
  height: auto;
`

export const Body = styled.p`
  width: 80%;
  margin-top: 30px;
  margin-bottom: 30px;
  font-size: 1em;
  font-family: ${({ theme }) => theme.fonts.body};
  white-space: pre-line;
  color: ${({ theme }) => theme.colors.whitish};
  line-height: 1.2;
  text-align: justify;
`
