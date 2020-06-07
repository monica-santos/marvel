import React from "react"
import {
  View,
  ImageBackground,
  StatusBar,
  Dimensions,
  Image,
} from "react-native"

import { DetailsProps } from "../../Routes"
import Typograph from "../../components/Typograph"
import { chars } from "../Home"
import Icon from "../../components/Icons"
import { ScrollView } from "react-native-gesture-handler"
import Range from "../../components/Range"
import { LinearGradient } from "expo-linear-gradient"
import Card from "../../components/Card"

const thisYear = new Date().getFullYear()
const { width, height } = Dimensions.get("window")

const mapAbilities = {
  force: "Força",
  intelligence: "Inteligência",
  agility: "Agilidade",
  endurance: "Resistência",
  velocity: "Velocidade",
}

const Details: React.FC<DetailsProps> = ({ navigation, route }) => {
  const { char } = route.params

  return (
    <ScrollView
      bounces={false}
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: "#000",
      }}
    >
      <Image
        style={{
          position: "absolute",
          width,
          height,
        }}
        // @ts-ignore
        source={chars[char.id].uri}
      />
      <LinearGradient
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: 0,
          height: "100%",
        }}
        locations={[0.3, 0.5]}
        colors={["transparent", "#000000"]}
      />
      <StatusBar
        animated
        translucent
        networkActivityIndicatorVisible={false}
        barStyle='light-content'
      />
      <View style={{ flex: 1, padding: 20, marginTop: 300 }}>
        <View style={{ maxWidth: 200, marginBottom: 48 }}>
          <Typograph color='white' size='16' weight='medium'>
            {char.alterEgo}
          </Typograph>
          <Typograph color='white' size='40' weight='heavy'>
            {char.name}
          </Typograph>
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 24,
          }}
        >
          <View
            style={{
              alignItems: "center",
              height: 48,
              justifyContent: "space-between",
            }}
          >
            <Icon color='#fff' name='age' />
            <Typograph color='white' size='12' weight='medium'>
              {thisYear - +char.caracteristics.birth} anos
            </Typograph>
          </View>
          <View
            style={{
              alignItems: "center",
              height: 48,
              justifyContent: "space-between",
            }}
          >
            <Icon color='#fff' name='weight' />
            <Typograph color='white' size='12' weight='medium'>
              {char.caracteristics.weight.value}
              {char.caracteristics.weight.unity}
            </Typograph>
          </View>
          <View
            style={{
              alignItems: "center",
              height: 48,
              justifyContent: "space-between",
            }}
          >
            <Icon color='#fff' name='height' />
            <Typograph color='white' size='12' weight='medium'>
              {char.caracteristics.height.value}
              {char.caracteristics.height.unity}
            </Typograph>
          </View>
          <View
            style={{
              alignItems: "center",
              height: 48,
              justifyContent: "space-between",
            }}
          >
            <Icon color='#fff' name='universe' />
            <Typograph color='white' size='12' weight='medium'>
              {char.caracteristics.universe}
            </Typograph>
          </View>
        </View>
        <Typograph color='white' size='14' weight='medium'>
          {char.biography}
        </Typograph>

        <Typograph
          style={{ paddingVertical: 24 }}
          color='white'
          size='18'
          weight='bold'
        >
          Habilidades
        </Typograph>

        {Object.keys(char.abilities).map(ability => (
          <View
            key={ability}
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              paddingBottom: 24,
            }}
          >
            <Typograph color='white' size='12' weight='regular'>
              {
                // TODO: fix this
                // @ts-ignore
                mapAbilities[ability]
              }
            </Typograph>
            <Range value={char.abilities[ability]} />
          </View>
        ))}
        <Typograph
          style={{ paddingVertical: 24 }}
          color='white'
          size='18'
          weight='bold'
        >
          Filmes
        </Typograph>
        <ScrollView horizontal>
          <Card
            alterEgo={char.alterEgo}
            name={char.name}
            // TODO: fix this
            // @ts-ignore
            image={chars[char.id].uri}
          />
          <Card
            alterEgo={char.alterEgo}
            name={char.name}
            // TODO: fix this
            // @ts-ignore
            image={chars[char.id].uri}
          />
          <Card
            alterEgo={char.alterEgo}
            name={char.name}
            // TODO: fix this
            // @ts-ignore
            image={chars[char.id].uri}
          />
          <Card
            alterEgo={char.alterEgo}
            name={char.name}
            // TODO: fix this
            // @ts-ignore
            image={chars[char.id].uri}
          />
        </ScrollView>
      </View>
    </ScrollView>
  )
}

export default Details
