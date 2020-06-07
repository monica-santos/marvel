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
        start: number[]
      }
      red: {
        colors: string[]
        start: number[]
      }
      purple: {
        colors: string[]
        start: number[]
      }
      green: {
        colors: string[]
        start: number[]
      }
      pink: {
        colors: string[]
        start: number[]
      }
      black: {
        colors: string[]
        start: number[]
      }
      dark: {
        colors: string[]
        start: number[]
      }
    }
  }
}
