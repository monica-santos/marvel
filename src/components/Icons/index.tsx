import React from "react"

import AgeIcon from "./icons/Age"
import AlienIcon from "./icons/Alien"
import AntiheroIcon from "./icons/Antihero"
import BackIcon from "./icons/Back"
import HeightIcon from "./icons/Height"
import HeroIcon from "./icons/Hero"
import HumanIcon from "./icons/Human"
import MenuIcon from "./icons/Menu"
import SearchIcon from "./icons/Search"
import UniverseIcon from "./icons/Universe"
import VillainIcon from "./icons/Villain"
import WeightIcon from "./icons/Weight"

type Props = {
  name: string
  width?: number
  height?: number
  color?: string
}

const Icon: React.FC<Props> = ({
  name,
  width = 24,
  height = 24,
  color = "#000",
}) => {
  const props = { width, height, color }

  switch (name) {
    case "age":
      return <AgeIcon {...props} />
    case "alien":
      return <AlienIcon {...props} />
    case "antihero":
      return <AntiheroIcon {...props} />
    case "back":
      return <BackIcon {...props} />
    case "height":
      return <HeightIcon {...props} />
    case "hero":
      return <HeroIcon {...props} />
    case "human":
      return <HumanIcon {...props} />
    case "menu":
      return <MenuIcon {...props} />
    case "search":
      return <SearchIcon {...props} />
    case "universe":
      return <UniverseIcon {...props} />
    case "villain":
      return <VillainIcon {...props} />
    case "weight":
      return <WeightIcon {...props} />
    default:
      return null
  }
}

export default Icon
