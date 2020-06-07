import React from "react"
import { AppLoading } from "expo"
import { useFonts } from "@use-expo/font"
import { ThemeProvider } from "styled-components"
import Routes from "./src/Routes"

import { theme } from "./src/styles/theme"

export default function App() {
  const [fontsLoaded] = useFonts({
    "gilroy-bold": require("./src/assets/fonts/gilroy-bold.ttf"),
    "gilroy-heavy": require("./src/assets/fonts/gilroy-heavy.ttf"),
    "gilroy-medium": require("./src/assets/fonts/gilroy-medium.ttf"),
    "gilroy-regular": require("./src/assets/fonts/gilroy-regular.ttf"),
    "gilroy-semibold": require("./src/assets/fonts/gilroy-semibold.ttf"),
  })

  if (!fontsLoaded) return <AppLoading />

  return (
    <>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </>
  )
}
