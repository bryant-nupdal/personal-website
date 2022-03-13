import styled from "styled-components";

export const ConnectContainer = styled.div`
    color: #FFFCF2;
    background: ${({lightBg}) => (lightBg ? '#CCC5B9' : '#252422')};

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`;