import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
import { Redirect, useLocation } from 'react-router-dom';
import List from '../components/Skills/List';
import Details from '../components/Skills/Details';
import skills from '../data/skills';
import AnimatedRoute from '../components/navigation/AnimatedRoute';
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

const DetailsContainer = styled.div`
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
