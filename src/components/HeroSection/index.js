import React, {useState} from 'react';
import Video from '../../videos/Video.mp4';
import { HeroContainer, HeroBg, VideoBg, HeroContent, HeroH1, HeroP, HeroBtnWrapper ,ArrowForward, ArrowRight } from './HeroElements';
import { Button } from '../ButtonElements';

const HeroSection = () => {

  const [hover, setHover] = useState(false);

  const onHover = () => {
    setHover( !hover );
  }

  return (
    <HeroContainer id="home">
        <HeroBg>
            <VideoBg autoPlay loop muted src={Video} type='video/mp4' />
        </HeroBg>
        <HeroContent>
            <HeroH1>Bryant Nupdal</HeroH1>
            <HeroP>Full Stack Software Engineer</HeroP>
            <HeroBtnWrapper>
              <Button to="about" onMouseEnter={onHover} onMouseLeave={onHover} primary="true" dark="true">

                Get To Know Me {hover ? <ArrowForward /> : <ArrowRight />}
              </Button>
            </HeroBtnWrapper>
        </HeroContent>
    </HeroContainer>
  )
}

export default HeroSection