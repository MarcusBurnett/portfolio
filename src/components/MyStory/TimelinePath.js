import React, { Fragment } from 'react';
import styled from 'styled-components/macro';
import { red } from '../../styles/colors';
import Spacer from '../Spacer';
import { small } from '../../styles/breakpoints';
import useDynamicColors from '../../hooks/useDynamicColors';
import { regular } from '../../styles/fonts';

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
  width: 581px;
  opacity: ${({ scale }) => (scale === 1 ? scale : scale * 0.6)};
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

const StyledTimelinePath = styled.div`
  display: flex;
  align-items: center;
  transform: rotateY(40deg) rotateX(70deg) rotateZ(-20deg)
    ${({ currentIndex }) => `translateX(-${currentIndex * 671 + 2}px)`};
  position: absolute;
  bottom: -80px;
  left: -215px;
  transform-origin: bottom left;
  transition: all 1s ease;

  @media screen and (max-width: ${small}) {
    transform: scale(0.8) rotateY(40deg) rotateX(70deg) rotateZ(-20deg)
      ${({ currentIndex }) => `translateX(-${currentIndex * 671 + 2}px)`};
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
  height: calc(100% - 60px);
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
  padding-top: calc(40vh + 1.3rem);

  @media screen and (max-width: ${small}) {
    padding-top: calc(20vh + 1.3rem);
  }
`;

const Year = styled.span`
  font-size: 4rem;
  font-weight: ${regular};
  color: ${({ color }) => color};
  opacity: ${({ scale }) => (scale === 1 ? scale : scale * 0.6)};
`;

const TimelineCircleContainer = styled.div`
  margin-top: 4.5rem;
  transform: ${({ scale }) => `scale(${scale === 1 ? scale : scale * 0.9})`};
  opacity: ${({ scale }) => (scale === 1 ? scale : scale * 0.3)};
  transition: all 0.5s ease;
`;

const TimelinePath = ({ timelineMoving, currentIndex, items }) => {
  const { text } = useDynamicColors();

  return (
    <div>
      <StyledTimelinePath currentIndex={currentIndex}>
        {items.map((item, index) => {
          const scale = 1 + (currentIndex - index) / items.length;
          const key = index.toString();

          return (
            <Fragment key={key}>
              <Line
                color={text}
                isActive={currentIndex >= index}
                scale={scale}
              />
              <TimelineCircleContainer scale={scale}>
                <LargeCircle isActive={currentIndex >= index} />
                <Year scale={scale} isActive={currentIndex >= index}>
                  {item.year}
                </Year>
              </TimelineCircleContainer>
            </Fragment>
          );
        })}
      </StyledTimelinePath>
      <LineContainer>
        <SmallCircle isHidden={timelineMoving} />
        <Spacer />
        <VerticalLine isHidden={timelineMoving} />
      </LineContainer>
    </div>
  );
};

export default TimelinePath;
