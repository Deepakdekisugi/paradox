import React from 'react';
import styled from 'styled-components';


import { Container, Heading, Footer, LoaderContainer, Loader } from 'components';
const ProjectSection = () => (
  <ProjectsContainer>
  <Heading gradient>
    Browse Our Recent</Heading>
    <Heading gradient>Projects</Heading>
    
    <ProjectList>
      <ProjectContainer>
        <ColorContainer>
          <div className="article-container">
            <ProjectImg
              src='./images/project-1.png'
              alt="Project 1"
              className="project-img"
            />
          </div>
          <ProjectTitle>Blog App</ProjectTitle>
          <ButtonContainer>
            <ProjectButton onClick={() => window.location.href='https://github.com/AnukulPr1me/React-Blog-App'}>
              Github
            </ProjectButton>
            <ProjectButton onClick={() => window.location.href='https://github.com/'}>
              Live Demo
            </ProjectButton>
          </ButtonContainer>
        </ColorContainer>
      </ProjectContainer>
      <ProjectContainer>
        <ColorContainer>
          <div className="article-container">
            <ProjectImg
              src='./images/project-2.png'
              alt="Project 2"
              className="project-img"
            />
          </div>
          <ProjectTitle>Chat App</ProjectTitle>
          <ButtonContainer>
            <ProjectButton onClick={() => window.location.href='https://github.com/'}>
              Github
            </ProjectButton>
            <ProjectButton onClick={() => window.location.href='https://github.com/'}>
              Live Demo
            </ProjectButton>
          </ButtonContainer>
        </ColorContainer>
      </ProjectContainer>
      <ProjectContainer>
        <ColorContainer>
          <div className="article-container">
            <ProjectImg
              src='./images/project-1.png'
              alt="Project 1"
              className="project-img"
            />
          </div>
          <ProjectTitle>Blog App</ProjectTitle>
          <ButtonContainer>
            <ProjectButton onClick={() => window.location.href='https://github.com/AnukulPr1me/React-Blog-App'}>
              Github
            </ProjectButton>
            <ProjectButton onClick={() => window.location.href='https://github.com/'}>
              Live Demo
            </ProjectButton>
          </ButtonContainer>
        </ColorContainer>
      </ProjectContainer>
      <ProjectContainer>
        <ColorContainer>
          <div className="article-container">
            <ProjectImg
              src='./images/project-1.png'
              alt="Project 1"
              className="project-img"
            />
          </div>
          <ProjectTitle>Blog App</ProjectTitle>
          <ButtonContainer>
            <ProjectButton onClick={() => window.location.href='https://github.com/AnukulPr1me/React-Blog-App'}>
              Github
            </ProjectButton>
            <ProjectButton onClick={() => window.location.href='https://github.com/'}>
              Live Demo
            </ProjectButton>
          </ButtonContainer>
        </ColorContainer>
      </ProjectContainer>
    </ProjectList>
  </ProjectsContainer>
);

const ProjectsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectList = styled.div`
  display: flex;
  gap: 20px;
   flex-wrap: wrap;
    justify-content: space-around;
`;

const ProjectContainer = styled.div`
  border-radius: 10px;
`;

const ColorContainer = styled.div`
  border: 1px solid rgb(163, 163, 163);
  background: rgb(250, 250, 250);
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px; /* Add border radius to container */
`;

const ProjectImg = styled.img`
  border-radius: 10px; /* Add border radius to project image */
  width: 300px; /* Adjust size as needed */
  height: 200px; /* Adjust size as needed */
  object-fit: cover; /* Ensure image doesn't stretch */
`;

const ProjectTitle = styled.h2`
  margin: 1rem;
  color: black;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const ProjectButton = styled.button`
  margin: 0.5rem;
  color: black;
  border: 1px solid rgb(163, 163, 163);
  border-radius: 5px;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

export default ProjectSection;
