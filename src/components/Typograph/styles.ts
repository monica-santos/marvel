import styled, { css } from 'styled-components/native'

type Props = {
  size: '40' | '32' | '20' | '18' | '16' | '14' | '12' | '10'
  weight: 'bold' | 'heavy' | 'medium' | 'regular' | 'semibold'
}

export const TextStyled = styled.Text<Props>`
  ${({ size, weight }) => css`
    font-family: 'gilroy-${weight}';
    font-size: ${size}px;
  `}
`
