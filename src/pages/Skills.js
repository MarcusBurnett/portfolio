import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
import { Redirect, useLocation } from 'react-router-dom';
import SkillsList from '../components/SkillsList';
import SkillDetails from '../components/SkillDetails';
import skills from '../data/skills';
import AnimatedRoute from '../components/AnimatedRoute';
import { xsmall } from '../styles/breakpoints';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex: 1;
  overflow: hidden;

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
  }
`;

const SkillDetailsContainer = styled.div`
  flex: 1;
  height: 100%;
  width: 70%;
  position: relative;

  @media screen and (max-width: ${xsmall}) {
    width: 100%;
  }
`;

const Skills = () => {
  const { pathname } = useLocation();

  if (pathname === '/skills') {
    return <Redirect to="/skills/react" />;
  }

  return (
    <Container>
      <ListContainer>
        <SkillsList />
      </ListContainer>
      <SkillDetailsContainer>
        {skills.map((skill) => (
          <Fragment key={skill.title}>
            <AnimatedRoute path={skill.path} Component={SkillDetails} />
          </Fragment>
        ))}
      </SkillDetailsContainer>
    </Container>
  );
};

export default Skills;
