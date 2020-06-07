import 'styled-components'

declare module 'styled-components' {
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
      blue: string
      red: string
      purple: string
      green: string
      pink: string
      black: string
      dark: string
    }
  }
}
