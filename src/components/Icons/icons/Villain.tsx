import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { Props } from "./props"

const SvgVillain: React.FC<Props> = ({ width, height, color }) => {
  return (
    <Svg width={width} height={height} viewBox='0 0 24 24' fill='#000000'>
      <Path
        d='M12.274 2h-.602C7.61 2 4.344 5.017 4.344 8.726v3.83c0 1.256.781 2.382 2.03 2.76v2.42c0 2.39 4.338 4.264 5.143 4.264h.912c.805 0 5.196-1.873 5.196-4.265v-2.418c1.25-.379 2.031-1.505 2.031-2.76V8.726c0-3.71-3.319-6.726-7.382-6.726zm-.301 10.78c.693 0 1.073 1.766 1.073 2.352 0 .56-.322.636-.637.636-.062 0-.128-.002-.199-.005a6.144 6.144 0 00-.474 0c-.07.003-.137.005-.2.005-.15 0-.32-.014-.449-.119-.128-.104-.188-.268-.188-.517 0-.586.381-2.353 1.074-2.353zm-4.389-2.025c.274-.33.664-.529 1.1-.558l.69-.047c.921-.061 1.641.413 1.641 1.053 0 .613-.616 1.407-1.402 1.807l-.599.305a1.386 1.386 0 01-.63.161c-.583 0-1.01-.424-1.09-1.08l-.054-.457a1.55 1.55 0 01.344-1.184zm9.029 5.034l-1.488.505v.864c0 .022-.018.044-.022.065-.035.752-.71 1.183-1.835 1.183H10.63c-.88 0-1.755-.43-1.755-1.248v-.864l-1.512-.505a.315.315 0 01-.2-.396.31.31 0 01.393-.196l1.724.576a.32.32 0 01.22.297v1.088c0 .187.113.325.284.423a.329.329 0 01.325-.268c.172 0 .329.14.329.312v.14c0 .01.12.017.192.017h.432v-.157a.313.313 0 01.625 0v.157h.625v-.157a.313.313 0 01.625 0v.157h.33c.082 0 .139-.006.295-.013v-.144c0-.172.126-.312.299-.312.17 0 .3.135.304.303.18-.093.318-.236.318-.457 0-.02.017-.038.017-.057V16.07c0-.135.07-.254.197-.297l1.709-.576a.316.316 0 01.4.196.31.31 0 01-.193.396zm.284-3.85l-.054.457c-.08.656-.507 1.08-1.09 1.08-.207 0-.418-.054-.63-.162l-.598-.304c-.787-.4-1.403-1.194-1.403-1.807 0-.64.722-1.114 1.642-1.053l.69.047a1.55 1.55 0 011.443 1.742z'
        fill={color}
      />
    </Svg>
  )
}

export default SvgVillain
