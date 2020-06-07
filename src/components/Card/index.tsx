import React from "react"

import Typograph from "../Typograph"
import { ImageBackgroundStyled, CardNameStyled } from "./styles"
import { TouchableOpacity } from "react-native-gesture-handler"

type Props = {
  alterEgo: string
  name: string
  image: any
  onPress(): void
}

const Card: React.FC<Props> = ({ alterEgo, name, image, onPress, ...rest }) => {
  return (
    <TouchableOpacity activeOpacity={0.9} onPress={onPress}>
      <ImageBackgroundStyled source={image} {...rest}>
        <CardNameStyled>
          <Typograph color='white' size='10' weight='medium'>
            {alterEgo}
          </Typograph>
          <Typograph color='white' size='20' weight='heavy'>
            {name}
          </Typograph>
        </CardNameStyled>
      </ImageBackgroundStyled>
    </TouchableOpacity>
  )
}

export default Card
