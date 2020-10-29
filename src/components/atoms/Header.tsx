import styled from 'styled-components'

interface HeaderProps {
  readonly align?: 'auto' | 'left' | 'right' | 'center'
}

export const Header = styled.h1<HeaderProps>`
  margin: 10px 0;
  font-size: 32px;
  text-align: ${(props) => props.align || 'left'};
`
