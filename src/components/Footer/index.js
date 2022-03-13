import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRights} from './FooterElements';
import logo from './logo.png';

const Footer = () => {
  return (
    <FooterContainer>
        <FooterWrap>
            <SocialMedia>
            <SocialMediaWrap>
                <SocialLogo to='/'>
                    <img src={logo} className='footerLogo'/>
                </SocialLogo>
                <WebsiteRights>Nupdal &copy; {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                <SocialIcons>
                    <SocialIconLink href="//github.com/bryant-nupdal" target="_blank" aria-label="GitHub">
                        <FaGithub />
                    </SocialIconLink>
                    <SocialIconLink href="//www.linkedin.com/in/bryant-nupdal/" target="_blank" aria-label="LinkedIn">
                        <FaLinkedin />
                    </SocialIconLink> 
                </SocialIcons>
            </SocialMediaWrap>
            </SocialMedia>
        </FooterWrap>
    </FooterContainer>
  )
}

export default Footer