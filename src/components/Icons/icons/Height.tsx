import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Props } from "./props"

const SvgHeight: React.FC<Props> = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} viewBox='0 0 24 24' fill='#000000'>
      <Path
        d='M21.819 20.942L3.058 2.182A.62.62 0 002 2.62v18.76c0 .342.278.62.62.62h18.76a.62.62 0 00.439-1.058zm-6.55-.182v-1.034a.62.62 0 10-1.24 0v1.034h-1.44v-.659a.62.62 0 10-1.24 0v.66h-1.44v-1.035a.62.62 0 10-1.24 0v1.034h-1.44v-.659a.62.62 0 00-1.24 0v.66H3.24v-2.75H3.9a.62.62 0 000-1.24H3.24v-1.44h1.034a.62.62 0 100-1.24H3.24v-1.44H3.9a.62.62 0 000-1.24H3.24v-1.44h1.034a.62.62 0 100-1.24H3.24V4.118L19.883 20.76h-4.615z'
        fill={color}
      />
      <Path
        d='M6.586 18.012h5.628a.62.62 0 00.438-1.059l-5.628-5.628a.62.62 0 00-1.058.439v5.628c0 .342.277.62.62.62zm.62-4.751l3.51 3.51h-3.51v-3.51z'
        fill={color}
      />
    </Svg>
  )
}

export default SvgHeight
