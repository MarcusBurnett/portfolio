import React from 'react';
import styled from 'styled-components/macro';
import { fadeInAndSlideLeft } from '../../keyframes';

const BackgroundImageContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  max-height: 60%;
  max-width: 50%;
  overflow: hidden;
  opacity: 0;
  animation: 1s ${fadeInAndSlideLeft} ease 0.5s forwards;
`;

const BackgroundImage = styled.img`
  max-height: 120%;
  max-width: 100%;
`;

const ImageFade = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  right: 0;
`;

const HorizontalImageFade = styled(ImageFade)`
  background: ${({ side, rgb }) => `linear-gradient(
    90deg,
    rgba(${rgb?.r || 0}, ${rgb?.g || 0}, ${rgb?.b || 0}, ${
    side === 'right' ? 0.3 : 1
  }) 0%,
    rgba(${rgb?.r || 0}, ${rgb?.g || 0}, ${rgb?.b || 0}, ${
    side === 'right' ? 1 : 0.3
  }) 100%
  )`};
`;

const VerticalImageFade = styled(ImageFade)`
  background: ${({ side, rgb }) => `linear-gradient(
    0deg,
    rgba(${rgb?.r || 0}, ${rgb?.g || 0}, ${rgb?.b || 0}, ${
    side === 'right' ? 0.3 : 1
  }) 0%,
    rgba(${rgb?.r || 0}, ${rgb?.g || 0}, ${rgb?.b || 0}, ${
    side === 'right' ? 1 : 0.3
  }) 100%
  )`};
`;

const ProjectBackgroundImage = ({ project }) => (
  <BackgroundImageContainer>
    <BackgroundImage src={project.backgroundImage} alt="background" />
    {project.colors?.rgb && (
      <>
        <VerticalImageFade rgb={project.colors?.rgb} />
        <HorizontalImageFade rgb={project.colors?.rgb} />
      </>
    )}
  </BackgroundImageContainer>
);

export default ProjectBackgroundImage;
