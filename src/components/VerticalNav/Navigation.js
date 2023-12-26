import React from 'react'

import { DropDownContainer, DropDownItem } from './NavStyles'

const Navigation = (props) => (
  <DropDownContainer active={props.isOpen}>
    <DropDownItem href="#hero">♙</DropDownItem>
    <DropDownItem href="#chatbot">♘</DropDownItem>
    <DropDownItem href="#projects">♗</DropDownItem>
    <DropDownItem href="#tech">♖</DropDownItem>
    <DropDownItem href="#about">♕</DropDownItem>
    <DropDownItem href="#accomplishments">♔</DropDownItem>
  </DropDownContainer>
);

export default Navigation
