import styled from 'styled-components';
import { Link } from 'react-scroll';

export const FooterContainer = styled.footer`
    background-color: #252422;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`
export const SocialLogo = styled(Link)`
    color: #FFFCF2;
    justify-self: start;
    text-direction: none;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
    font-weight: bold;
    height: 30px;
`;

export const WebsiteRights = styled.small`
    color: #FFFCF2;
    margin-bottom: 16px;
    margin-top: 100px;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #FFFCF2;
    font-size: 24px;
`;

export const TopLine = styled.p`
    color: #557755;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;  
`;

export const Heading = styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText}) => (lightText ? '#FFFCF2' : '#252422')};

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;