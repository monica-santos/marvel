import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Props } from "./props"

const SvgMenu: React.FC<Props> = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} viewBox='0 0 24 24' fill='#000000'>
      <Path
        d='M2 19.5h8.75M2 4.5h20H2zM2 12h20H2z'
        stroke='#000'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}

export default SvgMenu
