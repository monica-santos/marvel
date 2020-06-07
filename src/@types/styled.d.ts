import "styled-components"

declare module "styled-components" {
  export interface DefaultTheme {
    colors: {
      red: string
      black: string
      dark: string
      grey: string
      silver: string
      white: string
    }
    gradients: {
      blue: {
        colors: string[]
        start: string[]
      }
      red: {
        colors: string[]
        start: string[]
      }
      purple: {
        colors: string[]
        start: string[]
      }
      green: {
        colors: string[]
        start: string[]
      }
      pink: {
        colors: string[]
        start: string[]
      }
      black: {
        colors: string[]
        start: string[]
      }
      dark: {
        colors: string[]
        start: string[]
      }
    }
  }
}
