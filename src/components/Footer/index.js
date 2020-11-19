import React from "react";
import { animateScroll as scroll} from 'react-scroll'
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkItems,
  FooterLinkTitle,
  FooterLink,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRigths,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Lorem Ipsum</FooterLinkTitle>
              <FooterLink to="/">Lorem</FooterLink>
              <FooterLink to="/">Ipsum</FooterLink>
              <FooterLink to="/">Dolor</FooterLink>
              <FooterLink to="/">Sit</FooterLink>
              <FooterLink to="/">Amet</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Lorem Ipsum</FooterLinkTitle>
              <FooterLink to="/">Lorem</FooterLink>
              <FooterLink to="/">Ipsum</FooterLink>
              <FooterLink to="/">Dolor</FooterLink>
              <FooterLink to="/">Sit</FooterLink>
              <FooterLink to="/">Amet</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Lorem Ipsum</FooterLinkTitle>
              <FooterLink to="/">Lorem</FooterLink>
              <FooterLink to="/">Ipsum</FooterLink>
              <FooterLink to="/">Dolor</FooterLink>
              <FooterLink to="/">Sit</FooterLink>
              <FooterLink to="/">Amet</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Lorem Ipsum</FooterLinkTitle>
              <FooterLink to="/">Lorem</FooterLink>
              <FooterLink to="/">Ipsum</FooterLink>
              <FooterLink to="/">Dolor</FooterLink>
              <FooterLink to="/">Sit</FooterLink>
              <FooterLink to="/">Amet</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>Lorem</SocialLogo>
            <WebsiteRigths>
              Lorem © {new Date().getFullYear()} All rights reserved.
            </WebsiteRigths>
            <SocialIcons>
              <SocialIconLink href="/" target="_blank" aria-label="Facebook">
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Instagram">
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Twitter">
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Youtube">
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href="/" target="_blank" aria-label="Linkedin">
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
