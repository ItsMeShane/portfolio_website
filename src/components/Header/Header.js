import Link from 'next/link';
import React from 'react';
import {AiFillGithub, AiFillInstagram, AiFillLinkedin, AiFillYoutube} from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import {HeaderNav, Div1, Div2, Div3, NavLink, SocialIcons, Span} from './HeaderStyles';

const Header = () =>  (
  <HeaderNav>
      <Div1>
          <Link href={"/"}>
              <a style={{display: "flex", alignItems: "center", color: "white", marginBottom: "20px"}}>
                  <DiCssdeck size={"3rem"}/> <Span>Portfolio</Span>
              </a>
          </Link>
      </Div1>
      <Div2>
          <li>
              <Link href={"#projects"}>
                  <NavLink>Projects</NavLink>
              </Link>
          </li>
          <li>
              <Link href={"#tech"}>
                  <NavLink>Technologies</NavLink>
              </Link>
          </li>
          <li>
              <Link href={"#about"}>
                  <NavLink>About</NavLink>
              </Link>
          </li>
      </Div2>
      <Div3>
          <SocialIcons href={"https://github.com/ItsMeShane"}>
              <AiFillGithub size={"3rem"}/>
          </SocialIcons>
          <SocialIcons href={"https://www.linkedin.com/in/shane-field/"}>
              <AiFillLinkedin size={"3rem"}/>
          </SocialIcons>
          <SocialIcons href={"https://www.youtube.com/@shanefield8970"}>
              <AiFillYoutube size={"3rem"}/>
          </SocialIcons>
      </Div3>
  </HeaderNav>
);

export default Header;
