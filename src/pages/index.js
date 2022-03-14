import { React, useState } from 'react';
import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import InfoSection from '../components/InfoSection';
import { homeObjOne, homeObjThree } from '../components/InfoSection/Data';
import ConnectSection from '../components/ConnectSection';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

const Home = () => {

  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <Navbar toggle={toggle} />
      <HeroSection />
      <InfoSection {...homeObjOne} />
      <Projects />
      {/* <InfoSection {...homeObjTwoOne} />
        <InfoSection {...homeObjTwoTwo} />
        <InfoSection {...homeObjTwoThree} /> */}
      <InfoSection {...homeObjThree} />
      {/* <InfoSection {...homeObjFour} /> */}
      <ConnectSection />
      <Footer />
    </>
  )
}

export default Home;