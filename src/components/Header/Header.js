import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillLinkedin,AiFillMediumSquare } from 'react-icons/ai';
import { FaChevronUp } from "react-icons/fa";

import { Container, Div1, Div2, Div3, NavLink, SocialIcons,Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href='/arturo-portfolio'>
        <a style={{display:'flex',alignItems:'center',color:'white',marginBottom:'20px'}}>
          <FaChevronUp size='3rem'/><Span>Arturo Rey</Span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="arturo-portfolio/#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="arturo-portfolio/#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="arturo-portfolio/#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://arturorey.Medium.com">
        <AiFillMediumSquare size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/ingarturorey/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://github.com/AReyH/">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
