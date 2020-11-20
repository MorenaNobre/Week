import React from "react";
import { animateScroll as scroll } from "react-scroll";
import { FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";
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
  };

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Links Úteis</FooterLinkTitle>
              <FooterLink
                to="//www.voitto.com.br/blog/artigo/comunicacao-verbal"
                target="_blank"
              >
                Comunicação Verbal
              </FooterLink>
              <FooterLink
                to="//blog.pitagoras.com.br/comunicacao-escrita/"
                target="_blank"
              >
                Comunicação Escrita
              </FooterLink>
              <FooterLink
                to="//www.ibccoaching.com.br/portal/coaching-e-psicologia/quais-os-sinais-e-tipos-de-linguagem-corporal/"
                target="_blank"
              >
                Comunicação Corporal
              </FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Comunicadores</FooterLinkTitle>
              <FooterLink
                to="//www.instagram.com/thaissa.candella/?hl=pt-br"
                target="_blank"
              >
                Thaíssa Candella
              </FooterLink>
              <FooterLink
                to="//www.instagram.com/dorlyneto/?hl=pt-br"
                target="_blank"
              >
                Dorly Neto
              </FooterLink>
              <FooterLink
                to="//www.instagram.com/filipedeschamps/?hl=pt-br"
                target="_blank"
              >
                Filipe Deschamps
              </FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/" onClick={toggleHome}>
              Comuni-k
            </SocialLogo>
            <WebsiteRigths>
              Comuni-k © {new Date().getFullYear()} Todos direitos reservados.
            </WebsiteRigths>
            <SocialIcons>
              <SocialIconLink
                href="//www.instagram.com"
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href="//www.twitter.com"
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href="//www.youtube.com"
                target="_blank"
                aria-label="Youtube"
              >
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink
                href="//www.linkedin.com"
                target="_blank"
                aria-label="Linkedin"
              >
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
