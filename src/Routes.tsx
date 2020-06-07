import * as React from "react"

import { NavigationContainer, RouteProp } from "@react-navigation/native"
import {
  createStackNavigator,
  StackNavigationProp,
} from "@react-navigation/stack"

import Home from "./pages/Home"
import Details from "./pages/Details"

type RootStackParamList = {
  Home: undefined
  Details: { char: any }
}

type HomeScreenNavigationProp = StackNavigationProp<RootStackParamList, "Home">
type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">

type DetailsScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  "Details"
>
type DetailsScreenRouteProp = RouteProp<RootStackParamList, "Details">

export type HomeProps = {
  navigation: HomeScreenNavigationProp
  route: HomeScreenRouteProp
}
export type DetailsProps = {
  navigation: DetailsScreenNavigationProp
  route: DetailsScreenRouteProp
}

const Stack = createStackNavigator<RootStackParamList>()

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' headerMode='none'>
        <Stack.Screen name='Home' component={Home} />
        <Stack.Screen name='Details' component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default Routes
