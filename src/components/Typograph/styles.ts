import styled, { css } from "styled-components/native"

type Props = {
  size: "40" | "32" | "20" | "18" | "16" | "14" | "12" | "10"
  weight: "bold" | "heavy" | "medium" | "regular" | "semibold"
  color: "red" | "black" | "dark" | "grey" | "silver" | "white"
}

export const TextStyled = styled.Text<Props>`
  ${({ size, weight, color, theme }) => css`
    font-family: 'gilroy-${weight}';
    font-size: ${+size * 1.25}px;
    color: ${theme.colors[color]};    
  `}
`
