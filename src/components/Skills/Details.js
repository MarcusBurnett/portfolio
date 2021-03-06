import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components/macro';
import skills from '../../data/skills';
import { fadeInAndSlideUp } from '../../keyframes';
import Spacer from '../Spacer';
import CardList from '../CardList';
import { large, medium, xsmall } from '../../styles/breakpoints';
import useDynamicColors from '../../hooks/useDynamicColors';

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

  @media screen and (min-width: ${large}) and (min-height: ${medium}) {
    min-height: 800px;
    max-height: 1000px;
  }
`;

const Title = styled.h3`
  font-size: 2.4rem;
  color: ${({ color }) => color};
  transition: color 0.4s ease;
`;

const ListContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -1rem;
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideUp} ease 0.5s forwards;
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
  animation: 0.4s ${fadeInAndSlideUp} ease 0.6s forwards;
`;

const UsedContainer = styled.div`
  opacity: 0;
  animation: 0.4s ${fadeInAndSlideUp} ease 0.3s forwards;
`;

const ProjectsContainer = styled.div`
  opacity: 0;
  animation: 0.4s ${fadeInAndSlideUp} ease 0.4s forwards;
`;

const Paragraph = styled.p`
  color: ${({ color }) => color};
  transition: color 0.5s ease;
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

const Details = () => {
  const location = useLocation();
  const [skill, setSkill] = useState({});
  const { text } = useDynamicColors();

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
      <Content>
        <ExperienceContainer>
          <Title color={text}>My Experience</Title>
          <Spacer size="s" />
          <Paragraph color={text}>{skill.experience}</Paragraph>
        </ExperienceContainer>
        {skill.used?.length > 0 && (
          <>
            <Spacer size="xxxl" />
            <UsedContainer>
              <Title color={text}>Frequently Used</Title>
              <Spacer size="s" />
              <ListContainer>
                <StyledCardList items={skill.used} />
              </ListContainer>
            </UsedContainer>
          </>
        )}
        {skill.projects?.length > 0 && (
          <>
            <Spacer size="xxxl" />
            <ProjectsContainer>
              <Title color={text}>{skill.title} Projects</Title>
              <Spacer size="s" />
              <ListContainer>
                <StyledCardList items={skill.projects} />
              </ListContainer>
            </ProjectsContainer>
          </>
        )}
        <Spacer size="s" />
      </Content>
    </Container>
  );
};

export default Details;
