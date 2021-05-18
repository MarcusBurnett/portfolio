import React from 'react';
import styled from 'styled-components/macro';
import { fadeIn } from '../keyframes';
import { small } from '../styles/breakpoints';

const StyledWrapper = styled.div`
  display: flex;
  flex: 1;
  margin: 0 auto;
  min-height: 100vh;
  width: 100vw;
  opacity: 0;
  animation: 1s ${fadeIn} ease forwards;

  @media screen and (max-width: ${small}) {
    flex-direction: column;
  }
`;

const Wrapper = ({ children }) => (
  <StyledWrapper id="wrapper">{children}</StyledWrapper>
);

export default Wrapper;
