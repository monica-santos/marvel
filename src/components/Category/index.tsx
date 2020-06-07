import React from "react"
import { ViewProps } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useTheme } from "styled-components"

import Icon from "../Icons"

type CategoryProps = {
  name: "human" | "alien" | "antihero" | "villain" | "hero"
}

type Props = CategoryProps & ViewProps
const mapGradient = {
  hero: "blue",
  villain: "red",
  antihero: "purple",
  alien: "green",
  human: "pink",
}

const Category: React.FC<Props> = ({ name }) => {
  const theme = useTheme()

  // TODO: fix this
  // @ts-ignore
  const { colors } = theme.gradients[mapGradient[name]]

  return (
    <LinearGradient
      style={{
        width: 56,
        height: 56,
        borderRadius: 28,
        justifyContent: "center",
        alignItems: "center",
      }}
      colors={colors}
    >
      <Icon name={name} width={32} height={32} color='#ffffff' />
    </LinearGradient>
  )
}

export default Category
