import React from 'react';
import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FooterContainer, FooterWrap, SocialMedia, SocialMediaWrap, SocialLogo, SocialIcons, SocialIconLink, WebsiteRights } from './FooterElements';
import logo from './logo.png';

const Footer = () => {
    return (
        <FooterContainer id='connect'>
            <FooterWrap>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to='/'>
                            <img src={logo} alt='developer-logo' />
                        </SocialLogo>
                        <WebsiteRights>Bryant Nupdal &copy; {new Date().getFullYear()} All Rights Reserved.</WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="//github.com/bryant-nupdal" target="_blank" aria-label="GitHub">
                                <FaGithub />
                            </SocialIconLink>
                            <SocialIconLink href="//www.linkedin.com/in/bryant-nupdal/" target="_blank" aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                            <SocialIconLink href="tel://+218-988-2362" target="_blank" aria-label="Phone">
                                <FaPhone />
                            </SocialIconLink>
                            <SocialIconLink href="mailto:nupdalbryant@icloud.com" target="_blank" aria-label="Email">
                                <FaEnvelope />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer;