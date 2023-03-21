import React from 'react';
import styled from 'styled-components/macro';
import Details from '../components/MyStory/Details';
import { small } from '../styles/breakpoints';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 3vh 3vw;
  overflow: hidden;

  @media screen and (max-width: ${small}) {
    min-height: 100vh;
    padding: 70px 20px 40px;
  }
`;

const AboutMe = () => (
  <Container>
    <Details />
  </Container>
);

export default AboutMe;
