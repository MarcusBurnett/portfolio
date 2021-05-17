import React, { Fragment, useState } from 'react';
import styled from 'styled-components/macro';
import { Redirect, useLocation } from 'react-router-dom';
import SlideIndicator from '../components/SlideIndicator';
import projects from '../data/projects';
import Project from '../components/Project';
import AnimatedRoute from '../components/AnimatedRoute';
import { small } from '../styles/breakpoints';
import { midnightBlue } from '../styles/colors';
import { useTheme } from '../context/theme';
import ProjectsList from '../components/ProjectList';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex: 1;
  padding-left: 20px;
  background-color: ${({ theme }) =>
    theme === 'dark' ? midnightBlue : '#FFFFFF'};

  @media screen and (max-width: ${small}) {
    flex-direction: column;
    padding-left: 0;
  }
`;

const ProjectContainer = styled.div`
  flex: 1;
  height: 100%;
  position: relative;
`;

const SlideIndicatorContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  justify-content: center;
  z-index: 2;
  width: 40px;
  align-items: center;
  position: fixed;

  @media screen and (max-width: ${small}) {
    width: 100vw;
    height: 80px;
    padding-top: 20px;
    bottom: 0;
    background: linear-gradient(
      rgba(26, 27, 41, 0) 0%,
      rgba(26, 27, 41, 1) 100%
    );
  }
`;

const Projects = () => {
  const { pathname } = useLocation();
  const { theme } = useTheme();
  const [listOpen, setListOpen] = useState(false);

  if (pathname === '/projects') {
    return <Redirect to="/projects/airtime-rewards" />;
  }

  return (
    <Container theme={theme}>
      <SlideIndicatorContainer>
        <SlideIndicator slides={projects} openList={() => setListOpen(true)} />
      </SlideIndicatorContainer>
      <ProjectContainer>
        {projects.map((project) => (
          <Fragment key={project.title}>
            <AnimatedRoute path={project.path} Component={Project} />
          </Fragment>
        ))}
      </ProjectContainer>
      <ProjectsList
        isOpen={listOpen}
        toggle={() => setListOpen((prev) => !prev)}
      />
    </Container>
  );
};

export default Projects;
