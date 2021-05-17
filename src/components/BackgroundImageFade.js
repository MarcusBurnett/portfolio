import styled from 'styled-components/macro';

export const Background = styled.div`
  opacity: ${({ themeChanging }) => (themeChanging ? 0 : 1)};
  transition: ${({ themeChanging }) =>
    themeChanging ? '' : 'opacity 0.4s ease'};
`;

export const BackgroundImage = styled.img`
  max-height: 100%;
  transition: opacity 0.4s ease;
`;

export const ImageFade = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
  transition: opacity 0.4s ease;
`;

export const HorizontalImageFadeDark = styled(ImageFade)`
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
  opacity: ${({ theme }) => (theme === 'dark' ? 1 : 0)};
`;

export const VerticalImageFadeDark = styled(ImageFade)`
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
  opacity: ${({ theme }) => (theme === 'dark' ? 1 : 0)};
`;

export const HorizontalImageFadeLight = styled(ImageFade)`
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
  opacity: ${({ theme }) => (theme === 'light' ? 1 : 0)};
`;

export const VerticalImageFadeLight = styled(ImageFade)`
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
  opacity: ${({ theme }) => (theme === 'light' ? 1 : 0)};
`;
