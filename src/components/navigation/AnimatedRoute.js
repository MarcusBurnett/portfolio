import React, { useRef } from 'react';
import { Route } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import styled from 'styled-components/macro';

const StyledRoute = styled(Route)`
  width: 100%;
  min-height: 100%;
`;

const AnimatedRoute = ({ path, Component }) => {
  const ref = useRef();

  return (
    <StyledRoute key={path} path={path}>
      {({ match }) => (
        <CSSTransition
          nodeRef={ref}
          in={match != null}
          timeout={500}
          classNames="page"
          unmountOnExit
        >
          <div ref={ref} className="page">
            <Component />
          </div>
        </CSSTransition>
      )}
    </StyledRoute>
  );
};

export default AnimatedRoute;
