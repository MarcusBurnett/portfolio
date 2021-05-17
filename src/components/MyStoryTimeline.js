import React, { Fragment, useState } from 'react';
import styled from 'styled-components/macro';
import { arrowIcon, arrowIconBlue } from '../assets/images';
import { darkBlue, red } from '../styles/colors';
import Spacer from './Spacer';
import timelineItems from '../data/timeline';
import { useTheme } from '../context/theme';
import { small } from '../styles/breakpoints';
import { fadeInAndSlideUp } from '../keyframes';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  flex: 1;
  padding-left: 20px;
  justify-content: space-between;
  width: 100%;
  opacity: 0;
  animation: 0.6s ${fadeInAndSlideUp} 0.6s ease forwards;
  min-height: 400px;

  @media screen and (max-width: ${small}) {
    min-height: 550px;
  }
`;

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

const Line = styled.div`
  height: 4px;
  background: ${({ isActive }) =>
    isActive
      ? `linear-gradient(
    90deg,
    rgba(221, 84, 42, 0) 0%,
    rgba(221, 84, 42, 1) 50%,
    rgba(221, 84, 42, 0) 100%
  )`
      : `linear-gradient(
    90deg,
    rgba(108, 108, 108, 0) 0%,
    rgba(108, 108, 108, 1) 50%,
    rgba(108, 108, 108, 0) 100%
  )`};
  border-radius: 50%;
  width: 600px;
  opacity: ${({ scale }) => scale};
  transform: ${({ scale }) => `scale(${scale})`};
  transition: all 1s ease;
`;

const LargeCircle = styled.div`
  width: 70px;
  height: 70px;
  background: ${({ isActive }) =>
    isActive
      ? `radial-gradient(
    circle,
    rgba(221, 84, 42, 0.48) 0%,
    rgba(221, 84, 42, 0.82) 100%
  )`
      : `radial-gradient(
    circle,
    rgba(108, 108, 108, 0.48) 0%,
    rgba(108, 108, 108, 0.82) 100%
  )`};
  border: 2px solid ${({ isActive }) => (isActive ? red : '#6C6C6C')};
  border-radius: 50%;
  box-shadow: 0 0 0 10px
    ${({ isActive }) =>
      isActive ? 'rgba(221, 84, 42)' : 'rgba(108, 108, 108, 0.3)'};
  transform: rotateY(10deg) rotateX(60deg);
  transition: all 1s ease;
`;

const Timeline = styled.div`
  display: flex;
  align-items: center;
  transform: rotateY(40deg) rotateX(70deg) rotateZ(-20deg)
    ${({ currentIndex }) => `translateX(-${currentIndex * 672}px)`};
  position: absolute;
  bottom: -80px;
  left: -225px;
  transform-origin: bottom left;
  transition: all 1s ease;

  @media screen and (max-width: ${small}) {
    transform: scale(0.8) rotateY(40deg) rotateX(70deg) rotateZ(-20deg)
      ${({ currentIndex }) => `translateX(-${currentIndex * 672}px)`};
    left: -175px;
    bottom: -60px;
  }
`;

const VerticalLine = styled.div`
  width: 1px;
  background-image: linear-gradient(${red} 33%, rgba(255, 255, 255, 0) 0%);
  background-position: center;
  background-size: 5px 8px;
  background-repeat: repeat-y;
  height: calc(100% - 50px);
  transform: ${({ isHidden }) => (isHidden ? 'scaleY(0)' : 'scaleY(1)')};
  transform-origin: bottom;
  transition: transform 0.5s ease;
`;

const SmallCircle = styled.div`
  width: 10px;
  height: 10px;
  border: 1.5px solid ${red};
  border-radius: 50%;
  transform: ${({ isHidden }) =>
    isHidden ? 'translateY(50vh)' : 'translateY(0)'};
  transform-origin: bottom;
  opacity: ${({ isHidden }) => (isHidden ? 0 : 1)};
  transition: all 0.5s ease;
`;

const LineContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: calc(10vh + 1.3rem);

  @media screen and (max-width: ${small}) {
    padding-top: calc(120px + 1.3rem);
  }
`;

const Year = styled.span`
  font-size: 4rem;
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : darkBlue)};
`;

const TimelineCircleContainer = styled.div`
  margin-top: 4.5rem;
  transform: ${({ scale }) => `scale(${scale})`};
  opacity: ${({ scale }) => scale};
  transition: all 1s ease;
`;

const Controls = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  justify-self: flex-end;
`;

const Arrow = styled.img`
  margin: ${({ side }) => (side === 'right' ? '0 0 0 20px' : '0 20px 0 0')};
  transform: ${({ side }) =>
    ` scale(1) rotate(${side === 'right' ? '0deg' : '180deg'})`};
  cursor: ${({ disabled }) => (disabled ? 'not-allowed' : 'pointer')};
  transition: transform 0.1s ease;
  opacity: ${({ disabled }) => (disabled ? 0.5 : 1)};

  &:hover {
    transform: ${({ side, disabled }) =>
      `scale(${disabled ? 1 : 1.1}) rotate(${
        side === 'right' ? '0deg' : '180deg'
      })`};
  }
`;

const Paragraph = styled.p`
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : darkBlue)};
  max-width: 700px;
  min-width: 300px;
`;

const CurrentSlide = styled.span`
  color: ${({ theme }) => (theme === 'dark' ? '#ffffff' : darkBlue)};
  min-width: 5rem;
  text-align: center;
`;

const Background = styled.div`
  opacity: ${({ themeChanging }) => (themeChanging ? 0 : 1)};
  transition: ${({ themeChanging }) =>
    themeChanging ? '' : 'opacity 0.4s ease'};
`;

const MyStoryTimeline = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [timelineMoving, setTimelineMoving] = useState(false);
  const { image, title, content } = timelineItems[currentIndex] ?? {};
  const { theme, themeChanging } = useTheme();

  const handleMoveTimeline = (direction) => {
    setTimelineMoving(true);
    setTimeout(() => {
      setCurrentIndex((prev) =>
        direction === 'back'
          ? Math.max(prev - 1, 0)
          : Math.min(prev + 1, timelineItems.length - 1)
      );
    }, 400);
    setTimeout(() => {
      setTimelineMoving(false);
    }, 1000);
  };

  return (
    <Container>
      <div>
        <Background themeChanging={themeChanging}>
          <ImageContainer isHidden={timelineMoving}>
            <Image src={image} />
            <HorizontalImageFadeLight theme={theme} />
            <VerticalImageFadeLight theme={theme} />
            <HorizontalImageFadeDark theme={theme} />
            <VerticalImageFadeDark theme={theme} />
          </ImageContainer>
        </Background>
        <Content isHidden={timelineMoving}>
          <Title theme={theme}>{title}</Title>
          <Spacer size="s" />
          <Paragraph theme={theme}>{content}</Paragraph>
        </Content>
      </div>
      <div>
        <Timeline currentIndex={currentIndex}>
          {timelineItems.map((item, index) => (
            <Fragment key={index.toString()}>
              <Line
                isActive={currentIndex >= index}
                scale={1 + (currentIndex - index) / timelineItems.length}
              />
              <TimelineCircleContainer
                scale={1 + (currentIndex - index) / timelineItems.length}
              >
                <LargeCircle isActive={currentIndex >= index} />
                <Year isActive={currentIndex >= index}>{item.year}</Year>
              </TimelineCircleContainer>
            </Fragment>
          ))}
        </Timeline>
        <LineContainer>
          <SmallCircle isHidden={timelineMoving} />
          <Spacer />
          <VerticalLine isHidden={timelineMoving} />
        </LineContainer>
      </div>
      <Controls>
        <Arrow
          onClick={
            currentIndex > 0 ? () => handleMoveTimeline('back') : undefined
          }
          disabled={currentIndex === 0}
          src={theme === 'dark' ? arrowIcon : arrowIconBlue}
          side="left"
          onKeyPress={
            currentIndex > 0
              ? (event) => event.key === 'Enter' && handleMoveTimeline('back')
              : undefined
          }
          tabIndex={0}
        />
        <CurrentSlide theme={theme}>
          {currentIndex + 1} of {timelineItems.length}
        </CurrentSlide>
        <Arrow
          onClick={
            currentIndex < timelineItems.length - 1
              ? () => handleMoveTimeline('forward')
              : undefined
          }
          disabled={currentIndex === timelineItems.length - 1}
          src={theme === 'dark' ? arrowIcon : arrowIconBlue}
          side="right"
          onKeyPress={
            currentIndex < timelineItems.length - 1
              ? (event) =>
                  event.key === 'Enter' && handleMoveTimeline('forward')
              : undefined
          }
          tabIndex={0}
        />
      </Controls>
    </Container>
  );
};

export default MyStoryTimeline;
