import React from 'react';
import styled from 'styled-components/macro';
import MyStoryDetails from '../components/MyStoryDetails';
import MyStoryTimeline from '../components/MyStoryTimeline';
import Spacer from '../components/Spacer';
import { small } from '../styles/breakpoints';

const Container = styled.div`
  width: 100%;
  min-height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5vh 3vw;
  overflow: hidden;

  @media screen and (max-width: ${small}) {
    min-height: 100vh;
    padding: 90px 20px 20px;
  }
`;

const MyStory = () => (
  <Container>
    <MyStoryDetails />
    <Spacer size="xxxl" />
    <MyStoryTimeline />
  </Container>
);

export default MyStory;
