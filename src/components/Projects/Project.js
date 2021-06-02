import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import projects from '../../data/projects';
import { fadeInAndSlideUp } from '../../keyframes';
import Spacer from '../Spacer';
import { xlarge, xsmall, small } from '../../styles/breakpoints';
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
  }
`;

const ContentContainer = styled.div`
  position: relative;
  padding: 5vh 3vw 5vh 1rem;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;

  @media screen and (max-width: ${xlarge}) {
    flex-direction: column;
    padding: 20px;
    margin-top: 70px;
  }
`;

const Content = styled.div`
  margin-right: 40px;
  width: calc(50% - 40px);
  min-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (max-width: ${xlarge}) {
    margin-right: 0;
    width: 100%;
    min-width: unset;
  }
`;

const Image = styled.img`
  min-width: 300px;
  max-width: 500px;
  width: 40%;
  align-self: center;
  opacity: 0;
  margin-top: 10%;
  animation: 0.8s ${fadeInAndSlideUp} ease 0.8s forwards;

  @media screen and (max-width: ${xlarge}) {
    align-self: flex-start;
  }

  @media screen and (max-width: ${xsmall}) {
    margin: 60px 0 30px;
    align-self: center;
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
          <Spacer size="xl" />
          <Links project={project} />
        </Content>
        <Image src={project.image} alt={project.title} />
      </ContentContainer>
    </Container>
  );
};

export default Project;
