import React from 'react';
import styled from 'styled-components/macro';
import { useTheme } from '../context/theme';
import { useThemeSelect } from '../hooks';

const Background = styled.div`
  opacity: ${({ themeChanging }) => (themeChanging ? 0 : 1)};
  transition: ${({ themeChanging }) =>
    themeChanging ? '' : 'opacity 0.5s ease'};
`;

const BackgroundImage = styled.img`
  max-height: 100%;
  transition: opacity 0.4s ease;
`;

const ImageFade = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  transition: opacity 0.4s ease;
`;

const HorizontalImageFadeDark = styled(ImageFade)`
  background: ${({ side = 'right' }) =>
    side === 'right'
      ? `linear-gradient(
    90deg,
    rgba(26, 27, 41, 1) 0%,
    rgba(26, 27, 41, 0.3) 100%
  )`
      : `linear-gradient(
    90deg,
    rgba(26, 27, 41, 0.3) 0%, rgba(26, 27, 41, 1) 100%
  )`};
  opacity: ${({ opacity }) => opacity};
`;

const VerticalImageFadeDark = styled(ImageFade)`
  background: linear-gradient(
    0deg,
    rgba(26, 27, 41, 1) 0%,
    rgba(26, 27, 41, 0.3) 100%
  );
  background: ${({ side = 'right' }) =>
    side === 'right'
      ? `linear-gradient(
    0deg,
    rgba(26, 27, 41, 1) 0%,
    rgba(26, 27, 41, 0.3) 100%
  )`
      : `linear-gradient(
    0deg,
    rgba(26, 27, 41, 0.3) 0%,
    rgba(26, 27, 41, 1) 100%
  )`};
  opacity: ${({ opacity }) => opacity};
`;

const HorizontalImageFadeLight = styled(ImageFade)`
  background: ${({ side = 'right' }) =>
    side === 'right'
      ? `linear-gradient(
    90deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.3) 100%
  )`
      : `linear-gradient(
    90deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 1) 100%
  )`};
  opacity: ${({ opacity }) => opacity};
`;

const VerticalImageFadeLight = styled(ImageFade)`
  background: ${({ side = 'right' }) =>
    side === 'right'
      ? `linear-gradient(
    0deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0.3) 100%
  )`
      : `linear-gradient(
    0deg,
    rgba(255, 255, 255, 0.3) 0%,
    rgba(255, 255, 255, 1) 100%
  )`};
  opacity: ${({ opacity }) => opacity};
`;

const BackgroundImageFade = ({ side, image, alt }) => {
  const { themeChanging } = useTheme();
  const opacity = useThemeSelect({ light: 1, dark: 0 }, { light: 0, dark: 1 });

  return (
    <Background themeChanging={themeChanging}>
      <BackgroundImage src={image} alt={alt} />
      <VerticalImageFadeLight opacity={opacity.light} side={side} />
      <HorizontalImageFadeLight opacity={opacity.light} side={side} />
      <VerticalImageFadeDark opacity={opacity.dark} side={side} />
      <HorizontalImageFadeDark opacity={opacity.dark} side={side} />
    </Background>
  );
};

export default BackgroundImageFade;
