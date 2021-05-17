import React from 'react';
import styled from 'styled-components/macro';
import { darkBlue } from '../../styles/colors';
import Spacer from '../Spacer';
import { useTheme } from '../../context/theme';
import { small } from '../../styles/breakpoints';

const ImageContainer = styled.div`
  width: 60%;
  min-width: 400px;
  position: absolute;
  right: -3vw;
  top: 0;
  transform: ${({ isHidden }) =>
    isHidden ? 'translateX(100%)' : 'translateX(0%)'};
  transform-origin: left;
  transition: transform 0.5s ease;

  @media screen and (max-width: ${small}) {
    right: -20px;
  }
`;

const Image = styled.img`
  width: 100%;
`;

const ImageFade = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  transition: opacity 0.4s ease;
`;

const HorizontalImageFadeLight = styled(ImageFade)`
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  opacity: ${({ theme }) => (theme === 'light' ? 1 : 0)};
`;

const VerticalImageFadeLight = styled(ImageFade)`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.3) 100%
  );
  opacity: ${({ theme }) => (theme === 'light' ? 1 : 0)};
`;

const HorizontalImageFadeDark = styled(ImageFade)`
  background: linear-gradient(
    90deg,
    rgba(26, 27, 41, 1) 0%,
    rgba(26, 27, 41, 0.3) 100%
  );
  opacity: ${({ theme }) => (theme === 'dark' ? 1 : 0)};
`;

const VerticalImageFadeDark = styled(ImageFade)`
  background: linear-gradient(
    0deg,
    rgba(26, 27, 41, 1) 0%,
    rgba(26, 27, 41, 0.3) 100%
  );
  opacity: ${({ theme }) => (theme === 'dark' ? 1 : 0)};
`;

const Content = styled.div`
  position: relative;
  width: 60%;
  margin-left: 20px;
  margin-top: 10vh;
  transition: all 0.5s ease;
  transform: ${({ isHidden }) => (isHidden ? 'scale(0)' : 'scale(1)')};
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
  transform-origin: bottom left;

  @media screen and (max-width: ${small}) {
    margin-top: 120px;
  }
`;

const Title = styled.h2`
  font-size: 2.6rem;
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : darkBlue)};
`;

const Paragraph = styled.p`
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : darkBlue)};
  max-width: 700px;
  min-width: 300px;
`;

const Background = styled.div`
  opacity: ${({ themeChanging }) => (themeChanging ? 0 : 1)};
  transition: ${({ themeChanging }) =>
    themeChanging ? '' : 'opacity 0.4s ease'};
`;

const TimelineItem = ({ isHidden, item }) => {
  const { theme, themeChanging } = useTheme();

  return (
    <div>
      <Background themeChanging={themeChanging}>
        <ImageContainer isHidden={isHidden}>
          <Image src={item.image} />
          <HorizontalImageFadeLight theme={theme} />
          <VerticalImageFadeLight theme={theme} />
          <HorizontalImageFadeDark theme={theme} />
          <VerticalImageFadeDark theme={theme} />
        </ImageContainer>
      </Background>
      <Content isHidden={isHidden}>
        <Title theme={theme}>{item.title}</Title>
        <Spacer size="s" />
        <Paragraph theme={theme}>{item.content}</Paragraph>
      </Content>
    </div>
  );
};

export default TimelineItem;
