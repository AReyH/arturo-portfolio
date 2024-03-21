import React from 'react';
import { AiFillGithub, AiFillMediumSquare, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href='mailto:arturo.rey.h@outlook.com'>arturo.rey.h@outlook.com</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Eager to learn more with each passing day</Slogan>
        </CompanyContainer>
        <SocialIcons href="https://arturorey.Medium.com">
        <AiFillMediumSquare size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://www.linkedin.com/in/arturoreyh/">
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href="https://github.com/AReyH/">
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
