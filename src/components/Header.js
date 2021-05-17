import React from 'react';
import styled from 'styled-components/macro';
import { darkBlue, blue } from '../styles/colors';
import Spacer from './Spacer';
import Icons from './Icons';
import Navbar from './navigation/Navbar';
import Background from './Background';
import { small, medium, xsmall } from '../styles/breakpoints';
import { useThemeSelect } from '../hooks';
import { fadeInAndSlideUp } from '../keyframes';

const StyledHeader = styled.div`
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 38%;
  padding: 5vh 0rem 5vh 3vw;
  height: 100vh;
  position: fixed;
  transition: background-color 0.4s ease;
  z-index: 2;

  @media screen and (max-width: ${small}) {
    width: 100%;
    padding: 0;
    justify-content: flex-start;
    padding-bottom: 50px;
    position: relative;
  }

  @media screen and (max-height: 600px) and (min-width: ${small}) {
    flex-direction: row;
    align-items: center;
    flex: 1;
  }
`;

const Container = styled.div`
  z-index: 2;
  margin-top: 10%;
  padding-right: 20px;
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideUp} 0.2s ease forwards;

  @media screen and (max-width: ${small}) {
    align-items: center;
    flex: 1;
    justify-content: space-between;
    padding-right: 0;
  }

  @media screen and (max-height: 600px) and (min-width: ${small}) {
    order: 1;
    margin-top: 0;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: ${small}) {
    align-items: center;
    justify-self: center;
  }
`;

const Title = styled.h1`
  font-size: 5rem;

  @media screen and (max-width: ${medium}) and (min-width: ${small}) {
    font-size: 4rem;
  }

  @media screen and (max-height: ${xsmall}) {
    font-size: 3.5rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 2.5rem;

  @media screen and (max-width: ${medium}) and (max-width: ${small}) {
    font-size: 2rem;
  }

  @media screen and (max-height: ${xsmall}) {
    font-size: 1.8rem;
  }
`;

const Left = () => {
  const backgroundColor = useThemeSelect(blue, darkBlue);

  return (
    <StyledHeader backgroundColor={backgroundColor}>
      <Background />
      <Navbar />
      <Container>
        <div />
        <Content>
          <Title>Marcus Burnett</Title>
          <Spacer size="s" />
          <SubTitle>React &amp; React Native Developer</SubTitle>
          <SubTitle>UX/UI Designer</SubTitle>
          <Spacer size="l" />
        </Content>
        <Icons />
      </Container>
    </StyledHeader>
  );
};

export default Left;
