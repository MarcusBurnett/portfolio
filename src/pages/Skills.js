import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
import { Redirect, useLocation } from 'react-router-dom';
import List from '../components/Skills/List';
import Details from '../components/Skills/Details';
import skills from '../data/skills';
import AnimatedRoute from '../components/navigation/AnimatedRoute';
import { large, xsmall } from '../styles/breakpoints';
import BackgroundImageFade from '../components/BackgroundImageFade';
import { fadeInAndSlideLeft } from '../keyframes';
import { skillsBackground } from '../assets/images';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  max-height: 600px;
  display: flex;
  flex: 1;
  overflow: hidden;

  @media screen and (max-width: ${large}) {
    max-height: unset;
  }

  @media screen and (max-width: ${xsmall}) {
    padding-top: 90px;
    flex-direction: column;
  }
`;

const ListContainer = styled.div`
  width: 30%;
  position: relative;
  min-width: 130px;

  @media screen and (max-width: ${xsmall}) {
    width: 100%;
    overflow: scroll;
    margin-bottom: 30px;
    padding: 10px;
    min-height: 17rem;
  }
`;

const DetailsContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 70%;
  position: relative;
  min-height: 100vh;

  @media screen and (max-width: ${xsmall}) {
    width: 100%;
  }
`;

const BackgroundImageContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideLeft} ease 0.7s forwards;
`;

const Skills = () => {
  const { pathname } = useLocation();

  if (
    pathname === '/skills' ||
    (pathname.includes('/skills') &&
      !skills.find((skill) => pathname === skill.path))
  ) {
    return <Redirect to="/skills/react" />;
  }

  return (
    <Container>
      <ListContainer>
        <List />
      </ListContainer>
      <DetailsContainer>
        <BackgroundImageContainer>
          <BackgroundImageFade
            image={skillsBackground}
            alt="skills background"
          />
        </BackgroundImageContainer>
        {skills.map((skill) => (
          <Fragment key={skill.title}>
            <AnimatedRoute path={skill.path} Component={Details} />
          </Fragment>
        ))}
      </DetailsContainer>
    </Container>
  );
};

export default Skills;
