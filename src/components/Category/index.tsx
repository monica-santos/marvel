import React from "react"
import { ViewProps } from "react-native"
import { LinearGradient } from "expo-linear-gradient"
import { useTheme } from "styled-components"

import Icon from "../Icons"
import { TouchableOpacity } from "react-native-gesture-handler"

type CategoryProps = {
  name: "human" | "alien" | "antihero" | "villain" | "hero"
  onPress?(): void
}

type Props = CategoryProps & ViewProps

const mapGradient = {
  hero: "blue",
  villain: "red",
  antihero: "purple",
  alien: "green",
  human: "pink",
}

const Category: React.FC<Props> = ({ name, onPress }) => {
  const theme = useTheme()

  // TODO: fix this
  // @ts-ignore
  const { colors } = theme.gradients[mapGradient[name]]

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
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
    </TouchableOpacity>
  )
}

export default Category
