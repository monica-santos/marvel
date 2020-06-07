import React from "react"
import { SafeAreaView, ScrollView, View } from "react-native"

import Card from "../../components/Card"
import Category from "../../components/Category"
import Typograph from "../../components/Typograph"
import Navbar from "../../components/Navbar"

import {
  heroes,
  villains,
  antiHeroes,
  aliens,
  humans,
} from "../../assets/application.json"
import { HomeProps } from "../../Routes"

export const chars = {
  black: { uri: require("../../assets/chars/black-panther.png") },
  deadpool: { uri: require("../../assets/chars/deadpool.png") },
  dr: { uri: require("../../assets/chars/dr-doom.png") },
  green: { uri: require("../../assets/chars/green-goblit.png") },
  happy: { uri: require("../../assets/chars/happy-hogan.png") },
  howard: { uri: require("../../assets/chars/howard-stark.png") },
  iron: { uri: require("../../assets/chars/iron-man.png") },
  mary: { uri: require("../../assets/chars/mary-jane.png") },
  punisher: { uri: require("../../assets/chars/punisher.png") },
  red: { uri: require("../../assets/chars/red-skull.png") },
  ronan: { uri: require("../../assets/chars/ronan.png") },
  spider: { uri: require("../../assets/chars/spider-man.png") },
  talos: { uri: require("../../assets/chars/talos.png") },
  thanos: { uri: require("../../assets/chars/thanos.png") },
  venom: { uri: require("../../assets/chars/venom.png") },
}

const homeSkeleton = [
  {
    title: "Heróis",
    type: "heroes",
    chars: heroes,
  },
  {
    title: "Vilões",
    type: "villains",
    chars: villains,
  },
  {
    title: "Anti-heróis",
    type: "antiHeroes",
    chars: antiHeroes,
  },
  {
    title: "Alienígenas",
    type: "aliens",
    chars: aliens,
  },
  {
    title: "Humanos",
    type: "humans",
    chars: humans,
  },
]

const Home: React.FC<HomeProps> = ({ navigation }) => {
  const handleNavigation = (char: any) => {
    navigation.navigate("Details", {
      char,
    })
  }

  return (
    <SafeAreaView>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{ padding: 20 }}>
          <Navbar />
          <View style={{ marginBottom: 24, maxWidth: 300 }}>
            <Typograph color='grey' size='14' weight='semibold'>
              Bem vindo ao Marvel Heroes
            </Typograph>
            <Typograph color='dark' size='32' weight='heavy'>
              Escolha o seu personagem
            </Typograph>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 15,
            }}
          >
            <Category name='hero' />
            <Category name='villain' />
            <Category name='antihero' />
            <Category name='alien' />
            <Category name='human' />
          </View>

          {homeSkeleton.map(row => (
            <View key={row.title} style={{ paddingBottom: 32 }}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  paddingVertical: 15,
                }}
              >
                <Typograph color='red' size='18' weight='bold'>
                  {row.title}
                </Typograph>
                <Typograph color='grey' size='14' weight='medium'>
                  Ver tudo
                </Typograph>
              </View>

              <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                {row.chars.map(char => (
                  <Card
                    key={char.id}
                    alterEgo={char.alterEgo}
                    name={char.name}
                    // TODO: fix this
                    // @ts-ignore
                    image={chars[char.id].uri}
                    onPress={() => handleNavigation(char)}
                  />
                ))}
              </ScrollView>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Home
