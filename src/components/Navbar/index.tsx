import React from "react"
import { Image, ViewProps } from "react-native"

import { NavbarStyled } from "./styles"
import logo from "../../assets/logo.png"
import Icon from "../Icons"

const Navbar: React.FC<ViewProps> = props => {
  return (
    <NavbarStyled {...props}>
      <Icon name='menu' />
      <Image source={logo} />
      <Icon name='search' />
    </NavbarStyled>
  )
}

export default Navbar
