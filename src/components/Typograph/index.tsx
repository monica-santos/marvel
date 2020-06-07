import React from "react"
import { TextProps } from "react-native"
import { TextStyled } from "./styles"

type TypographProps = {
  size?: "40" | "32" | "20" | "18" | "16" | "14" | "12" | "10"
  weight?: "bold" | "heavy" | "medium" | "regular" | "semibold"
  color?: "red" | "black" | "dark" | "grey" | "silver" | "white"
}

type Props = TypographProps & TextProps

const Typograph: React.FC<Props> = ({
  size = "14",
  weight = "regular",
  color = "dark",
  children,
}) => {
  return (
    <TextStyled color={color} size={size} weight={weight}>
      {children}
    </TextStyled>
  )
}

export default Typograph
