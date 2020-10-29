import styled from 'styled-components'

export const Root = styled.ul`
  list-style: none;
`

export const Item = styled.li`
  padding: 10px 0;
  border-bottom: 1px solid silver;
`

export const Head = styled.li`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  input {
    width: 15px;
    height: 15px;
  }
`

export const Header = styled.li`
  font-size: 20px;
  font-weight: bold;
`

export const Description = styled.li`
  font-size: 16px;
`
