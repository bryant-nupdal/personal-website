import React from 'react';
import { ConnectContainer, ConnectWrapper, Heading, TopLine } from './ConnectElements';


const ConnectSection = () => {
  return (
    <ConnectContainer >
      <ConnectWrapper>
        <TopLine>THANKS FOR VIEWING MY WORK</TopLine>
        <Heading>Say Hello, my contact info is linked below</Heading>
        {/* <Subtitle>My contact information is linked below</Subtitle> */}
      </ConnectWrapper>
    </ConnectContainer>
  )
}

export default ConnectSection;