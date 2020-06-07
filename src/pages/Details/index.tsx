import React from "react"
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native"
import { Dimensions } from "react-native"

import * as data from "../../assets/application.json"
import { DetailsProps } from "../../Routes"
import { chars } from "../Home"
import Typograph from "../../components/Typograph"

const Details: React.FC<DetailsProps> = ({ navigation, route }) => {
  const { id, type } = route.params
  const win = Dimensions.get("window")

  // TODO: fix this
  // @ts-ignore
  const category = data[type]
  // @ts-ignore
  const c = category.find(char => char.id === id)
  console.log({ char: c, id })
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        style={{
          flex: 1,
          justifyContent: "center",
          width: win.width,
          height: win.height,
        }}
        // @ts-ignore
        source={chars[id].uri}
      >
        <Typograph>Teste</Typograph>
      </ImageBackground>
    </View>
  )
}

export default Details
