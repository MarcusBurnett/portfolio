import React from 'react';
import styled from 'styled-components/macro';
import Spacer from '../Spacer';
import { useTheme } from '../../context/theme';
import { small, medium } from '../../styles/breakpoints';
import { useThemeSelect, useDynamicColors } from '../../hooks';

const ImageContainer = styled.div`
  width: 60%;
  min-width: 400px;
  max-height: 350px;
  position: absolute;
  right: -3vw;
  top: 0;
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
  transform: ${({ isHidden }) =>
    isHidden ? 'translateX(30%)' : 'translateX(0%)'};
  transform-origin: left;
  transition: all 0.5s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;

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
    rgba(255, 255, 255, 0.3) 50%
  );
  opacity: ${({ opacity }) => opacity};
`;

const VerticalImageFadeLight = styled(ImageFade)`
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.3) 50%
  );
  opacity: ${({ opacity }) => opacity};
`;

const HorizontalImageFadeDark = styled(ImageFade)`
  background: linear-gradient(
    90deg,
    rgba(26, 27, 41, 1) 0%,
    rgba(26, 27, 41, 0.3) 50%
  );
  opacity: ${({ opacity }) => opacity};
`;

const VerticalImageFadeDark = styled(ImageFade)`
  background: linear-gradient(
    0deg,
    rgba(26, 27, 41, 1) 0%,
    rgba(26, 27, 41, 0.3) 50%
  );
  opacity: ${({ opacity }) => opacity};
`;

const Content = styled.div`
  position: relative;
  width: 75%;
  margin-left: 20px;
  margin-top: 40vh;
  transition: all 0.5s ease;
  transform: ${({ isHidden }) => (isHidden ? 'scale(0)' : 'scale(1)')};
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
  transform-origin: bottom left;
  max-width: 500px;

  @media screen and (max-width: ${medium}) {
    width: unset;
  }

  @media screen and (max-width: ${small}) {
    margin-top: 20vh;
  }
`;

const Title = styled.h2`
  font-size: 2.6rem;
  color: ${({ color }) => color};
`;

const Paragraph = styled.p`
  color: ${({ color }) => color};
  max-width: 700px;
  min-width: 300px;
`;

const Background = styled.div`
  opacity: ${({ themeChanging }) => (themeChanging ? 0 : 1)};
  transition: ${({ themeChanging }) =>
    themeChanging ? '' : 'opacity 0.4s ease'};
`;

const TimelineItem = ({ isHidden, item }) => {
  const { themeChanging } = useTheme();
  const opacity = useThemeSelect({ light: 1, dark: 0 }, { light: 0, dark: 1 });
  const { text } = useDynamicColors();

  return (
    <div>
      <Background themeChanging={themeChanging}>
        <ImageContainer isHidden={isHidden}>
          <Image src={item.image} />
          <HorizontalImageFadeLight opacity={opacity.light} />
          <VerticalImageFadeLight opacity={opacity.light} />
          <HorizontalImageFadeDark opacity={opacity.dark} />
          <VerticalImageFadeDark opacity={opacity.dark} />
        </ImageContainer>
      </Background>
      <Content isHidden={isHidden}>
        <Title color={text}>{item.title}</Title>
        <Spacer size="s" />
        <Paragraph color={text}>{item.content}</Paragraph>
      </Content>
    </div>
  );
};

export default TimelineItem;
