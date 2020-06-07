import React from "react"

import Typograph from "../Typograph"
import { ImageBackgroundStyled, CardNameStyled } from "./styles"

type Props = {
  alterEgo: string
  name: string
  image: any
}

const Card: React.FC<Props> = ({ alterEgo, name, image, ...rest }) => {
  return (
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
  )
}

export default Card
