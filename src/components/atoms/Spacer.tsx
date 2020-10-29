import styled, { css } from 'styled-components'

interface SpacerProps {
  readonly top?: string
  readonly left?: string
  readonly right?: string
  readonly bottom?: string
}

export const Spacer = styled.div<SpacerProps>`
  display: block;
  ${({ top }) =>
    top &&
    css`
      padding-top: ${top}px;
    `}
  ${({ left }) =>
    left &&
    css`
      padding-left: ${left}px;
    `};
  ${({ right }) =>
    right &&
    css`
      padding-right: ${right}px;
    `};
  ${({ bottom }) =>
    bottom &&
    css`
      padding-bottom: ${bottom}px;
    `};
`
