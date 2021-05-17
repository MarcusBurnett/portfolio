import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
import { Redirect, useLocation } from 'react-router-dom';
import AnimatedRouteContainer from '../components/AnimatedRouteContainer';
import { fadeIn } from '../keyframes';
import AnimatedRoute from '../components/AnimatedRoute';
import { small } from '../styles/breakpoints';
import routes from '../data/routes';

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  position: relative;
  animation: 1s ${fadeIn} ease forwards;
  margin-left: 38%;

  @media screen and (max-width: ${small}) {
    margin-left: 0;
  }
`;

const Pages = () => {
  const { pathname } = useLocation();

  if (pathname === '/') return <Redirect to="/my-story" />;

  return (
    <StyledContent>
      <AnimatedRouteContainer>
        {routes.map(({ path, Component }) => (
          <Fragment key={path}>
            <AnimatedRoute path={path} Component={Component} />
          </Fragment>
        ))}
      </AnimatedRouteContainer>
    </StyledContent>
  );
};

export default Pages;
