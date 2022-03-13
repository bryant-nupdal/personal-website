import React from 'react';
import {FaBars} from 'react-icons/fa';
import { Nav, NavbarContainer, NavLogo, MobileIcon, NavMenu, NavItem, NavLinks, NavBtn} from './NavbarElements';
import logo from './logo.png';


const  Navbar = ({toggle}) => {
  return (
    <>
        <Nav>
            <NavbarContainer>
                <NavLogo to='/'>
                   <img src={logo} alt='stock-developer.png' className='nav-logo'/>
                </NavLogo>
                <MobileIcon onClick={toggle} >
                    <FaBars />
                </MobileIcon>
                <NavMenu>
                    <NavItem>
                        <NavLinks to="about">My Story</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="projects">Featured Projects</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="skills">Technologies</NavLinks>
                    </NavItem>
                    <NavItem>
                        <NavLinks to="connect">Connect With Me</NavLinks>
                    </NavItem>
                </NavMenu>
                <NavBtn>
                    {/* <NavBtnLink to='/connect'>Connect With Me</NavBtnLink> */}
                </NavBtn>
            </NavbarContainer>
        </Nav>
    </>
  );
}

export default Navbar
