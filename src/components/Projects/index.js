import React from 'react';
import { ProjectContainer, ProjectWrapper, ProjectCard, ProjectIcon, ProjectH1, ProjectH2, ProjectP } from './ProjectElements';
import Icon1 from '../../images/snowApp.png';
import Icon2 from '../../images/movieLibrary.png';
import Icon3 from '../../images/ToDoList.png';

const Projects = () => {
    return (
        <ProjectContainer id='projects'>
            <ProjectH1>Projects</ProjectH1>
            <ProjectWrapper>
                <ProjectCard >
                    <ProjectIcon src={Icon1}>
                    </ProjectIcon>
                    <ProjectH2>Cutting Edge</ProjectH2>
                    <ProjectP>Snow removal routing service that provides employees a user-friendly way to navigate intense snow shifts. It tracks and records timecards for an entire business.</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon2}></ProjectIcon>
                    <ProjectH2>Movie Gallery</ProjectH2>
                    <ProjectP>A gallery of movie posters when clicked, transfers the user to the selected movies page. 
                        the movie's page is then populated with details on the movie that was selected.</ProjectP>
                </ProjectCard>
                <ProjectCard>
                    <ProjectIcon src={Icon3}></ProjectIcon>
                    <ProjectH2>To Do List</ProjectH2>
                    <ProjectP>Full stack application where a user can add a task, 
                        update it by marking the task as complete or not. The user can also 
                        delete the task, if it won't be completed again.</ProjectP>
                </ProjectCard>
            </ProjectWrapper>
        </ProjectContainer>
    );
}

export default Projects;