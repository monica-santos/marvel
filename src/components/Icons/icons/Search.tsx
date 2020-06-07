import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Props } from "./props"

const SvgSearch: React.FC<Props> = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} viewBox='0 0 24 24' fill='#fff'>
      <Path
        d='M22 22l-6.667-6.667L22 22zM17.556 9.778a7.777 7.777 0 11-15.554 0 7.777 7.777 0 0115.554 0z'
        stroke={color}
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}

export default SvgSearch
