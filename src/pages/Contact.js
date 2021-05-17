import React from 'react';
import styled, { keyframes } from 'styled-components/macro';
import { contactBackground } from '../assets/images';
import Spacer from '../components/Spacer';
import { useTheme } from '../context/theme';
import { darkBlue } from '../styles/colors';
import {
  Background,
  BackgroundImage,
  HorizontalImageFadeLight,
  VerticalImageFadeLight,
  VerticalImageFadeDark,
  HorizontalImageFadeDark,
} from '../components/BackgroundImageFade';
import { small, xsmall } from '../styles/breakpoints';
import { fadeInAndSlideRight } from '../keyframes';
import ContactForm from '../forms/ContactForm';

const fadeInAndSlideLeft = keyframes`
0% {
	transform: translateX(20%);
  opacity: 0
}
100% {
	transform: translateX(0%);
  opacity: 1;
}
`;

const Container = styled.div`
  display: flex;
  align-items: flex-end;
  position: relative;
  padding-bottom: 5vh;
  min-height: 100vh;
  overflow: hidden;

  @media screen and (max-width: ${xsmall}) {
    padding-bottom: 0;
    align-items: center;
  }
`;

const Header = styled.h2`
  font-size: 3rem;
  color: ${({ theme }) => (theme === 'dark' ? '#FFFFFF' : darkBlue)};
  transition: color 0.4s ease;

  @media screen and (max-width: ${small}) {
    font-size: 4rem;
  }
`;

const BackgroundImageContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  opacity: 0;
  animation: 1s ${fadeInAndSlideLeft} ease 0.5s forwards;
  height: 80%;
  overflow: hidden;

  @media screen and (max-width: ${small}) {
    max-width: 70%;
  }
`;

const Content = styled.div`
  position: relative;
  width: 70%;
  max-width: 800px;
  padding: 2vh 5vw;
  display: flex;
  flex-direction: column;
  opacity: 0;
  animation: 0.8s ${fadeInAndSlideRight} ease 0.3s forwards;
  min-width: 500px;

  @media screen and (max-width: ${small}) {
    width: 100%;
    min-width: 300px;
    max-width: 450px;
    padding: 20vh 20px 20px;
  }
`;

const Contact = () => {
  const { theme, themeChanging } = useTheme();

  return (
    <Container>
      <Background themeChanging={themeChanging}>
        <BackgroundImageContainer>
          <BackgroundImage src={contactBackground} />
          <VerticalImageFadeLight theme={theme} />
          <HorizontalImageFadeLight theme={theme} />
          <VerticalImageFadeDark theme={theme} />
          <HorizontalImageFadeDark theme={theme} />
        </BackgroundImageContainer>
      </Background>
      <Content>
        <Header theme={theme}>Get In Touch</Header>
        <Spacer size="l" />
        <ContactForm />
      </Content>
    </Container>
  );
};

export default Contact;
