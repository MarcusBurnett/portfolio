import React from 'react';
import styled from 'styled-components/macro';
import { arrowIcon, arrowIconBlue } from '../../assets/images';
import timelineItems from '../../data/timeline';
import useDynamicColors from '../../hooks/useDynamicColors';
import useThemeSelect from '../../hooks/useThemeSelect';

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

const CurrentSlide = styled.span`
  color: ${({ color }) => color};
  min-width: 5rem;
  text-align: center;
`;

const MyStoryTimeline = ({
  setTimelineMoving,
  currentSlideIndex,
  setCurrentSlideIndex,
}) => {
  const { text } = useDynamicColors();
  const arrow = useThemeSelect(arrowIconBlue, arrowIcon);

  const handleMoveTimeline = (direction) => {
    setTimelineMoving(true);
    setTimeout(() => {
      setCurrentSlideIndex((prev) =>
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
    <Controls>
      <Arrow
        onClick={
          currentSlideIndex > 0 ? () => handleMoveTimeline('back') : undefined
        }
        disabled={currentSlideIndex === 0}
        src={arrow}
        side="left"
        onKeyPress={
          currentSlideIndex > 0
            ? (event) => event.key === 'Enter' && handleMoveTimeline('back')
            : undefined
        }
        tabIndex={0}
      />
      <CurrentSlide color={text}>
        {currentSlideIndex + 1} of {timelineItems.length}
      </CurrentSlide>
      <Arrow
        onClick={
          currentSlideIndex < timelineItems.length - 1
            ? () => handleMoveTimeline('forward')
            : undefined
        }
        disabled={currentSlideIndex === timelineItems.length - 1}
        src={arrow}
        side="right"
        onKeyPress={
          currentSlideIndex < timelineItems.length - 1
            ? (event) => event.key === 'Enter' && handleMoveTimeline('forward')
            : undefined
        }
        tabIndex={0}
      />
    </Controls>
  );
};

export default MyStoryTimeline;
