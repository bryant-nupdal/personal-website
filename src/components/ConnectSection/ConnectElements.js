import styled from "styled-components";

export const ConnectContainer = styled.div`
    color: #FFFCF2;
    background: #CCC5B9;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;

export const ConnectWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 350px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
`;

export const TopLine = styled.p`
    color: #3B543B;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-top: 80px;
    margin-bottom: 0px; 
`;

export const Heading = styled.h1`
    margin-bottom: 0px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: #403D39;
    margin-top: 0px;

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-top: 0;
    padding: 0;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;
    color: ${({darkText}) => (darkText ? '#252422' : '#FFFCF2')};
`;