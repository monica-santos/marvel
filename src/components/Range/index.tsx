import React from "react"
import { Text } from "react-native"

import {
  ActiveIndicator,
  RemainingIndicator,
  Indicator,
  Wrapper,
} from "./styles"

type Props = {
  value: number
}

const Range: React.FC<Props> = ({ value, ...rest }) => {
  const total = 50
  const percent = value / 100
  const filled = Math.round(percent * total)
  const remaining = total - (filled + 1)

  return (
    <Wrapper>
      {Array.from({ length: filled }).map((item, i) => (
        <Indicator key={String(i)}>i</Indicator>
      ))}
      <ActiveIndicator>i</ActiveIndicator>
      {Array.from({ length: remaining }).map((item, i) => (
        <RemainingIndicator key={String(i)}>i</RemainingIndicator>
      ))}
    </Wrapper>
  )
}

export default Range
