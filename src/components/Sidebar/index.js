import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SideBtnWrap } from './SidebarElements';

const Sidebar = ({isOpen, toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}> 
        <Icon isOpen={isOpen} onClick={toggle}>
            <CloseIcon></CloseIcon>
        </Icon>
        <SidebarWrapper>
            <SidebarMenu>
                <SidebarLink to="about" onClick={toggle}>
                    My Story
                </SidebarLink>
                <SidebarLink to="projects" onClick={toggle}>
                    Featured Projects
                </SidebarLink>
                <SidebarLink to="skills" onClick={toggle}>
                    Technologies
                </SidebarLink>
                <SidebarLink to="connect" onClick={toggle}>
                    Connect With Me
                </SidebarLink>
            </SidebarMenu>
            <SideBtnWrap>
                {/* <SidebarRoute to="/connect">Connect With Me</SidebarRoute> */}
            </SideBtnWrap>
        </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar