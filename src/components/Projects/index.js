import React from 'react';
import { ProjectContainer, ProjectWrapper, ProjectCard, ProjectIcon, ProjectH1, ProjectH2, ProjectP } from './ProjectElements';
import Icon1 from '../../images/movieLibrary.png';
import Icon2 from '../../images/movieLibrary.png';
import Icon3 from '../../images/ToDoList.png';

const Projects = () => {
    return (
        <ProjectContainer id='projects'>
                <ProjectH1>Projects</ProjectH1>
            <ProjectWrapper>
                <ProjectCard>
                    <ProjectIcon src={Icon1}></ProjectIcon>
                    <ProjectH2>Snow Removal Routing Service</ProjectH2>
                    <ProjectP>Description/why</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon2}></ProjectIcon>
                    <ProjectH2>Movie Gallery</ProjectH2>
                    <ProjectP>Description/why</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon3}></ProjectIcon>
                    <ProjectH2>To Do List</ProjectH2>
                    <ProjectP>Description/why</ProjectP>
                </ProjectCard>
            </ProjectWrapper>
        </ProjectContainer>
    );
}

export default Projects