import React from "react"
import { Image } from "react-native"

import { NavbarStyled } from "./styles"
import logo from "../../assets/logo.png"
import Icon from "../Icons"

const Navbar: React.FC = ({}) => {
  return (
    <NavbarStyled>
      <Icon name='menu' />
      <Image source={logo} />
      <Icon name='search' />
    </NavbarStyled>
  )
}

export default Navbar
