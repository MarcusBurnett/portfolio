import React from 'react';
import styled from 'styled-components/macro';
import { useTheme } from '../context/theme';
import { small } from '../styles/breakpoints';

const StyledWrapper = styled.div`
  display: flex;
  flex: 1;
  margin: 0 auto;
  min-height: 100vh;
  width: 100vw;

  @media screen and (max-width: ${small}) {
    flex-direction: column;
  }
`;

const Wrapper = ({ children }) => {
  const { theme } = useTheme();

  return (
    <StyledWrapper id="wrapper" theme={theme}>
      {children}
    </StyledWrapper>
  );
};

export default Wrapper;
