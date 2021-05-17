import React from 'react';
import styled from 'styled-components/macro';
import useDynamicColors from '../hooks/useDynamicColors';

const StyledAnimatedRouteContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: ${({ page }) => page};
  transition: background-color 0.4s ease;
  overflow: hidden;

  .page {
    height: 100%;
    width: 100%;
  }

  .page-enter {
    opacity: 0;
    transform: scale(1.1);
  }

  .page-enter-active {
    opacity: 1;
    transform: scale(1);
    transition: opacity 500ms, transform 500ms;
    position: absolute;
    left: 0;
    top: 0;
  }

  .page-exit {
    opacity: 1;
    transform: scale(1);
  }

  .page-exit-active {
    opacity: 0;
    transform: scale(0.9);
    transition: opacity 500ms, transform 500ms;
    position: absolute;
    left: 0;
    top: 0;
  }
`;

const AnimatedRouteContainer = ({ children }) => {
  const { page } = useDynamicColors();

  return (
    <StyledAnimatedRouteContainer backgroundColor={page}>
      {children}
    </StyledAnimatedRouteContainer>
  );
};

export default AnimatedRouteContainer;
