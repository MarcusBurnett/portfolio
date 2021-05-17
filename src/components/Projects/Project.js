import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import projects from '../../data/projects';
import { fadeInAndSlideUp } from '../../keyframes';
import Spacer from '../Spacer';
import { large, xsmall, small } from '../../styles/breakpoints';
import BackgroundImage from './BackgroundImage';
import Details from './Details';
import Links from './Links';

const Container = styled.div`
  flex: 1;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: ${({ backgroundColor }) => backgroundColor};
  margin-left: -60px;
  padding-left: 110px;
  transition: background-color 0.3s ease;
  overflow: hidden;

  @media screen and (max-width: ${small}) {
    padding-bottom: 50px;
  }

  @media screen and (max-width: ${xsmall}) {
    width: 100vw;
    margin-left: 0;
    padding-left: 0;
    margin-top: -90px;
  }
`;

const ContentContainer = styled.div`
  position: relative;
  padding: 5vh 3vw 5vh 1rem;
  display: flex;

  @media screen and (max-width: ${large}) {
    flex-direction: column;
    padding: 20px;
  }
`;

const Content = styled.div`
  width: 50%;
  margin-right: 10%;

  @media screen and (max-width: ${large}) {
    width: 100%;
    order: 2;
  }
`;

const Image = styled.img`
  max-width: 45%;
  align-self: flex-end;
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideUp} ease 0.8s forwards;

  @media screen and (max-width: ${large}) {
    max-width: 300px;
    order: 1;
    margin: 20px 0 -50px;
  }

  @media screen and (max-width: ${xsmall}) {
    max-width: 80%;
    margin: 190px 0 30px;
  }
`;

const Project = () => {
  const location = useLocation();
  const [project, setProject] = useState({});

  useEffect(() => {
    setTimeout(() => {
      setProject(projects?.find((s) => s.path === location.pathname));
    }, 500);
  }, [location.pathname]);

  if (!project) return null;

  return (
    <Container backgroundColor={project.colors?.background}>
      <BackgroundImage project={project} />
      <ContentContainer>
        <Content>
          <Details project={project} />
          <Spacer size="xxxl" />
          <Links project={project} />
        </Content>
        <Image src={project.image} alt={project.title} />
      </ContentContainer>
    </Container>
  );
};

export default Project;
