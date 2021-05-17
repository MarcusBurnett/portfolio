import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import {
  Background,
  BackgroundImage,
  HorizontalImageFadeLight,
  VerticalImageFadeLight,
  VerticalImageFadeDark,
  HorizontalImageFadeDark,
} from './BackgroundImageFade';
import { useTheme } from '../context/theme';
import skills from '../data/skills';
import { fadeInAndSlideLeft, fadeInAndSlideUp } from '../keyframes';
import { darkBlue } from '../styles/colors';
import Spacer from './Spacer';
import CardList from './CardList';
import { xsmall } from '../styles/breakpoints';

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  @media screen and (max-width: ${xsmall}) {
    justify-content: flex-start;
    min-height: unset;
  }
`;

const Title = styled.h3`
  font-size: 2.4rem;
  color: ${({ theme }) => (theme === 'dark' ? '#FFFFFF' : darkBlue)};
  transition: color 0.4s ease;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem;
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideUp} ease 0.7s forwards;
`;

const Content = styled.div`
  position: relative;
  padding: 5vh 3vw 5vh 1rem;

  @media screen and (max-width: ${xsmall}) {
    padding: 120px 20px 20px;
  }
`;

const ExperienceContainer = styled.div`
  opacity: 0;
  animation: 0.4s ${fadeInAndSlideUp} ease 0.5s forwards;
`;

const UsedContainer = styled.div`
  opacity: 0;
  animation: 0.4s ${fadeInAndSlideUp} ease 0.6s forwards;
`;

const ProjectsContainer = styled.div`
  opacity: 0;
  animation: 0.4s ${fadeInAndSlideUp} ease 0.7s forwards;
`;

const BackgroundImageContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideLeft} ease 0.6s forwards;
`;

const Paragraph = styled.p`
  color: ${({ theme }) => (theme === 'dark' ? '#FFFFFF' : darkBlue)};
  transition: color 0.4s ease;
`;

const StyledCardList = styled(CardList)`
  .styled-card {
    width: 7rem;
    height: 7rem;

    @media screen and (max-width: ${xsmall}) {
      width: 25vw;
      height: 25vw;
    }
  }

  .tooltip {
    @media screen and (max-width: ${xsmall}) {
      top: 12rem;
    }
  }
`;

const SkillDetails = () => {
  const location = useLocation();
  const [skill, setSkill] = useState({});
  const { theme, themeChanging } = useTheme();

  useEffect(() => {
    const timer = setTimeout(() => {
      setSkill(skills.find((s) => s.path === location.pathname) || {});
    }, 500);

    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]);

  return (
    <Container>
      <Background themeChanging={themeChanging}>
        <BackgroundImageContainer>
          <BackgroundImage src={skill.image} alt="background" />
          <VerticalImageFadeLight theme={theme} />
          <HorizontalImageFadeLight theme={theme} />
          <VerticalImageFadeDark theme={theme} />
          <HorizontalImageFadeDark theme={theme} />
        </BackgroundImageContainer>
      </Background>
      <Content>
        <ExperienceContainer>
          <Title theme={theme}>My Experience</Title>
          <Spacer size="s" />
          <Paragraph theme={theme}>{skill.experience}</Paragraph>
        </ExperienceContainer>
        <Spacer size="xxxl" />
        <UsedContainer>
          <Title theme={theme}>Frequently Used</Title>
          <Spacer size="s" />
          <ListContainer>
            <StyledCardList items={skill.used} />
          </ListContainer>
        </UsedContainer>
        <Spacer size="xxxl" />
        <ProjectsContainer>
          <Title theme={theme}>{skill.title} Projects</Title>
          <Spacer size="s" />
          <ListContainer>
            <StyledCardList items={skill.projects} />
          </ListContainer>
        </ProjectsContainer>
        <Spacer size="xxxl" />
      </Content>
    </Container>
  );
};

export default SkillDetails;
